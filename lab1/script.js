//1. Tạo hàm hello yêu cầu người dùng nhập vào tên sau đó in ra câu chào
let hello = function () {
  const yourName = prompt("What is your name?");

  const message = `Hello, nice to meet you, ${yourName}!`;

  console.log(message);
};
hello();
//2.  Viết chương trình nhập vào 2 số a và b. Tính và in ra tổng 2 giá trị

let sum = function (a, b) {
  let result = a + b;
  console.log(`${a} + ${b} = ${result}`);
};

sum(1, 2);
sum(16, 8);

//3. Viết chương trình nhập vào số c là nhiệt độ ở đơn vị celcius,
// F= C*1.8+32

let tempt = function (c) {
  let f = c * 1.8 + 32;
  console.log(`${c} degrees Celsius = ${f} degrees Fahrenheit`);
};

tempt(16);

//4. Viết chương trình tính diện tích hình chữ nhật với chiều dài x, chiều rộng y

let findArea = function (x, y) {
  let s = x * y;
  console.log(
    `If a rectangle has a width of ${x} meters and a length of ${y} meters, then its area is ${s} square meters`
  );
};

findArea(3, 4);

//5. Viết hàm USD2VND(n), hàm nhận một tham số (input) n là số tiền USD, tính và in ra số tiền tương ứng theo mệnh giá Việt Nam theo công thức:

//VND = USD * 23.500

let USD2VND = function (n) {
  let m = n * 23500;
  console.log(`${n} USD = ${m} VND`);
};

USD2VND(34);

/*
6. Tính lãi suất kép ngân hàng (kỳ quan thứ 8)
Viết hàm compoundInterest(P, r, n, t), hàm nhận 4 tham số (input):

P: số tiền gốc ban đầu
r: lãi suất hàng năm
n: số lần ghép lãi 1 năm (*)
t: số năm gửi ngân hàng
(*) Ví dụ gửi theo tháng thì 1 năm ghép lãi 12 lần => n = 12, gửi theo quý (3 tháng) thì 1 năm ghép lãi 4 lần => n = 4, gửi theo năm thì 1 năm ghép lãi 1 lần => n = 1, …

Công thức:

A = P * (1 + r / n)**(n * t)
*/

let compoundInterest = function (P, r, t) {
  const e = 12;
  let A = P * (1 + r / e) ** (e * t);
  console.log(
    `If you deposit VND${P}  in a bank with an interest rate of ${r} %/year, after ${t} years you will receive VND${A} `
  );
};

compoundInterest(1000000, 0.6, 0.5);
