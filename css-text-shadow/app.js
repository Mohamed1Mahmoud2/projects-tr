const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; ///500

function shadow(e) {
    // console.log(e.offsetX);
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    const { offsetWidth: width, offsetHeight: height } = hero;
    // console.log(width, height);
    /// e.offsetY and X to  add them to the width and heigt
    // console.log(e.offsetX, e.offsetY);
    let { offsetX: x, offsetY: y } = e;
    // console.log(x, y);

    // console.log(this, e.target);
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    // console.log(x, y);
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    // console.log(xWalk, yWalk);/// num x , y is always between 50,-50
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgb(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `
}

hero.addEventListener('mousemove', shadow);