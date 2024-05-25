document.addEventListener('DOMContentLoaded', function() {
    // Initialize MixItUp
    let mixMenu = mixitup('.dish_wrapper', {
        load: {
            filter: '.staple'
        },
        selectors: {
            target: '.menu_card'
        },
        animation: {
            duration: 800
        }
    });

    // Select menu items
    const menuItems = document.querySelectorAll(".menu-item");

    // Active menu item function
    function activeMenuItem() {
        menuItems.forEach((item) => item.classList.remove("menu-item--active"));
        this.classList.add("menu-item--active");
    }

    // Add event listener to menu items
    menuItems.forEach((item) => item.addEventListener("click", activeMenuItem));
});

document.addEventListener('DOMContentLoaded', function () {
    // Initialize ScrollReveal with settings
    const sr = ScrollReveal({
        distance: "100px",
        duration: 2000,
        delay: 400,
    });

    // Apply ScrollReveal to elements with class "hero-content"
    sr.reveal(".hero-content");
    sr.reveal(".hero-picture", {origin:"top"});
    sr.reveal(".sbsr-content",{origin:"left"});
    sr.reveal(".sbsr-picture",{origin:"right"});
    
});