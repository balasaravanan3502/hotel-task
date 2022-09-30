var toogleButton = document.getElementById("toogleButton") as HTMLButtonElement;

var isLightOn = false;
const buttonToggler = async () => {
  var roomName = document.getElementById("room-name") as HTMLElement;
  var video = document.getElementById("video") as HTMLElement;
  var text = document.querySelector(".light-text") as HTMLElement;
  if (!isLightOn) {
    text.style.display = "none";

    for (let i = 0; i < 101; i++) {
      roomName.style.opacity = (1 - i / 100).toString();
      video.style.opacity = (i / 100).toString();
      console.log(roomName.style.opacity);

      await new Promise((resolve) => setTimeout(resolve, 50));
      i += 2;
    }

    var videoPlayer = document.getElementById(
      "video-player"
    ) as HTMLVideoElement;
    videoPlayer.defaultPlaybackRate = 0.01;
    videoPlayer.play();
    roomName.style.opacity = "0";
  } else {
    roomName.style.opacity = "1";
    video.style.opacity = "0";
    text.style.display = "block";
  }
  isLightOn = !isLightOn;
};

toogleButton.addEventListener("click", buttonToggler);

var videoSection = document.querySelector("video") as HTMLVideoElement;

window.onload = () => {
  const loadEffect = document.querySelector("effect");
  const scrollEffect = () => {
    console.log("ASD");
  };
  window.addEventListener("scroll", scrollEffect);
};
