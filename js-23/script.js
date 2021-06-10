function first(){
    let age = prompt("How old are you ?");
    
    if( age < 0){
        console.log("Wrong age")
        alert("Wrong age")
    }
    else if(age >= 0 && age <=11)
    {
        console.log("you are child")
        alert("you are child")
    }
    else if(age >= 12 && age < 18){
        console.log("you are teenager")
        alert("you are teenager")
    }
    else if(age >= 18 && age < 60){
        console.log("you are adult")
        alert("you are adult")
    }
    else{
        console.log("you are pensioner")
        alert("you are pensioner")
    }
}

function second(){
    let sw = prompt("Enter number 0-9")
    
    switch(Number(sw)){
        case 0:
            alert(")")
            break
        case 1:
            alert("!")
            break
        case 2:
            alert("@")
            break
        case 3:
            alert("#")
            break
        case 4:
            alert("$")
            break
        case 5:
            alert("%")
            break
        case 6:
            alert("^")
            break
        case 7:
            alert("&")
            break
        case 8:
            alert("*")
            break
        case 9:
            alert("(")  
            break  
    }
}

function third(){
    let number = prompt("Enter three-digit number")
    
    if(number > 999 || number < 100){
        alert("It`s not three-digit number")
    }
    else{
        let n1, n2, n3, s_number = number;
        n1 = s_number % 10;
        s_number /= 10;
        s_number =  Math.floor(s_number);
        n2 = s_number % 10;
        s_number /= 10;
        s_number = Math.trunc(s_number);
        n3 = s_number % 10;
        if(n1 == n2 || n2 == n3 || n1 == n3)
        {
            alert("Similar numbers found")
        }
        else{
            alert("No similar numbers found")
        }
    }

}

function fourth(){
    let yearr = prompt("Enter year")
    
    if(yearr % 4 == 0 || yearr % 100 != 0 && yearr % 400 == 0){
        alert(yearr + " is leap")
    }
    else{
        alert(yearr + " isn`t leap")
    }
}

function fifth(){
    let palindrome = prompt("Enter number"), s_palindrome = palindrome;
    let r_palindrome = 0
    for(; palindrome; palindrome = Math.floor(palindrome / 10)) {
        r_palindrome *= 10;
        r_palindrome += palindrome % 10;
    }
    
    if(r_palindrome == s_palindrome){
        alert("It`s palindrome")
    } 
    else{
        alert("It`s not palindrome")
    }
}

function sixth(){
    let usd = prompt("Enter USD")
    
    let currency = prompt("Enter EUR or UAN or AZN")
    
    switch(currency){
        case "EUR":
        {
            alert(usd * 0.82 + " EUR")
            break
        }
        case "UAN":
        {
            alert(usd * 27 + " UAN")
            break
        }
        case "AZN":{
            alert(usd * 0.59 + " AZN")
            break
        }
        default:
        {
            alert("We do not exchange for this currency")
        }
    }
}

function seventh(){
    let purchaseAmount = prompt("Enter purchase amount")
    let sale;
    if(purchaseAmount < 200){
        alert("Amount without purchase")
    }
    else if(purchaseAmount >= 200 && purchaseAmount < 300){
        sale = purchaseAmount - purchaseAmount * 0.03
        alert("Your price with sale = " + sale)
    }
    else if(purchaseAmount >= 300 && purchaseAmount < 500){
        sale = purchaseAmount - purchaseAmount * 0.05
        alert("Your price with sale = " + sale)
    }
    else if(purchaseAmount >= 500){
        sale = purchaseAmount - purchaseAmount * 0.07
        alert("Your price with sale = " + sale)
    }
}

function eighth(){
    let l = prompt("Enter the length of the circle")
    
    let p = prompt("Enter perimeter of the square")
    
    let l_d = l/3.14;
    
    let p_d = p / 4;
    
    if(l_d > p_d){
        alert("The circle does not fit in a square")
    }
    else{
        alert("The circle will fit in a square")
    }
}

function ninth(){
    let answer = prompt("Is 5 < 4 ?\n1.Yes  0.No")
    let counter = 0;
    
    if(answer == 0){
        counter += 2;
    }
    
    answer = prompt("Is 5 > 4 ?\n1.Yes  0.No")
    
    if(answer == 1){
        counter += 2;
    }
    
    answer = prompt("Is 5 = 4 ?\n1.Yes  0.No")
    
    if(answer == 0){
        counter += 2;
    }
    
    alert("Your ball = " + counter)
}

function tenth(){
    
    let day = prompt("Enter day:")
    
    let month = prompt("Enter month:")
    
    let year = prompt("Enter year:")
    
        switch(Number(month)){
            case 1:{
                if(day == 31){
                    month++;
                    day = 1;
                }
                else
                day++;
                break
            }
            case 2:{
                
                if(year % 4 == 0 || year % 100 != 0 && year % 400 == 0){
                    if(day == 29){
                        month++;
                        day = 1;
                    }
                    else
                    day++;
                }
                else{
                    if(day == 28){
                        month++;
                        day = 1;
                    }
                    else
                    day++;
                }
                break
    
            }
            case 3:{
                if(day == 31){
                    month++;
                    day = 1;
                }
                else
                day++;
                break
            }
            case 4:{
                if(day == 30){
                    month++;
                    day = 1;
                }
                else
                day++;
                break
            }
            case 5:{
                if(day == 31){
                    month++;
                    day = 1;
                }
                else
                day++;
                break
            }
            case 6:{
                if(day == 30){
                    month++;
                    day = 1;
                }
                else
                day++;
                break
            }
            case 7:{
                if(day == 31){
                    month++;
                    day = 1;
                }
                else
                day++;
                break
            }
            case 8:{
                if(day == 31){
                    month++;
                    day = 1;
                }
                else
                day++;
                break
            }
            case 9:{
                if(day == 30){
                    month++;
                    day = 1;
                }
                else
                day++;
                break
            }
            case 10:{
                if(day == 31){
                    month++;
                    day = 1;
                }
                else
                day++;
                break
            }
            case 11:{
                if(day == 30){
                    month++;
                    day = 1;
                }
                else
                day++;
                break
            }
            case 12:{
                if(day == 31){
                    year++;
                    month = 1;
                    day = 1;
                }
                else
                day++;
                break
            }
            default:{
                alert("Wrong date")
            }
        }
    
    alert(day + "." + month + "." + year);
}