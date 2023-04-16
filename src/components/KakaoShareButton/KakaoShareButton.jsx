import React from "react";
import { useRouter } from "next/router";

export const KakaoShareButton = () => {
  const route = useRouter();
  // const link = document.location.href;

  const shareToKakao = () => {
    if (!window.Kakao) {
      console.error("Kakao 인스턴스가 로드되지 않았습니다.");
      return;
    }

    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "야 너두 소설 만들 수 있어",
        description: "내가 직접만든 소설",
        imageUrl: "",
        link: {
          webUrl: "https://www.naver.com/",
          mobileWebUrl: "https://www.naver.com/",
        },
      },
      buttons: [
        {
          title: "웹으로 이동",
          link: {
            webUrl: "https://www.naver.com/",
            mobileWebUrl: "https://www.naver.com/",
          },
        },
      ],
    });
  };

  return (
    <button className="w-full py-5" onClick={shareToKakao} type="button">
      카카오톡 공유하기
    </button>
  );
};
