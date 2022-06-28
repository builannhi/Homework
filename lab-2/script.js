function findBMI(w, h) {
  let BMI = w / h ** 2;
  if (BMI <= 16) {
    console.log("Gầy độ III");
  } else if (BMI > 16 && BMI <= 17.5) {
    console.log("Gầy độ II");
  } else if (BMI > 17.5 && BMI <= 18.5) {
    console.log("Gầy độ I");
  } else if (BMI > 18.5 && BMI <= 25) {
    console.log("Bình thường");
  } else if (BMI > 25 && BMI <= 30) {
    console.log("Hơi béo");
  } else if (BMI > 30 && BMI <= 35) {
    console.log("Béo phì độ I");
  } else if (BMI > 35 && BMI <= 40) {
    console.log("Béo phì độ II");
  } else if (BMI > 40 && BMI <= 45) {
    console.log("Béo phì độ III");
  }
}

findBMI(61, 1.62);

//5. Viết hàm `maxOfThree(a, b, c)` nhận ba giá trị đầu vào `a`, `b`, `c` là 3 số bất kỳ. 
// Kiểm tra và in ra kết quả số lớn nhất trong 3 số(lưu ý trường hợp các số có giá trị bằng nhau)

function findMaxOfThree(a, b, c) {
  if (a >= b && a >= c) {
    console.log(`số lớn nhất là ${a}`);
  } else if (b >= a && b >= c) {
    console.log(`số lớn nhất là ${b}`);
  } else if (c >= a && c >= b) {
    console.log(`số lớn nhất là ${c}`);
  }
}

findMaxOfThree(5, 8, 2);
findMaxOfThree(10, 8, 2);

function calcWaterBill(m3) {
  let price;
  if (m3 <= 5) {
    price = 45000;
  } else if (m3 <= 10) {
    price = m3 * 9000;
  } else if (m3 <= 20) {
    price = 90000 + (m3 - 10) * 11000;
  } else if (m3 <= 30) {
    price = 90000 + 110000 + (m3 - 20) * 13000;
  } else {
    price = 90000 + 110000 + 130000 + (m3 - 30) * 15000;
  }
  console.log(`Sử dụng ${m3}m3 nước cần thanh toán ${price} VND`);
}

calcWaterBill(23);
calcWaterBill(4);
calcWaterBill(12);
calcWaterBill(35);

function calcElectricBill(kw) {
  let ePrice;
  if (kw <= 50) {
    ePrice = 1500 * kw;
  } else if (kw <= 100) {
    ePrice = 1500 * 50 + (kw - 50) * 2000;
  } else if (kw <= 200) {
    ePrice = 1500 * 50 + 2000 * 50 + (kw - 100) * 2500;
  } else if (kw <= 400) {
    ePrice = 1500 * 50 + 2000 * 50 + 2500 * 100 + (kw - 200) * 3000;
  } else {
    ePrice =
      1500 * 50 + 2000 * 50 + 2500 * 100 + 3000 * 200 + (kw - 400) * 4000;
  }
  console.log(`Sử dụng ${kw}kw điện phải trả ${ePrice} VND`);
}

calcElectricBill(346);
calcElectricBill(50);
calcElectricBill(401);

// 4. Viết hàm `calcTaxiFee(km)` nhận một giá trị đầu vào `km` là số km đã đi, tính và **trả về kết quả** là số tiền phải trả cho khách đi taxi theo số kilomet (km) đã di chuyển. Quy định như sau:

    // - Phí mở cửa 10.000
    // - Giá cho 30km đầu tiên là 11.000đ/km
    // - Giá cho km thứ 31 trở đi là 9.500đ/km
    // - Tổng tiền = Phí mở cửa + Tổng tiền trên số km

function calcTaxiFee(km) {
  let p;
  let openFee = 10000;
  if (km <= 30) {
    p = openFee + 11000 * km;
  } else {
    p = openFee + 11000 * 30 + (km - 30) * 9500;
  }
  console.log(`Phí taxi sau ${km}km là ${p} VND`);
}

calcTaxiFee(15);
calcTaxiFee(35);

// 3. Viết hàm `calcGrade(point)` nhận một giá trị đầu vào `point` là điểm trung bình của sinh viên, kiểm tra và **trả về kết quả** xếp loại tốt nghiệp của sinh viên theo số điểm trung bình (point). Quy định như sau:

    // - $ point < 4.0 $: Xếp loại F
    // - $ 4.0 \le point < 5.5 $: Xếp loại D
    // - $ 5.5 \le point < 7.0 $: Xếp loại C
    // - $ 7.0 \le point < 8.5 $: Xếp loại B
    // - $ point \ge 8.5$: Xếp loại A


