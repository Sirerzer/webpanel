
<?php
include '../../module/db.php';

$stmt = $conn->prepare("SELECT id,mail,mdp,adminlevel,token FROM user WHERE token = ?");
if ($stmt === false) {
    echo "Erreur de préparation de la requête : " . $conn->error;
    exit();
}

// Lier les paramètres
$stmt->bind_param("s", $_COOKIE['token']);

// Exécuter la requête
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($id, $mail, $mdp, $adminlevel, $token);
$stmt->fetch();
if ($adminlevel === 1) {
    // L'utilisateur est un administrateur
} else {
    exit;
}


    
    // Fin de la table HTML

?>
<html style="height: auto; min-height: 100%;"><head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Pterodactyl -     List Servers
</title>
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <meta name="_token" content="7SLy9RBOJawCQZNWnIzsbiahtSAwZx6cxeXgk9PW">

        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png">
        <link rel="icon" type="image/png" href="/favicons/favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="/favicons/favicon-16x16.png" sizes="16x16">
        <link rel="manifest" href="/favicons/manifest.json">
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#bc6e3c">
        <link rel="shortcut icon" href="/favicons/favicon.ico">
        <meta name="msapplication-config" content="/favicons/browserconfig.xml">
        <meta name="theme-color" content="#0e4688">

        
                    <link media="all" type="text/css" rel="stylesheet" href="http://144.24.202.102/themes/pterodactyl/vendor/select2/select2.min.css?t={cache-version}">

            <link media="all" type="text/css" rel="stylesheet" href="http://144.24.202.102/themes/pterodactyl/vendor/bootstrap/bootstrap.min.css?t={cache-version}">

            <link media="all" type="text/css" rel="stylesheet" href="http://144.24.202.102/themes/pterodactyl/vendor/adminlte/admin.min.css?t={cache-version}">

            <link media="all" type="text/css" rel="stylesheet" href="http://144.24.202.102/themes/pterodactyl/vendor/adminlte/colors/skin-blue.min.css?t={cache-version}">

            <link media="all" type="text/css" rel="stylesheet" href="http://144.24.202.102/themes/pterodactyl/vendor/sweetalert/sweetalert.min.css?t={cache-version}">

            <link media="all" type="text/css" rel="stylesheet" href="http://144.24.202.102/themes/pterodactyl/vendor/animate/animate.min.css?t={cache-version}">

            <link media="all" type="text/css" rel="stylesheet" href="http://144.24.202.102/themes/pterodactyl/css/pterodactyl.css?t={cache-version}">

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">

            <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
            <![endif]-->
            </head>
    <body class="skin-blue fixed sidebar-mini sidebar-mini-expand-feature" style="height: auto; min-height: 100%;">
        <div class="wrapper" style="height: auto; min-height: 100%;">
            <header class="main-header">
                <a href="http://144.24.202.102" class="logo">
                    <span>Pterodactyl</span>
                </a>
                <nav class="navbar navbar-static-top">
                    
                    
                </nav>
            </header>
            <aside class="main-sidebar">
                <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 941px;"><section class="sidebar" style="overflow: hidden; width: auto; height: 941px;">
                    <ul class="sidebar-menu">
                        <li class="header">BASIC ADMINISTRATION</li>
                        <li class="1">
                            <a href="http://144.24.202.102/admin">
                                <i class="fa fa-home"></i> <span>Overview</span>
                            </a>
                        </li>
                        <li class="1">
                            <a href="http://144.24.202.102/admin/settings">
                                <i class="fa fa-wrench"></i> <span>Settings</span>
                            </a>
                        </li>
                        <li class="1">
                            <a href="http://144.24.202.102/admin/api">
                                <i class="fa fa-gamepad"></i> <span>Application API</span>
                            </a>
                        </li>
                        <li class="header">MANAGEMENT</li>
                        <li class="1">
                            <a href="http://144.24.202.102/admin/databases">
                                <i class="fa fa-database"></i> <span>Databases</span>
                            </a>
                        </li>
                        <li class="1">
                            <a href="http://144.24.202.102/admin/nodes">
                                <i class="fa fa-tag"></i> <span>Tags</span>
                            </a>
                        </li>
                        <li class="1">
                            <a href="http://144.24.202.102/admin/nodes">
                                <i class="fa fa-sitemap"></i> <span>Nodes</span>
                            </a>
                        </li>
                        <li class="active">
                            <a href="http://144.24.202.102/admin/servers">
                                <i class="fa fa-server"></i> <span>Servers</span>
                            </a>
                        </li>
                        <li class="1">
                            <a href="http://144.24.202.102/admin/users">
                                <i class="fa fa-users"></i> <span>Users</span>
                            </a>
                        </li>
                       
                    </ul>
                </section><div class="slimScrollBar" style="background: rgba(0, 0, 0, 0.2); width: 3px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 941px;"></div><div class="slimScrollRail" style="width: 3px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div></div>
            </aside>
            <div class="content-wrapper" style="min-height: 940px;">
                <section class="content-header">
                        <h1>Servers<small>All servers available on the system.</small></h1>
    <ol class="breadcrumb">
        <li><a href="http://144.24.202.102/admin">Admin</a></li>
        <li class="active">Servers</li>
    </ol>
                </section>
                <section class="content">
                    <div class="row">
                        <div class="col-xs-12">
                                                                                </div>
                    </div>
                    <div class="row">
    <div class="col-xs-12">
        <div class="box box-primary">
            <div class="box-header with-border">
                <h3 class="box-title">Server List</h3>
                <div class="box-tools search01">
                    <form action="http://144.24.202.102/admin/servers" method="GET">
                        <div class="input-group input-group-sm">
                            <input type="text" name="filter[*]" class="form-control pull-right" value="" placeholder="Search Servers">
                            <div class="input-group-btn">
                                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                                <a href="http://144.24.202.102/admin/servers/new"><button type="button" class="btn btn-sm btn-primary" style="border-radius: 0 3px 3px 0;margin-left:-1px;">Create New</button></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="box-body table-responsive no-padding">
                <table class="table table-hover">
                    <tbody>
                        <tr>
                            <th>Server Name</th>
                            <th>UUID</th>
                            <th>Owner</th>
                            <th>Node</th>
                            <th>Connection</th>
                           
                        </tr>
                            </tr>
                                                    <tr data-server="0628df47">
                                <td><a href="http://144.24.202.102/admin/servers/view/4">serveur</a></td>
                                <td><code title="0628df47-f38b-463e-b607-2aad915bca1f">0628df47-f38b-463e-b607-2aad915bca1f</code></td>
                                <td><a href="http://144.24.202.102/admin/users/view/1">sir_200</a></td>
                                <td><a href="http://144.24.202.102/admin/nodes/view/1">Node-01</a></td>
                                <td>
                                    <code>144.24.202.102:25565</code>
                                </td>
                                
                            </tr><?php
                            $stmt = $conn->query("SELECT * FROM `servers` WHERE 1");

