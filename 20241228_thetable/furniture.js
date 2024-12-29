class Plank {
    #start_point = {x: 0, y: 0};
    #px = 100;
    #py = 50;
    #length;
    #horizontal;      // Горизонтальная? Да. Нет? Тогда, значит, вертикальная (так проще)
    #color = "#FEC";  // Белый, как новые досочки.

    constructor(length, horizontal) {
        this.#length = length;
        this.#horizontal = horizontal;
    }

    put(new_place) {
        this.#start_point = new_place;  // Поставить доску на место
    }

    paint(new_color) {  // покрасить
        this.#color = new_color;
    }

    #from_me = (sp) => ({  // Заметьте! пришлось взять в круглые скобки
        x: sp.x + this.#px,
        y: sp.y - this.#py
    })
    #to_me = (sp) => ({  
        x: sp.x - this.#px,
        y: sp.y + this.#py
    })
    #right = (sp) => ({
        x: sp.x + this.#length,
        y: sp.y  // не меняется. По горизонтали же двигаемся
    })
    #left = (sp) => ({
        x: sp.x - this.#length,
        y: sp.y
    })
    #down = (sp) => ({
        x: sp.x,
        y: sp.y + this.#length
    })
    #up = (sp) => ({
        x: sp.x,
        y: sp.y - this.#length
    })

    show(ctx) {
        ctx.fillStyle = this.#color;  // доска перед демонстрацией - уже "покрашена", т.е. мы знаем её цвет
        ctx.moveTo(  // логично переместить перо в стартовую точку
            this.#start_point.x,
            this.#start_point.y);
        ctx.beginPath();
        // Линия "от себя"
        let next_point = this.#from_me(this.#start_point);
        ctx.lineTo(next_point.x, next_point.y);

        // Вправо или вниз, в зависимости от направления досочки
        if(this.#horizontal) {
            next_point = this.#right(next_point);
        } else {
            next_point = this.#down(next_point);
        }
        ctx.lineTo(next_point.x, next_point.y);

        // Линия "к себе"
        next_point = this.#to_me(next_point);
        ctx.lineTo(next_point.x, next_point.y);

        // Влево или вверх, в зависимости от направления досочки
        if(this.#horizontal) {
            next_point = this.#left(next_point);
        } else {
            next_point = this.#up(next_point);
        }
        ctx.lineTo(next_point.x, next_point.y);
        ctx.stroke();
        ctx.fill();
    }
}

class Skameika {
    #start_point = {x: 0, y: 0};
    #width;
    #height;
    #length;
    #color = "#FBB";  // Белый, как новые досочки. О кодировании цветов мы рассказываем на курсе CSS
    #planks = [];

    constructor() {
        this.#width = 300;
        this.#height = 200;
        this.#length = 400;

        this.#planks.push(new Plank(this.#height, false));
        this.#planks.push(new Plank(this.#length, true));
        this.#planks.push(new Plank(this.#height, false));
    }

    build(new_place) {
        this.#start_point = new_place;  // Собирать табуретку в указанном месте
        this.#planks[0].put(this.#start_point);
        this.#planks[1].put({
            x: this.#start_point.x,
            y: this.#start_point.y
        });
        this.#planks[2].put({
            x: this.#start_point.x + this.#length,
            y: this.#start_point.y
        });
    }

    paint(new_color) {  // покрасить
        this.#color = new_color;
        // Покрасить все доски скамейки. Я, например, люблю сначала покрасить доски, а потом собирать из них вещь
        for (let p of this.#planks) {
            p.paint(this.#color);
        }
    }

    show(ctx) {
        // Отобразить все доски скамейки
        for (let p of this.#planks) {
            p.show(ctx);
        }
    }
}

function draw() {
    const ctx = risovalka.getContext("2d");

    // Создадим скамейку - заметьте, скамейка сама создаст свои внутрение доски. У нас так можно!
    let skameika = new Skameika();
    // Важен ли порядок вызова build и paint?
    skameika.build({x: 200, y: 100});
    // skameika.paint("#8C8");  // раскомментируйте строку, чтобы "покрасить" скамейку
    // Почему нельзя "показать" непоставленную или непокрашенную скамейку? Что с ней будет потом? Можно ли её "переставить"?
    skameika.show(ctx);
    
    skameika.build({x: 100, y: 400});
    skameika.paint("#8C8");
    skameika.show(ctx);

}

window.addEventListener(
    'load',
    draw
);