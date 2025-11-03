// 8-square.js
const raw = process.argv[2];
const size = parseInt(raw, 10);

if (isNaN(size)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}
