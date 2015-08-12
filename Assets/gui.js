#pragma strict

private var cam : Camera;

function Start() {
    cam = transform.Find("camera").GetComponent.<Camera>();
}

function getWorldPos(percx : float, percy : float) {
   return cam.ViewportToWorldPoint(new Vector3(percx, percy, 10));
}
