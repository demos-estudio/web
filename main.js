// Language Translations
const translations = {
    es: {
        // Navigation
        nav_home: 'Inicio',
        nav_portfolio: 'Portafolio',
        nav_services: 'Servicios',
        //nav_pricing: 'Precios',
        nav_about: 'Nosotros',
        nav_contact: 'Contacto',
        
        // Hero
        hero_badge: 'Estudio de Fotografía en La Habana',
        hero_title: 'En el Mundo, tu <span>Marca</span>',
        hero_subtitle: 'Te ayudamos a construir tu imagen de marca personal o corporativa para que puedas presentarte como el profesional competente que eres.',
        //hero_cta_primary: 'Ver Precios',
        hero_cta_secondary: 'Reservar Sesión',
        
        // Portfolio
        portfolio_tag: 'Nuestro Trabajo',
        portfolio_title: 'Portafolio',
        portfolio_subtitle: 'Explora nuestra colección de fotografías de marca personal, corporativa, CV y productos.',
        filter_all: 'Todos',
        filter_marca_personal: 'Marca Personal',
        filter_marca_corporativa: 'Marca Corporativa',
        filter_foto_cv: 'Foto CV',
        filter_foto_producto: 'Foto Producto',
        portfolio_item_1_title: 'Marca Personal',
        portfolio_item_1_desc: 'Tu esencia, tu imagen',
        portfolio_item_1b_title: 'Marca Personal',
        portfolio_item_1b_desc: 'Autenticidad',
        portfolio_item_2_title: 'Marca Corporativa',
        portfolio_item_2_desc: 'Tu proyecto, tu imagen',
        portfolio_item_2b_title: 'Marca Corporativa',
        portfolio_item_2b_desc: 'Profesionalismo',
        portfolio_item_3_title: 'Foto CV',
        portfolio_item_3_desc: 'Tu mejor imagen profesional',
        portfolio_item_3b_title: 'Foto CV',
        portfolio_item_3b_desc: 'Primera impresión',
        portfolio_item_4_title: 'Foto Producto',
        portfolio_item_4_desc: 'Tu producto destacado',
        portfolio_item_4b_title: 'Foto Producto',
        portfolio_item_4b_desc: 'Calidad profesional',
        
        // Services
        services_tag: 'Lo Que Ofrecemos',
        services_title: 'Servicios',
        services_subtitle: 'Construimos tu imagen de marca para que puedas dejar tu huella en el mundo.',
        service_1_title: 'Construcción de Imagen de Marca',
        service_1_desc: 'Te ayudamos a definir y capturar la esencia de tu marca personal o corporativa.',
        service_1_feat_1: 'Fotografía profesional',
        service_1_feat_2: 'Asesoría de marca',
        service_1_feat_3: 'Landing page incluida',
        service_1_note_title: 'Para quienes:',
        service_1_note_desc: 'Emprendedores, artistas, profesionales y pequeños negocios que quieren destacar.',
        service_2_title: 'Fotografía Profesional',
        service_2_desc: 'Sesiones de estudio o exteriores para capturar tu mejor imagen.',
        service_2_feat_1: 'Fotos digitales en 4K',
        service_2_feat_2: 'Monitoreo en tiempo real',
        service_2_feat_3: 'Edición profesional',
        service_2_note_title: 'Locaciones:',
        service_2_note_desc: 'Estudio en Vedado o exteriores en la ubicación que prefieras.',
        service_3_title: 'Alquiler de Estudio',
        service_3_desc: 'Equipos y espacio disponible para fotógrafos independientes.',
        service_3_feat_1: 'Equipos Godox y Sony',
        service_3_feat_2: 'Fondos intercambiables',
        service_3_feat_3: 'Tarifa por hora',
        service_3_note_title: 'Incluye:',
        service_3_note_desc: 'Wi-Fi, electricidad garantizada y asistencia técnica.',
        
        // Pricing
        //pricing_tag: 'Planes y Precios',
        //pricing_title: 'Nuestras Tarifas',
        //pricing_subtitle: 'Contáctanos para personalizar tu paquete.',
        //pricing_studio_title: 'Construcción de Imagen de Marca',
        //pricing_studio_subtitle: 'Paquete completo',
        //pricing_outdoor_title: 'Fotografía Profesional',
        //pricing_outdoor_subtitle: 'Sesión de fotos',
        //pricing_rental_title: 'Alquiler de Estudio',
        //pricing_rental_subtitle: 'Equipos y espacio',
        //pricing_brand_1: 'Fotografía profesional',
        //pricing_brand_2: 'Asesoría de marca',
        //pricing_brand_3: 'Landing page básica',
        //pricing_brand_4: 'Entrega en 7 días',
        //pricing_photo_1: 'Fotos digitales en 4K',
        //pricing_photo_2: 'Edición profesional',
        //pricing_photo_3: 'Monitoreo en tiempo real',
        //pricing_photo_4: 'Entrega en 20 días',
        //pricing_rental_1: 'Estudio + Wi-Fi',
        //pricing_rental_2: 'Electricidad garantizada',
        //pricing_rental_3: 'Asistencia técnica',
        //pricing_rental_4: 'Tarifa por hora',
        
        // About
        about_tag: 'Conócenos',
        about_title: 'Sobre Demos',
        about_subtitle: 'Demos es el primer estudio de fotografía especializado en construir tu imagen de marca.',
        about_p1: 'Demos toma su nombre de la palabra griega para "pueblo". También significa "versión incompleta", porque valoramos la construcción colectiva y lo que cada cliente aporta al proceso.',
        about_p2: 'Descubrimos que los cubanos necesitan presentarse como profesionales competentes en un mercado cada vez más dominado por las imágenes. No es necesario tener una empresa para tener una imagen.',
        about_p3: 'Antes de ponerte frente al lente, te preguntamos quién eres, qué deseas transmitir y cómo quieres que el mundo te conoce. Trabajamos para que puedas sentirte orgulloso de decir "este soy yo".',
        reviews_title: 'Lo Que Dicen Nuestros Clientes',
        review_1: '"Increíble experiencia. Las fotos quedaron espectaculares y el trato fue excelente. Definitivamente volveré."',
        review_2: '"Me encantaron asere, impresionante y las fotos... lo máximo."',
        review_3: '"Hicimos la sesión de quinceaños de mi hija y fue perfecto. El monitoreo en vivo nos permitió elegir las mejores tomas."',
        
        // Terms
        terms_tag: 'Información Legal',
        terms_title: 'Términos y Condiciones',
        terms_subtitle: 'Lee nuestras políticas para una experiencia transparente y sin sorpresas.',
        terms_1_title: 'Reserva y Pagos',
        terms_1_desc: 'Para reservar tu sesión fotográfica, se requiere un depósito de 5 USD que será descontado del total a pagar al final. Este depósito confirma tu cita y garantiza la disponibilidad del estudio en la fecha y hora solicitadas.',
        terms_2_title: 'Plazo de Entrega',
        terms_2_desc: 'El plazo máximo de entrega de tus fotografías editadas es de 30 días calendario desde la fecha de la sesión. Sin embargo, en la mayoría de los casos entregamos mucho antes. Si necesitas un servicio express, consulta nuestras opciones de entrega rápida con costo adicional.',
        terms_3_title: 'Política de Cancelación',
        terms_3_desc: 'Si necesitas cancelar o reprogramar tu sesión, debes notificarnos con al menos 4 días de anticipación para proceder con la devolución completa de tu depósito. Cancelaciones con menos de 4 días de anticipación no son reembolsables, aunque puedes reprogramar una sola vez sin costo adicional.',
        terms_4_title: 'Derechos de Autor',
        terms_4_desc: 'Todos los derechos de autor de las fotografías realizadas pertenecen a Demos Estudio. El cliente recibe licencia de uso personal de las imágenes editadas para redes sociales, impresiones personales y usos no comerciales. Para uso comercial o publicitario, se requiere un acuerdo adicional por escrito.',
        terms_5_title: 'Uso de Imágenes para Portafolio',
        terms_5_desc: 'Demos Estudio se reserva el derecho de utilizar las fotografías realizadas en nuestro portafolio, sitio web, redes sociales y materiales promocionales, salvo que el cliente solicite expresamente lo contrario por escrito antes de la sesión.',
        
        // Contact
        contact_tag: 'Contáctanos',
        contact_title: '¿Listo Para Tu Sesión?',
        contact_subtitle: 'Escríbenos y reserva tu fecha. podemos ponernos de acuerdo.',
        contact_location_title: 'Ubicación',
        contact_whatsapp_title: 'WhatsApp',
        contact_instagram_title: 'Instagram',
        contact_map_open: 'Abrir en Google Maps',
        booking_title: 'Reserva tu Sesión',
        booking_desire: '¿Qué te interesa?',
        booking_session: 'Sesión de fotos',
        booking_rental: 'Alquilar el estudio',
        booking_type: 'Tipo de Sesión',
        booking_studio: 'Estudio',
        booking_outdoor: 'Exterior',
        booking_photos: 'Cantidad de Fotos',
        booking_more: '+20',
        booking_time: 'Tiempo',
        booking_equipment: 'Incluir Equipos',
        booking_none: 'No, ninguno',
        booking_flashes: 'Solo Flashes',
        booking_complete: 'Completo',
        booking_send: 'Enviar por WhatsApp',
        booking_note: 'El mensaje se abrirá en WhatsApp con la información seleccionada.',
        
        // WhatsApp
        whatsapp_text: '¡Contáctanos!'
    },
    en: {
        // Navigation
        nav_home: 'Home',
        nav_portfolio: 'Portfolio',
        nav_services: 'Services',
        //nav_pricing: 'Pricing',
        nav_about: 'About',
        nav_contact: 'Contact',
        
        // Hero
        hero_badge: 'Photography Studio in Havana',
        hero_title: 'Your <span>Brand</span> in the World',
        hero_subtitle: 'We help you build your personal or corporate brand image so you can present yourself as the competent professional you are.',
        hero_cta_primary: 'View Prices',
        hero_cta_secondary: 'Book Session',
        
        // Portfolio
        portfolio_tag: 'Our Work',
        portfolio_title: 'Portfolio',
        portfolio_subtitle: 'Explore our collection of personal brand, corporate, CV and product photography.',
        filter_all: 'All',
        filter_marca_personal: 'Personal Brand',
        filter_marca_corporativa: 'Corporate Brand',
        filter_foto_cv: 'CV Photo',
        filter_foto_producto: 'Product Photo',
        portfolio_item_1_title: 'Personal Brand',
        portfolio_item_1_desc: 'Your essence, your image',
        portfolio_item_1b_title: 'Personal Brand',
        portfolio_item_1b_desc: 'Authenticity',
        portfolio_item_2_title: 'Corporate Brand',
        portfolio_item_2_desc: 'Your project, your image',
        portfolio_item_2b_title: 'Corporate Brand',
        portfolio_item_2b_desc: 'Professionalism',
        portfolio_item_3_title: 'CV Photo',
        portfolio_item_3_desc: 'Your best professional image',
        portfolio_item_3b_title: 'CV Photo',
        portfolio_item_3b_desc: 'First impression',
        portfolio_item_4_title: 'Product Photo',
        portfolio_item_4_desc: 'Your product featured',
        portfolio_item_4b_title: 'Product Photo',
        portfolio_item_4b_desc: 'Professional quality',
        
        // Services
        services_tag: 'What We Offer',
        services_title: 'Services',
        services_subtitle: 'We build your brand image so you can leave your mark on the world.',
        service_1_title: 'Brand Image Building',
        service_1_desc: 'We help you define and capture the essence of your personal or corporate brand.',
        service_1_feat_1: 'Professional photography',
        service_1_feat_2: 'Brand consulting',
        service_1_feat_3: 'Landing page included',
        service_1_note_title: 'For:',
        service_1_note_desc: 'Entrepreneurs, artists, professionals and small businesses that want to stand out.',
        service_2_title: 'Professional Photography',
        service_2_desc: 'Studio or outdoor sessions to capture your best image.',
        service_2_feat_1: '4K digital photos',
        service_2_feat_2: 'Real-time monitoring',
        service_2_feat_3: 'Professional editing',
        service_2_note_title: 'Locations:',
        service_2_note_desc: 'Studio in Vedado or outdoor at your preferred location.',
        service_3_title: 'Studio Rental',
        service_3_desc: 'Equipment and space available for independent photographers.',
        service_3_feat_1: 'Godox and Sony equipment',
        service_3_feat_2: 'Interchangeable backgrounds',
        service_3_feat_3: 'Hourly rate',
        service_3_note_title: 'Includes:',
        service_3_note_desc: 'Wi-Fi, guaranteed electricity and technical assistance.',
        
        // Pricing
        //pricing_tag: 'Plans & Pricing',
        //pricing_title: 'Our Rates',
        //pricing_subtitle: 'Contact us to customize your package.',
        //pricing_studio_title: 'Brand Image Building',
        //pricing_studio_subtitle: 'Complete package',
        //pricing_outdoor_title: 'Professional Photography',
        //pricing_outdoor_subtitle: 'Photo session',
        //pricing_rental_title: 'Studio Rental',
        //pricing_rental_subtitle: 'Equipment and space',
        //pricing_brand_1: 'Professional photography',
        //pricing_brand_2: 'Brand consulting',
        //pricing_brand_3: 'Basic landing page',
        //pricing_brand_4: 'Delivery in 7 days',
        //pricing_photo_1: '4K digital photos',
        //pricing_photo_2: 'Professional editing',
        //pricing_photo_3: 'Real-time monitoring',
        //pricing_photo_4: 'Delivery in 20 days',
        //pricing_rental_1: 'Studio + Wi-Fi',
        //pricing_rental_2: 'Guaranteed electricity',
        //pricing_rental_3: 'Technical assistance',
        //pricing_rental_4: 'Hourly rate',
        
        // About
        about_tag: 'Meet Us',
        about_title: 'About Demos',
        about_subtitle: 'Demos is the first photography studio specialized in building your brand image.',
        about_p1: 'Demos takes its name from the Greek word for "people". It also means "incomplete version", because we value collective construction and what each client brings to the process.',
        about_p2: 'We discovered that Cubans need to present themselves as competent professionals in an increasingly image-driven market. You dont need to have a company to have an image.',
        about_p3: 'Before pointing the lens at you, we ask who you are, what you want to convey and how you want the world to know you. We work so you can feel proud to say "this is me".',
        reviews_title: 'What Our Clients Say',
        review_1: '"Incredible experience. The photos turned out spectacular and the service was excellent. I will definitely come back."',
        review_2: '"I loved it, impressive and the photos... the best."',
        review_3: '"We did my daughter\'s 15th birthday session and it was perfect. Live monitoring allowed us to choose the best shots."',
        
        // Terms
        terms_tag: 'Legal Information',
        terms_title: 'Terms & Conditions',
        terms_subtitle: 'Read our policies for a transparent and hassle-free experience.',
        terms_1_title: 'Booking & Payments',
        terms_1_desc: 'To book your photo session, a deposit of 5 USD is required which will be deducted from the total to pay at the end. This deposit confirms your appointment and guarantees the availability of the studio on the requested date and time.',
        terms_2_title: 'Delivery Time',
        terms_2_desc: 'The maximum delivery time for your edited photographs is 30 calendar days from the session date. However, in most cases we deliver much earlier. If you need express service, consult our fast delivery options with additional cost.',
        terms_3_title: 'Cancellation Policy',
        terms_3_desc: 'If you need to cancel or reschedule your session, you must notify us at least 4 days in advance to proceed with a full refund of your deposit. Cancellations with less than 4 days notice are non-refundable, although you can reschedule once at no additional cost.',
        terms_4_title: 'Copyright',
        terms_4_desc: 'All copyrights of photographs taken belong to Demos Studio. The client receives a license for personal use of edited images for social networks, personal prints and non-commercial uses. For commercial or advertising use, an additional written agreement is required.',
        terms_5_title: 'Use of Images for Portfolio',
        terms_5_desc: 'Demos Studio reserves the right to use photographs taken in our portfolio, website, social networks and promotional materials, unless the client expressly requests otherwise in writing before the session.',
        
        // Contact
        contact_tag: 'Contact Us',
        contact_title: 'Ready For Your Session?',
        contact_subtitle: 'Write to us and book your date. We can work it out.',
        contact_location_title: 'Location',
        contact_whatsapp_title: 'WhatsApp',
        contact_instagram_title: 'Instagram',
        contact_map_open: 'Open in Google Maps',
        booking_title: 'Book Your Session',
        booking_desire: 'What interests you?',
        booking_session: 'Photo session',
        booking_rental: 'Rent the studio',
        booking_type: 'Session Type',
        booking_studio: 'Studio',
        booking_outdoor: 'Outdoor',
        booking_photos: 'Number of Photos',
        booking_more: '+20',
        booking_time: 'Time',
        booking_equipment: 'Include Equipment',
        booking_none: 'No, none',
        booking_flashes: 'Flashes Only',
        booking_complete: 'Complete',
        booking_send: 'Send via WhatsApp',
        booking_note: 'The message will open in WhatsApp with the selected information.',
        
        // WhatsApp
        whatsapp_text: 'Contact us!'
    }
};

