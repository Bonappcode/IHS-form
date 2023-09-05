// COULDN'T ACHIEVE WHAT I WANTED BECAUSE I'M ADJUSTING THE PX HEIGHT SO IT MESSES WITH THE SAVED SCROLL HEIGHT

// script.js

// Function to save the current scroll height to a cookie
function saveScrollHeight() {
  const scrollHeight = window.scrollY;
  document.cookie = `scrollHeight=${scrollHeight}`;
}

// Function to restore the scroll height from the cookie
function restoreScrollHeight() {
  const cookie = document.cookie;
  const scrollHeightCookie = cookie.split(';').find(c => c.trim().startsWith('scrollHeight='));
  if (scrollHeightCookie) {
      const scrollHeight = parseInt(scrollHeightCookie.split('=')[1]);
      window.scrollTo(0, scrollHeight);
  }
}

// Attach the saveScrollHeight function to the scroll event
window.addEventListener('scroll', saveScrollHeight);

// Call the restoreScrollHeight function when the page loads
window.addEventListener('load', restoreScrollHeight);



