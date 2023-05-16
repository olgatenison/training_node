let os = require("os");
// let res = os.platform();
// console.log(res);

//insert my functions
// const my_math = require("./my_math");
// let res1 = my_math.add(4, 5);
// let res2 = my_math.minus(10, 5);
// console.log(res1);
// console.log(res2);

const fs = require("fs");
//make a file and a txt inside
// let result = fs.readFileSync("some.txt", "utf-8");
// console.log(result);
// fs.writeFileSync("some.txt", result + "\nhello world");

//make a folder and a file
//fs.mkdirSync("text-files");

// fs.mkdir("text-files", () => {
//   fs.writeFile("./text-files/some.txt", "hello!", () => {});
// });

//delite folder
// fs.unlink("./text-files/some.txt", () => {
//   fs.rmdir("./text-files", () => {});
// });

const http = require("http");

//request - запрос response - ответ
let server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  //res.end("Hello <b>Node JS</b>");

  // 2 part
  //const stream = fs.createReadStream("templates/index.html");
  //выдает кусками сайт
  //stream.pipe(res);

  // 3 part with different pages
  if (req.url == "/") {
    fs.createReadStream("./templates/index.html").pipe(res);
  } else if (req.url == "/about") {
    fs.createReadStream("./templates/about.html").pipe(res);
  } else {
    fs.createReadStream("./templates/error.html").pipe(res);
  }
});
const PORT = 3000;
// localhost = 127.0.0.1
const HOST = "localhost";

server.listen(PORT, HOST, () => {
  console.log(`Сервер запущен: http://${HOST}:${PORT}`);
});
