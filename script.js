/* ================================================================
   ARMAN GRAPHICS - COMPLETE WEBSITE JAVASCRIPT
   ================================================================
   
   📌 IMPORTANT NOTES (Hinglish mein):
   
   🔹 WhatsApp Number Change Karna:
      - Neeche 'WHATSAPP_NUMBER' variable mein apna number daalo
      - Country code ke saath (91 for India)
   
   🔹 Naya Service/Product Add Karna:
      - 'servicesData' array mein naya object add karo
      - Icon FontAwesome se choose karo: https://fontawesome.com/icons
      - Color gradient choose karo (cyan, magenta, yellow, green, etc.)
   
   🔹 Gallery Mein Naya Image Add Karna:
      - 'portfolioData' array mein naya object add karo
      - Image URL ya path daalo
      - Category daalo (filter ke liye)
   
   🔹 Testimonial Add Karna:
      - 'testimonialsData' array mein naya review add karo
   
   🔹 FAQ Add Karna:
      - 'faqData' array mein naya question-answer add karo
   ================================================================ */

// ================================================================
// 📱 WHATSAPP NUMBER - Yahan apna WhatsApp number change karo
// Sirf number change karo, baaki sab automatic hoga
// ================================================================
const WHATSAPP_NUMBER = '916388025941'; // 👈 Apna number yahan daalo (country code ke saath, bina + ke)
const PHONE_DISPLAY = '+91 63880 25941'; // 👈 Display ke liye formatted number
const BUSINESS_EMAIL = 'armangraphics.in@gmail.com'; // 👈 Email yahan change karo

// ================================================================
// 🛠️ SERVICES DATA - Naya service add karne ke liye yahan add karo
// ================================================================
/*
 * 👉 Kaise naya service add karein:
 * 1. Neeche array mein naya object copy-paste karo
 * 2. name, description, icon, color change karo
 * 3. Save karo - Bas! Automatic render ho jayega
 *
 * 💡 Price hata diya gaya hai - WhatsApp pe puchho pricing ke liye
 *
 * Icon ke liye FontAwesome use karo: https://fontawesome.com/icons
 * Color options: cyan, magenta, yellow, green, purple, orange, red, blue
 */
const servicesData = [
    {
    name: 'Visiting Card',
    description: 'Premium business cards...',
    icon: 'fas fa-id-card',
    color: 'cyan',
    image: 'images/visiting-card.jpg' // 👈 yahan image path
    },
    {
    name: 'Flex & Banner',
    description: 'High quality flex boards & vinyl banners',
    icon: 'fas fa-image',
    color: 'magenta',
    image: 'images/flex-banner.jpg'
},
    {
        name: 'Bill Book',
        description: 'Custom bill books with company branding',
        icon: 'fas fa-file-invoice',
        color: 'yellow',
        image: 'images/bill-book.jpg'
    },
    {
        name: 'Wedding Card',
        description: 'Beautiful wedding invitation cards & designs',
        icon: 'fas fa-heart',
        color: 'magenta',
        image: 'images/wedding-card.jpg'
    },
    {
        name: 'Sticker Printing',
        description: 'Custom stickers for products & branding',
        icon: 'fas fa-sticky-note',
        color: 'green',
        image: 'images/stciker.jpg'
    },
    {
        name: 'Carry Bag',
        description: 'Printed carry bags for shops & businesses',
        icon: 'fas fa-shopping-bag',
        color: 'purple',
        image: 'images/Carry-Bag.jpg'
    },
    {
        name: 'Poster Printing',
        description: 'Vibrant posters for events & promotions',
        icon: 'fas fa-scroll',
        color: 'orange',
        image: 'images/Pamphlet.jpg'
    },
    {
        name: 'Brochure',
        description: 'Professional brochures & pamphlets',
        icon: 'fas fa-book-open',
        color: 'cyan',
        image: 'images/Menu.jpg'
    },
    {
        name: 'ID Card',
        description: 'Employee & student ID cards with laminates',
        icon: 'fas fa-id-badge',
        color: 'blue',
        image: 'images/ID-Card.jpg'
    },
    {
        name: 'LED 3D Letter',
        description: 'Premium 3D letter signage with strong visibility',
        icon: 'fas fa-tshirt',
        color: 'red',
        image: 'images/3D-Letter.jpg'
    },
    {
        name: 'Roll-up Banner',
        description: 'Premium standee banners for promotions and events',
        icon: 'fas fa-mug-hot',
        color: 'yellow',
        image: 'images/Standee.jpg'
    },
    {
        name: 'Invition ',
        description: 'Best inauguration card printing in Ambedkar Nagar',
        icon: 'fas fa-palette',
        color: 'purple',
        image: 'images/invition-Card.jpg'
    }
];

