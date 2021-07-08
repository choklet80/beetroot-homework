// // Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), 
// и следующие функции для работы с этим объектом:

let Car = {
    manufacturer: 'Tesla',
    model: 'Modes-S',
    year_of_issue: '2020',
    average_speed: 120,
}


// // Функция для вывода на экран информации об автомобиле;

function display_car(){
    alert("Manufacturer: " + Car.manufacturer + "\nModel: " + Car.model + "\nYear of issue: " + Car.year_of_issue
        + "\nAverage speed: " + Car.average_speed + " km in h"
    )
}

// // Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

function calc_time_in_road(distance){
    return (distance / Car.average_speed) + Math.floor((distance / Car.average_speed)/4)
}

function set_distance(){
    let distance = Number(prompt("Enter distance: "))

    alert("You spend: " + calc_time_in_road(distance).toFixed(2) + " hour")
}

// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

let fraction_f = {
    numerator: 12,
    denominator: 10
}

let fraction_s = {
    numerator: 3,
    denominator: 5
}

let fraction = {
    numerator: 0,
    denominator: 0 
}

// Функция сложения 2-х объектов-дробей;

function sum(){
    fraction.numerator = fraction_s.numerator * fraction_f.denominator + fraction_f.numerator * fraction_s.denominator
    fraction.denominator = fraction_f.denominator * fraction_s.denominator
    reductions(fraction)

    alert("Дробь один: " + fraction_f.numerator + "/" + fraction_f.denominator + "\n" +
            "Дробь два: " + fraction_s.numerator + "/" + fraction_s.denominator + "\n" +
            "Сумма дробей: " + fraction.numerator + "/" + fraction.denominator
    )
}


// Функция вычитания 2-х объектов-дробей;

function minus(){
    fraction.numerator = (fraction_f.numerator * fraction_s.denominator) - (fraction_s.numerator * fraction_f.denominator)
    fraction.denominator = fraction_f.denominator * fraction_s.denominator
    reductions(fraction)

    alert("Дробь один: " + fraction_f.numerator + "/" + fraction_f.denominator + "\n" +
            "Дробь два: " + fraction_s.numerator + "/" + fraction_s.denominator + "\n" +
            "Вичитание дробей: " + fraction.numerator + "/" + fraction.denominator
    )
}

// Функция умножения 2-х объектов-дробей;

function multi(){
    fraction.numerator = fraction_s.numerator * fraction_f.numerator
    fraction.denominator = fraction_f.denominator * fraction_s.denominator
    reductions(fraction) 

    alert("Дробь один: " + fraction_f.numerator + "/" + fraction_f.denominator + "\n" +
            "Дробь два: " + fraction_s.numerator + "/" + fraction_s.denominator + "\n" +
            "Умножение дробей: " + fraction.numerator + "/" + fraction.denominator
    )
}

// Функция деления 2-х объектов-дробей;

function divi(){
    fraction.numerator = fraction_f.numerator * fraction_s.denominator
    fraction.denominator = fraction_s.numerator * fraction_f.denominator
    reductions(fraction)

    alert("Дробь один: " + fraction_f.numerator + "/" + fraction_f.denominator + "\n" +
            "Дробь два: " + fraction_s.numerator + "/" + fraction_s.denominator + "\n" +
            "Деление дробей: " + fraction.numerator + "/" + fraction.denominator
    )
}

// Функция сокращения объекта-дроби.

function reductions(a){
    let nod = gcd(a.numerator, a.denominator)
    a.numerator /= nod 
    a.denominator /= nod 
}

function gcd(a, b){
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
}
 

// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

let clock = {
    hour: 3,
    min: 12,
    sec: 21
}

// Функция вывода времени на экран;

function show_time(){
    if(clock.hour < 10){
        clock.hour = '0' + clock.hour 
    } 
    if(clock.min < 10){
        clock.min = '0' + clock.min
    } 
    if(clock.sec < 10){
        clock.sec = '0' + clock.sec
    }
    alert(clock.hour + ":" + clock.min + ":" + clock.sec) 
}

// Функция изменения времени на переданное количество секунд;

function add_sec(plus_sec){
    let sec = to_seconds(clock.hour, clock.min, clock.sec)
    sec += Number(plus_sec)
    alert(to_Time(sec))
}

function to_seconds(hour = 0, min = 0, sec = 0){
    return Number(hour * 3600) + Number(min * 60) + Number(sec)
}

function to_Time(sec = '00'){
    let hour = Math.floor(sec / 3600)
    let min = Math.floor((sec - (hour * 3600)) /  60)
    sec = (sec - (hour * 3600)) - min * 60
    if(hour < 10){
        hour = '0' + hour
    } 
    if(min < 10){
        min = '0' + min
    } 
    if(sec < 10){
        sec = '0' + sec
    }
    return hour + ":" + min + ":" + sec
}

function set_sec(){
    let sec = prompt("How much second/s you want to add to this time: " +
    clock.hour + ":" + clock.min + ":" + clock.sec + "\nEnter second/s: ")
    add_sec(sec)
}

// // Функция изменения времени на переданное количество минут;

function add_minute(plus_min){
    let sec = to_seconds(clock.hour, clock.min, clock.sec)
    sec += Number(plus_min * 60)
    alert(to_Time(sec))
}

function set_minute(){
    let sec = prompt("How much minute/s you want to add to this time: " +
    clock.hour + ":" + clock.min + ":" + clock.sec + "\nEnter minute/s: ")
    add_minute(sec)
}

// // Функция изменения времени на переданное количество часов. 

function add_hour(plus_hour){
    let sec = to_seconds(clock.hour, clock.min, clock.sec)
    sec += Number(plus_hour * 3600)
    alert(to_Time(sec))
}

function set_hour(){
    let sec = prompt("How much hour/s you want to add to this time: " +
    clock.hour + ":" + clock.min + ":" + clock.sec + "\nEnter hour/s: ")
    add_hour(sec)
}

// // Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая.
//  Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».