let items = document.querySelectorAll(".fa-heart");

let videos = [
	{
		name:
			"FB Low Impact Round 2 - Build Muscle & Burn Fat - 40 Minutes or Less",
		img:
			"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-782-hiit-pilates-strength-workout-lower-body-workout-for-people-who-get-bored-easily-9eda.jpg",

		tag: "11",
	},
	{
		name: "FB Blend - Burn Fat, Build Muscle, Tone; 35 or 55 Minutes a Day",
		img:
			"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-o_749_15-minute-bodyweight-cardio-workout-for-fat-burn-and-energy-boost-feel-good-total-body-cardio.jpg",

		tag: "22",
	},
	{
		name: "FB 30 - Fat Loss Program For Busy People (Round 4)",
		img:
			"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-780-daniels-upper-body-strength-workout-for-people-who-get-bored-easily-8f58.jpg",

		tag: "33",
	},
	{
		name: "FB Strong - 4 Week Build Muscle, Burn Fat and Feel Great",
		img:
			"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_26_4-week-fb-strong-build-muscle-burn-fat-and-feel-great.jpg",

		tag: "44",
	},
	{
		name: "Add FB Meal Plan to your order and get 20% Off",
		img:
			"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_22_fb-bodyweight-no-equipment-workouts-to-burn-fat-and-tone-up.jpg",

		tag: "55",
	},
];

for (let i = 0; i < items.length; i++) {
	items[i].addEventListener("click", () => {
		setVideo(videos[i]);
	});
}

function setVideo(video) {
	let likedVideos = localStorage.getItem("wishList");
	likedVideos = JSON.parse(likedVideos);
	console.log(likedVideos);
	if (likedVideos != null) {
		if (likedVideos[video.tag] == undefined) {
			likedVideos = {
				...likedVideos,
				[video.tag]: video,
			};
		}
	} else {
		likedVideos = {
			[video.tag]: video,
		};
	}
	localStorage.setItem("wishList", JSON.stringify(likedVideos));
}
