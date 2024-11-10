// Core navigation initialization
const initNav = () => {
    const nav = document.querySelector("#cs-navigation");
    if (!nav) return;

    // Initialize core navigation elements
    const hamburgerMenu = nav.querySelector(".cs-toggle");
    const navbarMenu = nav.querySelector(".cs-ul-wrapper");

    // Setup core click handler
    hamburgerMenu?.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("cs-active");
        navbarMenu?.classList.toggle("cs-active");
    });

    // Defer non-critical features
    requestIdleCallback(() => {
        initDropdowns();
        initScrollBehavior();
        initKeyboardNav();
    });
};

// Dropdown menu functionality
const initDropdowns = () => {
    const dropdownLinks = document.querySelectorAll(".cs-drop-li > .cs-li-link");

    dropdownLinks.forEach((link) => {
        link.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                window.location.href = link.href;
            }
        });
    });
};

// Smooth scroll behavior
const initScrollBehavior = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute("href"));

            if (target) {
                // Close mobile menu if open
                document.querySelector(".cs-ul-wrapper")?.classList.remove("cs-active");
                document.querySelector(".cs-toggle")?.classList.remove("cs-active");

                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
};

// Keyboard navigation
const initKeyboardNav = () => {
    // Handle Escape key for menu closing
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            const activeMenu = document.querySelector(".cs-ul-wrapper.cs-active");
            if (activeMenu) {
                activeMenu.classList.remove("cs-active");
                document.querySelector(".cs-toggle")?.classList.remove("cs-active");
            }
        }
    });
};

// Initialize navigation after DOM is loaded
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNav);
} else {
    initNav();
}
