// this is for mobile phone menu bar
// function opens() {
//   if (document.getElementById("menu-dropdown").style.display === "none") {
//     document.getElementById("menu-dropdown").style.display = "block";
//   } else {
//     document.getElementById("menu-dropdown").style.display = "none";
//   }
// }

// function closes() {
//   if (document.getElementById("menu-dropdown").style.display === "block") {
//     document.getElementById("menu-dropdown").style.display = "none";
//   } else {
//     document.getElementById("menu-dropdown").style.display = "block";
//   }
// }

function opensnav() {
  let open = document.getElementById("links");
  if (open.style.display === "block") {
    open.style.display = "none";
  } else {
    open.style.display = "block";
  }
}

// this is for mobile phone menu bar

// this  is for mac

function openMac() {
  if (document.getElementById("typex").style.display === "none") {
    document.getElementById("typex").style.display = "block";
  } else {
    document.getElementById("typex").style.display = "none";
  }
}

// function openMac() {
//   let openMac = document.getElementById("typex");
//   openMac.style.display = "block";
// }

// function hideMac() {
//   let hideMac = document.getElementById("typex");
//   hideMac.style.display = 'none'
// }

// this  is for iPad

function openiPad() {
  if (document.getElementById("typex-iPad").style.display === "none") {
    document.getElementById("typex-iPad").style.display = "block";
  } else {
    document.getElementById("typex-iPad").style.display = "none";
  }
}

// this  is for iPhone

function openiPhone() {
  if (document.getElementById("typex-iPhone").style.display === "none") {
    document.getElementById("typex-iPhone").style.display = "block";
  } else {
    document.getElementById("typex-iPhone").style.display = "none";
  }
}

// this  is for Support

function openSupport() {
  if (document.getElementById("typex-support").style.display === "none") {
    document.getElementById("typex-support").style.display = "block";
  } else {
    document.getElementById("typex-support").style.display = "none";
  }
}

// this  is for Support

function openWhereToBuy() {
  if (document.getElementById("typex-wheretobuy").style.display === "none") {
    document.getElementById("typex-wheretobuy").style.display = "block";
  } else {
    document.getElementById("typex-wheretobuy").style.display = "none";
  }
}

/* this is for the annoucement watch video */
function openWatch() {
  if (document.getElementById("bg-video").style.display === "none") {
    document.getElementById("bg-video").style.display = "block";
  } else {
    document.getElementById("bg-video").style.display = "none";
  }
}

function closeWatch() {
  if (document.getElementById("bg-video").style.display === "block") {
    document.getElementById("bg-video").style.display = "none";
  } else {
    document.getElementById("bg-video").style.display = "block";
  }
}

/* this is for the annoucement watch video */

// this is for go inside
function openInside() {
  if (document.getElementById("bg-video-inside").style.display === "none") {
    document.getElementById("bg-video-inside").style.display = "block";
  } else {
    document.getElementById("bg-video-inside").style.display = "none";
  }
}

function closeInside() {
  if (document.getElementById("bg-video-inside").style.display === "block") {
    document.getElementById("bg-video-inside").style.display = "none";
  } else {
    document.getElementById("bg-video-inside").style.display = "block";
  }
}

// this is for go inside

// this is for the AR Macbook section

function twocircle() {
  let twocircle = document.getElementById("phone-laptop-gold");
  twocircle.style.display = "block";

  let onecircle = document.getElementById("phone-laptop");
  onecircle.style.display = "none";
}

function onecircle() {
  let onecircle = document.getElementById("phone-laptop");
  onecircle.style.display = "block";

  let twocircle = document.getElementById("phone-laptop-gold");
  twocircle.style.display = "none";
}
// this is for the AR Macbook section
