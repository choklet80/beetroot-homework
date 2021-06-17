// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 
// 1 – если первое больше, чем второе; и 0 – если числа равны.

function compare(num1, num2){
    if(num1 < num2){
        return -1;
    }
    if(num1 > num2){
        return 1;
    }
    return 0;
}

function set_Comp(){
    let num1 = Number(prompt("Enter first number: ")) 
    let num2 = Number(prompt("Enter second number: "))

    if(isNaN(num1) || isNaN(num2)){
        alert("Error")
    }
    else{
        alert(compare(num1,num2))
    }
}

// Написать функцию, которая вычисляет факториал переданного ей числа.

function factorial(num1){ 
    if(num1 === 0){
        return 0
    }
    if(num1 === 1){
        return 1
    }
    return num1 * factorial(Math.abs(num1) - 1);
}

function set_Fact(){
    let num1 = Number(prompt("Enter number: ")) 

    if(isNaN(num1)){
        alert("Error")
    }
    else{
        alert(factorial(num1))
    }
}

// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. 
// Например: цифры 1, 4, 9 превратятся в число 49.

function transform(num1, num2, num3){
    return Math.abs(num1) * 100 + Math.abs(num2) * 10 + Math.abs(num3);
}

function set_Trans(){
    let num1 = Number(prompt("Enter first number: ")) 
    let num2 = Number(prompt("Enter second number: ")) 
    let num3 = Number(prompt("Enter third number: ")) 

    if(isNaN(num1) || isNaN(num2) || isNaN(num3) || num1 >= 10 || num2 >= 10 || num3 >= 10){
        alert("Error")
    }
    else{
        alert(transform(num1,num2,num3))
    }
}

// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. 
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

function area(num1, num2){
    if(num2 === undefined){
        num2 = num1;
    }
    return num1 * num2
}

function set_area(){
    let num1 = prompt("Enter first number:")
    let num2 = prompt("Enter first number:")

    if((num1 === "" || num1 === null || isNaN(num1)) && (num2 === "" || num2 === null || isNaN(num2))){
        alert("Error")
    }
    else if(num2 === "" || num2 === null || isNaN(num2)){
        result = area(num1)
    }
    else if(num1 === "" || num1 === null || isNaN(num1)){
        result = area(num2)
    }
    else{
        result = area(num1,num2)
    }

    alert(result)
}

// Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
// Совершенное число – это число, равное сумме всех своих собственных делителей.

function isPerfect(num){

    let sum = Number(0)
    
    for(let i = 1; i < num; i ++){
        if(num % i == 0)
        {
            sum += i; 
        }
    }
    if(sum == num){
        return 1
    }
    else
        return 0   
}

function set_Perf(){
    let num = prompt("Enter first number:")

    if(num === "" || num === null || isNaN(num)){
        return alert("Error")
    }
    if(isPerfect(num)){
        return alert("Number " + num + " is perfect")
    }

    return alert("Number " + num + " isn`t perfect")
    
}

// Написать функцию, которая принимает минимальное и максимальное значения для диапазона,
// и выводит только те числа из диапазона, которые являются совершенными. 
// Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

function Perf_range(begin, end){
    
    let result = '';
    let is = Boolean(false)

    if(begin > end)
    {
        let temp = begin;
        begin = end;
        end = temp;
    }

    for(let i = begin; i < end; ++i){
        
        if(isPerfect(i)){
            result += i + " "
            is = true
        }        
    }

    if(is){
       return "Perfect number/s in this range: " + result;
    }
    else{
        return "No perfect number"
    }
}

function set_Perf_range(){

    let begin = Number(prompt("Enter begin of range: ")) 
    let end = Number(prompt("Enter end of range: "))

    if(isNaN(begin) || isNaN(end)){
        alert("Error")
    }
    else{
        alert(Perf_range(begin,end))
    }
}

// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

