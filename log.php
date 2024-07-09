<style>
     .sub-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background-color: #fff;
            border: 1px solid #ccc;
            padding: 5px;
            z-index: 1;
        }
.nav {
            height: 991px;
            width: 260px;
            background-color: #444A54;


        }
        .el {
            padding: 20px;
            position: relative;
            text-align: center;
            width: 216px;
            height: 44px;
            transition: .3s ease-out, color .3s ease-out;
            color: #fff;
            font: 20px Lato, Helvetica, sans-serif;
        }

        .el:hover {
            background: #8888;
            text-align: center;

            width: 216px;
            height: 44px;
            padding: 20px;
            font: 20px Lato, Helvetica, sans-serif;
        }

        .ela {
            padding: 20px;
            position: relative;
            text-align: center;
            width: 216px;
            height: 44px;
            transition: .3s ease-out, color .3s ease-out;
            color: #fff;
            font: 20px Lato, Helvetica, sans-serif;
        }

        .ela:hover {
            background: #8888;
            text-align: center;

            width: 216px;
            height: 44px;
            padding: 20px;
            font: 20px Lato, Helvetica, sans-serif;
        }
        .accesse {
            position: absolute;
            width: 715px;
            top: 15%;
            /* Position verticale au milieu du conteneur parent */
            left: 63%;
            /* Position horizontale au milieu du conteneur parent */
            transform: translate(-20%, -15%);
            border-radius: .375rem !important;
            background-color: rgba(255, 255, 255, 1) !important;
            box-shadow: 2px 2px 5px #0003;
            padding: 10px;
            height:  970px;
        }
        .erreur {
            position: absolute;
            width: 715px;
            top: 10%;
            /* Position verticale au milieu du conteneur parent */
            left: 23%;
            /* Position horizontale au milieu du conteneur parent */
            transform: translate(-20%, -15%);
            border-radius: .375rem !important;
            background-color: rgba(255, 255, 255, 1) !important;
            box-shadow: 2px 2px 5px #0003;
            padding: 10px;
        }
        body {
            border: none 0px;

            display: contents;
            background: #f7f7f7;
            color: black;
        }

        html {
            border: none 0px;
            padding: 0;
            background-color: #f7f7f7;
        }
</style>

<div class="nav">
        <br><br>
        <div class="el" onclick="window.location.href='index.php'" ;>Page principale</div>
        <div class="ela">Domaine</div>
       
        <div class="el" onclick="window.location.href='file.php'" ;>Fichier (EN BETA)</div>
        <div class="el" onclick="window.location.href='database.php'" ;>DataBase (EN DEV)</div>
        <div class="el" onclick="window.location.href='log.php'">Logs (EN DEV)</div>
        <div class="el" onclick="window.location.href='https://status.atersir.fr/status/web'" ;>Status</div>
        <div class="el" onclick="window.location.href='cms.php'" ;>Installeur de cms (EN DEV)</div>
        <div class="el" onclick="window.location.href='cms.php'" ;>Stats (EN DEV)</div>
        <div class="el" onclick="window.location.href='module.php'" ;>Module (EN BETA)</div>
    </div>
    <div class="accesse">Accesse log<br><br><?php
    session_start();
     function decrypt_uuid($encrypted_uuid, $key) {
        return openssl_decrypt(base64_decode($encrypted_uuid), 'aes-256-cbc', $key, 0, substr($key, 0, 16));
    }
 $encryption_key = "jdfj/ksdqj*&jkuhfdshuihuiodfhiuoqdsfhuiosdfqhuigohuioFGFGIGYOUFgyiuodBFHUBUIDQSBQUVHBBUYOSDQDBYUHUIOQSDFHUIYDUISHQHUIFSDQHUIHUFISDQHUIDFQSDHUIYUZEQRHUIZEHRIUHDVSQIUHIUDQSHUIFHIUDSQYFHGUIYDFIOUDQSHFQDSHUIHSDQIUVHIUQDSHFGIUSDGQFIUOSDQGHFYUIZETGR8SDGHDFIUGDSQUIFGODSIUQFGIUDSGHU9GHYERIU9HZERYT8ZE7HYFIOPDUSHF8USDHF8OQGPUSDGFUISDBHLGIUHGOSDIUQFH989défsjlk's(fdljkj-klsdqfnèjksqdq_hijqhçsdfuiç!l:;!:;;:!:;:;!jfusdqjiishdfiuhsfdq.jkhsdqfjkhjksqfdhkjsqhfiuhezuihzui154#//*/*hiuazehtguiaghfuih"; // Changez ceci par une clé secrète unique et sécurisée
    
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://panel.atersir.fr/api/client/servers/". decrypt_uuid($_SESSION["uuid"],$encryption_key)."/files/contents?file=/logs/access.log",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_COOKIE => 'pterodactyl_session=eyJpdiI6InhIVXp5ZE43WlMxUU1NQ1pyNWRFa1E9PSIsInZhbHVlIjoiQTNpcE9JV3FlcmZ6Ym9vS0dBTmxXMGtST2xyTFJvVEM5NWVWbVFJSnV6S1dwcTVGWHBhZzdjMHpkN0RNdDVkQiIsIm1hYyI6IjAxYTI5NDY1OWMzNDJlZWU2OTc3ZDYxYzIyMzlhZTFiYWY1ZjgwMjAwZjY3MDU4ZDYwMzhjOTRmYjMzNDliN2YifQ%253D%253D',
  CURLOPT_HTTPHEADER => array(
    "Accept: application/json",
    "Content-Type: application/json",
    "Authorization: Bearer ptlc_U2vzZ9VvvDyy115CbT2dls51fcWdzbTqkPRK136DiQz"
  )
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}?> </div>
    <div class="erreur"></div>