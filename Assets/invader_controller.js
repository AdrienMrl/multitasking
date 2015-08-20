#pragma strict

private var speed = 1f;
private var death_time = 0.3;
private var dead : boolean = false;
private var bottomy : float;
private var canon : GameObject;
private var engine : game_engine;
public var dead_sprite : Sprite;

function Start() {
    canon = GameObject.Find("canon");
    engine = GameObject.Find("game_engine").GetComponent.<game_engine>();
    Destroy(gameObject, 30);
}

function Update () {
    if (!dead && !game_engine.game_is_over)
        transform.position.y -= speed * Time.deltaTime;
    if (transform.position.y <= canon.transform.position.y +
            GetComponent.<SpriteRenderer>().bounds.size.y / 2) {
        GetComponent.<flash>().flashing = true;
        engine.gameOver();
    }
}

function OnTriggerEnter2D(col : Collider2D) {
    Destroy(col.gameObject);
    GetComponent.<Animator>().enabled = false;
    GetComponent.<SpriteRenderer>().sprite = dead_sprite;
    Destroy(gameObject, death_time);
    dead = true;
}
