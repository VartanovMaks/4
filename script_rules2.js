//-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне 
//правило в окремому блоці.
//При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

// делаем общую обертку
let wrap =  document.createElement('div');
wrap.style.width = '40%';
wrap.style.margin = '0 auto';
document.body.appendChild(wrap);

//  выясняем количество правил и делаем блоки правил
let divBlocks = [];
let divTitles = [];
let divContents = [];
for ( let i=0; i<rules.length; i++){
    divBlocks[i] = document.createElement('div');
    divBlocks[i].style.border = '3px solid grey';
    divBlocks[i].style.padding = '1.5%';
    
    // делаем блок заголовка
    divTitles[i] = document.createElement('div');
    divTitles[i].style.border = '1px solid black';
    divTitles[i].style.marginBottom = '2%';
    divTitles[i].style.background = 'silver';
    divTitles[i].innerText = rules[i].title;
    divBlocks[i].appendChild(divTitles[i]);
    
    // делаем блок содержимого
    divContents[i] = document.createElement('div');
    divContents[i].innerText = rules[i].body;
    divContents[i].style.border = '1px solid black';
    divContents[i].style.background = 'lightblue';
    divContents[i].innerText = rules[i].body;
    divBlocks[i].appendChild(divContents[i]);
    
    // добавляем блок правила в обертку
    wrap.appendChild(divBlocks[i]);

};  









