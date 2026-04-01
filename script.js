/* ============================================
   ARMAN GRAPHICS - Main Website Script
   CMYK Theme | No-Price Cards | Image Hover Effect
   
   ✏️ HOW TO EDIT:
   - Business info: Edit BUSINESS object below
   - WhatsApp number: Change phone in BUSINESS
   - Sample products: Edit SAMPLE_PRODUCTS array
   - Product images: Replace image URLs in products
   - Testimonials: Edit TESTIMONIALS array
   ============================================ */

// ============================================
// ✏️ BUSINESS CONFIGURATION
// Edit your business details here
// ============================================
const BUSINESS = {
    name: "Arman Graphics",
    tagline: "Your One-Stop Printing & Branding Solution",
    // ✏️ Replace with your WhatsApp number (country code + number, no + sign)
    phone: "919876543210",
    email: "armangraphics@gmail.com",
    address: "Main Market, Ambedkar Nagar, Uttar Pradesh, India - 224122",
    location: "Ambedkar Nagar, UP",
    mapLink: "https://maps.google.com/?q=Ambedkar+Nagar+Uttar+Pradesh+India",
    // ✏️ Replace with your social media links
    instagram: "https://instagram.com/armangraphics",
    facebook: "https://facebook.com/armangraphics",
    youtube: "https://youtube.com/@armangraphics"
};

