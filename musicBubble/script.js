window.addEventListener('load', () => {

    // Selecting The Dom
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');

    // Dom Colors
    const colors = [
        '#2ecc71',
        '#9b59b6',
        '#f1c40f',
        '#3498db',
        '#006266',
        '#ED4C67'
    ]

    // Playing The Sound
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubble(index); // to be able to use (index) in createBubble function

        })
    })

    // Creating The Bubble Animation
    const createBubble = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function() {
            visual.removeChild(bubble);
        })
    }

});