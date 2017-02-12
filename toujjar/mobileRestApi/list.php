<?php
require_once 'connexion.php';
    $ps=$pdo->prepare("SELECT * FROM `phone`");
    $ps->execute();
    $list=$ps->fetchAll(PDO::FETCH_ASSOC);
    //pour resouder les problemes d'accent en encodag json

    $data=array();

    foreach ($list as $i=>$val){
        $fields = array();
        foreach ($val as $key=>$value) {
            $fields[$key] = utf8_decode($value);
        }
        $data[$i]=$fields;
    }



    header('Access-Control-Allow-Origin: *');
    header('Content-Type:application/json charset=utf-8');

    echo (json_encode($data));
?>