let currentLang = 'es';

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
    }
});

// Language Toggle
const langToggle = document.getElementById('langToggle');
langToggle?.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    langToggle.textContent = currentLang === 'es' ? 'EN' : 'ES';
    updateLanguage();
});

function updateLanguage() {
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        const text = translations[currentLang][key];
        if (text) {
            if (text.includes('<')) {
                el.innerHTML = text;
            } else {
                el.textContent = text;
            }
        }
    });
    document.documentElement.lang = currentLang;
}

// Scroll Animations (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// Nav Scroll Effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            navLinks.classList.remove('open');
        }
    });
});

// WhatsApp Float visibility on booking section (mobile)
const whatsappFloat = document.querySelector('.whatsapp-float');
const bookingSection = document.getElementById('booking');

function checkBookingVisibility() {
    if (!whatsappFloat || !bookingSection) return;
    const rect = bookingSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5;
    
    if (window.innerWidth < 969) {
        if (isVisible) {
            whatsappFloat.classList.add('visible-text');
        } else {
            whatsappFloat.classList.remove('visible-text');
        }
    } else {
        whatsappFloat.classList.remove('visible-text');
    }
}

if (window.location.hash === '#booking') {
    setTimeout(checkBookingVisibility, 100);
}

window.addEventListener('scroll', checkBookingVisibility);
window.addEventListener('resize', checkBookingVisibility);