// ============================================
// ✏️ SAMPLE PRODUCTS (Loaded on first visit)
// Add, remove, or edit products here
//
// ✏️ HOW TO CHANGE PRODUCT IMAGES:
// Replace the "image" and "imageAlt" URLs with your own image paths
// Example: "image": "images/visiting-card-front.jpg"
//          "imageAlt": "images/visiting-card-back.jpg"
// 
// Current images are placeholders from picsum.photos
// ============================================
const SAMPLE_PRODUCTS = [
    {
        id: 1,
        name: "Visiting Card Printing",
        category: "cards",
        description: "Premium quality visiting cards with glossy/matte finish. Make a lasting first impression.",
        icon: "fa-solid fa-id-card",
        gradient: "linear-gradient(135deg, #00B5E2, #0095BC)",
        // ✏️ Replace these image URLs with your actual product photos
        image: "https://picsum.photos/seed/arman-vcard/400/300",
        imageAlt: "https://picsum.photos/seed/arman-vcard-back/400/300",
        offer: true,
        offerText: "🔥 BEST SELLER"
    },
    {
        id: 2,
        name: "Flex & Banner Printing",
        category: "banners",
        description: "High-quality flex banners for shops, events, and promotions. Vibrant colors guaranteed.",
        icon: "fa-solid fa-flag",
        gradient: "linear-gradient(135deg, #D6007F, #E6339F)",
        image: "https://picsum.photos/seed/arman-banner/400/300",
        imageAlt: "https://picsum.photos/seed/arman-banner-view/400/300",
        offer: false,
        offerText: ""
    },
    {
        id: 3,
        name: "Bill Book Printing",
        category: "stationery",
        description: "Custom bill books with your business name, logo, and details. Duplicate/triplicate available.",
        icon: "fa-solid fa-book",
        gradient: "linear-gradient(135deg, #00B5E2, #33C4E8)",
        image: "https://picsum.photos/seed/arman-billbook/400/300",
        imageAlt: "https://picsum.photos/seed/arman-billbook-open/400/300",
        offer: false,
        offerText: ""
    },
    {
        id: 4,
        name: "Stickers & Labels",
        category: "stationery",
        description: "Custom stickers and labels for products, packaging, and branding. Any shape, any size.",
        icon: "fa-solid fa-note-sticky",
        gradient: "linear-gradient(135deg, #FFD100, #FFC300)",
        image: "https://picsum.photos/seed/arman-sticker/400/300",
        imageAlt: "https://picsum.photos/seed/arman-sticker-applied/400/300",
        offer: true,
        offerText: "20% OFF"
    },
    {
        id: 5,
        name: "Wedding Cards",
        category: "events",
        description: "Beautiful wedding invitation cards. Traditional and modern designs available.",
        icon: "fa-solid fa-heart",
        gradient: "linear-gradient(135deg, #D6007F, #FF4DA6)",
        image: "https://picsum.photos/seed/arman-wedding/400/300",
        imageAlt: "https://picsum.photos/seed/arman-wedding-open/400/300",
        offer: false,
        offerText: ""
    },
    {
        id: 6,
        name: "Carry Bags",
        category: "custom",
        description: "Custom printed carry bags for your business. Available in all sizes with your branding.",
        icon: "fa-solid fa-bag-shopping",
        gradient: "linear-gradient(135deg, #00B5E2, #D6007F)",
        image: "https://picsum.photos/seed/arman-carrybag/400/300",
        imageAlt: "https://picsum.photos/seed/arman-carrybag-print/400/300",
        offer: false,
        offerText: ""
    },
    {
        id: 7,
        name: "ID Cards",
        category: "cards",
        description: "Professional ID cards for employees, students, and organizations. With lanyard options.",
        icon: "fa-solid fa-address-card",
        gradient: "linear-gradient(135deg, #1A1A1A, #333333)",
        image: "https://picsum.photos/seed/arman-idcard/400/300",
        imageAlt: "https://picsum.photos/seed/arman-idcard-back/400/300",
        offer: false,
        offerText: ""
    },
    {
        id: 8,
        name: "Posters & Brochures",
        category: "banners",
        description: "Eye-catching posters and brochures for marketing. High-quality paper and printing.",
        icon: "fa-solid fa-image",
        gradient: "linear-gradient(135deg, #D6007F, #FFD100)",
        image: "https://picsum.photos/seed/arman-poster/400/300",
        imageAlt: "https://picsum.photos/seed/arman-brochure/400/300",
        offer: false,
        offerText: ""
    },
    {
        id: 9,
        name: "Custom Keychains",
        category: "custom",
        description: "Personalized keychains with photos, names, or logos. Great for gifts and promotions.",
        icon: "fa-solid fa-key",
        gradient: "linear-gradient(135deg, #FFD100, #D6007F)",
        image: "https://picsum.photos/seed/arman-keychain/400/300",
        imageAlt: "https://picsum.photos/seed/arman-keychain-box/400/300",
        offer: true,
        offerText: "✨ NEW"
    },
    {
        id: 10,
        name: "Bottle Stickers",
        category: "stationery",
        description: "Waterproof bottle stickers for beverages, cosmetics, and products. Premium quality.",
        icon: "fa-solid fa-bottle-water",
        gradient: "linear-gradient(135deg, #00B5E2, #FFD100)",
        image: "https://picsum.photos/seed/arman-bottle/400/300",
        imageAlt: "https://picsum.photos/seed/arman-bottle-label/400/300",
        offer: false,
        offerText: ""
    }
];

// ============================================
// ✏️ TESTIMONIALS DATA
// Edit customer reviews here
// ============================================
const TESTIMONIALS = [
    {
        text: "Arman Graphics delivered our wedding cards on time and the quality was absolutely amazing! Everyone loved the design. Highly recommended for any printing work!",
        author: "Rahul Sharma",
        role: "Wedding Client, Ambedkar Nagar"
    },
    {
        text: "Best printing service in Ambedkar Nagar! I got my shop banner and visiting cards done here. Very professional work and reasonable prices.",
        author: "Priya Verma",
        role: "Shop Owner, Tanda"
    },
    {
        text: "We use Arman Graphics for all our coaching institute's printing needs — brochures, ID cards, and banners. Always excellent results and on-time delivery!",
        author: "Amit Kumar",
        role: "Coaching Institute Director"
    },
    {
        text: "The custom keychains I ordered for my event turned out perfect! Great prices, fast delivery, and superb quality. Will definitely order again!",
        author: "Sneha Gupta",
        role: "Event Organizer"
    },
    {
        text: "Got bill books and stickers for my grocery store. The quality is top-notch and price is very affordable. Thank you Arman Graphics!",
        author: "Rajesh Yadav",
        role: "Business Owner, Akbarpur"
    }
];

