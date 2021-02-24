function createPhoneNumber(numbers){
    return '('+ numbers[0] + numbers[1] + numbers[2] + ') ' + numbers[3] + numbers[4] + numbers[5] + '-' + numbers[6] + numbers[7] + numbers[8] + numbers[9] 
    }

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));

 console.log('-------------------------------');

function positiveSum(arr) { 
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
        suma += arr[i];
    }
    }
    return suma
}
    console.log(positiveSum([2, -5, 8, 9]));

    console.log('-------------------------------');


function countSheeps(arrayOfSheep) {
    let sumos = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
        sumos = sumos + 1;
      }
    }
    return sumos
  }
 console.log(countSheeps( [true,  true,  true,  false,
     true,  true,  true,  true ,
     true,  false, true,  false,
     true,  false, false, true ,
     true,  true,  true,  true ,
     false, false, true,  true ]));

console.log('-------------------------------');


function testEven(n) {
    return n % 2 === 0;
    }
console.log(testEven(5));

console.log('-------------------------------');

var summation = function (num) {
  if (num === 1 )
  return 1;
  else
  return num + summation(num-1)
  }

  console.log(summation(5));
      
console.log('-------------------------------');


function getDrinkByProfession(param){
    if (param.toUpperCase() === 'JABRONI')
      return 'Patron Tequila';
    if (param.toUpperCase() === 'SCHOOL COUNSELOR')
      return 'Anything with Alcohol';
    if (param.toUpperCase() === 'PROGRAMMER')
      return 'Hipster Craft Beer';
    if (param.toUpperCase() === 'BIKE GANG MEMBER')
      return 'Moonshine';
    if (param.toUpperCase() === 'POLITICIAN')
      return 'Your tax dollars';
    if (param.toUpperCase() === 'RAPPER')
      return 'Cristal';
    else 
      return 'Beer';
}
       
console.log(getDrinkByProfession('namas'));

console.log('-------------------------------');

function arrayMadness(a, b) {
    let suma = 0;
    for (let i = 0; i < a.length; i++) {
    suma += a[i] ** 2;
    }
    let suma2 = 0;
    for (let i2 = 0; i2 < b.length; i2++) {
    suma2 += b[i2] ** 3;
    }
    return suma > suma2
}     
console.log(arrayMadness([4,5,6],[1,2,3]));

console.log('-------------------------------');


function tripleTrouble(one, two, three){
 let newWord = ''; 
 for (let i = 0; i < one.length; i++) {
 newWord = newWord + one[i] + two[i] + three[i];
 }
 return newWord   
 }
 console.log(tripleTrouble("this","test","lock"));


 console.log('-------------------------------');

 function differenceInAges(ages){
   let new2 = [];
   new2[0] = Math.min(...ages);
   new2[1] = Math.max(...ages);
   new2[2] = (Math.max(...ages) - Math.min(...ages));

   return new2

}
console.log(differenceInAges([82, 15, 6, 38, 35]));


  console.log('-------------------------------');

  function strCount(str, letter){  
    let sumL = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
        sumL = sumL + 1;
      }
    }
    return sumL
  }
  console.log(strCount('HAllo', 'o'));

  console.log('-------------------------------');

  function correctPolishLetters(string) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
      if (string[i] === 'ą') {
        newString += 'a';
      }
      else if (string[i] === 'ć') {
        newString += 'c';
      }
      else if (string[i] === 'ę') {
        newString += 'e';
      }
      else if (string[i] === 'ł') {
        newString += 'l';
      }
      else if (string[i] === 'ń') {
        newString += 'n';
      }
      else if (string[i] === 'ó') {
        newString += 'o';
      }
      else if (string[i] === 'ś') {
        newString += 's';
      }
      else if (string[i] === 'ź') {
        newString += 'z';
      }
      else if (string[i] === 'ż') {
        newString += 'z';
      }
      else {
        newString += string[i]
      }
    }
    
      return newString
    }
    console.log(correctPolishLetters("Czeslaw Miłosz"));
  
    console.log('-------------------------------');

    function enough(cap, on, wait) {
     if (cap - on >= wait)
      return 0
     return wait -(cap-on)
     }
      
    console.log(enough(10, 6, 5));

    console.log('-------------------------------');

    function century(year) {
      if (year%100 === 0)
      return year / 100
      else if (year%100 !== 0)
      return (year - year%100)/100 +1
    }
    console.log(century(1705));


    console.log('-------------------------------');

    function likes(names) {
      const l = names.length
        if (l === 0) {
        return 'no one like this'
        }else if (l === 1) {
        return `${names[0]} likes this`;
        } else if (l === 2){
        return `${names[0]} and ${names[1]} like this `;
        } else if (l === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
        } else if (l >=4) {
        return `${names[0]}, ${names[1]} and ${l-2} others like this`
        } 
  }
    console.log(likes([]))

    console.log('-------------------------------');

    const divider = 2;
    let count = 0;
    function even_or_odd(number) {
    for (let i = 0; i <= number; i++) {
        if (i % divider === 0) {
          return "even";
        } else {
    return "Odd";
        }
    }
    }
    console.log(even_or_odd(2), "Even")
    console.log(even_or_odd(0), "Even")
    console.log(even_or_odd(7), "Odd")
    console.log(even_or_odd(1), "Odd")
    console.log(even_or_odd(6), "even")
 
    console.log('---------lyginius sutrumpintai----------------------');

    function getEvenNumbers(numbersArray) {
    let newArray = [];
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i]%2===0){
    newArray.push(numbersArray[i]);
  }
}
  return newArray
    }   
