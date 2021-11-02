let buttonChoose = document.querySelector('.btn1');
let buttonStrike = document.querySelector('.btn2');
let buttonRefresh = document.querySelector('.btn3');

let text = document.querySelector('.text');

// function to choose a word longer than 6 characters
function selectWord() {
  let arrWithLongerWords = text.innerText.split(' ').filter(item => item.length > 6);
  return arrWithLongerWords[Math.floor(Math.random() * arrWithLongerWords.length)]
};

// function to highlight the selected word with red color by adding css tags
function choose() {
  let word = selectWord();
  let forOnce = true
  let newa = text.innerText.split(" ").map(item => {
    if (item == word && forOnce) {
      forOnce = false;
      return '<span> ' + item + '</span>';
    } else {
      return item
    }
  }).join(' ');
  text.innerHTML = newa
}
// function to strike through the selected word
function strikeIt() {
  text.innerHTML = text.innerHTML.split(" ").map(item => {
    if (item.includes('<span>')) {
      return item = '<span class="strike">'
    } else {
      return item
    }
  }).join(' ');
}
// function to refresh the page 
function refresh() {
  window.location.reload()
};
// eventListener Delegation
document.body.addEventListener('click', (e) => {
  if (e.target.className.includes('btn1')) {
    choose();
  } else if (e.target.className.includes('btn2')) {
    strikeIt();
  } else if (e.target.className.includes('btn3')) {
    refresh();
  }
})

