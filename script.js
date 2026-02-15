const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");
const title = document.getElementById("title");
const confettiContainer = document.getElementById("confetti");

/* Read name from URL query param */
const params = new URLSearchParams(window.location.search);
const name = params.get("name");

if (name) {
    const formattedName =
        name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    title.textContent = `Happy Purpose Day, ${formattedName}`;
}

/* No button escapes */
noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * 260 - 130;
    const y = Math.random() * 160 - 80;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* Yes click */
function sayYes() {
    noBtn.style.display = "none";
    yesBtn.classList.add("active");
    response.textContent = "I’m really glad you feel the same 😍";

    launchConfetti();
}

/* Confetti function */
function launchConfetti() {
    const colors = [
        "#3f7f6a", // sage
        "#f472b6", // soft pink
        "#fde68a", // warm yellow
        "#c7d2fe"  // lavender
    ];

    for (let i = 0; i < 80; i++) {
        const piece = document.createElement("div");
        piece.classList.add("confetti-piece");

        piece.style.left = Math.random() * 100 + "vw";
        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDuration = 2 + Math.random() * 2 + "s";
        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        confettiContainer.appendChild(piece);

        setTimeout(() => piece.remove(), 4000);
    }
}
