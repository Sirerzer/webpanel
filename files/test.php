<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drag and Drop File Upload</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        #drop-area {
            border: 2px dashed #ccc;
            padding: 20px;
            width: 300px;
            text-align: center;
            transition: background-color 0.3s;
        }

        #drop-area.dragover {
            background-color: #f0f0f0;
        }

        #file-input {
            display: none;
        }

        #result {
            margin-top: 20px;
            word-break: break-all;
        }
    </style>
</head>

<body>
    <div id="drop-area">
        <p>Drag and drop a file here or click to select a file</p>
        <input type="file" id="file-input">
        <input type="hidden" id="containerId" value="a0ec12036c80656df37684893c1687c39a3b45417ba065610f85608809855ecf">
        <input type="hidden" id="filePath" value="">
    </div>
    <div id="result"></div>

    <script>
        const dropArea = document.getElementById('drop-area');
        const fileInput = document.getElementById('file-input');
        const resultDiv = document.getElementById('result');
        const containerId = document.getElementById('containerId').value;
        const filePath = document.getElementById('filePath').value;

        dropArea.addEventListener('dragover', (event) => {
            event.preventDefault();
            dropArea.classList.add('dragover');
        });

        dropArea.addEventListener('dragleave', () => {
            dropArea.classList.remove('dragover');
        });

        dropArea.addEventListener('drop', (event) => {
            event.preventDefault();
            dropArea.classList.remove('dragover');
            const files = event.dataTransfer.files;
            handleFiles(files);
        });

        dropArea.addEventListener('click', () => {
            fileInput.click();
        });

        fileInput.addEventListener('change', () => {
            const files = fileInput.files;
            handleFiles(files);
        });

        function handleFiles(files) {
            if (files.length > 0) {
                const file = files[0];
                uploadFile(file);
            }
        }

        function uploadFile(file) {
            const formData = new FormData();
            formData.append('file', file);

            fetch(`http://194.145.127.13:5000/files/upload/${containerId}/${filePath}`, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Authorization': 'Bearer shjidfhuihuihgfsidbu',
                        'Content-Type': 'multipart/form-data' // Replace with actual token
                    }
                })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error(response.statusText);
                    }
                })
                .then(data => {
                    resultDiv.innerText = JSON.stringify(data);
                })
                .catch(error => {
                    console.error('Error:', error);
                    resultDiv.innerText = 'Error uploading file';
                });
        }
    </script>
</body>

</html>