function calcGrade(point) {
  if (point < 4.0) {
    console.log(`Xếp loại F`);
  } else if (point < 5.5) {
    console.log(`Xếp loại D`);
  } else if (point < 7.0) {
    console.log(`Xếp loại C`);
  } else if (point < 8.5) {
    console.log(`Xếp loại B`);
  } else {
    console.log(`Xếp loại A`);
  }
}

calcGrade(3.4);
calcGrade(5.9);
calcGrade(9.1);

// let password = "techmaster";
// let typePassword = prompt("Nhập mật khẩu");

// while (typePassword != password) {
//   typePassword = prompt("Sai mật khẩu, mời nhập lại mật khẩu");
// }

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

let total = 0;

for (let index = 1; index <= 100; index++) {
  if (index % 2 == 0) {
    total = total + index;
  }
}

console.log(`Tổng các số chẵn trong dãy từ 1 đến 100 là ${total}`);

// 2. Viết chương trình lặp giá trị i từ 1 đến 10, với mỗi giá trị i, kiểm tra xem:
// - Nếu i chia hết cho 3 thì in ra console “Fizz”
// - Nếu i chia hết cho 5 thì in ra console “Buzz”
// - Nếu i chia hết cho cả 3 và 5 thì in ra “FizzBuzz”

for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    console.log(`FizzBuzz`);
  } else if (i % 3 == 0) {
    console.log(`Fizz`);
  } else if (i % 5 == 0) {
    console.log(`Buzz`);
  }
}

// // 1. Viết chương trình lặp giá trị i từ 1 đến 10, với mỗi giá trị i, kiểm tra xem nó là chẵn hay lẻ và in ra console

for (i = 1; i <= 10; i++) {
  if (i % 2 == 0) console.log(`${i} là số chẵn`);
  else console.log(`${i} là số lẻ`);
}

// 3. Viết chương trình kiểm tra xem một số nguyên dương n có phải số nguyên tố hay không
// Biết số nguyên tố là số chỉ chia hết cho chính nó và 1

