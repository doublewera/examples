/** Валидация форм */
window.addEventListener(
    'load',
    () => {
        console.log(telefon.checkValidity());
        telefon.addEventListener(
            'change',
            () => {
                console.log(telefon.value);
                console.log(telefon.checkValidity());
            }
        );
    }
);

