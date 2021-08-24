exports.getRalFromHex = (hex) => {
  return ralNumber[ralHexCode.indexOf(hex)];
};

exports.getHexFromRalNumber = (ral) => {
  return ralHexCode[ralNumber.indexOf(ral)];
};

exports.getRalNamefromRalNumber = (ral) => {
  return ralName[ralNumber.indexOf(ral)];
};

exports.getHarmoniousRalNumbers = (ral) => {
  let ralIndex = ralNumber.indexOf(ral);

  let first = _fixIndex(ralIndex - 1);
  let second = _fixIndex(ralIndex + 1);

  return [ralNumber[first], ralNumber[second]];
};

exports.getVibrantRalNumbers = (ral) => {
  let ralIndex = ralNumber.indexOf(ral);

  // split complementary 150 angle.
  // size of ral list 213
  // 213/360 = 0.5917
  //150 * 0.5917 = 88.75
  const angleRAL = 89;

  let first = _fixIndex(ralIndex + angleRAL);
  let second = _fixIndex(ralIndex - angleRAL);

  return [ralNumber[first], ralNumber[second]];
};

exports.getColorHexObject = () => {
  return Object.assign(...ralName.map((k, i) => ({ [k]: ralHexCode[i] })));
};

const _fixIndex = (newIndex) => {
  if (newIndex >= ralNumber.length) {
    return newIndex - ralNumber.length;
  }

  if (newIndex < 0) {
    return ralNumber.length + newIndex;
  }

  return newIndex;
};

exports.getRalNumbersArray = () => {
  return ralNumber;
};

exports.getRalHexCodeArray = () => {
  return ralHexCode;
};

exports.getRalNamesArray = () => {
  return ralName;
};

