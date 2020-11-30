/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;
// you cannot for security reason to avoid the app to deploy a fullScreen against the user will.
openFullscreen(elem);

/* View in fullscreen */
function openFullscreen(elem) {
  console.log("fullscreen batard");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}
