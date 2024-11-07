// Getting DOM elements
const audio = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const seekSlider = document.getElementById("seekSlider");
const volumeSlider = document.getElementById("volumeSlider");
const currentTimeDisplay = document.getElementById("currentTime");

// Toggle Play and Pause
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "Pause";
    } else {
        audio.pause();
        playPauseBtn.textContent = "Play";
    }
}

// Update the seek slider and time display
function updateSeekBar() {
    seekSlider.value = (audio.currentTime / audio.duration) * 100;
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
    const totalMinutes = Math.floor(audio.duration / 60);
    const totalSeconds = Math.floor(audio.duration % 60).toString().padStart(2, '0');
    currentTimeDisplay.textContent = `${minutes}:${seconds} / ${totalMinutes}:${totalSeconds}`;
}

// Seek audio position
function seekAudio() {
    const seekTo = (seekSlider.value / 100) * audio.duration;
    audio.currentTime = seekTo;
}

// Set audio volume
function setVolume() {
    audio.volume = volumeSlider.value;
}

// Event Listeners
playPauseBtn.addEventListener("click", togglePlayPause);
audio.addEventListener("timeupdate", updateSeekBar);
seekSlider.addEventListener("input", seekAudio);
volumeSlider.addEventListener("input", setVolume);

// Load audio metadata (for duration display)
audio.addEventListener("loadedmetadata", updateSeekBar);
