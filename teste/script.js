// Função de Adicionar ao Carrinho
let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-name');
        const productPrice = parseFloat(this.getAttribute('data-price'));
        addToCart(productName, productPrice);
    });
});

function addToCart(name, price) {
    cartCount++;
    document.getElementById('cart').innerText = `Carrinho (${cartCount})`;
    alert(`${name} foi adicionado ao carrinho por R$ ${price.toFixed(2)}`);
}
