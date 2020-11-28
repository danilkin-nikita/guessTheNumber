'use strict';

const checkNumber = function(n) {
   return !isNaN(parseFloat(n)) && isFinite(n);
}

const getRandomNumber = function(min, max) {

   let rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
};

const getUserNumber = function(str) {
   const number = prompt(str);
   if (checkNumber(number)) {
      return +number;
   }
   alert('Введите число!');
   getUserNumber(str);
}

const game = function(count = 10, reboot) {

   alert('Угадайте число');

   const randomNumber = getRandomNumber(1, 100);
   console.log(randomNumber);
   
   return function play() {

      const userNumber = getUserNumber('Введите число от 1 до 100');
      if (userNumber == +randomNumber) {
         reboot = confirm('Поздравляю, Вы угадали! Хотели бы сыграть ещё?');
         if (reboot == true) {
         location.reload();
         return;
         } else if (reboot == false) {
            return;
         }
      } else {
         --count;
         if (count > 0) {
            console.log(count);
            if (userNumber > +randomNumber) {
               alert(`Загаданное число меньше, осталось ${count} попыток`);
               return play();
            } else if (userNumber < +randomNumber) {
               alert(`Загаданное число больше, осталось ${count} попыток`);
               return play();
            }
         } else {
            reboot = confirm('Попытки закончились. Хотите сыграть ещё?');
            if (reboot == true) {
               location.reload();
               return;
            } else if (reboot == false) {
               return;
            }
         }
      }
      play();
   }
}

const startGame = game();
startGame();