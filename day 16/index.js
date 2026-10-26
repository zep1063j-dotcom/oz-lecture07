// DAY 16 이벤트처리와 폼제어
console.log("index.js가 연결됐습니다!!!");

//버튼을 누를 때 마다 숫자 1 씩 올리기
const countBtn = document.querySelector("#count-btn");
const countEl = document.querySelector("#count");
let count = 0;

function addOne() {
  console.log("addOne 실행");
  count += 1;
  countEl.textContent = `${count}번 눌렀습니다.`;
}

countBtn.addEventListener("click", addOne);

//onclick은 하나만, addEventListener는 여러개
const btn = document.querySelector("#btn");

btn.onclick = () => console.log("첫째 - onclick");
btn.onclick = () => console.log("둘째 - onclick");

btn.addEventListener("click", ()=> console.log("셋째 - addEventListener"));
btn.addEventListener("click", ()=> console.log("넷째 - addEventListener"));



//forEach 로 버튼에 이벤트 연결
const menuBtns = document.querySelectorAll(".menu-btn");
const pickedEl = document.querySelector("#picked");

menuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    pickedEl.textContent = `고른 메뉴 : ${btn.textContent}`;
  });
});

// input 이벤트 한 글자마자, change 이벤트는 칸을 벗어날 때.
const nameInput = document.querySelector("#name");
nameInput.addEventListener("input", (e) => {
  console.log("input", e.target.value);
});

nameInput.addEventListener("change", (e) => {
  console.log("change", e.target.value);
});

btn.addEventListener("click", (event)=> {
  console.log(event);
  console.log(event.type);
  console.log(event.target);
});


//select는 value, checkbox는 checked

const sizeSelect = document.querySelector("#size");
const shotBox = document.querySelector("#shot");
const orderEl = document.querySelector("#order");
function showOrder() { 
  const shot = shotBox.checked ? "샷 추가" : "삿 추가 없음";
  console.log(shot);
  orderEl.textContent = `${sizeSelect.value} , ${shot}`;
}

sizeSelect.addEventListener("change", (e) => {
  console.log("change", e.target.value);
  showOrder();
})
shotBox.addEventListener("change", (e) => {
  console.log("change", e.target.checked);
  showOrder();
});

//keyup 키를 땔 때, 어떤 키인지 event.key

const memoInput = document.querySelector("#memo");
memoInput.addEventListener("keyup", (e) => {
  console.log(e.key);
  if(e.key === "Enter") {
    console.log("Enter키 입력");
  }
});

//submit 제출할 때, 그대로 두면 새 페이지 열림
const form = document.querySelector("#todo-form");
const whereEl = document.querySelector("#where");
whereEl.textContent = `지금 주소 끝 : ${location.search || "(없음)"}`;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("제출합니다.");

  //입력칸의 value가져오기
  // const ageInput = document.querySelector("#age");
  // console.log("나이", ageInput.value);


//trim() 앞뒤 값 띄어쓰기 지우기
  const todoInput = document.querySelector("#todo-input");
  console.log("할일", todoInput.value);
  console.log("할일", todoInput.value.trim());

  //validation 유효성 검사
  const msgEl = document.querySelector("#msg");
  const text = todoInput.value.trim();
  if (text === "") {
    msgEl.textContent = "할 일을 입력해 주세요";
    msgEl.classList.add("error");

    return;
  }


  
  msgEl.textContent = todoInput.value;
  msgEl.classList.remove("error");
});

const ageInput = document.querySelector("#age");
ageInput.addEventListener("input", (event) => {
  
  console.log(event.type, event.target.id, event.target.value);
  

});
ageInput.addEventListener("keyup", (event) => {
  console.log(event.key);
});


