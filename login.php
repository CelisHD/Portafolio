<?php
session_start();

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
$correo = $_POST['correo'];
$clave = $_POST['contrasena'];

// Consultar la base de datos para verificar las credenciales
$sql = "SELECT * FROM user WHERE correo='$correo' AND clave='$clave'";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    // Inicio de sesión exitoso
    $_SESSION['correo'] = $correo;
    header("Location: ../compras.html"); // Redireccionar a la página de compras
} else {
    echo "<script>
            alert('Correo electrónico o contraseña incorrectos');
            window.location.href = '../login.html'; // Redireccionar a la página de login
          </script>";
}

$conn->close();
?>
