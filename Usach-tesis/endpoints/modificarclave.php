<?php 
    include("../connection.php");
    $data = json_decode(file_get_contents("php://input"));
    $passwordvieja = sha1($data->passwordvieja);
    $passwordnueva = sha1($data->passwordnueva);

    
    $userInfo = $db->query("SELECT email FROM users WHERE password='$passwordvieja'");
    
    $userInfo1 = $userInfo->fetchAll();

    if (count($userInfo1) == 1){
        //This means that the user is logged in and let's givem a token :D :D :D
    
    $q = "UPDATE users SET password=:password WHERE email=:email ";
    $query = $db->prepare($q);
    $execute = $query->execute(array(
        ":email" => $userInfo,
        ":password" => $passwordnueva
    )); 

   



    }    


    echo json_encode($username);
?>