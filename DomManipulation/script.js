let answer = prompt("What's your name?");

if (typeof(answer) === 'string') {
  let h1 = document.createElement('h1');
  h1.innerText = answer;
  document.body.innerText = '';
  document.body.appendChild(h1);
}