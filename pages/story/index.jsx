const Index = () => {
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
            <svg
              class="w-32 h-32 text-gray-500"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* 자막 */}
      <h1 class="mx-auto">여기는 자막 자리</h1>

      {/* 버튼 */}
      <div class="w-80 mx-auto grid grid-cols-1 gap-4">
        <button class="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded">
          버튼1
        </button>
        <button class="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded">
          버튼2
        </button>
        <button class="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded">
          버튼3
        </button>
        <button class="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded">
          버튼4
        </button>
      </div>
    </>
  );
};

export default Index;