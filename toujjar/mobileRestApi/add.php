<?php
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');   
    }

    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        
            {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }

    
    $data = json_decode(file_get_contents("php://input"));

    if (isset($data)) {
        require_once 'connexion.php';
        $marque = $data->marque;
        $memoire = $data->memoire;
        $couleur = $data->couleur;
        $prix = (int)$data->prix;
        $ville = $data->ville;
        $email = $data->email;
        $image = $data->image;
        $isNeuf = $data->isNeuf;
        $camera = (int)$data->camera;
        $isDuos = $data->isDuos;
        $password = 'bad';
        $model ="bad";
        $name = "bad";
        $insta = "bad";
        $face = "bad";
        $temps = '    ';
        $image_cpt = 0;

       $sql = "INSERT INTO `phone`(`idPhone`, `marque`, `memoire`, `camera`, `couleur`, `isDuos`, `isNeuf`, `prix`, `ville`, `email`, `phone`, `image1`, `model`, `trader_name`, `trader_facebook`, `trader_instagram`, `temps`, `img_count`, `password`) VALUES (NULL,'$marque','$memoire','$camera','$couleur','$isDuos','$isNeuf','$prix','$ville','$email','$phone','$image','$model','$name','$face','$insta','$temps','$image_cpt','$password')";

       $ps=$pdo->prepare($sql);
        $ps->execute();
    }else{
        echo "echec operation";
    }
?>
 