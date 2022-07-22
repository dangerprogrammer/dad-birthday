import funcs from './sources/funcs.js';

funcs.loadAll(window);

window.onload = () => {
    if (window.pageYOffset > 0) setTimeout(() => window.scrollTo(0, 0), 1);
};

const body = query('body');
const otherImgs = query('.other-imgs');
const showImgs = query('.other-imgs .show-imgs');
const finishBirthday = query('.finish-birthday');
const showBirthday = query('.finish-birthday .show-birthday');
let sImgs = query('.other-imgs.show');

otherImgs.style.height = `${window.innerHeight - 40}px`;
finishBirthday.style.height = otherImgs.style.height;

showImgs.addEventListener('click', () => {
    toggleClass('show', otherImgs);
    sImgs = query('.other-imgs.show');
    window.scrollTo({
        top: window.innerHeight * (sImgs ? 1 : 0),
        left: 0,
        behavior: 'smooth'
    });
});

showBirthday.addEventListener('click', () => {
    toggleClass('show', finishBirthday);
    const sBirthday = query('.finish-birthday.show');
    window.scrollTo({
        top: window.innerHeight * (sBirthday ? 2 : 1),
        left: 0,
        behavior: 'smooth'
    });
    showFireworks();
});

const txt = query('.bg-img h1');

showCuteText(txt);

const letters = query('.bg-img h1 .word .letter', true);

const animation = anime.timeline({
    targets: letters,
    easing: 'easeInOutExpo'
});

animation
.add({
    scale: 5,
    duration: 0,
    opacity: 0
})
.add({
    scale: 1,
    duration: 1e3,
    delay: anime.stagger(50, {start: 3e3}),
    opacity: 1
});

const confettiSettings = {
    target: 'my-canvas',
    max: 200
};

const confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

const audio = query('audio');

audio.currentTime = 6;

let hasStarted = false;
audio.addEventListener('canplaythrough', () => document.addEventListener('click', () => audio.play(), false));
