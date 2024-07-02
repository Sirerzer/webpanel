<?php
include "./securite/index.php";


?>

<!DOCTYPE html>
<html lang="en">
<head>
<script src="https://kit.fontawesome.com/4bfe10eef3.js" crossorigin="anonymous"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
body {
    border: none 0px;
    height: 100%; width: 100%;
    display: contents;
    background: #f7f7f7;
    color: black;
}

html {
    border: none 0px;
    padding: 0;
    height: 100%; width: 100%;
    background-color: #16537E;
}
/**{border: red 1px solid;}*/
main{height: 30%; width: 100%;}
header{height: 70%; width: 100%;}
main{
    display: flex;
}
.card{
    width: 33.3%;
}
.sous{
    z-index: 1;
}
svg{
    z-index: 0;
}
</style>
<body>
<header></header>
<main> 
    <div class="card">Up Time de 99%</div>
    <div class="card">2 Grand serveur pour vos web</div>
    <div class="card"><?php echo $nom;?> Serveur web hebergé</div>
    
</main><?php
echo 'My username is ' .$_ENV["APP_NAME"] . '!';
?>
<footer></footer>
</body>
</html>