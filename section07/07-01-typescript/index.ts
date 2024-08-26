// 타입추론
let aaa = "안녕하세요"
aaa = "a"

// 타입명시
let bbb: string = "안녕하세요"
bbb = "b"

// 타입명시가 필요한 상황
let ccc: number | string = 1000
ccc = "1000원"
