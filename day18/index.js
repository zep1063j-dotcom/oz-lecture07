console.log("index.js 연결 완료");

// // //JSON.stringifi 값을 JSON문자로 바꾸기
// // const user = {
// //   name:"김오즈",
// //   age : 20,
// //   tags: ["학생", "개발"],
// //   greet() {
// //     return "안녕하세요"
// //   }
// // }

// // const text = JSON.stringify(user);
// // console.log(text);
// // console.log(typeof text);
// // console.log(JSON.stringify(user, null, 2));

// // //JSON,parse JSON 문자를 값을 바꾸기
// // const userParsed = JSON.parse(text);
// // console.log(userParsed);
// // console.log(typeof userParsed);
// // console.log(userParsed.tags[0]);



async function load() {
  try{
    const response = await fetch(`blank.html`);
    console.log(response.status, response.ok);
    const data = await response.json();
  } catch(error){
    console.log("에러이름 :", error.name);
    console.log("에러문구 :", error.message);
  }
  
}
load();

// // response.status response.ok
// async function check(path) {
//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/${path}`);
//       console.log(path, response.status,response.ok);
//       if(!response.ok) throw new Error ("요청실패");
//       const result = await response.json();
//       return result;
//     } catch (error) {
//       console.log(error)
//     }

// }

// async function main () {
//   console.log("start main");
//   const users = await check("users");
//   console.log(users);
//   await check("users");
//   // await check("users/1");
//   // await check("todos");
//   // await check("asdfasdfasd");
//   console.log("finshed main function");
// }
// main();