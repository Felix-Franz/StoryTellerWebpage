var sStory;

$.ajax({
    type: "GET",
    url: "story.json",
    success: function(data){
        sStory = data;
    },
    error: function(XMLHttpRequest, textStatus, errorThrown){
        console.error("Could not load story list");
    },
    async: false
});
var oStory = JSON.parse(sStory);
console.log(oStory)


function fullscreen(){
    var payer = document.getElementById("player");
    if (payer.requestFullscreen) {
      payer.requestFullscreen();
    } else if (payer.mozRequestFullScreen) {
      payer.mozRequestFullScreen();
    } else if (payer.webkitRequestFullscreen) {
      payer.webkitRequestFullscreen();
    }
}