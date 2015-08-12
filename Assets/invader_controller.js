#pragma strict

private var speed = 1f;
private var death_time = 0.3;
private var dead : boolean = false;
public var dead_sprite : Sprite;

function Update () {
    if (!dead)
        transform.position.y -= speed * Time.deltaTime;
}

function OnTriggerEnter2D(col : Collider2D) {
    Destroy(col.gameObject);
    GetComponent.<Animator>().enabled = false;
    GetComponent.<SpriteRenderer>().sprite = dead_sprite;
    Destroy(gameObject, death_time);
    dead = true;
}
