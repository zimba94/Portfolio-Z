<?php
// header('Access-Control-Allow-Origin: *'); 
// header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

    // $message = "Name: ". $_POST["name"] . "\n Email: " . $_POST["email"] . "\n Message: " . $_POST["message"];
    // $message = htmlspecialchars($message);
    // $message = stripcslashes($message);

    // $to = "amejiac94@gmail.com";
    // $subject = "ZimbaCode Message from: " . $_POST["name"];
    // $header = "amejiac94@gmail.com \r\n";
    // $retval = mail($to, $subject, $message, $header);
    // if ($retval) {
    //     echo("Message sent succesfully");
    // }else {
    //     echo("Message could not be sent");
    // }

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);

$jsonEmail = json_decode(file_get_contents("php://input"));


if (!$jsonEmail)
{
    exit("No hay datos");

}else {
    try {
        //Server settings
        $mail->SMTPDebug = 0;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'amejiac94@gmail.com';                     //SMTP username
        $mail->Password   = '123wsxDADDY@';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    
        //Recipients
        $mail->setFrom('amejiac94@gmail.com', 'ZimbaCode');
        $mail->addAddress('amejiac94@gmail.com');     //Add a recipient 
    
        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = "ZimbaCode: " . $jsonEmail->name;
        // $mail->Subject = 'ZimbaCode Message';
        $message = "<strong>Name: </strong> ". $jsonEmail->name . "\n <br> <strong> Email: </strong> " . $jsonEmail->email . "\n  <br> <strong>Message: </strong> " . $jsonEmail->message;
        

        
        $mail->Body = $message;
        // $mail->Body    = 'Mensaje de prueba PHPMailer';
        $mail->send();
        echo json_encode([
            "result" => 'Message has been sent',
        ]);
    } catch (Exception $e) {
        echo json_encode([
            "result" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}",
        ]);
    }

}
?>