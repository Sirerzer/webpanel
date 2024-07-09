<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!---<link href="/assets/css/adminstyle.css" rel="stylesheet">-->
</head>
<body>
 
<?php
include '../../module/db.php';

$stmt = $conn->prepare("SELECT id, mail, mdp, adminlevel, token FROM user WHERE token = ?");
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
    echo '<html lang="en"><head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Not Found</title>

    <style>
        /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}a{background-color:transparent}code{font-family:monospace,monospace;font-size:1em}[hidden]{display:none}html{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid #e2e8f0}a{color:inherit;text-decoration:inherit}code{font-family:Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}svg,video{display:block;vertical-align:middle}video{max-width:100%;height:auto}.bg-white{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.bg-gray-100{--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity))}.border-gray-200{--border-opacity:1;border-color:#edf2f7;border-color:rgba(237,242,247,var(--border-opacity))}.border-gray-400{--border-opacity:1;border-color:#cbd5e0;border-color:rgba(203,213,224,var(--border-opacity))}.border-t{border-top-width:1px}.border-r{border-right-width:1px}.flex{display:flex}.grid{display:grid}.hidden{display:none}.items-center{align-items:center}.justify-center{justify-content:center}.font-semibold{font-weight:600}.h-5{height:1.25rem}.h-8{height:2rem}.h-16{height:4rem}.text-sm{font-size:.875rem}.text-lg{font-size:1.125rem}.leading-7{line-height:1.75rem}.mx-auto{margin-left:auto;margin-right:auto}.ml-1{margin-left:.25rem}.mt-2{margin-top:.5rem}.mr-2{margin-right:.5rem}.ml-2{margin-left:.5rem}.mt-4{margin-top:1rem}.ml-4{margin-left:1rem}.mt-8{margin-top:2rem}.ml-12{margin-left:3rem}.-mt-px{margin-top:-1px}.max-w-xl{max-width:36rem}.max-w-6xl{max-width:72rem}.min-h-screen{min-height:100vh}.overflow-hidden{overflow:hidden}.p-6{padding:1.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.pt-8{padding-top:2rem}.fixed{position:fixed}.relative{position:relative}.top-0{top:0}.right-0{right:0}.shadow{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.text-center{text-align:center}.text-gray-200{--text-opacity:1;color:#edf2f7;color:rgba(237,242,247,var(--text-opacity))}.text-gray-300{--text-opacity:1;color:#e2e8f0;color:rgba(226,232,240,var(--text-opacity))}.text-gray-400{--text-opacity:1;color:#cbd5e0;color:rgba(203,213,224,var(--text-opacity))}.text-gray-500{--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity))}.text-gray-600{--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity))}.text-gray-700{--text-opacity:1;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.text-gray-900{--text-opacity:1;color:#1a202c;color:rgba(26,32,44,var(--text-opacity))}.uppercase{text-transform:uppercase}.underline{text-decoration:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.tracking-wider{letter-spacing:.05em}.w-5{width:1.25rem}.w-8{width:2rem}.w-auto{width:auto}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}@-webkit-keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@-webkit-keyframes ping{0%{transform:scale(1);opacity:1}75%,to{transform:scale(2);opacity:0}}@keyframes ping{0%{transform:scale(1);opacity:1}75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}@keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:translateY(0);-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:translateY(0);-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@media (min-width:640px){.sm\:rounded-lg{border-radius:.5rem}.sm\:block{display:block}.sm\:items-center{align-items:center}.sm\:justify-start{justify-content:flex-start}.sm\:justify-between{justify-content:space-between}.sm\:h-20{height:5rem}.sm\:ml-0{margin-left:0}.sm\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\:pt-0{padding-top:0}.sm\:text-left{text-align:left}.sm\:text-right{text-align:right}}@media (min-width:768px){.md\:border-t-0{border-top-width:0}.md\:border-l{border-left-width:1px}.md\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:1024px){.lg\:px-8{padding-left:2rem;padding-right:2rem}}@media (prefers-color-scheme:dark){.dark\:bg-gray-800{--bg-opacity:1;background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}.dark\:bg-gray-900{--bg-opacity:1;background-color:#1a202c;background-color:rgba(26,32,44,var(--bg-opacity))}.dark\:border-gray-700{--border-opacity:1;border-color:#4a5568;border-color:rgba(74,85,104,var(--border-opacity))}.dark\:text-white{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.dark\:text-gray-400{--text-opacity:1;color:#cbd5e0;color:rgba(203,213,224,var(--text-opacity))}}
    </style>

    <style>
        body {
            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }
    </style>
</head>
<body class="antialiased">
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
        <div class="max-w-xl mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center pt-8 sm:justify-start sm:pt-0">
                <div class="px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider">
                    403                    </div>

                <div class="ml-4 text-lg text-gray-500 uppercase tracking-wider">
                    Permission denied                  </div>
            </div>
        </div>
    </div>


</body></html>';
    exit;
}

