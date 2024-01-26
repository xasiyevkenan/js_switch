//Part 1
const dayOfWeek = "Wednesday";

switch (dayOfWeek) {
  case "Monday":
    console.log("Go to course.");
    break;
  case "Tuesday":
    console.log("Must do tasks.");
    break;
  case "Wednesday":
    console.log("Go to course.");
    break;
  case "Thursday":
    console.log("Must do tasks.");
    break;
  case "Friday":
    console.log("Go to course.");
    break;
  case "Saturday":
    console.log("Must do tasks.");
    break;
  case "Sunday":
    console.log("To do rest.");
    break;
}

//Part 2
const numbers = [22, 33, 44, 11, 23, 34, 34];
let sum = 0;

for (i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("Sum = >", sum);

//Part 3
const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit = >", fruits[i], ",", "Length = >", fruits[i].length);
}

//Part 4
const student = {
  name: "Nesirullah",
  grade: 65,
};

const { grade } = student;

if (grade >= 60) {
  console.log("Passed");
  return;
}

console.log("Fail");
