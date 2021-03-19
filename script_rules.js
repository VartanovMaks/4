let container =  document.createElement('div');
container.id = 'content';
container.innerText = 'Зміст сторінки';
container.style.fontSize = '24px';

let list =  document.createElement('ul');
// выясняем сколько параграфов
let itemsH2 = document.getElementsByTagName('h2');
let listItems=[];    // массив Li-шек
for (let i=0; i<itemsH2.length; i++){
    listItems[i] = document.createElement('li');
    listItems[i].innerText = itemsH2[i].innerText;
    listItems[i].style.fontSize = '16px';
    list.appendChild(listItems[i]);
}
container.appendChild(list);
document.body.appendChild(container);
