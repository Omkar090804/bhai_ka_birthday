const centerImage = document.getElementById('centerImage');
const leftImage = document.getElementById('leftImage');
const rightImage = document.getElementById('rightImage');

centerImage.addEventListener('mouseenter', () => {
  // Random position within the viewport
  const x = Math.random() * (window.innerWidth - centerImage.offsetWidth);
  const y = Math.random() * (window.innerHeight - centerImage.offsetHeight);
  
  // Set the new position
  centerImage.style.position = 'absolute'; // Ensure it can move freely
  centerImage.style.left = `${x}px`;
  centerImage.style.top = `${y}px`;

  // Disable pointer events to make it unclickable
  centerImage.style.pointerEvents = 'none';
});

centerImage.addEventListener('mouseleave', () => {
  // Re-enable pointer events when mouse leaves
  centerImage.style.pointerEvents = 'auto';
});

// Add click event listeners to the left and right images
leftImage.addEventListener('click', () => {
  window.location.href = 'question.html'; // Navigate to question page
});

rightImage.addEventListener('click', () => {
  window.location.href = 'question.html'; // Navigate to question page
});
