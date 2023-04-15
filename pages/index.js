import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div class="flex flex-col bg-gray-100 text-black">
      {/* 사진 */}
      <div class="max-w-sm mx-auto">
        <div class="w-full h-96 bg-gray-100 flex items-center justify-center">
          <img src="/Start.svg" />
        </div>
      </div>

      {/* 버튼 */}
      <div class="w-80 mx-auto grid grid-cols-1 gap-4">
        <button
          class="bg-primary hover:bg-primary-deep text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push("/start")}
        >
          시작하기
        </button>
      </div>
    </div>
  );
}
