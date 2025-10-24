// Общий скрипт авторизации для всех страниц
const AUTHORIZED_EMAILS = [
    'sasapirhavko@gmail.com',
    'd61429225@gmail.com'
    // Добавьте сюда email-адреса ваших бустеров
];

// Проверка авторизации при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, авторизован ли пользователь
    const isAuthorized = localStorage.getItem('brx_authorized') === 'true';
    const userEmail = localStorage.getItem('brx_user_email');
    
    // Проверяем, находимся ли мы на главной странице
    const isMainPage = window.location.pathname === '/index.html' || 
                      window.location.pathname === '/' || 
                      window.location.pathname.endsWith('/') ||
                      window.location.pathname === '/index.html' ||
                      window.location.pathname.includes('index.html');
    
    if (!isAuthorized || !userEmail || !AUTHORIZED_EMAILS.includes(userEmail)) {
        // Если пользователь не авторизован, перенаправляем на главную страницу
        if (!isMainPage) {
            window.location.href = '/index.html';
        }
    }
});

// Функция выхода из системы
function logout() {
    localStorage.removeItem('brx_authorized');
    localStorage.removeItem('brx_user_email');
    window.location.href = '/index.html';
}
