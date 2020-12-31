let likes = document.querySelectorAll(".fa-heart");

for (let i = 0; i < likes.length; i++) {
	likes[i].addEventListener("click", () => {
		likeNumbers();
	});
}

function likeNumbers() {
	localStorage.setItem("likeNumbers", 1);
}
