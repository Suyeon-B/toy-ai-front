import { AnimationText } from "@/src/components/AnimationText/AnimationText";
import { useState, useEffect } from "react";

const Index = () => {
  const [data, setData] = useState(null);

  const fetchData = async (seq) => {
    const res = await fetch(`http://localhost:3000/api/${seq}`); // 서버에서 데이터를 가져옴
    const data = await res.json();

    setData(data);
  };

  useEffect(() => {
    fetchData(0);
  }, []);

  if (!data) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <div class="relative pt-1">
        <div class="text-right">
          <span class="text-xs font-semibold inline-block text-blue-600">
            78%
          </span>
        </div>
        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-light">
          <div
            style={{ width: "78%" }}
            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary transition-all duration-500 ease-out"
          ></div>
        </div>
      </div>
      {/* 사진 */}
      <div class="max-w-sm mx-auto">
        <div class="w-full h-96 bg-gray-100 flex items-center justify-center">
          <div class="w-96 h-96 bg-gray-300 flex items-center justify-center">
            <img src={data.picture_uri} />
          </div>
        </div>
      </div>

      {/* 자막 */}
      <AnimationText textDate={data.content} />

      {/* 버튼 */}
      <div class="w-80 mx-auto grid grid-cols-1 gap-4">
        {data.next_content_list?.map(({ seq, content }) => (
          <button
            onClick={async () => {
              fetchData(seq);
            }}
            class="bg-primary hover:bg-primary-deep text-white font-bold py-2 px-4 rounded"
          >
            {seq}: {content}
          </button>
        ))}
      </div>
    </>
  );
};

export default Index;
