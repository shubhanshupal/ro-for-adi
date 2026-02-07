document.addEventListener('DOMContentLoaded', () => {
    // Petal Animation
    const petalsContainer = document.getElementById('petals-container');

    function createPetal(initial = false) {
        const petal = document.createElement('div');
        const isHeart = Math.random() > 0.7; // 30% chance to be a heart

        if (isHeart) {
            petal.classList.add('heart');
            petal.innerHTML = '❤️';
        } else {
            petal.classList.add('petal');
        }

        const size = Math.random() * 15 + 10 + 'px';
        const startLeft = Math.random() * 100 + 'vw';
        const duration = Math.random() * 5 + 5 + 's'; // 5-10 seconds

        // If initial, randomize vertical position too so they are already falling
        if (initial) {
            petal.style.top = Math.random() * 100 + 'vh';
            petal.style.animationDelay = '0s';
        } else {
            petal.style.animationDelay = Math.random() * 2 + 's';
        }

        petal.style.width = isHeart ? 'auto' : size;
        petal.style.height = isHeart ? 'auto' : size;
        petal.style.left = startLeft;

        // Random horizontal sway handled by CSS usually, but let's just set duration
        petal.style.animationDuration = duration;

        petalsContainer.appendChild(petal);

        petal.addEventListener('animationend', () => {
            petal.remove();
        });
    }

    // Create initial batch so screen isn't empty
    for (let i = 0; i < 30; i++) {
        createPetal(true);
    }

    // Continuously create petals
    setInterval(() => createPetal(false), 300);


    // Parallax Effect
    const roseImage = document.getElementById('rose-image');
    const textSection = document.querySelector('.text-section');

    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;

        // Move rose slightly
        if (roseImage) {
            roseImage.style.transform = `translate(${x}px, ${y}px) rotate(${x * 0.2}deg)`;
        }

        // Move text in opposite direction for depth
        if (textSection) {
            textSection.style.transform = `translate(${-x * 0.5}px, ${-y * 0.5}px)`;
        }
    });
});
