<?php 
    include("../connection.php");
    require("../class.phpmailer.php");
    require("../class.smtp.php");


    $data = json_decode(file_get_contents("php://input"));
    $username = $data->username;
    $password = $data->password;
    
    $userInfo = $db->query("SELECT * FROM users WHERE email='$username'");
    $userInfo = $userInfo->fetchAll();

    if (count($userInfo) == 1){
        //This means that the user is logged in and let's givem a token :D :D :D
    exit;    
    }    


    if (count($userInfo) !== 1){
        //This means that the user is logged in and let's givem a token :D :D :D
    
    

    $q = "INSERT INTO users (email, password) VALUES (:email, :password)";
    $query = $db->prepare($q);
    $execute = $query->execute(array(
        ":email" => $username,
        ":password" => sha1($password)
    ));

        $mail = new PHPMailer(); // create a new object
        $mail->IsSMTP(); // enable SMTP
        $mail->SMTPAuth = true; // authentication enabled
        $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for GMail
        $mail->Host = "smtp.gmail.com";
        $mail->Port = 465; // or 587
        $mail->IsHTML(true);
        $mail->Username = "tesisusachbdd@gmail.com"; //Email that you setup
        $mail->Password = "T3s4s5s4chBdd"; // Password
        $mail->Subject = "Registro exitoso en Tesis BDD";
        $mail->Body ="Hola, bienvenido. Tu usuario es $username y tu clave es $password.Al presionar este link, puedes ingresar a tu sesion http://localhost/Usach-tesis/#/";
        $mail->AddAddress($username); //Pass the e-mail that you setup
        
        if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}


}
  //}
    echo json_encode($username);
?>