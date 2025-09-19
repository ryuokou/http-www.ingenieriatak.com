// Ingeniería TAK - Sistema de Contacto Emergente
// Funciones para el popup de contacto
function mostrarContacto() {
    const popup = document.getElementById('contacto-emergente');
    if (popup) {
        popup.style.display = 'flex';
        setTimeout(() => {
            popup.style.opacity = '1';
        }, 10);
    }
}

function cerrarContacto() {
    const popup = document.getElementById('contacto-emergente');
    if (popup) {
        popup.style.opacity = '0';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300);
    }
}

// Nueva función para enviar comentarios por WhatsApp
function enviarComentario() {
    const comentario = document.getElementById('comentario-cotizacion').value.trim();
    
    if (comentario === '') {
        alert('Por favor, escribe un comentario para tu solicitud de cotización.');
        return;
    }
    
    // Mensaje formateado para WhatsApp
    const mensaje = `🏗️ *Solicitud de Cotización - Ingeniería TAK*\n\n📝 *Comentarios del cliente:*\n${comentario}\n\n¡Gracias por contactarnos! Te responderemos pronto.`;
    
    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Números de teléfono
    const telefono1 = '573138675274';
    const telefono2 = '573026476592';
    
    // URLs de WhatsApp
    const urlWhatsApp1 = `https://wa.me/${telefono1}?text=${mensajeCodificado}`;
    const urlWhatsApp2 = `https://wa.me/${telefono2}?text=${mensajeCodificado}`;
    
    // Abrir ambos chats de WhatsApp
    window.open(urlWhatsApp1, '_blank');
    setTimeout(() => {
        window.open(urlWhatsApp2, '_blank');
    }, 1000);
    
    // Cerrar el popup y limpiar el campo
    cerrarContacto();
    
    // Mostrar confirmación
    alert('¡Solicitud enviada! Se han abierto los chats de WhatsApp con ambos números.');
}

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('contacto-emergente');
    
    // Cerrar popup al hacer clic fuera del contenido
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
    
    // Navegación suave para los enlaces del menú
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
    
    console.log('🏗️ Ingeniería TAK - Sistema de contacto activo');
});