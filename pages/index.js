import { Inter } from "next/font/google";
import { KakaoShareButton } from "@/components/KakaoShareButton/KakaoShareButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div class="flex flex-col min-h-screen bg-gray-100 text-black">
      <header class="flex justify-center items-center">
        <div>
          <img class="h-8 w-auto" src="logo.png" alt="로고 이미지" />
        </div>
      </header>

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
