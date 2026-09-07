// ========================================
// SCHOOLSMP LOADING ANIMATION
// ========================================

window.addEventListener("load", function () {

    const loadingScreen = document.getElementById("loading-screen");

    if (!loadingScreen) {
        return;
    }

    // Keep the loading screen visible
    // for a short cinematic moment.
    setTimeout(function () {

        loadingScreen.classList.add("hidden");

        // Completely remove it after
        // the fade-out animation.
        setTimeout(function () {

            loadingScreen.remove();

        }, 700);

    }, 1200);

});
