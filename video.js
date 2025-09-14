const video = document.getElementById("custom-video");
const playPauseBtn = document.getElementById("play-pause");
const muteBtn = document.getElementById("mute");
const seekBar = document.getElementById("seek-bar");
const volumeBar = document.getElementById("volume-bar");

// Play / Pause
playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = "⏸";
  } else {
    video.pause();
    playPauseBtn.textContent = "▶️";
  }
});

// Mute / Unmute
muteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? "🔊" : "🔇";
});

// Seek bar update
video.addEventListener("timeupdate", () => {
  seekBar.value = (video.currentTime / video.duration) * 100;
});

seekBar.addEventListener("input", () => {
  video.currentTime = (seekBar.value / 100) * video.duration;
});

// Volume control
volumeBar.addEventListener("input", () => {
  video.volume = volumeBar.value;
});
