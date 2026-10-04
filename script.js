/* =========================================================
   PRIYANS SPORT — PRIX
   JAVASCRIPT
========================================================= */


/* =========================================================
   PRELOADER
========================================================= */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.classList.add("hide");
    }, 1600);

});


/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


/* =========================================================
   SPORTS DATA
========================================================= */

const sports = [

    {
        name: "Football",
        icon: "⚽",
        description: "Jerseys, kits, boots, balls & pro gear"
    },

    {
        name: "Cricket",
        icon: "🏏",
        description: "Bats, jerseys, kits, pads & equipment"
    },

    {
        name: "Basketball",
        icon: "🏀",
        description: "Jerseys, shoes, balls & court gear"
    },

    {
        name: "Tennis",
        icon: "🎾",
        description: "Rackets, balls, clothing & accessories"
    },

    {
        name: "Badminton",
        icon: "🏸",
        description: "Rackets, shuttlecocks, shoes & bags"
    },

    {
        name: "Volleyball",
        icon: "🏐",
        description: "Balls, jerseys, shoes & equipment"
    },

    {
        name: "Hockey",
        icon: "🏑",
        description: "Sticks, balls, kits & protection"
    },

    {
        name: "Table Tennis",
        icon: "🏓",
        description: "Bats, balls, tables & accessories"
    },

    {
        name: "Boxing",
        icon: "🥊",
        description: "Gloves, training gear & equipment"
    },

    {
        name: "Running",
        icon: "🏃",
        description: "Running shoes, clothing & accessories"
    },

    {
        name: "Swimming",
        icon: "🏊",
        description: "Goggles, swimwear & training gear"
    },

    {
        name: "Cycling",
        icon: "🚴",
        description: "Cycles, helmets, clothing & gear"
    },

    {
        name: "Fitness",
        icon: "🏋️",
        description: "Training equipment & workout gear"
    },

    {
        name: "Martial Arts",
        icon: "🥋",
        description: "Uniforms, protection & training gear"
    },

    {
        name: "Golf",
        icon: "⛳",
        description: "Clubs, balls, clothing & accessories"
    },

    {
        name: "Motorsport",
        icon: "🏎️",
        description: "Racing gear, apparel & accessories"
    }

];


/* =========================================================
   RENDER SPORTS
========================================================= */

const sportsGrid =
    document.getElementById("sportsGrid");

