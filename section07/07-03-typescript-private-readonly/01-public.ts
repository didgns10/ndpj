// 01-public.ts

// 1. public
class Aaa1 {
  constructor(public mypower: any) {
    // this.mypower = mypower; // public, private, protected, readonly 등 1개라도 있으면 자동 생성됨
  }

  ggg() {
    console.log("나의 공격력은 " + this.mypower) // 안에서 접근 가능
    this.mypower = 10 // 안에서 수정 가능
  }
}
const aaa = new Aaa1(50)
aaa.mypower = 5 // 밖에서도 접근 및 수정 가능

class Aaa2 extends Aaa1 {
  kkk() {
    console.log("나의 공격력은 " + this.mypower) // 자식이 접근 가능
    this.mypower = 10 // 자식이 수정 가능
  }
}
const qqq = new Aaa2(50)
console.log(qqq.mypower) // 밖에서 접근 가능
qqq.mypower = 10 // 밖에서 수정 가능
