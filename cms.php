<div class="nav">
        <br><br>
        <div class="el" onclick="window.location.href='index.php'" ;>Page principale</div>
        <div class="ela">Domaine</div>
        <ul class="sub-menu">
            <li>SSL</li>
            <li>Zone DNS</li>
        </ul>
        <div class="el" onclick="window.location.href='file.php'" ;>Fichier (EN BETA)</div>
        <div class="el" onclick="window.location.href='database.php'" ;>DataBase (EN DEV)</div>
        <div class="el" onclick="window.location.href='log.php'">Logs (EN DEV)</div>
        <div class="el" onclick="window.location.href='https://status.atersir.fr/status/web'" ;>Status</div>
        <div class="el" onclick="window.location.href='cms.php'" ;>Installeur de cms (EN DEV)</div>
        <div class="el" onclick="window.location.href='cms.php'" ;>Stats (EN DEV)</div>
        <div class="el" onclick="window.location.href='module.php'" ;>Module (EN BETA)</div>
    </div>
    <style>.nav{
            height: 991px;
            width: 260px;
            background-color: #444A54;
          
       
        }
        body{
            border: none 0px;
           
            display: contents;
            background: #f7f7f7;
           
        }
        html{
            border: none 0px;
            padding: 0;
            background-color: #f7f7f7;
        }
        .el{
            padding: 20px;
            position: relative;
            text-align: center;
            width: 216px;
            height: 44px;
            transition: .3s ease-out, color .3s ease-out;
            color: #fff;
            font: 20px Lato , Helvetica , sans-serif;
        }
        .el:hover{
            background: #8888;
            text-align: center;
            
            width: 216px;
            height: 44px;
            padding: 20px;
            font: 20px Lato , Helvetica , sans-serif;
            
        }
        .box{
            position: absolute;
            width: 300px;
            top:20%;
            /* Position verticale au milieu du conteneur parent */
            left: 20%;
            /* Position horizontale au milieu du conteneur parent */
            transform: translate(-20%, -15%);
            border-radius: .375rem !important;
            background-color: rgba(255, 255, 255, 1) !important;
            box-shadow: 2px 2px 5px #0003;
            padding: 10px;
            height: 300px;
            
        }
        img{
            padding-left: 50px;
            width: 200px;
            height: 200px;
        }
        h1{
            position: absolute;
            top:5%;
            /* Position verticale au milieu du conteneur parent */
            left: 50%;
            /* Position horizontale au milieu du conteneur parent */
            transform: translate(-20%, -15%);
        }button{
            width: 250px;
            background-color:#48BF2E;
            border: 1px solid #48BF2E;
            margin-left: 25px;
        } 
        
        </style>
<h1>Installeur de CMS</h1>

<div class="box">
    <img src="data:image/jpeg;base64,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">
    <h3 style="text-align: center;">Craftmywebsite</h3><br>
    <button>Installer</button>
</div>