sports.forEach((sport, index) => {

    const card =
        document.createElement("article");

    card.className = "sport-card";

    card.innerHTML = `

        <span class="sport-number">
            ${String(index + 1).padStart(2, "0")}
        </span>

        <div class="sport-icon">
            ${sport.icon}
        </div>

        <h3>
            ${sport.name.toUpperCase()}
        </h3>

        <p>
            ${sport.description}
        </p>

    `;

    card.addEventListener("click", () => {

        setSportFilter(sport.name);

        document
            .getElementById("collection")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

    sportsGrid.appendChild(card);

});


/* =========================================================
   PRODUCT DATA
=========================================================

   ADD MORE PRODUCTS HERE.

   You can eventually have hundreds/thousands of products.
========================================================= */

const products = [

    /* FOOTBALL */

    {
        id: 1,
        sport: "Football",
        category: "Jerseys",
        title: "International Football Jersey",
        description:
            "Football national-team inspired jersey collection.",
        price: 2499,
        icon: "⚽",
        league: "FIFA"
    },

    {
        id: 2,
        sport: "Football",
        category: "Jerseys",
        title: "LaLiga Club Jersey",
        description:
            "LaLiga club jersey collection.",
        price: 2999,
        icon: "👕",
        league: "LaLiga"
    },

    {
        id: 3,
        sport: "Football",
        category: "Jerseys",
        title: "Premier League Club Jersey",
        description:
            "Premier League inspired club jersey.",
        price: 2999,
        icon: "👕",
        league: "Premier League"
    },

    {
        id: 4,
        sport: "Football",
        category: "Kits",
        title: "Professional Football Kit",
        description:
            "Complete football kit including jersey and shorts.",
        price: 3999,
        icon: "🥅",
        league: "FIFA"
    },

    {
        id: 5,
        sport: "Football",
        category: "Footwear",
        title: "Pro Football Boots",
        description:
            "Performance football footwear collection.",
        price: 4999,
        icon: "👟",
        league: "Football"
    },

    {
        id: 6,
        sport: "Football",
        category: "Equipment",
        title: "Professional Football",
        description:
            "Match and training football.",
        price: 1499,
        icon: "⚽",
        league: "Football"
    },

    {
        id: 7,
        sport: "Football",
        category: "Accessories",
        title: "Goalkeeper Gloves",
        description:
            "Goalkeeper training and match gloves.",
        price: 1999,
        icon: "🧤",
        league: "Football"
    },

    {
        id: 8,
        sport: "Football",
        category: "Accessories",
        title: "Football Training Bag",
        description:
            "Sports bag for football equipment.",
        price: 1599,
        icon: "🎒",
        league: "Football"
    },


    /* CRICKET */

    {
        id: 9,
        sport: "Cricket",
        category: "Jerseys",
        title: "India Cricket Jersey",
        description:
            "India cricket inspired jersey collection.",
        price: 2499,
        icon: "🇮🇳",
        team: "India"
    },

    {
        id: 10,
        sport: "Cricket",
        category: "Jerseys",
        title: "IPL Team Jersey",
        description:
            "IPL team jersey collection.",
        price: 2499,
        icon: "🏏",
        league: "IPL"
    },

    {
        id: 11,
        sport: "Cricket",
        category: "Kits",
        title: "Complete Cricket Kit",
        description:
            "Complete cricket playing kit.",
        price: 8999,
        icon: "🏏",
        league: "Cricket"
    },

    {
        id: 12,
        sport: "Cricket",
        category: "Equipment",
        title: "Professional Cricket Bat",
        description:
            "Professional cricket bat collection.",
        price: 6999,
        icon: "🏏",
        league: "Cricket"
    },

    {
        id: 13,
        sport: "Cricket",
        category: "Equipment",
        title: "Cricket Batting Gloves",
        description:
            "Batting gloves for training and matches.",
        price: 1799,
        icon: "🧤",
        league: "Cricket"
    },

    {
        id: 14,
        sport: "Cricket",
        category: "Equipment",
        title: "Cricket Helmet",
        description:
            "Protective cricket helmet collection.",
        price: 3999,
        icon: "🪖",
        league: "Cricket"
    },

    {
        id: 15,
        sport: "Cricket",
        category: "Equipment",
        title: "Cricket Pads",
        description:
            "Batting protection pads.",
        price: 3499,
        icon: "🛡️",
        league: "Cricket"
    },

    {
        id: 16,
        sport: "Cricket",
        category: "Accessories",
        title: "Cricket Kit Bag",
        description:
            "Large sports bag for cricket equipment.",
        price: 2499,
        icon: "🎒",
        league: "Cricket"
    },


    /* BASKETBALL */

    {
        id: 17,
        sport: "Basketball",
        category: "Jerseys",
        title: "Basketball Jersey",
        description:
            "Performance basketball jersey.",
        price: 1999,
        icon: "🏀"
    },

    {
        id: 18,
        sport: "Basketball",
        category: "Equipment",
        title: "Professional Basketball",
        description:
            "Training and match basketball.",
        price: 1799,
        icon: "🏀"
    },

    {
        id: 19,
        sport: "Basketball",
        category: "Footwear",
        title: "Basketball Shoes",
        description:
            "Court performance footwear.",
        price: 5999,
        icon: "👟"
    },


    /* TENNIS */

    {
        id: 20,
        sport: "Tennis",
        category: "Equipment",
        title: "Tennis Racket",
        description:
            "Performance tennis racket.",
        price: 3999,
        icon: "🎾"
    },

    {
        id: 21,
        sport: "Tennis",
        category: "Accessories",
        title: "Tennis Ball Pack",
        description:
            "Training and match tennis balls.",
        price: 699,
        icon: "🎾"
    },

    {
        id: 22,
        sport: "Tennis",
        category: "Footwear",
        title: "Tennis Court Shoes",
        description:
            "Court performance footwear.",
        price: 4499,
        icon: "👟"
    },


    /* BADMINTON */

    {
        id: 23,
        sport: "Badminton",
        category: "Equipment",
        title: "Badminton Racket",
        description:
            "Performance badminton racket.",
        price: 2999,
        icon: "🏸"
    },

    {
        id: 24,
        sport: "Badminton",
        category: "Accessories",
        title: "Shuttlecock Pack",
        description:
            "Badminton training shuttlecocks.",
        price: 599,
        icon: "🏸"
    },


    /* VOLLEYBALL */

    {
        id: 25,
        sport: "Volleyball",
        category: "Equipment",
        title: "Professional Volleyball",
        description:
            "Match and training volleyball.",
        price: 1599,
        icon: "🏐"
    },


    /* HOCKEY */

    {
        id: 26,
        sport: "Hockey",
        category: "Equipment",
        title: "Field Hockey Stick",
        description:
            "Field hockey playing equipment.",
        price: 2499,
        icon: "🏑"
    },


    /* FITNESS */

    {
        id: 27,
        sport: "Fitness",
        category: "Equipment",
        title: "Training Equipment Set",
        description:
            "Multi-purpose fitness training equipment.",
        price: 2999,
        icon: "🏋️"
    },

    {
        id: 28,
        sport: "Fitness",
        category: "Accessories",
        title: "Sports Training Bag",
        description:
            "Fitness and sports training bag.",
        price: 1499,
        icon: "🎒"
    }

];


/* =========================================================
   PRODUCT STATE
========================================================= */

let currentSport = "All";
let currentCategory = "All";

let visibleProducts = 12;

let cart = [];

let selectedProduct = null;


/* =========================================================
   RENDER PRODUCTS
========================================================= */

const productsGrid =
    document.getElementById("productsGrid");


function getFilteredProducts() {

    return products.filter(product => {

        const sportMatch =
            currentSport === "All" ||
            product.sport === currentSport;

        const categoryMatch =
            currentCategory === "All" ||
            product.category === currentCategory;

        return sportMatch && categoryMatch;

    });

}


function renderProducts() {

    productsGrid.innerHTML = "";

    const filteredProducts =
        getFilteredProducts();

    const visible =
        filteredProducts.slice(
            0,
            visibleProducts
        );


    if (visible.length === 0) {

        productsGrid.innerHTML = `

            <div style="
                grid-column: 1 / -1;
                text-align: center;
                padding: 80px 20px;
                color: #8994a6;
            ">

                <div style="
                    font-size: 50px;
                    margin-bottom: 20px;
                ">
                    🔍
                </div>

                <h3 style="
                    font-family: Orbitron;
                    margin-bottom: 10px;
                ">
                    NO PRODUCTS FOUND
                </h3>

                <p>
                    Try another sport or category.
                </p>

            </div>

        `;

        return;
    }


    visible.forEach(product => {

        const card =
            document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `

            <div class="product-visual">

                <div class="product-icon">
                    ${product.icon}
                </div>

            </div>

            <div class="product-info">

                <span class="product-sport">
                    ${product.sport.toUpperCase()}
                </span>

                <h3>
                    ${product.title}
                </h3>

                <p class="product-meta">
                    ${product.category}
                    ${product.league ? " • " + product.league : ""}
                </p>

                <div class="product-bottom">

                    <strong class="product-price">
                        ₹${product.price.toLocaleString("en-IN")}
                    </strong>

                    <button
                        class="product-view"
                        data-id="${product.id}"
                    >
                        VIEW
                    </button>

                </div>

            </div>

        `;

        productsGrid.appendChild(card);

    });


    document
        .querySelectorAll(".product-view")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const product =
                        products.find(
                            p =>
                                p.id ===
                                Number(button.dataset.id)
                        );

                    openProduct(product);

                }
            );

        });

}


