<?php
session_start();

function decrypt_uuid($encrypted_uuid, $key) {
    return openssl_decrypt(base64_decode($encrypted_uuid), 'aes-256-cbc', $key, 0, substr($key, 0, 16));
}

// Clé de chiffrement
$encryption_key = "jdfj/ksdqj*&jkuhfdshuihuiodfhiuoqdsfhuiosdfqhuigohuioFGFGIGYOUFgyiuodBFHUBUIDQSBQUVHBBUYOSDQDBYUHUIOQSDFHUIYDUISHQHUIFSDQHUIHUFISDQHUIDFQSDHUIYUZEQRHUIZEHRIUHDVSQIUHIUDQSHUIFHIUDSQYFHGUIYDFIOUDQSHFQDSHUIHSDQIUVHIUQDSHFGIUSDGQFIUOSDQGHFYUIZETGR8SDGHDFIUGDSQUIFGODSIUQFGIUDSGHU9GHYERIU9HZERYT8ZE7HYFIOPDUSHF8USDHF8OQGPUSDGFUISDBHLGIUHGOSDIUQFH989défsjlk's(fdljkj-klsdqfnèjksqdq_hijqhçsdfuiç!l:;!:;;:!:;:;!jfusdqjiishdfiuhsfdq.jkhsdqfjkhjksqfdhkjsqhfiuhezuihzui154#//*/*hiuazehtguiaghfuih"; // Changez ceci par une clé secrète unique et sécurisée

$uuid = decrypt_uuid($_SESSION["uuid"], $encryption_key);
$file = $_GET['file'];

$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_URL => "http://194.145.127.13/api/client/servers/$uuid/files/contents?file=" . urlencode($file),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_COOKIE => 'pterodactyl_session=eyJpdiI6InhIVXp5ZE43WlMxUU1NQ1pyNWRFa1E9PSIsInZhbHVlIjoiQTNpcE9JV3FlcmZ6Ym9vS0dBTmxXMGtST2xyTFJvVEM5NWVWbVFJSnV6S1dwcTVGWHBhZzdjMHpkN0RNdDVkQiIsIm1hYyI6IjAxYTI5NDY1OWMzNDJlZWU2OTc3ZDYxYzIyMzlhZTFiYWY1ZjgwMjAwZjY3MDU4ZDYwMzhjOTRmYjMzNDliN2YifQ%253D%253D',
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
    exit;
}

header('Content-Description: File Transfer');
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename=' . basename($file));
header('Content-Transfer-Encoding: binary');
header('Expires: 0');
header('Cache-Control: must-revalidate');
header('Pragma: public');
header('Content-Length: ' . strlen($response));
echo $response;
exit;
?>
