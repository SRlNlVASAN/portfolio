document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.glass-container');
    
    // Initial state
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    container.style.transition = 'all 0.8s ease-out';

    // Trigger reveal
    setTimeout(() => {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});