// ================================================================
// 🖼️ PORTFOLIO DATA - Gallery mein naya image add karne ke liye
// ================================================================
/*
 * 👉 Kaise naya image add karein:
 * 1. Apni image ko 'images' folder mein daalo
 * 2. Neeche array mein naya object add karo
 * 3. 'image' mein path daalo (jaise: 'images/my-photo.jpg')
 * 4. 'category' mein filter category daalo
 * 5. Save karo - Automatic gallery mein aa jayega!
 *
 * 💡 Tip: Abhi dummy placeholder images hain.
 *    Apni real images se replace karo.
 */
const portfolioData = [
    {
        title: 'Business Card Design',
        category: 'cards',
        image: '',
        color: '#00BCD4',
        icon: 'fas fa-id-card'
    },
    {
        title: 'Wedding Invitation',
        category: 'wedding',
        image: '',
        color: '#E91E63',
        icon: 'fas fa-heart'
    },
    {
        title: 'Shop Banner',
        category: 'banners',
        image: '',
        color: '#FFC107',
        icon: 'fas fa-image'
    },
    {
        title: 'Company Brochure',
        category: 'brochure',
        image: '',
        color: '#9C27B0',
        icon: 'fas fa-book-open'
    },
    {
        title: 'Premium Visiting Card',
        category: 'cards',
        image: '',
        color: '#4CAF50',
        icon: 'fas fa-id-card'
    },
    {
        title: 'Event Poster',
        category: 'banners',
        image: '',
        color: '#FF5722',
        icon: 'fas fa-scroll'
    },
    {
        title: 'Custom T-Shirt',
        category: 'products',
        image: '',
        color: '#2196F3',
        icon: 'fas fa-tshirt'
    },
    {
        title: 'Wedding Card Set',
        category: 'wedding',
        image: '',
        color: '#E91E63',
        icon: 'fas fa-heart'
    }
];

// ================================================================
// ⭐ TESTIMONIALS DATA - Customer reviews add karo yahan
// ================================================================
const testimonialsData = [
    {
        name: 'Rajesh Kumar',
        initials: 'RK',
        role: 'Business Owner',
        text: 'Arman Graphics ne hamare shop ke liye bahut acche visiting cards aur banner banaaye. Quality bilkul premium thi aur price bhi reasonable tha. Highly recommended!',
        rating: 5
    },
    {
        name: 'Priya Sharma',
        initials: 'PS',
        role: 'Wedding Planner',
        text: 'Wedding cards ke liye Arman Graphics sabse best hai! Design bilkul unique tha aur delivery bhi time pe ho gayi. Mere clients bahut khush the.',
        rating: 5
    },
    {
        name: 'Mohammed Iqbal',
        initials: 'MI',
        role: 'Shop Owner',
        text: 'Bill books aur carry bags ke liye hum hamesha Arman Graphics se order karte hain. Quality consistent rehti hai aur rate bhi acche milte hain.',
        rating: 5
    },
    {
        name: 'Sunita Devi',
        initials: 'SD',
        role: 'Teacher',
        text: 'School ke event ke liye posters aur ID cards banvaye the. Bahut accha kaam kiya aur bahut jaldi deliver bhi kar diya. Thank you Arman Graphics!',
        rating: 5
    },
    {
        name: 'Amit Verma',
        initials: 'AV',
        role: 'Restaurant Owner',
        text: 'Menu cards aur brochures ka kaam bahut professional tha. Design team ne hamare ideas ko exactly waise hi implement kiya jaisa hum chahte the.',
        rating: 5
    },
    {
        name: 'Fatima Begum',
        initials: 'FB',
        role: 'Boutique Owner',
        text: 'Custom carry bags aur stickers bahut sundar bane. Hamare boutique ki branding bilkul premium look de rahi hai. Best printing service in Ambedkar Nagar!',
        rating: 5
    }
];

