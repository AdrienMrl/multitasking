#pragma strict

private var speed = 0.6f;

function Update () {
    transform.position.y -= speed * Time.deltaTime;
}

function OnTriggerEnter2D(col : Collider2D) {
    print("collide");
}
