// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function getStartWithInputData(
  situation,
  submitCharacters
) {
  try {
    // const response = await fetch("http://127.0.0.1:8080/book", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     book: {
    //       hero: submitCharacters,
    //       summary: situation,
    //     },
    //   }),
    //   credentials: "include",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-type": "application/json",
    //   },
    // });

    // const data = await response.json();
    const data = {
      data: {
        book_id: 2,
      },
      message: "Success",
    };
    return data.data;
  } catch (error) {
    console.error(error);
    alert("스토리 생성에 실패했습니다. 잠시 후 다시 시도해주세요.");
  }
}
