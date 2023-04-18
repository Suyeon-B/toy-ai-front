import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
import getStartWithInputData from "@/src/components/api/getStartWithInputData";
import { getCharactersPlaceholders } from "./getCharactersPlaceholders";
import getFirstStory from "../api/getFirstStory";
import LoadingWithPercent from "../common/loadingWithPercent";
import { useAtom } from "jotai";
import { bookIdAtom } from "@/src/stores/story";
import { storyAtom } from "@/src/stores/story";

const CharacterForm = () => {
  const router = useRouter();
  const [numCharacters, setNumCharacters] = useState(1);
  const [characters, setCharacters] = useState([{ name: "", detail: "" }]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setBookId] = useAtom(bookIdAtom);
  const [story, setStory] = useAtom(storyAtom);

  const nameRefs = useRef([]);
  const roleRefs = useRef([]);
  const situationRef = useRef(null);

  const handleNumChange = (event) => {
    const newNumCharacters = parseInt(event.target.value);
    setNumCharacters(newNumCharacters);

    if (characters.length > newNumCharacters) {
      characters.length = newNumCharacters;
    } else {
      characters.push(
        ...Array(newNumCharacters - characters.length).fill({
          name: "",
          detail: "",
        })
      );
    }
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;

    setCharacters((prevCharacters) => {
      const newCharacters = JSON.parse(JSON.stringify(prevCharacters));
      newCharacters[index][name] = value;
      return newCharacters;
    });
  };

  const getInputData = () => {
    const submitCharacters = characters.filter(
      (character) => character.name && character.detail
    );
    const situation = situationRef.current.value;
    const inputFullyFilled =
      situation.length !== 0 &&
      submitCharacters.length !== 0 &&
      characters.length === submitCharacters.length;

    return { submitCharacters, situation, inputFullyFilled };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const bookId = await startStory();

    if (!bookId) return;
    setFirstStory(bookId);
  };

  const startStory = async () => {
    const { submitCharacters, situation, inputFullyFilled } = getInputData();

    if (!inputFullyFilled) {
      alert("모든 입력값을 채워주세요.");
      return false;
    }

    setIsLoading(true);

    const data = await getStartWithInputData(situation, submitCharacters);

    if (data && data.book_id) {
      return data.book_id;
    }

    setIsLoading(false);
    return false;
  };

  const setFirstStory = async (bookId) => {
    const data = await getFirstStory(bookId);

    if (data && data.message === "success") {
      setBookId(bookId);
      setStory([...story, data.data]);

      router.push("/story");
    }

    setIsLoading(false);
  };

  return (
    <div className="w-80 mx-auto">
      <form onSubmit={handleSubmit}>
        <label htmlFor="situations" className="mr-2">
          상황
        </label>
        <textarea
          type="text"
          id="situation"
          name="situation"
          ref={situationRef}
          className="w-full border border-gray-300 rounded-md px-2 py-1 mb-5"
          placeholder="둘리와 주호민의 민머리왕국 왕위쟁탈전이 시작된다.."
        />
        <label htmlFor="numCharacters" className="mr-2">
          등장인물
        </label>
        <select
          id="numCharacters"
          name="numCharacters"
          value={numCharacters}
          onChange={handleNumChange}
          className="w-full border border-gray-300 rounded-md px-2 py-1 mb-5"
        >
          {[1, 2, 3, 4].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        {characters.map((character, index) => (
          <div
            key={index}
            className="w-full border border-gray-300 rounded-md px-2 py-1 mb-5"
          >
            <div key={index}>
              <label htmlFor="numCharacters" className="mr-2 mt-4">
                이름
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(event) => handleInputChange(event, index)}
                ref={nameRefs.current[index]}
                className="w-full border border-gray-300 rounded-md px-2 py-1 mb-5"
                placeholder={getCharactersPlaceholders("name", index)}
              />
              <label htmlFor="numCharacters" className="mr-2">
                역할
              </label>
              <textarea
                type="text"
                id="detail"
                name="detail"
                onChange={(event) => handleInputChange(event, index)}
                ref={roleRefs.current[index]}
                className="w-full border border-gray-300 rounded-md px-2 py-1 mb-5"
                placeholder={getCharactersPlaceholders("detail", index)}
              />
            </div>
          </div>
        ))}

        {isLoading ? (
          <LoadingWithPercent text="곧 이야기가 시작됩니다... 😇"/>
        ) : (
          <div className="w-80 mx-auto grid grid-cols-1 gap-4">
            <button
              type="submit"
              className="bg-primary hover:bg-primary-deep text-white font-bold py-2 px-4 rounded my-2.5"
            >
              만들기
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default CharacterForm;
