#pragma strict

private var time_between_levels = 1;
private var current_minigame = 0;
private var time_since_last_minigame : float = 0;
public static var game_is_over : boolean = false;
public var minigame : deploy[];
public var again : GameObject;

function unlock_games() {
        time_since_last_minigame = 0;
        current_minigame++;
        minigame[current_minigame].setActive(true);

        minigame[0].deploy(current_minigame);
        minigame[1].deploy(current_minigame);
        minigame[2].deploy(current_minigame);
        minigame[3].deploy(current_minigame);
}

function Update () {
    
    if (time_since_last_minigame > time_between_levels
            && current_minigame < 3) {
        unlock_games();
    }

    time_since_last_minigame += Time.deltaTime;

    if (game_is_over && !again.activeSelf) {
        gameOver();
    }
}

function gameOver() {
    game_is_over = true;
    again.SetActive(true);
    top_score.save_high_score(score.score);
}

function play_again() {
    score.score = 0;
    game_is_over = false;
    again.SetActive(false);
    again.SetActive(false);
    again.SetActive(false);
    again.SetActive(false);
    again.SetActive(false);
    Application.LoadLevel(0);
}
