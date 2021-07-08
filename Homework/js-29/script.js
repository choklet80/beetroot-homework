// Создать страницу, которая выводит нумерованный список песен
var playList = [

    {
    
     author: "LED ZEPPELIN",
    
     song:"STAIRWAY TO HEAVEN"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"BOHEMIAN RHAPSODY"
    
    },
    
    {
    
     author: "LYNYRD SKYNYRD",
    
     song:"FREE BIRD"
    
    },
    
    {
    
     author: "DEEP PURPLE",
    
     song:"SMOKE ON THE WATER"
    
    },
    
    {
    
     author: "JIMI HENDRIX",
    
     song:"ALL ALONG THE WATCHTOWER"
    
    },
    
    {
    
     author: "AC/DC",
    
     song:"BACK IN BLACK"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"WE WILL ROCK YOU"
    
    },
    
    {
    
     author: "METALLICA",
    
     song:"ENTER SANDMAN"
    
    }
    
];

window.onload = function(){
    let list = document.getElementById("list");
    list.style.Maxwidth = "900px"
    list.style.padding = "10px 20px"
    list.style.marginTop = "20px"
    list.style.letterSpacing = "1px"
    list.style.lineHeight = "30px"
    let h2 = document.createElement("h2")
    h2.innerText = `Playlist:`
    list.appendChild(h2)
    for(let i = 0; i < playList.length; ++i){
        let li = document.createElement("li");
        li.innerText = `Author: ${playList[i].author}
         Song: ${playList[i].song}`
        list.appendChild(li)
    }
    
}

let btn = document.getElementById("open-modal")
let modal_w = document.getElementById("modal")

function open_modal(){
    modal_w.style.display = "block"
    btn.style.display = "none"
}

function close_modal(){
    modal_w.style.display = "none"
    btn.style.display = "block"
}


let lights = document.getElementsByClassName("traffic_light")

function resetColor() {
    for (let i = 0; i < lights.length; i++) {
        lights[i].setAttribute("style", "background-color: #969696");
    }
}

let light_counter = Number(0)

let colors = [
    {
        color: "#f73b3b"
    },
    {
        color: "yellow"
    },
    {
        color: "green"
    },
]

function light_switch(){
    resetColor()
    light_counter++
    if(light_counter == 3){
        light_counter = 0
    }
    lights[light_counter].setAttribute("style", `background-color:${colors[light_counter].color}`)

}
