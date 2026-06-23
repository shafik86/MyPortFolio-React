/**
 * Corporate Portfolio - Main Script
 */

// ===== CONFIGURATION =====
const CONFIG = {
    showLearnMoreButtons: true,    // Toggle Learn More buttons visibility
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
    initSmoothScrolling();
    initLearnMoreButtons();
    initCounters();
});

/**
 * Learn More Buttons Control
 */
function initLearnMoreButtons() {
    if (CONFIG.showLearnMoreButtons) {
        // Company buttons
        const nasaDefBtn = document.getElementById('learnMoreNasaDef');
        const isystecBtn = document.getElementById('learnMoreIsystec');
        
        // Product buttons
        const aisaBtn = document.getElementById('learnMoreAISA');
        
        if (nasaDefBtn) nasaDefBtn.style.display = 'inline-block';
        if (isystecBtn) isystecBtn.style.display = 'inline-block';
        if (aisaBtn) aisaBtn.style.display = 'block';
    }
}

/**
 * Theme Toggle - Light/Dark Mode
 */
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;
    
    const savedTheme = localStorage.getItem('bs-theme') || 'light';
    html.setAttribute('data-bs-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle?.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('bs-theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'bi bi-sun' : 'bi bi-moon';
        }
    }
}

/**
 * Smooth Scrolling for Navigation
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = 80;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            }
        });
    });
}

/**
 * Display Counters Immediately
 */
function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    counters.forEach(counter => {
        const target = counter.getAttribute('data-counter');
        counter.textContent = target + (target === '2' ? '' : '+');
    });
}

/**
 * Google Analytics
 */
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-K2GV3ZK1CB');

console.log('✅ Portfolio initialized successfully!');
