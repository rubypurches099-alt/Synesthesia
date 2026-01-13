// Enhanced Versions - Category Toggle Function
function toggleCategory(categoryId) {
    const content = document.getElementById(categoryId + '-content');
    const header = content.previousElementSibling;
    
    if (content.classList.contains('collapsed')) {
        content.classList.remove('collapsed');
        header.classList.remove('collapsed');
    } else {
        content.classList.add('collapsed');
        header.classList.add('collapsed');
    }
    
    // Save state to localStorage
    const collapsedCategories = JSON.parse(localStorage.getItem('collapsedCategories') || '{}');
    collapsedCategories[categoryId] = content.classList.contains('collapsed');
    localStorage.setItem('collapsedCategories', JSON.stringify(collapsedCategories));
}

// Load collapsed states on page load
function loadCategoryStates() {
    const collapsedCategories = JSON.parse(localStorage.getItem('collapsedCategories') || '{}');
    
    Object.keys(collapsedCategories).forEach(categoryId => {
        if (collapsedCategories[categoryId]) {
            const content = document.getElementById(categoryId + '-content');
            const header = content.previousElementSibling;
            if (content && header) {
                content.classList.add('collapsed');
                header.classList.add('collapsed');
            }
        }
    });
}

// Add to existing DOMContentLoaded event
window.addEventListener('DOMContentLoaded', () => {
    // ... existing code ...
    
    // Load category states if on versions page
    loadCategoryStates();
});
