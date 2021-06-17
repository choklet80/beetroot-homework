function calcsSum(){
    let num1 = Number(prompt("Set begin: ")) 
    let num2 = Number(prompt("Set end: "))
    let sum = 0;
    let temp = 0;
    
    if(num1 > num2)
    {
        temp = num2;
        num2 = num1;
        num1 = temp;
        alert("Numbers swap")
    }   

    for(let i = num1; i <= num2; ++i){
        sum += i;
    }
    alert("Sum = " + sum);
}

function NOD(){
    let num1 = Number(prompt("Enter first number: "))
    let num2 = Number(prompt("Enter second number: "))
    let nod = 0;
    
    for(let i = num1; i > 0; ++i){
        if(num1 % i == 0 && num2 % i == 0){
            alert("NOD(" + num1 + "," + num2 + ") = " + i)
            return
        }
    }

    alert("NOD(" + num1 + "," + num2 + ")  not found")

}

function delimiter(){
    let num1 = Number(prompt("Enter number: "))
    let result =  "Delimiters of number " + num1 + " :";
    for(let i = 1; i <= num1; i ++){
        if(num1 % i == 0)
        {
            result += " " + i; 
        }
    }
    alert(result);
}

function howMuchN(){
    let count = Number(0);

    let num = Number(prompt("Enter number: "))
    
    if(num == 0){
        alert("Count digits = " + (++count));
        return
    }

    while(num){
        num /= 10;
        num = Math.round(num);
        ++count;
    }
    alert("Count digits = " + count);
}

function isPerfect(){

    let num = Number(prompt("Enter number: "))
    let sum = Number(0);
    for(let i = 1; i < num; i ++){
        if(num % i == 0)
        {
            sum += i; 
        }
    }
    if(sum == num){
        alert("Number " + num + " is Perfect, because sum of delimiters = " + sum);
    }
    else
        alert("Number " + num + " isn`t Perfect, because sum of delimiters = " + sum);
    
}

function DelisPerfect(){
    let num1 = Number(prompt("Set begin: ")) 
    let num2 = Number(prompt("Set end: "))
    let temp = 0
    let sum = Number(0);
    let is = Boolean(false);
    let result = '';
    if(num1 > num2)
    {
        temp = num2;
        num2 = num1;
        num1 = temp;
        alert("Numbers swap")
    }   
    for(let i = num1; i <= num2; ++i){
        sum = 0;
        for(let j = 1; j < i; j++){
            if(i % j == 0)
            {
                sum += j; 
            }
        }
        if(sum == i){
            result += "Number " + i + " is Perfect, because sum of delimiters = " + sum + "\n";
            is = true;
        }

    }
    if(is){
        alert(result);
    }
    else{
        result = "No perfect number"
    }
}

function ZeroOrMinOrPlus(){
    let num = Number(0)
    let count = Number(1);
    let plus = 0;
    let zero = 0;
    let minus = 0;
    let even = 0;
    let odd = 0;
    let i = 10;
    while(i != 0){
        num = Number(prompt("Enter " + (count++) + " number: ")); 
        if(Math.sign(num) == 1){
            plus++;
        }
        else if(Math.sign(num) == -1){
            minus++;
        }
        else{
            zero++;
        }
        if(num % 2 == 0){
            even++;
        }
        else{
            odd++;
        }
        --i;
    }
    alert("Statistic \nodd " + odd + "\neven " + even + "\nplus " + plus + "\nminus " + minus + "\nzero " + zero);

}

function calculator(){
    let num1 = Number(0)
    let num2 = Number(0)
    let is = 1;
    let char = '';
    while(is){
        num1 = Number(prompt("Enter first number: ")); 
        num2 = Number(prompt("Enter second number: ")); 
        char = (prompt("Enter digit (+ - * /): "));

        switch(char){
            case '+':{
                alert(num1 + " + " + num2 + " = " + (num1 + num2))
                break
            }
            case '-':{
                alert(num1 + " - " + num2 + " = " + (num1 - num2))
                break
            }
            case '/':{
                alert(num1 + " / " + num2 + " = " + (num1 / num2))
                break
            }
            case '*':{
                alert(num1 + " * " + num2 + " = " + (num1 * num2))
                break
            }
        }
        is = Number(prompt("Calculate again ? \n 1.Yes 0.No")); 
    }
}

function move(){
    let num = Number(0)
    let size = Number(0)
    num = Number(prompt("Enter number: ")); 
    let temp = num;
    let result = ''
    while(num){
        num /= 10;
        num = Math.floor(num);
        ++size;
    }
    let arr = new Array(size);
    for(let i = 0; i < size; ++i){
        
        arr[i] = temp % 10;
        temp /= 10;
        temp = Math.floor(temp);
    }
    
    let step = 3;
    
    for(i=0;i<step;i++)
    {
        arr.unshift(arr.pop());
    } 
    arr.reverse();
    for(let i = 0; i < size; ++i){
        result += arr[i];
    }
    result = "Your number whit step (2) = " + result;
    alert(result);
}

function week(){
    let arr = ['Mon', 'Tue', 'Wed', 'Whu', 'Fri', 'Sat', 'Sun'];
    let i = 0;
    let j = 0;
    while(!i){
        i = prompt("Show next Day ? Press OK");
        if(i)
        return
        if(j > 6)
        j = 0;
        alert(arr[j])
        ++j;
    }

}

//Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

function multiplyTable(){
    let num = Number(2);
    let result = '';

    for(let i = num; i < 10; ++i){
        result += i;
        for(let j = 2; j < 11; ++j){
            result += " " + (i * j);
        }
        result += "\n";
    }
    alert(result);
}

// Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом:
// каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя
// «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон.
// Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, 
// то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N

function game(){
    let begin = Number(0);
    let end = Number(100);
    let win = Boolean(false);
    let answer = 0;

    alert("I want to play with you !!!")
    alert("Guess a number from 0 to 100")
    alert("Ok Let`s START")

    while(!win){

        win = Boolean(Number(prompt("Your Number = " + Math.floor(((begin + end)/2)) + " ?\n 1.Yes 0.No")))
        if(win){
            alert("Ez win your number is " + Math.floor(((begin + end)/2)))
        }
        else{
            answer = prompt("Enter:\n1.Your number < " + Math.floor(((begin + end)/2)) +"\n2.Your number > " + Math.floor(((begin + end)/2)))
        }
        switch(answer){
            case '1':{
                end = Math.floor(((begin + end)/2)) - 1;
                break
            }
            case '2':{
                begin = Math.floor(((begin + end)/2)) + 1;
                break
            }
        }
    }
}