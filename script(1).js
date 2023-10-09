const button = document.querySelector(".button");
const productsSection = document.getElementById("products");


button.addEventListener('click', () => {
    // Scroll to the "Products" section
    productsSection.scrollIntoView({ behavior: "smooth" });
});








