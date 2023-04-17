export const getCharactersPlaceholders = (type, index) => {
  const names = ["예: 둘리", "예: 주호민", "예: 닛몰캐쉬", "예: 콩알이"];
  const roles = [
    "예: 집주인을 괴롭히는 악성 세입자",
    "예: 유튜브가 '아기'로 착각해 억울한 사람",
    "예: 독수리를 사랑하는 중국남자",
    "예: 귀여운 강아지",
  ];

  return type === "name" ? names[index] : roles[index];
};
