var oPlayer;
var bDecision = false;
var sCurrent = sStart;

function setVideo(){
    var sVideo = oStory[sCurrent].video;
    oPlayer.src = sVideo;
    oPlayer.play();
    console.log("Playing " + sCurrent + " (" + sVideo + ")!");
}

function getControls(aKeys){
    var sOut = "";
    for (var k in aKeys){
        sOut += k + ", ";
    }
    return sOut.substr(0, sOut.length -2);
}

function insertControls(){
    var sMouseControls = getControls(actions.mouse);
    if (sMouseControls)
        document.getElementById("mouseButtons").innerHTML = "Mouse Buttons: " + sMouseControls;
    var sKeyControls = getControls(actions.key);
    if (sKeyControls)
        document.getElementById("keys").innerHTML = "Keys: " + sKeyControls;
}

function init(){
    oPlayer = document.getElementById("player");
    setVideo();
    document.oncontextmenu = function() {
        return false;
    }
    
    if (!bCursor) document.body.style.cursor = 'none';
    insertControls();
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

function onMouseDown(oEvent){
    var sButton = oEvent.buttons;
    var sNewStoryItem = oStory[sCurrent][actions.mouse[sButton]];
    if (sNewStoryItem){
        sCurrent = sNewStoryItem;
        setVideo();
    }
}

function onKeyPress(oEvent) {
    var sKey = oEvent.key;
    var sNewStoryItem = oStory[sCurrent][actions.key[sKey]];
    if (sNewStoryItem){
        sCurrent = sNewStoryItem;
        setVideo();
    }
}

init();