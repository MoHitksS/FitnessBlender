function displayCart() {
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	if (cartItems) {
		let productList = document.querySelector(".bag-list");
		console.log(cartItems);
		productList.innerHTML = "";
		let sum = 0;
		Object.values(cartItems).map((item) => {
			sum += item.price;
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
				<button class="bag-item-remove" onClick="deleteItem(this.name)" name="${
					item.tag
				}"><i class="fas fa-times"></i></button>
				<div class="bag-item-price"><h3>$${String(item.price)}</h3></div>
			</div>
        `;
		});
		sum = (sum * 100) / 100;
		console.log(sum);
		document.querySelector(".tot-amount").textContent = "$" + String(sum);
	}
}

function deleteItem(item) {
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	delete cartItems[item];
	localStorage.removeItem("productsInCart");
	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
	displayCart();
}

// function activateRemoveBtns() {
// 	let cartItems = localStorage.getItem("productsInCart");
// 	cartItems = JSON.parse(cartItems);
// 	if (cartItems) {
// 		const removeBtn = document.querySelectorAll(".fa-times");
// 		for (var i = 0; i < removeBtn.length; i++) {
// 			removeBtn[i].addEventListener("click", () => {
// 				deleteItem(removeBtn[i]);
// 			});
// 		}
// 	}
// }

displayCart();
// activateRemoveBtns();
