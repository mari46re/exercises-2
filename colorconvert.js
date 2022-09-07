"use strict";

cssToRGB();
function cssToRGB(rgbStr) {
  // let rgbStr;

  let r;
  let g;
  let b;
  rgbStr = "rgb(192, 13, 1)";
  r = parseInt(rgbStr.substring(4, 7));
  g = parseInt(rgbStr.substring(9, 11));
  b = parseInt(rgbStr.substring(13, 14));

  // console.log(typeof r, typeof g, typeof b);
  console.log(r, g, b);
}

function convertRGBToHex(r, g, b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  console.log(r, g, b);
  return `#${r}${g}${b}`;
}
const rgb = convertRGBToHex(475, 2, 222);

console.log("HEX: ", rgb);

const hex = hexToRGB("#c0ffee");

function hexToRGB(hex) {
  let r;
  let g;
  let b;

  r = parseInt(hex.substring(1, 3), 16);
  g = parseInt(hex.substring(3, 5), 16);
  b = parseInt(hex.substring(5, 7), 16);

  return `rgb(${r}, ${g}, ${b})`;
}

console.log("RGB: ", hex);
