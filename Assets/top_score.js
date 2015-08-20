#pragma strict

public var new_high_score : UnityEngine.UI.Text;

static function save_high_score(score: int) {
    var curr = PlayerPrefs.GetInt("highScore");
    if (score > curr) {
        GameObject.Find("highscore")
            .GetComponent.<UnityEngine.UI.Text>().text =
            "New high score, you're very talented !";
        PlayerPrefs.SetInt("highScore", score);
        GameObject.Find("best")
            .GetComponent.<top_score>().read_high_score();
    }
}

function read_high_score() {
    var score = PlayerPrefs.GetInt("highScore");
    GetComponent.<UnityEngine.UI.Text>().text = "Top: " + score;
}

function Start () {
    read_high_score();
}
