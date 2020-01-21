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

getWords = () => {
  let p = document.querySelector("div.parent")
  newArr = []
  for (let i = 0; i < words.length; i++) {
    const randomWords = words[Math.floor(Math.random() * words.length)]
    newArr.push(randomWords)
    let s = document.createElement("span")
    s.className = "z"
    s.append(randomWords)
    p.append(s)
  }

}
getWords();





showCurrentValue = (event) => {
  const value = event.target.value;
  document.getElementById("textV").innerText = value;

  let arrIndex = newArr[0].split('');
  if (value === arrIndex[0]) {
    arrIndex = arrIndex.shift([0]);
    console.log([0])
    console.log(arrIndex)
  }

  // arrIndex.forEach(i => {
  //   if (value === arrIndex[0]) {
  //     arrIndex.shift(i)
  //     return arrIndex = arrIndex.shift(i)
  //   }
  //   // console.log(i)
  //   console.log(arrIndex)
  // });

  // for (let i = 0; i < arrIndex.length; i++) {
  //   if (value === arrIndex[0]) {
  //     arrIndex.shift([0])
  //     console.log("Match")
  //     console.log(arrIndex)
  //     console.log(arrIndex[0])
  //   } else {
  //     console.log("Err")
  //   }
  // }
  // for (i = 0; i < newArr.length; i++) {
  //   if (value === newArr[i].innerText) {
  //     console.log("Match");
  //   } else {
  //     console.log("Something went wrong")
  //   }
  // }
}