// ============================================
// ✏️ PORTFOLIO DATA
// Edit recent work samples here
// ============================================
const PORTFOLIO_ITEMS = [
    { title: "Wedding Card Collection", category: "Wedding Cards", gradient: "linear-gradient(135deg, #D6007F, #FF4DA6)", icon: "fa-solid fa-heart" },
    { title: "Restaurant Menu & Branding", category: "Print Design", gradient: "linear-gradient(135deg, #00B5E2, #33C4E8)", icon: "fa-solid fa-utensils" },
    { title: "Corporate ID Card Set", category: "ID Cards", gradient: "linear-gradient(135deg, #1A1A1A, #444)", icon: "fa-solid fa-id-badge" },
    { title: "Grand Opening Banner", category: "Flex Banner", gradient: "linear-gradient(135deg, #FFD100, #FFC300)", icon: "fa-solid fa-store" },
    { title: "Product Label Design", category: "Stickers & Labels", gradient: "linear-gradient(135deg, #D6007F, #FFD100)", icon: "fa-solid fa-tag" },
    { title: "Business Stationery Kit", category: "Complete Branding", gradient: "linear-gradient(135deg, #00B5E2, #D6007F)", icon: "fa-solid fa-briefcase" }
];

// ============================================
// PRODUCT DATA MANAGEMENT
// ============================================

// Initialize products in localStorage on first visit
function initProducts() {
    if (!localStorage.getItem('arman_products')) {
        localStorage.setItem('arman_products', JSON.stringify(SAMPLE_PRODUCTS));
    }
}

// Get all products from localStorage
function getProducts() {
    const data = localStorage.getItem('arman_products');
    return data ? JSON.parse(data) : SAMPLE_PRODUCTS;
}

// ============================================
// RENDER PRODUCTS ON PAGE
// ✏️ Product card layout is defined here
// No price is displayed - only "Order Now" button
// ============================================
function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const products = productsToRender || getProducts();

    if (products.length === 0) {
        grid.innerHTML = '<div class="no-products"><i class="fa-solid fa-box-open"></i><h3>No products found</h3><p>Try adjusting your search or filter</p></div>';
        return;
    }

    grid.innerHTML = products.map(product => {
        const hasImage = product.image && product.image.length > 10;
        const hasAltImage = product.imageAlt && product.imageAlt.length > 10;
        
        return `
        <div class="product-card animate-on-scroll" data-category="${product.category}">
            <div class="product-image" onclick="openLightbox(this)" style="${hasImage ? '' : 'background:' + (product.gradient || 'var(--gradient-primary)')}">
                ${hasImage
                    ? '<img src="' + product.image + '" alt="' + product.name + '" class="img-primary" loading="lazy">'
                      + (hasAltImage
                          ? '<img src="' + product.imageAlt + '" alt="' + product.name + ' - Alternate View" class="img-alt" loading="lazy">'
                          : '')
                      + (hasAltImage ? '<span class="hover-hint"><i class="fa-solid fa-arrows-rotate"></i> Hover to preview</span>' : '')
                    : '<i class="' + (product.icon || 'fa-solid fa-print') + ' placeholder-icon"></i>'
                }
                ${product.offer ? '<span class="product-offer-badge">' + (product.offerText || 'OFFER') + '</span>' : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description || ''}</p>
                <div class="product-footer">
                    <button class="btn-order" onclick="event.stopPropagation(); orderOnWhatsApp('${product.name.replace(/'/g, "\\'")}')">
                        <i class="fa-brands fa-whatsapp"></i> Order Now
                    </button>
                </div>
            </div>
        </div>`;
    }).join('');

    // Re-init scroll animations and image hover effect
    initScrollAnimations();
    initImageHoverEffect();
}

