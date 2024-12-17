document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартную отправку формы

    // Получаем значения из формы
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;

    // Проверяем, совпадают ли пароли
    if (password1 !== password2) {
        alert("Пароли не совпадают!");
        return;
    }

    // Формируем сообщение
    const message = `На почту ${email} отправлено письмо с подтверждением.`;

    // Выводим сообщение
    document.getElementById('message').textContent = message;

    // Очистка формы (по желанию)
    document.getElementById('registrationForm').reset();
});