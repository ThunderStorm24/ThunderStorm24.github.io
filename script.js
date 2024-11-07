window.addEventListener("scroll", function () {
    var navbar = document.querySelector("nav");
    navbar.classList.toggle("stickyy", window.scrollY > 100);
});
document.addEventListener("DOMContentLoaded", function () {
    const text = "About me";
    const speed = 450;
    const eraseSpeed = 50;
    const delayBetweenCycles = 1000;
    let index = 0;
    let isErasing = false;
    const textElement = document.getElementById("text");

    function typeWriter() {
        if (!isErasing && index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else if (isErasing && index > 0) {
            textElement.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(typeWriter, eraseSpeed);
        } else if (!isErasing && index === text.length) {
            isErasing = true;
            setTimeout(typeWriter, delayBetweenCycles);
        } else if (isErasing && index === 0) {
            isErasing = false;
            setTimeout(typeWriter, delayBetweenCycles);
        }
    }

    typeWriter();
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
    const roleDescriptions = ["Programmer", "Web Designer", "Front-end Developer", "Back-end Developer"];
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