// ================================================================
// ❓ FAQ DATA - Frequently Asked Questions
// ================================================================
const faqData = [
    {
        question: 'Arman Graphics mein kaunsi services available hain?',
        answer: 'Hum visiting cards, flex banners, bill books, wedding cards, stickers, carry bags, posters, brochures, ID cards, t-shirt printing, mug printing aur custom design services provide karte hain. Koi bhi printing ya branding related kaam ke liye aap humse contact kar sakte hain.'
    },
    {
        question: 'Order kaise place karein?',
        answer: 'Aap hamare WhatsApp number par message karke ya website pe enquiry form fill karke order place kar sakte hain. Hum aapko design draft bhejenge, approval ke baad printing start hogi.'
    },
    {
        question: 'Delivery kitne time mein hoti hai?',
        answer: 'Normally 24-48 hours mein delivery ho jaati hai. Bulk orders ke liye 3-5 din lag sakte hain. Urgent orders ke liye same day delivery bhi available hai (extra charges applicable).'
    },
    {
        question: 'Kya aap design bhi banate hain?',
        answer: 'Haan! Hum free design service provide karte hain. Aap apna idea batao, hamare designers aapke liye professional design banayenge. Aap chahen toh apna ready design bhi de sakte hain.'
    },
    {
        question: 'Minimum order quantity kya hai?',
        answer: 'Visiting cards ke liye minimum 100 pieces, banners ke liye koi minimum nahi. Har product ki minimum quantity alag hai. WhatsApp pe puchho, hum turant bata denge.'
    },
    {
        question: 'Payment kaise karna hoga?',
        answer: 'Hum Cash, UPI (PhonePe, Google Pay, Paytm), aur Bank Transfer accept karte hain. Order ke time 50% advance aur delivery ke time baaki payment le lete hain.'
    },
    {
        question: 'Kya bulk order pe discount milta hai?',
        answer: 'Haan bilkul! Bulk orders pe special discount milta hai. Jitna zyada quantity, utna kam rate. Contact karo best rates ke liye.'
    },
    {
        question: 'Aap kahan located hain?',
        answer: 'Hum Ambedkar Nagar, Uttar Pradesh mein located hain. Aap hamare shop pe visit kar sakte hain ya WhatsApp/call pe order de sakte hain. Puri UP mein delivery available hai.'
    }
];

// ================================================================
// 📝 BLOG DATA - Blog posts
// ================================================================
const blogData = [
    {
        title: 'Visiting Card Design Tips: Apna Card Kaise Banayein Professional',
        category: 'Design Tips',
        date: 'Dec 15, 2024',
        readTime: '3 min read',
        excerpt: 'Ek accha visiting card aapka pehla impression hota hai. Jaaniye kaise design karein ek professional business card...',
        icon: 'fas fa-id-card',
        color: 'cyan'
    },
    {
        title: 'Banner Printing Guide: Size, Material Aur Design Kaise Choose Karein',
        category: 'Printing Guide',
        date: 'Dec 10, 2024',
        readTime: '5 min read',
        excerpt: 'Banner printing mein sahi material aur size bahut important hai. Is guide mein jaaniye sab kuch detail mein...',
        icon: 'fas fa-image',
        color: 'magenta'
    },
    {
        title: 'Wedding Card Trends 2025: Latest Designs Aur Ideas',
        category: 'Trends',
        date: 'Dec 5, 2024',
        readTime: '4 min read',
        excerpt: '2025 ke latest wedding card trends jaaniye. Minimalist se lekar royal designs tak, sab kuch yahan milega...',
        icon: 'fas fa-heart',
        color: 'yellow'
    }
];

// ================================================================
// HERO SLIDER DATA
// ================================================================
const heroSlides = [
    {
        title: 'Premium <span class="highlight">Printing</span> & Branding Solutions',
        text: 'Visiting cards se lekar banners tak, wedding cards se custom designs tak — har printing need ke liye ek hi naam, Arman Graphics!'
    },
    {
        title: 'Your Vision, Our <span class="highlight">Print</span> — Quality Guaranteed',
        text: 'Top quality materials, latest printing technology aur affordable prices. Ambedkar Nagar ka sabse trusted printing partner!'
    },
    {
        title: '<span class="highlight">Creative</span> Designs That Make You Stand Out',
        text: 'Free design service ke saath har order. Apne business ko ek professional look do Arman Graphics ke saath!'
    }
];

