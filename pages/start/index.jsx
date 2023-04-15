import { useRouter } from "next/router";
import { useState, useRef } from "react";

const Start = () => {
  const router = useRouter();
  const [numCharacters, setNumCharacters] = useState(1);
  const [characters, setCharacters] = useState([]);

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
    const submitCharacters = characters;
    const situation = situationRef.current.value;

    console.log(situation, submitCharacters);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <label htmlFor="situations" className="mr-2">
        상황:
      </label>
      <input
        type="text"
        id="situation"
        name="situation"
        ref={situationRef}
        className="border border-gray-300 p-2 mb-4 w-full"
      />
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
              <label htmlFor="numCharacters" className="mr-2">
                이름:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(event) => handleInputChange(event, index)}
                ref={nameRefs.current[index]}
                className="border border-gray-300 rounded-md px-2 py-1"
              />
              <label htmlFor="numCharacters" className="mr-2">
                역할:
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
      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="bg-primary hover:bg-primary-deep text-white rounded-md px-4 py-2"
          onClick={() => router.push("/story")}
        >
          만들기
        </button>
      </div>
    </form>
  );
};

export default Start;
