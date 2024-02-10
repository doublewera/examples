window.addEventListener(
    'load',
    () => {
        var txt, tr, td, table = document.createElement('table');
        for (var i = 0; i < 65536; i++) {
            tr = document.createElement('tr');
             td = document.createElement('td');
              txt = document.createTextNode(i);
             td.appendChild(txt);
            tr.appendChild(td);
             td = document.createElement('td');
              txt = document.createTextNode('\\u' + i.toString(16));
             td.appendChild(txt);
            tr.appendChild(td);
             td = document.createElement('td');
              txt = document.createTextNode(String.fromCharCode(i));
             td.appendChild(txt);
            tr.appendChild(td);
            table.appendChild(tr);
        }
        document.body.appendChild(table);
    }
);
