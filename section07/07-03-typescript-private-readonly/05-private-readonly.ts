// 05-private-readonly.ts

// 5. private readonly
// class Aaaaaaa1 {
//   constructor(private readonly mypower: any) {
//     // this.mypower = mypower; // public, private, protected, readonly 등 1개라도 있으면 자동 생성됨
//   }

//   ggg() {
//     console.log("나의 공격력은 " + this.mypower) // 안에서 접근 가능
//     this.mypower = 10 // 안에서 수정 불가
//   }
// }
// class Aaaaaaa2 extends Aaaaaaa1 {
//   kkk() {
//     console.log("나의 공격력은 " + this.mypower) // 자식이 접근 불가
//     this.mypower = 10 // 자식이 수정 불가
//   }
// }
// const qqqqqqq = new Aaaaaaa2(50)
// console.log(qqqqqqq.mypower) // 밖에서 접근 불가
// qqqqqqq.mypower = 10 // 밖에서 수정 불가
