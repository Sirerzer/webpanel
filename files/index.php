
<?php
include '../module/db.php';
$uuid = $_GET["uuid"];
session_start();

$stmt = $conn->prepare("SELECT id,nodesid FROM servers WHERE uuid = ?");
if ($stmt === false) {
    echo "Erreur de préparation de la requête : " . $conn->error;
    exit();
}

// Lier les paramètres
$stmt->bind_param("s", $uuid);

// Exécuter la requête
$stmt->execute();
$stmt->store_result();

// Vérifier si l'utilisateur existe

        $stmt->bind_result($id ,$nodesid);
        $stmt->fetch();
            // Mot de passe correct, démarrer la session et créer un cookie crypté
            $stmt = $conn->prepare("SELECT id, ip , name , token FROM nodes WHERE id = ?");
            if ($stmt === false) {
                echo "Erreur de préparation de la requête : " . $conn->error;
                exit();
            }
        
            // Lier les paramètres
            $stmt->bind_param("s", $nodesid);
        
            // Exécuter la requête
            $stmt->execute();
            $stmt->store_result();
            $stmt->bind_result($idaaa,$ip,$name,$token);
            $stmt->fetch();

// Example encryption key (replace with your secure key)


// Retrieve UUID from session


// Default path if not provided in GET parameter
$path = $_GET['path'];
$patha = '/'. $path;
// Basic HTML structure with CSS styles
echo <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>File Browser</title>
    <style>
        /* Your CSS styles here */
    </style>
</head>
<body>
    <div class="nav">
        <!-- Your navigation menu HTML here -->
    </div>

    <h1>File Browser</h1>
HTML;

// Check if path contains '/' (simplified version from your code)
if (!str_contains($patha, '/')) {
    // Display 404-like error page
    echo <<<HTML
    <div class="error-page">
        <h2>Not Found</h2>
        <p>Permission denied.</p>
    </div>
    </body></html>
HTML;
    exit;
}

// Create cURL request to fetch files from remote server
$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_URL => "http://$ip/files/$uuid$patha",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
        "Accept: application/json",
        "Authorization:" . $token,
    )
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
    echo "cURL Error #:" . $err;
    exit;
}

// Process JSON response from server
$files = json_decode($response, true);

// Vérifier si le décodage JSON a réussi
if ($files === null && json_last_error() !== JSON_ERROR_NONE) {
    echo <<<HTML
    <form method='POST' action='http://127.0.0.1/files/save.php'>
        <input type=submit>
        <textarea name="con">$response</textarea>
        <input hidden value='$ip' name=nodeurl >
        <input hidden value='$uuid' name=uuid >
        <input hidden value='$patha' name=path >
        <input hidden value='$idaaa' name=nodeid >
    </form>
    HTML;
    // Si le décodage JSON échoue, afficher le contenu brut dans une textarea

} 


if (isset($files['errors'])) {
    echo "Error: " . $files['errors'][0]['detail'];
    exit;
}

// Display file list (simplified version)
if (isset($files)) { // Check if $files is set, assuming it should always be set after decoding JSON
    echo "<ul>";
    foreach ($files as $file) {
        echo "<li><strong>File:</strong> $file</li>";
    }
    echo "</ul>";
}
echo <<<HTML
    <form id="uploadForm" action="http://194.145.127.13:5000/server/$uuid/upload" method="POST" enctype="multipart/form-data">
        <input type="file" name="file" multiple>
        <input type="text" name="upload_path" value="$path" hidden>
        <button type="submit">Upload</button>
    </form>

    <script>
        // JavaScript for handling form submission
        document.getElementById('uploadForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(this);

            fetch(this.action, {
                method: this.method,
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log('Response:', data);
                alert('Files uploaded successfully!');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error uploading files!');
            });
        });
    </script>
</body>
</html>
HTML;
?>