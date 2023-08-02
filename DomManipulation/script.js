// const body = document.body;

// const div = document.createElement('div');

// div.innerText = 'Hello World'

// div.innerHTML = "<strong>It will now bold the text</strong>"

// div.textContent = "Hello World 2"

// body.append(div);

// const div = document.querySelector('div');
// console.log(div.textContent);
// console.log(div.innerText);


//---------------------------------------------------


// const body = document.body;
// const div = document.createElement('div');
// body.append(div);

// const strong = document.createElement('strong');
// strong.innerText = "I don't know what I am doing";
// div.append(strong);

//--------------------------------------------------

const body = document.body;
const div = document.querySelector('div');
const spanHi = document.querySelector('#hi');
const spanBye = document.querySelector('#bye');


spanBye.remove();
div.append(spanBye);
spanHi.setAttribute('class', 'text-change');
spanHi.removeAttribute("title");
spanBye.style.color = 'tomato';
console.log(spanHi.title);

