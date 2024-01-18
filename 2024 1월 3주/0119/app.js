// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

document.addEventListener('DOMContentLoaded', function() {

const video = document.querySelector('.video-container');
const playPauseButton = document.querySelector('.switch-btn')

playPauseButton.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        playPauseButton.classList.add('playing');
    } else {
        video.pause();
        playPauseButton.classList.remove('playing')
    }
});

video.addEventListener('play', function(){
    playPauseButton.classList.add('playing');
});

video.addEventListener('pause', function(){
    playPauseButton.classList.remove('playing');
});
});