checkBookingVisibility();

// Accordion Accessibility
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const expanded = header.getAttribute('aria-expanded') === 'true';
        header.setAttribute('aria-expanded', !expanded);
        const content = header.nextElementSibling;
        if (content) {
            content.classList.toggle('open');
        }
    });
    header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            header.click();
        }
    });
});

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => item.style.opacity = '1', 50);
            } else {
                item.style.opacity = '0';
                setTimeout(() => item.style.display = 'none', 300);
            }
        });
    });
});

// Booking Form Logic
const bookingForm = document.getElementById('bookingForm');
const deseoRadios = bookingForm?.querySelectorAll('input[name="deseo"]');
const sesionBlock = document.getElementById('sesionBlock');
const demosTypeBlock = document.getElementById('demosTypeBlock');
const cantidadBlock = document.getElementById('cantidadBlock');
const tiempoBlock = document.getElementById('tiempoBlock');
const equiposBlock = document.getElementById('equiposBlock');
const sendWs = document.getElementById('sendWs');
const waNumber = '5352002606'; // Número de WhatsApp de Demos Estudio
const fotos5Option = document.getElementById('fotos5');

function updateFormVisibility() {
    const deseo = bookingForm?.querySelector('input[name="deseo"]:checked')?.value;
    if (deseo === 'sesion') {
        sesionBlock?.classList.add('active');
        demosTypeBlock?.classList.remove('active');
        cantidadBlock?.classList.add('active');
        tiempoBlock?.classList.remove('active');
        equiposBlock?.classList.remove('active');
        fotos5Option?.parentElement?.classList.remove('hidden');
    } else if (deseo === 'servicio_demos') {
        sesionBlock?.classList.remove('active');
        demosTypeBlock?.classList.add('active');
        cantidadBlock?.classList.add('active');
        tiempoBlock?.classList.remove('active');
        equiposBlock?.classList.remove('active');
        fotos5Option?.parentElement?.classList.add('hidden');
    } else {
        sesionBlock?.classList.remove('active');
        demosTypeBlock?.classList.remove('active');
        cantidadBlock?.classList.remove('active');
        tiempoBlock?.classList.add('active');
        equiposBlock?.classList.add('active');
        fotos5Option?.parentElement?.classList.remove('hidden');
    }
}

