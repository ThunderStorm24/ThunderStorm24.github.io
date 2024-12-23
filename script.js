window.addEventListener("scroll", function () {
    var navbar = document.querySelector("nav");
    var navlinks = document.querySelector("ul");
    navbar.classList.toggle("stickyy", window.scrollY > 100);
    navlinks.classList.toggle("stickyyy", window.scrollY > 100);
});

// Funkcja do przełączania motywu
function toggleTheme() {
    const body = document.body;

    // Przełączanie motywu
    const currentTheme = body.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-bs-theme', newTheme);

    // Zmiana ikonki przycisku
    const themeButton = document.querySelector('.theme-toggle');
    themeButton.textContent = newTheme === 'dark' ? '☀️' : '🌙';

    const sections = document.querySelectorAll('#about, #skills, #portfolio');
    sections.forEach(section => {
        if (section.classList.contains('bg-light')) {
            section.classList.remove('bg-light');
        }
    });

    // Zapisanie wybranego motywu w localStorage
    localStorage.setItem('theme', newTheme);
}

// Ustawienie motywu na podstawie preferencji systemowych lub zapisanych w localStorage
function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        // Ustawienie motywu według zapisanego w localStorage
        document.body.setAttribute('data-bs-theme', savedTheme);
    } else {
        // Ustawienie motywu na podstawie preferencji systemowych, jeśli brak zapisanej opcji
        document.body.setAttribute('data-bs-theme', systemPrefersDark ? 'dark' : 'light');
    }

    const sections = document.querySelectorAll('#about, #skills, #portfolio');
    sections.forEach(section => {
        if (section.classList.contains('bg-light')) {
            section.classList.remove('bg-light');
        }
    });

    // Ustawienie ikony przycisku na podstawie wybranego motywu
    const themeButton = document.querySelector('.theme-toggle');
    const currentTheme = document.body.getAttribute('data-bs-theme');
    themeButton.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}

// Wywołaj funkcję przy załadowaniu strony
document.addEventListener('DOMContentLoaded', setInitialTheme);


function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

function closeMenuOnClickOutside(event) {
    const navLinks = document.querySelector(".nav-links");
    const menuToggle = document.querySelector(".menu-toggle");
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove("active");
    }
}

function closeMenuOnScroll() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.remove("active");
}

document.addEventListener("click", closeMenuOnClickOutside);

document.addEventListener("scroll", closeMenuOnScroll);

document.addEventListener("DOMContentLoaded", function () {
    const text = "About me";
    const speed = 250;
    const eraseSpeed = 50;
    let index = 0;
    let isErasing = false;
    const textElement = document.getElementById("text");
    let typingInterval;

    function typeWriter() {
        if (!isErasing && index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            typingInterval = setTimeout(typeWriter, speed);
        } else if (isErasing && index > 0) {
            textElement.textContent = text.substring(0, index - 1);
            index--;
            typingInterval = setTimeout(typeWriter, eraseSpeed);
        } else if (!isErasing && index === text.length) {
            clearTimeout(typingInterval); 
        }
    }

    function startTyping() {
        isErasing = false;
        typeWriter();
    }

    function startErasing() {
        isErasing = true;
        typeWriter();
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                startTyping();
            } else if (!entry.isIntersecting && index > 0) {
                startErasing();
            }
        });
    }, { threshold: 0.9 }); 

    const section = document.getElementById("typewriter-text");
    observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.hide');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.remove('visible');
                entry.target.classList.add('hidden');
            }
        });
    }, {
        threshold: 0.4
    });

    elements.forEach(el => {
        observer.observe(el);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const roleDescriptions = ["Programmer", "Web Designer", "Front-end", "Back-end"];
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const delayBetweenTexts = 1500;
    let textIndex = 0;
    let charIndex = 0;
    let isErasing = false;
    let currentText = '';
    const roleTextElement = document.getElementById("role-text-span");

    function typeWriterEffect() {
        if (!isErasing && charIndex < currentText.length) {
            roleTextElement.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriterEffect, typingSpeed);
        } else if (isErasing && charIndex > 0) {
            roleTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeWriterEffect, deletingSpeed);
        } else if (!isErasing && charIndex === currentText.length) {
            isErasing = true;
            setTimeout(typeWriterEffect, delayBetweenTexts);
        } else if (isErasing && charIndex === 0) {
            textIndex = (textIndex + 1) % roleDescriptions.length;
            currentText = roleDescriptions[textIndex];
            isErasing = false;
            setTimeout(typeWriterEffect, delayBetweenTexts);
        }
    }

    currentText = roleDescriptions[textIndex];

    setTimeout(() => {
        typeWriterEffect();
    }, 2000);
});

document.addEventListener("DOMContentLoaded", function() {
	const targetText = "Skills";
	const titleElement = document.querySelector(".section-title");

	let currentIndex = 0;
	let isAnimated = false;

	function animateText() {
		if (isAnimated) return;
		isAnimated = true;

		function changeLetter() {
			let letterArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
			let interval = setInterval(() => {
				titleElement.textContent = targetText.slice(0, currentIndex) + letterArray[Math.floor(Math.random() * letterArray.length)];
			}, 50);

			setTimeout(() => {
				clearInterval(interval);
				titleElement.textContent = targetText.slice(0, currentIndex + 1);
				currentIndex++;
				if (currentIndex < targetText.length) {
					changeLetter();
				} else {
					titleElement.classList.add("glitch-effect");
				}
			}, 500);
		}

		changeLetter();
	}

	function resetAnimation() {
		isAnimated = false;
		currentIndex = 0;
		titleElement.classList.remove("glitch-effect");
		titleElement.textContent = "";
	}

	function onScroll() {
		const sectionPosition = document.querySelector('.skills').getBoundingClientRect();
		const inViewport = sectionPosition.top < window.innerHeight && sectionPosition.bottom >= 0;

		if (inViewport) {
			animateText();
		} else {
			resetAnimation();
		}
	}

	window.addEventListener('scroll', onScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".icon-scroll");
    
    const iconsContainer = document.createElement("div");
    iconsContainer.classList.add("icons-container");

    const icons = Array.from(scrollContainer.children);
    icons.forEach(icon => {
        iconsContainer.appendChild(icon.cloneNode(true));
    });
    icons.forEach(icon => {
        iconsContainer.appendChild(icon.cloneNode(true));
    });
    

    scrollContainer.innerHTML = '';
    scrollContainer.appendChild(iconsContainer);
});
