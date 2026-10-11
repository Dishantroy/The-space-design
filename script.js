function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
}

document.querySelectorAll("#nav a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("nav").classList.remove("active");
    });
});

function orderProduct(productName) {
    const message =
        "Hello, I am interested in the " +
        productName +
        ". Please share more details.";

    const whatsappURL =
        "https://wa.me/919897686664?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}