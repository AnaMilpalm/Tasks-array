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

// function addNumbers(a,b,c) {
//     return a+b+c;
// }

const addNumbers = (a,b,c) => {
    console.log(a+b+c);
    return a+b+c;
}

const addNums = (a,b,c) => a+b+c;

addNums(1,2,3);
addNumbers(1,2,3);

// const filteredArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach((number) => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });
//     console.log(filteredNumbers);
//     return filteredNumbers;
// }
// filteredArray([1,2,3,4,9,10], 6);

const calculateTotalPrice = (orderedItems) => {
    let totalPrice = 0;

    orderedItems.forEach((item) => {
        totalPrice += item;
    })
    return totalPrice;
}

const numbers = [5, 10,15,20,25];
const logMessage = (number, index) => {
    console.log(`Index ${index}, value ${number}`);
};

numbers.forEach(logMessage);

const filterdArray = (numbers, value) => {
    const filteredNumbers = [];
    numbers.forEach((number) => {
        if (number>value) {
            filteredNumbers.push(number);
        }
    });
    console.log(filteredNumbers);
    return filteredNumbers;
}

filterdArray([3,5,7,9,22], 8);

const pureMultiply = (array, value) => {
    const newArray = [];

    array.forEach((num) => {
        newArray.push(num * value);
    });
    return newArray;
}
function changeEven(numbers, value) {
     let newNumbers = numbers.map(number => {
        if (number % 2 === 0) {
            console.log('number % 2: ',number);
            return number + value;
        }
        console.log('number: ',number);
        return number;
    })
    console.log('newNumbers: ',newNumbers);
    return newNumbers;
}

changeEven([2,3,4,7,9], 5);

// const getUserEmail = (users) => users.map(user => user.email);

const students = [
    { name: "Mango", courses: ["mathematics", "physics"] },
    { name: "Poly", courses: ["science", "mathematics"] },
    { name: "Kiwi", courses: ["physics", "biology"] },
  ];
  
  const mappedCourses = students.map(student => student.courses);
  console.log(mappedCourses);
const flattenedCourses = students.flatMap(student => student.courses);
console.log("🚀 ~ flattenedCourses:", flattenedCourses);

const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      genres: ["adventure", "history"],
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      genres: ["fiction"],
    },
    {
      title: "Redder Than Blood",
      author: "Tanith Lee",
      genres: ["horror", "mysticism"],
    },
  ];

  const booksGenres = books.flatMap(book => book.genres);
  console.log("🚀 ~ booksGenres:", booksGenres);
  const booksAuthors = books.flatMap(book => book.author);
  console.log("🚀 ~ booksAuthors:", booksAuthors);
  const booksTitles = books.flatMap(book => book.title);
  console.log("🚀 ~ booksTitles:", booksTitles);

  const values = [51, -3, 27, 21, -68, 42, -37];
const positiveValues = values.filter(value => value >= 0);
console.log("🚀 ~ positiveValues:", positiveValues);
const negativeValues = values.filter(value => value < 0);
console.log("🚀 ~ negativeValues:", negativeValues)
const bigValues = values.filter(value => value > 1000);
console.log("🚀 ~ bigValues:", bigValues)
console.log(values);
const valuesInd = ( number, index, array) => {
    console.log(`number ${number}, index ${index}, array ${array}`);
}
values.forEach(valuesInd);
const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const pupils = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];
 
const best = pupils.filter(pupil => pupil.score > HIGH_SCORE);
console.log("🚀 ~ best:", best);
const average = pupils.filter(pupil => pupil.score < HIGH_SCORE && pupil.score > LOW_SCORE);
console.log("🚀 ~ average:", average);
const worst = pupils.filter(pupil => pupil.score < LOW_SCORE);
console.log("🚀 ~ worst:", worst);

const poems = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
  ];
  const MIN_RATING = 8;
  const AUTHOR = "Bernard Cornwell";

  const topRateBooks = poems.filter(poem => poem.rating >= MIN_RATING);
  console.log("🚀 ~ topRateBooks:", topRateBooks);
  const booksByAuthor = poems.filter(poem => poem.author === AUTHOR);
  console.log("🚀 ~ booksByAuthor:", booksByAuthor);

  const users = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male"
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female"
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female"
    }
  ];

  const getUsersWithEyeColor = (users, color) => {
    users.filter(user => user.eyeColor === color);
  } 
  const color = "brown";

  getUsersWithEyeColor(users, color);