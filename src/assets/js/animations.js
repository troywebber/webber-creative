// Create an Intersection Observer instance
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            // If element is in view
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    },
    {
        // Element becomes visible when 20% of it is in view
        threshold: 0.2
    }
);

// Elements to animate
const animateElements = [
    ".cs-title",
    ".cs-text",
    ".cs-card-group .cs-item",
    ".cs-image-group",
    ".cs-content",
    ".cs-faq-item",
    ".cs-price"
];

// When DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Add animation classes and observe elements
    animateElements.forEach((selector) => {
        document.querySelectorAll(selector).forEach((element, index) => {
            // Add animation classes
            element.classList.add("animate-init");
            // Add delay for card items
            if (selector.includes("cs-item") || selector.includes("cs-faq-item")) {
                element.style.transitionDelay = `${index * 0.1}s`;
            }
            // Observe element
            observer.observe(element);
        });
    });
});