function isPrime(n) {
  if (n < 2) return false;

  for (i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(10));

// 4. Viết chương trình in ra chữ số đầu và cuối của một số n (VD: 12345 -> 15)

function firstAndLastNum(m) {
  for (i = 0; i <= m; i++) {
    let k = 10 ** (i - 1);
    let result = ((m - (m % k)) / k) * 10 + (m % 10);
    if (m < 10 ** i) return result;
  }
}

console.log(firstAndLastNum(2367));
console.log(firstAndLastNum(7));
console.log(firstAndLastNum(1000));

// 1. Viết hàm `isOddNumber(number)` nhận một giá trị đầu vào `number` là một số
//  nguyên bất kỳ, kiểm tra và trả về kết quả số đó có phải là số lẻ(`true`) hay không(`false`)

function isOddNumber(number) {
  if (number % 2 == 0) return false;
  else return true;
}

console.log(isOddNumber(12));
console.log(isOddNumber(23));

// 2. Viết hàm `maxOfTwo(a, b)` nhận hai giá trị đầu vào `a`, `b` là 2 số bất kỳ, kiểm tra và trả về số lớn hơn

function maxOfTwo(a, b) {
  if (a > b) return a;
  else if (a < b) return b;
}

console.log(maxOfTwo(1, 2));
console.log(maxOfTwo(2, 2));

//3. Viết hàm `divisibleByThreeAndFive(number)` nhận một giá trị đầu vào `number` là một số nguyên bất kỳ, kiểm tra và **trả về kết quả**
// cho biết số đó có chia hết cho cả `3` và`5`(`true`) hay không(`false`)

function divisibleByThreeAndFive(number) {
  if (number % 15 == 0) return true;
  else return false;
}

console.log(divisibleByThreeAndFive(30));
console.log(divisibleByThreeAndFive(56));

// 4. Viết hàm `season(month)` nhận một giá trị đầu vào `month` là một tháng trong năm (number), kiểm tra và in ra mùa tương ứng với tháng đó:

// - Winter (12, 1, 2)
// - Spring (3, 4, 5)
// - Summer (6, 7, 8)
// - Fall (9, 10, 11)

function season(month) {
  if (month >= 3 && month <= 5) return "Spring";
  else if (month >= 6 && month <= 8) return "Summer";
  else if (month >= 9 && month <= 11) return "Fall";
  else if ((month >= 1 && month <= 2) || month == 12) return "Winter";
}

console.log(season(12));
console.log(season(5));

//Viết hàm `trafficLight(light)` nhận một giá trị đầu vào `light` là tín hiệu đèn giao thông (`Red`, `Yellow`, `Green`),
//in ra thông báo tương ứng với tín hiệu đèn:

// - `Green`: Được phép di chuyển
// - `Yellow`: Giảm tốc độ và dừng lại
// - `Red`: Dừng lại

function trafficLight(light) {
  if (light == "green") return "Được phép di chuyển";
  else if (light == "yellow") return "Giảm tốc độ và dừng lại";
  else if (light == "red") return "Dừng lại";
}

console.log(trafficLight("green"));
console.log(trafficLight("red"));
console.log(trafficLight("yellow"));

// 6. Viết hàm `calcCommissions(totalSales)` nhận một giá trị đầu vào `totalSales` là tổng doanh số bán hàng của một đại lý, kiểm tra và **trả về kết quả** là tiền hoa hồng mà đại lý nhận được quy định như sau:

//     - Nếu $totalSales \le 100 triệu$ thì hoa hồng nhận được là $5\%$
//     - Nếu $100 triệu \lt totalSales \le 300 triệu$ thì hoa hồng là $10\%$
//     - Nếu $totalSales \gt 300 triệu$ thì hoa hồng là $20\%$



// 1. Viết hàm `isLeafYear(year)` nhận một giá trị đầu vào `year` là một năm bất kỳ, kiểm tra và trả về kết quả năm đó có phải là năm nhuận (`true`) hay không (`false`)

//     💡 Tính theo lịch [Gregory](https://vi.wikipedia.org/wiki/N%C4%83m_nhu%E1%BA%ADn#:~:text=m%C3%A3%20ngu%E1%BB%93n%5D-,L%E1%BB%8Bch%20Gregorius,-%5Bs%E1%BB%ADa%20%7C)

function isLeafYear(year) {
  if (
    (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeafYear(1978));
console.log(isLeafYear(2020));


//2. Viết hàm `daysOfMonth(month)` nhận một giá trị đầu vào `month`, trả về số ngày của tháng đó:

    // - Các tháng 1, 3, 5, 7, 8, 10, 12 có 31 ngày
    // - Các tháng 4, 6, 9, 11 có 30 ngày
    // - Tháng 2 có 29 ngày nếu là năm nhuận, nếu không là 28 ngày

function daysOfMonth(month, year){
  
  if (month === 2) {
    if (
      (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
    ) {
      return 29;
    } else {
      return 28;
    };

  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;

  } else return 31;
}
  
console.log(daysOfMonth(2, 2020));
console.log(daysOfMonth(2, 1978));
console.log(daysOfMonth(12, 2022));

// 6. Viết hàm `solveEquation(a, b, c)` nhận ba giá trị đầu vào `a`, `b`, `c` tương ứng là 3 tham số của phương trình bậc 2 $ax^2 + bx + c$ = 0, tìm và trả về nghiệm của phương trình:

//     - Nếu $a = 0$ và $b = 0$ thì phương trình vô nghiệm (trả về `null`)
//     - Nếu $a = 0$ thì phương trình có một nghiệm $$ -b \over a $$
//     - Nếu $a \ne 0$ thì tính $delta = b^2 - 4ac$
//         - Nếu $delta \lt 0$ thì phương trình vô nghiệm (trả về `null`)
//         - Nếu $delta \ge 0$ thì phương trình có 2 nghiệm: $$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$
//     - Lưu ý kết quả trả về nếu có nghiệm là một mảng chứa các nghiệm của phương trình, cú pháp `[x1, x2]`

function solveEquation(a, b, c) {
  if (a == 0 && b == 0) return null;
  else if (a == 0 && b !== 0) return [-b / c];
  else if (a !== 0) {
    let delta = b ** 2 - 4 * a * c;
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    if (delta == 0) return [-b / 2 * a];
    else if (delta > 0) return [x1, x2];
    else return null;
  }
}

console.log(solveEquation(1, 2, 1));
console.log(solveEquation(1, -3, -10));