const ralNumber = [
  "RAL 1000",
  "RAL 1001",
  "RAL 1002",
  "RAL 1003",
  "RAL 1004",
  "RAL 1005",
  "RAL 1006",
  "RAL 1007",
  "RAL 1011",
  "RAL 1012",
  "RAL 1013",
  "RAL 1014",
  "RAL 1015",
  "RAL 1016",
  "RAL 1017",
  "RAL 1018",
  "RAL 1019",
  "RAL 1020",
  "RAL 1021",
  "RAL 1023",
  "RAL 1024",
  "RAL 1026",
  "RAL 1027",
  "RAL 1028",
  "RAL 1032",
  "RAL 1033",
  "RAL 1034",
  "RAL 1035",
  "RAL 1036",
  "RAL 1037",
  "RAL 2000",
  "RAL 2001",
  "RAL 2002",
  "RAL 2003",
  "RAL 2004",
  "RAL 2005",
  "RAL 2007",
  "RAL 2008",
  "RAL 2009",
  "RAL 2010",
  "RAL 2011",
  "RAL 2012",
  "RAL 2013",
  "RAL 3000",
  "RAL 3001",
  "RAL 3002",
  "RAL 3003",
  "RAL 3004",
  "RAL 3005",
  "RAL 3007",
  "RAL 3009",
  "RAL 3011",
  "RAL 3012",
  "RAL 3013",
  "RAL 3014",
  "RAL 3015",
  "RAL 3016",
  "RAL 3017",
  "RAL 3018",
  "RAL 3020",
  "RAL 3022",
  "RAL 3024",
  "RAL 3026",
  "RAL 3027",
  "RAL 3028",
  "RAL 3031",
  "RAL 3032",
  "RAL 3033",
  "RAL 4001",
  "RAL 4002",
  "RAL 4003",
  "RAL 4004",
  "RAL 4005",
  "RAL 4006",
  "RAL 4007",
  "RAL 4008",
  "RAL 4009",
  "RAL 4010",
  "RAL 4011",
  "RAL 4012",
  "RAL 5000",
  "RAL 5001",
  "RAL 5002",
  "RAL 5003",
  "RAL 5004",
  "RAL 5005",
  "RAL 5007",
  "RAL 5008",
  "RAL 5009",
  "RAL 5010",
  "RAL 5011",
  "RAL 5012",
  "RAL 5013",
  "RAL 5014",
  "RAL 5015",
  "RAL 5017",
  "RAL 5018",
  "RAL 5019",
  "RAL 5020",
  "RAL 5021",
  "RAL 5022",
  "RAL 5023",
  "RAL 5024",
  "RAL 5025",
  "RAL 5026",
  "RAL 6000",
  "RAL 6001",
  "RAL 6002",
  "RAL 6003",
  "RAL 6004",
  "RAL 6005",
  "RAL 6006",
  "RAL 6007",
  "RAL 6008",
  "RAL 6009",
  "RAL 6010",
  "RAL 6011",
  "RAL 6012",
  "RAL 6013",
  "RAL 6014",
  "RAL 6015",
  "RAL 6016",
  "RAL 6017",
  "RAL 6018",
  "RAL 6019",
  "RAL 6020",
  "RAL 6021",
  "RAL 6022",
  "RAL 6024",
  "RAL 6025",
  "RAL 6026",
  "RAL 6027",
  "RAL 6028",
  "RAL 6029",
  "RAL 6032",
  "RAL 6033",
  "RAL 6034",
  "RAL 6035",
  "RAL 6036",
  "RAL 6037",
  "RAL 6038",
  "RAL 7000",
  "RAL 7001",
  "RAL 7002",
  "RAL 7003",
  "RAL 7004",
  "RAL 7005",
  "RAL 7006",
  "RAL 7008",
  "RAL 7009",
  "RAL 7010",
  "RAL 7011",
  "RAL 7012",
  "RAL 7013",
  "RAL 7015",
  "RAL 7016",
  "RAL 7021",
  "RAL 7022",
  "RAL 7023",
  "RAL 7024",
  "RAL 7026",
  "RAL 7030",
  "RAL 7031",
  "RAL 7032",
  "RAL 7033",
  "RAL 7034",
  "RAL 7035",
  "RAL 7036",
  "RAL 7037",
  "RAL 7038",
  "RAL 7039",
  "RAL 7040",
  "RAL 7042",
  "RAL 7043",
  "RAL 7044",
  "RAL 7045",
  "RAL 7046",
  "RAL 7047",
  "RAL 7048",
  "RAL 8000",
  "RAL 8001",
  "RAL 8002",
  "RAL 8003",
  "RAL 8004",
  "RAL 8007",
  "RAL 8008",
  "RAL 8011",
  "RAL 8012",
  "RAL 8014",
  "RAL 8015",
  "RAL 8016",
  "RAL 8017",
  "RAL 8019",
  "RAL 8022",
  "RAL 8023",
  "RAL 8024",
  "RAL 8025",
  "RAL 8028",
  "RAL 8029",
  "RAL 9001",
  "RAL 9002",
  "RAL 9003",
  "RAL 9004",
  "RAL 9005",
  "RAL 9006",
  "RAL 9007",
  "RAL 9010",
  "RAL 9011",
  "RAL 9016",
  "RAL 9017",
  "RAL 9018",
  "RAL 9022",
  "RAL 9023",
];

