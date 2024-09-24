document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário para que possamos validar

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validação do nome
        if (username.trim() === '') {
            alert('Por favor, preencha seu nome.');
            return;
        }

        // Validação do e-mail
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        // Validação da senha
        if (password.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        // Validação da confirmação da senha
        if (password !== confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        }

        // Se tudo estiver correto, você pode prosseguir com o envio do formulário
        form.submit(); // Descomente isso se quiser enviar o formulário após as validações, só se quiser lkkkkk
    });
});
