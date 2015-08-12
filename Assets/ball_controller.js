#pragma strict

private var speed : float = 500;

function Start () {

}

function Update () {
    
    var tilt : Vector3 = Vector3(Input.acceleration.x, 0,
            -Input.acceleration.z);

    GetComponent.<Rigidbody2D>().AddForce(tilt * speed * Time.deltaTime);
}
