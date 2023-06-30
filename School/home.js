function opennav() {
  document.getElementById("mysidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closenav() {
  document.getElementById("mysidenav").style.width = "0";
}

// this is for the home drop-down menu

function myFunction() {
  document.getElementById("home-info").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".home")) {
    var dropdowns = document.getElementsByClassName("home-info");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};


// this is for the home drop-down menu
// this is for the home drop-down menu

function myProgram() {
  document.getElementById("program-info").classList.toggle("prog");
}

window.onclick = function (event) {
  if (!event.target.matches(".program")) {
    var dropdowns = document.getElementsByClassName("program-info");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("prog")) {
        openDropdown.classList.remove("prog");
      }
    }
  }
};

// this is for the home drop-down menu



// this is for the mobile device drop-down menu
function openHome() {
    document.getElementById("home-mobile").classList.toggle("mobile-show");
  
}
// this is for the mobile device drop-down menu

// this is for the mobile device drop-down menu
function programMobile() {
  document.getElementById("program-mobile").classList.toggle("program-show");
}
// this is for the mobile device drop-down menu
