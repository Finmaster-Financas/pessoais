// Contador regressivo
function startTimer() {
    // Definir o tempo inicial (15 minutos)
    let minutes = 15;
    let seconds = 0;
    
    // Atualizar o timer a cada segundo
    const timer = setInterval(function() {
        // Atualizar os elementos do timer
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        
        // Decrementar o tempo
        if (seconds > 0) {
            seconds--;
        } else {
            if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else {
                // Tempo esgotado
                clearInterval(timer);
                // Opcional: adicionar alguma ação quando o tempo acabar
            }
        }
    }, 1000);
}

// Simulação de clique no vídeo
document.addEventListener('DOMContentLoaded', function() {
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {        });
    }
    
    // Iniciar o contador regressivo
    startTimer();
    
    // Adicionar efeito de scroll suave para os links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Adicionar efeito de pulsação ao botão CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();        });
    }
});

// Animação de contagem para o número de pessoas que usaram o método
function animateCounter() {
    const counterElement = document.querySelector('.counter-number');
    if (!counterElement) return;
    
    const finalValue = parseInt(counterElement.textContent);
    let currentValue = 0;
    const duration = 2000; // 2 segundos
    const frameRate = 60;
    const totalFrames = duration / (1000 / frameRate);
    const increment = finalValue / totalFrames;
    
    const animation = setInterval(function() {
        currentValue += increment;
        if (currentValue >= finalValue) {
            clearInterval(animation);
            counterElement.textContent = finalValue;
        } else {
            counterElement.textContent = Math.floor(currentValue);
        }
    }, 1000 / frameRate);
}

// Observador de interseção para iniciar a animação quando o elemento estiver visível
document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.querySelector('.counter');
    if (!counterElement) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(counterElement);
});

