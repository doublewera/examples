function tree_height(arr) {  // Функция нахождения высоты дерева
    let max_height = 0;      // Высота дерева изначально равна 0
    for (let elem of arr) {  // перебираем все элементы одного яруса
        // Если перед нами лист, высота равна 1, иначе она
        let elem_height = elem == 'leaf' ? 1 : (
            1 + tree_height(elem));  // на 1 больше, чем высота элемента
        // УПРАЖНЕНИЕ! Замените тернарный оператор на обычное ветвление
        if (elem_height > max_height) { 
            // если высота элемента больше высоты дерева,
            max_height = elem_height;
            // значит, дерево выше, чем мы думали до этого
        }
    }
    return max_height;
}

function tree_iter_height(arr) {
    let height = 0;  // Изначально высота равна 0
    let brunches = [];
    while (arr.length > 0) {
        // console.log(arr);  // Можно раскомментировать и посмотреть, что лежит в мешке с ветками
        height += 1;
        for (let b of arr) {  // смотрим на каждую ветку
            if (b != 'leaf') {  // если она не только листик
                brunches.push(...b);  // разрезаем ветку до фрагментов первого уровня, "расселяя" массив по аргументам функции push
                // Упражнение: замените строку выше на любой обычный цикл.
            }
        }
        arr = brunches;
        brunches = [];
    }
    return height;
}

let tree = [
    'leaf', [
        'leaf', [
             'leaf'],
         'leaf'], [
         'leaf', [
              'leaf',
              'leaf']
          ],
     'leaf'];
console.log(tree_iter_height(tree));
console.log(tree_height(tree));