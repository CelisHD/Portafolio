<?php
// Conexión a la base de datos MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "full_power";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recibir datos del formulario
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$clave = $_POST['contrasena'];

// Insertar datos en la base de datos
$sql = "INSERT INTO user (nombre, correo, clave) VALUES ('$nombre', '$correo', '$clave')";

if ($conn->query($sql) === TRUE) {
    header("Location: ../login.html?registro_exitoso=true");
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
