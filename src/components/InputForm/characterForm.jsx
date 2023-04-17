import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
import getStoryWithInputData from "../api/getStoryWithInputData";

const CharacterForm = () => {
  const router = useRouter();
  const [numCharacters, setNumCharacters] = useState(1);
  const [characters, setCharacters] = useState([{ name: "", detail: "" }]);

  const nameRefs = useRef([]);
  const roleRefs = useRef([]);
  const situationRef = useRef(null);

  const handleNumChange = (event) => {
    const newNumCharacters = parseInt(event.target.value);
    setNumCharacters(newNumCharacters);
    setCharacters(Array(newNumCharacters).fill({ name: "", detail: "" }));
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;

    setCharacters((prevCharacters) => {
      const newCharacters = JSON.parse(JSON.stringify(prevCharacters));
      newCharacters[index][name] = value;
      return newCharacters;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const submitCharacters = characters.filter(
      (character) => character.name && character.detail
    );
    const situation = situationRef.current.value;
    const inputFullyFilled =
      situation.length !== 0 &&
      submitCharacters.length !== 0 &&
      characters.length === submitCharacters.length;

    if (!inputFullyFilled) {
      alert("모든 입력값을 채워주세요.");
    } else {
      router.push("/story");
      getStoryWithInputData(situation, submitCharacters);
    }
  };

  const getRolePlaceholders = (type, index) => {
    const names = ["예: 둘리", "예: 주호민", "예: 닛몰캐쉬", "예: 콩알이"];
    const roles = [
      "예: 집주인을 괴롭히는 악성 세입자",
      "예: 유튜브가 '아기'로 착각해 억울한 사람",
      "예: 독수리를 사랑하는 중국남자",
      "예: 귀여운 강아지",
    ];

    return type === "name" ? names[index] : roles[index];
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
                placeholder={getRolePlaceholders("name", index)}
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
                placeholder={getRolePlaceholders("detail", index)}
              />
            </div>
          </div>
        ))}

        <div className="w-80 mx-auto grid grid-cols-1 gap-4">
          <button
            type="submit"
            className="bg-primary hover:bg-primary-deep text-white font-bold py-2 px-4 rounded my-2.5"
          >
            만들기
          </button>
        </div>
      </form>
    </div>
  );
};

export default CharacterForm;
