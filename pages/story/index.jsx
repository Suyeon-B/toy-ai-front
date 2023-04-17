import React from "react";
import { AnimationText } from "@/src/components/AnimationText/AnimationText";
import { KakaoShareButton } from "@/src/components/KakaoShareButton/KakaoShareButton";
import { useState, useEffect } from "react";
import { getStoryBySeq, postContextNum } from "@/src/components/api";
import { useAtom } from "jotai";
import { bookIdAtom } from "@/src/stores/story";
import { seqAtom } from "@/src/stores/story";
import { storyAtom } from "@/src/stores/story";

const END_TIMELINE = 5;
const Index = () => {
  const [bookId] = useAtom(bookIdAtom);
  const [seq, setSeq] = useAtom(seqAtom);
  const [storySeq] = useAtom(storyAtom);
  console.log("🚀 ~ file: index.jsx:17 ~ Index ~ storySeq:", storySeq, seq);

  useEffect(() => {
    async function fetchStoryData() {
      if (bookId !== null) {
        const storyData = await getStoryBySeq(bookId, seq);
      }
    }

    fetchStoryData();
  }, [bookId]);

  return (
    <>
      {/* 사진 */}
      <div className="w-full flex items-center justify-center">
        <div className="w-80 h-80 bg-gray-300 flex items-center justify-center">
          <img src={storySeq[seq].image_url} />
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
        <AnimationText text={storySeq[seq].content} />
      </div>

      {/* 버튼 */}
      {END_TIMELINE !== seq ? (
        <div className="w-80 mx-auto grid grid-cols-1 gap-4">
          {storySeq[seq].next_content_list.map((content) => (
            <button
              onClick={async () => {
                postContextNum(bookId, seq, content[0]);
              }}
              className="bg-primary hover:bg-primary-deep text-white font-bold py-2 px-4 rounded"
              key={content[1]}
            >
              {content[0]}: {content[1]}
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
