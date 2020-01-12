const gNum = document.querySelector('#number');
const button = document.querySelector('#try');
const i = Math.floor((Math.random() * 50) + 1);
const msg = document.querySelector('.result');

function result() {
  if (parseInt(gNum.value) > i) {
    msg.innerHTML = '<p>Guess lower!</p>'
    gNum.value = ''
  } else if (parseInt(gNum.value) < i) {
    msg.innerHTML = '<p>Guess higher!</p>'
    gNum.value = ''
  } else if (parseInt(gNum.value) == i) {
    msg.innerHTML = `Yay! You got it. The number was ${i}`;
    gNum.value = ''
  }
}

button.addEventListener('click', result);
gNum.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    result();
  }
})