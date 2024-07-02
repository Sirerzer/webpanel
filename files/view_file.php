<?php
session_start();

function decrypt_uuid($encrypted_uuid, $key) {
    return openssl_decrypt(base64_decode($encrypted_uuid), 'aes-256-cbc', $key, 0, substr($key, 0, 16));
}

// Clé de chiffrement
$encryption_key = "jdfj/ksdqj*&jkuhfdshuihuiodfhiuoqdsfhuiosdfqhuigohuioFGFGIGYOUFgyiuodBFHUBUIDQSBQUVHBBUYOSDQDBYUHUIOQSDFHUIYDUISHQHUIFSDQHUIHUFISDQHUIDFQSDHUIYUZEQRHUIZEHRIUHDVSQIUHIUDQSHUIFHIUDSQYFHGUIYDFIOUDQSHFQDSHUIHSDQIUVHIUQDSHFGIUSDGQFIUOSDQGHFYUIZETGR8SDGHDFIUGDSQUIFGODSIUQFGIUDSGHU9GHYERIU9HZERYT8ZE7HYFIOPDUSHF8USDHF8OQGPUSDGFUISDBHLGIUHGOSDIUQFH989défsjlk's(fdljkj-klsdqfnèjksqdq_hijqhçsdfuiç!l:;!:;;:!:;:;!jfusdqjiishdfiuhsfdq.jkhsdqfjkhjksqfdhkjsqhfiuhezuihzui154#//*/*hiuazehtguiaghfuih"; // Changez ceci par une clé secrète unique et sécurisée

$uuid = decrypt_uuid($_SESSION["uuid"], $encryption_key);
$file = $_GET["file"];
if (str_contains($file, 'webroot')) {
    
}else{include "403.php";}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $content = $_POST['content'];

    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://panel.atersir.fr/api/client/servers/$uuid/files/write?file=$file",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => "$content",
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
        echo "File saved successfully!";
        header("Location: file.php"); // Rediriger vers la page principale après la mise à jour
        exit;
    }
    exit;
}

$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_URL => "https://panel.atersir.fr/api/client/servers/$uuid/files/contents?file=$file",
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
    exit;
}

$content = htmlspecialchars($response);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Edit File</title>
</head>
<body>
    <h1>Edit File: <?php echo htmlspecialchars($file); ?></h1>
    <form method="POST">
        <textarea name="content" rows="20" cols="100"><?php echo $content; ?></textarea><br>
        <button type="submit">Save</button>
    </form>
</body>
</html>
