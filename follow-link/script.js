const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

function highlightLinke() {
    console.log(this.getBoundingClientRect());
    const eleRect = this.getBoundingClientRect();
    ///fugerout the link
    highlight.style.height = ` ${eleRect.height}px`;
    highlight.style.width = `${eleRect.width}px`;
    highlight.style.top = `${eleRect.top + window.scrollY}px`;
    highlight.style.left = `${eleRect.left + window.scrollX}px`;






}
/*
 function highlightLinke(link) {
    console.log(link.getBoundingClientRect());
    const eleRect = link.getBoundingClientRect();

} 

*/


/*
function g(){
eleCoords = this.getBoundingRect()
coords={
width:eleCoords.width
height:eleCoords.height
top:eleCoords.top + window.scorllY
left:eleCoords.left + window.scorllX
}

}
 */
triggers.forEach(a => a.addEventListener('mouseenter', highlightLinke))


///if you need to remove the span
// triggers.forEach(a => a.addEventListener('mouseleave', () => {
//     highlight.style.width = `0px`
//     highlight.style.height = `0px`

// }))