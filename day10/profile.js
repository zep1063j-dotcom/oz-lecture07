// DAY 10 실습 02 — 사용자 정보 출력
const userName = "백종현";
const email = "zep1063j@gmail.com";
let age = 28;

console.log("안녕하세요. 저는 " + userName + "입니다.");

console.log(`안녕하세요 저는 ${userName}입니다.`);
console.log(typeof age);

let isMember = true;
let photo = null;
let nickname;

console.log("이름 :", userName);
console.log("이메일 :", email);
console.log("나이 :", age);
console.log("회원여부 :", isMember);
console.log("사진 :", photo);
console.log("별명 :", nickname);

console.log(
  `안녕하세요 저는 ${userName}입니다.
나이는 ${age}살이고, 이메일은 ${email}입니다.
회원 여부는 ${isMember}입니다.`
);

console.log("useName의 자료형 :", typeof userName);
console.log("age의 자료형 :", typeof age);
console.log("isMember 의 자료형 :", typeof isMember);
console.log("photo의 자료형 :", typeof photo);
console.log("nickname의 자료형 :", typeof nickname);

age = 29;
console.log(`생일이 지나 ${age}살이 되었습니다.`);
