const ralative = require("ralative");

const RALNUMBERARRAY = ralative.getRalNumbersArray();
console.log("RALNUMBERARRAY:", RALNUMBERARRAY);

const RALHEXARRAY = ralative.getRalHexCodeArray();
console.log("RALHEXARRAY:", RALHEXARRAY);

const COLORNAMEARRAY = ralative.getRalNamesArray();
console.log("COLORNAMEARRAY:", COLORNAMEARRAY);

const RAL1000 = ralative.getRalFromHex("#CCC58F");
console.log("#CCC58F RAL Number:", RAL1000);

ralative.getRalHexCodeArray().forEach((hexCode) => {
  console.log(hexCode, " RAL Number:", ralative.getRalFromHex(hexCode));
});

const hexCCC58F = ralative.getHexFromRalNumber("RAL 1000");
console.log("RAL 1000 Hex Code:", hexCCC58F);

ralative.getRalNumbersArray().forEach((ralNumber) => {
  console.log(ralNumber, " Hex Code:", ralative.getHexFromRalNumber(ralNumber));
});

const GREEN_BEIGE = ralative.getRalNamefromRalNumber("RAL 1000");
console.log("RAL 1000 Color Name:", GREEN_BEIGE);

ralative.getRalNumbersArray().forEach((ralNumber) => {
  console.log(
    ralNumber,
    " Color Name:",
    ralative.getralNamefromRalNumber(ralNumber)
  );
});

const ANALOGOUS1001 = ralative.getHarmoniousRalNumbers("RAL 1001");
console.log("2 RALs analogous to RAL 1001:", ANALOGOUS1001);

ANALOGOUS1001.forEach((ralNumber) => {
  console.log(
    ralNumber,
    "hex value is: ",
    ralative.getHexFromRalNumber(ralNumber)
  );
});

const VIBRANT6001 = ralative.getVibrantRalNumbers("RAL 6001");
console.log("2 split complementary RALs from RAL 6001:", VIBRANT6001);

VIBRANT6001.forEach((ralNumber) => {
  console.log(
    ralNumber,
    "hex value is: ",
    ralative.getHexFromRalNumber(ralNumber)
  );
});

const COLORHEXOBJ = ralative.getColorHexObject();
console.log(COLORHEXOBJ);
