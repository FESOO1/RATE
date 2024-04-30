// RATE

const submitButton = document.querySelector('.submit');
const rateIself = document.querySelector('.rate-itself');
const rateSuccess = document.querySelector('.rate-success');

submitButton.addEventListener('click', () => {
    rateIself.style.display = 'none';
    rateSuccess.style.display = 'flex';
})

// SELECTED NUMBER

let selectedNumber;
const selectedNumberText = document.getElementById('selectedNumber');
const numberOne = document.getElementById('numberOne');
const numberTwo = document.getElementById('numberTwo');
const numberThree = document.getElementById('numberThree');
const numberFour = document.getElementById('numberFour');
const numberFive = document.getElementById('numberFive');

numberOne.addEventListener('click', One)
numberTwo.addEventListener('click', Two)
numberThree.addEventListener('click', Three)
numberFour.addEventListener('click', Four)
numberFive.addEventListener('click', Five)

function One(){
    selectedNumber = numberOne.innerText;
    selectedNumberText.textContent = selectedNumber;
    numberOne.classList.add('selected');
    numberTwo.classList.remove('selected');
    numberThree.classList.remove('selected');
    numberFour.classList.remove('selected');
    numberFive.classList.remove('selected');
}

function Two(){
    selectedNumber = numberTwo.innerText;
    selectedNumberText.textContent = selectedNumber;
    numberTwo.classList.add('selected');
    numberOne.classList.remove('selected');
    numberThree.classList.remove('selected');
    numberFour.classList.remove('selected');
    numberFive.classList.remove('selected');
}

function Three(){
    selectedNumber = numberThree.innerText;
    selectedNumberText.textContent = selectedNumber;
    numberThree.classList.add('selected');
    numberOne.classList.remove('selected');
    numberTwo.classList.remove('selected');
    numberFour.classList.remove('selected');
    numberFive.classList.remove('selected');
}

function Four(){
    selectedNumber = numberFour.innerText;
    selectedNumberText.textContent = selectedNumber;
    numberFour.classList.add('selected');
    numberOne.classList.remove('selected');
    numberTwo.classList.remove('selected');
    numberThree.classList.remove('selected');
    numberFive.classList.remove('selected');
}

function Five(){
    selectedNumber = numberFive.innerText;
    selectedNumberText.textContent = selectedNumber;
    numberFive.classList.add('selected');
    numberOne.classList.remove('selected');
    numberTwo.classList.remove('selected');
    numberThree.classList.remove('selected');
    numberFour.classList.remove('selected');
}

