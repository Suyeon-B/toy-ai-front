// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function getFirstStory(bookId) {
  try {
    // const response = await fetch(`http://127.0.0.1:8080/book/${bookId}/1`, {
    //   method: "GET",
    //   credentials: "include",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-type": "application/json",
    //   },
    // });

    // const data = await response.json();

    const data = {
      data: {
        content:
          "창훈은 대학 입학을 앞두고 새로운 시작을 약간의 두려움과 함께 기다리고 있었다. 그러던 어느 날 카리나를 만나게 된다.",
        image_url:
          "https://oaidalleapiprodscus.blob.core.windows.net/private/org-miPEsIqedNBCQ9GnGLeXx8Qa/user-CwlwMMb4Wl6A9wZ9SwzuvPwc/img-AvdjYYqQm7YfYwqF0mW6hdQe.png?st=2023-04-16T02%3A12%3A12Z&se=2023-04-16T04%3A12%3A12Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-16T00%3A33%3A20Z&ske=2023-04-17T00%3A33%3A20Z&sks=b&skv=2021-08-06&sig=nWurEmhSEsEHzkgo%2BrGS7I9cmD4MXli5tZJvr1RwhYU%3D",
        next_content_list: [
          [1, "카리나와의 첫 만남"],
          [2, "카리나에게 반해버린 이유"],
          [3, "창훈과 카리나의 대화"],
          [4, "창훈과 카리나의 운동"],
        ],
      },
      message: "Success",
    };

    return data;
  } catch (error) {
    console.error(error);
    alert("스토리 생성에 실패했습니다. 잠시 후 다시 시도해주세요.");
  }
}
