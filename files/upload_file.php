<?php
session_start();

function decrypt_uuid($encrypted_uuid, $key) {
    return openssl_decrypt(base64_decode($encrypted_uuid), 'aes-256-cbc', $key, 0, substr($key, 0, 16));
}

// Clé de chiffrement
$encryption_key = "jdfj/ksdqj*&jkuhfdshuihuiodfhiuoqdsfhuiosdfqhuigohuioFGFGIGYOUFgyiuodBFHUBUIDQSBQUVHBBUYOSDQDBYUHUIOQSDFHUIYDUISHQHUIFSDQHUIHUFISDQHUIDFQSDHUIYUZEQRHUIZEHRIUHDVSQIUHIUDQSHUIFHIUDSQYFHGUIYDFIOUDQSHFQDSHUIHSDQIUVHIUQDSHFGIUSDGQFIUOSDQGHFYUIZETGR8SDGHDFIUGDSQUIFGODSIUQFGIUDSGHU9GHYERIU9HZERYT8ZE7HYFIOPDUSHF8USDHF8OQGPUSDGFUISDBHLGIUHGOSDIUQFH989défsjlk's(fdljkj-klsdqfnèjksqdq_hijqhçsdfuiç!l:;!:;;:!:;:;!jfusdqjiishdfiuhsfdq.jkhsdqfjkhjksqfdhkjsqhfiuhezuihzui154#//*/*hiuazehtguiaghfuih"; // Changez ceci par une clé secrète unique et sécurisée

$uuid = decrypt_uuid($_SESSION["uuid"], $encryption_key);
$path = isset($_POST['path']) ? $_POST['path'] : '/webroot/';

if (isset($_FILES['file'])) {
    $file = $_FILES['file']['tmp_name'];
    $filename = $_FILES['file']['name'];
    $destination = $path . $filename;

    $fileContent = file_get_contents($file);
    $encodedContent = $fileContent;

    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => "http://194.145.127.13/api/client/servers/$uuid/files/write?file=$destination",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => $encodedContent,
        CURLOPT_HTTPHEADER => array(
            "Accept: application/json",
            "Authorization: Bearer ptlc_a5qN6TJcHV0zYplTKHJe9NzTSCzsCh2sqHWmknLfktX"
        )
    ));

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
        echo "cURL Error #:" . $err;
    } else {
        echo "File uploaded successfully!";
        echo $response;
    }
} else {
    echo "No file uploaded.";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>File Upload</title>
    <!--<meta http-equiv="refresh" content="0;url=index.php?path=<?php echo htmlspecialchars(urlencode($path), ENT_QUOTES, 'UTF-8'); ?>">-->
</head>
<body>
    <p>If you are not redirected automatically, <a href="index.php?path=<?php echo htmlspecialchars(urlencode($path), ENT_QUOTES, 'UTF-8'); ?>">click here</a>.</p>
</body>
</html>