<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mise à jour des informations</title>
    <style>
        /* Styles CSS pour la mise en forme */
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            padding: 20px;
        }
        .variable {
            background-color: #ffffff;
            border: 1px solid #ddd;
            padding: 10px;
            margin-bottom: 10px;
        }
        .variable h3 {
            margin: 0;
            font-size: 18px;
            color: #333;
        }
        .variable p {
            margin: 0;
            font-size: 14px;
            color: #666;
        }
        input:disabled {
            cursor: not-allowed;
        }
    </style>
</head>
<body>

<form method="post" action="update.php">
    <?php
        session_start();

        function decrypt_uuid($encrypted_uuid, $key) {
            return openssl_decrypt(base64_decode($encrypted_uuid), 'aes-256-cbc', $key, 0, substr($key, 0, 16));
        }

        $encryption_key = "jdfj/ksdqj*&jkuhfdshuihuiodfhiuoqdsfhuiosdfqhuigohuioFGFGIGYOUFgyiuodBFHUBUIDQSBQUVHBBUYOSDQDBYUHUIOQSDFHUIYDUISHQHUIFSDQHUIHUFISDQHUIDFQSDHUIYUZEQRHUIZEHRIUHDVSQIUHIUDQSHUIFHIUDSQYFHGUIYDFIOUDQSHFQDSHUIHSDQIUVHIUQDSHFGIUSDGQFIUOSDQGHFYUIZETGR8SDGHDFIUGDSQUIFGODSIUQFGIUDSGHU9GHYERIU9HZERYT8ZE7HYFIOPDUSHF8USDHF8OQGPUSDGFUISDBHLGIUHGOSDIUQFH989défsjlk's(fdljkj-klsdqfnèjksqdq_hijqhçsdfuiç!l:;!:;;:!:;:;!jfusdqjiishdfiuhsfdq.jkhsdqfjkhjksqfdhkjsqhfiuhezuihzui154#//*/*hiuazehtguiaghfuih"; // Changez ceci par une clé secrète unique et sécurisée
    
        $uuid = decrypt_uuid($_SESSION["uuid"], $encryption_key);

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://panel.atersir.fr/api/client/servers/".$uuid."/startup",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_COOKIE => 'pterodactyl_session=eyJpdiI6InhIVXp5ZE43WlMxUU1NQ1pyNWRFa1E9PSIsInZhbHVlIjoiQTNpcE9JV3FlcmZ6Ym9vS0dBTmxXMGtST2xyTFJvVEM5NWVWbVFJSnV6S1dwcTVGWHBhZzdjMHpkN0RNdDVkQiIsIm1hYyI6IjAxYTI5NDY1OWMzNDJlZWU2OTc3ZDYxYzIyMzlhZTFiYWY1ZjgwMjAwZjY3MDU4ZDYwMzhjOTRmYjMzNDliN2YifQ%253D%253D',
            CURLOPT_HTTPHEADER => array(
                "Accept: application/json",
                "Authorization: Bearer ptlc_U2vzZ9VvvDyy115CbT2dls51fcWdzbTqkPRK136DiQz"
            )
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            echo "cURL Error #:" . $err;
        } else {
            $data = json_decode($response, true);
            displayData($data);
        }

        function displayData($data) {
            foreach ($data['data'] as $variable) {
                echo '<div class="variable">';
                echo '<h3>' . $variable['attributes']['name'] . '</h3>';
                echo '<p>' . $variable['attributes']['description'] . '</p>';
                echo '<input name="'.$variable['attributes']['env_variable'].'" value="'.$variable['attributes']['server_value'].'" placeholder="'.$variable['attributes']['default_value'].'" ';
                if ($variable['attributes']['is_editable'] == false) {
                    echo "disabled";
                }
                echo '></div><br>';
            }
        }
    ?>
    <button type="submit">Mettre à jour</button>
</form>

</body>
</html>
