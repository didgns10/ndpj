import express from "express"
import sendTokenToSMS, { checkPhone, getToken } from "./phone.js"
//import * as ttt from './phone.js'
//import qqq, {checkPhone as zzz} from './phone.js'

const app = express()
app.use(express.json())

//미들웨어 함수
app.get("/boards", function (req, res) {
  // 1. DB에 접속 후, 데이터를 조회 => 데이터를 조회했다고 가정
  const result = [
    {
      number: 1,
      writer: "철수",
      title: "제목입니다~~",
      contents: "내용이예요!!!",
    },
    {
      number: 2,
      writer: "훈이",
      title: "훈이입니다~~",
      contents: "훈이이예요!!!",
    },
    {
      number: 3,
      writer: "영희",
      title: "영희입니다~~",
      contents: "영희이예요!!!",
    },
  ]

  // 2. DB에서 꺼내온 결과를 브라우저에 응답(response) 주기
  res.send(result)
})

app.post("/boards", function (req, res) {
  // 1. 브라우저에서 보내준 데이터 확인하기
  console.log(req)
  console.log("=================")
  console.log(req.body)

  // 2. DB에 접속 후, 데이터를 저장 => 데이터 저장했다고 가정

  // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
  res.send("게시물 등록에 성공하였습니다.")
})

app.post("/tokens/phone", function (req, res) {
  const myphone = req.body.qqq

  // 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
  const isValid = checkPhone(myphone)
  if (isValid === false) return

  // 2. 핸드폰 토큰 6자리 만들기
  const mytoken = getToken()

  // 3. 핸드폰번호에 토큰 전송하기
  sendTokenToSMS(myphone, mytoken)

  res.send("인증완료!!!")
})

app.listen(3000)
