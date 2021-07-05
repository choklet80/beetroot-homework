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

class data{
  constructor(day,month,year){
    this.day = day, 
    this.month = month,
    this.year = year
  }
}

function sortManager(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0,isNum_x,
  isNum_y, regex_num = /\d+/g, sortNum = false, sortDate = false, 
  regex_date = /^[0-9]{2}[.][0-9]{2}[.][0-9]{4}$/g,
  isDate_x, isDate_y
  
  let data_x = new data
  let data_y = new data 
  table = document.getElementById("myTable");
  switching = true, 
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      isNum_x = x.innerText.match(regex_num)
      isNum_y = y.innerText.match(regex_num)
      sortDate = x.innerText.search(regex_date)
      if(sortDate == 0){
        data_x.day = Number(isNum_x[0])
        data_x.month = Number(isNum_x[1])
        data_x.year = Number(isNum_x[2])
        data_y.day = Number(isNum_y[0])
        data_y.month = Number(isNum_y[1])
        data_y.year = Number(isNum_y[2])
      }
      else if(!isNaN(isNum_x) && isNum_x != null){
        sortNum = true
      }
      if (dir == "asc") {
        if(sortNum){
          if(Number(isNum_x) > Number(isNum_y)){
            shouldSwitch = true
            break
          }
        }
        else if(sortDate == 0){
          if(data_x.year > data_y.year){
            shouldSwitch = true
            break
          }
          else if(data_x.year == data_y.year){
            if(data_x.month > data_y.month){
              shouldSwitch = true
              break
            }
            else if (data_x.month == data_y.month){
              if(data_x.day > data_y.day){
                shouldSwitch = true
                break
              }
            }
          }
        }
        else if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if(sortNum){
          if(Number(isNum_x) < Number(isNum_y)){
            shouldSwitch = true
            break
          }
        }
        else if(sortDate == 0){
          if(data_x.year < data_y.year){
            shouldSwitch = true
            break
          }
          else if(data_x.year == data_y.year){
            if(data_x.month < data_y.month){
              shouldSwitch = true
              break
            }
            else if (data_x.month == data_y.month){
              if(data_x.day < data_y.day){
                shouldSwitch = true
                break
              }
            }
          }
        }
        else if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

var ie = 0;
var op = 0;
var ff = 0;
var block; // Основной блок
var block_r; // Блок для изменения размеров
var delta_w = 0; // Изменение по ширине
var delta_h = 0; // Изменение по высоте
/* После загрузки страницы */
onload = function () {
  /* Определяем браузер */
  var browser = navigator.userAgent;
  if (browser.indexOf("Opera") != -1) op = 1;
  else {
    if (browser.indexOf("MSIE") != -1) ie = 1;
    else {
      if (browser.indexOf("Firefox") != -1) ff = 1;
    }
  }
  block = document.getElementById("block"); // Получаем основной блок
  block_r = document.getElementById("block_resize"); // Получаем блок для изменения размеров
  document.onmouseup = clearXY; // Ставим обработку на отпускание кнопки мыши
  block_r.onmousedown = saveWH; // Ставим обработку на нажатие кнопки мыши
}
/* Функция для получения текущих координат курсора мыши */
function getXY(obj_event) {
  if (obj_event) {
    x = obj_event.pageX;
    y = obj_event.pageY;
  }
  else {
    x = window.event.clientX;
    y = window.event.clientY;
    if (ie) {
      y -= 2;
      x -= 2;
    }
  }
  return new Array(x, y);
}
function saveWH(obj_event) {
  var point = getXY(obj_event);
  w_block = block.clientWidth; // Текущая ширина блока
  h_block = block.clientHeight; // Текущая высота блока
  delta_w = w_block - point[0]; // Измеряем текущую разницу между шириной и x-координатой мыши
  delta_h = h_block - point[1]; // Измеряем текущую разницу между высотой и y-координатой мыши
  /* Ставим обработку движения мыши для разных браузеров */
  document.onmousemove = resizeBlock;
  if (op || ff) document.addEventListener("onmousemove", resizeBlock, false);
  return false; // Отключаем стандартную обработку нажатия мыши
}
/* Функция для измерения ширины окна */
function clientWidth() {
  return document.documentElement.clientWidth == 0 ? document.body.clientWidth : document.documentElement.clientWidth;
}
/* Функция для измерения высоты окна */
function clientHeight() {
  return document.documentElement.clientHeight == 0 ? document.body.clientHeight : document.documentElement.clientHeight;
}
/* При отпускании кнопки мыши отключаем обработку движения курсора мыши */
function clearXY() {
  document.onmousemove = null;
}
function resizeBlock(obj_event) {
  var point = getXY(obj_event);
  new_w = delta_w + point[0]; // Изменяем новое приращение по ширине
  new_h = delta_h + point[1]; // Изменяем новое приращение по высоте
  block.style.width = new_w + "px"; // Устанавливаем новую ширину блока
  block.style.height = new_h + "px"; // Устанавливаем новую высоту блока
  /* Если блок выходит за пределы экрана, то устанавливаем максимальные значения для ширины и высоты */
  if (block.offsetLeft + block.clientWidth > clientWidth()) block.style.width = (clientWidth() - block.offsetLeft)  + "px";
  if (block.offsetTop + block.clientHeight > clientHeight()) block.style.height = (clientHeight() - block.offsetTop) + "px";
}


