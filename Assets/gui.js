#pragma strict

public var cam : Camera;

function Start() {
    var camera : Transform;

    if (cam == null)
        cam = transform.Find("camera").GetComponent.<Camera>();
}

function getWorldPos(percx : float, percy : float) {
   return cam.ViewportToWorldPoint(new Vector3(percx, percy, 10));
}

function screenToWorld(pos : Vector2) {
    return cam.ScreenToWorldPoint(Vector3(pos.x, pos.y, 0));
}

function getTouch() : Vector2 {

    for (var i: int = 0; i < Input.touchCount; ++i) {
        var touchpos : Vector2 = Input.GetTouch(i).position;
        if (cam.pixelRect.Contains(touchpos))
            return screenToWorld(touchpos);
    }

    if (Input.GetMouseButton(0)) {
        touchpos = Input.mousePosition;

        if (cam.pixelRect.Contains(touchpos)) {
            return screenToWorld(touchpos);
        }
    }

    return Vector2(0, 0);
}
