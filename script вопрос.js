// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json 
// и сразу скоприовать в новый массив.

let carDrivers = [
    {model: 'Mercedes sl600', year: 2010, engine: 220, color:"black", 
        driver:{name:"Olya", age:32, sex:"woman", expirience:3}},
    {model: 'BMW e340', year: 2003, engine: 150, color:"red",
        driver:{name:"Gena", age:45, sex:"man", expirience:10}},
    {model: 'Caddilac Phaeton', year: 2000, engine: 200, color:"DarkGrey",
        driver:{name:"Vera", age:60, sex:"woman", expirience:12}},
];

let newDrivers = [];
console.log(carDrivers);    // каждый элемент выводится в виде строки СИНЕГО цвета
                            //! Он не пишет, что они объекты! 

for (let i=0; i<carDrivers.length; i++){  //А если вывод поэлементно - пишет объекты.
    console.log(carDrivers[i]);
}
for (let i=0; i<carDrivers.length; i++){
    carDrivers[i]=JSON.stringify(carDrivers[i]); // сделали строку JSON
    newDrivers.push(carDrivers[i]);              // добавляем элемент формата Json в новый массив
}
console.log('Old Array ',carDrivers);
console.log('New Array ',   newDrivers);  // Выводит элементы строками. Цвет синий!

for (let i=0; i<newDrivers.length; i++){  //А поэлементно - пишет строку как положено черного цвета
    console.log(newDrivers[i]);
}






