document.addEventListener('DOMContentLoaded', () => {
    // Flickering Text Effect
    const flickerTextElements = document.querySelectorAll('h1, h2, p');
    flickerTextElements.forEach(element => {
        setInterval(() => {
            if (Math.random() > 0.7) { // Maintain the likelihood of flickering
                // Toggle visibility with a very short transition
                element.style.transition = 'visibility 0.05s ease'; // Shorter transition for quicker blinks
                element.style.visibility = element.style.visibility === 'hidden' ? 'visible' : 'hidden';

                // Immediately toggle back to visible after a short delay
                setTimeout(() => {
                    element.style.visibility = 'visible';
                }, 100); // Keep the blink very short
            }
        }, 2000); // Increase the interval to make blinks less frequent
    });

    // Random Sounds Effect
    const audioFiles = ['creak.mp3', 'whisper.mp3', 'wind.mp3']; // Subtle sound files
    const audio = new Audio();
    audio.volume = 0.3; // Set lower volume for subtlety
    function playRandomSound() {
        const randomSound = audioFiles[Math.floor(Math.random() * audioFiles.length)];
        audio.src = randomSound;
        audio.play();
    }
    setInterval(() => {
        if (Math.random() > 0.9) {
            playRandomSound();
        }
    }, 15000); // Attempt to play a sound every 15 seconds

    // Shadow Movement Effect
    function createShadow() {
        const shadow = document.createElement('div');
        shadow.style.position = 'fixed';
        shadow.style.width = '50px'; // Smaller shadow size
        shadow.style.height = '50px';
        shadow.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'; // Lighter shadow color
        shadow.style.borderRadius = '50%';
        shadow.style.top = `${Math.random() * window.innerHeight}px`;
        shadow.style.left = `${Math.random() * window.innerWidth}px`;
        shadow.style.transition = 'all 2s ease'; // Smooth movement
        document.body.appendChild(shadow);
        setTimeout(() => {
            shadow.style.top = `${Math.random() * window.innerHeight}px`;
            shadow.style.left = `${Math.random() * window.innerWidth}px`;
        }, 2000); // Move shadow after 2 seconds
        setTimeout(() => {
            document.body.removeChild(shadow);
        }, 5000); // Remove shadow after 5 seconds
    }
    setInterval(createShadow, 10000); // Create a shadow every 10 seconds

    // Cursor Trail Effect
    document.addEventListener('mousemove', (event) => {
        const trail = document.createElement('div');
        trail.style.position = 'absolute';
        trail.style.width = '5px'; // Smaller trail size
        trail.style.height = '5px';
        trail.style.backgroundColor = 'rgba(100, 100, 100, 0.3)'; // Neutral trail color
        trail.style.borderRadius = '50%';
        trail.style.top = `${event.pageY}px`;
        trail.style.left = `${event.pageX}px`;
        trail.style.pointerEvents = 'none';
        document.body.appendChild(trail);
        setTimeout(() => {
            document.body.removeChild(trail);
        }, 300); // Remove trail quickly
    });
});