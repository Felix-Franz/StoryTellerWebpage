var oPlayer;
var bDecision = false;
var sCurrent = sStart;

function setVideo(){
    var sVideo = oStory[sCurrent].video;
    oPlayer.src = sVideo;
    oPlayer.play();
    console.log("Playing " + sCurrent + " (" + sVideo + ")!");
}

function init(){
    oPlayer = document.getElementById("player");
    setVideo();
}


function fullscreen() {
    if (oPlayer.requestFullscreen) {
      oPlayer.requestFullscreen();
    } else if (oPlayer.mozRequestFullScreen) {
      oPlayer.mozRequestFullScreen();
    } else if (oPlayer.webkitRequestFullscreen) {
      oPlayer.webkitRequestFullscreen();
    }
}

function onEnded(){
    var sAction = oStory[sCurrent].autoaction;
    if (!sAction) console.error("no autoaction defined!")
    else sCurrent = sAction;
    setVideo();
}

function onKeyPress(oEvent) {
    var sKey = oEvent.key;
    var sNewStoryItem = oStory[sCurrent][actions[sKey]];
    if (sNewStoryItem){
        sCurrent = sNewStoryItem;
        setVideo();
    }
}

init();