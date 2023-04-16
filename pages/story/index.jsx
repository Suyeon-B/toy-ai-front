import React from "react";
import { AnimationText } from "@/src/components/AnimationText/AnimationText";
import { KakaoShareButton } from "@/src/components/KakaoShareButton/KakaoShareButton";
import { useState, useEffect } from "react";

const END_TIMELINE = 5;
const Index = () => {
  const [data, setData] = useState(null);

  const fetchData = async (seq) => {
    // const bookId = sessionStorage.getItem("bookId");
    const bookId = 1;
    const res = await fetch(`http://127.0.0.1/book/${bookId}/${seq}`); // 서버에서 데이터를 가져옴
    const data = await res.json();

    setData(data);
  };

  useEffect(() => {
    fetchData(0);
  }, []);

  if (!data) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      {/* 사진 */}
      <div className="max-w-sm mx-auto">
        <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
          <div className="w-96 h-96 bg-gray-300 flex items-center justify-center">
            <img src={data.picture_uri} />
          </div>
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
        <AnimationText text={data.content} />
      </div>

      {/* 버튼 */}
      {END_TIMELINE !== data.timeline ? (
        <div className="w-80 mx-auto grid grid-cols-1 gap-4">
          {data.next_content_list?.map(({ seq, content }) => (
            <button
              onClick={async () => {
                fetchData(seq);
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
      )}
      <KakaoShareButton />
    </>
  );
};

export default Index;
