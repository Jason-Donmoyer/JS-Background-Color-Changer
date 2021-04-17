
// Array to store css colors and names.
const cssColorArray = [
  {
    color: 'aliceblue',
    name: 'Alice Blue'
  },
  {
    color: 'antiquewhite',
    name: 'Antique White'
  },
  {
    color: 'aqua',
    name: 'Aqua'
  },
  {
    color: 'aquamarine',
    name: 'Aquamarine'
  },
  {
    color: 'aliceblue',
    name: 'Alice Blue'
  },
  {
    color: 'azure',
    name: 'Azure'
  },
  {
    color: 'beige',
    name: 'Beige'
  },
  {
    color: 'bisque',
    name: 'Bisque'
  },
  {
    color: 'black',
    name: 'Black'
  },
  {
    color: 'blanchedalmond',
    name: 'Blanched Almond'
  },
  {
    color: 'blue',
    name: 'Blue'
  },
  {
    color: 'blueviolet',
    name: 'Blue Violet'
  },
  {
    color: 'brown',
    name: 'Brown'
  },
  {
    color: 'burlywood',
    name: 'Burly Wood'
  },
  {
    color: 'cadetblue',
    name: 'Cadet Blue'
  },
  {
    color: 'chartreuse',
    name: 'Chartreuse'
  },
  {
    color: 'chocolate',
    name: 'Chocolate'
  },
  {
    color: 'coral',
    name: 'Coral'
  },
  {
    color: 'cornflowerblue',
    name: 'Cornflower Blue'
  },
  {
    color: 'cornsilk',
    name: 'Cornsilk'
  },
  {
    color: 'crimson',
    name: 'Crimson'
  },
  {
    color: 'cyan',
    name: 'Cyan'
  },
  {
    color: 'darkblue',
    name: 'Dark Blue'
  },
  {
    color: 'darkcyan',
    name: 'Dark Cyan'
  },
  {
    color: 'darkgoldenrod',
    name: 'Dark Goldenrod'
  },
  {
    color: 'darkgray',
    name: 'Dark Gray'
  },
  {
    color: 'darkgreen',
    name: 'Dark Green'
  },
  {
    color: 'darkkhaki',
    name: 'Dark Khaki'
  },
  {
    color: 'darkmagenta',
    name: 'Dark Magenta'
  },
  {
    color: 'darkolivegreen',
    name: 'Dark Olive Green'
  },
  {
    color: 'darkorange',
    name: 'Dark Orange'
  },
  {
    color: 'darkorchid',
    name: 'Dark Orchid'
  },
  {
    color: 'darkred',
    name: 'Dark Red'
  },
  {
    color: 'darksalmon',
    name: 'Dark Salmon'
  },
  {
    color: 'darkseagreen',
    name: 'Dark Sea Green'
  },
  {
    color: 'darkslateblue',
    name: 'Dark Slate Blue'
  },
  {
    color: 'darkslategray',
    name: 'Dark Slate Gray'
  },
  {
    color: 'darkslategrey',
    name: 'Dark Slate Grey'
  },
  {
    color: 'darkturquoise',
    name: 'Dark Turquoise'
  },
  {
    color: 'darkviolet',
    name: 'Dark Violet'
  },
  {
    color: 'deeppink',
    name: 'Deep Pink'
  },
  {
    color: 'deepskyblue',
    name: 'Deep Sky Blue'
  },
  {
    color: 'dimgray',
    name: 'Dim Gray'
  },
  {
    color: 'dodgerblue',
    name: 'Dodger Blue'
  },
  {
    color: 'firebrick',
    name: 'Fire Brick'
  },
  {
    color: 'floralwhiter',
    name: 'Floral White'
  },
  {
    color: 'forestgreen',
    name: 'Forest Green'
  },
  {
    color: 'fuchsia',
    name: 'Fuchsia'
  },
  {
    color: 'gainsboro',
    name: 'Gainsboro'
  },
  {
    color: 'ghostwhite',
    name: 'Ghost White'
  },
  {
    color: 'gold',
    name: 'Gold'
  },
  {
    color: 'goldenrod',
    name: 'Goldenrod'
  },
  {
    color: 'gray',
    name: 'Gray'
  },
  {
    color: 'green',
    name: 'Green'
  },
  {
    color: 'greenyellow',
    name: 'Green Yellow'
  },
  {
    color: 'grey',
    name: 'Grey'
  },
  {
    color: 'honeydew',
    name: 'Honeydew'
  },
  {
    color: 'hotpink',
    name: 'Hot Pink'
  },
  {
    color: 'indianred',
    name: 'Indian Red'
  },
  {
    color: 'indigo',
    name: 'Indigo'
  },
  {
    color: 'ivory',
    name: 'Ivory'
  },
  {
    color: 'khaki',
    name: 'Khaki'
  },
  {
    color: 'lavender',
    name: 'Lavender'
  },
  {
    color: 'lavenderblush',
    name: 'Lavender Blush'
  },
  {
    color: 'lawngreen',
    name: 'Lawn Green'
  },
  {
    color: 'lemonchiffon',
    name: 'Lemon Chiffon'
  },
  {
    color: 'lightblue',
    name: 'Light Blue'
  },
  {
    color: 'lightcoral',
    name: 'Light Coral'
  },
  {
    color: 'lightcyan',
    name: 'Light Cyan'
  },
  {
    color: 'lightgoldenrodyellow',
    name: 'Light Goldenrod Yellow'
  },
  {
    color: 'lightgray',
    name: 'Light Gray'
  },
  {
    color: 'lightgreen',
    name: 'Light Green'
  },
  {
    color: 'lightgrey',
    name: 'Light Grey'
  },
  {
    color: 'lightpink',
    name: 'Light Pink'
  },
  {
    color: 'lightsalmon',
    name: 'Light Salmon'
  },
  {
    color: 'lightseagreen',
    name: 'Light Sea Green'
  },
  {
    color: 'lightskyblue',
    name: 'LightSkyBlue'
  },
  {
    color: 'lightslategray',
    name: 'Light Slate Gray'
  },
  {
    color: 'lightslategrey',
    name: 'Light Slate Grey'
  },
  {
    color: 'lightsteelblue',
    name: 'Light Steel Blue'
  },
  {
    color: 'lightyellow',
    name: 'Light Yellow'
  },
  {
    color: 'lime',
    name: 'Lime'
  },
  {
    color: 'limegreen',
    name: 'Lime Green'
  },
  {
    color: 'linen',
    name: 'Linen'
  },
  {
    color: 'magenta',
    name: 'Magenta'
  },
  {
    color: 'maroon',
    name: 'Maroon'
  },
  {
    color: 'mediumaquamarine',
    name: 'Medium Aquamarine'
  },
  {
    color: 'mediumblue',
    name: 'Medium Blue'
  },
  {
    color: 'mediumorchid',
    name: 'Medium Orchid'
  },
  {
    color: 'mediumpurple',
    name: 'Medium Purple'
  },
  {
    color: 'mediumseagreen',
    name: 'Medium Sea Green'
  },
  {
    color: 'mediumslateblue',
    name: 'Medium Slate Blue'
  },
  {
    color: 'mediumspringgreen',
    name: 'Medium Spring Green'
  },
  {
    color: 'mediumturquoise',
    name: 'Medium Turquoise'
  },
  {
    color: 'mediumvioletred',
    name: 'Medium Violet Red'
  },
  {
    color: 'midnightblue',
    name: 'MidnightBlue'
  },
  {
    color: 'mintcream',
    name: 'Mint Cream'
  },
  {
    color: 'mistyrose',
    name: 'Misty Rose'
  },
  {
    color: 'moccasin',
    name: 'Moccasin'
  },
  {
    color: 'navajowhite',
    name: 'Navajo White'
  },
  {
    color: 'navy',
    name: 'Navy'
  },
  {
    color: 'oldlace',
    name: 'Old Lace'
  },
  {
    color: 'olive',
    name: 'Olive'
  },
  {
    color: 'olivedrab',
    name: 'Olive Drab'
  },
  {
    color: 'orange',
    name: 'Orange'
  },
  {
    color: 'orangered',
    name: 'Orange Red'
  },
  {
    color: 'orchid',
    name: 'Orchid'
  },
  {
    color: 'palegoldenrod',
    name: 'Pale Goldenrod'
  },
  {
    color: 'palegreen',
    name: 'Pale Green'
  },
  {
    color: 'paleturquoise',
    name: 'Pale Turquoise'
  },
  {
    color: 'palevioletred',
    name: 'Pale Violet Red'
  },
  {
    color: 'papayawhip',
    name: 'Papaya Whip'
  },
  {
    color: 'peachpuff',
    name: 'Peach Puff'
  },
  {
    color: 'peru',
    name: 'Peru'
  },
  {
    color: 'pink',
    name: 'Pink'
  },
  {
    color: 'plum',
    name: 'Plum'
  },
  {
    color: 'powderblue',
    name: 'PowderBlue'
  },
  {
    color: 'purple',
    name: 'Purple'
  },
  {
    color: 'rebeccapurple',
    name: 'Rebecca Purple'
  },
  {
    color: 'red',
    name: 'Red'
  },
  {
    color: 'rosybrown',
    name: 'Rosy Brown'
  },
  {
    color: 'royalblue',
    name: 'Royal Blue'
  },
  {
    color: 'saddlebrown',
    name: 'Saddle Brown'
  },
  {
    color: 'salmon',
    name: 'Salmon'
  },
  {
    color: 'sandybrown',
    name: 'Sandy Brown'
  },
  {
    color: 'seagreen',
    name: 'Sea Green'
  },
  {
    color: 'seashell',
    name: 'Seashell'
  },
  {
    color: 'sienna',
    name: 'Sienna'
  },
  {
    color: 'silver',
    name: 'Silver'
  },
  {
    color: 'skyblue',
    name: 'Sky Blue'
  },
  {
    color: 'slateblue',
    name: 'Slate Blue'
  },
  {
    color: 'slategray',
    name: 'Slate Gray'
  },
  {
    color: 'slategrey',
    name: 'Slate Grey'
  },
  {
    color: 'snow',
    name: 'Snow'
  },
  {
    color: 'springgreen',
    name: 'Spring Green'
  },
  {
    color: 'steelblue',
    name: 'Steel Blue'
  },
  {
    color: 'tan',
    name: 'Tan'
  },
  {
    color: 'teal',
    name: 'Teal'
  },
  {
    color: 'thistle',
    name: 'Thistle'
  },
  {
    color: 'tomato',
    name: 'Tomato'
  },
  {
    color: 'turquoise',
    name: 'Turquoise'
  },
  {
    color: 'violet',
    name: 'Violet'
  },
  {
    color: 'wheat',
    name: 'Wheat'
  },
  {
    color: 'white',
    name: 'White'
  },
  {
    color: 'whitesmoke',
    name: 'White Smoke'
  },
  {
    color: 'yellow',
    name: 'Yellow'
  },
  {
    color: 'yellowgreen',
    name: 'Yellow Green'
  },
];

const background = document.getElementById('background');
const colorText = document.getElementById('color-name');
const changeColorBtn = document.querySelector('button');


changeColorBtn.addEventListener('click', () => {
  let randomNum = Math.floor(Math.random() * cssColorArray.length);
  background.style.backgroundColor = cssColorArray[randomNum].color;
  colorText.innerHTML = cssColorArray[randomNum].name;
});