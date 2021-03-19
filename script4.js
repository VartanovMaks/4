// знайти всі div та змінити ім колір на червоний
let divs = document.getElementsByTagName('div');
for (let div of divs ){ 
    div.style.background = 'red'
};

//знайти всі параграфи ,та змінити текст на hello oktenweb!
let ps = document.getElementsByTagName('p');
for (let p of ps ){ p.innerText= 'hello oktenweb!'}

//знайти всі елементі, які мають class (не порожній)

let cl = document.querySelectorAll('*');
for (let p of cl ){ 
    if (p.classList.length != 0) console.log(p.classList);
};


