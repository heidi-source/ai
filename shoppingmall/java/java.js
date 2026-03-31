// Product Data
const recommendedProducts = [
    {
        id: "1",
        name: "프리미엄 울 코트",
        price: 398000,
        discountRate: 20,
        imageUrl: "https://images.unsplash.com/photo-1592327877233-90b9bfd92e48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZmFzaGlvbiUyMGNvYXQlMjB3b21lbnxlbnwxfHx8fDE3NzQ5MjQzMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        badge: "NEW",
    },
    {
        id: "2",
        name: "미니멀 실크 드레스",
        price: 289000,
        imageUrl: "https://images.unsplash.com/photo-1768123881596-8451eb40608c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZHJlc3MlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3NDkyNDM0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: "3",
        name: "레더 토트백",
        price: 445000,
        discountRate: 15,
        imageUrl: "https://images.unsplash.com/photo-1764179690178-1cfd632e804b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYW5kYmFnJTIwYmVpZ2V8ZW58MXx8fHwxNzc0ODYyMzk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: "4",
        name: "화이트 레더 스니커즈",
        price: 178000,
        imageUrl: "https://images.unsplash.com/photo-1771448802232-24721fe6b674?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbmVha2VycyUyMHdoaXRlfGVufDF8fHx8MTc3NDkyNDM0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: "5",
        name: "캐시미어 니트",
        price: 325000,
        discountRate: 25,
        imageUrl: "https://images.unsplash.com/photo-1603906650843-b58e94d9df4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHN3ZWF0ZXIlMjBuZXV0cmFsfGVufDF8fHx8MTc3NDkyNDM0MXww&ixlib=rb-4.1.0&q=80&w=1080",
        badge: "BEST",
    },
    {
        id: "6",
        name: "미니멀 실버 주얼리",
        price: 89000,
        imageUrl: "https://images.unsplash.com/photo-1771660724436-a497a119a00c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwamV3ZWxyeSUyMHNpbHZlcnxlbnwxfHx8fDE3NzQ5MjQzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
];

const bestProducts = [
    {
        id: "7",
        name: "베이지 울 코트",
        price: 458000,
        discountRate: 30,
        imageUrl: "https://images.unsplash.com/photo-1600285037594-86159871705f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwd29vbCUyMGNvYXQlMjBiZWlnZXxlbnwxfHx8fDE3NzQ5MjQzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        badge: "BEST",
    },
    {
        id: "8",
        name: "레더 앵클부츠",
        price: 268000,
        discountRate: 20,
        imageUrl: "https://images.unsplash.com/photo-1761052720710-32349209f6b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYm9vdHMlMjBicm93biUyMHdvbWVufGVufDF8fHx8MTc3NDg2ODU0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: "9",
        name: "아이보리 실크 블라우스",
        price: 198000,
        imageUrl: "https://images.unsplash.com/photo-1761635491338-f2767d72f997?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwYmxvdXNlJTIwaXZvcnl8ZW58MXx8fHwxNzc0OTI0MzQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: "10",
        name: "데님 슬림 진",
        price: 158000,
        discountRate: 15,
        imageUrl: "https://images.unsplash.com/photo-1762025396099-c46130d47ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGplYW5zJTIwZGVuaW18ZW58MXx8fHwxNzc0ODI4NjkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
];

// State
let likedProducts = new Set();

// Create Product Card HTML
function createProductCard(product) {
    const discountedPrice = product.discountRate
        ? product.price * (1 - product.discountRate / 100)
        : product.price;

    const isLiked = likedProducts.has(product.id);

    return `
        <div class="product-card">
            <div class="product-image-wrapper">
                <img 
                    src="${product.imageUrl}" 
                    alt="${product.name}" 
                    class="product-image"
                    loading="lazy"
                />
                ${product.badge ? `
                    <div class="product-badge">${product.badge}</div>
                ` : ''}
                <button 
                    class="like-btn ${isLiked ? 'liked' : ''}" 
                    data-product-id="${product.id}"
                    aria-label="찜하기"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price-wrapper">
                    ${product.discountRate ? `
                        <span class="product-discount">${product.discountRate}%</span>
                    ` : ''}
                    <span class="product-price">${discountedPrice.toLocaleString()}원</span>
                    ${product.discountRate ? `
                        <span class="product-original-price">${product.price.toLocaleString()}원</span>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// Render Products
function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Toggle Like
function toggleLike(productId) {
    if (likedProducts.has(productId)) {
        likedProducts.delete(productId);
    } else {
        likedProducts.add(productId);
    }

    // Re-render products to update UI
    renderProducts(recommendedProducts, 'recommendedProducts');
    renderProducts(bestProducts, 'bestProducts');

    // Re-attach event listeners
    attachLikeListeners();
}

// Attach Like Button Listeners
function attachLikeListeners() {
    const likeBtns = document.querySelectorAll('.like-btn');
    likeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = btn.getAttribute('data-product-id');
            toggleLike(productId);
        });
    });
}

// Category Tabs
function initCategoryTabs() {
    const tabs = document.querySelectorAll('.category-tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            const category = tab.getAttribute('data-category');
            console.log('Selected category:', category);
            // Here you can filter products based on category
        });
    });
}

// Bottom Navigation
function initBottomNav() {
    const navBtns = document.querySelectorAll('.nav-btn');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            navBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const tab = btn.getAttribute('data-tab');
            console.log('Navigate to:', tab);
            // Here you can handle navigation
        });
    });
}

// Initialize App
function init() {
    // Render products
    renderProducts(recommendedProducts, 'recommendedProducts');
    renderProducts(bestProducts, 'bestProducts');

    // Attach event listeners
    attachLikeListeners();
    initCategoryTabs();
    initBottomNav();

    console.log('CHIC Premium Shopping Mall initialized');
}

// Run when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
