// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. 
//За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, 
//при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).


  fetch('https://jsonplaceholder.typicode.com/users')
  .then(users => users.json())
  .then(users => {
    /* for (const man of users) {
        console.log(man);
    }; */
    let keys = [];   // нужно знать сколько надо блоков.считаем сколько полей у юзера через длину массива
    for (const key in users[0]) {
        keys.push(key);
    };
    
    // делаем общую обертку
    let wrap =  document.createElement('div');
    wrap.style.width = '40%';
    wrap.style.margin = '0 auto';
    document.body.appendChild(wrap);

    //делаем блоки по количеству юзеров и вставляем их в обретку
    for ( let user of users){
        let userBlock = document.createElement('div');
        userBlock.style.border = '3px solid grey';
        userBlock.style.padding = '1.5%';

            // делаем блоки по количеству полей юзера
            for ( let property of keys){
                let propertyBlock = document.createElement('div');
                propertyBlock.style.border = '1px solid blue';
                propertyBlock.style.padding = '1.5%';
                if ( typeof user[property] == 'object'){
                    // если вложеное поле объект - надо его раскрыть
                    let tmpString ='';
                    for ( let key in user[property]){
                        // раскрываем тройное вложение объекта
                        if( typeof user[property][key] == 'object'){
                            for ( let key1 in user[property][key]){
                                tmpString = tmpString+ user[property][key][key1] +', ';
                            };   
                        } else {
                            tmpString = tmpString+ user[property][key] +', ';
                        };
                    };
                    propertyBlock.innerText = tmpString;
                } else {
                    propertyBlock.innerText = user[property];
                }
                userBlock.appendChild(propertyBlock);
            };    
        // добавляем блок правила в обертку
        wrap.appendChild(userBlock);
    };
});




//*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою 
//document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен 
//внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).


// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего 
// then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий 
//post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId 
//которое определяет какой комментарий принадлежит какому посту
