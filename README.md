# StoryTellerWebpage
A Web page that plays videos depending on the user's decision.

## How to configure

Just go in the `story.json` and place your story 😉.
You only need to change the story items. the video that should be displayed at the beginn need to be named start.

The Video Property need to be a link to a video that should be displayed while this story item is active.
action1, action2, ... need to contain the next story item depending on the key press.
```json
"name of the story": {
        "video": "video url",
        "action1": "name of story item",
        "action2": "name of story item"
    }
```

You can also change name of the start story item and the actions inside the `storyTellerWebpage.js`.

To change the start name just change change the `sCurrent` variable to whatever you want.

Changing the keys is also very easy, you only need to change the `actions` variable.
In following example the action a opens the next story item behind the action1 (from the story.json).
You can add more actions or have multiple actions doing the same, just add more actions.

```json
var actions = {
    "a" : "action1",
    "b" : "action2"
}
```

It is also possible to add more than two decisions per story item.
Therefore you need to add a new action (e.g. action3) to each story item and add a key for this 


# How to run

## Using Webserver

Just add all files to your root folder of webserver and visit the page.

## Without Webserver

You may need to configure your browser to allow Cross-Origin-Requests.

* Start Chrome with following parameter `--allow-file-access-from-files`
* Firefox need no extra configuration

After that you can open the `index.html`.