// Cart functionality
let cartData = [
    {
        id: '1',
        name: '프리미엄 울 코트',
        option: '블랙 / M',
        price: 398000,
        discountRate: 20,
        quantity: 1,
        checked: true
    },
    {
        id: '2',
        name: '레더 토트백',
        option: '베이지',
        price: 445000,
        discountRate: 15,
        quantity: 1,
        checked: true
    },
    {
        id: '3',
        name: '캐시미어 니트',
        option: '크림 / L',
        price: 325000,
        discountRate: 25,
        quantity: 2,
        checked: true
    }
];

// Calculate total price
function calculateTotal() {
    let subtotal = 0;
    let discount = 0;

    cartData.forEach(item => {
        if (item.checked) {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            if (item.discountRate) {
                discount += itemTotal * (item.discountRate / 100);
            }
        }
    });

    const total = subtotal - discount;

    return {
        subtotal,
        discount,
        total
    };
}

// Update price summary display
function updatePriceSummary() {
    const { subtotal, discount, total } = calculateTotal();

    const priceRows = document.querySelectorAll('.price-row');
    if (priceRows.length >= 4) {
        priceRows[0].querySelector('.price-value').textContent = subtotal.toLocaleString() + '원';
        priceRows[1].querySelector('.price-value').textContent = '-' + discount.toLocaleString() + '원';
        priceRows[3].querySelector('.price-value').textContent = total.toLocaleString() + '원';
    }
}

// Handle quantity change
function handleQuantityChange(itemId, action) {
    const item = cartData.find(i => i.id === itemId);
    if (!item) return;

    if (action === 'increase') {
        item.quantity++;
    } else if (action === 'decrease' && item.quantity > 1) {
        item.quantity--;
    }

    // Update display
    const quantityValue = document.querySelector(`[data-item-id="${itemId}"] .quantity-value`);
    if (quantityValue) {
        quantityValue.textContent = item.quantity;
    }

    updatePriceSummary();
}

// Handle item delete
function handleItemDelete(itemId) {
    cartData = cartData.filter(item => item.id !== itemId);

    // Remove item from DOM
    const itemElement = document.querySelector(`[data-item-id="${itemId}"]`);
    if (itemElement) {
        itemElement.remove();
    }

    // Update cart count
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cartData.length;
    }

    updatePriceSummary();
}

// Handle checkbox change
function handleCheckboxChange(itemId, checked) {
    const item = cartData.find(i => i.id === itemId);
    if (item) {
        item.checked = checked;
        updatePriceSummary();
    }
}

// Initialize cart page
function initCart() {
    // Add data-item-id to cart items
    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach((item, index) => {
        if (cartData[index]) {
            item.setAttribute('data-item-id', cartData[index].id);
        }
    });

    // Quantity buttons
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const action = btn.getAttribute('data-action');
            const cartItem = btn.closest('.cart-item');
            const itemId = cartItem ? cartItem.getAttribute('data-item-id') : null;

            if (itemId) {
                handleQuantityChange(itemId, action);
            }
        });
    });

    // Delete buttons
    document.querySelectorAll('.cart-item-delete').forEach(btn => {
        btn.addEventListener('click', () => {
            const cartItem = btn.closest('.cart-item');
            const itemId = cartItem ? cartItem.getAttribute('data-item-id') : null;

            if (itemId && confirm('상품을 삭제하시겠습니까?')) {
                handleItemDelete(itemId);
            }
        });
    });

    // Checkboxes
    document.querySelectorAll('.cart-item-checkbox input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const cartItem = checkbox.closest('.cart-item');
            const itemId = cartItem ? cartItem.getAttribute('data-item-id') : null;

            if (itemId) {
                handleCheckboxChange(itemId, e.target.checked);
            }
        });
    });

    // Checkout button
    const checkoutBtn = document.querySelector('.checkout-button');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            const checkedItems = cartData.filter(item => item.checked);
            if (checkedItems.length === 0) {
                alert('선택된 상품이 없습니다.');
                return;
            }

            const { total } = calculateTotal();
            alert(`${checkedItems.length}개 상품, 총 ${total.toLocaleString()}원을 주문합니다.`);
        });
    }

    // Initial price update
    updatePriceSummary();
}

// Run when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCart);
} else {
    initCart();
}
