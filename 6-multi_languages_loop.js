// 6-multi_languages_loop.js
const langs = ["C is fun", "Python is cool", "JavaScript is amazing"];
let out = "";

for (let i = 0; i < langs.length; i++) {
  out += langs[i];
  if (i !== langs.length - 1) {
    out += "\n";
  }
}

console.log(out);
