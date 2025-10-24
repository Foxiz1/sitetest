// Упрощенный скрипт для подстраниц
document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления элементов при загрузке страницы
    const elements = document.querySelectorAll('.logo, .subtitle, .link-button');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 150);
    });

    // Анимация при наведении на кнопки
    const buttons = document.querySelectorAll('.link-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Эффект пульсации для логотипа
    const logo = document.querySelector('.logo');
    if (logo) {
        setInterval(() => {
            logo.style.transform = 'scale(1.05)';
            setTimeout(() => {
                logo.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }

    // Анимация волнистых линий
    const wavyLines = document.querySelectorAll('.wavy-line');
    wavyLines.forEach((line, index) => {
        line.style.animationDelay = `${index * 0.5}s`;
    });
});
