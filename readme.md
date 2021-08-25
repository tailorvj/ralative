## The RALative node.js module

I've written this module in order to allow easy use of the RAL color wheel in JS solutions and specifically in the ProtoNFT Avatar Generator my team is building for the NFT Hack Hackathon and the Women in Blockchain community. 

Some of the code here has been adpated from a Flutter app my team has written a few months ago, named ColorMatch. It had some bugs in it actually, so I'm glad I got the chance to rebuild and extend it in JS. 

### Changelog

#### RALative 1.0.3

* exporting ralName, ralHexCode and ralNumber for direct referencing in scripts

#### RALative 1.0.2

* Added an example folder
* Fixed minor naming bugs and other exports problems
* All functions manually tested and seem to be working
* No safeguards yet, but fully functional

#### RALative 1.0.1

* Added getRalNumbersArray()
* Added getRalHexCodeArray()
* Added getRalNamesArray()

### Add the library to your solution

```bash

$ npm install ralative --save

```

### Import in your JS

```javascript

const ralative = require("ralative");

```


### Available functions

#### getRalNumbersArray() 

Returns an array of all RAL numbers in the format "RAL XXXX"

For example, 

```javascript

const RALNUMBERARRAY = ralative.getRalNumbersArray();

```

#### getRalHexCodeArray() 

Returns an array of all RAL hex codes in the format "#123456"

For example, 

```javascript

const RALHEXARRAY = ralative.getRalHexCodeArray();

```

#### getRalNamesArray() 

Returns an array of all RAL hex codes in the format "Green beige"

For example, 

```javascript

const COLORNAMEARRAY = ralative.getRalNamesArray();

```

#### getRalFromHex(hex)

This function expects a hex code from the offical RAL list as input and will return the RAL number in the format "RAL XXXX", where XXXX is the RAL number

For example

```javascript

const RAL1000 = ralative.getRalFromHex("#CCC58F");

```

#### getHexFromRalNumber(ral)

This function expects an official RAL number in the format "RAL XXXX" as input and will return the corresponding hex value

For example,

```javascript

const hexCCC58F = ralative.getHexFromRalNumber("RAL 1000");

```

#### getRalNamefromRalNumber(ral)

This function expects an official RAL number in the format "RAL XXXX" as input and will return the corresponding official color name in English

For example,

```javascript

const GREEN_BEIGE = ralative.getRalNamefromRalNumber("RAL 1000");

```

#### getHarmoniousRalNumbers(ral)

This function expects an official RAL number in the format "RAL XXXX" as input and will return an Array with two adjacent RAL numbers in it

For example,

```javascript

//returns ["RAL 1000", "RAL 1002" ]
const ANALOGOUS1001 = ralative.getHarmoniousRalNumbers("RAL 1001");

```

From here you could easily get the hex values for each of the RALs retured from the function by doing

```javascript

let firstAnalogousHex = ralative.getHexFromRal(ANALOGOUS1001[0]);

let secondAnalogousHex = ralative.getHexFromRal(ANALOGOUS1001[1]);

```

#### getVibrantRalNumbers(ral)

This function expects an official RAL number in the format "RAL XXXX" as input and will return an Array with two split complementary RAL numbers in it

For example,

```javascript

//returns ["RAL 1020", "RAL 8024" ]
const VIBRANT6001 = ralative.getVibrantRalNumbers("RAL 6001");

```


From here you could easily get the hex values for each of the RALs retured from the function by doing

```javascript

let firstVibranHex = ralative.getHexFromRal(VIBRANT6001[0]);

let secondVibrantHex = ralative.getHexFromRal(VIBRANT6001[1]);

```

#### getColorHexObject() 

This function will return an object with color names and their corresponding hex values

For example,

```javascript

//returns an object with all color names and their hex values
const COLORHEXOBJ = ralative.getColorHexObject();

```