// ================================================================
// COLOR MAP - Service card colors ke liye
// ================================================================
const colorMap = {
    cyan: { bg: 'rgba(0,188,212,0.1)', color: '#00BCD4', gradient: 'linear-gradient(135deg, #00BCD4, #0097A7)' },
    magenta: { bg: 'rgba(233,30,99,0.1)', color: '#E91E63', gradient: 'linear-gradient(135deg, #E91E63, #C2185B)' },
    yellow: { bg: 'rgba(255,193,7,0.1)', color: '#FF9800', gradient: 'linear-gradient(135deg, #FFC107, #FF9800)' },
    green: { bg: 'rgba(76,175,80,0.1)', color: '#4CAF50', gradient: 'linear-gradient(135deg, #4CAF50, #2E7D32)' },
    purple: { bg: 'rgba(156,39,176,0.1)', color: '#9C27B0', gradient: 'linear-gradient(135deg, #9C27B0, #7B1FA2)' },
    orange: { bg: 'rgba(255,87,34,0.1)', color: '#FF5722', gradient: 'linear-gradient(135deg, #FF5722, #E64A19)' },
    red: { bg: 'rgba(244,67,54,0.1)', color: '#F44336', gradient: 'linear-gradient(135deg, #F44336, #D32F2F)' },
    blue: { bg: 'rgba(33,150,243,0.1)', color: '#2196F3', gradient: 'linear-gradient(135deg, #2196F3, #1976D2)' }
};

// ================================================================
// INITIALIZE - Jab page load ho toh sab render karo
// ================================================================
document.addEventListener('DOMContentLoaded', function() {
    // Loading screen hatao
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1000);

    // AOS Animations initialize
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });

    // Sab render karo
    renderServices();
    renderPortfolio();
    renderTestimonials();
    renderFAQ();
    renderBlog();
    populateServiceDropdown();
    renderFooterServices();
    updateContactInfo();
    initHeroSlider();
    initCounters();
});

// ================================================================
// 📱 WHATSAPP FUNCTION - WhatsApp message open karo
// ================================================================
function openWhatsApp(message) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// WhatsApp se service order karo
function orderViaWhatsApp(serviceName) {
    const message = `Hello Arman Graphics! 👋\n\nI want to order: *${serviceName}*\n\nPlease share details and pricing.\n\nThank you! 🙏`;
    openWhatsApp(message);
}

// ================================================================
// RENDER SERVICES - Services grid banao (bina price ke)
// ================================================================
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = servicesData.map((service, index) => {
        const colors = colorMap[service.color] || colorMap.cyan;
        return `
            <div class="service-card" data-aos="fade-up" data-aos-delay="${(index % 4) * 80}">
                
                ${service.image 
                    ? `<div class="service-image">
                           <img src="${service.image}" alt="${service.name}" loading="lazy">
                       </div>`
                    : `<div class="service-icon" style="background:${colors.bg}; color:${colors.color};">
                           <i class="${service.icon}"></i>
                       </div>`
                }

                <h3>${service.name}</h3>
                <p>${service.description}</p>
                <button class="service-order-btn" onclick="orderViaWhatsApp('${service.name}')">
                    <i class="fab fa-whatsapp"></i> Order Now
                </button>
            </div>
        `;
    }).join('');
}
// ================================================================
// RENDER PORTFOLIO - Gallery render karo with filters
// ================================================================
function renderPortfolio() {
    // Unique categories nikalo
    const categories = ['all', ...new Set(portfolioData.map(item => item.category))];
    
    // Filter buttons render karo
    const filtersContainer = document.getElementById('portfolioFilters');
    filtersContainer.innerHTML = categories.map(cat => `
        <button class="filter-btn ${cat === 'all' ? 'active' : ''}" onclick="filterPortfolio('${cat}', this)">
            ${cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
    `).join('');

    // Portfolio items render karo
    renderPortfolioItems('all');
}

