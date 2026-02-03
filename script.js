(function() {
    const mainHeader = document.getElementById('header');


    if (mainHeader) {
        window.addEventListener('scroll', () => {
            
            if (window.scrollY > 50) {
                mainHeader.classList.add('scrolled');
            } else {
                mainHeader.classList.remove('scrolled');
            }
        });
    }


    const observerOptions = { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)'; 
        observer.observe(card);
    });


    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button');
            const originalText = btn.innerText;
            
            btn.disabled = true;
            btn.innerText = 'Enviando...';

        
            setTimeout(() => {
                alert('Sua solicitação premium foi recebida. Entraremos em contato!');
                this.reset();
                btn.disabled = false;
                btn.innerText = originalText;
            }, 1500); 
        });
    }
})();
