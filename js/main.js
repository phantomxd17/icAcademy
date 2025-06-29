document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode');

    // Load dark mode state from localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        modeToggle.checked = true;
        document.body.classList.add('dark-mode');
    } else {
        modeToggle.checked = false;
        document.body.classList.remove('dark-mode');
    }

    // Handle dark mode toggle
    modeToggle.addEventListener('change', () => {
        if (modeToggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });


    const courseItems = document.querySelectorAll('.course-item');
    courseItems.forEach(item => {
        const circle = item.querySelector('.center-circle');
        circle.addEventListener('click', function (e) {
            e.stopPropagation();
            courseItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });
    document.addEventListener('click', function (e) {
        let clickedOutside = true;
        courseItems.forEach(item => {
            if (item.contains(e.target)) {
                clickedOutside = false;
            }
        });
        if (clickedOutside) {
            courseItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });

    // Swiper initialization for reviews section
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    const scrollToTopBtn = document.getElementById('scrollToTop');

    // Show/hide button based on scroll position (10% of page height)
    window.addEventListener('scroll', () => {
        const scrollThreshold = document.documentElement.scrollHeight * 0.1;
        if (window.scrollY > scrollThreshold) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // counter animation
    const counters = document.querySelectorAll('.counter');
    let hasStarted = false;
    const animateCounters = () => {
        const duration = 5000;
        const frameRate = 20;
        const totalFrames = duration / frameRate;

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const increment = target / totalFrames;

            const updateCount = () => {
                count += increment;
                if (count < target) {
                    counter.innerText = Math.ceil(count).toLocaleString();
                    setTimeout(updateCount, frameRate);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };

            updateCount();
        });
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasStarted) {
                hasStarted = true;
                animateCounters();
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(document.querySelector('#stats'));

    // Track active section in navbar while scrolling
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.menu-links a:not(.xmrk)');

    function updateActiveLink() {
        let current = 'home';
        const navbarHeight = document.querySelector('nav').offsetHeight || 0;

        if (window.pageYOffset < navbarHeight) {
            current = 'home';
        } else {
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.pageYOffset >= (sectionTop - navbarHeight) && window.pageYOffset < (sectionTop + sectionHeight - navbarHeight)) {
                    current = section.getAttribute('id');
                }
            });
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });

    });

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeButton = document.querySelector(".close-modal");
    const prevButton = document.querySelector(".modal-prev");
    const nextButton = document.querySelector(".modal-next");
    const images = document.querySelectorAll(".swiper-slide img");
    let currentImageIndex = 0;

    images.forEach((img, index) => {
        img.addEventListener("click", function () {
            modal.classList.add("active");
            modalImg.src = this.src;
            currentImageIndex = index;
            document.body.style.overflow = "hidden";
        });
    });

    closeButton.addEventListener("click", closeModal);
    modal.addEventListener("click", function (e) {
        if (e.target === modal) closeModal();
    });

    function closeModal() {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }

    prevButton.addEventListener("click", function (e) {
        e.stopPropagation();
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentImageIndex].src;
    });

    nextButton.addEventListener("click", function (e) {
        e.stopPropagation();
        currentImageIndex = (currentImageIndex + 1) % images.length;
        modalImg.src = images[currentImageIndex].src;
    });

    document.addEventListener("keydown", function (e) {
        if (!modal.classList.contains("active")) return;

        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowLeft") nextButton.click();
        if (e.key === "ArrowRight") prevButton.click();
    });


    const emails = [
        { user: "acacademyy", domain: "gmail.com", id: "email1" },
        { user: "icacademyy", domain: "gmail.com", id: "email2" }
    ];

    emails.forEach(({ user, domain, id }) => {
        const email = `${user}@${domain}`;
        document.getElementById(id).innerHTML =
            `<a href="mailto:${email}" aria-label="contact us on ${user} email">${email}</a>`;
    });
});

function SendEmail(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const messageContainer = document.querySelector('.subscription-message');
    const englishButton = document.getElementById('lang-en');
    const arabicButton = document.getElementById('lang-ar');

    if (messageContainer) {
        if (email) {
            if (document.documentElement.dir === 'rtl') {
                messageContainer.innerHTML = 'شكراً لاشتراكك! يرجى متابعتنا على فيسبوك عبر <a href="https://web.facebook.com/IC.Academy2022" target="_blank" style="color: #007bff; text-decoration: none;" onmouseover="this.style.color=\'#0056b3\'" onmouseout="this.style.color=\'#007bff\'">أكاديمية آي سي</a> للبقاء على اطلاع.';
            } else {
                messageContainer.innerHTML = 'Thank you for subscribing! Please follow us on Facebook at <a href="https://web.facebook.com/IC.Academy2022" target="_blank" style="color: #007bff; text-decoration: none;" onmouseover="this.style.color=\'#0056b3\'" onmouseout="this.style.color=\'#007bff\'">IC.Academy</a> to stay updated.';
            }
            messageContainer.style.color = '#22bb33';
            messageContainer.style.marginBottom = '.75rem';
        }
    }

    // Change message language based on button clicks
    if (englishButton) {
        englishButton.addEventListener('click', () => {
            document.documentElement.dir = 'ltr';
            if (messageContainer.innerHTML.includes('شكراً')) {
                messageContainer.innerHTML = 'Thank you for subscribing! Please follow us on Facebook at <a href="https://web.facebook.com/IC.Academy2022" target="_blank" style="color: #007bff; text-decoration: none;" onmouseover="this.style.color=\'#0056b3\'" onmouseout="this.style.color=\'#007bff\'">IC.Academy</a> to stay updated.';
            }
        });
    }

    if (arabicButton) {
        arabicButton.addEventListener('click', () => {
            document.documentElement.dir = 'rtl';
            if (messageContainer.innerHTML.includes('Thank you')) {
                messageContainer.innerHTML = 'شكراً لاشتراكك! يرجى متابعتنا على فيسبوك عبر <a href="https://web.facebook.com/IC.Academy2022" target="_blank" style="color: #007bff; text-decoration: none;" onmouseover="this.style.color=\'#0056b3\'" onmouseout="this.style.color=\'#007bff\'">أكاديمية آي سي</a> للبقاء على اطلاع.';
            }
        });
    }

    emailInput.value = '';
}
