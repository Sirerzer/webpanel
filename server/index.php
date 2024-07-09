<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atersir web</title>
    <script src="https://kit.fontawesome.com/4bfe10eef3.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&amp;display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link href="/assets/css/styledash.css" rel="stylesheet">
    
<?php
$serveruuid = $_GET["uuid"];

if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
    include '../module/db.php';

    $stmt = $conn->prepare("SELECT mail FROM user WHERE token = ?");
    if ($stmt === false) {
        echo "Erreur de préparation de la requête : " . $conn->error;
        exit();
    }

    // Lier les paramètres
    $stmt->bind_param("s", $_COOKIE['token']);

    // Exécuter la requête
    $stmt->execute();
    $stmt->store_result();

    // Vérifier si l'utilisateur existe
    if ($stmt->num_rows > 0) {
        // Associer les résultats
        $stmt->bind_result($mail);
        $stmt->fetch();


    $stmt = $conn->prepare("SELECT id,nodesid FROM servers WHERE uuid = ?");
    if ($stmt === false) {
        echo "Erreur de préparation de la requête : " . $conn->error;
        exit();
    }

    // Lier les paramètres
    $stmt->bind_param("s", $serveruuid);

    // Exécuter la requête
    $stmt->execute();
    $stmt->store_result();

    // Vérifier si l'utilisateur existe
   if ($stmt->num_rows > 0) {
            $stmt->bind_result($id ,$nodesid);
            $stmt->fetch();
    
            
          
                // Mot de passe correct, démarrer la session et créer un cookie crypté
                $stmt = $conn->prepare("SELECT ip , name , token FROM nodes WHERE id = ?");
                if ($stmt === false) {
                    echo "Erreur de préparation de la requête : " . $conn->error;
                    exit();
                }
            
                // Lier les paramètres
                $stmt->bind_param("s", $nodesid);
            
                // Exécuter la requête
                $stmt->execute();
                $stmt->store_result();
                $stmt->bind_result($ip,$name,$token);
                $stmt->fetch();
        }else{
            echo '...';
        }
}
// Fermer la connexion
    $stmt->close();
    $conn->close();

    $uuid = $serveruuid;

    //ptlc_Qr4kbGoTo4VPAD9Vy7mWZaEmaOE2skLgr1a7qQ6hxqM
    $curl = curl_init();
   
    
    // Clé de chiffrement/

    curl_setopt_array($curl, array(
        CURLOPT_URL => "http://$ip/server/". $uuid,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => [
           "Authorization: ". $token
        ]
        
    ));

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    
    $data = json_decode($response, true);
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, "http://$ip/node/status"); // URL de l'IP
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_HTTPHEADER, [
            "Authorization: ". $token
        ]);
        $responsenode = curl_exec($curl);
        curl_close($curl);
        $node = json_decode($responsenode, true);

   if ($responsenode === false) {
        $statut = "nodestoping";
    }elseif ($node["etat"] === "maintenace") {
        $statut = "nodestoping";
    } elseif (!$node["etat"]== 'running') {
        $statut = "maintenace";
    } 
     //elseif ($data["is_suspended"]) {
    //    $statut = "suspendu";
    //}   
    elseif ($data["status"] == "running") {
        $statut = "start";
    } elseif ($data["status"] == "starting") {
        $statut = "starting";
    } elseif ($data["status"] == "exited") {
        $statut = "offline";
    }
    elseif (empty($statut)) {
        $statut = "QUOI FEUR";
    }

    $ndd = isset($data['ports']['80/tcp'][0]['HostIp']) ? $data['ports']['80/tcp'][0]['HostIp'] : 'N/A';

    
  
 
    

 

// Vérifier si l'utilisateur est connecté via session ou cookie
if (!isset($_SESSION["token"]) && !isset($_COOKIE['token'])) {
    header("Location: /auth/login/");
    exit();
}

// Si l'utilisateur est connecté via cookie, initialiser la session
if (isset($_COOKIE['token'])) {
    $_SESSION["token"] = $_COOKIE['token'];
}
    ?>
    <script>
        function fetchData(action) {
            fetch(`http://127.0.0.1/module/power.php?action=${action}&uuid=<?php echo $uuid; ?>&nodesid=<?php echo $nodesid?>`)
                //.then(response => response.json())
                .then(data => console.log(data))
                .catch((error) => {
                    console.error('Erreur:', error);
                });
        }
        $(document).ready(function() {
            $(".ela").click(function() {
                $(this).next(".sub-menu").toggle();
            });
        });
        $(document).ready(function() {
            $(".start").click(function() {
                fetchData('on');
            });
            $(".reboot").click(function() {
                fetchData('reon');
            });
            $(".stop").click(function() {
                fetchData('off');
            });
            $(".kill").click(function() {
                fetchData('kill');
            });
        });
        // Ecoutez l'événement keydown pour détecter la combinaison de touches de capture d'écran



    </script>

</head>

