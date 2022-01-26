<?php
    //declaring variables
    $servername = "localhost";
    $user = "root";
    $pass = "123654be";

    //Treating connection exceptions
    try {
        $conn = new PDO("mysql:host=$servername;dbname=test", $user, $pass);
        $conn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Connection successfull";
    } catch(PDOException $e) {
        echo "Connection failed  " . $e->getMessage();
    }

    //Database creation
    //Criar Table 
    //Pedir entrada do usuário
    //Tratar input do prompt
    //Executar operação desejada
    
    $conn = null; // Closing connection
?>
