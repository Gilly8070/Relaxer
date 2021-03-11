const text = document.getElementById('text');
const container = document.getElementById('container');


const totalTime = 7500;
const breathetime = (totalTime / 5) * 2;
const holdTime = totalTime  / 5;


breatheAnimation();


function breatheAnimation() {
    text.innerText = 'Breathe In!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breathe Out!';
            container.className = ' container shrink';
        }, holdTime);
    }, breathetime);
}


setInterval(breatheAnimation, 7500);
