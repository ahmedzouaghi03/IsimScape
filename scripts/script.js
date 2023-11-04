//this part is for the sound background
document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('backgroundMusic');
    var toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', function () {
        if (audio.paused) {
            // If the audio is paused, play it
            audio.play();
            
        } else {
            // If the audio is playing, pause it
            audio.pause();
            
        }
    });
});

