function loginWithGoogle() {
    // Lógica para login com a conta do Google
    alert('Login with Google clicked');
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Lógica para login com email e senha
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // Aqui você pode fazer uma requisição AJAX para enviar os dados de login para o backend
    // Por simplicidade, vou apenas mostrar os dados na console
    console.log('Email:', email);
    console.log('Password:', password);
});