if ($stmt->num_rows > 0) {
    // Fetch all rows as an associative array
    $rows = $stmt->fetch_all(MYSQLI_ASSOC);
    
    // Début de la table HTML
   
    
    // Afficher les données de chaque ligne
    foreach ($rows as $row) {
        echo "<tr>";
        foreach ($row as $key => $cell) {
            if($key == 'uuid'){
                echo "<td><code>" . htmlspecialchars($cell) . "</code></td>";
            }elseif($key == 'connectionip'){
                echo "<td><code>" . htmlspecialchars($cell) . "</code></td>";
            }elseif($key == 'id'){
                $id = $cell;
            }elseif($key == 'name'){
                echo "<td><a href=".$id.">" . htmlspecialchars($cell) . "</a></td>";
            }elseif($key == "users"){
                $stmt = $conn->prepare("SELECT pseudo,id FROM user WHERE mail = ?");
                if ($stmt === false) {
                    echo "Erreur de préparation de la requête : " . $conn->error;
                    exit();
                }
            
                // Lier les paramètres
                $stmt->bind_param("s", $cell);
            
                // Exécuter la requête
                $stmt->execute();
                $stmt->store_result();
            
                // Vérifier si l'utilisateur existe
                if ($stmt->num_rows > 0) {
                    // Associer les résultats
                    $stmt->bind_result($mail,$ida);
                    $stmt->fetch();
                    echo "<td><a href=".$ida.">" . htmlspecialchars($mail) . "</a></td>";
                }
                } elseif($key == 'nodesid'){
                $stmt = $conn->prepare("SELECT name,id FROM nodes WHERE id = ?");
                if ($stmt === false) {
                    echo "Erreur de préparation de la requête : " . $conn->error;
                    exit();
                }
            
                // Lier les paramètres
                $stmt->bind_param("s", $cell);
            
                // Exécuter la requête
                $stmt->execute();
                $stmt->store_result();
                $stmt->bind_result($name,$idb);
                $stmt->fetch();
                echo "<td><a href=".$idb.">" . htmlspecialchars($name) . "</a></td>";

            }
            else{
                echo "<td>" . htmlspecialchars($cell) . "</td>";
            }
        }
        } } ?>
                                            </tbody>
                </table>
            </div>
                    </div>
    </div>
