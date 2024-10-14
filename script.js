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