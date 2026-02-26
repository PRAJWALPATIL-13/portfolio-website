document.addEventListener('DOMContentLoaded', () => {
    // Typewriter Effect Variables
    const textElement = document.querySelector('.typing-text');
    const responseElement = document.querySelector('.response');
    
    // The sequence of text to type
    const textsToType = [
        "cat intro.txt",
        // "whoami", 
        // "terraform apply"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    // Start delay
    setTimeout(type, 1000);

    function type() {
        // Current sentence
        const currentText = textsToType[textIndex];
        
        if (isDeleting) {
            // Remove matching logic if we only want one typing sequence without loop
            // For now, implementing simple one-time type for "cat intro.txt"
        } else {
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            // Finished typing the command
            
            // Wait a bit, then show response
            setTimeout(() => {
                if (responseElement) {
                    responseElement.classList.add('visible');
                    responseElement.classList.remove('hidden');
                }
            }, 500);
            
            return; // Stop after first command
        }

        setTimeout(type, typeSpeed);
    }

    // Dynamic Year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Smooth Scroll for anchor links (optional as CSS handles scroll-behavior: smooth)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Add animation logic if we add fade-in class to CSS
});
