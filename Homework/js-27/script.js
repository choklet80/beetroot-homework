let list = [
    {
        product_name: 'potato',
        quantity: 1,
        isBought: 0
    },
    {
        product_name: 'apple',
        quantity: 1,
        isBought: 1
    },
    {
        product_name: 'tomato',
        quantity: 2,
        isBought: 0
    },
]
function show_list(){
    let result = 'Ваш список покупок:\n'
    list.sort((a,b) => b.isBought - a.isBought)
    for(let i = 0; i < list.length; ++i){
        if(list[i].isBought){
            result += list[i].product_name + " куплен\n"
        }
        else{
            result += list[i].product_name + " не куплен\n"

        }

    }
    alert(result);
    return result;
}

function add_product(){
    list.sort((a,b) => b.isBought - a.isBought)
    let a = {
        product_name: prompt("Введите название пpодукта: "),
        quantity: prompt("Введите количество пpодукта: "),
        isBought: 0
    }
    let index = list.findIndex(item => item.product_name.toUpperCase() === a.product_name.toUpperCase())
    if(index != -1){
        list[index].quantity += a.quantity
    }
    else{
        list.push(a)
    }
}

function buy_product(){
    let info = show_list()
    let product = prompt(info + "\nВведите продукт который купили: ")
    let index = list.findIndex(item => item.product_name.toUpperCase() === product.toUpperCase())
    if(index == -1){
        alert("Такого продукта нет!")
    }
    else{
        list[index].isBought = 1
    }
}

let bill = [
    {
        product_name: "Сок",
        quantity: 1,
        cost: 23
    },
    {
        product_name: "Мясо",
        quantity: 1,
        cost: 120
    },
    {
        product_name: "Соус",
        quantity: 1,
        cost: 10
    }
]

function show_bill(){
    let result = 'Ваш счёт:\n'
    let total = Number(0);
    for(let i = 0; i < bill.length; ++i){
        total += bill[i].cost
        result += bill[i].product_name + "  кл-во:" + bill[i].quantity + 
        "  цена: " + bill[i].cost + "\n"

    }
    result += "К оплате: " + total;
    alert(result);
    return result;
}

function richer(){
    let max_cost = Number(0)
    let index = Number(0)
    for(let i = 0; i < bill.length; ++i){
        if(max_cost < bill[i].cost){
            max_cost = bill[i].cost
            index = i
        }

    }
    alert("Самая дорогая позиция: \n" + bill[index].product_name + 
    "  кл-во:" + bill[index].quantity + 
    "  цена: " + bill[index].cost + "\n" 
    )
}

function middle_cost(){
    let m_cost = Number(0)
    for(let i = 0; i < bill.length; ++i){
       m_cost += bill[i].cost
    }
    alert("Средняя цена позиций: \n" +
        (m_cost/bill.length) + "\n" 
    )
    return m_cost/bill.length
}

let style = [
    {
        s_name: "font-size:",
        value: "25px"   
    },
    {
        s_name: "color:",
        value: "blue"   
    },
    {
        s_name: "text-align:",
        value: "center"   
    },
    {
        s_name: "text-decoration:",
        value: "underline"   
    },
]   

function creat_text(style,text = "Hello, World!!!"){
    let st =''
    for(let i = 0; i < style.length; ++i){
        st += style[i].s_name + " " + style[i].value + ";" 
    }
    document.write(`<p style = "${st}">${text}</p>`)
}

let uni = [
    {
        audit_name: 'Информатика',
        place_count: 20,
        fac_name: 'ЭИТ'
    },
    {
        audit_name: 'Математика',
        place_count: 30,
        fac_name: 'ЭИТ'
    },
    {
        audit_name: 'Актовый зал',
        place_count: 100,
        fac_name: 'ЭИТ'
    },
    {
        audit_name: 'История',
        place_count: 23,
        fac_name: 'СИР'
    },
    {
        audit_name: 'Философия',
        place_count: 28,
        fac_name: 'СИР'
    },
]

function show_all(){
    let result = "Черниговский технологический университет: \n\n"

    for(let i = 0; i < uni.length; i++){
        result += `Название аудитории: ${uni[i].audit_name}\nКоличество посадочных мест: ${uni[i].place_count}\nФакультет: ${uni[i].fac_name}\n\n`
    }
    alert(result)
}

function show_by_fac(aud){
    let result = "Черниговский технологический университет: \n\n"

    for(let i = 0; i < uni.length; i++){
        if(aud.toUpperCase() == uni[i].fac_name.toUpperCase()){
            result += `Название аудитории: ${uni[i].audit_name}\nКоличество посадочных мест: ${uni[i].place_count}\nФакультет: ${uni[i].fac_name}\n\n`
        }
    }
    alert(result)
}

let group_e = {
    group_name: "ПИ-201",
    count_student: 23,
    group_fac: "ЭИТ"
}

let group_i = {
    group_name: "ИС-210",
    count_student: 24,
    group_fac: "СИР"
}

function aud_for_group(group){
    let result = `Аудитории подходящие для группы ${group.group_name}: \n\n`

    for(let i = 0; i < uni.length; i++){
        if(uni[i].fac_name.toUpperCase() ==  group.group_fac.toUpperCase() 
            && group.count_student <= uni[i].place_count)
        {
            result += `Название аудитории: ${uni[i].audit_name}\nКоличество посадочных мест: ${uni[i].place_count}\nФакультет: ${uni[i].fac_name}\n\n`
        }
    }

    alert(result)
}

function sort_by_count(){
    uni.sort((a,b) => b.place_count - a.place_count)
}

function sort_by_name(){
    uni.sort((a,b) => a.audit_name > b.audit_name ? 1 : -1)
}

