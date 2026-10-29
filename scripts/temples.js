const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;

const menuButton = document.getElementById("menu-button");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.querySelector(".menu-icon").textContent =
        isOpen ? "✕" : "☰";

    menuButton.setAttribute("aria-expanded", String(isOpen));

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        if (window.innerWidth < 700) {
            navigation.classList.remove("open");

            menuButton.querySelector(".menu-icon").textContent = "☰";
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
        }
    });
});