<body>

    <!--- <header>
        <div class="info">Le proxy ne marche plus merci d'utiliser les nom de serveur et le port pour acceder a voter site</div>

    </header>-->
    <div class="nav">
        <br><br>
        <div class="el" onclick="window.location.href='../dashboard'" ;>Page principale</div>
        <div class="ela">Domaine</div>
        <ul class="sub-menu">
            <li>SSL</li>
            <li>Zone DNS</li>
        </ul>
        <div class="el" onclick="window.location.href='<?php echo $serveruuid?>/files/'" ;>Fichier (EN BETA)</div>
        <div class="el" onclick="window.location.href='database.php'" ;>DataBase (EN DEV)</div>
        <div class="el" onclick="window.location.href='log.php'">Logs (EN DEV)</div>
        <div class="el" onclick="window.location.href='https://status.atersir.fr/status/web'" ;>Status</div>
        <div class="el" onclick="window.location.href='cms.php'" ;>Installeur de cms (EN DEV)</div>
        <div class="el" onclick="window.location.href='cms.php'" ;>Stats (EN DEV)</div>
        <div class="el" onclick="window.location.href='module.php'" ;>Module (EN BETA)</div>
    </div>
    <main>

        <div class="support">

            Code de support<br>
            <?php echo  substr($uuid, 0, 8)?> 
        </div>
   
        <div class="status" style="background-color: <?php if ($statut == "start") {
                                                            echo "#5cdb5c;";
                                                        }
                                                        if ($statut == "offline") {
                                                            echo "#ff0021";
                                                        }
                                                        if ($statut == "suspendu") {
                                                            echo "#ff0021";
                                                        }
                                                        if ($statut == "starting") {
                                                            echo "#ffff00";
                                                        }
                                                        if ($statut == "maintenace") {
                                                            echo "#ffff00";
                                                        }
                                                        if ($statut == "installtion") {
                                                            echo "#ffa500";
                                                        } if ($statut == "nodestoping") {
                                                            echo "#ffa500";
                                                        }?>">
            Etat du serveur<br>
            <?php if ($statut == "start") {
                echo "En ligne";
            }
            if ($statut == "offline") {
                echo "Eteint";
            }
            if ($statut == "suspendu") {
                echo "Suspendu";
            }
            if ($statut == "starting") {
                echo "Etrain de demarre";
            }
            if ($statut == "maintenace") {
                echo "Serveur en maintenance";
            }
            if ($statut == "installtion") {
                echo "En cour d'installation";
            } if ($statut == "nodestoping") {
                echo "Node Eteint";
            } ?>
        </div>
        <div class="domaine">
            Domaine principale<br>
            <a href="<?php echo $ndd;if($ndd == null){echo "https://discord.gg/Bnf4aNSrwa";}?>" style="text-decoration: none; color:#00DDE1;" target="_blank"><?php echo $ndd; if($ndd == null){echo "Demander votre nom de domaine en ticket discord";} ?> </a>
        </div>
        <div class="serveur">
            Serveur<br>
            <a href="atersir.fr" style="text-decoration: none; color:#00DDE1;" target="_blank"><?php echo $name;?></a>
        </div>
        <div class="stat"><!---Visiteur par mois pour NOM DE DOMAINE PRICIPALE---> EN DEV</br></br>
            <canvas id="myChart"></canvas>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

        <script>
            const ctx = document.getElementById('myChart');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Orange'],
                    datasets: [{
                        label: 'Visiteur',
                        data: [3],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        </script>
        <div class="statd"><!--Domaine les plus visité--> En DEV </br></br>
            <canvas id="sta"></canvas>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

        <script>
            const ctxa = document.getElementById('sta');

            new Chart(ctxa, {
                type: 'bar',
                data: {
                    labels: ['.', '.', '', '', '', ''],
                    datasets: [{
                        label: 'Visite',
                        data: [0, 0, 0, 0, 0, 0],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
            });
        </script>

        <div class="new">
            Nouvauté
            <div>29/5/2024 - ajoute de l'encryption de la clé de connexion</div>
            <div>9/6/2024 - Correction graphique des page de connexion</div>
            <div>15/6/2024 - ajoute d'une page de securité</div>
            <div>15/6/2024 - refonte de la navigation</div>
        </div>
        <div class="poweraction">Power action<br> <br>
            <button class="start" <?php if ($statut == ("start")) {
                                        echo "disabled";
                                    }
                                    if ($statut == "suspendu") {
                                        echo "disabled";
                                    }
                                    if ($statut == "starting") {
                                        echo "disabled";
                                    }
                                    if ($statut == "installtion") {
                                        echo "disabled";
                                    }
                                    if ($statut == "maintenace") {
                                        echo "disabled";
                                    } ?>>
                Start
            </button>

            <button class="reboot" <?php if ($statut == "suspendu") {
                                        echo "disabled";
                                    }
                                    if ($statut == "installtion") {
                                        echo "disabled";
                                    }
                                    if ($statut == "maintenace") {
                                        echo "disabled";
                                    } ?>>
                Restart
            </button>

            <button class="stop" <?php if ($statut == ("offline")) {
                                        echo "disabled";
                                    }
                                    if ($statut == ("suspendu")) {
                                        echo "disabled";
                                    }
                                    if ($statut == "installtion") {
                                        echo "disabled";
                                    }
                                    if ($statut == "maintenace") {
                                        echo "disabled";
                                    } ?>>
                Stop
            </button>
            <button class="kill" <?php if ($statut == ("offline")) {
                                        echo "disabled";
                                    }
                                    if ($statut == ("suspendu")) {
                                        echo "disabled";
                                    }
                                    if ($statut == "installtion") {
                                        echo "disabled";
                                    }
                                    if ($statut == "maintenace") {
                                        echo "disabled";
                                    } ?>>
                Kill
            </button>

        </div>
        <div class="disk">
            disck<br>
            <?echo $data["disk_usage"];?>/10Go
        </div>
        
    </main>
    <footer></footer>
</body>

</html>