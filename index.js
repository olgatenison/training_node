let os = require("os");
// let res = os.platform();
// console.log(res);

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
fs.unlink("./text-files/some.txt", () => {
  fs.rmdir("./text-files", () => {});
});
