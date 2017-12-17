// Settings
var sCurrent = "start";     //Start element name
var actions = {             //action bindings
    "a" : "action1",        //key: action name in story.json
    "b" : "action2"
}
//Settings End

var oStory;
var oPlayer;

function setVideo(){
    var sVideo = oStory[sCurrent].video;
    oPlayer.src = sVideo;
    oPlayer.play();
    console.log("Playing " + sCurrent + " (" + sVideo + ")!");
}

function init(){
    $.ajax({
        type: "GET",
        url: "story.json",
        dataType: "json",
        success: function (data) {
            oStory = data;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.error("Could not load story list");
        },
        async: false
    });
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
function onPlayerEnded(){
    
}

function onKeyPress(oEvent) {
    var sKey = oEvent.key;
    var sNewStoryItem = oStory[sCurrent][actions[sKey]]
    if (!sNewStoryItem){
        console.error("key not defined!");
        return;
    }
    sCurrent = sNewStoryItem;
    setVideo();
}

init();