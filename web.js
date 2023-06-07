const linksContainer = document.querySelector(".links-container");
const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
	linksContainer.classList.toggle("active");
});