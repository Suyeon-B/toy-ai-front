const LOCAL_API = "127.0.0.1:8080";
// const PROD_API = '54.180.88.28:8080'

export const getStoryBySeq = async (bookId, seq) => {
  const res = await fetch(`http://${LOCAL_API}/book/${bookId}/${seq}`); // 서버에서 데이터를 가져옴
  const data = await res.json();

  return data;
};

export const postContextNum = async (bookId, seq, candidate_num) => {
  try {
    await fetch(`http://${LOCAL_API}/book/${bookId}/${seq}`, {
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
