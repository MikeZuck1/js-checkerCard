// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]; // 4 + 1 + 3 + 9 + 6 + 5 + 7 + 9 + 0 + 7 + 0 + 2 + 6 + 7 + 0 + 8 
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]; // 1 + 5 + 6 + 5 + 5 + 6 + 3 + 7 + 3 + 8 + 5 + 5 + 2 + 4 + 6 + 9 
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]; // 3 + 5 + 2 + 6 + 2 + 2 + 0 + 1 + 9 + 9 + 7 + 5 + 4 + 3 + 3
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]; // 3 + 0 + 8 + 4 + 6 + 4 + 0 + 6 + 8 + 0 + 3 + 8 + 4 + 9 + 0 + 5
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]; // 8 + 5 + 6 + 9 + 8 + 0 + 8 + 9 + 3 + 7 + 7 + 6 + 9 + 6 + 3 + 6

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]; // 8 + 5 + 6 + 2 + 5 + 7 + 7 + 7 + 7 + 5 + 2 + 0 + 9 + 2 + 7 + 9 + 5
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]; // 5 + 5 + 9 + 1 + 5 + 9 + 3 + 6 + 9 + 4 + 1 + 6 + 8 + 6 + 8 + 3 
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]; // 6 + 7 + 1 + 7 + 9 + 6 + 0 + 7 + 4 + 8 + 5 + 9 + 9 + 9 + 2 + 4  
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]; // 3 + 0 + 2 + 1 + 2 + 2 + 5 + 9 + 3 + 1 + 5 + 7 + 5 + 9 + 6 + 5
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]; // 5 + 6 + 8 + 4 + 0 + 2 + 9 + 7 + 5 + 2 + 7 + 8 + 6 + 8 + 1 + 4

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];  // 3 + 7 + 4 + 7 + 0 + 2 + 9 + 3 + 8 + 6 + 0 + 1 + 4 + 2 + 4
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]; // + 5 + 1 + 0 + 0 + 8 + 3 + 1 + 3 + 2 + 0 + 2 + 6 + 9
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]; 
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]; 
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]; 

// An array of all the arrays above (valid to mystery)
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5
];

// Add your functions below :
const validateCred = (arr) => {
  
  const reverseArray = arr.reverse();
  let validationArray = []; // create an new empty array

  let counter = 0;
  for (const digit of reverseArray) {
    if (digit < 10 && digit >= 0) { 
      if (counter % 2 !== 0) {
        if (digit * 2 >= 10) {
          // en parcourant le tableau je double (un chiffre sur deux) et si le nbre est supérieur à 9 on soustrait 9 de sa valeur 
          validationArray.push(digit * 2 - 9);
        } else {
          validationArray.push(digit * 2); 
        }
      } else {
        validationArray.push(digit);
      }
    } else {
      console.log("Every digit must be above, equal to 0 or bellow 10");
    }
    counter++;
  }

  //console.log(validationArray);
  const reducer = (accumalator, currentValue) => accumalator + currentValue;
  validationArray = validationArray.reduce(reducer);

  let company;
  if (arr[0] === 3) {
    company = "Amex";
  } else if (arr[0] === 4) {
    company = "Visa";
  } else if (arr[0] === 5) {
    company = "Masrercard";
  } else if (arr[0] === 6) {
    company = "Discover";
  } else {
    company = "Not found";
  }
};

for (const card of batch) {
  validateCred(card);
}
