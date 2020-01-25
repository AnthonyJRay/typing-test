const words = [
  'hello', 'hi', 'far', 'star', 'car', 'part', 'lock', 'clock', 'flock', 'shock', 'knock', 'blonde', 'bleak', 'streak',
  'cook', 'look', 'green', 'red', 'clean', 'yellow', 'blue', 'black', 'white', 'blend', 'cleanse', 'meat', 'seat',
  'hook', 'fork', 'spoon', 'knife', 'knives', 'crater', 'cater', 'eat', 'ate', 'ram', 'run', 'ran', 'write', 'write', 'quiet',
  'quite', 'quilt', 'silt', 'build', 'built', 'drill', 'saw', 'remember', 'hopeful', 'joyful', 'jolly', 'spirit', 'intense',
  'tense', 'blend', 'cart', 'tart', 'redeemer', 'reindeer', 'antlers', 'desk', 'computer', 'laptop', 'processor', 'graphic',
  'movie', 'sling', 'cling', 'drink', 'brink', 'think', 'thought', 'cold', 'flow', 'trough', 'drought', 'slow', 'crow',
  'loud', 'sought', 'bought', 'ground', 'pound', 'lean', 'screen', 'friend', 'credible', 'loyal', 'loyalty', 'honest',
  'honesty', 'recommend', 'line', 'brine', 'crime', 'slime', 'lime', 'grime', 'prime', 'sling', 'fling', 'kink', 'sink',
  'link', 'drink', 'crop', 'drop', 'mop', 'kong', 'long', 'effigy', 'condescending', 'condolence', 'crimson', 'rememberance',
  'philantropy', 'entrepeneur', 'clearing', 'smearing', 'adolescence', 'paradigm', 'vanguard', 'cruelty', 'paradox', 'delusion',
  'forgotten', 'judgement', 'honor', 'cordial', 'complexity', 'comprehension', 'mentality', 'manufacturing', 'production',
  'warehouse', 'storage', 'forage', 'foliage', 'unearthing', 'carbon', 'intelligence', 'effective', 'affirmative', 'memorandum',
  'javascript', 'context', 'reaction', 'java', 'collateral', 'kingdom', 'marque', 'fallen', 'quintessential', 'conquest',
  'quality', 'candle', 'gander', 'squad', 'roll', 'ramp', 'request', 'relinquish', 'wander', 'waste', 'label', 'standing',
  'stroll', 'least', 'minimum', 'minimal', 'maximum', 'mandatory', 'requirements', 'tingle', 'rope', 'raft', 'rabbit'
]

const currentWord = document.querySelector("#word");
const inputWord = document.querySelector("#input");
const currentScore = document.querySelector("#score");
const countdown = document.querySelector("#timer");
const startModal = document.querySelector(".start-game-modal")
const startBtn = document.querySelector(".startBtn")
const modalHeader = document.querySelector(".modalHeader")
const modalFooterHeader = document.querySelector(".modal-footer-header")
const modalFooterText = document.querySelector(".modal-footer-text")

let timer
let score
let clearScore
let clearTimer

const startGame = () => {
  timer = 30
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
  if (score >= 5) {
    clearInterval(clearTimer)
    clearTimer = setInterval(updateTimer, 800)
  }
  if (score >= 50) {
    clearInterval(clearTimer)
    clearTimer = setInterval(updateTimer, 666)
  }
  if (score >= 100) {
    clearInterval(clearTimer)
    clearTimer = setInterval(updateTimer, 500)
  }
  if (score > 125) {
    clearInterval(clearTimer)
    clearTimer = setInterval(updateTimer, 333)
  } else if (countdown.innerHTML <= 0) {
    countdown.innerHTML = 0;
    clearInterval(clearTimer)
    modalLost()
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
  let value = event.target.value.toLowerCase();
  if (value === currentWord.innerHTML) {
    match = true
  }
  if (match === true) {
    score++
    timer = timer + 2
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

modalLost = () => {
  startModal.classList.remove("hidden")
  modalHeader.innerHTML = "Time's up!"
  modalFooterHeader.innerHTML = "Final Score:"
  modalFooterText.innerHTML = score
  modalFooterText.classList.add("finalScore")
  startBtn.innerHTML = "Try again?"
  startBtn.setAttribute("autofocus", "")
}