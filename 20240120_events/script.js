window.addEventListener(  // добавляем реакцию на событие
    'load',               // "загрузка окна страницы"
    start                 //  функция, которая должна сработать
);

function najal_na_div(event_click) {
    //  event_click - просто название параметра.
    //  если эту функцию привязать к событию, сюда будет передан объект события 
    console.log(event_click.clientX);  // Координата Х мыши
    console.log(event_click.clientY);  // Координата У мыши
    var Y = event_click.clientY;  // положение мыши
    var X = event_click.clientX;  // положение мыши
    // currentTarget - то, на что мы нажали
    var H = event_click.currentTarget.offsetHeight;  // height не работает
    console.log(H);  // Записали в переменную Н - высоту двора, чтоб длинную строку не таскать
    var colorRed = Math.abs(H / 2 - Y) * 15 / (H / 2);
    console.log(colorRed);
    var colorGreen = Math.abs((H / 2 - Math.abs(Y + H / 2)) * 15 / (H / 2));
    console.log(colorGreen);
    var colorBlue = Math.abs((H / 2) - Y) * 15 / (H / 2);
    console.log(colorBlue);
    var clr = "#" + Math.round(colorRed).toString(16) + Math.round(colorGreen).toString(16) + Math.round(colorBlue).toString(16);
    console.log(clr);
    event_click.currentTarget.style.backgroundColor = clr;
    // фоновый цвет стиля того, на кого нажали в этом событии
}

function start(event_start) {
    yard.addEventListener(
        'click',
        najal_na_div
    );
    yard.addEventListener(
        'click',
        prosto_tyk
    );
    dvor.addEventListener(
        'click',
        prosto_tyk
    );
}

function prosto_tyk(тык) { // игнорируем событие
     console.log('Тык был');
     var chkb = document.createElement('input');  // <input>
     chkb.setAttribute('type', 'checkbox');       // <input type='checkbox'>
     //chkb.style.position = 'absolute';
     chkb.style.left = тык.clientX + "px";
     chkb.style.top = тык.clientY + "px";
     тык.currentTarget.appendChild(                            // <div><input type='checkbox'></div>
        chkb
     );
}
