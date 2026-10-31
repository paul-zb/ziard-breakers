<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Ziard Breakers</h1>
    <?php
        include("nav.php");
    ?>

    <div class="Contact">
        <h2>Contact</h2>
        Email : ziardbreakers@gmail.com</br>
        Tél : XX XX XX XX XX
    </div>

<form action="contact.php" method="POST" class="form_contact">
    <input type="text" name="sujet" placeholder="Objet de la demande">

    <input type="text" name="nom" placeholder="Votre nom complet">

    <input type="email" name="email" placeholder="nom@exemple.com">

    <textarea name="message" placeholder="Veuillez taper votre message..."></textarea>

    <input type="submit" value="Envoyer">
</form>
</body>
</html>

<?php
// Initialisation des variables de retour
$erreurs = [];
$succes = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    $objet = isset($_POST['sujet'])   ? trim(htmlspecialchars($_POST['sujet']))   : '';;
    $nom = isset($_POST['nom'])   ? trim(htmlspecialchars($_POST['nom']))   : '';
    $email = isset($_POST['email'])   ? trim(htmlspecialchars($_POST['email']))   : '';
    $message = isset($_POST['message'])   ? trim(htmlspecialchars($_POST['message']))   : '';

    if(empty($objet)){
        $erreurs[] = "Veuillez préciser l'objet de votre demande !";
    }

    if(empty($nom)){
        $erreurs[] = "Veuillez préciser votre nom !";
    }

    if(empty($email)){
        $erreurs[] = "Veuillez préciser votre email !";
    }

    if(empty($message)){
        $erreurs[] = "Veuillez préciser votre message !";
    }


    if (empty($erreurs)) {
        $succes = "Merci $nom, votre message a bien été pris en compte !";
}
}



?>