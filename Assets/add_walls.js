#pragma strict

public var wall_prefab : GameObject;

function Start () {

    var left = GetComponent.<gui>().getWorldPos(0, 0.5);
    var right = GetComponent.<gui>().getWorldPos(1, 0.5);
    var bottom = GetComponent.<gui>().getWorldPos(0.5, 0);
    var top = GetComponent.<gui>().getWorldPos(0.5, 1);

    var height = 2 * (top.y - left.y);
    var width = right.x - left.x;

    var wall_left : GameObject = Instantiate(wall_prefab);
    wall_left.transform.position = left;

    wall_left.transform.localScale =
        GetComponent.<gui>().getScale(wall_left, 0, height);

    var wall_right = Instantiate(wall_prefab);
    wall_right.transform.position = right;
    wall_right.transform.localScale =
        GetComponent.<gui>().getScale(wall_right, 0, height);

    var wall_bottom = Instantiate(wall_prefab);
 
    wall_bottom.transform.position = bottom;
    wall_bottom.transform.localScale =
        GetComponent.<gui>().getScale(wall_bottom, width, 0);

    var wall_top = Instantiate(wall_prefab);
    wall_top.transform.position = top;
    wall_top.transform.localScale =
        GetComponent.<gui>().getScale(wall_top, width, 0);

}

