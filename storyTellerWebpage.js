// Settings
var sCurrent = "start";     //Start element name
var actions = {             //action bindings
    "a" : "action1",        //key: action name in story.json
    "b" : "action2"
}
//Settings End

var oPlayer;
var bDecision = false;

function setVideo(){
    var sVideo = oStory[sCurrent].video;
    oPlayer.src = sVideo;
    oPlayer.play();
    bDecision = false;
    console.log("Playing " + sCurrent + " (" + sVideo + ") [video]!");
}

function setDecision(){
    var sDecision = oStory[sCurrent].decision;
    oPlayer.src = sDecision;
    oPlayer.play();
    bDecision = true;
    console.log("Playing " + sCurrent + " (" + sDecision + ") [decision]!");
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

function onKeyPress(oEvent) {
    if (bDecision){
        var sKey = oEvent.key;
        var sNewStoryItem = oStory[sCurrent][actions[sKey]]
        if (!sNewStoryItem){
            console.error("key not defined!");
            return;
        }
        sCurrent = sNewStoryItem;
        setVideo();
    }
}

init();