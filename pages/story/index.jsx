import React from "react";
import { AnimationText } from "@/src/components/AnimationText/AnimationText";
import { KakaoShareButton } from "@/src/components/KakaoShareButton/KakaoShareButton";
import { useState, useEffect } from "react";
import { fetchBooksByBookId } from "@/src/components/api";

// const END_TIMELINE = 5;
const Index = () => {
  const [data, setData] = useState(null);
  const [bookId, setBookId] = useState(null);

  useEffect(() => {
    setBookId(window.localStorage.getItem("bookId"));
  }, []);

  useEffect(() => {
    async function fetchStoryData() {
      if (bookId) {
        const storyData = await fetchBooksByBookId(bookId, 0);
        setData(storyData);
      }
    }
  
    fetchStoryData();
  }, [bookId]);

  if (!data && !bookId) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      {/* 사진 */}
      <div className="w-full flex items-center justify-center">
        <div className="w-80 h-80 bg-gray-300 flex items-center justify-center">
          {/* <img src={data.picture_uri} /> */}
        </div>
      </div>

      {/* 자막 */}
      <div
        style={{
          padding: "20px 16px",
          boxSizing: "border-box",
          minHeight: "80px",
          maxWidth: "386px",
          border: "1px solid #e5e5e5",
          borderRadius: "8px",
          margin: "16px auto",
        }}
      >
        {/* <AnimationText text={data.content} /> */}
      </div>

      {/* 버튼 */}
      {/* {END_TIMELINE !== data.timeline ? (
        <div className="w-80 mx-auto grid grid-cols-1 gap-4">
          {data.next_content_list?.map(({ seq, content }) => (
            <button
              onClick={async () => {
                fetchData(bookId, seq);
              }}
              className="bg-primary hover:bg-primary-deep text-white font-bold py-2 px-4 rounded"
              key={seq}
            >
              {seq}: {content}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h3>이야기가 끝났어요</h3>
          <h3>공유해주세요</h3>
        </div>
      )} */}
      <KakaoShareButton />
    </>
  );
};

export default Index;
