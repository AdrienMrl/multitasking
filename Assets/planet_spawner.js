#pragma strict

private var spawnTime : float = 4;
public var planet_prefab : GameObject;

function Start () {
    InvokeRepeating("spawn", spawnTime, spawnTime);
}

function spawn() {
    
    if (GetComponent.<deploy>().active == false)
        return;

    var planet = Instantiate(planet_prefab);
    planet.transform.position = GetComponent.<gui>()
        .getWorldPos(0.5, 1.1);
}
