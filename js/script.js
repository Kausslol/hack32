document.addEventListener('DOMContentLoaded', function() {
    // Flicker effect for the entire page
    setInterval(() => {
        document.body.style.backgroundColor = Math.random() > 0.9 ? '#0a0a0a' : '#050505';
    }, 2000);

    // Play random eerie sounds
    const sounds = ['howl.mp3', 'scream.mp3', 'whisper.mp3']; // Add your sound files here
    setInterval(() => {
        const audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
        audio.volume = 0.2;
        audio.play();
    }, 10000); // Play every 10 seconds

    // Hover shadow movement
    document.querySelectorAll('.non-entity').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.8)';
        });
        item.addEventListener('mouseout', () => {
            item.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.7)';

            // Increase flicker frequency
            setInterval(() => {
                document.body.style.backgroundColor =
                    Math.random() > 0.8 ? '#0a0a0a' : '#030303';
            }, 1000); // Reduced to 1 second

// Increase sound frequency and volume
            setInterval(() => {
                const audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
                audio.volume = 0.4; // Increased volume
            }, 5000); // Reduced to 5 seconds

// Add random text distortion
            setInterval(() => {
                document.querySelectorAll('p').forEach(p => {
                    p.style.transform = `skew(${Math.random() * 2}deg)`;
                });
            }, 3000);

        });
    });
});
