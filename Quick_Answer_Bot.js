const computeBaby = document.querySelector('#button');
const reset = document.querySelector('#reset');
const textBox = document.querySelector
// to edit out textarea and make answer blend with background, change # -> . and vice versa!
('#answer');


loadEventListeners();

function loadEventListeners() {
computeBaby.addEventListener('click', getAnswer);
reset.addEventListener('click', refreshPage);
}

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
	'Name the baby salomni.',
];

function getAnswer() {
	if (textBox.innerHTML === '?') {
  alert('please type a question');	
} else if (textBox.innerHTML !== null || '?') {
  const randIndex = Math.floor(Math.random() * botAnswers.length);
  textBox.style.display = 'inline';
  textBox.innerHTML = botAnswers[randIndex];
}};

function refreshPage() {
  document.location.reload(true);
}







