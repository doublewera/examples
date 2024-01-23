class Kvadrat {
    #div; //    цвет   ширина  высота
    constructor(color, width, height) {  // Аналог document createElement
        this.#div = document.createElement('div');
        this.#div.style.backgroundColor = color;
        this.#div.style.width = width;
        this.#div.style.height = height;
        this.#div.addEventListener(  // приучаем реагировать на клик
            'click', () => {
                this.changeColor('#baf456')
            }  // this - указатель на себя
        );
    }
    changeColor (newColor) {
        this.#div.style.backgroundColor = newColor;
    }
    render (kuda) {
        kuda.appendChild(this.#div);   // Идея плохая! Теперь мы отдаём приватное поле на растерзание!
    }
}
window.addEventListener(
    'load',
    () => {
        var k = new Kvadrat('#543dfc', 50, 70);
        k.render(document.body);
        for(var i = 0; i < 10; i++) {
            k = new Kvadrat('#543dfc', 50, 70 * i);
            k.render(document.body);
        }
    }
);