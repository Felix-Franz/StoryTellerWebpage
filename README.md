# StoryTellerWebpage
A Web page that plays videos depending on the user's decision.

# Demo

Just open the [Demo](https://felix-franz.github.io/StoryTellerWebpage/) an try to press 'a' or 'b'.

## How to configure

Just go in the `story.json` and place your story inside the oStory variable😉.
You only need to change the story items. the video that should be displayed at the beginn need to be named start (if there are no further changes).

Change the variable sCursor to display the cursor.

The video Property need to be a link to a video that should be displayed while this story item is active. After the video was played the storyitem of ther property `autoaction` will be played.
action1, action2, ... need be provided, but if a key or button is pressed and the current story item has a action for this action it will be played (similar to autoaction).
```json
"name of the story": {
        "video": "video url",
        "autoaction": "name of story item",
        "action1": "name of story item",
        "action2": "name of story item"
    }
```

You can also change name of the start story item and the oActions inside the `story.js`.

To change the start name just change change the `sStart` variable to whatever you want.

Changing the keys/mouse is also very easy, you only need to change the `oActions` variable.
In following example the key a opens the next story item behind the action1 (from the story.json).
Left mouse button (mouse button 1) also fires action1.
You can add more oActions or have multiple oActions doing the same, just add more oActions.

```json
var oActions = {
    key: {                      //action bindings
        "a" : "action1",        //key: action name in story.json
        "b" : "action2"
    },
    mouse: {
        "1" : "action1",        //left button
        "2" : "action2"         //right button
    }
}
```

It is also possible to add more than two decisions per story item.
Therefore you need to add a new action (e.g. action3) to each story item and add a key for this 


# How to run

1. clone it `https://github.com/Felix-Franz/StoryTellerWebpage.git`
1. webserver
    1. copy it to the root of the webserver
    1. navigate to the page
1. Locally
    1. just open the `index.html`