#pragma strict

private var time_last_bullet : float;
private var bullet_speed : float = 100;
private var fire_delay : float = 0.5;
public var brick_bar : brick_bar_controller;
public var bullet_prefab : GameObject;

function Start() {
    transform.position = GetComponent.<gui>().getWorldPos(0.5, 0);
}

function fire() {
    if (Time.time - time_last_bullet > fire_delay) {
        time_last_bullet = Time.time;
        var bullet = Instantiate(bullet_prefab);
        bullet.transform.position = transform.position;
        bullet.GetComponent.<Rigidbody2D>()
            .AddForce(transform.up * bullet_speed);
    }
}

function Update () {

    var touch : Vector2 = GetComponent.<gui>().getTouch();

    if (touch != Vector2(0, 0)) {
        transform.position.x = touch.x;
        fire();
        brick_bar.move(touch.x);
    }
}
