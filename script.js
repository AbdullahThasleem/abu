// Function to create a random heart
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '💜';
    return heart;
  }
  
  // Function to randomly position and animate hearts
  function positionHearts() {
    const heartContainer = document.getElementById('heart-container');
    for (let i = 0; i < 100; i++) {
      const heart = createHeart();
      heartContainer.appendChild(heart);
  
      const randomLeft = Math.random() * 100;
      const randomTop = Math.random() * 100;
      const randomAnimationDuration = Math.random() * (12 - 8) + 8;
      const randomDelay = Math.random() * 5;
  
      heart.style.left = `${randomLeft}%`;
      heart.style.top = `${randomTop}%`;
      heart.style.animationDuration = `${randomAnimationDuration}s`;
      heart.style.animationDelay = `${randomDelay}s`;
    }
  }
  
  // Run heart positioning after page load
  document.addEventListener('DOMContentLoaded', positionHearts);
  
  // Reveal hidden message on button click
  document.getElementById('reveal-button').addEventListener('click', function () {
    const hiddenMessage = document.getElementById('hidden-message');
    const button = document.getElementById('reveal-button');
  
    // Show hidden message
    hiddenMessage.classList.add('show');
  
    // Fade out button after click
    button.classList.add('fade-out');
    setTimeout(() => button.style.display = 'none', 1500); // remove fully after fade
  });
  