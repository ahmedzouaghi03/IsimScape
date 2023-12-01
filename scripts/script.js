//this part is for the sound background
document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('backgroundMusic');
    var soundIcon = document.getElementById('soundButton');

    soundIcon.addEventListener('click', function () {
        if (audio.paused) {
            // If the audio is paused, play it
            audio.play();
            soundIcon.src = "./assets/images/soundIconOn.png"
            
        } else {
            // If the audio is playing, pause it
            audio.pause();
            soundIcon.src = "./assets/images/soundIconOff.png"
            
        }
    });
});

//this part is for the displaying of the characters choosing pop up
document.addEventListener('DOMContentLoaded', function () {
    const openButton = document.getElementById('openCharctersButton');
    const overlay = document.getElementById('characters');
    const closeButton = document.getElementById('closeCharactersButton');
    const secondCloseButton = document.getElementById('closeButton');
    
    openButton.addEventListener('click', function () {
      overlay.style.visibility = 'visible';
      overlay.style.opacity = '1';
    });
  
    closeButton.addEventListener('click', function () {
      overlay.style.visibility = 'hidden';
      overlay.style.opacity = '0';
    });

    secondCloseButton.addEventListener('click', function () {
      overlay.style.visibility = 'hidden';
      overlay.style.opacity = '0';
    });
  });

//this part is for the displaying of the aboutUs pop up
document.addEventListener('DOMContentLoaded', function () {
  const openButton = document.getElementById('aboutUsButton');
  const overlay = document.getElementById('aboutUs');
  const closeButton = document.getElementById('closeAboutUsButton');
  const secondCloseButton = document.getElementById('secondCloseAboutUsButton');
  openButton.addEventListener('click', function () {
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
  });

  closeButton.addEventListener('click', function () {
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = '0';
  });

  secondCloseButton.addEventListener('click', function () {
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = '0';
  });
});


//this part is for the displaying of the rules pop up
document.addEventListener('DOMContentLoaded', function () {
  const openButton = document.getElementById('rulesButton');
  const overlay = document.getElementById('rules');
  const closeButton = document.getElementById('closeRulesButton');
  const secondCloseButton = document.getElementById('secondCloseRulesButton');
  openButton.addEventListener('click', function () {
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
  });

  closeButton.addEventListener('click', function () {
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = '0';
  });

  secondCloseButton.addEventListener('click', function () {
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = '0';
  });
});


//this part is for the sliding of characters 

document.addEventListener('DOMContentLoaded', function () {
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    const imageCharacter = document.getElementById('imageCharacter');
  
    // Array of image sources
    const images = [
      "./assets/images/character1.png",
      "./assets/images/character2.png",
      "./assets/images/character3.png",
      "./assets/images/character4.png",
    ];
  
    let currentIndex = 0;
    function updateImage() {
      imageCharacter.src = images[currentIndex];
    }
  
    // Event listener for the left arrow
    leftArrow.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage();
      imageCharacter.style.transition = 'transition: transform 0.5s ease';
      imageCharacter.style.transform = 'translateX(-100%)';
      setTimeout(() => {
        imageCharacter.style.transition = 'transition: transform 0.5s ease';
        imageCharacter.style.transform = 'translateX(0)';
      }, 50); 
    });
  
    // Event listener for the right arrow
    rightArrow.addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
      imageCharacter.style.transition = 'transition: transform 0.5s ease';
      imageCharacter.style.transform = 'translateX(100%)';
      setTimeout(() => {
        imageCharacter.style.transition = 'transition: transform 0.5s ease';
        imageCharacter.style.transform = 'translateX(0)';
      }, 50); 
    });

    updateImage();
  });