// 1. Viết hàm `printNumbers(a, b)` nhận hai giá trị đầu vào `a`, `b` là hai số nguyên dương bất kỳ ($a < b$),
// in ra các số trong khoảng từ a - b theo thứ tự tăng dần

function printNumbers(a, b) {
  if (a < b && a > 0 && b > 0)
    for (let i = a; i <= b; i++) {
      console.log(i);
    }
  else console.log(`giá trị không hợp lệ`);
}

printNumbers(3, 9);
printNumbers(9, 3);

// 2. Viết hàm `printNumbers(a, b)` nhận hai giá trị đầu vào `a`, `b` là hai số nguyên dương bất kỳ ($a < b$),
// in ra các số trong khoảng từ a - b theo thứ tự giảm dần

function printNumbers2(a, b) {
  if (a < b && a > 0 && b > 0)
    for (let i = b; i >= a; i--) {
      console.log(i);
    }
  else console.log(`giá trị không hợp lệ`);
}

printNumbers2(9, 3);
printNumbers2(3, 9);

//3. Viết hàm `sumOfOddNumbers(a, b)` nhận hai giá trị đầu vào `a`, `b` là hai số nguyên dương bất kỳ,
// tính và ** trả về kết quả ** là tổng của các số lẻ trong khoảng từ a đến b(bao gồm cả a và b).

// 💡 Lưu ý trường hợp a có thể nhỏ hơn b

function isOddNumber(a) {
  if (a % 2 == 1) return true;
  else return false;
}

function sumOfOddNumbers(a, b) {
  let total = 0;
  if (a == b) {
    if (isOddNumber(a)) total = a;
    else total = undefined;
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      if (isOddNumber(i)) total = total + i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      if (isOddNumber(i)) total = total + i;
    }
  }
  return total;
}

console.log(sumOfOddNumbers(2, 10));
console.log(sumOfOddNumbers(11, 2));
console.log(sumOfOddNumbers(8, 8));

// 4. Viết hàm `divisor(number)` nhận một giá trị đầu vào `number` là một số bất kỳ, in ra các ước số của `number`

function divisor(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) console.log(i);
  }
}

divisor(25);
divisor(9);

// 5. Viết hàm `factorial(number)` nhận một giá trị đầu vào `number` là một số nguyên dương bất kỳ,
// tính và ** trả về kết quả ** là giai thừa của`number`

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  console.log(result);
}

factorial(0);
factorial(5);

//6. Viết hàm `countFolding(thickness)` nhận một giá trị đầu vào `thickness` là độ dày (đơn vị mét),
// tính số lần gấp một tờ giấy có độ dày 0.1mm để đạt được độ dày lớn hơn hoặc bằng với `thickness` truyền vào

function countFolding(t) {
  let paper = 0.1;
  let count = 0;

  t = t * 1000;

  while (paper < t) {
    paper *= 2;
    count++;
  }
  return count;
}

console.log(countFolding(1));

//7. Viết hàm `countYears(dad, son)` nhận hai giá trị đầu vào:

// - `dad` là số tuổi của cha (cha lớn hơn con ít nhất 18 tuổi :v)
// - `son` là số tuổi của con

// Tính xem sau bao nhiêu năm nữa thì tuổi cha gấp 2 lần tuổi con

function countYears(d, s) {
  let count = 0;
  for (let i = 1; s * 2 < d; i++) {
    d++;
    s++;
    count++;
  }
  return count;
}

console.log(countYears(30, 6));

// 8. Bài toán dân gian gà và chóa, tìm ra số chân gà và chóa:

//     Vừa gà vừa chó

//     Bó lại cho tròn

//     Ba mươi sáu con

//     Một trăm chân chẵn

function findDogLegsAndChickenLegs() {
  let d = 0;
  let c = 36;
  while (d * 4 + c * 2 < 100) {
    d++;
    c--;
  }
  console.log(`có ${d} con chó và ${c} con gà`);
}

findDogLegsAndChickenLegs();
