function printSum(a, b) {
  let sum = a + b;
  console.log("The sum of " + a + " and " + b + " is " + sum);
}

function printLenght(x) {
  console.log(x.lengtht);
}

let num = 5;
while (num <= 25) {
  console.log(num);
  num++;
}
let num1 = 10;
while (num1 >= 1) {
  console.log(num1);
  num1--;
}

let example1 = [];
let example2 = [1, 12, 23, 1, 25];
let example3 = ["Hello", 55, true, null];

let example4 = ["Saikal", "Severa", "Jyldyz"];
console.log(example4);

let example5 = [
  "IssykKul",
  "Naryn",
  "JalalAbad",
  "Batken",
  "Osh",
  "Chyi",
  "Talas",
];
console.log(example5);

example4.push("Joldosh");
example4.unshift("Bakyt");
console.log(example4);

let name1 = example4.pop();
let name2 = example4.shift();
console.log(example4);

console.log(example4);
console.log(example4.length);

console.log("Hello, my name is " + example4[0]);
console.log("Hello, my name is " + example4[1]);
console.log("Hello, my name is " + example4[2]);

for (let i = 0; i < example4.lenght; i++) {
  console.log("Hello, my name is " + example4[i] + ". Nice to meet you.");
}
for (let i = 0; i < example5.lenght; i++) {
  console.log("Hello, my city" + example5[i] + ". Nice to meet you");
}

for (let name of example4) {
  console.log("Hello, I'm" + name);
}

for (let i in example4) {
  let name = example4[i];
  console.log("Hello, name is" + name);
}


