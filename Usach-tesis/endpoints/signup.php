<?php 
    include("../connection.php");



    $data = json_decode(file_get_contents("php://input"));
    $username = $data->username;
    $password = $data->password;



  
    $userInfo = $db->query("SELECT * FROM users WHERE email='$username'");
    $userInfo = $userInfo->fetchAll();

    if (count($userInfo) == 1){
    exit;    
    }    


    if (count($userInfo) !== 1){
    
    

    $q = "INSERT INTO users (email, password) VALUES (:email, :password)";
    $query = $db->prepare($q);
    $execute = $query->execute(array(
        ":email" => $username,
<<<<<<< HEAD
        ":password" => ($password)
=======
        ":password" => sha1($password)
>>>>>>> origin/master
        
    ));

}
  //}
    echo json_encode($username);
?>