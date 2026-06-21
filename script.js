// Musical Notes Animation
const notesContainer = document.getElementById('notesContainer');
const musicNotes = ['♪', '♫', '♬', '♩', '♭', '♮', '♯', '𝄞'];

// Create flying notes
function createNote() {
    const note = document.createElement('div');
    note.className = 'note';
    note.textContent = musicNotes[Math.floor(Math.random() * musicNotes.length)];
    
    // Random horizontal position
    note.style.left = Math.random() * 100 + '%';
    
    // Random animation duration (10-20 seconds)
    const duration = Math.random() * 10 + 10;
    note.style.animationDuration = duration + 's';
    
    // Random delay
    note.style.animationDelay = Math.random() * 5 + 's';
    
    // Random size
    const size = Math.random() * 20 + 20;
    note.style.fontSize = size + 'px';
    
    // Random color variation
    const colors = [
        'var(--primary-color)',
        'var(--secondary-color)',
        'var(--accent-color)',
        '#a78bfa',
        '#f472b6'
    ];
    note.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    notesContainer.appendChild(note);
    
    // Remove note after animation completes
    setTimeout(() => {
        note.remove();
    }, (duration + 5) * 1000);
}

// Create initial notes
for (let i = 0; i < 15; i++) {
    setTimeout(createNote, i * 500);
}

// Continuously create new notes
setInterval(createNote, 2000);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation links on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (name && email && message) {
            // Show success message
            alert('Thank you for your message! I will get back to you soon. 🎵');
            
            // Reset form
            this.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.skill-card, .project-card, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover effect to create more notes
document.querySelectorAll('.project-card, .skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        // Create a burst of notes on hover
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const note = document.createElement('div');
                note.className = 'note';
                note.textContent = musicNotes[Math.floor(Math.random() * musicNotes.length)];
                
                const rect = this.getBoundingClientRect();
                note.style.left = (rect.left + rect.width / 2) + 'px';
                note.style.top = rect.top + 'px';
                note.style.position = 'fixed';
                note.style.animationDuration = '3s';
                
                notesContainer.appendChild(note);
                
                setTimeout(() => note.remove(), 3000);
            }, i * 100);
        }
    });
});

// Add typing effect to hero title
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

// Add music visualizer animation variation
const bars = document.querySelectorAll('.bar');
bars.forEach((bar, index) => {
    setInterval(() => {
        const randomHeight = Math.random() * 60 + 20;
        bar.style.height = randomHeight + 'px';
    }, 300 + (index * 50));
});

// Add cursor trail effect with music notes
let lastNoteTime = 0;
document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastNoteTime > 500) { // Create note every 500ms
        lastNoteTime = now;
        
        const note = document.createElement('div');
        note.className = 'cursor-note';
        note.textContent = musicNotes[Math.floor(Math.random() * musicNotes.length)];
        note.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            font-size: 20px;
            color: var(--primary-color);
            pointer-events: none;
            z-index: 9999;
            animation: fade-out 1s ease-out forwards;
            opacity: 0.8;
        `;
        
        document.body.appendChild(note);
        
        setTimeout(() => note.remove(), 1000);
    }
});

// Add fade-out animation for cursor notes
const style = document.createElement('style');
style.textContent = `
    @keyframes fade-out {
        0% {
            opacity: 0.8;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-30px) scale(0.5);
        }
    }
    
    .nav-link.active {
        color: var(--primary-color);
    }
`;
document.head.appendChild(style);

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Console message for visitors
console.log('%c🎵 Welcome to My Music Portfolio! 🎵', 'color: #8b5cf6; font-size: 20px; font-weight: bold;');
console.log('%cEnjoy the musical experience!', 'color: #ec4899; font-size: 14px;');
