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

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += textToPrint;
    };

printToDom('thirsty', iAmThirsty(35));
printToDom('thirsty', iAmThirsty(18));
printToDom('thirsty', iAmThirsty(70));