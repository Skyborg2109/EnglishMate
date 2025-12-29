// Level Protection Script
// This script checks if user has selected a level before accessing lesson or quiz pages

function checkLevelAccess() {
    const selectedLevel = localStorage.getItem('selectedLevel');

    if (!selectedLevel) {
        alert('Silakan pilih level course terlebih dahulu!');
        // Redirect to courses page
        window.location.href = '../pages/Courses.html';
        return false;
    }

    return true;
}

// Auto-check on page load
window.addEventListener('DOMContentLoaded', function () {
    checkLevelAccess();
});
