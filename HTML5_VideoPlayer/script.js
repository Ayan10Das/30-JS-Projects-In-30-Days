// Select Elements
let player = document.querySelector('.player');
let video = player.querySelector('.viewer')
let progress = player.querySelector('.progress')
let progress_filled = player.querySelector('.progress__filled')
let toggle = player.querySelector('.toggle')
let ranges = player.querySelectorAll('.player__slider')
let skip_buttons = player.querySelectorAll('[data-skip]')

// Toggle player

function togglePlay() {
    if (video.paused) {// Video element has a attribute for checinkg the video is paused or not
        video.play();
        toggle.innerHTML = `⏸`
    } else {
        video.pause();
        toggle.innerHTML = `►`
    }
    // if(video.currentTime==video.duration){
    //     toggle.innerHTML=`►`
    // }
}

function skip() {
    // console.log(this) : prints Skip element
    video.currentTime += parseFloat(this.dataset.skip);
}

function updatePlayer() {
    // console.log(this.value) :prints change value in sound/playBackRate inputs
    video[this.name] = this.value;
}

function updateProgress() {
    const present = (video.currentTime / video.duration) * 100;
    progress_filled.style.flexBasis = `${present}%`;
}

function scrub(e) {
    // console.log(e)
    /*
    offsetWidth built in for DOM elemenets to get the total width of that element.

    e.offsetX: horizontal position of the click relative to the left edge of the element (progress).

    progress.offsetWidth: total width of the progress bar.

    video.duration: total length of the video in seconds.

    The result: calculates the timestamp to jump to based on where you clicked on the progress bar
    */
    let skipTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = skipTime;
}

// HOOK EeventListeners
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('ended', () => {
    toggle.innerHTML = `►`
});

progress.addEventListener('click', scrub);

toggle.addEventListener('click', togglePlay);
skip_buttons.forEach((btn) => {
    btn.addEventListener('click', skip)
})
ranges.forEach((range) => {
    range.addEventListener('input', updatePlayer);
});

window.addEventListener('keydown', function (e) {
    if (e.tagName === "INPUT") return;

    switch (e.key) {
        case 'ArrowRight':
            video.currentTime += 15;
            break;

        case 'ArrowLeft':
            video.currentTime -= 10;
            break;
    }
})
