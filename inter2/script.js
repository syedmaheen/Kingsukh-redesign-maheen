window.onload = function() {
    setTimeout(function() {
      document.getElementById('preloader').style.display = 'none';
    }, 2000); // Adjust time for preloader animation
  };
  


  
  const playButton = document.getElementById('play-button');
  const hoverSound = document.getElementById('hover-sound');
  
  playButton.addEventListener('mouseover', function() {
    hoverSound.play();
  });