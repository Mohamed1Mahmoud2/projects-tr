// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition = new SpeechRecognition();
// recognition.interimResults = true;
// recognition.lang = 'en-US';

// let p = document.createElement('p');
// const words = document.querySelector('.words');
// words.appendChild(p);

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// evry comment by me 

// console.log('foo')
const recognition = new SpeechRecognition(); // creat the new reco 
recognition.interimResults = true; // st = true //and i need some research about it 
recognition.lang = 'en-US'; // this for lang

let p = document.createElement('p'); //create paragraph to add them some words and add them to the div ele parent
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0]) // why we use this =>couse we had the op had the list and key 0 in it words had key transcript
        .map(result => result.transcript)
        .join('');
    const poopScript = transcript.replace(/poop|poo|shit|dump|fuck/gi, '****....****')
    p.textContent = poopScript;

    //if statmen to know end of paragraph
    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }

});

recognition.addEventListener('end', recognition.start);

recognition.start();

console.log('hi we do good staff here')



// or used the event handler like ===>recognition.onresult = (e)=>{}

// recognition.addEventListener('result', e => {
//     const transcript = Array.from(e.results)
//         .map(result => result[0])
//         .map(result => result.transcript)
//         .join('');

//     const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
//     p.textContent = poopScript;

//     if (e.results[0].isFinal) {
//         p = document.createElement('p');
//         words.appendChild(p);
//     }
// });

// recognition.addEventListener('end', recognition.start);

// recognition.start();

// console.log('hi we do good staff here')