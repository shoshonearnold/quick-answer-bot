const compute = document.querySelector('#button');
const reset = document.querySelector('#reset');
const inputBox = document.querySelector('#text')
const textBox = document.querySelector('.answer');

const botAnswers = [
  'Yes.',
  'No.',
  'Sometimes.',
  'The answer is around 1714-2002.',
  'He is at arbys.',
  'She doesnt know but Randy might be upset tommorow.',
  'Check under your cats favorite pillow.',
  'Club soda.',
  'Monday.',
  'We will see.',
  'My name is AnswerBot. I am here to answer your questions. Jokingly.',
  '"Can you please stop dying your hair white?"',
  'You need to make that sandwich before i give you the answer.',
  'I dont know right now. Let me ask someone of a high power.',
  'There are books on that sort of stuff you know.',
  'Im not going to tell you that.',
  'Listen to your heart.',
  'Not when you are sleeping.',
  'Tigers and pandas.',
  'Morpheus shades.',
  '3 cups of whole milk.',
  'Haha thats a good question!',
  'Your funny bone.',
  'Name the baby salomni.'
];

loadEventListeners();

function refreshPage() {
  document.location.reload(true);
}

function dontDisplayAnswer() {
  textBox.style.display = 'none'
}

function displayAnswer() {
  textBox.style.display = 'inline-flex';
}

function getAnswer() {
  const userValue = document.getElementById("text").value;
  if (!userValue.includes('?')) {
    alert('please type some text with a question mark (what is bream?)');
    dontDisplayAnswer();
  } else {
    const randIndex = Math.floor(Math.random() * botAnswers.length);
    textBox.innerHTML = botAnswers[randIndex];
    compute.style.display = 'none' // gives user reason to press reset to ask another question!
    displayAnswer();
  }
  
}