</div>
                </section>
            </div>
            <footer class="main-footer">
                <div class="pull-right small text-gray" style="margin-right:10px;margin-top:-7px;">
                    <strong><i class="fa fa-fw fa-code-fork"></i></strong> 1.11.7<br>
                    <strong><i class="fa fa-fw fa-clock-o"></i></strong> 0.02s
                </div>
                Copyright © 2015 - 2024 <a href="https://pterodactyl.io/">Pterodactyl Software</a>.
            </footer>
        </div>
                        <script src="/js/keyboard.polyfill.js" type="application/javascript"></script>
            <script>keyboardeventKeyPolyfill.polyfill();</script>

            <script src="/themes/pterodactyl/vendor/jquery/jquery.min.js?t={cache-version}"></script>

            <script src="/themes/pterodactyl/vendor/sweetalert/sweetalert.min.js?t={cache-version}"></script>

            <script src="/themes/pterodactyl/vendor/bootstrap/bootstrap.min.js?t={cache-version}"></script>

            <script src="/themes/pterodactyl/vendor/slimscroll/jquery.slimscroll.min.js?t={cache-version}"></script>

            <script src="/themes/pterodactyl/vendor/adminlte/app.min.js?t={cache-version}"></script>

            <script src="/themes/pterodactyl/vendor/bootstrap-notify/bootstrap-notify.min.js?t={cache-version}"></script>

            <script src="/themes/pterodactyl/vendor/select2/select2.full.min.js?t={cache-version}"></script>

            <script src="/themes/pterodactyl/js/admin/functions.js?t={cache-version}"></script>

            <script src="/js/autocomplete.js" type="application/javascript"></script>

                            <script>
                    $('#logoutButton').on('click', function (event) {
                        event.preventDefault();

                        var that = this;
                        swal({
                            title: 'Do you want to log out?',
                            type: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#d9534f',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Log out'
                        }, function () {
                             $.ajax({
                                type: 'POST',
                                url: 'http://144.24.202.102/auth/logout',
                                data: {
                                    _token: '7SLy9RBOJawCQZNWnIzsbiahtSAwZx6cxeXgk9PW'
                                },complete: function () {
                                    window.location.href = 'http://144.24.202.102/auth/login';
                                }
                        });
                    });
                });
                </script>
            
            <script>
                $(function () {
                    $('[data-toggle="tooltip"]').tooltip();
                })
            </script>
            <script>
        $('.console-popout').on('click', function (event) {
            event.preventDefault();
            window.open($(this).attr('href'), 'Pterodactyl Console', 'width=800,height=400');
        });
    </script>
    

</body></html>