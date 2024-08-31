// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  // Ensure the error modal is hidden initially
  const errorModal = document.getElementById("modal");
  errorModal.classList.add("hidden");

  // Add event listeners to all hearts
  const hearts = document.querySelectorAll(".like-glyph");

  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      // Simulate a server call
      mimicServerCall()
        .then(() => {
          // If successful, toggle the heart's state
          if (heart.innerText === "♡") {
            heart.innerText = "♥";
            heart.classList.add("activated-heart");
          } else {
            heart.innerText = "♡";
            heart.classList.remove("activated-heart");
          }
        })
        .catch((error) => {
          // If there is an error, show the error modal
          errorModal.classList.remove("hidden");
          errorModal.querySelector("#modal-message").innerText = error;

          // Hide the modal after 3 seconds
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
