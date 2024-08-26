// 03-protected.ts

// 3. protected
// class Aaaaa1 {
//   constructor(protected mypower: any) {
//     // this.mypower = mypower; // public, private, protected, readonly 등 1개라도 있으면 자동 생성됨
//   }

//   ggg() {
//     console.log("나의 공격력은 " + this.mypower) // 안에서 접근 가능
//     this.mypower = 10 // 안에서 수정 가능
//   }
// }
// class Aaaaa2 extends Aaaaa1 {
//   kkk() {
//     console.log("나의 공격력은 " + this.mypower) // 자식이 접근 가능
//     this.mypower = 10 // 자식이 수정 가능
//   }
// }
// const qqqqq = new Aaaaa2(50)
// console.log(qqqqq.mypower) // 밖에서 접근 불가
// qqqqq.mypower = 10 // 밖에서 수정 불가
