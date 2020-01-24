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
const startModal = document.querySelector(".start-game-modal")
const startBtn = document.querySelector(".startBtn")

let timer
let score
let clearScore
let clearTimer
const startGame = () => {
  timer = 10
  score = 0
  randWord()
  startModal.classList.add("hidden")
  clearScore = setInterval(updateScore, 500)
  clearTimer = setInterval(updateTimer, 1000)
}


const updateScore = () => {
  currentScore.innerHTML = score;
}

const updateTimer = () => {
  countdown.innerHTML = timer;
  timer--
  if (countdown.innerHTML <= 0) {
    clearInterval(clearTimer)
    modalLost()
    clearInterval(clearScore, clearTimer)

  }
}

// Generate and show random word
const randWord = () => {
  let randIndex = [Math.floor(Math.random() * words.length)]
  currentWord.innerHTML = words[randIndex];
}


// Match input to the Current Word
const matchInput = () => {
  let match;
  let value = event.target.value;
  if (value === currentWord.innerHTML) {
    match = true
  }
  if (match === true) {
    score++
    timer = timer + 1
    randWord()
    event.target.value = "";
  } else {
    score--
  }
}

getInput = (event) => {
  if (event.keyCode === 13) {
    matchInput()
  }
}

modalLost = (event) => {
  startModal.classList.remove("hidden")
  startBtn.innerHTML = "Try again?"
  startBtn.setAttribute("autofocus")
  event.target.value = " ";
}