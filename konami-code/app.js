///me this is arr to push key init
const pressed = [];
///me this is streng we need done
const secretCode = 'mohamed';



window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(
        -secretCode.length - 1, pressed.length - secretCode.length
    );
    if (pressed.join("").includes(secretCode)) {
        console.log("DING DING!");
        cornify_add();
    }
    console.log(pressed);
});

