<?php
include '../../../module/db.php';

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
} else {
    exit;
}

?>

<!--<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ajouter des informations</title>
</head>
<body>
    <form action="insert.php" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br>

        <label for="location">Node ID:</label>
        <input type="text" id="location" name="location" required><br>
        <label for="image">Image:</label>
        <input type="text" id="image" name="image"><br>
        

        <label for="user">user:</label>
        <input type="text" id="user" name="user" required><br>

        <label for="disk">Disk:</label>
        <input type="text" id="disk" name="disk" required><br>

        
        <label for="intport">intport (80):</label>
        <input type="text" id="intport" name="intport" required><br>

        <label for="port">Port:</label>
        <input type="text" id="port" name="port" required><br>

        <input type="submit" value="Submit">
    </form>
</body>
</html>
-->
<html style="height: auto; min-height: 100%;">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Pterodactyl - New Server
    </title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <meta name="_token" content="7WA3faAM1Pr3ooBhIVRj009BAXed2pecvzBku4UB">

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
                <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </a>
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <li class="user-menu">
                            <a href="http://144.24.202.102/account">
                                <img src="https://www.gravatar.com/avatar/9a9a342466c9d4e96cc3863cecfedb89?s=160" class="user-image" alt="User Image">
                                <span class="hidden-xs">Sir_200 Sir_200</span>
                            </a>
                        </li>
                        <li>
                        </li>
                        <li><a href="http://144.24.202.102" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Exit Admin Control"><i class="fa fa-server"></i></a></li>

                        <li>
                        </li>
                        <li><a href="http://144.24.202.102/auth/logout" id="logoutButton" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Logout"><i class="fa fa-sign-out"></i></a></li>

                    </ul>
                </div>
            </nav>
        </header>
        <aside class="main-sidebar">
            <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 941px;">
                <section class="sidebar" style="overflow: hidden; width: auto; height: 941px;">
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
                            <a href="http://144.24.202.102/admin/locations">
                                <i class="fa fa-globe"></i> <span>Locations</span>
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
                        <li class="header">SERVICE MANAGEMENT</li>
                        <li class="1">
                            <a href="http://144.24.202.102/admin/mounts">
                                <i class="fa fa-magic"></i> <span>Mounts</span>
                            </a>
                        </li>
                        <li class="1">
                            <a href="http://144.24.202.102/admin/nests">
                                <i class="fa fa-th-large"></i> <span>Nests</span>
                            </a>
                        </li>
                    </ul>
                </section>
                <div class="slimScrollBar" style="background: rgba(0, 0, 0, 0.2); width: 3px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 941px;"></div>
                <div class="slimScrollRail" style="width: 3px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div>
            </div>
        </aside>
        <div class="content-wrapper" style="min-height: 940px;">
            <section class="content-header">
                <h1>Create Server<small>Add a new server to the panel.</small></h1>
                <ol class="breadcrumb">
                    <li><a href="http://144.24.202.102/admin">Admin</a></li>
                    <li><a href="http://144.24.202.102/admin/servers">Servers</a></li>
                    <li class="active">Create Server</li>
                </ol>
            </section>
            <section class="content">
                <div class="row">
                    <div class="col-xs-12">
                    </div>
                </div>
                <form action="insert.php" method="POST">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="box">
                                <div class="box-header with-border">
                                    <h3 class="box-title">Core Details</h3>
                                </div>

                                <div class="box-body row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="pName">Server Name</label>
                                            <input type="text" class="form-control" id="pName" name="name" value="" placeholder="Server Name">
                                            <p class="small text-muted no-margin">Character limits: <code>a-z A-Z 0-9 _ - .</code> and <code>[Space]</code>.</p>
                                        </div>

                                        <div class="form-group">
                                            <label for="pUserId">Server Owner</label>
                                            <input value="" placeholder="Email" id=pUserId class="form-control" name=user></input>
                                            <p class="small text-muted no-margin">Email address of the Server Owner.</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12">
                            <div class="box">
                                <div class="overlay" id="allocationLoader" style="display:none;"><i class="fa fa-refresh fa-spin"></i></div>
                                <div class="box-header with-border">
                                    <h3 class="box-title">Allocation Management</h3>
                                </div>

                                <div class="box-body row">
                                    <div class="form-group col-sm-4">
                                        <label for="pNodeId">Node</label>
                                        <select name="location" id="pNodeId" class="form-control ">
                                            <?php

                                            $stmt = $conn->query("SELECT token,ip,id,name,tags,ram,disk,server FROM `nodes` WHERE 1");

                                            if ($stmt->num_rows > 0) {
                                                $rows = $stmt->fetch_all(MYSQLI_ASSOC);

                                                foreach ($rows as $row) {
                                                    foreach ($row as $key => $cell) {
                                                        if ($key == 'id') {
                                                            $id = $cell;
                                                        } elseif ($key == 'name') {
                                                            echo '<option value=' . $id . '>' . $cell . '</option>';
                                                        }
                                                    }
                                                }
                                            }
                                            ?>
                                        </select>
                                        <p class="small text-muted no-margin">The node which this server will be deployed to.</p>
                                    </div>

                                    <div class="form-group col-sm-4">
                                        <label for="pAllocation">Default Allocation</label>

                                        <input value="" id=pAllocation class="form-control" name=port></input>


                                        <p class="small text-muted no-margin">The main allocation that will be assigned to this server.</p>
                                    </div>
                                    <div class="form-group col-sm-4">
                                        <label for="pAllocationin">Internal Port</label>

                                        <input value="80" id=pAllocationin class="form-control"name=intport></input>

                                        <p class="small text-muted no-margin">The server's internal port (by default, Nginx uses port 80) is redirected to the default allocation.</p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>




                    <div class="row">


                        <div class="col-md-6">
                            <div class="box">
                                <div class="box-header with-border">
                                    <h3 class="box-title">Docker Configuration</h3>
                                </div>

                                <div class="box-body row">
                                    <div class="form-group col-xs-12">
                                        <label for="pDefaultContainer">Docker Image</label>
                                        <select id="pDefaultContainer" name="image" class="form-control">
                                            <?php
                                            $stmt = $conn->query("SELECT imagename,name FROM `docker` WHERE 1");

                                            if ($stmt->num_rows > 0) {
                                                $rows = $stmt->fetch_all(MYSQLI_ASSOC);

                                                foreach ($rows as $row) {
                                                    foreach ($row as $key => $cell) {
                                                        if ($key == 'imagename') {
                                                            $id = $cell;
                                                        } elseif ($key == 'name') {
                                                            echo '<option value=' . $id . '>' . $cell . '</option>';
                                                        }
                                                    }
                                                }
                                            } ?>
                                        </select>
                                        <input id="pDefaultContainerCustom" name="custom_image" value="" class="form-control" placeholder="Or enter a custom image..." style="margin-top:1rem">
                                        <p class="small text-muted no-margin">This is the default Docker image that will be used to run this server. Select an image from the dropdown above, or enter a custom image in the text field above.</p>
                                        <div class="box-footer">
                                            <input type="hidden" name="_token" value="7WA3faAM1Pr3ooBhIVRj009BAXed2pecvzBku4UB">
                                            <input type="submit" class="btn btn-success pull-right" value="Create Server">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </form>
            </section>
        </div>
        <footer class="main-footer">
            <div class="pull-right small text-gray" style="margin-right:10px;margin-top:-7px;">
                <strong><i class="fa fa-fw fa-code-fork"></i></strong> 1.11.7<br>
                <strong><i class="fa fa-fw fa-clock-o"></i></strong> 0.044s
            </div>
            Copyright © 2015 - 2024 <a href="https://pterodactyl.io/">Pterodactyl Software</a>.
        </footer>
    </div>
    <script src="/js/keyboard.polyfill.js" type="application/javascript"></script>
    <script>
        keyboardeventKeyPolyfill.polyfill();
    </script>

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
        $('#logoutButton').on('click', function(event) {
            event.preventDefault();

            var that = this;
            swal({
                title: 'Do you want to log out?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d9534f',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log out'
            }, function() {
                $.ajax({
                    type: 'POST',
                    url: 'http://144.24.202.102/auth/logout',
                    data: {
                        _token: '7WA3faAM1Pr3ooBhIVRj009BAXed2pecvzBku4UB'
                    },
                    complete: function() {
                        window.location.href = 'http://144.24.202.102/auth/login';
                    }
                });
            });
        });
    </script>

    <script>
        $(function() {
            $('[data-toggle="tooltip"]').tooltip();
        })
    </script>
    <script src="/themes/pterodactyl/vendor/lodash/lodash.js"></script>


    <script type="application/javascript">
        // Persist 'Service Variables'
        function serviceVariablesUpdated(eggId, ids) {}
        // END Persist 'Service Variables'
    </script>

    <script src="/themes/pterodactyl/js/admin/new-server.js?v=20220530"></script>


    <script type="application/javascript">
        $(document).ready(function() {
            // Persist 'Server Owner' select2
            initUserIdSelect();
            // END Persist 'Server Owner' select2

            // Persist 'Node' select2
            // END Persist 'Node' select2

            // Persist 'Nest' select2
            // END Persist 'Nest' select2
        });
    </script>


</body>

</html>