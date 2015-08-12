#pragma strict

var invader_prefab : GameObject;
private var max_spawn_rate : float = 1; // per sec
private var min_spawn_rate : float = 0.3;

function Start () {
    spawn();
}

function spawnInvader(x : float) {

    var invader : GameObject = Instantiate(invader_prefab);
    invader.transform.position =
        GetComponent.<gui>().getWorldPos(x, 1.5);
    invader.transform.position.z = -1;

}

function spawn() {
    while (true) {
        var wait_time = Random.Range(1f / min_spawn_rate, 1f / max_spawn_rate);
        yield WaitForSeconds(wait_time);
        spawnInvader(Random.Range(0f, 1f));
    }
}
