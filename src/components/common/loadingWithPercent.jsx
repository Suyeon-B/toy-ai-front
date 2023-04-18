import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { KakaoShareButton } from "../KakaoShareButton/KakaoShareButton";

const LoadingWithPercent = ({ text }) => {
  const [fakePercent, setFakePercent] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = 100;
    const timeInterval = Math.floor(Math.random() * 1001); // 1~5초까지의 임의의 수 생성

    const intervalId = setInterval(() => {
      const increment = Math.floor(Math.random() * 10) + 1; // 1~5 사이의 임의의 정수

      start += increment;
      setFakePercent(start);
      if (start >= end) {
        clearInterval(intervalId);
      }
    }, timeInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const loadingText =
    fakePercent < 100 ? `이야기 생성중...${fakePercent}%` : text;

  return (
    <div className="flex flex-col items-center">
      <div className="w-80 flex justify-center bg-primary hover:bg-primary-deep text-white font-bold py-2 px-4 rounded my-2.5">
        <div className="mr-3">
          <ClipLoader color={"#fff"} size={13} />
        </div>
        {loadingText}
      </div>
      <KakaoShareButton text="기다리는 동안 친구에게 공유하기" />
    </div>
  );
};

export default LoadingWithPercent;
