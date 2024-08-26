// 02-private.ts

// 2. private
// class Aaaa1 {
//   constructor(private mypower: any) {
//     // this.mypower = mypower; // public, private, protected, readonly 등 1개라도 있으면 자동 생성됨
//   }

//   ggg() {
//     console.log("나의 공격력은 " + this.mypower) // 안에서 접근 가능
//     this.mypower = 10 // 안에서 수정 가능
//   }
// }
// class Aaaa2 extends Aaaa1 {
//   kkk() {
//     console.log("나의 공격력은 " + this.mypower) // 자식이 접근 불가
//     this.mypower = 10 // 자식이 수정 불가
//   }
// }
// const qqqq = new Aaaa2(50)
// console.log(qqqq.mypower) // 밖에서 접근 불가
// qqqq.mypower = 10 // 밖에서 수정 불가
