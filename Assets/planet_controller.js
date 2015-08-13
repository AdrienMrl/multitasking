#pragma strict

private var color_true : Color = Color.red;
private var color_false : Color = Color.blue;
private var type : boolean;

function setColor() {
    if (type) {
        GetComponent.<SpriteRenderer>().color = color_true;
    }
    else {
        GetComponent.<SpriteRenderer>().color = color_false;
        transform.localRotation = Quaternion.Euler(0, 0, 180);
    }
}

function Start () {
    type = Random.Range(0, 2) == 0 ? false : true;
    setColor();
}
