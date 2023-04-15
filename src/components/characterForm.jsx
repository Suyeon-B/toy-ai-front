import { useState, useRef } from "react";

const CharacterForm = () => {
  const [numCharacters, setNumCharacters] = useState(1);
  const [characters, setCharacters] = useState([]);

  const nameRefs = useRef([]);
  const roleRefs = useRef([]);

  const handleNumChange = (event) => {
    const newNumCharacters = parseInt(event.target.value);
    setNumCharacters(newNumCharacters);
    setCharacters(Array(newNumCharacters).fill({ name: "", role: "" }));
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    setCharacters((prevCharacters) => {
      const newCharacters = [...prevCharacters];
      newCharacters[index][name] = value;
      return newCharacters;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCharacters = [];
    for (let i = 0; i < numCharacters; i++) {
      const name = nameRefs.current[i].value;
      const role = roleRefs.current[i].value;
      newCharacters.push({ name, role });
    }
    console.log(newCharacters);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <div className="flex justify-center mb-4">
        <label htmlFor="numCharacters" className="mr-2">
          인원:
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
      </div>
      <div className="flex flex-col gap-4">
        {characters.map((character, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex gap-2">
              <label htmlFor={`name-${index}`}>이름:</label>
              <input
                type="text"
                id={`name-${index}`}
                name={`name-${index}`}
                value={character.name}
                onChange={(event) => handleInputChange(event, index)}
                ref={(el) => (nameRefs.current[index] = el)}
                className="border border-gray-300 rounded-md px-2 py-1"
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor={`role-${index}`}>역할:</label>
              <input
                type="text"
                id={`role-${index}`}
                name={`role-${index}`}
                value={character.role}
                onChange={(event) => handleInputChange(event, index)}
                ref={(el) => (roleRefs.current[index] = el)}
                className="border border-gray-300 rounded-md px-2 py-1"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md px-4 py-2"
        >
          저장하기
        </button>
      </div>
    </form>
  );
};

export default CharacterForm;