function time(hour = '00', min = '00', sec = '00'){

    // if(hour > 24){
    //     hour %= 24
    // }
    // if(min > 60){
    //     min %= 60
    // }
    // if(sec > 60){
    //     sec %= 60
    // }

    
        hour = hour.padStart(2,"0")
    
   
        min = min.padStart(2,"0")
     
   
        sec = sec.padStart(2,"0")
    

    return hour + ":" + min + ":" + sec
}

function set_time(){

    let hour = prompt("Enter hour:")
    let min = prompt("Enter minutes:")
    let sec = prompt("Enter seconds:")

    

    if((hour === "" || hour === null || isNaN(hour))){
        hour = 0
    }
    if((min === "" || min === null || isNaN(min))){
        min = 0
    }
    if((sec === "" || sec === null || isNaN(sec))){
        sec = 0
    }
    return alert(time(hour,min,sec))
}

// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

function to_seconds(hour = 0, min = 0, sec = 0){
    return Number(hour * 3600) + Number(min * 60) + Number(sec)
}

function set_to_Seconds(){
    let hour = prompt("Enter hour:")
    let min = prompt("Enter minutes:")
    let sec = prompt("Enter seconds:")

    

    if((hour === "" || hour === null || isNaN(hour))){
        hour = 0
    }
    if((min === "" || min === null || isNaN(min))){
        min = 0
    }
    if((sec === "" || sec === null || isNaN(sec))){
        sec = 0
    }
        return alert(to_seconds(hour,min,sec))
}

// Написать функцию, которая принимает количество секунд, 
// переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

function to_Time(sec = '00'){
    let hour = Math.floor(sec / 3600)
    let min = Math.floor((sec - (hour * 3600)) /  60)
    sec = (sec - (hour * 3600)) - min * 60
    // sec = sec % 60;
    // 
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

function set_to_Time(){
    let sec = prompt("Enter seconds:")

    if((sec === "" || sec === null || isNaN(sec))){
        return alert("Error")
    }
    else if(sec == 0){
        return alert('00:00:00')
    }
    else{
        return alert(to_Time(sec))
    }
}

// Написать функцию, которая считает разницу между датами. 
// Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». 
// При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, 
// узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

function time_dif(hour1, min1, sec1, hour2, min2, sec2){
    sec1 = to_seconds(hour1, min1, sec1);
    sec2 = to_seconds(hour2, min2, sec2);

    if(sec1 < sec2)
    {
        let temp = sec1;
        sec1 = sec2;
        sec2 = temp;
    }

    return sec1 - sec2
}

function set_Time_Dif(){
    let hour1 = prompt("Enter hour:")
    let min1 = prompt("Enter minutes:")
    let sec1 = prompt("Enter seconds:")
    let hour2 = prompt("Enter hour:")
    let min2 = prompt("Enter minutes:")
    let sec2 = prompt("Enter seconds:")

    

    if((hour1 === "" || hour1 === null || isNaN(hour1))){
        hour1 = 0
    }
    if((min1 === "" || min1 === null || isNaN(min1))){
        min1 = 0
    }
    if((sec1 === "" || sec1 === null || isNaN(sec1))){
        sec1 = 0
    }
    if((hour2 === "" || hour2 === null || isNaN(hour2))){
        hour2 = 0
    }
    if((min2 === "" || min2 === null || isNaN(min2))){
        min2 = 0
    }
    if((sec2 === "" || sec2 === null || isNaN(sec2))){
        sec2 = 0
    }

    return alert("Time 1: " + time(hour1,min1,sec1) + "   Time 2: " + time(hour2,min2,sec2) + "\nTime 1 in sec: " + to_seconds(hour1, min1, sec1) + "   Time 2 in sec: " + to_seconds(hour2, min2, sec2) + "\nTime 1 - Time 2 in sec: " + time_dif(hour1, min1, sec1, hour2, min2, sec2) + "\nResult Time: " + to_Time(time_dif(hour1, min1, sec1, hour2, min2, sec2)))
}

