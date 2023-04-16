import React from "react";
import { useRouter } from "next/router";
import { KakaoShareButton } from "@/src/components/KakaoShareButton/KakaoShareButton";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-gray-100 text-black h-auto">
      {/* 사진 */}
      <div className="max-w-sm mx-auto">
        <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
          <img src="/Start.svg" />
        </div>
      </div>

      {/* 버튼 */}
      <div className="w-80 mx-auto grid grid-cols-1 gap-4">
        <button
          className="bg-primary hover:bg-primary-deep text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push("/start")}
        >
          시작하기
        </button>
        <KakaoShareButton />
      </div>
    </div>
  );
}
