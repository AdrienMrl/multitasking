#pragma strict

private var state : boolean = false;
private var lerpFactor : float = 5f;
private var timeLast : float = 0;

function Start () {
    transform.position = GetComponent.<gui>().getWorldPos(0.5, 0);
}

function getOriginAngle() : float {
    return state ? 45f : -45f;
}

function getTargetAngle() {
    return -getOriginAngle();
}

function Update () {
    var touch = GetComponent.<gui>().getTouch();

    if (touch != Vector2(0, 0) && lerpFactor * timeLast > 1) {
        timeLast = 0;
        state = !state;
    }
    timeLast += Time.deltaTime;
     transform.localRotation =
         Quaternion.Euler(0, 0,
                 Mathf.LerpAngle(getOriginAngle(), getTargetAngle(), lerpFactor * timeLast));
}
