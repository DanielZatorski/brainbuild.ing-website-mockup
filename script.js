
// select elements of interest from HTML file and all items inside of it
const boxes = document.querySelectorAll('.container-frontContent .sub-container'); 
const animated = new WeakSet(); // track already animated elements


// function to trigger animation of bouncing element when reaching middle of its view

function checkInMiddle() {
  const viewportCenter = window.innerHeight / 2; // define middle constant

  // initiate elements
  boxes.forEach(box => {
    if (animated.has(box)) return; // skip already animated to avoid unwanted bouncing

    const rect = box.getBoundingClientRect(); // defines view geometry of a box element
    const elementCenter = rect.top + rect.height / 2; // defines middle point of the box element

    // allow slight tolerance (20px up and down) to allow animation to trigger
    if (Math.abs(elementCenter - viewportCenter) < 20) {
      box.classList.add('bounce'); // add css class  that triggers animation
      animated.add(box); // marks the box already animated so it does not bounce again
    }
  });
}

window.addEventListener('scroll', checkInMiddle);
window.addEventListener('resize', checkInMiddle);
checkInMiddle(); // initial check

// start website at the top after refresh
window.history.scrollRestoration = "manual";
window.scrollTo(0, 0);
