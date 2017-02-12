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


	if(!empty($_FILES['image'])){
		require_once("connecion.php");
		$namePhoto = $_FILES['image']['name'];
    	if (!empty($_FILES)) {
        $file_tmp_name = $_FILES['image']['tmp_name'];
   	 }
  	move_uploaded_file($file_tmp_name,"./images/$namePhoto");

		$sql = "UPDATE  `phone` SET `image1` LIKE $namePhoto";

       $ps=$pdo->prepare($sql);
        $ps->execute();

		/*$ext = pathinfo($_FILES['image']['name'],PATHINFO_EXTENSION);
                $image = time().'.'.$ext;
                move_uploaded_file($_FILES["image"]["tmp_name"], 'http://localhost/mobileRestApi');*/
		echo "Image uploaded successfully as ".$image;
	}else{
		echo "Image Is Empty";
	}
?>