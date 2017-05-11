<?php 
    include("../connection.php");

    $data = json_decode(file_get_contents("php://input"));
    $rock_reg = $data->rock_reg;
    $rock_pop = $data->rock_pop;
    $rock_ska = $data->rock_ska;
    $rock_jazz = $data->rock_jazz;
	$reg_pop = $data->reg_pop;
    $reg_ska = $data->reg_ska;
    $reg_jazz = $data->reg_jazz;
	$pop_ska = $data->pop_ska;
	$pop_jazz = $data->pop_jazz;
    $ska_jazz = $data->ska_jazz;
    
    $q = "INSERT INTO categoria (rock_reg, rock_pop, rock_ska, rock_jazz, reg_pop, reg_ska, reg_jazz, pop_ska, pop_jazz, ska_jazz)
	VALUES (:rock_reg, :rock_pop, :rock_ska, :rock_jazz, :reg_pop, :reg_ska, :reg_jazz, :pop_ska, :pop_jazz, :ska_jazz)";
    $query = $db->prepare($q);
    $execute = $query->execute(array(
		":rock_reg" => $rock_reg,
		":rock_pop" => $rock_pop,
		":rock_ska" => $rock_ska,
		":rock_jazz" => $rock_jazz,
		":reg_pop" => $reg_pop,
		":reg_ska" => $reg_ska,
		":reg_jazz" => $reg_jazz,
		":pop_ska" => $pop_ska,
		":pop_jazz" => $pop_jazz,
		":ska_jazz" => $ska_jazz)
		);
	
    //echo json_encode($rock_reg);
?>