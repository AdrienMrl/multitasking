#pragma strict

private var engine : game_engine;
private var topy : float;
public var deploy : deploy;

function Start () {
    transform.position = GetComponent.<gui>().getWorldPos(0.5, 0.9);
    topy = GetComponent.<gui>().getWorldPos(0, 1).y;
    engine = GameObject.Find("game_engine").GetComponent.<game_engine>();
}

function Update()
{
    if (game_engine.game_is_over)
        GetComponent.<Rigidbody2D>().isKinematic = true;
    if (deploy.getActive() == false ||
            GetComponent.<Rigidbody2D>().velocity.magnitude > 0.01)
        return;
    GetComponent.<Rigidbody2D>().AddForce(Vector3(100, -100, 0.0));
}

function OnCollisionEnter2D(other : Collision2D) {
    if (other.gameObject.name == "wall(Clone)" &&
            other.gameObject.transform.position.y >= topy) {
        GetComponent.<flash>().flashing = true;
        engine.gameOver();
    }
}
