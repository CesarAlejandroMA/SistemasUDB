document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const codigo = document.getElementById('codigo').value;

    fetch('https://3392-2800-e2-ba80-854-d0f7-be11-2481-ce77.ngrok-free.app/validate-verification-code', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code: codigo })  // El cuerpo debería contener 'code'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la validación del código');
        }
        return response.json();  // Parsear la respuesta JSON
    })
    .then(data => {
        if (data.success) {
            alert('Código verificado correctamente');
            // Redirigir a la siguiente página o proceso
            window.location.href = 'datos.html';
        } else {
            alert('Código incorrecto: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema al verificar el código.');
    });
});
