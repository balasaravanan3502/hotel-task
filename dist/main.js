"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var toogleButton = document.getElementById("toogleButton");
var isLightOn = false;
const buttonToggler = () => __awaiter(void 0, void 0, void 0, function* () {
    var roomName = document.getElementById("room-name");
    var video = document.getElementById("video");
    var text = document.querySelector(".light-text");
    if (!isLightOn) {
        text.style.display = "none";
        for (let i = 0; i < 101; i++) {
            roomName.style.opacity = (1 - i / 100).toString();
            video.style.opacity = (i / 100).toString();
            console.log(roomName.style.opacity);
            yield new Promise((resolve) => setTimeout(resolve, 50));
            i += 2;
        }
        var videoPlayer = document.getElementById("video-player");
        videoPlayer.defaultPlaybackRate = 0.01;
        videoPlayer.play();
        roomName.style.opacity = "0";
    }
    else {
        roomName.style.opacity = "1";
        video.style.opacity = "0";
        text.style.display = "block";
    }
    isLightOn = !isLightOn;
});
toogleButton.addEventListener("click", buttonToggler);
var videoSection = document.querySelector("video");
videoSection.addEventListener("scroll", function () {
    console.log("asd");
});
window.onscroll = function () {
    var sd = document.documentElement.scrollTop || document.body.scrollTop;
    console.log("ASd");
};
document.body.addEventListener("scroll", () => {
    console.log(document.documentElement.scrollTop || document.body.scrollTop);
});
//# sourceMappingURL=main.js.map