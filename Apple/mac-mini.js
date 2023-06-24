"use strict";

// this is for mobile phone menu bar
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

// this is for the speed and capability

let photos = document.getElementById("photoe");
let images = document.getElementById("imageu");
let videoed = document.getElementById("videoed");
let videos = document.getElementById("videotr");
let codeco = document.getElementById("codeco");
let productiv = document.getElementById("productiv");

let photo = document.getElementById("photo");
let image = document.getElementById("image");
let videoe = document.getElementById("videoe");
let videot = document.getElementById("videotrs");
let code = document.getElementById("code");
let product = document.getElementById("product");

images.addEventListener("click", function () {
  image.style.display = "block";
  photo.style.display = "none";
  videoe.style.display = "none";
  videot.style.display = "none";
  code.style.display = "none";
  product.style.display = "none";
});

photos.addEventListener("click", function () {
  photo.style.display = "block";
  videoe.style.display = "none";
  image.style.display = "none";
  videot.style.display = "none";
  code.style.display = "none";
  product.style.display = "none";
});

videoed.addEventListener("click", function () {
  videoe.style.display = "block";
  photo.style.display = "none";
  image.style.display = "none";
  videot.style.display = "none";
  code.style.display = "none";
  product.style.display = "none";
});

productiv.addEventListener("click", function () {
  product.style.display = "block";
  photo.style.display = "none";
  videoe.style.display = "none";
  image.style.display = "none";
  videot.style.display = "none";
  code.style.display = "none";
});

videos.addEventListener("click", function () {
  videot.style.display = "block";
  videoe.style.display = "none";
  photo.style.display = "none";
  image.style.display = "none";
  code.style.display = "none";
  product.style.display = "none";
});

codeco.addEventListener("click", function () {
  code.style.display = "block";
  videot.style.display = "none";
  videoe.style.display = "none";
  photo.style.display = "none";
  image.style.display = "none";
  product.style.display = "none";
});

// this is for the speed and capability

// this is for the below mentioned for the mac desktop
let first = document.getElementById("pro");
let second = document.getElementById("gam");
let third = document.getElementById("aud");
let fourth = document.getElementById("soft");

let one = document.getElementById("productivity");
let two = document.getElementById("gaming");
let three = document.getElementById("Audio");
let four = document.getElementById("software");

let wordone = document.getElementById("firstword");
let wordtwo = document.getElementById("secondword");
let wordthree = document.getElementById("thirdword");
let wordfour = document.getElementById("fourthword");

// this is the click event functions

first.addEventListener("click", function () {
  one.style.display = "block";
  two.style.display = "none";
  three.style.display = "none";
  four.style.display = "none";
  wordone.style.display = "block";
  wordtwo.style.display = "none";
  wordthree.style.display = "none";
  wordfour.style.display = "none";
});

second.addEventListener("click", function () {
  one.style.display = "none";
  two.style.display = "block";
  three.style.display = "none";
  four.style.display = "none";
  wordone.style.display = "none";
  wordtwo.style.display = "block";
  wordthree.style.display = "none";
  wordfour.style.display = "none";
});

third.addEventListener("click", function () {
  one.style.display = "none";
  two.style.display = "none";
  three.style.display = "block";
  four.style.display = "none";
  wordone.style.display = "none";
  wordtwo.style.display = "none";
  wordthree.style.display = "block";
  wordfour.style.display = "none";
});

fourth.addEventListener("click", function () {
  one.style.display = "none";
  two.style.display = "none";
  three.style.display = "none";
  four.style.display = "block";
  wordone.style.display = "none";
  wordtwo.style.display = "none";
  wordthree.style.display = "none";
  wordfour.style.display = "block";
});
// this is for the below mentioned for the mac desktop