console.log(getEvenNumbers([2,4,5,6]));



function getEvenNumbers(numbersArray) {
const ArrayFilter = numbersArray.filter(n => n%2===0)
return ArrayFilter
}


console.log(getEvenNumbers([2,4,5,6]));

console.log('-------------------------------');

function fireFight(s){
  return s.replace(/Fire/g, '~~')
}

console.log(fireFight("Mast Deck Engine Water Fire"));


console.log('-------------------------------');

function createArrayOfTiers(num) {
  let arra = [num.toString()];
  while (num >=10){
    num = Math.floor(num/10)
    arra.push(num.toString())
  }

 return arra.reverse();
}
console.log(createArrayOfTiers(2017));

console.log('-------------------------------');

function digital_root(n) {
  let number = n.toString()
  let suma = 0;
  if (number.length === 1) {
    return parseInt(number);
  }
  for (let i = 0; i < number.length; i++) { 
      suma +=  parseInt(number[i]);
  }
  return digital_root(suma);
}

  console.log(digital_root(1191));

  console.log('-------------------------------');

  function digitalRoot(number) {
   number = eval(number.toString().split('').join('+'));
   if (number > 9){
    return digitalRoot(number)
   } 
   return number;
  }

  console.log(digitalRoot(1191));

  
  console.log('-------------------------------');

  let number = 2;

  console.log(number.toString(2));

  function evensAndOdds(num){
    if (num%2 === 0) {
      return num.toString(2)
    } else
    return num.toString(16);
  }

  console.log(evensAndOdds(13));

  console.log('-------------------------------');

  function testIt(a,b){
    return eval(a.toString().split('').join('+')) * eval(b.toString().split('').join('+'))
  }
  console.log(testIt(12,34));

  console.log('-------------------------------');

  /*function solution(string) {
    let newStr = '';
    for (let i = 0; i < string.length; i++) { 
    } 
     newStr += newStr.push(string[i])
      
  }
  console.log(solution('camelCasing'));*/


  console.log('-------------------------------');

  function getAverage(marks){
    let sum = 0;
    for (const mark of marks) {
      sum += mark;
    }
    return Math.round(sum / marks.length)
  }

  console.log(getAverage([2,2,2,4])); 

  console.log('-------------------------------');

  function gordon(a){
    a = a.toUpperCase();
    a = a.replace(/[aA]/gi, '@');
    a = a.replace(/[eEiIoOuU]/gi, '*');
    a = a.split(' ');
    aNew = [];
    for (let i = 0; i < a.length; i++) {
      aNew.push(a[i]+'!!!!');
    }
  
    return aNew.join(' ')
  }

  console.log(gordon('What feck damn cake'));

  console.log('-------------------------------');
  function warnTheSheep(queue) {
    let ilgis = queue.length;
    queue.reverse();
    if (queue[0] === "wolf") {
      return "Pls go away and stop eating my sheep";
  }
    for (var i = 0; i < ilgis; i++) {
          if (queue[i] === "wolf") {
  
          return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`
  
        }
      }
  
  }

  console.log(warnTheSheep(['sheep','sheep','sheep','sheep','wolf','sheep','sheep',]));
  
  
  console.log('-------------------------------');
  function firstNonConsecutive (arr) {
    for (let i = 0; i < arr.length-1; i++) {
      if (arr[i]+1 !== arr[i+1]) {
     return arr[i+1];
   }
   }
   return null;
   }

   console.log(firstNonConsecutive([1,2,3,4,6,7,8,9]));

   console.log('-------------------------------');

   function race(v1, v2, g) {
    if (v1 >= v2) {
  return null
} else {
let meetPoint = g/(v2-v1)
let meetH = Math.floor(meetPoint);
let meetMin = Math.floor(60 * (meetPoint - meetH));
let meetS = Math.floor(meetPoint*3600 - (meetH*3600+meetMin*60));
  if (meetS === 60) {
    return [meetH, meetMin+1, 0]
  } else {
    return [meetH, meetMin, meetS];
}
}
}
console.log(race(820, 850, 550));

function elevatorDistance(array) {
  let sum = 0;
  for (let i = 0; i < array.length-1; i++) {
    sum += Math.abs(array[i]-array[i+1]);
  }
  return sum
}

console.log(elevatorDistance([6,1,6,1]));

function sequence(x) {
  let arr = [];
  for (let i = 0; i < x; i++) {
    arr.push(i+1);
  }
  return arr.sort();
}
console.log(sequence(16));

function chuckPushUps(string) {
  string = string.replace(/[^0-9,]/g, ',');
  return string;
}

console.log(chuckPushUps('1 "Chuck" 10 "Stop that!" 11 "Your vest looks stupid" 100 101 110'));



