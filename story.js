var sStart = "start";     //Start element name

var actions = {             //action bindings
    "a" : "action1",        //key: action name in story.json
    "b" : "action2"
}

var oStory = {
    "start": {
        "video": "http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4",
        "decision": "http://techslides.com/demos/sample-videos/small.mp4",
        "action1": "test1",
        "action2": "test2"
    },
    "test1": {
        "video": "http://mirrors.standaloneinstaller.com/video-sample/star_trails.mp4",
        "decision": "http://techslides.com/demos/sample-videos/small.mp4",
        "action1": "start",
        "action2": "start"
    },
    "test2": {
        "video": "http://mirrors.standaloneinstaller.com/video-sample/lion-sample.mp4",
        "decision": "http://techslides.com/demos/sample-videos/small.mp4",
        "action1": "start",
        "action2": "start"
    }
}