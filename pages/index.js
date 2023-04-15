import { Inter } from "next/font/google";
import { KakaoShareButton } from "@/components/KakaoShareButton/KakaoShareButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="max-w-screen-md mx-auto px-20">
      <div class="relative pt-1">
        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-light">
          <div
            style={{ width: "78%" }}
            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary transition-all duration-500 ease-out"
          ></div>
        </div>
      </div>
    </div>
  );
}
