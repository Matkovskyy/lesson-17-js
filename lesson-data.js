// const date = new Date();
// console.log(date.getTime());

const refs = {
    startBtn: document.querySelector('button[data-action-start]'),
    stopBtn: document.querySelector('button[data-action-stop]'),
    clockFace: document.querySelector('.js-clockface'),
};

class Timer {
    constructor() {
        this.intervalId = null;
        this.isActive = false;
    }
    
}

const timer = {
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        const startTime = Date.now();
        this.isActive = true;
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const time = getTimeComponents(deltaTime);
            updateClockFace(time);
            // console.log(timeComponents);
            // console.log(`${hours}:${mins}:${secs}`);
            // console.log('start -> startTime', currentTime);
            // console.log('start -> startTime', startTime);
// console.log('Поїхали');
            // console.log(currentTime - startTime);
        }, 1000);
    },
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
    },
};
timer.start();

refs.startBtn.addEventListener(`click`, () => {
    timer.start();
})

refs.stopBtn.addEventListener(`click`, () => {
    timer.stop();
    // this.isActive = false;
},)


function updateClockFace({ hours, mins, secs }) {
    refs.clockFace.textContent = `${hours}:${mins}:${secs}`;
}

function pad(value) {
    return String(value).padStart(2, '0');
};

function getTimeComponents(time) {
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return { hours, mins, secs };
}
    
