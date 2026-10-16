// DAY 10 실습 01 — 콘솔과 파일에서 변수 다뤄 보기
console.log("main.js가 연결됐습니다");

console.log("1. 첫 번째 줄");
console.log("2. 두 번째 줄");
console.log("3. 세 번째 줄");

let price = 200;
console.log(price);

price = 300;
console.log(price);

let score;
console.log(score);

score = 90;
console.log(score);

let lever = 1;

let city = "서울";
city = "부산";
console.log("도시 : ", city);

const birthYear = 2002;
console.log("태어난 해 : ", birthYear)

let a = "안녕하세요\n오늘은 날씨가 좋네요\n배도 부르고요";
let b = `안녕하세요
오늘은 날씨가 좋네요
배도 부르고요`;

let isMember = true;
let hasCoupon = false;
console.log(typeof isMember);
console.log("회원인가요? ", isMember);
console.log("쿠본이 있나요? ", hasCoupon);
console.log(10 < 20);
console.log(10 > 20);

let isPass = 80 > 60;
console.log("합격했나요?", isPass);