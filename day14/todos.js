// 실습 01 — 할 일 목록 다루기
const todos = [
  { id: 1, title: "장보기", done: true },
  { id: 2, title: "운동하기", done: false },
  { id: 3, title: "과제 제출", done: true },
  { id: 4, title: "책 읽기", done: false },
];
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// 1. forEach로 전체 출력 — 끝낸 일은 [완료], 남은 일은 [ ]
todos.forEach((todo) => {
  const mark = todo.done ? "[완료]" : "[ ]";
  console.log(`${mark} ${todo.title}`);
});

// 1.과 똑같지만 for을 이용해서 작성
// for (let i = 0; i < todos.length; i++) {
//   const todo = todos[1];
//   let mark = "";
//   if (todo.done) {
//     mark = "[완료]";
//   } else {
//     mark = "[]";
//   }
//   console.log(`${mark} ${todo.title}`);
// }
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
// 2. filter로 남은 일만 고르기
const left = todos.filter((todo) => !todo.done);
console.log(`남은 일 ${left.length}개`);
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// 3. map으로 남은 일의 제목만 모으기
const leftTitles = left.map((todo) => todo.title);
console.log(leftTitles);
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// 4. 이어 쓰기 — 끝낸 일의 제목만
const doneTitles = todos.filter((todo) => todo.done).map((todo) => todo.title);
console.log(doneTitles);
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// 5. 진행률 — 끝낸 일 수 ÷ 전체 수 × 100
const rate = (doneTitles.length / todos.length) * 100;
console.log(`진행률 ${rate}%`);


//reduce
console.log("reduce =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
const numbersR = [1, 2, 3, 4];
const sum = numbersR.reduce((acc, num) => acc + num, 0);
console.log(sum);

const cart = [
  {name : "책", price : 10000},
  {name : "aadf", price : 13000},
  {name : "qweqwe", price : 50000},
];
const totalCart = cart.reduce((acc, item) => acc + item.price, 0);
console.log(totalCart);