function renderPortfolioItems(category) {
    const grid = document.getElementById('portfolioGrid');
    const filteredItems = category === 'all' 
        ? portfolioData 
        : portfolioData.filter(item => item.category === category);

    grid.innerHTML = filteredItems.map((item, index) => `
        <div class="portfolio-item" data-aos="fade-up" data-aos-delay="${(index % 4) * 80}" onclick="openLightbox('${item.title}', '${item.color}', '${item.icon}')">
            ${item.image 
                ? `<img src="${item.image}" alt="${item.title}" loading="lazy">`
                : `<div style="width:100%;height:100%;background:${item.color};display:flex;align-items:center;justify-content:center;"><i class="${item.icon}" style="font-size:3rem;color:rgba(255,255,255,0.4);"></i></div>`
            }
            <div class="portfolio-overlay">
                <div class="zoom-icon"><i class="fas fa-search-plus"></i></div>
                <h4>${item.title}</h4>
                <span>${item.category}</span>
            </div>
        </div>
    `).join('');
}

function filterPortfolio(category, btn) {
    // Active class toggle
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderPortfolioItems(category);
}

// ================================================================
// LIGHTBOX - Image preview
// ================================================================
function openLightbox(title, color, icon) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    const caption = document.getElementById('lightboxCaption');
    
    // Placeholder image generate karo
    img.outerHTML = `<div id="lightboxImg" style="width:70vw;max-width:600px;height:400px;background:${color};border-radius:16px;display:flex;align-items:center;justify-content:center;"><i class="${icon}" style="font-size:5rem;color:rgba(255,255,255,0.4);"></i></div>`;
    caption.textContent = title;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    // Reset to img tag for next use
    const currentEl = document.getElementById('lightboxImg');
    if (currentEl.tagName !== 'IMG') {
        currentEl.outerHTML = '<img src="" alt="" id="lightboxImg">';
    }
}

// Lightbox close on background click
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) closeLightbox();
});

// ESC key se lightbox band karo
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
});

