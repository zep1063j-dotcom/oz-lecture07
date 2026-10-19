// DAY 11 Javascript 연산자와 조건문
console.log("index.js가 연결됐습니다");
let count = 10;
count ++;
console.log(count);

count --;
console.log(count);

let num = 10;
let a = num++;

console.log("a :", a);
console.log("num :", num);

let num2 = 10;
let b = ++num2;
console.log("b :", b);
console.log("num2 :", num2);

let total = 0;
total += 12000;
total += 3000;
console.log(total);

let message = "안녕";
message += "하세요";
console.log(message);

console.log('============');

console.log(10 == "10");
console.log(10 === "10");
console.log(0 == "");
console.log(0 === "");
console.log(null == undefined);
console.log(null === undefined);

console.log('============');

const age = 25;
const hasTicket = true;
console.log(age >=20 && hasTicket);
console.log(age < 20 && hasTicket);

console.log(age >=20 || hasTicket);
console.log(age < 20 || hasTicket);

console.log(!hasTicket);

console.log(!true && false);
console.log(!(true && false));

console.log("10" < "9");

console.log('============');

const num1 = 5;
if (num1 % 2 === 0) {
  console.log("짝수입니다.");
} else {
  console.log("홀수입니다.");
}

const numif = 3030;
if (numif > 0) {
  console.log("양수입니다,");
} else if (numif < 0) {
  console.log("음수입니다,");
} else {
  console.log("0입니다.");
}

const score = 95;
if (score >= 90 && score <= 100) {
  console.log("A학점입니다.");
}

const day = "토";
if (day === "토" || day === "일"); {
  console.log("주말입니다.");
}

console.log('============');
const isLoggedIn = true;
const role = "admin";
if(isLoggedIn) {
  console.log("로그인 O");
    if( role === "admin") {
      console.log("관리자 메뉴");
    } else {
      console.log("내 정보");
    }
} else {
  console.log("로그인 하기");
}

console.log('============');
const food = "사과";
switch (food) {
  case "바나나" :
    console.log("과일");
    break;
  case "수박" :
    console.log("과일");
    break;
  case "사과" :
    console.log("과일");
    break;
  case "당근" :
    console.log("채소");
    break;
  default:
    console.log("과일도 채소도 아닙니다.");
}

let result;
scoreThird = 85;


if (scoreThird >= 60) {
  result = "합격";
} else {
  result = "불합격";
}

console.log(result);

result = scoreThird >= 60 ? "합격" : "불합격";
console.log(result);