#pragma strict

public var viewports : Rect[];
private var active : boolean = false;
private var speed : float = 1;
private var minig : int = 0;
private var lerptime : float = 0;
private var time_show_instruction : int = 3;

function getActive() {
    return active;
}

function Start() {
    active = false;
}

function Update () {


    if (game_engine.game_is_over)
        active = false;


    var instructions = transform.Find("Canvas").Find("instructions").gameObject;

    if (active)
        lerptime += Time.deltaTime;

    if (instructions.activeSelf && lerptime > time_show_instruction)
        instructions.SetActive(false);
    if (minig <= 0 || minig > 3 || game_engine.game_is_over)
        return;

    var cam : Camera = transform.Find("camera").GetComponent.<Camera>();

    cam.rect = Rect(
            Mathf.Lerp(viewports[minig - 1].x, viewports[minig].x, lerptime),
            Mathf.Lerp(viewports[minig - 1].y, viewports[minig].y, lerptime),
            Mathf.Lerp(viewports[minig - 1].width, viewports[minig].width, lerptime),
            Mathf.Lerp(viewports[minig - 1].height, viewports[minig].height, lerptime));

}

function deploy(minigame : int) {
    minig = minigame;
    lerptime = 0;
}

function setActive(mode : boolean) {
    active = mode;
}
