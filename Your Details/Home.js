// Ensure the video auto-plays on load
window.addEventListener('load', function() {
    var heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
        heroVideo.play().catch(error => {
            console.error('Error attempting to play video:', error);
        });
    }
});
 ///// call to action button .//////::
function startQuiz() {
    window.location.href = 'QuizzA.html';
} 

/////Pop up Js........////////////////////////////

function setLanguage(lang) {
    if (lang === 'ar'){
        window.location.href = 'HomeA.html';
    }else{
        document.getElementById('language-popup').style.display = 'none';
    }
}

// Optionally, you can call this function on page load to show the popup
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('language-popup').style.display = 'flex';
});