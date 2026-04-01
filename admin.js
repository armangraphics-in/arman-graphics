/* ============================================
   ARMAN GRAPHICS - Admin Panel Script
   CMYK Theme | No-Price | Dual Image Support
   
   ✏️ HOW TO EDIT:
   - Login credentials: Change ADMIN_CREDENTIALS
   - Categories: Edit CATEGORIES array
   ============================================ */

// ============================================
// ✏️ ADMIN LOGIN CREDENTIALS
// Change these to secure your admin panel
// ============================================
const ADMIN_CREDENTIALS = {
    username: "admin",
    password: "1234"
};

// ============================================
// ✏️ PRODUCT CATEGORIES
// Add or edit categories here
// ============================================
const CATEGORIES = [
    { value: "cards", label: "Cards" },
    { value: "banners", label: "Banners" },
    { value: "stationery", label: "Stationery" },
    { value: "events", label: "Events" },
    { value: "custom", label: "Custom" }
];

// CMYK Gradient presets for new products
const GRADIENTS = [
    "linear-gradient(135deg, #00B5E2, #0095BC)",
    "linear-gradient(135deg, #D6007F, #E6339F)",
    "linear-gradient(135deg, #FFD100, #FFC300)",
    "linear-gradient(135deg, #1A1A1A, #333333)",
    "linear-gradient(135deg, #00B5E2, #D6007F)",
    "linear-gradient(135deg, #D6007F, #FFD100)",
    "linear-gradient(135deg, #00B5E2, #FFD100)",
    "linear-gradient(135deg, #00B5E2, #33C4E8)",
    "linear-gradient(135deg, #D6007F, #FF4DA6)",
    "linear-gradient(135deg, #FFD100, #D6007F)"
];

// ============================================
// STATE VARIABLES
// ============================================
let editingProductId = null;
let currentImageBase64 = '';
let currentImageAltBase64 = '';

// ============================================
// LOGIN SYSTEM
// ============================================
function handleLogin(e) {
    e.preventDefault();

    const username = document.getElementById('adminUsername').value.trim();
    const password = document.getElementById('adminPassword').value;
    const errorEl = document.getElementById('loginError');

    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        sessionStorage.setItem('arman_admin_logged_in', 'true');
        showDashboard();
    } else {
        errorEl.style.display = 'block';
        errorEl.textContent = '❌ Invalid username or password!';
        setTimeout(() => { errorEl.style.display = 'none'; }, 3000);
    }
}

function logout() {
    sessionStorage.removeItem('arman_admin_logged_in');
    showLogin();
}

function showDashboard() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('dashboardSection').style.display = 'block';
    loadDashboard();
}

function showLogin() {
    document.getElementById('loginSection').style.display = 'flex';
    document.getElementById('dashboardSection').style.display = 'none';
}

// ============================================
// DATA MANAGEMENT
// ============================================
function getProducts() {
    const data = localStorage.getItem('arman_products');
    return data ? JSON.parse(data) : [];
}

function saveProducts(products) {
    localStorage.setItem('arman_products', JSON.stringify(products));
}

function getNextId() {
    const products = getProducts();
    return products.length === 0 ? 1 : Math.max(...products.map(p => p.id)) + 1;
}

// ============================================
// DASHBOARD
// ============================================
function loadDashboard() {
    updateStats();
    renderProductTable();
    loadOfferSettings();
}

function updateStats() {
    const products = getProducts();
    document.getElementById('statTotal').textContent = products.length;
    document.getElementById('statOffers').textContent = products.filter(p => p.offer).length;
    document.getElementById('statCategories').textContent = [...new Set(products.map(p => p.category))].length;
}

// ============================================
// PRODUCT TABLE (No price column)
// ============================================
function renderProductTable() {
    const tbody = document.getElementById('productTableBody');
    const products = getProducts();

    if (products.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding:40px; color:var(--text-muted);">No products yet. Click "Add Product" to get started!</td></tr>';
        return;
    }

    tbody.innerHTML = products.map(product => {
        const hasImage = product.image && product.image.length > 10;
        return '<tr>' +
            '<td>' +
                (hasImage
                    ? '<img src="' + product.image + '" class="product-thumb" alt="' + product.name + '">'
                    : '<div class="product-thumb-placeholder" style="background:' + (product.gradient || 'var(--gradient-primary)') + '"><i class="' + (product.icon || 'fa-solid fa-print') + '"></i></div>'
                ) +
            '</td>' +
            '<td style="color:var(--text-white); font-weight:500;">' + product.name + '</td>' +
            '<td><span style="text-transform:capitalize; color:var(--text-muted)">' + product.category + '</span></td>' +
            '<td>' +
                (product.offer
                    ? '<span style="background:rgba(214,0,127,0.1); color:var(--accent); padding:4px 12px; border-radius:20px; font-size:0.75rem; font-weight:600;">' + (product.offerText || 'OFFER') + '</span>'
                    : '<span style="color:var(--text-dark)">—</span>'
                ) +
            '</td>' +
            '<td class="actions">' +
                '<button class="btn-edit" onclick="editProduct(' + product.id + ')"><i class="fa-solid fa-pen"></i> Edit</button>' +
                '<button class="btn-delete" onclick="deleteProduct(' + product.id + ')"><i class="fa-solid fa-trash"></i></button>' +
            '</td>' +
        '</tr>';
    }).join('');
}

