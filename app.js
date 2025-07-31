let drawnNumbersList = [];
let limitNumber = 10;
let secretNumber = generateRandomNumber();
let attempt1 = 1;


function showTextOnScreen(tag, text) {
    let space = document.querySelector(tag);
    space.innerHTML = text;
    responsiveVoice.speak(text, 'US English Female', { rate: 0.6 });
}
function displayInitialMessage() {
    showTextOnScreen('h1', 'Secret Number Game');
    showTextOnScreen('p', 'Choose a number between 1 and 10!');
}
displayInitialMessage()
function checkRamp() {
    let ramp = document.querySelector('input').value;
    console.log(ramp == secretNumber);
    if (ramp == secretNumber) {
        let wordAttempt = attempt1 > 1 ? 'attempts' : 'attempt';
        let messageAttemp = `You discovered the secret number with ${attempt1} ${wordAttempt}`
        showTextOnScreen('h1', 'Got It Right!');
        showTextOnScreen('p', messageAttemp);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (ramp > secretNumber) {
            showTextOnScreen('p', 'The secret number is smaller');
        } else {
            showTextOnScreen('p', 'The secret number is bigger');
        } attempt1++;
    } clearspace()
};
function generateRandomNumber() {
    let chosenNumber = parseInt(Math.random() * limitNumber + 1);
    let numberOfElements = drawnNumbersList.length;
    if (numberOfElements == limitNumber) {
        drawnNumbersList = [];
    }
    if (drawnNumbersList.includes(chosenNumber)) {
        return generateRandomNumber();
    } else {
        drawnNumbersList.push(chosenNumber);
        console.log(drawnNumbersList)
        return chosenNumber;
    }
}
function clearspace() {
    ramp = document.querySelector('input');
    ramp.value = '';
}
function startNewGame() {
    secretNumber = generateRandomNumber();
    clearspace();
    attempt1 = 1;
    displayInitialMessage();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}