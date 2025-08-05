// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // JavaScript for the loader and percentage functionality
    let progress = 0;
    const loadingText = document.getElementById('loadingText');
    const loaderContainer = document.querySelector('.loader-container');
    const content = document.getElementById('content');
    
    // Ensure content is hidden initially
    content.style.display = 'none';
    
    let loadingInterval = setInterval(function () {
        progress += 10;
        loadingText.textContent = progress + '%';
        if (progress >= 100) {
            clearInterval(loadingInterval);
            // Add a small delay before hiding loader
            setTimeout(function() {
                loaderContainer.style.display = 'none';
                content.style.display = 'block';
                content.style.opacity = '1';
                console.log('Content displayed:', content.style.display);
            }, 500);
        }
    }, 200); // Slower increment for natural loading

    // Audio play functionality
    let isPlaying = false;
    const playButton = document.getElementById('playButton');
    const audio = document.getElementById('myAudio');

    playButton.onclick = function () {
        if (isPlaying) {
            audio.pause();
            playButton.textContent = 'Play Music';
            audio.currentTime = 0; // Reset audio to start
        } else {
            // Handle audio play with error handling
            audio.play().catch(function(error) {
                console.log('Audio play failed:', error);
                alert('Audio file not found or cannot be played');
            });
            playButton.textContent = 'Stop Music';
            audio.volume = 0.4;
            audio.loop = true;
        }
        isPlaying = !isPlaying;
    };
});

