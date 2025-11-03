// 5-to_integer.js
const input = process.argv[2];
const parsed = parseInt(input, 10);

if (isNaN(parsed)) {
  console.log("Not a number");
} else {
  console.log("My number: " + parsed);
}
