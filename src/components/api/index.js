
export const getStoryBySeq = async (bookId, seq) => {
  const res = await fetch(`/book/${bookId}/${seq}`); // 서버에서 데이터를 가져옴
  const data = await res.json();

  return data.data;
};

export const postContextNum = async (bookId, seq, candidate_num) => {
  try {
    await fetch(`/book/${bookId}/${seq}`, {
      method: "POST",
      body: JSON.stringify({
        candidate_num,
      }),
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    alert("스토리 생성에 실패했습니다. 잠시 후 다시 시도해주세요.");
  }
};
