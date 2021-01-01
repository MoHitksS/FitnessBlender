const getData = async () => {
	try {
		const response = await fetch("http://localhost:3000/programs", {
			method: "GET",
		});
		const data = await response.json();
		console.log(data);
		let output = `
		<div class="exclusive__card yellow">
			<div class="exclusive__card__content">
				<h1><span class="fb-transperant">FB</span>Store</h1>
				<h2>EGIFT CARDS</h2>
				<hr />
				<p>New eGift cards availabile!</p>
			</div>
		</div>

		<div class="exclusive__card red">
			<div class="exclusive__card__content">
				<h1><span class="fb-transperant">FB</span>Store</h1>
				<h2>CHALLENGES</h2>
				<hr />
				<p>Short flexible programs for FB Plus members!</p>
			</div>
		</div>`;
		for (var i in data) {
			const product = data[i];
			output =
				output +
				`
				<div class="card">
				<div class="card__img">
					<img
						src="${data[i].img}"
						alt=""
					/>
				</div>
				<div class="card__content">
					<p>CORE - 35 MIN</p>
					<h4>${data[i].name}</h4>
				</div>
				<div class="card__bottom">
					<div class="bottom__left">
						<h4>$${data[i].price}</h4>
					</div>
					<div class="bottom__right">
						<button class="add-to-bag" onClick="itemNumbers(${data[i].tag})"> 
							<i class="fas fa-shopping-bag"></i>ADD TO BAG
						</button>
					</div>
				</div>
			</div>
		    `;
		}
		document.querySelector(".main").innerHTML = output;
	} catch (err) {
		console.log("This is the catch block: " + err);
	}
};

function onLoadCartItems() {
	let productNumbers = localStorage.getItem("itemNumbers");
	if (productNumbers) {
		document.querySelector(".header-menu span").textContent = productNumbers;
	}
}

const itemNumbers = async (tag) => {
	try {
		const response = await fetch(`http://localhost:3000/programs?tag=${tag}`, {
			method: "GET",
		});
		const product = await response.json();
		console.log(product[0]);
		let productNumbers = localStorage.getItem("itemNumbers");
		productNumbers = Number(productNumbers);
		if (productNumbers) {
			localStorage.setItem("itemNumbers", productNumbers + 1);
			document.querySelector(".header-menu span").textContent =
				productNumbers + 1;
		} else {
			localStorage.setItem("itemNumbers", 1);
			document.querySelector(".header-menu span").textContent = 1;
		}

		setItem(product[0]);
	} catch (err) {
		console.log("This is the catch block: " + err);
	}
};

function setItem(product) {
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	if (cartItems != null) {
		if (cartItems[product.tag] == undefined) {
			cartItems = {
				...cartItems,
				[product.tag]: product,
			};
		}
	} else {
		// product.quant = 1;
		cartItems = {
			[product.tag]: product,
		};
	}
	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

getData();
onLoadCartItems();
