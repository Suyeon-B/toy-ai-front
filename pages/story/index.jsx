import React, { useState } from "react";
import { AnimationText } from "@/src/components/AnimationText/AnimationText";
import { getStoryBySeq, postContextNum } from "@/src/components/api";
import { useAtom } from "jotai";
import { bookIdAtom } from "@/src/stores/story";
import { seqAtom } from "@/src/stores/story";
import { storyAtom } from "@/src/stores/story";
import LoadingWithPercent from "@/src/components/common/loadingWithPercent";
import { KakaoShareButton } from "@/src/components/KakaoShareButton/KakaoShareButton";

const loadingMessages = [
  "잠시만 기다려주세요, 우리는 이제 시간여행을 준비하고 있습니다!",
  "로딩중... 빨라지지 않는다면, 우주선을 호출해야 할지도 모릅니다.",
  "이것은 한창 로딩시간이 긴 게임이 아니라, 우주선을 발사하기 전에 필요한 것들입니다.",
  "너무 오래 기다리시면 지구를 빠르게 돌고 있는 것만 같아질 것입니다.",
  "이제 일어나서 좀 놀아볼까요? 로딩이 끝날 때까지 차 한잔 마시러 갈까요?",
  "로딩이 오래 걸리면, 책 한 권 읽고 돌아오세요. 아마도 아직 1%밖에 진행되지 않았을 거예요.",
  "잠시만 기다려주세요. 우리는 이제 나무위키에서 전문가로 승격될 예정입니다.",
  "로딩이 완료되면, 우리는 스포츠 경기, 콘서트, 그리고 비행기 탑승 대기열을 모두 뛰어넘을 수 있을 겁니다.",
  "이제 이곳에 몇 시간이나 머물러 계셨나요? 로딩이 완료될 때까지 좀 더 쉬어가세요.",
  "로딩이 오래 걸리면, 블랙홀에서 벗어나는 데에는 조금 더 시간이 필요합니다.",
  "로딩이 완료되면, 당신은 또 다른 세상으로 여행할 수 있습니다.",
  "로딩이 오래 걸리면, 당신은 행성 간 여행을 준비하는 동안 좀 더 배울 수 있습니다.",
  "로딩이 완료되면, 우리는 아이언맨의 수준을 달성할 수 있습니다.",
  "이미 어느정도 시간이 지났는데... 로딩바는 아직도 전체적인 3%밖에 안됩니다.",
  "로딩이 완료되면, 우리는 당신이 좋아하는 음악을 무대 위에서 연주할 수 있을 것입니다.",
  "로딩이 오래 걸린다면, 저희가 당신을 위해 음료수를 마시러 갈게요. 무엇을 드시겠어요?",
  "로로딩이 완료되면, 우리는 다함께 해외 여행을 떠나볼까요? 대상: 다른 행성",
  "로딩이 오래 걸린다면, 당신은 곧 히어로가 될 것입니다. 기다리세요.",
  "로딩이 완료되면, 우리는 당신이 좋아하는 음악을 무대 위에서 연주할 수 있을 것입니다.",
  "로딩이 오래 걸린다면, 저희가 당신의 머리를 깎아드릴게요. 가발을 입으시겠어요?",
  "로딩이 완료되면, 당신은 새로운 행성에서 군대를 거느릴 수 있습니다.",
  "로딩이 오래 걸린다면, 당신은 곧 인터스텔라 여행을 할 것입니다. 기다리세요.",
  "로딩이 완료되면, 우리는 이제부터 함께 우주에서 살게 될 것입니다.",
  "로딩이 오래 걸린다면, 당신은 곧 미래로 뛰어넘게 될 것입니다. 조금만 기다려주세요.",
  "로딩이 완료되면, 당신은 은하계 최강자가 될 것입니다. 기대하세요.",
  "로딩이 오래 걸린다면, 당신은 곧 다른 차원으로 이동할 수 있게 됩니다.",
  "로딩이 완료되면, 우리는 다른 행성에서 대통령이 될 수 있습니다. 즐겨보세요!",
];

const END_TIMELINE = 6;
const Index = () => {
  const [bookId] = useAtom(bookIdAtom);
  const [seq, setSeq] = useAtom(seqAtom);
  const [storySeq, setStorySeq] = useAtom(storyAtom);
  const [loading, setIsLoading] = useState(false);

  function randomNum() {
    return Math.floor(Math.random() * 30);
  }

  return (
    <>
      {/* 사진 */}
      <div className="w-full flex items-center justify-center">
        <div className="w-80 h-80 bg-gray-300 flex items-center justify-center">
          <img src={storySeq[seq]?.image_url} />
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
        <AnimationText text={storySeq[seq]?.content} />
      </div>

      {/* 버튼 */}
      {END_TIMELINE !== seq ? (
        <div className="w-80 mx-auto grid grid-cols-1 gap-4">
          {loading ? (
            <LoadingWithPercent text={loadingMessages[randomNum()]} />
          ) : (
            storySeq[seq]?.next_content_list.map((content) => (
              <button
                onClick={async () => {
                  setIsLoading(true);
                  await postContextNum(bookId, seq, content[0]);
                  const storyData = await getStoryBySeq(bookId, seq + 1);
                  setStorySeq([...storySeq, storyData]);
                  setSeq(seq + 1);
                  setIsLoading(false);
                }}
                className="bg-primary hover:bg-primary-deep text-white font-bold py-2 px-4 rounded"
                key={content[1]}
              >
                {content[0]}: {content[1]}
              </button>
            ))
          )}
        </div>
      ) : (
        <div>
          <h3>이야기가 끝났어요</h3>
          <h3>이야기를 끝까지 본 당신 인내심 최고</h3>
          <h3>사실이건 인내심 챌린지였슴 ㅎㅎ ㅋ;</h3>
            <KakaoShareButton text={"친구도 킹받게 하기😃"}/>
        </div>
      )}
    </>
  );
};

export default Index;
