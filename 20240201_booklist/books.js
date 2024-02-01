window.addEventListener(
    'load',
    () => {
        // Что делаем по загрузке страницы:
        // Создаем список книг с галочками
        addBooks();
    }
);

 function addBooks() {
    var books = [
        'Гарри Поттер',  // 0
        'Таня Гроттер'   // 1
    ];
    var i = 0;
    while(i < books.length) {
//    for (var i in books) {
        var inp = document.createElement('input');
        inp.setAttribute('type', 'checkbox');
        inp.setAttribute('id', 'b' + i);      // b0, b1......
        inp.setAttribute('value', books[i]);
        // Каждой галочке привязываем change
        inp.addEventListener(
            'change',
            (evn) => {
                console.log(evn.target.checked);
                if (evn.target.checked) {
                    var li = document.createElement('li');
                    console.log(evn.target.id);
                    li.setAttribute('id', 'q' + evn.target.id);
                    var txt = document.createTextNode(evn.target.value);
                    li.appendChild(txt);
                    booklist.appendChild(li);
                } else {
                    var elm = document.getElementById('q' + evn.target.id);
                    booklist.removeChild(elm);
                }
            }
        );
        var lbl = document.createElement('label');
        lbl.setAttribute('for', 'b' + i);
        var txt = document.createTextNode(books[i]);
        lbl.appendChild(txt); // Засунули текст в лейбл (ярлык)
        allbooks.appendChild(inp);
        allbooks.appendChild(lbl);
        i ++;
    }
 }