?>
<!---<a href="create">CREATE</a>-->

</body>
</html>
<html style="height: auto; min-height: 100%;"><head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Pterodactyl -     List Nodes
</title>
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <meta name="_token" content="uEHN59vPcSNsQG6yoRi1xnOVrrvU0K1lBl7vfHbs">

        <link rel="apple-touch-icon" sizes="180x180" href="http://144.24.202.102/favicons/apple-touch-icon.png">
        <link rel="icon" type="image/png" href="http://144.24.202.102/favicons/favicon-32x32.png" sizes="32x32">
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
            <link media="all" type="text/css" rel="stylesheet" href="/themes/pterodactyl/vendor/fontawesome/animation.min.css">

    </head>
    <body class="skin-blue fixed sidebar-mini sidebar-mini-expand-feature" style="height: auto; min-height: 100%;">
        <div class="wrapper" style="height: auto; min-height: 100%;">
            <header class="main-header">
                <a href="http://144.24.202.102" class="logo">
                    <span><?php echo $_ENV['APP_NAME']?></span>
                </a>
                <nav class="navbar navbar-static-top">
                    <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </a>
                    
                </nav>
            </header>
            <aside class="main-sidebar">
                <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 941px;"><section class="sidebar" style="overflow: hidden; width: auto; height: 941px;">
                    <ul class="sidebar-menu">
                    <li class="header">BASIC ADMINISTRATION</li>
                        <li class="1">
                            <a href="../">
                                <i class="fa fa-home"></i> <span>Overview</span>
                            </a>
                        </li>
                        <li class="1">
                            <a href="../settings">
                                <i class="fa fa-wrench"></i> <span>Settings</span>
                            </a>
                        </li>
                        <li class="1">
                            <a href="../api">
                                <i class="fa fa-gamepad"></i> <span>Application API</span>
                            </a>
                        </li>
                        <li class="header">MANAGEMENT</li>
                        <li class="1">
                            <a href="../databases">
                                <i class="fa fa-database"></i> <span>Databases</span>
                            </a>
                        </li>
                        <li class="1">
                            <a href="../tags">
                                <i class="fa fa-tag"></i> <span>Tags</span>
                            </a>
                        </li>
                        <li class="active">
                            <a href="../nodes">
                                <i class="fa fa-sitemap"></i> <span>Nodes</span>
                            </a>
                        </li>
                        <li class="1q">
                            <a href="../servers">
                                <i class="fa fa-server"></i> <span>Servers</span>
                            </a>
                        </li>
                        <li class="1">
                            <a href="../users">
                                <i class="fa fa-users"></i> <span>Users</span>
                            </a>
                        </li>
                        <li class="1">
                            <a href="../docker">
                            <i class="fa"><svg xmlns="http://www.w3.org/2000/svg" height="14" width="17.5" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#abb0c2" d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4 .4 67.6 .1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"/></svg></i> <span>Docker</span>
                            </a>
                        </li>
                     
                    </ul>
                </section><div class="slimScrollBar" style="background: rgba(0, 0, 0, 0.2); width: 3px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 941px;"></div><div class="slimScrollRail" style="width: 3px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div></div>
            </aside>
            <div class="content-wrapper" style="min-height: 940px;">
                <section class="content-header">
                        <h1>Nodes<small>All nodes available on the system.</small></h1>
    <ol class="breadcrumb">
        <li><a href="http://144.24.202.102/admin">Admin</a></li>
        <li class="active">Nodes</li>
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
                <h3 class="box-title">Node List</h3>
                <div class="box-tools search01">
                    <form action="http://127.0.0.1/admin/nodes" method="GET">
                        <div class="input-group input-group-sm">
                            <input type="text" name="filter[name]" class="form-control pull-right" value="" placeholder="Search Nodes">
                            <div class="input-group-btn">
                                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                                <a href="create"><button type="button" class="btn btn-sm btn-primary" style="border-radius: 0 3px 3px 0;margin-left:-1px;">Create New</button></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="box-body table-responsive no-padding">
                <table class="table table-hover">
                    <tbody>
                        <tr>
                        <th></th>
                            <th>Name</th>
                            <th>Tags</th>
                            <th>Memory</th>
                            <th>Disk</th>
                            <th class="center-text">Servers</th>
                            
                        </tr><?php
                        require "../../module/db.php";

