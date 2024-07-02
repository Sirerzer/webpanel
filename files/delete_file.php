<?php
session_start();

function decrypt_uuid($encrypted_uuid, $key) {
    return openssl_decrypt(base64_decode($encrypted_uuid), 'aes-256-cbc', $key, 0, substr($key, 0, 16));
}

// Clé de chiffrement
$encryption_key = "jdfj/ksdqj*&jkuhfdshuihuiodfhiuoqdsfhuiosdfqhuigohuioFGFGIGYOUFgyiuodBFHUBUIDQSBQUVHBBUYOSDQDBYUHUIOQSDFHUIYDUISHQHUIFSDQHUIHUFISDQHUIDFQSDHUIYUZEQRHUIZEHRIUHDVSQIUHIUDQSHUIFHIUDSQYFHGUIYDFIOUDQSHFQDSHUIHSDQIUVHIUQDSHFGIUSDGQFIUOSDQGHFYUIZETGR8SDGHDFIUGDSQUIFGODSIUQFGIUDSGHU9GHYERIU9HZERYT8ZE7HYFIOPDUSHF8USDHF8OQGPUSDGFUISDBHLGIUHGOSDIUQFH989défsjlk's(fdljkj-klsdqfnèjksqdq_hijqhçsdfuiç!l:;!:;;:!:;:;!jfusdqjiishdfiuhsfdq.jkhsdqfjkhjksqfdhkjsqhfiuhezuihzui154#//*/*hiuazehtguiaghfuih"; // Changez ceci par une clé secrète unique et sécurisée

$uuid = decrypt_uuid($_SESSION["uuid"], $encryption_key);

if (isset($_GET['file'])) {
    $file = $_GET['file'];

    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://panel.atersir.fr/api/client/servers/$uuid/files/delete",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => json_encode(array("root" => "/webroot/", "files" => array($file))),
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
        echo "File deleted successfully!";
        echo $response;
    }
} else {
    echo "No file specified.";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Delete File</title>
</head>
<body>
    <a href="file.php?path=<?php echo urlencode(dirname($_GET['file'])); ?>">Back to File Browser</a>
</body>
</html>
