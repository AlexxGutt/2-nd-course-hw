let btn = document.getElementById('btn');
let userNum;
btn.addEventListener('click', function() {
  let number = Math.floor(Math.random() * 100) + 1; 
  userNum = Number(prompt("Угадайте число от 1 до 100")); 
  while (userNum != number) { 
    if (userNum < number) {
      alert(`Это число больше ${userNum}!`);
    } else {
      alert(`Это число меньше ${userNum}!`);
    }
    userNum = Number(prompt('Попробуйте еще раз!'));
  }
  alert('Вы угадали число!');
});