function setDefaultOptions() {
    const deseo = bookingForm?.querySelector('input[name="deseo"]:checked')?.value;
    if (deseo === 'sesion') {
        const tipoSesion = bookingForm?.querySelector('input[name="tipo_sesion"]:checked');
        if (!tipoSesion) {
            const defaultTipo = bookingForm?.querySelector('input[name="tipo_sesion"]');
            defaultTipo && (defaultTipo.checked = true);
        }
    } else if (deseo === 'servicio_demos') {
        const tipoDemos = bookingForm?.querySelector('input[name="tipo_sesion_demos"]:checked');
        if (!tipoDemos) {
            const defaultTipoDemos = bookingForm?.querySelector('input[name="tipo_sesion_demos"]');
            defaultTipoDemos && (defaultTipoDemos.checked = true);
        }
    } else if (deseo === 'alquiler') {
        const tiempo = bookingForm?.querySelector('input[name="tiempo"]:checked');
        if (!tiempo) {
            const defaultTiempo = bookingForm?.querySelector('input[name="tiempo"]');
            defaultTiempo && (defaultTiempo.checked = true);
        }
        const equipos = bookingForm?.querySelector('input[name="equipos"]:checked');
        if (!equipos) {
            const defaultEquipos = bookingForm?.querySelector('input[name="equipos"]');
            defaultEquipos && (defaultEquipos.checked = true);
        }
    }
    const cantidad = bookingForm?.querySelector('input[name="cantidad"]:checked');
    if (!cantidad) {
        const defaultCantidad = bookingForm?.querySelector('input[name="cantidad"]');
        defaultCantidad && (defaultCantidad.checked = true);
    }
}

