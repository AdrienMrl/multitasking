#pragma strict

public var flashing : boolean = false;

function Start() {
    InvokeRepeating("flash", 0.4, 0.4);
}

function flash() {
    if (flashing)
        gameObject.SetActive(!gameObject.activeSelf);
}
