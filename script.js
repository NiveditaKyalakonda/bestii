function showHearts() {
  const container = document.getElementById("heartRain");
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    heart.innerHTML = "❤️";
    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}
