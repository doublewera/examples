/**Создайте класс
Машина
Пусть у неё будет цвет, колёса и скорость.
Запретите редактирование этих свойств.
Напишите функцию покрасить, меняющую цвет машины на выбранный вами.
Напишите функцию "сменить колёса", которые меняют колёса на зимние и обратно.
Сделайте на сайте кнопки "показать машину", "сменить колёса", "покрасить", которая рисует 4 дива.
Нижние два - круглые и чёрные - колёса.
Верхний и средний длинный - тело машины. (кому не лень, сделайте окна).
Бордер точечками - зимние колёса. */
class Car {
    ////    #color; ????
    #wheels;
    #speed;
    #kuzov;
    #roof;
    #car;
    constructor(color, wheels, speed) {
        this.#car = document.createElement('div');  // это будет общий див для всей машины
        ///// this.#color = color;
        this.#wheels = [];
        for(var i = 0; i < wheels; i++) {
            this.#wheels[i] = new Wheel(i);
            // лучше так: wheels.push(new Wheel());
            // push - запихать в массив
        }
        this.#speed = speed;
        this.#roof = new Roof(color);
        this.#kuzov = new Kuzov(color);
        this.#car.addEventListener(
            'click',
            () => {
                this.changeColor('red');
            }
        );
    }
    changeColor(color) {
        this.#roof.changeColor(color);
        //this.#kuzov.changeColor();
    }
    render () {
        // А у второй собачки 2, а у 25-ой 25...
        // Сборка машины
        this.#car.appendChild(this.#roof.render());
        this.#car.appendChild(this.#kuzov.render());
        for (var w of this.#wheels) {
            this.#car.appendChild(w.render());
        }
        // car.appendChild(roof); ещё 4 в цикле
        return this.#car;
    }
};

class Wheel {
    #num = 0;
    constructor(num) {
        this.#num = num;
    }
    render() {
        var wheel = document.createElement('div');  // колёсико
        wheel.setAttribute('class', 'wheel');
        wheel.setAttribute('id', 'w' + this.#num);
        wheel.style.left = (80 * this.#num) + 'px';
        wheel.style.zIndex = (-1) ** this.#num;
        return wheel;
    }
};

class Roof {
    #div;
    constructor (color) {
        this.#div = document.createElement('div');
        this.#div.style.backgroundColor = color;
    }
    changeColor(color) {
        this.#div.style.backgroundColor = color;
    }
    render() {
        this.#div.setAttribute('class', 'car');
        this.#div.setAttribute('id', 'roof');
        return this.#div;
    }
};

class Kuzov {
    #div;
    constructor (color) {
        this.#div = document.createElement('div');
        this.#div.style.backgroundColor = color;
    }
    render() {
        this.#div.setAttribute('class', 'car');
        this.#div.setAttribute('id', 'bc');
        return this.#div;
    }
}

window.addEventListener(
    'load',
    () => {
        var c = new Car("#80ffb9", 5, 90);
        // прицепить на страничку
        //c.changeColor('red');
        document.body.appendChild(c.render());
    }
);