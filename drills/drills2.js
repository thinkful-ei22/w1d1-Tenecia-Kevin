'use strict';

function jediName(firstName, lastName) {
  firstName = firstName.split('',2).join('');
  lastName = lastName.split('',3).join('');
  let newName = lastName + firstName;
  console.log(newName);
}
jediName('Tenecia', 'Jennings');

'use strict';
function beyond(num){
  if (num === Infinity) {
    console.log('And beyond');
  }

  if (num !== Infinity && num > 0) {
    console.log('To infinity');
  }
  if (num !== Infinity && num < 0) {
    console.log('To negative infinity');
  }
  if (num ===  0) {
    console.log('Staying home');
  }

}

beyond(0);

'use strict';
let initialString = 'craft block argon meter bells brown croon droop',
  mappedLetters = {
    a:2,
    b:3,
    c:4,
    d:5
  };

function decode(str)
{
  let arr = str.split(' '),
    decodedArray = [];
  
  arr.forEach(itm => {
    let firstLetter = itm.charAt(0),
      encodedPosition = mappedLetters[firstLetter];
    
    if(!encodedPosition){ 
      decodedArray.push(' '); 
    }
    else{
      decodedArray.push( itm.charAt(encodedPosition-1) );
    }
  });
  
  console.log(decodedArray.join(' '));


  

}
console.log(decode);

decode(initialString);

'use strict';



function daysInMonth (month, leapYear) {

  const ERROR_MESSAGE = 'Must provide a valid month.';

  const results = (month, days) => { 
    return `${month} has ${days} days.`;
  };

  switch(month) {
  case 'February':
    if (leapYear === true){
      console.log(results(month, 29)); 
    } else {
      console.log(results(month, 28));
    }
    break;
      
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'august':
  case 'October':
  case 'December':
    console.log(results(month, 31));
    break;  
      
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    console.log(results(month, 30));
    break; 
      
  default: 
    throw new Error(ERROR_MESSAGE); 
  } 
}

daysInMonth('Door',false);

