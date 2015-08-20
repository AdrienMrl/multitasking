#pragma strict

public static var score : float = 0;

function Update () {

    if (!game_engine.game_is_over) {
        score += Time.deltaTime * 4;
        var s : int = score;
        GetComponent.<UnityEngine.UI.Text>().text = "" + s;
    }
}