// Préparer la requête SQL pour vérifier l'utilisateur
$stmt = $conn->query("SELECT token,ip,id,name,tags,ram,disk,server FROM `nodes` WHERE 1");

if ($stmt->num_rows > 0) {
    $rows = $stmt->fetch_all(MYSQLI_ASSOC);

    foreach ($rows as $row) {
        foreach ($row as $key => $cell) {
            if($key == 'token'){

                $token = $cell;
            }
            elseif($key == 'ip') {
                echo '<td class="text-center left-icon" data-action="ping" data-secret='.$token.' data-location="http://'.$cell.'/node/status"><i class="fa fa-fw fa-heartbeat faa-pulse animated" data-original-title="" title="" style="color: rgb(80, 175, 81);"></i></td>';
          
            
            }elseif($key == 'id'){
                $id = $cell;
            }
            elseif ($key == 'server'){
                echo '<td class="text-center">'.$cell.'</td>';
            }elseif ($key == 'name'){
                echo '<td><a href="view/'.$id.'">'.$cell.'</a></td>';
            }
             else {
                echo "<td>" . htmlspecialchars($cell) . "</td>";
            }
        }

     

       
    }
    
   

} else {
    echo "No rows found.";
}
?>
                           
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
                    <strong><i class="fa fa-fw fa-clock-o"></i></strong> 0.025s
                </div>
                Copyright © 2015 - 2024 <a href="https://pterodactyl.io/">Pterodactyl Software</a>.
            </footer>
        </div>
                        <script src="http://144.24.202.102/js/keyboard.polyfill.js" type="application/javascript"></script>
            <script>keyboardeventKeyPolyfill.polyfill();</script>

            <script src="http://144.24.202.102/themes/pterodactyl/vendor/jquery/jquery.min.js?t={cache-version}"></script>

            <script src="http://144.24.202.102/themes/pterodactyl/vendor/sweetalert/sweetalert.min.js?t={cache-version}"></script>

            <script src="http://144.24.202.102/themes/pterodactyl/vendor/bootstrap/bootstrap.min.js?t={cache-version}"></script>

            <script src="http://144.24.202.102/themes/pterodactyl/vendor/slimscroll/jquery.slimscroll.min.js?t={cache-version}"></script>

            <script src="http://144.24.202.102/themes/pterodactyl/vendor/adminlte/app.min.js?t={cache-version}"></script>

            <script src="http://144.24.202.102/themes/pterodactyl/vendor/bootstrap-notify/bootstrap-notify.min.js?t={cache-version}"></script>

            <script src="http://144.24.202.102/themes/pterodactyl/vendor/select2/select2.full.min.js?t={cache-version}"></script>

            <script src="http://144.24.202.102/themes/pterodactyl/js/admin/functions.js?t={cache-version}"></script>

            <script src="http://144.24.202.102/js/autocomplete.js" type="application/javascript"></script>

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
                                    _token: 'uEHN59vPcSNsQG6yoRi1xnOVrrvU0K1lBl7vfHbs'
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
    (function pingNodes() {
        $('td[data-action="ping"]').each(function(i, element) {
            $.ajax({
                type: 'GET',
                url: $(element).data('location'),
                headers: {
                    'Authorization': '' + $(element).data('secret'),
                },
                timeout: 5000
            }).done(function (data) {
                $(element).find('i').tooltip({
                    title: 'v' + data.version,
                });
                $(element).removeClass('text-muted').find('i').removeClass().addClass('fa fa-fw fa-heartbeat faa-pulse animated').css('color', '#50af51');
            }).fail(function (error) {
                var errorText = 'Error connecting to node! Check browser console for details.';
                try {
                    errorText = error.responseJSON.errors[0].detail || errorText;
                } catch (ex) {}

                $(element).removeClass('text-muted').find('i').removeClass().addClass('fa fa-fw fa-heart-o').css('color', '#d9534f');
                $(element).find('i').tooltip({ title: errorText });
            });
        }).promise().done(function () {
            setTimeout(pingNodes, 10000);
        });
    })();
    </script>
    

</body></html>