// script.js
const GlassTheme = {
    init: function() {
        const btn = document.getElementById('theme-toggle');
        const root = document.documentElement;
        
        // Check for saved theme
        const saved = localStorage.getItem('skeuo-theme') || 'light';
        root.setAttribute('data-theme', saved);

        btn.addEventListener('click', () => {
            const current = root.getAttribute('data-theme');
            const next = current === 'light' ? 'dark' : 'light';
            
            root.setAttribute('data-theme', next);
            localStorage.setItem('skeuo-theme', next);
        });
    }
};

// Simple Component Logic (expandable like the original kit)
const SkeuoInteraction = {
    init: function() {
        // Add subtle haptic simulation
        document.querySelectorAll('.skeuo-btn').forEach(btn => {
            btn.addEventListener('mousedown', () => {
                if ('vibrate' in navigator) navigator.vibrate(5);
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    GlassTheme.init();
    SkeuoInteraction.init();
});