// ============================================
// ✨ IMAGE HOVER EFFECT
// Shows alternate image after 1.5 seconds of hovering
// Smooth crossfade transition
// ============================================
function initImageHoverEffect() {
    document.querySelectorAll('.product-card').forEach(card => {
        // Skip if already initialized
        if (card.dataset.hoverInit) return;
        card.dataset.hoverInit = 'true';
        
        // Check if card has alternate image
        const altImg = card.querySelector('.img-alt');
        if (!altImg) return;
        
        let hoverTimer;
        
        // ✏️ Change 1500 to adjust hover delay (in milliseconds)
        // 1500 = 1.5 seconds before image swaps
        card.addEventListener('mouseenter', () => {
            hoverTimer = setTimeout(() => {
                card.classList.add('show-alt');
            }, 1500);
        });
        
        card.addEventListener('mouseleave', () => {
            clearTimeout(hoverTimer);
            card.classList.remove('show-alt');
        });
    });
}

// ============================================
// SEARCH & FILTER
// ============================================
let activeCategory = 'all';
let searchQuery = '';

function filterProducts() {
    let products = getProducts();

    // Filter by category
    if (activeCategory !== 'all') {
        products = products.filter(p => p.category === activeCategory);
    }

    // Filter by search
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        products = products.filter(p =>
            p.name.toLowerCase().includes(q) ||
            (p.description && p.description.toLowerCase().includes(q)) ||
            p.category.toLowerCase().includes(q)
        );
    }

    renderProducts(products);
}

function initSearchAndFilter() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            filterProducts();
        });
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.dataset.category;
            filterProducts();
        });
    });
}

// ============================================
// WHATSAPP INTEGRATION
// ✏️ Message format: "Hello, I want to order [Product Name]"
// ============================================

// Order a specific product via WhatsApp (no price)
function orderOnWhatsApp(productName) {
    const msg = encodeURIComponent(
        'Hello, I want to order ' + productName
    );
    window.open('https://wa.me/' + BUSINESS.phone + '?text=' + msg, '_blank');
}

// General WhatsApp inquiry
function openWhatsApp() {
    const msg = encodeURIComponent(
        'Hello ' + BUSINESS.name + '! 👋\nI\'m interested in your printing services. Please share details.'
    );
    window.open('https://wa.me/' + BUSINESS.phone + '?text=' + msg, '_blank');
}

// Call business
function callBusiness() {
    window.location.href = 'tel:+' + BUSINESS.phone;
}

// ============================================
// CONTACT FORM → WhatsApp
// ============================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName').value;
        const phone = document.getElementById('contactPhone').value;
        const service = document.getElementById('contactService').value;
        const message = document.getElementById('contactMessage').value;

        const whatsappMsg = encodeURIComponent(
            'Hello ' + BUSINESS.name + '! 👋\n\n📋 *New Inquiry*\n👤 Name: ' + name + '\n📞 Phone: ' + phone + '\n🛠️ Service: ' + service + '\n💬 Message: ' + message
        );
        window.open('https://wa.me/' + BUSINESS.phone + '?text=' + whatsappMsg, '_blank');
        form.reset();
    });
}

// ============================================
// LIGHTBOX / IMAGE POPUP
// ============================================
function openLightbox(element) {
    // Show the currently visible image (primary or alt)
    const card = element.closest('.product-card');
    let img;
    if (card && card.classList.contains('show-alt')) {
        img = element.querySelector('.img-alt') || element.querySelector('.img-primary') || element.querySelector('img');
    } else {
        img = element.querySelector('.img-primary') || element.querySelector('img');
    }
    if (!img) return; // No popup for placeholder icons

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });
}

// ============================================
// COUNTDOWN TIMER
// ============================================
function initCountdown() {
    let endTime = localStorage.getItem('arman_offer_end');

    if (!endTime || parseInt(endTime) < Date.now()) {
        // Set countdown to 24 hours from now
        endTime = Date.now() + 24 * 60 * 60 * 1000;
        localStorage.setItem('arman_offer_end', endTime.toString());
    } else {
        endTime = parseInt(endTime);
    }

    function update() {
        const diff = Math.max(0, endTime - Date.now());

        if (diff <= 0) {
            endTime = Date.now() + 24 * 60 * 60 * 1000;
            localStorage.setItem('arman_offer_end', endTime.toString());
        }

        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);

        const hEl = document.getElementById('countHours');
        const mEl = document.getElementById('countMins');
        const sEl = document.getElementById('countSecs');

        if (hEl) hEl.textContent = String(h).padStart(2, '0');
        if (mEl) mEl.textContent = String(m).padStart(2, '0');
        if (sEl) sEl.textContent = String(s).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
}

