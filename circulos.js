const aSection = document.querySelector('.a_section');
const circles = document.querySelectorAll('.circle');

aSection.addEventListener('mouseenter', () => {
    circles.forEach((circle, index) => {
        setTimeout(() => {
            circle.style.opacity = 1; // Mostrar círculo
            circle.style.transform = 'translateX(100px)'; // Desplazar
        }, index * 300); // Tiempo entre cada círculo
    });
});

aSection.addEventListener('mouseleave', () => {
    circles.forEach(circle => {
        circle.style.opacity = 0; // Ocultar círculo
        circle.style.transform = 'translateX(0)'; // Resetear posición
    });
});
