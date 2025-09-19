// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a elementos cuando aparecen en pantalla
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .project-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Formulario de contacto
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simular envío del formulario
    const button = this.querySelector('button');
    const originalText = button.textContent;
    
    button.textContent = 'Enviando...';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = 'Mensaje Enviado ✓';
        button.style.background = '#27ae60';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            button.style.background = '#f39c12';
            this.reset();
        }, 2000);
    }, 1000);
});

// Efecto parallax sutil en el hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroAnimation = document.querySelector('.hero-animation');
    
    if (hero && heroAnimation) {
        heroAnimation.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Animación de construcción progresiva mejorada
class ConstructionAnimation {
    constructor() {
        this.init();
    }
    
    init() {
        this.createProgressiveBuild();
        this.addFloatingParticles();
        this.createDynamicCrane();
    }
    
    createProgressiveBuild() {
        const heroAnimation = document.querySelector('.construction-scene');
        if (!heroAnimation) return;
        
        // Crear múltiples edificios que se construyen
        const buildings = [
            { width: 40, height: 60, color: '#34495e', delay: 0 },
            { width: 35, height: 80, color: '#2c3e50', delay: 2000 },
            { width: 45, height: 70, color: '#34495e', delay: 4000 }
        ];
        
        buildings.forEach((building, index) => {
            const buildingEl = document.createElement('div');
            buildingEl.className = 'progressive-building';
            buildingEl.style.position = 'absolute';
            buildingEl.style.bottom = '0';
            buildingEl.style.left = `${20 + index * 50}px`;
            buildingEl.style.width = `${building.width}px`;
            buildingEl.style.height = '0';
            buildingEl.style.background = `linear-gradient(to top, ${building.color}, #5d6d7e)`;
            buildingEl.style.transition = 'height 2s ease-in-out, box-shadow 2s ease-in-out';
            buildingEl.style.borderRadius = '2px 2px 0 0';
            
            heroAnimation.appendChild(buildingEl);
            
            setTimeout(() => {
                buildingEl.style.height = `${building.height}px`;
                buildingEl.style.boxShadow = '0 5px 20px rgba(0,0,0,0.4)';
                
                // Agregar ventanas después de construir
                setTimeout(() => {
                    this.addWindowsToBuilding(buildingEl, building.width, building.height);
                }, 1500);
            }, building.delay + 1000);
        });
    }
    
    addWindowsToBuilding(building, width, height) {
        const windowsPerRow = Math.floor(width / 12);
        const rows = Math.floor(height / 15);
        
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < windowsPerRow; col++) {
                const window = document.createElement('div');
                window.style.position = 'absolute';
                window.style.width = '6px';
                window.style.height = '8px';
                window.style.background = Math.random() > 0.3 ? '#f39c12' : '#34495e';
                window.style.left = `${6 + col * 12}px`;
                window.style.top = `${10 + row * 15}px`;
                window.style.opacity = '0';
                window.style.transition = 'opacity 0.8s ease';
                window.style.borderRadius = '1px';
                window.style.boxShadow = '0 0 4px rgba(243, 156, 18, 0.5)';
                
                building.appendChild(window);
                
                setTimeout(() => {
                    window.style.opacity = '1';
                    // Efecto de parpadeo ocasional
                    setInterval(() => {
                        if (Math.random() > 0.95) {
                            window.style.opacity = window.style.opacity === '1' ? '0.3' : '1';
                        }
                    }, 2000);
                }, (row * windowsPerRow + col) * 100);
            }
        }
    }
    
    addFloatingParticles() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            particle.style.position = 'absolute';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = 'rgba(255, 255, 255, 0.4)';
            particle.style.borderRadius = '50%';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
            particle.style.animationDelay = `${Math.random() * 2}s`;
            
            hero.appendChild(particle);
        }
        
        // Agregar keyframes para las partículas flotantes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { 
                    transform: translateY(0) translateX(0) rotate(0deg); 
                    opacity: 0.4; 
                }
                25% { 
                    transform: translateY(-20px) translateX(10px) rotate(90deg); 
                    opacity: 0.8; 
                }
                50% { 
                    transform: translateY(-40px) translateX(-10px) rotate(180deg); 
                    opacity: 1; 
                }
                75% { 
                    transform: translateY(-20px) translateX(15px) rotate(270deg); 
                    opacity: 0.6; 
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    createDynamicCrane() {
        const craneArm = document.querySelector('.crane-arm');
        if (!craneArm) return;
        
        // Hacer que la grúa responda al movimiento del mouse
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const rotation = (mouseX - 0.5) * 30; // Rango de -15 a 15 grados
            
            craneArm.style.transform = `translateX(-50%) rotate(${rotation}deg)`;
        });
    }
}

// Inicializar animación de construcción
document.addEventListener('DOMContentLoaded', () => {
    new ConstructionAnimation();
});

// Contador animado para estadísticas (se puede agregar después)
class AnimatedCounter {
    constructor(element, target, duration = 2000) {
        this.element = element;
        this.target = target;
        this.duration = duration;
        this.animate();
    }
    
    animate() {
        const start = 0;
        const increment = this.target / (this.duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            this.element.textContent = Math.floor(current);
            
            if (current >= this.target) {
                this.element.textContent = this.target;
                clearInterval(timer);
            }
        }, 16);
    }
}

