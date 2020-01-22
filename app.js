const words = [
  'hello', 'hi', 'far', 'star', 'car', 'part', 'lock', 'clock', 'flock', 'shock', 'knock', 'blonde', 'bleak', 'streak',
  'cook', 'look', 'green', 'red', 'clean', 'yellow', 'blue', 'black', 'white', 'blend', 'cleanse', 'meat', 'seat',
  'hook', 'fork', 'spoon', 'knife', 'knives', 'crater', 'cater', 'eat', 'ate', 'ram', 'run', 'ran', 'write', 'write', 'quiet',
  'quite', 'quilt', 'silt', 'build', 'built', 'drill', 'saw', 'remember', 'hopeful', 'joyful', 'jolly', 'spirit', 'intense',
  'tense', 'blend', 'cart', 'tart', 'redeemer', 'raindeer', 'antlers', 'desk', 'computer', 'laptop', 'processor', 'graphic',
  'movie', 'sling', 'cling', 'drink', 'brink', 'think', 'thought', 'cold', 'flow', 'trough', 'drought', 'slow', 'crow',
  'loud', 'sought', 'bought', 'ground', 'pound', 'lean', 'screen', 'friend', 'credible', 'loyal', 'loyalty', 'honest',
  'honesty', 'recommend', 'line', 'brine', 'crime', 'slime', 'lime', 'grime', 'prime', 'sling', 'fling', 'kink', 'sink',
  'link', 'drink', 'crop', 'drop', 'mop', 'kong', 'long', 'effigy', 'condescending', 'condolence', 'crimson', 'rememberance',
  'philantropy', 'entrepeneur', 'clearing', 'smearing', 'adolescence', 'paradigm', 'vanguard', 'cruelty', 'paradox', 'delusion',
  'forgotten', 'judgement', 'honor', 'cordial', 'complexity', 'comprehension', 'mentality', 'manufacturing', 'production',
  'warehouse', 'storage', 'forage', 'foliage', 'unearthing', 'carbon', 'intelligence', 'effective', 'affirmative', 'memorandum'
]

const currentWord = document.querySelector("#word");
const inputWord = document.querySelector("#input");
const currentScore = document.querySelector("#score");
const countdown = document.querySelector("#timer");
console.log(countdown.innerHTML)
let timer = 5;
let score = 0;

const startGame = () => {
  setInterval(updateScore, 500)
  // setInterval(updateTimer, 1000)
  randWord()
}

const updateScore = () => {
  currentScore.innerHTML = score;
}

const updateTimer = () => {
  countdown.innerHTML = timer--;
  if (countdown.innerHTML === "0") {
    timer = 0;
    alert("You lost")
  }
}

// Generate random number
const randWord = () => {
  let randIndex = [Math.floor(Math.random() * words.length)]
  currentWord.innerHTML = words[randIndex];
}

// Show random Word


// Match input to the Current Word
matchInput = () => {
  let value = event.target.value;
  if (value === currentWord.innerHTML) {
    score++
    randWord()
    event.target.value = "";
  } else {
    timer--
    score--
  }
}

getInput = (event) => {
  if (event.keyCode === 13) {
    matchInput()
  }
}

startGame()