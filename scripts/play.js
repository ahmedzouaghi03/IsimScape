//this part is for the sound background
document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('backgroundMusic');
    var soundIcon = document.getElementById('soundButton');

    soundIcon.addEventListener('click', function () {
        if (audio.paused) {
            // If the audio is paused, play it
            audio.play();
            soundIcon.src = "../assets/images/soundIconOn.png"
            
        } else {
            // If the audio is playing, pause it
            audio.pause();
            soundIcon.src = "../assets/images/soundIconOff.png"
            
        }
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

  //this part for the player movement 

document.addEventListener("DOMContentLoaded", function () {
    const player = document.getElementById("player");
    let playerX = 0;
    let playerY = 0;
    let isJumping = false;
    let lastSpacePressTime = 0;
    
  
    function updatePlayer() {
      player.style.left = playerX + "px";
      player.style.bottom = playerY + "px";
      
    }
  
    function movePlayer(direction) {
        const stepSize = 20; 
        const frames = 8; 
        let currentFrame = 2; 
        let isMoving = true; 
        if (playerX<1300 && playerX>-80){
            const intervalId = setInterval(() => {
                playerX += (direction === "right" ? 1 : -1) * stepSize;
                updatePlayer();
            
                currentFrame = (currentFrame % frames) + 1;
            
                
                player.style.backgroundImage = `url('../css/${direction}_${currentFrame}.png')`;
            
                if (!isMoving || currentFrame >= frames) {
                  clearInterval(intervalId); 
                }
              }, 70); 
            
             
              setTimeout(() => {
                player.style.backgroundImage = `url('../css/${direction}_1.png')`;
              }, 70 * frames);

        }
        else if (playerX>1300){
            playerX = 1240;
            
        }
        else if (playerX<-80){
            playerX = -60;
            
        }
        
      }
  
    function jump(direction) {
        if (!isJumping) {
          isJumping = true;
          let jumpHeight = 60; 
          let jumpFrames = 8; 
          let currentFrame = 0;
          lastSpacePressTime = Date.now();  
          function performJump() {
            if (currentFrame < jumpFrames / 2) {
              // Ascending phase
              playerY += (jumpHeight / (jumpFrames / 2));
              player.style.backgroundImage = `url('../css/jump_${direction}_${currentFrame}.png')`;
              if (direction == "right"){
                player.style.transition = "transform 0.2s ease-in-out"; 
                player.style.transform = `rotate(${direction === '${direction}' ? 180 : 180}deg)`; // Adjust the rotation angle
              }
              else if (direction == "left"){
                player.style.transition = "transform 0.2s ease-in-out"; 
                player.style.transform = `rotate(${direction === '${direction}' ? -180 : -180}deg)`; // Adjust the rotation angle
              }
              
            } else if (currentFrame >= jumpFrames / 2 && currentFrame < jumpFrames) {
              // Descending phase
              playerY -= (jumpHeight / (jumpFrames / 2));
              player.style.backgroundImage = `url('../css/jump_${direction}_${currentFrame}.png')`;
              if (direction == "right"){
                player.style.transition = "transform 0.2s ease-in-out"; 
                player.style.transform = `rotate(${direction === '${direction}' ? 360 : 360}deg)`; // Adjust the rotation angle
              }
              else if (direction == "left"){
                player.style.transition = "transform 0.2s ease-in-out"; 
                player.style.transform = `rotate(${direction === '${direction}' ? -360 : -360}deg)`; // Adjust the rotation angle
              }
            }
      
            currentFrame++;
      
            if (currentFrame <= jumpFrames) {
              updatePlayer();
              
              setTimeout(() => requestAnimationFrame(performJump), 70); 
            } else {
              isJumping = false; 
              player.style.bottom = "0"; 
              player.style.backgroundImage = `url('../css/${direction}_1.png')`; 
              player.style.transition = "transform 0s"; // 
              player.style.transform = "rotate(0deg)"; // 
              updatePlayer();
            }
          }
      
          performJump();
        }
      }
      function doubleJump(direction) {
        if (!isJumping) {
          isJumping = true;
          let jumpHeight = 120; 
          let jumpFrames = 8; 
          let currentFrame = 0;
          lastSpacePressTime = Date.now();   
          function performJump() {
            if (currentFrame < jumpFrames / 2) {
              // Ascending phase
              playerY += (jumpHeight / (jumpFrames / 2));
              player.style.backgroundImage = `url('../css/jump_${direction}_${currentFrame}.png')`;
              
              
            } else if (currentFrame >= jumpFrames / 2 && currentFrame < jumpFrames) {
              // Descending phase
              playerY -= (jumpHeight / (jumpFrames / 2));
              player.style.backgroundImage = `url('../css/jump_${direction}_${currentFrame}.png')`;
              
            }
      
            currentFrame++;
      
            if (currentFrame <= jumpFrames) {
              updatePlayer();
              // 
              setTimeout(() => requestAnimationFrame(performJump), 70); // 
            } else {
              isJumping = false; // 
              player.style.bottom = "0"; // 
              player.style.backgroundImage = `url('../css/${direction}_1.png')`; // 
              
              updatePlayer();
            }
          }
      
          performJump();
        }
      }
      
    var x;   
    document.addEventListener("keydown", function (event) {
        
      if (event.key === "ArrowRight") {
        event.preventDefault();
        movePlayer("right");
        x=0;
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        movePlayer("left");
        x= 1;
      } else if (event.key === " " && x===0) {
        event.preventDefault();
        var currentTimestamp = Date.now();
        if (currentTimestamp - lastSpacePressTime < 800) {
            jump("right");
            lastSpacePressTime = 0;
        }
        else {
            doubleJump("right"); // 
            lastSpacePressTime = Date.now();
          }
        
        
      } else if (event.key === " " && x===1) {
        event.preventDefault();
        var currentTimestamp = Date.now();
        if (currentTimestamp - lastSpacePressTime < 800) {
            jump("left");
            lastSpacePressTime = 0;
        }
        else {
            doubleJump("left"); 
            lastSpacePressTime = currentTimestamp;
          }
      }
    });
  
    document.addEventListener("keyup", function (event) {
      
    });
  });
  
  