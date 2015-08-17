#pragma strict

public var brick_prefab : GameObject;
private var lines : int = 3;
public var ball : GameObject;

function spawn_brick_line(xid : int) {
    var botl = GetComponent.<gui>().getWorldPos(0, 0);
    var botr = GetComponent.<gui>().getWorldPos(1, 0);
    var top = GetComponent.<gui>().getWorldPos(0, 1);
    var width : float = botr.x - botl.x;
    var height : float = botr.y - top.y;

    width *= 0.9;

    var basey : float = botr.y - (height / 10) * (xid + 1);
    var basex : float = botl.x + width / 22 + ((width / 10) - (width / 12))
        + width / 10;
    for (var i: int = 1; i < 10; i++) {
        var brick = Instantiate(brick_prefab);
        brick.transform.localScale =
            GetComponent.<gui>().getScale(brick, width / 12f, height / 20);
        brick.transform.position = Vector3(basex, basey, 10);
        basex += width / 10f;
        brick.tag = "brick";
    }
}

function spawn_bricks(how_many_lines : int) {
    ball.transform.position = GetComponent.<gui>().getWorldPos(0.5, 0.9);

    for (var i = 0; i < how_many_lines; i++)
        spawn_brick_line(i);
}

function Update() {
    if (GameObject.FindGameObjectsWithTag("brick").length == 0)
        spawn_bricks(lines++);
}
