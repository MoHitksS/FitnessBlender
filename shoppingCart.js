function displayCart() {
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	if (cartItems) {
		let productList = document.querySelector(".bag-list");
		productList.innerHTML = "";
		Object.values(cartItems).map((item) => {
			productList.innerHTML += `
        <div class="bag-iteemm">
            <div class="bag-item-name">
                <div class="bag-item-name-img">
                    <img src=${item.img} alt="">
                </div>
                <div class="bag-item-name-text">
                    <h3>${item.name}</h3>
                </div>
            </div>
            <div class="bag-item-remove"><i class="fas fa-times"></i></div>
            <div class="bag-item-price"><h3>${item.price}</h3></div>
        </div>
        `;
		});
	}
}

function deleteItem() {
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	if (cartItems) {
		Object.values(cartItems).map();
	}
}

displayCart();
