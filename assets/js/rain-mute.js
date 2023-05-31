var audio = document.getElementById("myAudio");
var muteButton = document.getElementById("muteButton");

function toggleMute() {
  if (audio.muted) {
    audio.muted = false;
    muteButton.classList.remove("muted");
  } else {
    audio.muted = true;
    muteButton.classList.add("muted");
  }
}