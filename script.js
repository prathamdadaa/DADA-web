(() => {
    'use strict';

    const LOADER_DURATION_MS = 3000;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------------------------------------------------
       Intro loader
       --------------------------------------------------- */
    function initLoader() {
        const loader = document.getElementById('loader');
        const mainContent = document.getElementById('main-content');
        if (!loader || !mainContent) return;

        const reveal = () => {
            loader.classList.add('fade-out');
            mainContent.classList.add('reveal');
            document.body.style.overflow = 'auto';
        };

        if (prefersReducedMotion) {
            // Skip the cinematic hold entirely for users who asked for less motion
            reveal();
            return;
        }

        window.setTimeout(reveal, LOADER_DURATION_MS);
    }

    /* ---------------------------------------------------
       Semester tabs (accessible, no reliance on global `event`)
       --------------------------------------------------- */
    function initSemesterTabs() {
        const tabs = Array.from(document.querySelectorAll('.tab-btn'));
        const panels = Array.from(document.querySelectorAll('.grid-section'));

        if (!tabs.length || !panels.length) return;

        function activate(semId) {
            panels.forEach((panel) => {
                const isMatch = panel.id === semId;
                panel.classList.toggle('active-grid', isMatch);
                panel.hidden = !isMatch;
            });

            tabs.forEach((tab) => {
                const isMatch = tab.dataset.sem === semId;
                tab.classList.toggle('active', isMatch);
                tab.setAttribute('aria-selected', String(isMatch));
                tab.tabIndex = isMatch ? 0 : -1;
            });
        }

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => activate(tab.dataset.sem));

            // Basic roving-tabindex keyboard support (Left/Right/Home/End) per ARIA tabs pattern
            tab.addEventListener('keydown', (e) => {
                let newIndex = null;
                if (e.key === 'ArrowRight') newIndex = (index + 1) % tabs.length;
                if (e.key === 'ArrowLeft') newIndex = (index - 1 + tabs.length) % tabs.length;
                if (e.key === 'Home') newIndex = 0;
                if (e.key === 'End') newIndex = tabs.length - 1;

                if (newIndex !== null) {
                    e.preventDefault();
                    tabs[newIndex].focus();
                    activate(tabs[newIndex].dataset.sem);
                }
            });
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        initLoader();
        initSemesterTabs();
    });
})();
