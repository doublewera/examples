window.addEventListener(
    'load',
    () => {
        document.body.style.backgroundImage = 'url(img/winter.png)'
    }
);

function set_season(season) {
    var old_pic = document.body.style.backgroundImage;
    console.log(document.body.style.backgroundImage);
    console.log(`url("img/${season}")`);
    var anim = document.body.animate(
        [
          { backgroundImage: `url("img/${season}")` }
        ],
        { duration: 3000, iterations: 1 }
      );
    setTimeout(() => {
        anim.pause();
        console.log('stopped');
        document.body.style.backgroundImage = `url("img/${season}")`;
    }, 2999);
}