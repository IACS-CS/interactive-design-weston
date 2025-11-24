console.log("Hello, Interactive Graphic Design!");
// This is the main JavaScript file for the Interactive Graphic Design project.
document.querySelector("#start-button").addEventListener(
  // when they click the start button
  "click",
  function (event) {
    // get the parent section of the button
    const parentSection = event.target.closest("section");
    // find the next section and make it active
    parentSection.nextElementSibling.classList.add("active");
    // hide the current section
    parentSection.classList.remove("active");
  }
);