// ================================================================
// RENDER TESTIMONIALS
// ================================================================
function renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    // Sirf pehle 3 dikhao (mobile friendly)
    const displayTestimonials = testimonialsData.slice(0, 3);
    grid.innerHTML = displayTestimonials.map((t, index) => `
        <div class="testimonial-card" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="testimonial-stars">
                ${'<i class="fas fa-star"></i>'.repeat(t.rating)}
            </div>
            <p class="testimonial-text">"${t.text}"</p>
            <div class="testimonial-author">
                <div class="testimonial-avatar">${t.initials}</div>
                <div class="testimonial-author-info">
                    <strong>${t.name}</strong>
                    <span>${t.role}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ================================================================
// RENDER FAQ - Accordion style
// ================================================================
function renderFAQ() {
    const container = document.getElementById('faqContainer');
    container.innerHTML = faqData.map((faq, index) => `
        <div class="faq-item ${index === 0 ? 'active' : ''}" data-aos="fade-up" data-aos-delay="${index * 50}">
            <div class="faq-question" onclick="toggleFAQ(this)">
                <h4>${faq.question}</h4>
                <div class="faq-icon"><i class="fas fa-plus"></i></div>
            </div>
            <div class="faq-answer" style="${index === 0 ? 'max-height: 200px;' : ''}">
                <div class="faq-answer-content">${faq.answer}</div>
            </div>
        </div>
    `).join('');
}

function toggleFAQ(element) {
    const item = element.parentElement;
    const isActive = item.classList.contains('active');
    
    // Sabko band karo
    document.querySelectorAll('.faq-item').forEach(faq => {
        faq.classList.remove('active');
        faq.querySelector('.faq-answer').style.maxHeight = '0';
    });

    // Agar pehle se active nahi tha toh kholo
    if (!isActive) {
        item.classList.add('active');
        const answer = item.querySelector('.faq-answer');
        answer.style.maxHeight = answer.scrollHeight + 'px';
    }
}

// ================================================================
// RENDER BLOG
// ================================================================
function renderBlog() {
    const grid = document.getElementById('blogGrid');
    grid.innerHTML = blogData.map((post, index) => `
        <div class="blog-card" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="blog-image">
                <div class="blog-image-bg"><i class="${post.icon}"></i></div>
                <span class="blog-category">${post.category}</span>
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span><i class="far fa-calendar"></i> ${post.date}</span>
                    <span><i class="far fa-clock"></i> ${post.readTime}</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="#" class="blog-read-more" onclick="openWhatsApp('Hello! Mujhe ${post.title} ke baare mein aur jaanna hai.'); return false;">
                    Read More <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `).join('');
}

// ================================================================
// FORM SERVICE DROPDOWN - Services dropdown mein add karo
// ================================================================
function populateServiceDropdown() {
    const select = document.getElementById('userService');
    servicesData.forEach(service => {
        const option = document.createElement('option');
        option.value = service.name;
        option.textContent = service.name;
        select.appendChild(option);
    });
    // Ek extra "Other" option bhi add karo
    const otherOption = document.createElement('option');
    otherOption.value = 'Other';
    otherOption.textContent = 'Other / Kuch Aur';
    select.appendChild(otherOption);
}

// ================================================================
// FOOTER SERVICES - Footer mein top services dikhao
// ================================================================
function renderFooterServices() {
    const list = document.getElementById('footerServices');
    servicesData.slice(0, 6).forEach(service => {
        list.innerHTML += `<li><a href="#services"><i class="fas fa-chevron-right"></i> ${service.name}</a></li>`;
    });
}

// ================================================================
// UPDATE CONTACT INFO - Sab jagah phone/whatsapp update karo
// ================================================================
function updateContactInfo() {
    // Display numbers
    const phoneEls = document.querySelectorAll('#displayPhone, #contactPhone');
    const whatsappEls = document.querySelectorAll('#displayWhatsapp, #contactWhatsapp');
    phoneEls.forEach(el => { if(el) el.textContent = PHONE_DISPLAY; });
    whatsappEls.forEach(el => { if(el) el.textContent = PHONE_DISPLAY; });
}

// ================================================================
// HERO SLIDER - Auto sliding
// ================================================================
function initHeroSlider() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dot');
    const titleEl = document.getElementById('heroTitle');
    const textEl = document.getElementById('heroText');

    function goToSlide(index) {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        titleEl.innerHTML = heroSlides[index].title;
        textEl.textContent = heroSlides[index].text;
        currentSlide = index;
    }

    // Auto slide - har 5 second mein
    setInterval(() => {
        const next = (currentSlide + 1) % slides.length;
        goToSlide(next);
    }, 5000);

    // Dot click
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            goToSlide(parseInt(dot.dataset.slide));
        });
    });
}

// ================================================================
// COUNTER ANIMATION - Numbers animate karo
// ================================================================
function initCounters() {
    const counters = document.querySelectorAll('.hero-stat-number');
    const speed = 60;

    function animateCounter(counter) {
        const target = parseInt(counter.dataset.count);
        let current = 0;
        const increment = target / speed;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target.toLocaleString() + '+';
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current).toLocaleString();
            }
        }, 30);
    }

    // Intersection Observer - jab screen mein aaye tab animate karo
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// ================================================================
// NAVBAR - Sticky, scroll effects, mobile menu
// ================================================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const mobileOverlay = document.getElementById('mobileOverlay');
const scrollTopBtn = document.getElementById('scrollTop');

// Scroll effects
window.addEventListener('scroll', () => {
    // Sticky navbar
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Scroll to top button
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }

    // Active nav link update karo based on scroll position
    updateActiveNav();
});

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Mobile overlay click se menu band karo
mobileOverlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Nav link click se mobile menu band karo
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Scroll to top
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Active nav link update
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
            navLinks.querySelectorAll('a').forEach(a => a.classList.remove('active'));
            const activeLink = navLinks.querySelector(`a[href="#${id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
}

// ================================================================
// ENQUIRY FORM - WhatsApp pe submit karo
// ================================================================
document.getElementById('enquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('userName').value.trim();
    const phone = document.getElementById('userPhone').value.trim();
    const service = document.getElementById('userService').value;
    const message = document.getElementById('userMessage').value.trim();

    // Validation
    if (!name || !phone || !service) {
        alert('Please fill all required fields! / Sabhi zaroori fields bharo!');
        return;
    }

    // WhatsApp message format
    const whatsappMessage = 
`Hello Arman Graphics! 👋

*New Order / Enquiry*
━━━━━━━━━━━━━━━━
👤 Name: ${name}
📱 Phone: ${phone}
🛠️ Service: ${service}
💬 Message: ${message || 'No additional message'}
━━━━━━━━━━━━━━━━

Please share details and pricing. 🙏`;

    openWhatsApp(whatsappMessage);

    // Form reset karo
    this.reset();
});

// ================================================================
// SMOOTH SCROLL - Anchor links ke liye
// ================================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
