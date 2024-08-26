// 04-readonly.ts

// 4. readonly
// class Aaaaaa1 {
//   constructor(readonly mypower: any) {
//     // this.mypower = mypower; // public, private, protected, readonly 등 1개라도 있으면 자동 생성됨
//   }

//   ggg() {
//     console.log("나의 공격력은 " + this.mypower) // 안에서 접근 가능
//     this.mypower = 10 // 안에서 수정 불가
//   }
// }
// class Aaaaaa2 extends Aaaaaa1 {
//   kkk() {
//     console.log("나의 공격력은 " + this.mypower) // 자식이 접근 가능
//     this.mypower = 10 // 자식이 수정 불가
//   }
// }
// const qqqqqq = new Aaaaaa2(50)
// console.log(qqqqqq.mypower) // 밖에서 접근 가능
// qqqqqq.mypower = 10 // 밖에서 수정 불가
