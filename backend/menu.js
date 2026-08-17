const tabs = document.querySelectorAll(".menu-options button");
const categories = document.querySelectorAll(".menu-items > div");

function showCategory(categoryName) {

    // Hide all categories
    categories.forEach(section => {
        section.style.display = "none";
    });

    // Get selected category
    const selectedCategory = document.querySelector(`.${categoryName}`);

    // Show selected category
    selectedCategory.style.display = "grid";

    // Get cards inside selected category
    const cards = selectedCategory.querySelectorAll(".feature-card");

    // Reset animation
    cards.forEach(card => {
        card.classList.remove("show");
    });

    // Animate cards one by one
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 80);
    });
}


// Show Coffee when page loads
showCategory("coffee");


tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const category = tab.dataset.category;

        // Active button
        tabs.forEach(button => {
            button.classList.remove("active");
        });

        tab.classList.add("active");

        // Show category
        showCategory(category);

    });

});