/* =========================================================
   FILTERS
========================================================= */

document
    .querySelectorAll("#sportFilters .filter")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll("#sportFilters .filter")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            button.classList.add("active");

            currentSport =
                button.dataset.sport;

            visibleProducts = 12;

            renderProducts();

        });

    });


document
    .querySelectorAll(".category-filter")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".category-filter")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            button.classList.add("active");

            currentCategory =
                button.dataset.category;

            visibleProducts = 12;

            renderProducts();

        });

    });


function setSportFilter(sport) {

    currentSport = sport;

    document
        .querySelectorAll("#sportFilters .filter")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.sport === sport
            );

        });

    visibleProducts = 12;

    renderProducts();

}


/* =========================================================
   LOAD MORE
========================================================= */

document
    .getElementById("loadMore")
    .addEventListener("click", () => {

        visibleProducts += 8;

        renderProducts();

    });


/* =========================================================
   WORLD FILTER BUTTONS
========================================================= */

document
    .querySelectorAll(".world-filter")
    .forEach(button => {

        button.addEventListener("click", () => {

            const sport =
                button.dataset.sport;

            const category =
                button.dataset.category || "All";

            currentSport = sport;
            currentCategory = category;

            document
                .querySelectorAll("#sportFilters .filter")
                .forEach(btn =>
                    btn.classList.toggle(
                        "active",
                        btn.dataset.sport === sport
                    )
                );

            document
                .querySelectorAll(".category-filter")
                .forEach(btn =>
                    btn.classList.toggle(
                        "active",
                        btn.dataset.category === category
                    )
                );

            renderProducts();

            document
                .getElementById("collection")
                .scrollIntoView({
                    behavior: "smooth"
                });

        });

    });


