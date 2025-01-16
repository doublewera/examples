class Plank {
    #start_point = {x: 0, y: 0};
    static #px = 100;
    static #py = 50;
    static get shift() {
        return {
            x: Plank.#px,
            y: Plank.#py
        }
    }
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
        x: sp.x + Plank.#px,
        y: sp.y - Plank.#py
    })
    #to_me = (sp) => ({  
        x: sp.x - Plank.#px,
        y: sp.y + Plank.#py
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

class TheTable {
    #start_point = {x: 0, y: 0};
    
    get start_point() {
        return {
            x: this.#start_point.x,
            y: this.#start_point.y
        };
    }

    #width;
    #height;
    get height() {
        return this.#height;
    }
    #length;
    get length() {
        return this.#length;
    }
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



class RollTable extends TheTable {

    constructor() {
        super();
    }

    show(ctx) {
        ctx.beginPath();
        ctx.arc(
            this.start_point.x + Plank.shift.x,
            this.start_point.y + this.height - Plank.shift.y,
            50, 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.start_point.x + this.length + Plank.shift.x,
            this.start_point.y + this.height - Plank.shift.y, 50, 0, Math.PI * 2, true);
        ctx.stroke();
        super.show(ctx);
        ctx.beginPath();
        ctx.arc(this.start_point.x, this.start_point.y + this.height, 50, 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.start_point.x + this.length, this.start_point.y + this.height, 50, 0, Math.PI * 2, true);
        ctx.stroke();
    }
}

function draw() {
    const ctx = risovalka.getContext("2d");

    // Создадим стол
    let tbl = new TheTable();
    // Важен ли порядок вызова build и paint?
    tbl.build({x: 200, y: 100});
    // skameika.paint("#8C8");  // раскомментируйте строку, чтобы "покрасить" стол
    // Почему нельзя "показать" непоставленную или непокрашенную скамейку? Что с ней будет потом? Можно ли её "переставить"?
    tbl.show(ctx);
    
    tbl.build({x: 100, y: 400});
    tbl.paint("#8C8");
    tbl.show(ctx);

    let rt = new RollTable();
    rt.paint("#88C");
    rt.build({x: 300, y: 300});
    rt.show(ctx);

}

window.addEventListener(
    'load',
    draw
);