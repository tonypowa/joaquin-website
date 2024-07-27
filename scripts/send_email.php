<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
        http_response_code(400);
        echo "Por favor complete todos los campos del formulario y vuelva a intentarlo.";
        exit;
    }

    $recipient = "tonypowa@gmail.com"; // Cambia esto por el email de la clínica
    $subject = "Nuevo mensaje de contacto de $name";
    $email_content = "Nombre: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Mensaje:\n$message\n";

    $email_headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Gracias! Su mensaje ha sido enviado.";
    } else {
        http_response_code(500);
        echo "Oops! Algo salió mal y no pudimos enviar su mensaje.";
    }
} else {
    http_response_code(403);
    echo "Hubo un problema con su envío, por favor intente nuevamente.";
}
?>
