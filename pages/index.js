import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleClickStart = () => {
    router.push("/story");
  };

  return (
    <>
      <div class="max-w-sm mx-auto">
        <div class="w-full h-96 bg-gray-100 flex items-center justify-center">
          <img src="/Start.svg" alt="main-img" />
          <div style={{ position: "absolute", top: "120px", margin: "0 auto" }}>
            <p>등장인물과 상황만 입력하면 chatGPT가 동화책을 만들어준다!</p>
          </div>
        </div>
      </div>

      <div class="w-80 mx-auto grid grid-cols-1 gap-4">
        <button
          class="bg-primary hover:bg-primary-deep text-white font-bold py-2 px-4 rounded"
          onClick={handleClickStart}
        >
          시작하기
        </button>
      </div>
    </>
  );
}
