console.log("Hello, Interactive Graphic Design!");
// This is the main JavaScript file for the Interactive Graphic Design project.
for (let b of document.querySelectorAll(".correct-option")) {
  b.addEventListener(
    // when they click the start button
    "click",
    function (event) {
      // get the parent section of the button
      const parentSection = event.target.closest("section");
      // find the next section and make it active
      parentSection.nextElementSibling.classList.add("active");
      // hide the current section
      parentSection.classList.remove("active");
      // AI-generated code starts here
      // Student prompt was: Add JavaScript to play the sound file "audio.wav" when they click these buttons

      // Create a new Audio object that points to the audio file.
      // We create it here inside the click handler so each click creates a fresh sound instance.
      // This helps the sound play even if the previous instance is still playing.
      let clickSound = new Audio("audio.wav");

      // Hint to browser to preload the audio so it's ready to play quickly.
      clickSound.preload = "auto";

      // Make sure playback starts from the beginning in case the file was reused.
      clickSound.currentTime = 0;

      // Try to play the sound. play() returns a Promise in some browsers,
      // so attach a .catch to avoid unhandled promise rejections if playback is blocked.
      clickSound.play().catch(function (error) {
        // If playback is blocked (e.g., browser requires a user gesture), we silently ignore the error.
        // In this case the click that triggered this handler is a user gesture, so playback should usually work.
        console.warn("Audio play failed:", error);
      });
      // AI-generated code ends here
    }
  );
}

document
  .querySelector("#start-button")
  .addEventListener("click", function (event) {
    const parentSection = event.target.closest("section");
    parentSection.nextElementSibling.classList.add("active");
    parentSection.classList.remove("active");
  });

  document.querySelector("#retry-button").addEventListener("click", function (event) {
    // On retry, we simply reload the page to restart the quiz.
    location.reload();
  });