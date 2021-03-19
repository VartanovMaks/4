// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за 
// допомоги document.createElement. Всі данні в одному блоці.
/* let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true, 
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
 */
/* let userAddress = [];
for (let address of users){
    userAddress.push(address.address)
}
console.log(userAddress);
 */

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги 
// document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
/* for (let man of users) {
    let userDiv =  document.createElement('div');   // name age status address
    let nameDiv =  document.createElement('div');
    let ageDiv =  document.createElement('div');
    let statusDiv =  document.createElement('div');
    let addressDiv =  document.createElement('div');

    nameDiv.innerText = (`${man.name}`);
    ageDiv.innerText = (`${man.age}`);
    statusDiv.innerText = (`${man.status}`);
    addressDiv.innerText = (`${man.address.city} ${man.address.country} ${man.address.street}
                            ${man.address.houseNumber}`); // city:, country, street, houseNumber
    userDiv.style.border = '2px solid blue';
    userDiv.appendChild(nameDiv);
    userDiv.appendChild(ageDiv);
    userDiv.appendChild(statusDiv);
    userDiv.appendChild(addressDiv);
    
    document.body.appendChild(userDiv);
}; */

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги 
// document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим 
// блоком, з блоками для кожної властивості
/* for (let man of users) {
    let userDiv =  document.createElement('div');   // name age status address
    userDiv.style.border = '2px solid blue';
    userDiv.style.margin = '0 auto';
    userDiv.style.width = '70%';
    let nameDiv =  document.createElement('div');
    let ageDiv =  document.createElement('div');
    let statusDiv =  document.createElement('div');
    let addressDiv =  document.createElement('div');  // общий блок адреса
    addressDiv.style.display = 'flex';
    addressDiv.style.justifyContent = 'space-between';
    let addressCity = document.createElement('div');  // город
    let addressCountry = document.createElement('div');  // страна
    let addressStreet= document.createElement('div');  // улица
    let addressHouse = document.createElement('div');  // номер дома

    nameDiv.innerText = (`Пользователь: ${man.name}`);
    ageDiv.innerText = (`Возраст : ${man.age}`);
    statusDiv.innerText = (`Статус: ${man.status}`);
    addressCity.innerText = (`${man.address.city}`);
    addressCountry.innerText = (`${man.address.country}`);
    addressStreet.innerText = (`${man.address.street}`);
    addressHouse.innerText = (`${man.address.houseNumber}`);
    
    addressDiv.appendChild(addressCity);
    addressDiv.appendChild(addressCountry);
    addressDiv.appendChild(addressStreet);
    addressDiv.appendChild(addressHouse);


    userDiv.appendChild(nameDiv);
    userDiv.appendChild(ageDiv);
    userDiv.appendChild(statusDiv);
    userDiv.appendChild(addressDiv);
    
    document.body.appendChild(userDiv);
}; */   
//************** ВАЖНОЕ !!!!**************************************************************
//- Дано 2 масиви з рівною кількістю об'єктів. Масиви:
 let usersWithId =  [{id: 1, name: 'vasya', age: 31, status: false}, 
                    {id: 2, name: 'petya', age: 30, status: true}, 
                    {id: 3, name: 'kolya', age: 29, status: true},
                    {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, 
                    {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
                    {user_id: 2, country: 'Poland', city: 'Krakow'}, 
                    {user_id: 4, country: 'USA', city: 'Miami'},];

//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//Записати цей об'єкт в новий масив
//Частковий приклад реультату:
//let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, 
//                        address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

let newArray = [];
// Формируем новый массив на базе usersWithId
for (let i=0; i<usersWithId.length; i++){
    newArray.push(usersWithId[i]);
};
// добавляем в новый массив свойство "адрес" как объект
for (let i=0; i<newArray.length; i++){
    usersWithId[i].address = {};
};
// вставляем в свойство "адрес" нового массива данные из массива адресов, если совпадает id
for (let i=0; i<newArray.length; i++){
    for ( let address of citiesWithId) {
        if( address.user_id == newArray[i].id){
            Object.assign(newArray[i].address,address);
        }
    }
    console.log(newArray[i]);
};

//****************************************************************************
