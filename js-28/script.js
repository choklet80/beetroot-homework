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
        let result = ''
        if(this.quantity <= 0){
            alert("Marker is empty!")
            return
        }
        for(let i = 0; i < string.length; i++){
            result = string.substr(1,1)
            this.quantity -= 0.5
            if(this.quantity <= 0)
            {
                document.write(`<p style="font-size:40px;color:${this.color};">${result}</p>`)   
                alert("Marker is empty!")
                return
            }
        }
        document.write(`<p style="font-size:40px;color:${this.color};">${result}</p>`)
    }
}

let marker = new Marker