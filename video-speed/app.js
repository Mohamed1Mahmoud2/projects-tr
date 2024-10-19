console.log('hi')
const speedBar = document.querySelector('.speed');
const speedNum = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

console.log(speedBar)
console.log('###########')
console.log(speedNum)


function handelSpeed(e) {
    ///we need to handell the div height and video speed
    const y = e.pageY - this.offsetTop
    const percent = y / this.offsetHeight
    console.log(e.pageY, e.offsetY, this.offsetTop)
    console.log(((e.pageY - this.offsetTop) / this.offsetHeight) * 100 + "%")
    const min = 0.4;
    const max = 4;
    const playRate = percent * (max - min) + min;
    const height = Math.round(percent * 100) + '%';
    speedNum.style.height = height;
    speedNum.textContent = playRate.toFixed(2) + "×";
    video.playbackRate = playRate;

}

speedBar.addEventListener('mousemove', handelSpeed)
