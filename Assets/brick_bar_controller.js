#pragma strict

public var canon_controller : canon_controller;

function Start () {
    transform.position = GetComponent.<gui>().getWorldPos(0.5, 1);
}

function move(x: float) {
    transform.position.x = x;
}

function Update() {
    var touch : Vector2 = GetComponent.<gui>().getTouch();

    if (touch != Vector2(0, 0)) {
        transform.position.x = touch.x;
        canon_controller.move(touch.x);
    }
}
