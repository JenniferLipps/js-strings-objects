const iAmThirsty = (num) => {
    if (num < 21) {
      return 'Drink some water.';
  } else if (num >= 21 && num < 65) {
      return 'Have a beer.';
  } else {
      return 'Have a nap.';
  }
};

// console.log(iAmThirsty(35));
// console.log(iAmThirsty(18));
// console.log(iAmThirsty(70));

// const printToDom = (divId, textToPrint) => {
//   const selectedDiv = document.getElementById(divId);
//   selectedDiv.innerHTML += textToPrint;
//     };

// printToDom('thirsty', iAmThirsty(35));
// printToDom('thirsty', iAmThirsty(18));
// printToDom('thirsty', iAmThirsty(70));

console.log(1 === '1');//fasle
// console.log(1 == '1');
console.log(1 !== '2');//true
console.log('dogs'.length);//how many characters

const quote = 'winter is coming';
console.log(quote.indexOf('is'));//what index value does this string start on; returns 7
console.log(quote.indexOf('white'));//returns -1


const catName = () => {
  return 'killer';
};

const bucketOCats = {
  cat1: 'fluffy',
  cat2: 5,
  cat3: catName,
  cat4: {
    water: 'nope',
    sunlight: 'yep'
  }
}

//dot notation
console.log(bucketOCats.cat2);
//bracket notation
console.log(bucketOCats['cat2'])
console.log(bucketOCats.cat4.water);


let hitchhikers_guide = {
  characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
  catchphrase: "Don't Panic",
  random_facts: {
      copies_sold: 14000000,
      formats: ["radio", "TV", "film", "graphic novel"],
      ultimate_answer: {
          meaning_of_life: 42
      }
  }
};

console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life); //42

// let eom = "employee_of_the_month";
let employee = {
  name: "Jeff Winger",
  age: 37,
  department: "legal",
  hire_date: "09/22/2010",
  vacation_days: 20,
  // eom: false
}

console.log('Our company lawyer is ' + employee.name + '.');
console.log(employee['name'] + ' was hired on ' + employee['hire_date'] + '.');
console.log(employee['name'] + ' has accrued ' + employee['vacation_days'] + ' vacation days.');
console.log(employee.name + ' has accrued ' + employee.vacation_days + ' vacation days.');

console.log(`Our company lawyer is ${employee.name}.`);
console.log(`Jeff was hired on  ${employee['hire_date']}.`);
console.log(`Jeff has accrued ' + ${employee['vacation_days']} + ' vacation days.'`);

console.log(employee.name + ' has accrued ' + employee.vacation_days + ' vacation days.');

let eom = "employee_of_the_month";
employee[eom] = false;

const empOM = () => {
  if (eom === true) {
    return('Jeff is Employee of the Month.');
  } else {
    return('Jeff is not Employee of the Month.');
  }
};

console.log(empOM(employee));

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += textToPrint;
    };

// printToDom('jeff', empOM(employee));

printToDom('jeff', 'Our company lawyer is ' + employee.name + '.');
printToDom('jeff', ' ' + employee.name + ' was hired on ' + employee.hire_date + '.');
printToDom('jeff', ' ' + employee.name + ' has accrued ' + employee.vacation_days + ' vacation days. ')
printToDom('jeff', empOM(employee));


