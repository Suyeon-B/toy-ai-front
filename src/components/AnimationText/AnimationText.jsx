import { useEffect, useState } from "react";

export const AnimationText = ({ text, delay = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, delay]);

  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
  }, [text])

  return <p class="text-gray-900">{displayText}</p>;
};