deseoRadios?.forEach(r => r.addEventListener('change', () => {
    updateFormVisibility();
    setDefaultOptions();
}));
updateFormVisibility();
setDefaultOptions();

function buildMessage() {
    const deseo = bookingForm?.querySelector('input[name="deseo"]:checked')?.value || '';
    const tipo = bookingForm?.querySelector('input[name="tipo_sesion"]:checked')?.value || '';
    const tipoDemos = bookingForm?.querySelector('input[name="tipo_sesion_demos"]:checked')?.value || '';
    const cantidad = bookingForm?.querySelector('input[name="cantidad"]:checked')?.value || '';
    const tiempo = bookingForm?.querySelector('input[name="tiempo"]:checked')?.value || '';
    const equipos = bookingForm?.querySelector('input[name="equipos"]:checked')?.value || '';

    let msg = currentLang === 'es' ? 'Hola, me interesa ' : 'Hello, I am interested in ';
    if (deseo === 'sesion') {
        msg += currentLang === 'es' ? 'una sesión de fotos' : 'a photo session';
        if (tipo) msg += currentLang === 'es' ? ` en ${tipo}` : ` in ${tipo}`;
        if (cantidad) msg += currentLang === 'es' ? `, podrían ser unas ${cantidad} fotos` : `, could be about ${cantidad} photos`;
    } else if (deseo === 'servicio_demos') {
        msg += currentLang === 'es' ? 'Servicio Demos' : 'Demos Service';
        if (tipoDemos) msg += currentLang === 'es' ? `, tipo: ${tipoDemos}` : `, type: ${tipoDemos}`;
        if (cantidad) msg += currentLang === 'es' ? `, ${cantidad} fotos` : `, ${cantidad} photos`;
    } else {
        msg += currentLang === 'es' ? 'alquilar el estudio' : 'renting the studio';
        if (tiempo) msg += currentLang === 'es' ? `, tiempo estimado: ${tiempo}` : `, estimated time: ${tiempo}`;
        if (equipos) msg += currentLang === 'es' ? `. Incluir equipos: ${equipos}.` : `. Include equipment: ${equipos}.`;
    }
    return msg;
}

sendWs?.addEventListener('click', () => {
    const text = buildMessage();
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
});

// Particles Animation
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (15 + Math.random() * 10) + 's';
    particlesContainer.appendChild(particle);
}

// Mapa de ubicación (Leaflet + OpenStreetMap)
const mapEl = document.getElementById('map');
if (mapEl && typeof L !== 'undefined') {
    const lat = 23.139901, lng = -82.381151;
    const map = L.map('map').setView([lat, lng], 17);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    L.marker([lat, lng]).addTo(map)
        .bindPopup('Demos Estudio<br>Calle N / 23 y 25, Vedado, La Habana');
}

