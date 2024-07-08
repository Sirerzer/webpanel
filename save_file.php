<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $curl = curl_init();
    function decrypt_uuid($encrypted_uuid, $key) {
        return openssl_decrypt(base64_decode($encrypted_uuid), 'aes-256-cbc', $key, 0, substr($key, 0, 16));
    }

    // Clé de chiffrement
    $encryption_key = "jdfj/ksdqj*&jkuhfdshuihuiodfhiuoqdsfhuiosdfqhuigohuioFGFGIGYOUFgyiuodBFHUBUIDQSBQUVHBBUYOSDQDBYUHUIOQSDFHUIYDUISHQHUIFSDQHUIHUFISDQHUIDFQSDHUIYUZEQRHUIZEHRIUHDVSQIUHIUDQSHUIFHIUDSQYFHGUIYDFIOUDQSHFQDSHUIHSDQIUVHIUQDSHFGIUSDGQFIUOSDQGHFYUIZETGR8SDGHDFIUGDSQUIFGODSIUQFGIUDSGHU9GHYERIU9HZERYT8ZE7HYFIOPDUSHF8USDHF8OQGPUSDGFUISDBHLGIUHGOSDIUQFH989défsjlk's(fdljkj-klsdqfnèjksqdq_hijqhçsdfuiç!l:;!:;;:!:;:;!jfusdqjiishdfiuhsfdq.jkhsdqfjkhjksqfdhkjsqhfiuhezuihzui154#//*/*hiuazehtguiaghfuih"; // Changez ceci par une clé secrète unique et sécurisée

    $uuid = decrypt_uuid($_SESSION["uuid"], $encryption_key);
    $file = $_GET["file"];
    $content = $_POST["content"];

    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://panel.atersir.fr/api/client/servers/$uuid/files/write?file=$file",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => json_encode(array("content" => $content)),
        CURLOPT_HTTPHEADER => array(
            "Accept: application/json",
            "Authorization: Bearer ptlc_U2vzZ9VvvDyy115CbT2dls51fcWdzbTqkPRK136DiQz",
            "Content-Type: application/json"
        )
    ));

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
        echo "cURL Error #:" . $err;
    } else {
        echo $response;
    }
}
?>
