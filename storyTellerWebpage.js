// Settings
var sCurrent = "start";     //Start element name
var buttons = {             //button bindings
    "a" : "button1",        //key: button name in story.json
    "b" : "button2"
}
//Settings End

var sStory;

$.ajax({
    type: "GET",
    url: "story.json",
    success: function (data) {
        sStory = data;
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.error("Could not load story list");
    },
    async: false
});
var oStory = JSON.parse(sStory);
var payer = document.getElementById("player");

console.log(oStory);
console.log(buttons)
window.tmp = oStory;


function fullscreen() {
    if (payer.requestFullscreen) {
      payer.requestFullscreen();
    } else if (payer.mozRequestFullScreen) {
      payer.mozRequestFullScreen();
    } else if (payer.webkitRequestFullscreen) {
      payer.webkitRequestFullscreen();
    }
}

function setVideo(){
    var sVideo = oStory[sCurrent].video;
    player.src = sVideo;
    player.play();
    console.log("Playing " + sVideo + "!");
}

function onKeyPress(oEvent) {
    var sKey = oEvent.key;
    var sNewStoryItem = oStory[sCurrent][buttons[sKey]]
    if (!sNewStoryItem){
        console.error("key not defined!");
        return;
    }
    sCurrent = sNewStoryItem;
    setVideo();
}

setVideo();