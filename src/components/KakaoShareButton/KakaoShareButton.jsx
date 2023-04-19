import React, { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const KakaoShareButton = ({ text }) => {
  const [link, setLink] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLink("https://toy-ai-front.vercel.app/");
    }
  }, []);

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
        imageUrl: "public/kingdo.png",
        link: {
          webUrl: link,
          mobileWebUrl: link,
        },
      },
      buttons: [
        {
          title: "소설쓰러 가기",
          link: {
            webUrl: link,
            mobileWebUrl: link,
          },
        },
      ],
    });
  };

  return (
    <button className="pt-1 pb-5" onClick={shareToKakao} type="button">
      {text}
    </button>
  );
};
