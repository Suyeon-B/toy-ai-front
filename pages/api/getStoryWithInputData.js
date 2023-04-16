// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function getStoryWithInputData(
  situation,
  submitCharacters
) {
  const res = await fetch("http://127.0.0.1:80/book", {
    method: "POST",
    body: JSON.stringify({
      book: {
        hero: submitCharacters,
        summary: situation,
      },
    }),
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });

  if (res.ok) {
    const data = await res.json();
    window.localStorage.setItem("bookId", data.data.book_id);
    return;
  }

  alert("스토리 생성에 실패했습니다. 잠시 후 다시 시도해주세요.");
}