/* =========================================================
   LEAGUE FILTERS
========================================================= */

document
    .querySelectorAll(".league-card")
    .forEach(button => {

        button.addEventListener("click", () => {

            currentSport = "Football";
            currentCategory = "Jerseys";

            document
                .querySelectorAll("#sportFilters .filter")
                .forEach(btn =>
                    btn.classList.toggle(
                        "active",
                        btn.dataset.sport === "Football"
                    )
                );

            document
                .querySelectorAll(".category-filter")
                .forEach(btn =>
                    btn.classList.toggle(
                        "active",
                        btn.dataset.category === "Jerseys"
                    )
                );

            renderProducts();

            document
                .getElementById("collection")
                .scrollIntoView({
                    behavior: "smooth"
                });

            showNotification(
                `${button.dataset.league} collection selected`
            );

        });

    });


/* =========================================================
   IPL TEAM FILTERS
========================================================= */

document
    .querySelectorAll(".team-card")
    .forEach(button => {

        button.addEventListener("click", () => {

            currentSport = "Cricket";
            currentCategory = "Jerseys";

            document
                .querySelectorAll("#sportFilters .filter")
                .forEach(btn =>
                    btn.classList.toggle(
                        "active",
                        btn.dataset.sport === "Cricket"
                    )
                );

            document
                .querySelectorAll(".category-filter")
                .forEach(btn =>
                    btn.classList.toggle(
                        "active",
                        btn.dataset.category === "Jerseys"
                    )
                );

            renderProducts();

            document
                .getElementById("collection")
                .scrollIntoView({
                    behavior: "smooth"
                });

            showNotification(
                `${button.dataset.team} collection selected`
            );

        });

    });


/* =========================================================
   PRODUCT MODAL
========================================================= */

const productModal =
    document.getElementById("productModal");


function openProduct(product) {

    selectedProduct = product;

    document.getElementById("modalVisual")
        .textContent = product.icon;

    document.getElementById("modalSport")
        .textContent =
            product.sport.toUpperCase();

    document.getElementById("modalTitle")
        .textContent =
            product.title;

    document.getElementById("modalDescription")
        .textContent =
            product.description;

    document.getElementById("modalPrice")
        .textContent =
            `₹${product.price.toLocaleString("en-IN")}`;

    productModal.classList.add("open");

    document.body.classList.add("modal-open");

}


document
    .getElementById("modalClose")
    .addEventListener("click", closeProduct);


productModal.addEventListener("click", event => {

    if (event.target === productModal) {
        closeProduct();
    }

});


function closeProduct() {

    productModal.classList.remove("open");

    document.body.classList.remove("modal-open");

}


/* =========================================================
   ADD TO CART
========================================================= */

document
    .getElementById("modalAdd")
    .addEventListener("click", () => {

        if (!selectedProduct) return;

        cart.push(selectedProduct);

        updateCart();

        closeProduct();

        showNotification(
            `${selectedProduct.title} added to collection`
        );

    });