// ============================================
// ADD / EDIT PRODUCT (No price fields)
// ============================================
function openAddModal() {
    editingProductId = null;
    currentImageBase64 = '';
    currentImageAltBase64 = '';

    document.getElementById('modalTitle').textContent = 'Add New Product';
    document.getElementById('productForm').reset();

    // Reset image previews
    document.getElementById('imagePreviewWrapper').classList.remove('active');
    document.getElementById('imagePreview').src = '';
    document.getElementById('imageAltPreviewWrapper').classList.remove('active');
    document.getElementById('imageAltPreview').src = '';

    openModal();
}

function editProduct(id) {
    const product = getProducts().find(p => p.id === id);
    if (!product) return;

    editingProductId = id;
    currentImageBase64 = product.image || '';
    currentImageAltBase64 = product.imageAlt || '';

    document.getElementById('modalTitle').textContent = 'Edit Product';
    document.getElementById('prodName').value = product.name;
    document.getElementById('prodCategory').value = product.category;
    document.getElementById('prodDescription').value = product.description || '';
    document.getElementById('prodIcon').value = product.icon || 'fa-solid fa-print';
    document.getElementById('prodOffer').checked = product.offer || false;
    document.getElementById('prodOfferText').value = product.offerText || '';

    // Primary image preview
    const previewWrapper = document.getElementById('imagePreviewWrapper');
    const preview = document.getElementById('imagePreview');
    if (product.image && product.image.length > 10) {
        preview.src = product.image;
        previewWrapper.classList.add('active');
    } else {
        preview.src = '';
        previewWrapper.classList.remove('active');
    }

    // Alternate image preview
    const altPreviewWrapper = document.getElementById('imageAltPreviewWrapper');
    const altPreview = document.getElementById('imageAltPreview');
    if (product.imageAlt && product.imageAlt.length > 10) {
        altPreview.src = product.imageAlt;
        altPreviewWrapper.classList.add('active');
    } else {
        altPreview.src = '';
        altPreviewWrapper.classList.remove('active');
    }

    openModal();
}

function saveProduct(e) {
    e.preventDefault();

    const products = getProducts();

    const productData = {
        id: editingProductId || getNextId(),
        name: document.getElementById('prodName').value.trim(),
        category: document.getElementById('prodCategory').value,
        description: document.getElementById('prodDescription').value.trim(),
        icon: document.getElementById('prodIcon').value || 'fa-solid fa-print',
        gradient: GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)],
        image: currentImageBase64,
        imageAlt: currentImageAltBase64,
        offer: document.getElementById('prodOffer').checked,
        offerText: document.getElementById('prodOfferText').value.trim()
    };

    if (editingProductId) {
        const index = products.findIndex(p => p.id === editingProductId);
        if (index !== -1) {
            productData.gradient = products[index].gradient || productData.gradient;
            products[index] = productData;
        }
    } else {
        products.push(productData);
    }

    saveProducts(products);
    closeModal();
    loadDashboard();
    showToast(editingProductId ? 'Product updated successfully!' : 'Product added successfully!');
}

function deleteProduct(id) {
    if (!confirm('Are you sure you want to delete this product?')) return;

    const products = getProducts().filter(p => p.id !== id);
    saveProducts(products);
    loadDashboard();
    showToast('Product deleted!');
}

// ============================================
// IMAGE UPLOAD (Base64) - Dual Image Support
// ============================================
function initImageUpload() {
    // Primary image upload
    const uploadArea = document.getElementById('imageUploadArea');
    const fileInput = document.getElementById('imageFileInput');

    if (uploadArea && fileInput) {
        uploadArea.addEventListener('click', () => fileInput.click());

        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = 'var(--primary)';
            uploadArea.style.background = 'rgba(0, 181, 226, 0.03)';
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.style.borderColor = '';
            uploadArea.style.background = '';
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = '';
            uploadArea.style.background = '';
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                processImage(file, 'primary');
            }
        });

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) processImage(file, 'primary');
        });
    }

    // Alternate image upload
    const altUploadArea = document.getElementById('imageAltUploadArea');
    const altFileInput = document.getElementById('imageAltFileInput');

    if (altUploadArea && altFileInput) {
        altUploadArea.addEventListener('click', () => altFileInput.click());

        altUploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            altUploadArea.style.borderColor = 'var(--accent)';
            altUploadArea.style.background = 'rgba(214, 0, 127, 0.03)';
        });

        altUploadArea.addEventListener('dragleave', () => {
            altUploadArea.style.borderColor = '';
            altUploadArea.style.background = '';
        });

        altUploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            altUploadArea.style.borderColor = '';
            altUploadArea.style.background = '';
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                processImage(file, 'alt');
            }
        });

        altFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) processImage(file, 'alt');
        });
    }
}

