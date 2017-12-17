var sStart = "startvideo";     //Start element name

var actions = {             //action bindings
    "a" : "action1",        //key: action name in story.json
    "b" : "action2"
}

var oStory = {
    "startvideo": {
        "video": "video/Startvideo.mp4",
        "autoaction": "startvideo",
        "action1": "intro",
        "action2": "intro"
    },
    "intro": {
        "video": "video/Intro.mp4",
        "autoaction": "Entscheidungsvideo"
    },
    "Entscheidungsvideo": {
        "video": "video/Entscheidungsvideo.mp4",
        "action1": "FolgeSchwarz",
        "action2": "FolgeWeiß",
        "autoaction": "startvideo"
    },
    "FolgeSchwarz": {
        "video": "video/FolgeSchwarz.mp4",
        "autoaction": "startvideo"
    },
    "FolgeWeiß": {
        "video": "video/FolgeWeiß.mp4",
        "autoaction": "startvideo"
    }
}