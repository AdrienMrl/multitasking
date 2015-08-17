#pragma strict

private var speed = 1f;
private var death_time = 0.3;
private var dead : boolean = false;
private var bottomy : float;
private var canon : GameObject;
public var dead_sprite : Sprite;

function Start() {
    canon = GameObject.Find("canon");
}

function Update () {
    if (!dead)
        transform.position.y -= speed * Time.deltaTime;
    if (transform.position.y <= canon.transform.position.y)
        gameOver.gameOver();
}

function OnTriggerEnter2D(col : Collider2D) {
    Destroy(col.gameObject);
    GetComponent.<Animator>().enabled = false;
    GetComponent.<SpriteRenderer>().sprite = dead_sprite;
    Destroy(gameObject, death_time);
    dead = true;
}
