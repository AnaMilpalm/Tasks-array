// Сума елементів масиву: Напишіть функцію, яка приймає масив чисел і повертає суму всіх його елементів.
const input = document.querySelector('.numbers');//зн. інпут
console.log(input);
const button = document.querySelector('.button'); // зн. кнопку
console.log(button)
const result = document.querySelector('.result');// зн. спан для результата
console.log(result);

    
button.addEventListener('click', () => {
const inputValue = input.value;// отримуємо значення з інпут

const numbersArray = inputValue.split('').map(Number); //перетворюємо в числа

const sum = numbersArray.reduce((acc, current) => acc + current, 0); // обчислюємо суму

result.textContent = sum; // результат вписуємо для спана
});



const itputFindMax = document.querySelector('.input-max-number');
const buttonFindMax = document.querySelector('.button-max');
const resultMaxNumber = document.querySelector('.result-max-number');

buttonFindMax.addEventListener('click', () => {
    const inputValue = itputFindMax.value;
    
    const inputNumber = inputValue.split(' ').map(Number);
    

    const maxNumber = Math.max(...inputNumber);

    resultMaxNumber.textContent = maxNumber;
});

const inputFindNum = document.querySelector('.find-number');
const buttonFindNum = document.querySelector('.check-number');
const resultFind = document.querySelector('.find-result');

buttonFindNum.addEventListener('click', () => checkNumber([4, 5.7, 8, 25, 28, 99]));

function checkNumber(array) {
    const inputValue = Number(inputFindNum.value);//перетворює значення в число
    
        if (array.includes(inputValue)) {
            console.log('true');
            resultFind.textContent = ` Число ${inputValue} знайдено`  ;
         } else {
          console.log('false');
          resultFind.textContent = `Число ${inputValue} не знайдено`
         }
         inputFindNum.value = '';
}

// task 4 
const inputGuessNumbers = document.querySelector('.input-guess-number');
const hideNumbers = document.querySelector('.hide-numbers');
const inputTryToGuess = document.querySelector('.try-to-guess');
const butTryToGuess = document.querySelector('.button-try-to-guess');
const respond = document.querySelector('.respond');

function handler() {
     const guessedNumbers = inputGuessNumbers.value.split(',').map(num => num.trim()); // зберігаємо числа в масив
     console.log("🚀 ~ handler ~ guessedNumbers:",typeof guessedNumbers)
     localStorage.setItem('guessedNumbers', JSON.stringify(guessedNumbers));//зберігаємо у локальному сховищі
     inputGuessNumbers.value ='';//очищаємо інпут
     hideNumbers.textContent = 'Числа заховані!';
}



function checkGuess() {
    const storedNumbers = JSON.parse(localStorage.getItem('guessedNumbers')); //отримаємо масив з локального сховища
    console.log("🚀 ~ checkGuess ~ storedNumbers:", storedNumbers)
    const userGuess = inputTryToGuess.value.trim(); //отримуємо введене число
//перевіряємо чи введені числа чи число є в массиві
    const isGuessed = storedNumbers.some(storedNumber => storedNumber == userGuess);
    console.log("🚀 ~ checkGuess ~ isGuessed :", isGuessed )
    console.log("🚀 ~ checkGuess ~ isGuessed :",typeof isGuessed )
    if(isGuessed) {
        respond.textContent = 'Вгадав!';
    } else {
        respond.textContent = 'Спробуй ще раз!';
    }
    inputTryToGuess.value = ''; //Очищаємо інпут для вгадування
}

hideNumbers.addEventListener('click', handler);
butTryToGuess.addEventListener('click', checkGuess);