// Rolagem suave para todos os links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Opcional: Adicionar classe no scroll para o header mudar levemente de cor
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(11, 11, 11, 0.95)';
        header.style.padding = '15px 0';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.padding = '30px 0';
    }
});