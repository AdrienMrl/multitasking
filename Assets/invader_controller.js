#pragma strict

private var speed = 0.6f;

function Update () {
    transform.position.y -= speed * Time.deltaTime;
}
