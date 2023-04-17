
const LOCAL_API = '127.0.0.1:8080';
// const PROD_API = '54.180.88.28:8080'

export const fetchBooksByBookId = async (bookId, seq) => { 
  console.log("bookId, seq", bookId, seq)
  console.log("end", `http://${LOCAL_API}/book/${bookId}/${seq}` )
  const res = await fetch(`http://${LOCAL_API}/book/${bookId}/${seq}`); // 서버에서 데이터를 가져옴
  const data = await res.json();

  return data;
}