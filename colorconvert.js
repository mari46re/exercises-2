"use strict";

hexToRGB("#c0ffee");
cssToRGB();

function hexToRGB(hex) {
  let r;
  let g;
  let b;

  r = hex.substring(1, 3);
  g = hex.substring(3, 5);
  b = hex.substring(5, 7);

  console.log(r, g, b);
}

let rgbStr;

function cssToRGB(rgbStr) {
  let r;
  let g;
  let b;
  rgbStr = "rgb(192, 13, 1)";
  r = parseInt(rgbStr.substring(4, 7));
  g = parseInt(rgbStr.substring(9, 11));
  b = parseInt(rgbStr.substring(13, 14));

  console.log(typeof r, typeof g, typeof b);
  console.log(r, g, b);
}

function convertRGBToHex(r, g, b) {
  let hex;

  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  hex = `#${r}${g}${b}`;

  console.log(hex);
}

convertRGBToHex(475, 2, 222);
