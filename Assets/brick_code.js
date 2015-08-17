#pragma strict

function OnCollisionEnter2D(collider : Collision2D) {
    Destroy(gameObject);
}
