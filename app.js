var green = {
  name: "Jacob",
  surname: "Green",
  color: "green",
  description: "He has a lot of connections and is always willing to help people out -- for a price.",
  age: 52,
  image: "https://i.ytimg.com/vi/D68CJHH7KFk/maxresdefault.jpg"
};

var orchid = {
  name: "Doctor",
  surname: "Orchid",
  color: "white",
  description: "She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning",
  age: 30,
  image: "https://i.ytimg.com/vi/D68CJHH7KFk/maxresdefault.jpg"
};

var plum = {
  name: "Victor",
  surname: "Plum",
  color: "purple",
  description: "He is a billionaire video game designer who is embracing his new popularity.",
  age: 32,
  image: "https://i.ytimg.com/vi/D68CJHH7KFk/maxresdefault.jpg"
};
var scarlet = {
  name: "Kasandra",
  surname: "Scarlet",
  color: "red",
  description: "She is an A-list movie star whose past haunts her.",
  age: 62,
  image: "https://i.ytimg.com/vi/D68CJHH7KFk/maxresdefault.jpg"
};
var peacock = {
  name: "Eleanor",
  surname: "Peacock",
  color: "blue",
  description: "he is from a wealthy family and uses her status and money to earn popularity.",
  age: 23,
  image: "https://i.ytimg.com/vi/D68CJHH7KFk/maxresdefault.jpg"
};
var mustard = {
  name: "Jack",
  surname: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory.",
  age: 44,
  image: "https://i.ytimg.com/vi/D68CJHH7KFk/maxresdefault.jpg"
};

var characters = [green,orchid,plum,scarlet,peacock,mustard];

var rope = {
  name: "Rope",
  color: "beige",
  description: "description rope.",
};

var knife = {
  name: "Knife",
  color: "silver",
  description: "description knife.",
};
var candlestick = {
  name: "Candlestick",
  color: "gold",
  description: "description candlestick.",
};
var dumbbell = {
  name: "Dumbbell",
  color: "black",
  description: "description dumbbell.",
};
var poison = {
  name: "Poison",
  color: "transparent",
  description: "description poison.",
};
var axe = {
  name: "Axe",
  color: "wood",
  description: "description axe.",
};
var bat = {
  name: "Bat",
  color: "yellow",
  description: "description bat.",
};
var trophy = {
  name: "Trophy",
  color: "grey",
  description: "description trophy.",
};
var pistol = {
  name: "Pistol",
  color: "iron",
  description: "description pistol.",
};

var weapons = [rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol];

var rooms = ["Dining room","Conservatory","Kitchen","Study","Library","Billiard room","Lounge","Ballroom","Hall","A spa","Living room","Observatory","Theater","Guest house","A patio"];

function randomCard(array){
  var pos=Math.floor(Math.random()*array.length);
  var card = array[pos];
  return card;
}
var envelope = [randomCard(weapons), randomCard(characters),randomCard(rooms)];
console.log("Reveal the secret: \nThe murderer is: " + envelope[1].name + "\nThe weapon is: " + envelope[0].name + "\nThe room is: " + envelope[2]);
