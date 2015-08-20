#pragma strict

private var speed : float = 500;
private var left_top : Vector3;
private var right_bottom : Vector3;

function Start() {
    left_top = GetComponent.<gui>().getWorldPos(0, 1);
    right_bottom = GetComponent.<gui>().getWorldPos(1, 0);
}


function is_inbounds() {

    var size = GetComponent.<SpriteRenderer>().bounds.size.x / 2;

    return transform.position.x + size <= right_bottom.x &&
           transform.position.y + size <= left_top.y &&
           transform.position.x - size >= left_top.x &&
           transform.position.y - size >= right_bottom.y;
}

function Update () {
    
    if (game_engine.game_is_over)
        return;

    var tilt : Vector3 = Vector3(Input.acceleration.x, Input.acceleration.y, 0);

    GetComponent.<Rigidbody2D>().AddForce(tilt * speed * Time.deltaTime);

    if (!is_inbounds()) {
        GetComponent.<flash>().flashing = true;
        game_engine.game_is_over = true;
    }

}
