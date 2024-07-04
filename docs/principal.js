$(document).ready(function() {
    const videos = $('video'); // Get all video elements

    // Intersection Observer options
    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the video is visible
    };

    // Intersection Observer callback function
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            const video = entry.target; // Get the video element
            if (entry.isIntersecting) {
                video.play().catch(error => {
                    console.error('Autoplay failed:', error);
                });
            } else {
                video.pause(); // Pause the video when it leaves the view
                video.currentTime = 0; // Reset the video to the beginning
            }
        });
    };

    // Create Intersection Observer
    const observer = new IntersectionObserver(callback, options);

    // Start observing each video element
    videos.each(function() {
        observer.observe(this);
    });
});








