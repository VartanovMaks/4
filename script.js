//- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.

/* const mailBox = {width:500, heigt:300, depth:30, filled:false, address:"Kyiv, Chaplyhina 5"};
const carModel = {producer:"Mercedes", model:"SL800", enginePower:240, tankVolume:80, color:"white"};
const roomDining = {square:24, height: 3.5, table:true, capboard:false, wallColor:"yellow"};
const fruit = {name:"apple", weight:200, ripe:true, vitamins:["b1","c","b12"]};
const pupil = {name:"Kostya", age:12, father:["Petya",32,"programmer"],mother:["Olya",30,"nurse"]}; */

//- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив 
//и внутренний объект. Опишите что угодно, машину, картину, болт... 
//Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

/* const room = {number:23, empty:true, dimensions:[4,6,2.8], service:{name:"Ira", expirience:9, married:false}};
const dish = {name:"blin", prepare:{time:30, how:"fry", hot:true}, ingridients:["flour","eggs","sugar","olil"]};
const phone = {model:"Fly",weight:200, dimensions:[10,6,0.5], screen:{diagonal:6.3, color:true, touch:false}};
const carpet = {model:"Versal",material:["neulon","poliestr"], dimension:{width:10,depth:10,height:2}, washable:true};
const vegitable = {name:"potato", sort:"adretta", properties:{color:"white", purpose:"boil", averageSize:23}};
 */
//- При помощи for in вывести все ключи всех объектов из задания 1 и 2
//- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

//Для уменьшения кода слил все в один массив. Достучаться до вложеных объектов не могу
/* let myArr=[mailBox,carModel,roomDining,fruit,pupil,room,dish,phone,carpet,vegitable];
for( let i=0; i<myArr.length; i++){
    console.log(myArr[i]);
    for (const keyname in myArr[i]) {
        console.log(keyname);
    }
} */
// Object.keys
/* let myArr=[mailBox,carModel,roomDining,fruit,pupil,room,dish,phone,carpet,vegitable];
for( let i=0; i<myArr.length; i++){
    console.log('Название объекта ',myArr[i]);
    console.log(Object.keys(myArr[i]));
    
} */

//- Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, 
//цвет. (Значаения полей могу быть выдуманными)
// Изменяю предыдущее задание
/* let carModels = [
    {model: 'Mercedes sl600', year: 2010, engine: 220, color:"black"},
    {model: 'BMW e340', year: 2003, engine: 150, color:"red"},
    {model: 'Caddilac Phaeton', year: 2000, engine: 200, color:"DarkGrey"},
    {model: 'Chaika', year: 1970, engine: 160, color:"white"},
    {model: 'Daihatsu Sirion', year: 2004, engine: 110, color:"blue"},
    {model: 'Lamborgini Speed', year: 2009, engine: 340, color:"red"},
    {model: 'Ford Mustang', year: 1980, engine: 180, color:"yellow"},
    {model: 'GAZ Volga', year: 1966, engine: 90, color:"blue"},
    {model: 'Jeep Cherokee', year: 1998, engine: 150, color:"LightGrey"},
    {model: 'LuAZ Volyn', year: 1972, engine: 80, color:"green"},
]; */

//- Создать массив объектов cities и заполнить его объектами с полями название, популяция, 
//страна, регион. (Значаения полей могу быть выдуманными)
let cities = [
    {name:"London", people:"british", country:"UK", region:"Europe"},
    {name:"Bratislava", people:"slovak", country:"SK", region:"Europe"},
    {name:"Kyiv", people:"ukraine", country:"UA", region:"Europe"},
    {name:"Ankara", people:"turkish", country:"TR", region:"Asia"},
    {name:"Cario", people:"egypt", country:"EG", region:"Africa"},
    {name:"Mexico", people:"mexicans", country:"MX", region:"North America"},
    {name:"Toronto", people:"canadians", country:"CA", region:"North America"},
    {name:"Nairoby", people:"kenians", country:"KN", region:"Africa"},
    {name:"Khanoy", people:"vietnams", country:"VN", region:"Asia"},
    {name:"Lissabon", people:"portugese", country:"PG", region:"Europe"},
];

//- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, 
//цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж
/* let carDrivers = [
    {model: 'Mercedes sl600', year: 2010, engine: 220, color:"black", 
        driver:{name:"Olya", age:32, sex:"woman", expirience:3}},
    {model: 'BMW e340', year: 2003, engine: 150, color:"red",
        driver:{name:"Gena", age:45, sex:"man", expirience:10}},
    {model: 'Caddilac Phaeton', year: 2000, engine: 200, color:"DarkGrey",
        driver:{name:"Vera", age:60, sex:"woman", expirience:12}},
    {model: 'Chaika', year: 1970, engine: 160, color:"white",
        driver:{name:"Vova", age:75, sex:"man", expirience:30}},
    {model: 'Daihatsu Sirion', year: 2004, engine: 110, color:"blue",
        driver:{name:"Katya", age:24, sex:"woman", expirience:1}},
    {model: 'Lamborgini Speed', year: 2009, engine: 340, color:"red",
        driver:{name:"Zhorik", age:33, sex:"man", expirience:9}},
    {model: 'Ford Mustang', year: 1980, engine: 180, color:"yellow",
        driver:{name:"Max", age:54, sex:"man", expirience:22}},
    {model: 'GAZ Volga', year: 1966, engine: 90, color:"blue",
        driver:{name:"Valya", age:58, sex:"woman", expirience:14}},
    {model: 'Jeep Cherokee', year: 1998, engine: 150, color:"LightGrey",
        driver:{name:"Katya", age:38, sex:"woman", expirience:14}},
    {model: 'LuAZ Volyn', year: 1972, engine: 80, color:"green",
        driver:{name:"Semen", age:66, sex:"man", expirience:34}},
]; */

//- проитерировать каждый массив из задания 5,6,7 при помощи while.
/* let i=0;
while (i<carModels.length){
    console.log(carModels[i]);
    i++;
}
i=0;
while (i<cities.length){
    console.log(cities[i]);
    i++;
}
i=0;
while (i<carDrivers.length){
    console.log(carDrivers[i]);
    i++;
} */
//- проитерировать каждый массив из задания 5,6,7 при помощи for .
//- проитерировать каждый массив из задания 5,6,7 при помощи  for of.

/* for (let i=0; i<carModels.length; i++){
    console.log(carModels[i]);
}
for (let i=0; i<cities.length; i++){
    console.log(cities[i]);
}
for (driver of carDrivers){
    console.log(driver);
    console.log('Driver info. Name: ',driver.driver.name,', Age ', 
        driver.driver.age, ', Sex ', driver.driver.sex, ', Expiriense', driver.driver.expirience);
}
 */
//- взять объекты из задания 1 и превратить каждый в json.
//- взять json из задания 11 и превратить их обратно в объекты.

/* let mailBox = {width:500, heigt:300, depth:30, filled:false, address:"Kyiv, Chaplyhina 5"};
let carModel = {producer:"Mercedes", model:"SL800", enginePower:240, tankVolume:80, color:"white"};
let roomDining = {square:24, height: 3.5, table:true, capboard:false, wallColor:"yellow"};
let fruit = {name:"apple", weight:200, ripe:true, vitamins:["b1","c","b12"]};
let pupil = {name:"Kostya", age:12, father:["Petya",32,"programmer"],mother:["Olya",30,"nurse"]};
//Сделаем ручками массив для удобства
let myArr = [mailBox,carModel,roomDining,fruit,pupil];

console.log(myArr);
for (let i=0; i<myArr.length; i++){
    myArr[i]=JSON.stringify(myArr[i]); // сделали строку JSON
}
console.log(myArr);  // выводим массив объектов JSON
// теперь назад
for (let i=0; i<myArr.length; i++){
    myArr[i]=JSON.parse(myArr[i]);
}
console.log(myArr);  // выводим снова массив объектов
 */


 // - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
/* let carModels = [
    {model:'Mercedes sl600', year: 2010, engine: 220, color:"black"},
    {model:'BMW e340', year: 2003, engine: 150, color:"red"},
    {model:'Caddilac Phaeton', year: 2000, engine: 200, color:"DarkGrey"},
    {model:'Chaika', year: 1970, engine: 160, color:"white"},
    {model:'Daihatsu Sirion', year: 2004, engine: 110, color:"blue"},
    {model:'Lamborgini Speed', year: 2009, engine: 340, color:"red"},
    {model:'Ford Mustang', year: 1980, engine: 180, color:"yellow"},
    {model:'GAZ Volga', year: 1966, engine: 90, color:"blue"},
    {model:'Jeep Cherokee', year: 1998, engine: 150, color:"LightGrey"},
    {model:'LuAZ Volyn', year: 1972, engine: 80, color:"green"},
];
// Я только что это уже делал. Просто копирую код
for (let i=0; i<carModels.length; i++){  //проверка вывода информации
    console.log(carModels[i]);
}

console.log(carModels);


for (let i=0; i<carModels.length; i++){
    carModels[i]=JSON.stringify(carModels[i]); // сделали строку JSON
}
console.log(carModels);  // выводим массив объектов JSON
for (let i=0; i<carModels.length; i++){  //проверка вывода информации
    console.log(carModels[i]);
} */


// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json 
// и сразу скоприовать в новый массив.

/* let carDrivers = [
    {model: 'Mercedes sl600', year: 2010, engine: 220, color:"black", 
        driver:{name:"Olya", age:32, sex:"woman", expirience:3}},
    {model: 'BMW e340', year: 2003, engine: 150, color:"red",
        driver:{name:"Gena", age:45, sex:"man", expirience:10}},
    {model: 'Caddilac Phaeton', year: 2000, engine: 200, color:"DarkGrey",
        driver:{name:"Vera", age:60, sex:"woman", expirience:12}},
    {model: 'Chaika', year: 1970, engine: 160, color:"white",
        driver:{name:"Vova", age:75, sex:"man", expirience:30}},
    {model: 'Daihatsu Sirion', year: 2004, engine: 110, color:"blue",
        driver:{name:"Katya", age:24, sex:"woman", expirience:1}},
    {model: 'Lamborgini Speed', year: 2009, engine: 340, color:"red",
        driver:{name:"Zhorik", age:33, sex:"man", expirience:9}},
    {model: 'Ford Mustang', year: 1980, engine: 180, color:"yellow",
        driver:{name:"Max", age:54, sex:"man", expirience:22}},
    {model: 'GAZ Volga', year: 1966, engine: 90, color:"blue",
        driver:{name:"Valya", age:58, sex:"woman", expirience:14}},
    {model: 'Jeep Cherokee', year: 1998, engine: 150, color:"LightGrey",
        driver:{name:"Katya", age:38, sex:"woman", expirience:14}},
    {model: 'LuAZ Volyn', year: 1972, engine: 80, color:"green",
        driver:{name:"Semen", age:66, sex:"man", expirience:34}},
];

let newDrivers = [];
console.log(carDrivers);
for (let i=0; i<carDrivers.length; i++){
    carDrivers[i]=JSON.stringify(carDrivers[i]); // сделали строку JSON
    newDrivers.push(carDrivers[i]);              // добавляем элемент формата Json в новый массив
}
console.log('Old Array ',carDrivers);
console.log('New Array ',   newDrivers); */

//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое 
//является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать 
//его массив skills
/* let users = [
    {name:"Kola", prof:"student", skills:["study","lazy","drunk"]},
    {name:"Lena", prof:"doctor", skills:["prick","treat"]},
    {name:"Vasya", prof:"carpenter", skills:["drill","cut","clean","polish"]},
    {name:"Olga", prof:"driver", skills:["care","attention","expirience"]}

];

for (let man of users){
        console.log(man.name);    
    for (let i=0; i<man.skills.length; i++){
        console.log(man.skills[i]);    
    }
} */

//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое 
//является массивом. Проитерировать массив пользователей и в каждом пользователе 
//проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

/* let users = [
    {name:"Kola", prof:"student", skills:["study","lazy","drunk"]},
    {name:"Lena", prof:"doctor", skills:["prick","treat"]},
    {name:"Vasya", prof:"carpenter", skills:["drill","cut","clean","polish"]},
    {name:"Olga", prof:"driver", skills:["care","attention","expirience"]}

];
let allSkills = [];
for (let man of users){
        console.log(man.name);    
    for (let skil of man.skills){
        console.log(skil);    
        allSkills.push(skil);
    }
}
console.log(allSkills);   
 */

//- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
/*  let users = [  {name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
                {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
                {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
                {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
                {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
            ];

for (let man of users){
    console.log(man);    
    for (let skil of man.skills){
        console.log(skil);    
    }
} */

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в 
// інший порожній масив.
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
let userAddress = [];
for (let address of users){
    userAddress.push(address.address)
}
console.log(userAddress);    
 */
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за 
// допомоги document.createElement. Всі данні в одному блоці.
let users = [{
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
let userAddress = [];
for (let address of users){
    userAddress.push(address.address)
}
console.log(userAddress);


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги 
// document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги 
// document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим 
// блоком, з блоками для кожної властивості

