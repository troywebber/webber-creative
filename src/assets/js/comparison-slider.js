/**
 * Comparison Slider - Before/After Image Comparison
 * Allows users to drag left/right to reveal comparison images
 */

(function() {
    'use strict';

    // Initialize all comparison sliders on the page
    function initComparisonSliders() {
        const sliders = document.querySelectorAll('.cs-comparison-slider');
        
        sliders.forEach(slider => {
            const wrapper = slider.querySelector('.cs-slider-wrapper');
            const handle = slider.querySelector('.cs-slider-handle');
            const before = slider.querySelector('.cs-slider-before');
            
            if (!wrapper || !handle || !before) return;

            let isDragging = false;
            let startX = 0;
            let currentX = 0;
            let position = 50; // Start at 50% (middle)

            // Update slider position
            function updatePosition(x) {
                const rect = wrapper.getBoundingClientRect();
                const relativeX = x - rect.left;
                const percentage = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));
                
                position = percentage;
                handle.style.left = percentage + '%';
                before.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
                handle.setAttribute('aria-valuenow', Math.round(percentage));
            }

            // Mouse events
            function handleStart(e) {
                isDragging = true;
                startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
                wrapper.style.cursor = 'grabbing';
                e.preventDefault();
            }

            function handleMove(e) {
                if (!isDragging) return;
                
                currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
                updatePosition(currentX);
                e.preventDefault();
            }

            function handleEnd() {
                isDragging = false;
                wrapper.style.cursor = 'grab';
            }

            // Mouse events
            wrapper.addEventListener('mousedown', handleStart);
            document.addEventListener('mousemove', handleMove);
            document.addEventListener('mouseup', handleEnd);

            // Touch events
            wrapper.addEventListener('touchstart', handleStart, { passive: false });
            document.addEventListener('touchmove', handleMove, { passive: false });
            document.addEventListener('touchend', handleEnd);

            // Keyboard navigation
            handle.addEventListener('keydown', (e) => {
                let newPosition = position;
                
                switch(e.key) {
                    case 'ArrowLeft':
                        newPosition = Math.max(0, position - 5);
                        e.preventDefault();
                        break;
                    case 'ArrowRight':
                        newPosition = Math.min(100, position + 5);
                        e.preventDefault();
                        break;
                    case 'Home':
                        newPosition = 0;
                        e.preventDefault();
                        break;
                    case 'End':
                        newPosition = 100;
                        e.preventDefault();
                        break;
                    default:
                        return;
                }
                
                if (newPosition !== position) {
                    const rect = wrapper.getBoundingClientRect();
                    const x = rect.left + (rect.width * newPosition / 100);
                    updatePosition(x);
                }
            });

            // Click on wrapper to move handle
            wrapper.addEventListener('click', (e) => {
                if (e.target === wrapper || e.target === before || e.target.closest('.cs-slider-before')) {
                    updatePosition(e.clientX);
                }
            });

            // Initialize position
            updatePosition(wrapper.getBoundingClientRect().left + (wrapper.getBoundingClientRect().width * position / 100));
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initComparisonSliders);
    } else {
        initComparisonSliders();
    }
})();

