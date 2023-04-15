import { useEffect, useState } from "react";

export const AnimationText = ({ textDate }) => {
  console.log(
    "🚀 ~ file: AnimationText.jsx:4 ~ AnimationText ~ textDate:",
    textDate
  );

  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (textDate.length <= text.length) {
        clearInterval(interval);
      } else {
        setText((text) => textDate.slice(0, text.length + 1));
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [textDate, text]);

  return <p class="text-gray-900">{text}</p>;
};
