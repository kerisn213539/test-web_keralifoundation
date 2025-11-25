// Load and apply styles from style.json
fetch('../css/style.json')
  .then(response => response.json())
  .then(data => {
    const theme = data.theme;
    const root = document.documentElement;
    
    // Apply CSS variables from JSON
    root.style.setProperty('--primary', theme.colors.primary);
    root.style.setProperty('--secondary', theme.colors.secondary);
    root.style.setProperty('--accent', theme.colors.accent);
    root.style.setProperty('--background', theme.colors.background);
    root.style.setProperty('--text', theme.colors.text);
  })
  .catch(error => console.log('Style.json loaded:', error));

// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    // Only prevent default for same-page links
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Highlight active section in nav
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Button animation (simple pulse on click)
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function(e) {
    // Don't animate form submit buttons
    if (this.type === 'submit') return;
    
    this.style.transform = 'scale(1.1)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 200);
  });
});

// Form validation helper
function validateForm(formElement) {
  const inputs = formElement.querySelectorAll('input[required], textarea[required]');
  return Array.from(inputs).every(input => input.value.trim() !== '');
}

// Responsive design utilities
document.addEventListener('DOMContentLoaded', function() {
  // Handle viewport changes
  let viewportWidth = window.innerWidth;
  
  window.addEventListener('resize', function() {
    const newWidth = window.innerWidth;
    if ((viewportWidth <= 768 && newWidth > 768) || 
        (viewportWidth > 768 && newWidth <= 768)) {
      viewportWidth = newWidth;
      // Adjust navigation on resize if needed
    }
  });
  
  // Improve touch targets on mobile
  const isMobile = () => window.innerWidth <= 768;
  
  if (isMobile()) {
    document.querySelectorAll('nav a').forEach(link => {
      link.style.padding = '0.75rem 0.5rem';
    });
  }
});

// Prevent layout shift from scrollbars
function preventLayoutShift() {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  if (scrollbarWidth > 0) {
    document.body.style.paddingRight = scrollbarWidth + 'px';
  }
}

preventLayoutShift();
window.addEventListener('resize', preventLayoutShift);