function processImage(file, type) {
    // Compress image for localStorage efficiency
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const maxSize = 400;
            let w = img.width, h = img.height;

            if (w > maxSize || h > maxSize) {
                if (w > h) { h = (h / w) * maxSize; w = maxSize; }
                else { w = (w / h) * maxSize; h = maxSize; }
            }

            canvas.width = w;
            canvas.height = h;
            canvas.getContext('2d').drawImage(img, 0, 0, w, h);

            const base64 = canvas.toDataURL('image/jpeg', 0.7);

            if (type === 'primary') {
                currentImageBase64 = base64;
                document.getElementById('imagePreview').src = base64;
                document.getElementById('imagePreviewWrapper').classList.add('active');
            } else {
                currentImageAltBase64 = base64;
                document.getElementById('imageAltPreview').src = base64;
                document.getElementById('imageAltPreviewWrapper').classList.add('active');
            }
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function removeImage(type) {
    if (type === 'primary') {
        currentImageBase64 = '';
        document.getElementById('imagePreview').src = '';
        document.getElementById('imagePreviewWrapper').classList.remove('active');
        document.getElementById('imageFileInput').value = '';
    } else {
        currentImageAltBase64 = '';
        document.getElementById('imageAltPreview').src = '';
        document.getElementById('imageAltPreviewWrapper').classList.remove('active');
        document.getElementById('imageAltFileInput').value = '';
    }
}

// ============================================
// OFFER MANAGEMENT
// ============================================
function loadOfferSettings() {
    const data = JSON.parse(localStorage.getItem('arman_offer_settings') || '{}');

    const titleEl = document.getElementById('offerTitle');
    const priceEl = document.getElementById('offerPrice');
    const hoursEl = document.getElementById('offerHours');

    if (titleEl) titleEl.value = data.title || 'Visiting Cards Starting at just';
    if (priceEl) priceEl.value = data.price || '₹199';
    if (hoursEl) hoursEl.value = data.hours || '24';
}

function saveOfferSettings(e) {
    e.preventDefault();

    const settings = {
        title: document.getElementById('offerTitle').value.trim(),
        price: document.getElementById('offerPrice').value.trim(),
        hours: document.getElementById('offerHours').value
    };

    localStorage.setItem('arman_offer_settings', JSON.stringify(settings));

    // Reset countdown timer
    const hours = parseInt(settings.hours) || 24;
    const endTime = Date.now() + hours * 60 * 60 * 1000;
    localStorage.setItem('arman_offer_end', endTime.toString());

    showToast('Offer settings saved! Refresh main website to see changes.');
}

// ============================================
// MODAL MANAGEMENT
// ============================================
function openModal() {
    document.getElementById('productModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
    document.body.style.overflow = '';
    editingProductId = null;
    currentImageBase64 = '';
    currentImageAltBase64 = '';
}

// ============================================
// RESET ALL DATA TO DEFAULTS
// ============================================
function resetAllData() {
    if (!confirm('⚠️ This will DELETE all products and reset everything to defaults.\n\nAre you sure?')) return;
    if (!confirm('This action cannot be undone. Continue?')) return;

    localStorage.removeItem('arman_products');
    localStorage.removeItem('arman_offer_settings');
    localStorage.removeItem('arman_offer_end');

    loadDashboard();
    showToast('All data reset! Refresh the main website to load default products.');
}

// ============================================
// TOAST NOTIFICATION (CMYK Colors)
// ============================================
function showToast(message) {
    // Remove existing toasts
    document.querySelectorAll('.admin-toast').forEach(t => t.remove());

    const toast = document.createElement('div');
    toast.className = 'admin-toast';
    toast.style.cssText = 'position:fixed; bottom:30px; left:50%; transform:translateX(-50%); background:linear-gradient(135deg,#00B5E2,#D6007F); color:white; padding:14px 28px; border-radius:50px; font-size:0.9rem; font-weight:500; z-index:10000; box-shadow:0 4px 20px rgba(0,181,226,0.3); animation:toastIn 0.3s ease; font-family:Inter,sans-serif; white-space:nowrap;';
    toast.textContent = '✅ ' + message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============================================
// INITIALIZE ADMIN PANEL
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Check session
    if (sessionStorage.getItem('arman_admin_logged_in') === 'true') {
        showDashboard();
    } else {
        showLogin();
    }

    // Init image upload (both primary and alternate)
    initImageUpload();

    // Close modal on outside click
    const modalOverlay = document.getElementById('productModal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    }

    // Add toast animation CSS
    const style = document.createElement('style');
    style.textContent = '@keyframes toastIn { from { transform: translateX(-50%) translateY(20px); opacity: 0; } to { transform: translateX(-50%) translateY(0); opacity: 1; } }';
    document.head.appendChild(style);
});
