#pragma strict

public var cam : Camera;

function Start() {
    var camera : Transform;

    if (cam == null)
        cam = transform.Find("camera").GetComponent.<Camera>();
}

function getWorldPos(percx : float, percy : float) {
    Start();
   return cam.ViewportToWorldPoint(new Vector3(percx, percy, 10));
}

function screenToWorld(pos : Vector2) {
    Start();
    return cam.ScreenToWorldPoint(Vector3(pos.x, pos.y, 0));
}

function getScale(obj : GameObject,
        target_size_x : float, target_size_y : float) : Vector3 {

    Start();
    var bounds = obj.GetComponent.<Renderer>().bounds.size;

    var scaleX = target_size_x == 0 ? obj.transform.localScale.x :
        obj.transform.localScale.x * target_size_x / bounds.x;
    var scaleY = target_size_y == 0 ? obj.transform.localScale.y :
        obj.transform.localScale.y * target_size_y / bounds.y;

    return Vector3(scaleX, scaleY, 1);
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