// Update offer banner from admin settings
function updateOfferBanner() {
    const settings = JSON.parse(localStorage.getItem('arman_offer_settings') || '{}');
    const titleEl = document.getElementById('offerBannerTitle');
    const priceEl = document.getElementById('offerBannerPrice');

    if (settings.title && titleEl) titleEl.textContent = settings.title;
    if (settings.price && priceEl) priceEl.textContent = settings.price;
}

// ============================================
// TESTIMONIALS SLIDER
// ============================================
let testimonialIndex = 0;
let testimonialInterval;

function initTestimonials() {
    const track = document.getElementById('testimonialsTrack');
    const dotsContainer = document.getElementById('testimonialDots');
    if (!track || !dotsContainer) return;

    // Render testimonials
    track.innerHTML = TESTIMONIALS.map(t => `
        <div class="testimonial-card">
            <div class="testimonial-content">
                <div class="testimonial-stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="testimonial-text">"${t.text}"</p>
                <h4 class="testimonial-author">${t.author}</h4>
                <p class="testimonial-role">${t.role}</p>
            </div>
        </div>
    `).join('');

    // Render dots
    dotsContainer.innerHTML = TESTIMONIALS.map((_, i) =>
        '<button class="testimonial-dot ' + (i === 0 ? 'active' : '') + '" onclick="goToTestimonial(' + i + ')" aria-label="Testimonial ' + (i+1) + '"></button>'
    ).join('');

    // Auto-slide
    testimonialInterval = setInterval(() => {
        testimonialIndex = (testimonialIndex + 1) % TESTIMONIALS.length;
        goToTestimonial(testimonialIndex);
    }, 5000);
}

function goToTestimonial(index) {
    testimonialIndex = index;
    const track = document.getElementById('testimonialsTrack');
    if (track) track.style.transform = 'translateX(-' + (index * 100) + '%)';

    document.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// ============================================
// PORTFOLIO
// ============================================
function renderPortfolio() {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;

    grid.innerHTML = PORTFOLIO_ITEMS.map(item => `
        <div class="portfolio-item animate-on-scroll" style="background: ${item.gradient}">
            <i class="${item.icon} portfolio-icon"></i>
            <div class="portfolio-overlay">
                <h4>${item.title}</h4>
                <p>${item.category}</p>
            </div>
        </div>
    `).join('');
}

// ============================================
// STICKY HEADER & MOBILE MENU
// ============================================
function initHeader() {
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.mobile-overlay');

    // Scroll effect
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            hamburger.classList.toggle('active');
            if (overlay) overlay.classList.toggle('active', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });
    }

    // Close on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close on overlay click
    if (overlay) {
        overlay.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
}

// ============================================
// BACK TO TOP
// ============================================
function initBackToTop() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 500);
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// SCROLL ANIMATIONS (Intersection Observer)
// ============================================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.animate-on-scroll:not(.animated)').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// LOADING SCREEN
// ============================================
function hideLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => loader.classList.add('hidden'), 600);
    }
}

// ============================================
// ACTIVE NAV LINK HIGHLIGHT ON SCROLL
// ============================================
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    });
}

// ============================================
// INITIALIZE EVERYTHING ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initProducts();
    renderProducts();
    initSearchAndFilter();
    initHeader();
    initActiveNav();
    initContactForm();
    initLightbox();
    initCountdown();
    updateOfferBanner();
    initTestimonials();
    renderPortfolio();
    initBackToTop();
    initScrollAnimations();
    hideLoader();
});
