// DAY 12 JavaScript 반복문과 함수
console.log("index.js가 연결됐습니다!!!");

for (let i = 0; i < 5 ; i++) {
  console.log(i);
}

let total = 0;
for (let i = 0; i <= 10 ; i++) {
  total += i;
}
console.log(total);

for (let i = 1; i <= 9; i++) {
  let dan = 3;
  let result = 3 * i;
  let message = `${dan} X ${i} = ${result}`;
  console.log(message);
}

for (let i = 1; i <= 2; i++) {
  console.log(i);
  for (let k = 1; k <= 2; k++) {
    console.log(k);
  }
  console.log("i블록 끝");
}

const fruits = ["사과", "바나나", "포도", "딸기"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("==========");

let money = 10000;
let cups = 0;
console.log(`현재금액${money}원`);
while (money >= 3000) {
  money -= 3000;
  cups++;
}
console.log(`남은 돈: ${money}원, 구매한 컵 수: ${cups}개`);

for (let i = 1; i < 10; i++) {
  if (i === 5 ) {
    break;
  }
  console.log(i);
}
for (let i = 1; i < 10; i++) {
  if (i === 5 ) {
    continue;
  }
  console.log(i);
}

function gugudan(dan) {
  for(let i = 1; i <= 9; i++) {
    console.log(`${dan} x ${i} = ${dan * i}`);
  }
}

gugudan(7);

function introduce(name, age = "나이 불명") {
  console.log(`안녕하세요. ${name}입니다 (${age})`);
}
introduce("백종현", 25);
introduce("백종현");

function sum(a, b) {
  let result = a + b;
  return result;
}
let answer = sum(10, 20);
console.log(answer);


// console.log(result);

function sumEarlyReturn(num1, num2) {
  if(typeof num1 !== "number" || typeof num2 !=="number") {
    return;
  }
  return num1 + num2;
}
const answer2 = sumEarlyReturn("sdsd",20);
console.log("answer2", answer2);

const sumArrow = (num1, num2) => num1 + num2;
const answer3 = sumArrow(10, 20);
console.log("answer3 ; ", answer3);