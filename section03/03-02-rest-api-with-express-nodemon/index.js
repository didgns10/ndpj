import express from "express"

const app = express()

//미들웨어 함수
app.get("/qqq", function (req, res) {
  res.send("Hello Worldsss")
})

app.listen(3000)
