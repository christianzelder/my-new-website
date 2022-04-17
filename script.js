
const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

const spotify = document.getElementById('spotify');

// 👇️ Change text color on mouseover
spotify.addEventListener('mouseover', function handleMouseOver() {
  spotify.style.color = 'red';
});