const ralHexCode = [
  "#CCC58F",
  "#D1BC8A",
  "#D2B773",
  "#F7BA0B",
  "#E2B007",
  "#C89F04",
  "#E1A100",
  "#E79C00",
  "#AF8A54",
  "#D9C022",
  "#E9E5CE",
  "#DFCEA1",
  "#EADEBD",
  "#EAF044",
  "#F4B752",
  "#F3E03B",
  "#A4957D",
  "#9A9464",
  "#EEC900",
  "#F0CA00",
  "#B89C50",
  "#F5FF00",
  "#A38C15",
  "#FFAB00",
  "#DDB20F",
  "#FAAB21",
  "#EDAB56",
  "#A29985",
  "#927549",
  "#EEA205",
  "#DD7907",
  "#BE4E20",
  "#C63927",
  "#FA842B",
  "#E75B12",
  "#FF2300",
  "#FFA421",
  "#F3752C",
  "#E15501",
  "#D4652F",
  "#EC7C25",
  "#DB6A50",
  "#954527",
  "#AB2524",
  "#A02128",
  "#A1232B",
  "#8D1D2C",
  "#701F29",
  "#5E2028",
  "#402225",
  "#703731",
  "#7E292C",
  "#CB8D73",
  "#9C322E",
  "#D47479",
  "#E1A6AD",
  "#AC4034",
  "#D3545F",
  "#D14152",
  "#C1121C",
  "#D56D56",
  "#F70000",
  "#FF0000",
  "#B42041",
  "#E72512",
  "#AC323B",
  "#711521",
  "#B24C43",
  "#8A5A83",
  "#933D50",
  "#D15B8F",
  "#691639",
  "#83639D",
  "#992572",
  "#4A203B",
  "#904684",
  "#A38995",
  "#C63678",
  "#8773A1",
  "#6B6880",
  "#384C70",
  "#1F4764",
  "#2B2C7C",
  "#2A3756",
  "#1D1F2A",
  "#154889",
  "#41678D",
  "#313C48",
  "#2E5978",
  "#13447C",
  "#232C3F",
  "#3481B8",
  "#232D53",
  "#6C7C98",
  "#2874B2",
  "#0E518D",
  "#21888F",
  "#1A5784",
  "#0B4151",
  "#07737A",
  "#2F2A5A",
  "#4D668E",
  "#6A93B0",
  "#296478",
  "#102C54",
  "#327662",
  "#28713E",
  "#276235",
  "#4B573E",
  "#0E4243",
  "#0F4336",
  "#40433B",
  "#283424",
  "#35382E",
  "#26392F",
  "#3E753B",
  "#68825B",
  "#31403D",
  "#797C5A",
  "#444337",
  "#3D403A",
  "#026A52",
  "#468641",
  "#48A43F",
  "#B7D9B1",
  "#354733",
  "#86A47C",
  "#3E3C32",
  "#008754",
  "#53753C",
  "#005D52",
  "#81C0BB",
  "#2D5546",
  "#007243",
  "#0F8558",
  "#478A84",
  "#7FB0B2",
  "#1B542C",
  "#005D4C",
  "#25E712",
  "#00F700",
  "#7E8B92",
  "#8F999F",
  "#817F68",
  "#7A7B6D",
  "#9EA0A1",
  "#6B716F",
  "#756F61",
  "#746643",
  "#5B6259",
  "#575D57",
  "#555D61",
  "#596163",
  "#555548",
  "#51565C",
  "#373F43",
  "#2E3234",
  "#4B4D46",
  "#818479",
  "#474A50",
  "#374447",
  "#939388",
  "#5D6970",
  "#B9B9A8",
  "#818979",
  "#939176",
  "#CBD0CC",
  "#9A9697",
  "#7C7F7E",
  "#B4B8B0",
  "#6B695F",
  "#9DA3A6",
  "#8F9695",
  "#4E5451",
  "#BDBDB2",
  "#91969A",
  "#82898E",
  "#CFD0CF",
  "#888175",
  "#887142",
  "#9C6B30",
  "#7B5141",
  "#80542F",
  "#8F4E35",
  "#6F4A2F",
  "#6F4F28",
  "#5A3A29",
  "#673831",
  "#49392D",
  "#633A34",
  "#4C2F26",
  "#44322D",
  "#3F3A3A",
  "#211F20",
  "#A65E2F",
  "#79553C",
  "#755C49",
  "#4E3B31",
  "#763C28",
  "#FDF4E3",
  "#E7EBDA",
  "#F4F4F4",
  "#282828",
  "#0A0A0A",
  "#A5A5A5",
  "#8F8F8F",
  "#FFFFFF",
  "#1C1C1C",
  "#F6F6F6",
  "#1E1E1E",
  "#D7D7D7",
  "#9C9C9C",
  "#828282",
];

