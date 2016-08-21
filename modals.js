$(document).ready(function() {

  if(window.location.href.indexOf('#subscribed') != -1) {
    $('#subscribed').modal('show');
  }
  
  if(window.location.href.indexOf('#noproblem') != -1) {
    $('#noproblem').modal('show');
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
    }
}
});