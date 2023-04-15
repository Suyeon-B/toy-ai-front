import { useRouter } from "next/router";
import React, { useState, useRef } from "react";

const CharacterForm = () => {
  const router = useRouter();
  const [numCharacters, setNumCharacters] = useState(1);
  const [characters, setCharacters] = useState([{ name: "", role: "" }]);

  const nameRefs = useRef([]);
  const roleRefs = useRef([]);
  const situationRef = useRef(null);

  const handleNumChange = (event) => {
    const newNumCharacters = parseInt(event.target.value);
    setNumCharacters(newNumCharacters);
    setCharacters(Array(newNumCharacters).fill({ name: "", role: "" }));
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
      (character) => character.name && character.role
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
    }

    console.log(situation, submitCharacters);
  };

  return (
    <div className="w-80 mx-auto">
      <form onSubmit={handleSubmit} className="">
        <label htmlFor="situations" className="">
          상황
        </label>
        <input
          type="text"
          id="situation"
          name="situation"
          ref={situationRef}
          className="border border-gray-300 p-2 mb-4 w-full"
        />
        <div className="">
          <label htmlFor="numCharacters" className="mr-2 ">
            등장인물
          </label>
          <select
            id="numCharacters"
            name="numCharacters"
            value={numCharacters}
            onChange={handleNumChange}
            className="border border-gray-300 rounded-md"
          >
            {[1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          {characters.map((character, index) => (
            <div key={index} className="">
              <div className="">
                <label htmlFor="numCharacters" className="mr-2">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(event) => handleInputChange(event, index)}
                  ref={nameRefs.current[index]}
                  className="border border-gray-300 rounded-md px-2 py-1"
                />
              </div>
              <div key={index} className="">
                <label htmlFor="numCharacters" className="mr-2">
                  역할
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  onChange={(event) => handleInputChange(event, index)}
                  ref={roleRefs.current[index]}
                  className="border border-gray-300 rounded-md px-2 py-1"
                />
              </div>
            </div>
          ))}
        </div>

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
