var colc = new Colcade( '.grid', {
    columns: '.grid-col',
    items: '.grid-item'
});

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

}


//indexx
function openNav() {
    document.getElementById("mySidebar").style.width = "20rem";
    document.getElementById("main").style.marginLeft = "";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }


