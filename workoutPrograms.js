let items = document.querySelectorAll(".add-to-bag");

let products = [
	{
		name:
			"FB Low Impact Round 2 - Build Muscle & Burn Fat - 40 Minutes or Less",
		price: "$11.99",
		img:
			"https://d18zdz9g6n5za7.cloudfront.net/plan/1020/1020-o_31_fb-low-impact-round-2-fat-loss-program-40-minutes-or-less.jpg",

		tag: "11",
	},
	{
		name: "FB Blend - Burn Fat, Build Muscle, Tone; 35 or 55 Minutes a Day",
		price: "$12.99",
		img:
			"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_29_4-week-fb-blend-burn-fat-build-muscle-tone-35-or-55-minutes-a-day.jpg",

		tag: "22",
	},
	{
		name: "FB 30 - Fat Loss Program For Busy People (Round 4)",
		price: "$13.99",
		img:
			"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_28_fb-30-4-week-fat-loss-program-for-busy-people-round-4.jpg",

		tag: "33",
	},
	{
		name: "FB Strong - 4 Week Build Muscle, Burn Fat and Feel Great",
		price: "$14.99",
		img:
			"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_26_4-week-fb-strong-build-muscle-burn-fat-and-feel-great.jpg",

		tag: "44",
	},
	{
		name: "Add FB Meal Plan to your order and get 20% Off",
		price: "$15.99",
		img:
			"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_22_fb-bodyweight-no-equipment-workouts-to-burn-fat-and-tone-up.jpg",

		tag: "55",
	},
];

for (let i = 0; i < items.length; i++) {
	items[i].addEventListener("click", () => {
		itemNumbers(products[i]);
	});
}

function onLoadCartItems() {
	let productNumbers = localStorage.getItem("itemNumbers");
	if (productNumbers) {
		document.querySelector(".header-menu span").textContent = productNumbers;
	}
}

function itemNumbers(product) {
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

	setItem(product);
}

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
		// cartItems[product.tag].quant += 1;
	} else {
		// product.quant = 1;
		cartItems = {
			[product.tag]: product,
		};
	}
	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

onLoadCartItems();
