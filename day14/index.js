// DAY 14 · JavaScript 배열메서드 데이터처리

const a = `이번에 새롭게 기획되어 추진 중에 있는 신규 프로젝트의 성공적인 완수를 도모하기 위하여, 
각 부서 간의 긴밀한 협력 체계의 구축을 진행하는 것이 무엇보다도 시급한 과제라고 판단되어집니다.`;

const b = `새 프로젝트를 성공시키려면 부서 간 협력 체계를 서둘러 구축해야 합니다`;

const fruites = ["사과", "바나나", "오렌지"];
fruites.forEach((fruit) => {
  console.log(fruit);
});

fruites.forEach((fruit, i) => {
  console.log(`${i}. ${fruit}`);
});
//매개변수의 순서가 중요하고 그 값이 중요한건 아니다
fruites.forEach((item, index) => {
  console.log(`${index}. ${item}`);
});

console.log("forEach는 total값을 편하게 구할 수 있다-=-=-=-=-=-=-=");

const scores = [90, 31,42,35];
let total = 0;
scores.forEach((score) => {
  total += score
});

console.log(total);
const result = scores.forEach((score) => score * 2);
console.log(result); //forEach는 반환값이 없는 메소드이다

//map
console.log("map =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(numbers, doubled);

const users = [
  {name : "깁오즈", age : 25},
  {name : "깁내즈", age : 35},
  {name : "자오즈", age : 55},
];
console.log(users.map((user) => user.age));

const prices = [12000, 17809, 4888];
console.log(prices.map((price) => price * 0.9 ));

console.log("filter =-=-=-=-=-=-=-=-=-=-=-=-=-=-="); //filter
const numbersF = [1, 2, 3, 4, 5];
const even = numbersF.filter((num) => num % 2 === 0 );

console.log(numbersF, even);

const tenOver = numbersF.filter((num) => num > 10 );
console.log(tenOver);


//할 일 목록
const todos = [
  {title: "장보기", done: true},
  {title: "운동하기", done: false},
  {title: "과제제출", done: true},
]
const doneTodos = todos.filter((todo) => todo.done);
console.log(doneTodos);
console.log(doneTodos.length);
console.log((doneTodos.length / todos.length) * 100); // 완료율

const leftTodos = todos.filter((todo) => !todo.done);
console.log(leftTodos);

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
const pdctFiltered = products.filter((p) => p.stock > 0);
const names = pdctFiltered.map((p) => p.pdctName );

console.log(pdctFiltered, names);

const namesOnce = products.filter((p) => p.stock > 0).map((p) => p.pdctName ); 
console.log(namesOnce);
console.log("fine=-=-=-=-=-=-=-");
const found = products.find((p) => p.id === 2);
console.log(found);

console.log("some=-=-=-=-=-=-=-");//하나라도 맞는가?
const isSome = products.some((p) => p.stock === 0);
console.log(isSome);

console.log("every=-=-=-=-=-=-=-");//모두 맞는가?
const isRightPrice = products.every((p) => p.price > 0);
console.log("가격이 정상적으로 책정 되었는가?", isRightPrice);


const isExistStockAll = products.every((p) => p.stock > 0);
console.log("모두 재고가 있는가?", isExistStockAll);

const emptyArrayEvery = [].every((n) => n > 0);
console.log(emptyArrayEvery);




//map으로 새 객체 배열 반환하기
console.log(products);
const productsSales = products.map((p) => {
  return {
    id: p.id,
    pdctName: p.pdctName,
    price: p.price * 0.9,
    stork: p.stock,
    originPrice: p.price,
  };
} );
console.log(productsSales);

const productSales2 = products.map((p) => {
  return {
    ...p,
    price: p.price * 0.9,
    stork: p.stock,
    originPrice: p.price,
  };
} );
console.log(productSales2);
