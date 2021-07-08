class Circle{

    constructor(radius = 1){
        this.radius = radius
    }

    get_radius(){
        alert("Radius = " + this.radius)
        return this.radius
    }

    set_radius(){
        let radius = Number(prompt("Enter new radius: "))
        this.radius = radius
    }

    get_diameter(){
        return this.radius * 2
    }

    square(){
        return this.radius*this.radius*3,14
    }

    length(){
        return 2*this.radius*3,14
    }
}

let circle = new Circle;

class Marker{
    constructor(color = 'black', quantity = 100){
        this.color = color
        this.quantity = quantity
    }

    print(string){
        if(this.quantity <= 0){
            alert("Маркер пустой!")
            return
        }
        if(this.quantity < string.length * 0.5)
        {
            alert("Дозаправте маркер!")
            return
        }
        this.quantity -= string.length * 0.5
        document.write(`<p style="font-size:40px;color:${this.color};">${string}</p>`)   
    }
}

let marker = new Marker

class cool_Marker extends Marker{


    fill_marker(){
        this.quantity = Number(100)
    }
}

let cool_market = new cool_Marker("blue")

class Employee{
    constructor(name,salary){
        this.name = name,
        this.salary = salary
    }
}

let arr_employee = []

arr_employee.push(new Employee("Pasha", 1000))
arr_employee.push(new Employee("Masha", 1340))
arr_employee.push(new Employee("Sasha", 1320))
arr_employee.push(new Employee("Ann", 1040))

class EmpTable{
    constructor(arr_emp){
        this.arr_emp = arr_emp
    }

    getHTML(){
        let show = `<table border = "1" ><caption>Таблица работников банка</caption>
        <tr><th>Имя работника</th><th>Зарплата работника</th></tr>
        `
        for(let i = 0; i < this.arr_emp.length; ++i){
            show += `<tr><th>${this.arr_emp[i].name}</th><th>${this.arr_emp[i].salary}</th></tr>`
        }
        show += `</table>`
        document.write(show)
    }
}

table = new EmpTable(arr_employee)