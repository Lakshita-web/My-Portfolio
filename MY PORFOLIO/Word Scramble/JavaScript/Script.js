alert("Please zoom out your webpage to 90% for better viewing experience")
const words =[
  {
    word: "BLANKET",
    hint: "Keeps you warm while sleeping"
  },
  {
    word: "RAINBOW",
    hint: "Seen in the sky after it rains"
  },
  {
    word: "KITCHEN",
    hint: "Room where you cook food"
  },
  {
    word: "PICTURE",
    hint: "A photo or drawing"
  },
  {
    word: "HOLIDAY",
    hint: "A day when you don't go to school"
  },
  {
    word: "LETTERS",
    hint: "Used to write words"
  },
  {
    word: "MONSTER",
    hint: "A scary imaginary creature"
  },
  {
    word: "ANIMALS",
    hint: "Lions, tigers, and bears, for example"
  },
  {
    word: "UMBRELLA",
    hint: "Used when it's raining"
  },
  {
    word: "AIRPLANE",
    hint: "Flies in the sky"
  },
  {
    word: "BATTERY",
    hint: "Powers your devices"
  },
  {
    word: "COOKIES",
    hint: "Sweet baked treats"
  },
  {
    word: "CHICKEN",
    hint: "A bird or a food"
  },
  {
    word: "STATION",
    hint: "Place where trains or buses stop"
  },
  {
    word: "THUNDER",
    hint: "Loud sound during a storm"
  },
  {
    word: "DOLPHIN",
    hint: "A smart sea animal"
  },
  {
    word: "BALLOON",
    hint: "Filled with air, used at parties"
  },
  {
    word: "CUPCAKE",
    hint: "A mini cake in a paper cup"
  },
  {
    word: "DIAMOND",
    hint: "A shiny, precious stone"
  },
  {
    word: "BEDROOM",
    hint: "You sleep in this room"
  },
  {
    word: "GLASSES",
    hint: "Helps you see better"
  },
  {
    word: "PRINTER",
    hint: "Used to print documents"
  },
  {
    word: "LUGGAGE",
    hint: "You pack this for travel"
  },
  {
    word: "VOLCANO",
    hint: "A mountain that erupts"
  },
  {
    word: "LANTERN",
    hint: "A portable light"
  },
  {
    word: "FLOWERS",
    hint: "They bloom in gardens"
  },
  {
    word: "SANDBOX",
    hint: "Kids play in it with sand"
  },
  {
    word: "PERFUME",
    hint: "A pleasant-smelling liquid"
  },
  {
    word: "MESSAGE",
    hint: "A note or communication"
  },
  {
    word: "TEACHER",
    hint: "Someone who helps you learn"
  },
  {
    word: "PLANETS",
    hint: "Earth, Mars, Jupiter, etc."
  },
  {
    word: "NAPKINS",
    hint: "Used to wipe hands and mouth"
  },
  {
    word: "FOSSILS",
    hint: "Old bones found underground"
  },
  {
    word: "CANYONS",
    hint: "Deep valleys with steep sides"
  },
  {
    word: "ROCKETS",
    hint: "Used to explore space"
  },
  {
    word: "LIBRARY",
    hint: "A place full of books"
  },
  {
    word: "MARKERS",
    hint: "Colorful pens used for drawing"
  },
  {
    word: "POPCORN",
    hint: "Popular movie-time snack"
  },
  {
    word: "TOFFEE",
    hint: "Sticky and sweet candy"
  },
  {
    word: "LANTERN",
    hint: "Light source used at night"
  },
  {
    word: "WEATHER",
    hint: "It can be sunny, rainy, or cloudy"
  },
  {
    word: "ICEBERG",
    hint: "Huge floating ice in the ocean"
  },
  {
    word: "MIRRORS",
    hint: "You see your reflection in them"
  },
  {
    word: "CIRCLES",
    hint: "Round shapes"
  },
  {
    word: "TROUBLE",
    hint: "You're in this when you do something wrong"
  },
  {
    word: "BUTTONS",
    hint: "Used to fasten clothes"
  },
  {
    word: "PRINCES",
    hint: "Male royalty"
  },
  {
    word: "ISLANDS",
    hint: "Land surrounded by water"
  },
  {
    word: "GARLICS",
    hint: "Used to add flavor to food"
  },
  {
    word: "LOCKERS",
    hint: "Used to store things in school"
  },
  {
    word: "BASKETS",
    hint: "Used for carrying or holding items"
  }
]



const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint");
const timeText = document.querySelector("#time-left b");
const nextBtn = document.querySelector("#next");
const submitBtn = document.querySelector("#submit");
const inputField = document.querySelector("input");

let userScore = 0
let userScorePara = document.querySelector("#score");

let correctWord, timer;


const initTimer = maxTime => {
      clearInterval(timer);
       timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        alert(`Time's Up!!!  ${correctWord.toUpperCase()} was the correct word`);
        initGame();
       }, 1000);
}

const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() *words.length)];
    let wordArray = randomObj.word.split("");
    for(let i = wordArray.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i = 1));
        [wordArray[i],wordArray[j]] = [wordArray[j],wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}
initGame();


const checkWord = () => {
     let userWord = inputField.value.toLocaleLowerCase();
        if(!userWord) return alert("Please enter a word");

       if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);
        alert(`congratulations! ${userWord} is a correct word`);
        userScore++
        userScorePara.innerText = userScore
        initGame();
 }

nextBtn.addEventListener("click", initGame);
submitBtn.addEventListener("click",checkWord );