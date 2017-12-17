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