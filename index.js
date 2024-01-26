//Part 1
const color = "Red";

switch (color) {
  case "Red":
    console.log("Stop");
    break;
  case "Yellow":
    console.log("Caution");
    break;
  case "Green":
    console.log("Go");
    break;
}

//Part 2
const arr = [
  [11, 23],
  [31, 43],
  [35, 19],
];

for (let i = 0; i < arr.length; i++) {
  let subArray = arr[i];

  for (let j = 0; j < subArray.length; j++) {
    console.log(`arr[${i}, ${j}]] => `, subArray[j]);
  }
}

//Part 3
const product = {
  name: "milk",
  price: 2.99,
  inStock: true,
};

for (const props in product) {
  var propValue = product[props];
  console.log("property =>", props, ",", "value =>", propValue);
}

//Part 4
const { price, inStock } = product;

if (price <= 50 && inStock) {
  console.log("Available");
} else {
  console.log("Unavailable");
}
