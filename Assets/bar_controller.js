#pragma strict

private var state : boolean = false;
private var lerpFactor : float = 10f;
private var timeLast : float = 0;
private var its_ok_to_change_state : boolean = true;
public var engine : game_engine;

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

    if (touch != Vector2(0, 0) && lerpFactor * timeLast > 1
            && its_ok_to_change_state) {
        timeLast = 0;
        state = !state;
        its_ok_to_change_state = false;
    } else if (touch == Vector2(0, 0)) {
        its_ok_to_change_state = true;
    }
    timeLast += Time.deltaTime;
     transform.localRotation =
         Quaternion.Euler(0, 0,
                 Mathf.LerpAngle(getOriginAngle(), getTargetAngle(), lerpFactor * timeLast));
}

function OnCollisionEnter2D(other : Collision2D) {
    if (state == other.gameObject.GetComponent
            .<planet_controller>().getType()) {
        other.gameObject.GetComponent.<flash>().flashing = true;
        engine.gameOver();
    }
}
