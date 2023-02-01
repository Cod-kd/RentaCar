<?php

$dbName = "cardealership";
$dbUser = "root";
$dbPass = "";

//Csatlakozás paramétereit tartalmazó szöveg
$dsn = "mysql:host=localhost;dbname=".$dbName.";charset=utf8mb4";

//Csatlakozás: objektum, amin keresztül kommunikálhatunk az adatbázissal
$db = new PDO($dsn, $dbUser, $dbPass);

//Kérés végrehajtását végző függvény
//Paraméreként kapja az SQL kérés és - opcionálisan - a csatolt paraméterek tömbjét
function DbQuery($sql, $params = null)
{
	//Hozzáférés a kinti DB változóhoz (objektum)
	global $db;
	//Az SQL kérés előkészítése
	$query = $db->prepare($sql);
	//Végrehajtása a paraméterek csatolásával
	$query->execute($params);
	//Eredmény kibontása (rekordok asszociatív tömbökként)
	$result = $query->fetchAll(PDO::FETCH_ASSOC);
	
	//Eredmény visszaadása a függvényt hívó programrész számára
	return $result;
}