// Efecto de escritura para el título
class TypeWriter {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    
    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];
        
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        
        this.element.innerHTML = `<span class="txt">${this.txt}</span>`;
        
        let typeSpeed = 300;
        
        if (this.isDeleting) {
            typeSpeed /= 2;
        }
        
        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

// Activar efectos adicionales después de cargar la página
window.addEventListener('load', () => {
    // Agregar clase para animaciones finales
    document.body.classList.add('loaded');
    
    // Efecto de máquina de escribir en el título
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            heroTitle.textContent += originalText[i];
            i++;
            
            if (i >= originalText.length) {
                clearInterval(typeInterval);
                // Agregar cursor parpadeante
                const cursor = document.createElement('span');
                cursor.textContent = '|';
                cursor.style.animation = 'blink 1s infinite';
                cursor.style.color = '#f39c12';
                heroTitle.appendChild(cursor);
                
                // Agregar keyframes para el cursor
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes blink {
                        0%, 50% { opacity: 1; }
                        51%, 100% { opacity: 0; }
                    }
                `;
                document.head.appendChild(style);
                
                // Remover cursor después de 3 segundos
                setTimeout(() => {
                    cursor.remove();
                }, 3000);
            }
        }, 100);
    }
    
    // Sonidos de construcción simulados (efectos visuales)
    createConstructionEffects();
});

// Crear efectos visuales de construcción
function createConstructionEffects() {
    const constructionZone = document.querySelector('.construction-scene');
    if (!constructionZone) return;
    
    // Efecto de chispas de soldadura
    setInterval(() => {
        if (Math.random() > 0.7) {
            createSpark(constructionZone);
        }
    }, 2000);
    
    // Efecto de polvo de construcción
    setInterval(() => {
        if (Math.random() > 0.8) {
            createDustCloud(constructionZone);
        }
    }, 3000);
}

function createSpark(container) {
    for (let i = 0; i < 5; i++) {
        const spark = document.createElement('div');
        spark.style.position = 'absolute';
        spark.style.width = '2px';
        spark.style.height = '2px';
        spark.style.background = '#f39c12';
        spark.style.borderRadius = '50%';
        spark.style.left = `${100 + Math.random() * 50}px`;
        spark.style.top = `${200 + Math.random() * 50}px`;
        spark.style.boxShadow = '0 0 6px #f39c12';
        spark.style.animation = `sparkle ${0.5 + Math.random() * 0.5}s ease-out forwards`;
        
        container.appendChild(spark);
        
        setTimeout(() => {
            spark.remove();
        }, 1000);
    }
    
    // Agregar keyframes para las chispas
    if (!document.querySelector('#spark-style')) {
        const style = document.createElement('style');
        style.id = 'spark-style';
        style.textContent = `
            @keyframes sparkle {
                0% { 
                    transform: scale(1) translate(0, 0); 
                    opacity: 1; 
                }
                100% { 
                    transform: scale(0) translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px); 
                    opacity: 0; 
                }
            }
        `;
        document.head.appendChild(style);
    }
}

function createDustCloud(container) {
    const dust = document.createElement('div');
    dust.style.position = 'absolute';
    dust.style.width = '20px';
    dust.style.height = '20px';
    dust.style.background = 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)';
    dust.style.borderRadius = '50%';
    dust.style.left = `${80 + Math.random() * 100}px`;
    dust.style.bottom = '10px';
    dust.style.animation = 'dustRise 3s ease-out forwards';
    
    container.appendChild(dust);
    
    setTimeout(() => {
        dust.remove();
    }, 3000);
    
    // Agregar keyframes para el polvo
    if (!document.querySelector('#dust-style')) {
        const style = document.createElement('style');
        style.id = 'dust-style';
        style.textContent = `
            @keyframes dustRise {
                0% { 
                    transform: translateY(0) scale(1); 
                    opacity: 0.6; 
                }
                100% { 
                    transform: translateY(-50px) scale(2); 
                    opacity: 0; 
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Función para mostrar el popup de contacto
function mostrarContacto() {
    const popup = document.getElementById('contacto-emergente');
    popup.style.display = 'flex';
    // Animación de entrada
    setTimeout(() => {
        popup.style.opacity = '1';
    }, 10);
}

// Función para cerrar el popup de contacto
function cerrarContacto() {
    const popup = document.getElementById('contacto-emergente');
    popup.style.opacity = '0';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300);
}

// Cerrar popup al hacer clic fuera del contenido
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('contacto-emergente');
    
    if (popup) {
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                cerrarContacto();
            }
        });
    }
    
    // Cerrar popup con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            cerrarContacto();
        }
    });
});

// Navegación suave para los enlaces del menú
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Efecto de scroll para el header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 58, 138, 0.95))';
        header.style.backdropFilter = 'blur(15px)';
    } else {
        header.style.background = 'linear-gradient(135deg, var(--primary-blue), var(--dark-blue))';
        header.style.backdropFilter = 'blur(10px)';
    }
});

// Animación de aparición de elementos al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .project-item, .feature-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

console.log('🏗️ Ingeniería TAK - Sitio web cargado correctamente');