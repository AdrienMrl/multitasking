#pragma strict

var invader_prefab : GameObject;
private var max_spawn_rate : float = 0.5;

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
        var wait_time = Random.Range(0.5, 1f / 0.5);
        yield WaitForSeconds(wait_time);
        spawnInvader(Random.Range(0f, 1f));
    }
}
