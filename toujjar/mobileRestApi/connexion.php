<?php
    try {
        $con = "mysql:host=localhost;dbname=toujjar";
        $pdo = new PDO($con, 'root', '');
      
    }
    catch(PDOException $e){
        $msg = 'ereur dans : '+$e->getMessage();
        die($msg);
    }

?>