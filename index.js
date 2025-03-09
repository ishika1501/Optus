document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".pricing-container");

    if (!section) {
        console.error("Section not found!");
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    section.classList.add("show");  // Add animation class when in view
                } else {
                    section.classList.remove("show"); // Remove animation class when out of view
                }
            });
        },
        { root: null, threshold: 0.6 } // 20% of section should be visible to trigger
    );

    observer.observe(section);
});




document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector("#section01");

    if (!section) {
        console.error("Section not found!");
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    section.classList.add("show");  // Apply animation when visible
                } else {
                    section.classList.remove("show"); // Remove animation to re-trigger
                }
            });
        },
        { root: null, threshold: 0.3 } // Trigger when 30% of section is visible
    );

    observer.observe(section);
});




// coderhouse animation 


const gallery = document.getElementById("gallery");

let imageIndex = 5; 
const totalImages = 9; // Number of unique images

// Function to load images and append duplicates for a seamless loop
function loadImages() {
    for (let i = 0; i < totalImages * 2; i++) { // Duplicate images for looping effect
        const img = document.createElement("img");
        img.src = `assets/moments/${(i % totalImages) + 1}.jpeg`; // Ensures proper looping
        img.alt = `Gallery Image ${i + 1}`;
        gallery.appendChild(img);
    }
}

loadImages();










document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animated-text");
    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const currentScrollY = window.scrollY;
            const isScrollingDown = currentScrollY > lastScrollY;

            if (entry.isIntersecting) {
                if (isScrollingDown) {
                    entry.target.classList.add("scroll-in-right");
                    entry.target.classList.remove("scroll-out-left", "scroll-out-right");
                } else {
                    entry.target.classList.add("scroll-in-left");
                    entry.target.classList.remove("scroll-out-left", "scroll-out-right");
                }
            } else {
                if (isScrollingDown) {
                    entry.target.classList.add("scroll-out-left");
                    entry.target.classList.remove("scroll-in-left", "scroll-in-right");
                } else {
                    entry.target.classList.add("scroll-out-right");
                    entry.target.classList.remove("scroll-in-left", "scroll-in-right");
                }
            }
        });

        lastScrollY = window.scrollY;
    }, { threshold: 0.5 });

    elements.forEach(el => observer.observe(el));
});




document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("corporate-buddies-gallery");
    const images = gallery.children;
    
    // Duplicate the images for seamless scrolling
    for (let i = 0; i < images.length; i++) {
        let clone = images[i].cloneNode(true);
        gallery.appendChild(clone);
    }
});











document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".glass-card");

    if (cards.length === 0) {
        console.error("No cards found!");
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        },
        { root: null, threshold: 0.2 } // Trigger when 20% of card is visible
    );

    cards.forEach((card) => observer.observe(card));
});




document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector("#section1 .content");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                content.classList.add("animate-content");
                observer.unobserve(content); // Run animation only once
            }
        });
    }, { threshold: 0.3 });

    observer.observe(content);
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll("#section1 .glass-card");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("animate-card");
                }, index * 200); // Delay each card by 200ms
                observer.unobserve(entry.target); // Animate once
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
});

const blob = document.querySelector(".blob");

document.addEventListener("mousemove", (event) => {
    // Directly move blob to cursor position
    blob.style.left = `${event.clientX}px`;
    blob.style.top = `${event.clientY}px`;
});



document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector(".content h1");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-heading");
            }
        });
    }, { threshold: 0.5 });

    observer.observe(heading);
});


document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector(".content h1");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-heading");
            }
        });
    }, { threshold: 0.5 });

    observer.observe(heading);
});


























const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', function(e) {
  const smoke = document.createElement('div');
  smoke.className = 'smoke';
  smoke.style.left = e.clientX + 'px';
  smoke.style.top = e.clientY + 'px';
  cursor.appendChild(smoke);

  // Remove the smoke element after the animation completes
  setTimeout(() => {
    smoke.remove();
  }, 1000); // 1000ms = 1 second (duration of fadeOut animation)
});



    document.addEventListener("DOMContentLoaded", function () {
        // Wait until the page loads before animating
        animateText();
    });

    function animateText() {
        gsap.from(".text-content h1", {
            opacity: 0,
            x: 100,
            duration: 1.5,
            ease: "power2.out"
        });

        gsap.from(".text-content p", {
            opacity: 0,
            x: 100,
            duration: 1.8,
            delay: 0.5, /* Delays after heading */
            ease: "power2.out"
        });

        gsap.from(".text-content h3", {
            opacity: 0,
            x: 100,
            duration: 1,
            delay: 1, /* Delays after paragraph */
            ease: "power2.out"
        });

        gsap.from(".text-content ul li", {
            opacity: 0,
            x: 100,
            duration: 1,
            delay: 1.5, /* Delays after heading */
            stagger: 0.3, /* Staggers each list item */
            ease: "power2.out"
        });
    }






    const galleryIIM = document.getElementById("gallery-iim");

if (galleryIIM) {  // Prevent errors if the gallery doesn't exist on some pages
    const images = [
        "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"
    ];

    function loadImages() {
        images.forEach((imgSrc) => {
            const img = document.createElement("img");
            img.src = `assets/IIM/${imgSrc}`;
            img.alt = "IIM Event Image";
            galleryIIM.appendChild(img);
        });

        images.forEach((imgSrc) => {
            const img = document.createElement("img");
            img.src = `assets/IIM/${imgSrc}`;
            img.alt = "IIM Event Image";
            galleryIIM.appendChild(img);
        });
    }

    loadImages();
}
