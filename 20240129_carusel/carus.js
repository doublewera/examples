window.addEventListener(
    'load',
    () => {
        document.body.style.backgroundImage = 'url(img/winter.png)'
    }
);

function set_season(season) {
    var anim = document.body.animate(
        [
          { backgroundImage: `url("img/${season}")` }
        ],
        { duration: 3000, iterations: 1 }
      );
    setTimeout(() => {
        document.body.style.backgroundImage = `url("img/${season}")`;
        anim.pause();
    }, 2999);
}