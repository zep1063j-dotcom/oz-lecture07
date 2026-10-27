// DAY 11 실습 02 — 점수 등급 계산기

const score = 87; // 바꿔 가며 확인합니다 : 100, 90, 89, 60, 59, 0, -5, 105
let grade;
// 1. 0~100 밖의 점수는 먼저 걸러 냅니다 — 둘 중 하나만 맞아도 잘못된 점수이므로 ||
if (score < 0 || score > 100) {
  console.log("0부터 100 사이의 점수를 넣어 주세요.");
} else {
    if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  let message;
  switch (grade) {
    case "A" :
      message = "훌륭합니다.";
      break;
    case "B" :
      message = "좋아요!";
      break;
    case "C" :
    case "D" :
      message = "조금 더 노력하세요";
      break;
    default :
      message = "분발하세요";
  }

  const result = score >= 60 ? "합격" : "불합격";


  console.log(`점수 ${score}점 → ${grade}등급 (${result})`);
  console.log(message);
}