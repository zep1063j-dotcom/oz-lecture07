// DAY 13 JavaScript 배열과 객체 기초
console.log("index.js가 연결됐습니다!!!");

const fruites = ["사과", "바나나", "오렌지"];
console.log(fruites[0]);
console.log(fruites[1]);
console.log(fruites[2]);
console.log(fruites[fruites.length - 1]);
console.log(fruites[5]);

console.log("-====-=-=-=-=-=");

fruites[1] = "망고";
console.log(fruites);

fruites.push("포도");
console.log(fruites);

console.log(fruites.length);

const scores = [80, 95, 70, 55];
let total = 0;
for (let i = 0; i < scores.length; i++) {
  const score = scores[i];
  total += score;
}
console.log("총합 :", total);
console.log("평균 :", total / scores.length);

console.log("배열 요소 넣고 빼고 -=---=-=-=-=-=-=-=-=-=-=-=-=");

console.log(fruites);
fruites.push("딸기"); //뒤에 추가
console.log(fruites);

const poped = fruites.pop(); //뒤에서 제거
console.log(poped);
console.log(fruites);

fruites.unshift("수박"); //앞에 추가
console.log(fruites);

const shifted = fruites.shift(); //앞에서 제거
console.log(shifted);
console.log(fruites);

console.log("splice 지우기 ,바꾸기 ,끼워넣기=-=-=-=-=-=-=-=-=");

// const removed = fruites.splice(1, 1);
// console.log(removed);
// console.log(fruites);

const sliced = fruites.slice(0,2);
console.log(sliced);

console.log("객체 =-=-=-=-=-=-=-=-=-=-");

const bread = {
  name: "팥붕어빵",
  price: 1000,
  ingredients: ["밀가루", "팥", "설탕"],
  isHot: true,
};
console.log(bread);
console.log("이름 :", bread.name);
console.log("가격 :", bread.price);
console.log("크기 :", bread.size);
console.log("따뜻한가요? :", bread.isHot);

bread.price = 500;
bread.owner = "백종현";
console.log(bread);


const user = {
  userName: "백종현",
  address: {
    city: "서울",
    zip: "04523",
  },
  likes: ["커피", "코딩"],
  greet() {
    return "안녕하세요";
  }
};
console.log(user);
console.log(user.greet());

const products = [
  {
    id: 1,
    pdctName: "에코백",
    price: 12000,
    stock: 5,
  },
  {
    id: 2,
    pdctName: "텀블러",
    price: 18000,
    stock: 0,
  },
  {
    id: 3,
    pdctName: "머그컵",
    price: 9000,
    stock: 12,
  },
];
console.log(products);
console.log(products[0].pdctName);
console.log(products[2].price);

// 배열 for로 돌아보기
let pdctTotal = 0;
for (let i = 0; i < products.length; i++) {
  const item = products[i];
  console.log(`${item.pdctName} ${item.price}원`);
  pdctTotal += item.price * item.stock;
}
console.log(`재고 금액 합계 ${pdctTotal}원`);

//객체 => json

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=");
const json = JSON.stringify(products);
console.log(json);

//json=> 객체

const back = JSON.parse(json);
console.log(back);