function updateCart() {

    const count =
        document.getElementById("cartCount");

    count.textContent =
        cart.length;


    const cartItems =
        document.getElementById("cartItems");

    const total =
        document.getElementById("cartTotal");

    total.textContent =
        cart.length;


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your collection is empty.
            </p>
        `;

        return;

    }


    cartItems.innerHTML = "";


    cart.forEach((product, index) => {

        const item =
            document.createElement("div");

        item.className = "cart-item";

        item.innerHTML = `

            <div class="cart-item-icon">
                ${product.icon}
            </div>

            <div class="cart-item-info">

                <strong>
                    ${product.title}
                </strong>

                <span>
                    ₹${product.price.toLocaleString("en-IN")}
                </span>

            </div>

            <button
                class="cart-remove"
                data-index="${index}"
            >
                REMOVE
            </button>

        `;

        cartItems.appendChild(item);

    });


    document
        .querySelectorAll(".cart-remove")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    cart.splice(
                        Number(button.dataset.index),
                        1
                    );

                    updateCart();

                }
            );

        });

}


/* =========================================================
   CART PANEL
========================================================= */

const cartPanel =
    document.getElementById("cartPanel");


document
    .getElementById("cartButton")
    .addEventListener("click", () => {

        cartPanel.classList.add("open");

    });


document
    .getElementById("closeCart")
    .addEventListener("click", () => {

        cartPanel.classList.remove("open");

    });


/* =========================================================
   SEARCH
========================================================= */

const searchPanel =
    document.getElementById("searchPanel");

const searchInput =
    document.getElementById("searchInput");


document
    .getElementById("searchToggle")
    .addEventListener("click", () => {

        searchPanel.classList.toggle("open");

        if (searchPanel.classList.contains("open")) {

            setTimeout(() => {
                searchInput.focus();
            }, 300);

        }

    });


document
    .getElementById("closeSearch")
    .addEventListener("click", () => {

        searchPanel.classList.remove("open");

    });


searchInput.addEventListener(
    "input",
    () => {

        const query =
            searchInput.value
                .toLowerCase()
                .trim();

        if (!query) {

            renderProducts();

            return;

        }


        const results =
            products.filter(product => {

                return (

                    product.title
                        .toLowerCase()
                        .includes(query)

                    ||

                    product.sport
                        .toLowerCase()
                        .includes(query)

                    ||

                    product.category
                        .toLowerCase()
                        .includes(query)

                    ||

                    (
                        product.league &&
                        product.league
                            .toLowerCase()
                            .includes(query)
                    )

                    ||

                    (
                        product.team &&
                        product.team
                            .toLowerCase()
                            .includes(query)
                    )

                );

            });


        productsGrid.innerHTML = "";


        results.forEach(product => {

            const card =
                document.createElement("article");

            card.className =
                "product-card";

            card.innerHTML = `

                <div class="product-visual">

                    <div class="product-icon">
                        ${product.icon}
                    </div>

                </div>

                <div class="product-info">

                    <span class="product-sport">
                        ${product.sport.toUpperCase()}
                    </span>

                    <h3>
                        ${product.title}
                    </h3>

                    <p class="product-meta">
                        ${product.category}
                    </p>

                    <div class="product-bottom">

                        <strong class="product-price">
                            ₹${product.price.toLocaleString("en-IN")}
                        </strong>

                        <button
                            class="product-view"
                            data-id="${product.id}"
                        >
                            VIEW
                        </button>

                    </div>

                </div>

            `;

            productsGrid.appendChild(card);

        });


        document
            .querySelectorAll(".product-view")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const product =
                            products.find(
                                p =>
                                    p.id ===
                                    Number(button.dataset.id)
                            );

                        openProduct(product);

                    }
                );

            });

    });


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenu =
    document.getElementById("mobileMenu");


document
    .getElementById("menuButton")
    .addEventListener("click", () => {

        mobileMenu.classList.add("open");

    });


document
    .getElementById("closeMenu")
    .addEventListener("click", () => {

        mobileMenu.classList.remove("open");

    });


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

        });

    });


/* =========================================================
   NOTIFICATION
========================================================= */

let notificationTimer;


function showNotification(message) {

    const notification =
        document.getElementById("notification");

    notification.textContent =
        message;

    notification.classList.add("show");

    clearTimeout(notificationTimer);

    notificationTimer =
        setTimeout(() => {

            notification.classList.remove("show");

        }, 2500);

}


/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursorDot =
    document.querySelector(".cursor-dot");

const cursorRing =
    document.querySelector(".cursor-ring");


document.addEventListener(
    "mousemove",
    event => {

        cursorDot.style.left =
            `${event.clientX}px`;

        cursorDot.style.top =
            `${event.clientY}px`;

        cursorRing.style.left =
            `${event.clientX}px`;

        cursorRing.style.top =
            `${event.clientY}px`;

    }
);


document
    .querySelectorAll(
        "a, button, .sport-card, .product-card"
    )
    .forEach(element => {

        element.addEventListener(
            "mouseenter",
            () => {
                cursorRing.classList.add("hover");
            }
        );

        element.addEventListener(
            "mouseleave",
            () => {
                cursorRing.classList.remove("hover");
            }
        );

    });


/* =========================================================
   PARALLAX EFFECT
========================================================= */

window.addEventListener(
    "scroll",
    () => {

        const scroll =
            window.scrollY;

        const heroObject =
            document.querySelector(".hero-object");

        if (heroObject) {

            heroObject.style.transform =
                `translateY(${scroll * 0.08}px)`;

        }

    },
    {
        passive: true
    }
);


/* =========================================================
   3D TILT EFFECT
========================================================= */

document
    .querySelectorAll(".sport-card")
    .forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    ((y - centerY) / centerY) * -4;

                const rotateY =
                    ((x - centerX) / centerX) * 4;

                card.style.transform =
                    `
                    perspective(700px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-10px)
                    `;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeProduct();

            searchPanel.classList.remove("open");

            mobileMenu.classList.remove("open");

            cartPanel.classList.remove("open");

        }

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

renderProducts();

updateCart();