function runOnKeys(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function(event) {
      pressed.add(event.code);

      for (let code of codes) { // все ли клавиши из набора нажаты?
        if (!pressed.has(code)) {
          return;
        }
      }

      // да, все

      // во время показа alert, если посетитель отпустит клавиши - не возникнет keyup
      // при этом JavaScript "пропустит" факт отпускания клавиш, а pressed[keyCode] останется true
      // чтобы избежать "залипания" клавиши -- обнуляем статус всех клавиш, пусть нажимает всё заново
      pressed.clear();

      func();
    });

    document.addEventListener('keyup', function(event) {
      pressed.delete(event.code);
    });

}

let text_div = document.getElementById("text_div")
let edit_area = document.getElementById("edit_area")


function show_text_area(){
    text_div.style.display = "none"
    edit_area.innerText = text_div.innerText
    edit_area.style.display = "block"
}

function show_text_div(){
    text_div.innerText = edit_area.value;
    text_div.style.display = "block"
    edit_area.style.display = "none"
}

runOnKeys(
    () => show_text_area(),
    "ControlLeft",
    "KeyE"
);

runOnKeys(
    () => show_text_div(),
    "ControlLeft",
    "Equal"
);

let sell_caption = document.getElementById("sells")

let costs = document.getElementsByClassName("cost")

function sort_sells(){
    
}


