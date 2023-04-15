import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div class="flex flex-col min-h-screen bg-gray-100 text-black">
      <header class="flex justify-center items-center">
        <div>
          <img class="h-8 w-auto" src="logo.png" alt="로고 이미지" />
        </div>
      </header>
      {/* 프로그레스 바 */}
      <div class="relative pt-1">
        <div class="flex mb-2 items-center justify-between">
          <div>
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
              Progress
            </span>
          </div>
          <div class="text-right">
            <span class="text-xs font-semibold inline-block text-blue-600">
              78%
            </span>
          </div>
        </div>
        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
          <div
            style={{ width: "78%" }}
            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-500 ease-out"
          ></div>
        </div>
      </div>
      {/* 사진 */}
      <h1 class="mx-auto">여기는 사진 자리</h1>
      {/* 자막 */}
      <h1 class="mx-auto">여기는 자막 자리</h1>
      {/* 버튼 */}
      <div class="w-80 mx-auto grid grid-cols-1 gap-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          버튼1
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          버튼2
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          버튼3
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          버튼4
        </button>
      </div>
      <footer class="bg-gray-300 py-4 mt-auto">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <span class="text-gray-600 text-sm">
            &copy; 2023 책너두 All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
