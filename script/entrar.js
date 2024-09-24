document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário para que possamos validar

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

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

        // Se tudo estiver correto, você pode prosseguir com o envio do formulário
        form.submit(); // Descomente isso se quiser enviar o formulário após as validações, só se quiser lkkkkk
    });
});
