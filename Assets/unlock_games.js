#pragma strict

var time_between_levels = 3;
var current_minigame = 0;
var time_since_last_minigame : float = 0;
public var minigame : deploy[];

function Start () {

}

function Update () {
    
    if (time_since_last_minigame > time_between_levels
            && current_minigame < 4) {
        time_since_last_minigame = 0;
        current_minigame++;
        minigame[0].deploy(current_minigame);
        minigame[1].deploy(current_minigame);
        minigame[2].deploy(current_minigame);
        minigame[3].deploy(current_minigame);
    }

    time_since_last_minigame += Time.deltaTime;
}
