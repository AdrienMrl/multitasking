#pragma strict

function Start () {
    transform.position = GetComponent.<gui>().getWorldPos(0.5, 0.9);
    GetComponent.<Rigidbody2D>().AddForce(Vector3(100, -100, 0.0));
}