const ralName = [
  "Green beige",
  "Beige",
  "Sand yellow",
  "Signal yellow",
  "Golden yellow",
  "Honey yellow",
  "Maize yellow",
  "Daffodil yellow",
  "Brown beige",
  "Lemon yellow",
  "Oyster white",
  "Ivory",
  "Light ivory",
  "Sulfur yellow",
  "Saffron yellow",
  "Zinc yellow",
  "Grey beige",
  "Olive yellow",
  "Rape yellow",
  "traffic yellow",
  "Ochre yellow",
  "Luminous yellow",
  "Curry",
  "Melon yellow",
  "Broom yellow",
  "Dahlia yellow",
  "Pastel yellow",
  "Pearl beige",
  "Pearl gold",
  "Sun yellow",
  "Yellow orange",
  "Red orange",
  "Vermillion",
  "Pastel orange",
  "Pure orange",
  "Luminous orange",
  "Luminous bright orange",
  "Bright red orange",
  "traffic orange",
  "Signal orange",
  "Deep orange",
  "Salmon orange",
  "Pearl orange",
  "Flame red",
  "Signal red",
  "Carmine red",
  "Ruby red",
  "Purple red",
  "Wine red",
  "Black red",
  "Oxide red",
  "Brown red",
  "Beige red",
  "Tomato red",
  "Antique pink",
  "Light pink",
  "Coral red",
  "Rose",
  "Strawberry red",
  "traffic red",
  "Salmon pink",
  "Luminous red",
  "Luminous bright red",
  "Raspberry red",
  "Pure red",
  "Orient red",
  "Pearl ruby red",
  "Pearl pink",
  "Red lilac",
  "Red violet",
  "Heather violet",
  "Claret violet",
  "Blue lilac",
  "Traffic purple",
  "Purple violet",
  "Signal violet",
  "Pastel violet",
  "Telemagenta",
  "Pearl violet",
  "Pearl blackberry",
  "Violet blue",
  "Green blue",
  "Ultramarine blue",
  "Sapphire blue",
  "Black blue",
  "Signal blue",
  "Brilliant blue",
  "Grey blue",
  "Azure blue",
  "Gentian blue",
  "Steel blue",
  "Light blue",
  "Cobalt blue",
  "Pigeon blue",
  "Sky blue",
  "Traffic blue",
  "Turquoise blue",
  "Capri blue",
  "Ocean blue",
  "Water blue",
  "Night blue",
  "Distant blue",
  "Pastel blue",
  "Pearl Gentian blue",
  "Pearl night blue",
  "Patina green",
  "Emerald green",
  "Leaf green",
  "Olive Green",
  "Blue green",
  "Moss green",
  "Grey olive",
  "Bottle green",
  "Brown green",
  "Fir green",
  "Grass green",
  "Reseda green",
  "Black green",
  "Reed green",
  "Yellow olive",
  "Black olive",
  "Turquoise green",
  "May green",
  "Yellow green",
  "pastel green",
  "Chrome green",
  "Pale green",
  "Brown olive",
  "Traffic green",
  "Fern green",
  "Opal green",
  "Light green",
  "Pine green",
  "Mint green",
  "Signal green",
  "Mint turquoise",
  "Pastel turquoise",
  "Pearl green",
  "Pearl opal green",
  "Pure green",
  "Luminous green",
  "Squirrel grey",
  "Silver grey",
  "Olive grey",
  "Moss grey",
  "Signal grey",
  "Mouse grey",
  "Beige grey",
  "Khaki grey",
  "Green grey",
  "Tarpaulin grey",
  "Iron grey",
  "Basalt grey",
  "Brown-grey alsoNATO-olive, Stone-grey-olive",
  "Slate grey",
  "Anthracite grey",
  "Black grey",
  "Umbra grey",
  "Concrete grey",
  "Graphite grey",
  "Granite grey",
  "Stone grey",
  "Blue grey",
  "Pebble grey",
  "Cement grey",
  "Yellow grey",
  "Light grey",
  "Platinum grey",
  "Dusty grey",
  "Agate grey",
  "Quartz grey",
  "Window grey",
  "Traffic grey A",
  "Traffic grey B",
  "Silk grey",
  "Telegrey 1",
  "Telegrey 2",
  "Telegrey 4",
  "Pearl mouse grey",
  "Green brown",
  "Ochre brown",
  "Signal brown",
  "Clay brown",
  "Copper brown",
  "Fawn brown",
  "Olive brown",
  "Nut brown",
  "Red brown",
  "Sepia brown",
  "Chestnut brown",
  "Mahogany brown",
  "Chocolate brown",
  "Grey brown",
  "Black brown",
  "Orange brown",
  "Beige brown",
  "Pale brown",
  "Terra brown",
  "Pearl copper",
  "Cream",
  "Grey white",
  "Signal white",
  "Signal black",
  "Jet black",
  "White aluminum",
  "Grey aluminum",
  "Pure white",
  "Graphite black",
  "Traffic white",
  "Traffic black",
  "Papyrus white",
  "Pearl light grey",
  "Pearl dark grey",
];
