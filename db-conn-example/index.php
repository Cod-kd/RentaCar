<?php

// EARLY VERSION -- NOT FINISHED YET

include 'system/database.php';

// Példa a csatlakozásra:

function GetCarNames() {
    $cars = DbQuery("SELECT * FROM cars");

    foreach($cars as $c) {
        echo $c['brand'];
    }
}

GetCarNames();