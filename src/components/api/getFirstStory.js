// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function getFirstStory(bookId) {
  try {
    const response = await fetch(`http://127.0.0.1:8080/book/${bookId}/1`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    alert("스토리 생성에 실패했습니다. 잠시 후 다시 시도해주세요.");
  }
}
