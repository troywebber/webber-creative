// FAQ Component
const faqItems = document.querySelectorAll(".cs-faq-item");

if (faqItems) {
    faqItems.forEach((item) => {
        const button = item.querySelector(".cs-button");

        button.addEventListener("click", () => {
            // Check if this item is currently active
            const isActive = item.classList.contains("active");

            // First, remove active class from all items
            faqItems.forEach((otherItem) => {
                otherItem.classList.remove("active");
            });

            // Then, only add active class to clicked item if it wasn't active before
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });
}
