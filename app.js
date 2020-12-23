window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sounds');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        'lightcoral',
        'mediumorchid',
        'lightgreen',
        'lightpink',
        'maroon',
        'magenta'
    ];


    //Lets get going with the sounds here
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubble(index);
        });
    });
    //Create a function that make bubbles
    const createBubble = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function(){
            visual.removeChild();
        });
    };
});