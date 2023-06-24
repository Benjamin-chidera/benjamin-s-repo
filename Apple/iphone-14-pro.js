'use strict'

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
  if (document.getElementById('typex').style.display === 'none') {
    document.getElementById('typex').style.display = 'block'
  } else {
    document.getElementById('typex').style.display = 'none'
  }
}


// this  is for iPad

function openiPad() {
  if (document.getElementById('typex-iPad').style.display === 'none') {
    document.getElementById('typex-iPad').style.display = 'block'
  } else {
    document.getElementById('typex-iPad').style.display = 'none'
  }
}


// this  is for iPhone

function openiPhone() {
  if (document.getElementById('typex-iPhone').style.display === 'none') {
    document.getElementById('typex-iPhone').style.display = 'block'
  } else {
    document.getElementById('typex-iPhone').style.display = 'none'
  }
}

// this  is for Support

function openSupport() {
  if (document.getElementById('typex-support').style.display === 'none') {
    document.getElementById('typex-support').style.display = 'block'
  } else {
    document.getElementById('typex-support').style.display = 'none'
  }
}

// this  is for Support

function openWhereToBuy() {
  if (document.getElementById('typex-wheretobuy').style.display === 'none') {
    document.getElementById('typex-wheretobuy').style.display = 'block'
  } else {
    document.getElementById('typex-wheretobuy').style.display = 'none'
  }
}
