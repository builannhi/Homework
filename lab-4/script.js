const guestList = {
  Brandy: "Germany",
  Karla: "France",
  Wendy: "Japan",
};

function greeting(name) {
  const guestList = {
    Brandy: "Germany",
    Karla: "France",
    Wendy: "Japan",
  };

  if (name in guestList) {
    console.log(`Hi, I am ${name} and I am from ${guestList[name]}`);
  } else console.log(`Hi, I am a guess.`);
}

greeting("Brandy");
greeting("Nhi");

const family = {
  Susan: 32,
  Fred: 34,
};

function afterNYears(family, n) {
  for (let name in family) {
    family[name] = family[name] + n;
  }
  console.log(family);
}

afterNYears(family, 5);

// Khai báo một object dog mô tả về một con chó với các thông tin sau:

// name: Tên
// age: Tuổi
// bread: Giống chó
// gender: Giới tính
// color: Màu lông
// legs: Số chân
// favorite food: Thức ăn yêu thích
// Và các phương thức:

// eat(): In ra console thông báo theo mẫu {name} is eating {favorite food}, yum yum...
// run(): In ra console thông báo theo mẫu {name} is running on {legs} legs...
// bark(): In ra console thông báo theo mẫu Woof woof woof ...

const dog = {
  name: "jack",
  age: 2,
  breed: "corgi",
  gender: "male",
  color: "blue merle",
  legs: 4,
  favoritefood: "pate",
  eat() {
    console.log(`${this.name} is eating ${this.favoritefood}, yum yum`);
  },
  run() {
    console.log(`${this.name} is running on ${this.legs} legs`);
  },
  bark() {
    console.log(`woof woof woof`);
  },
};

// Thực hiện các yêu cầu sau đây, với mỗi yêu cầu về thêm/sửa/xóa thông tin đều in ra console để xem kết quả:

// In dog ra console
console.log(dog);
// Viết câu lệnh để in name ra console
console.log(dog.name);
// Viết câu lệnh để in favorite food ra console
console.log(dog["favoritefood"]);
// Viết câu lệnh để thay đổi color thành Brown
dog.color = "brown";
// Viết câu lệnh để tăng age thêm 2 tuổi
dog.age += 2;
// Viết câu lệnh gọi phương thức eat()
dog.eat();
// Viết câu lệnh gọi phương thức run()
dog.run();
// Sử dụng vòng lặp để in ra tất cả tên thuộc tính (key) ra console
for (let key in dog) {
  console.log(key);
}
// Sử dụng vòng lặp để in ra tất cả giá trị (value) ra console
for (let key in dog) {
  console.log(dog[key]);
}
// Viết câu lệnh để thêm một thuộc tính isCrazy vào dog với giá trị boolean tùy ý
dog.isCrazy = true;
// Viết câu lệnh để thêm một phương thức crazy() vào dog,
// kiểm tra nếu isCrazy là false thì in ra theo mẫu { name } is not crazy,
// nếu isCrazy là true thì sử dụng vòng lặp để gọi 2 phương thức run() và bark() 5 lần(con chó bị điên),
// kết quả sẽ in ra console dạng { name } is running on { legs } legs ... Woof woof woof ... { name } is running ... Woof woof woof
dog.crazy = function () {
  if (this.isCrazy) {
    for (let i = 0; i < 5; i++) {
      this.run();
      this.bark();
    }
  } else {
    console.log(`${this.name} is not crazy`);
  }
};

dog.crazy();

// Viết câu lệnh đảo ngược giá trị của isCrazy

dog.isCrazy = !dog.isCrazy;
// Viết câu lệnh gọi phương thức crazy()

dog.crazy();
// Viết câu lệnh xóa isCrazy khỏi dog

delete dog.isCrazy;
// Viết câu lệnh gọi phương thức crazy(), chú ý kết quả in ra và comment lý do vì sao lại in ra như vậy

dog.crazy();
// kết quả in ra là 'jack is not crazy' vì trong phương thức crazy có else không bao gồm điều kiện

// Sử dụng vòng lặp để in ra tất cả thuộc tính và giá trị tương ứng (không phải phương thức)
// trong dog ra console(sử dụng typeof để kiểm tra kiểu) theo mẫu { key } có giá trị là { value }

for (let key in dog) {
  if (typeof dog[key] !== "function") console.log(dog[key]);
}
// Viết câu lệnh khai báo một biến mới clone và gán giá trị của dog cho clone

let clone = dog;
// Viết câu lệnh in clone và dog ra console, chú ý kết quả
console.log(dog);

console.log(clone);
// Viết câu lệnh chỉnh sửa name trong clone thành một tên khác bất kỳ
clone.name = "andy";
// Viết câu lệnh in clone và dog ra console, chú ý kết quả
console.log(dog);

console.log(clone);
// Viết câu lệnh khai báo một object mới copy rỗng {}
let copy = {};
// Sử dụng vòng lặp để sao chép từng thông tin (cả thuộc tính và phương thức) trong dog sang copy
for (const key in dog) {
  copy[key] = dog[key];
}

// Viết câu lệnh in copy và dog ra console, chú ý kết quả
console.log(dog);

console.log(copy);

// Viết câu lệnh chỉnh sửa name trong copy thành tên khác bất kỳ
copy.name = "brian";
// Viết câu lệnh in copy và dog ra console, chú ý kết quả
console.log(dog);

console.log(copy);
