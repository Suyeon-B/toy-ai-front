// components/KakaoShareButton.js
import React from 'react';

export const KakaoShareButton = () => {
  const shareToKakao = () => {
    if (!window.Kakao) {
      console.error('Kakao 인스턴스가 로드되지 않았습니다.');
      return;
    }

    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '공유하려는 제목',
        description: '공유하려는 설명',
        imageUrl: '공유하려는 이미지 URL',
        link: {
          webUrl: '웹 링크 URL',
          mobileWebUrl: '모바일 링크 URL',
        },
      },
      buttons: [
        {
          title: '웹으로 이동',
          link: {
            webUrl: '웹 링크 URL',
            mobileWebUrl: '모바일 링크 URL',
          },
        },
      ],
    });
  };

  return (
    <button onClick={shareToKakao} type="button">
      카카오톡 공유하기
    </button>
  );
};

