// Mild Rain Drop Effect Script
document.addEventListener('DOMContentLoaded', function() {
  // Add CSS for rain drop animation
  const style = document.createElement('style');
  style.textContent = `
    .rain-effect {
      position: relative;
      overflow: hidden;
    }

    .rain-drop {
      position: absolute;
      width: 2px;
      height: 20px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 1px;
      animation: fall linear infinite;
      opacity: 0.7;
    }

    @keyframes fall {
      0% {
        transform: translateY(-20px);
        opacity: 0;
      }
      10% {
        opacity: 0.7;
      }
      90% {
        opacity: 0.7;
      }
      100% {
        transform: translateY(100vh);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Function to create rain drops
  function createRainDrop(container) {
    const drop = document.createElement('div');
    drop.className = 'rain-drop';
    drop.style.left = Math.random() * 100 + '%';
    drop.style.animationDuration = (Math.random() * 2 + 1) + 's';
    drop.style.animationDelay = Math.random() * 2 + 's';
    container.appendChild(drop);

    // Remove drop after animation
    setTimeout(() => {
      if (drop.parentNode) {
        drop.parentNode.removeChild(drop);
      }
    }, 3000);
  }

  // Apply effect to forms
  const forms = document.querySelectorAll('#login-form, .donation-form');
  forms.forEach(form => {
    form.classList.add('rain-effect');
    // Create 3-5 drops per form
    for (let i = 0; i < 4; i++) {
      setTimeout(() => createRainDrop(form), i * 500);
    }
    // Continue creating drops periodically
    setInterval(() => createRainDrop(form), 2000);
  });

  // Apply effect to footers
  const footers = document.querySelectorAll('footer');
  footers.forEach(footer => {
    footer.classList.add('rain-effect');
    // Create 2-3 drops per footer
    for (let i = 0; i < 3; i++) {
      setTimeout(() => createRainDrop(footer), i * 700);
    }
    // Continue creating drops periodically
    setInterval(() => createRainDrop(footer), 3000);
  });
});
