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

// this is for the first midnight to starlight imgs changing laptops

let firstImg = document.getElementById("mid");
let secondImg = document.getElementById("spac");
let thirdImg = document.getElementById("silv");
let fourthImg = document.getElementById("sta");

let midnightImg = document.getElementById("midnight");
let spacegrayImg = document.getElementById("spacegray");
let silverImg = document.getElementById("silver");
let starlightImg = document.getElementById("starlight");

firstImg.addEventListener("click", function () {
  midnightImg.style.display = "block";
  spacegrayImg.style.display = "none";
  silverImg.style.display = "none";
  starlightImg.style.display = "none";
});

secondImg.addEventListener("click", function () {
  midnightImg.style.display = "none";
  spacegrayImg.style.display = "block";
  silverImg.style.display = "none";
  starlightImg.style.display = "none";
});

thirdImg.addEventListener("click", function () {
  midnightImg.style.display = "none";
  spacegrayImg.style.display = "none";
  silverImg.style.display = "block";
  starlightImg.style.display = "none";
});

fourthImg.addEventListener("click", function () {
  midnightImg.style.display = "none";
  spacegrayImg.style.display = "none";
  silverImg.style.display = "none";
  starlightImg.style.display = "block";
});

// this is for the first midnight to starlight imgs changing laptops

// this is for the 2nd changing laptop

// button
let mid2 = document.getElementById("mid2");
let space2 = document.getElementById("spac2");

// img
let mid1st = document.getElementById("midnight1");
let mid2nd = document.getElementById("midnight2");
let mid3rd = document.getElementById("midnight3");

// space gray
let spac1st = document.getElementById("space1");
let spac2nd = document.getElementById("space2");
let spac3rd = document.getElementById("space3");

// fuction
mid2.addEventListener("click", function () {
  mid1st.style.display = "block";
  mid2nd.style.display = "block";
  mid3rd.style.display = "block";

  spac1st.style.display = "none";
  spac2nd.style.display = "none";
  spac3rd.style.display = "none";
});

// space gray
space2.addEventListener("click", function () {
  mid1st.style.display = "none";
  mid2nd.style.display = "none";
  mid3rd.style.display = "none";

  spac1st.style.display = "block";
  spac2nd.style.display = "block";
  spac3rd.style.display = "block";
});
// this is for the 2nd changing laptop

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

// this is for compared m1

// click event
let videoEl = document.getElementById("videoed");
let imgEl = document.getElementById("img");
let gameEl = document.getElementById("gam");
let sceneEl = document.getElementById("sceneed");
let photoEl = document.getElementById("pho");
let proEl = document.getElementById("pror");
let imgUpEl = document.getElementById("imgup");

// click event

// the html
// this is for video edit
let fasterVideo = document.getElementById("fasterh3"); // this is for the faster video
let oneO = document.getElementById("one"); // this is for the first line
let firstMacmO = document.getElementById("macone"); // this is for the macbook air with m2
let twoT = document.getElementById("two"); // this is for the the second line
let firstMacmTw = document.getElementById("mactwo"); // this is for the macbook air with m1
let videoxEl = document.getElementById("videox"); // this is for for video 1.4x
// this is for video edit

// this is for image filter and effects
let imageFilter = document.getElementById("fasteri"); // this is for the faster video
let threeE = document.getElementById("three"); // this is for the first line
let firstMacmTh = document.getElementById("macthree"); // this is for the macbook air with m2
let fourfo = document.getElementById("four"); // this is for the the second line
let firstMacmFo = document.getElementById("macfour"); // this is for the macbook air with m1
let imgfxEl = document.getElementById("imgx"); // this is for for video 1.2x
// this is for image filter and effects

// this is for gaming
let gaming = document.getElementById("fasterg"); // this is for the faster video
let fiveF = document.getElementById("five"); // this is for the first line
let firstMacmFi = document.getElementById("macfive"); // this is for the macbook air with m2
let sivS = document.getElementById("six"); // this is for the the second line
let firstMacmSi = document.getElementById("mac6"); // this is for the macbook air with m1
let gamexEl = document.getElementById("gamex"); // this is for for video 1.2x
// this is for gaming

// this is for scene edit detection
let detection = document.getElementById("fasterd"); // this is for the faster video
let sevenS = document.getElementById("seven"); // this is for the first line
let firstMacmS = document.getElementById("macseven"); // this is for the macbook air with m2
let eightE = document.getElementById("eight"); // this is for the the second line
let firstMacmEi = document.getElementById("mac8"); // this is for the macbook air with m1
let detectionxEl = document.getElementById("detectionx"); // this is for for video 1.2x
// this is for scene edit detection

// this is for photo stitching
let stitching = document.getElementById("fasters"); // this is for the faster video
let nineN = document.getElementById("nine"); // this is for the first line
let firstMacmN = document.getElementById("macnine"); // this is for the macbook air with m2
let tenT = document.getElementById("ten"); // this is for the the second line
let firstMacmTe = document.getElementById("mac10"); // this is for the macbook air with m1
let stitchingxEl = document.getElementById("stitchingx"); // this is for for video 1.2x
// this is for photo stitching

// this is for ProRes video transcode
let transcode = document.getElementById("fastert"); // this is for the faster video
let elevenE = document.getElementById("eleven"); // this is for the first line
let firstMacmE = document.getElementById("maceleven"); // this is for the macbook air with m2
let eleven = document.getElementById("twelve"); // this is for the the second line
let firstMacmT = document.getElementById("mac12"); // this is for the macbook air with m1
let transcodexEl = document.getElementById("transcodex"); // this is for for video 1.2x
// this is for ProRes video transcode

// this is for image upscaling
let upscaling = document.getElementById("fasteru"); // this is for the faster video
let thirteenE = document.getElementById("thirteen"); // this is for the first line
let firstMacmEt = document.getElementById("macthirteen"); // this is for the macbook air with m2
let fourteen = document.getElementById("fourteen"); // this is for the the second line
let firstMacmF = document.getElementById("mac14"); // this is for the macbook air with m1
let upscalingxEl = document.getElementById("upscalingx"); // this is for for video 1.2x
// this is for image upscaling
// the html

// the  fuction for video
videoEl.addEventListener("click", function () {
  photoEl.style.color = "gray";
  sceneEl.style.color = "gray";
  gameEl.style.color = "gray";
  imgEl.style.color = "gray";
  videoEl.style.color = "black";
  proEl.style.color = "gray";
  imgUpEl.style.color = "gray";
  // video
  fasterVideo.style.display = "block";
  oneO.style.display = "block";
  firstMacmO.style.display = "block";
  twoT.style.display = "block";
  firstMacmTw.style.display = "block";
  videoxEl.style.display = "block";

  // image
  imageFilter.style.display = "none";
  threeE.style.display = "none";
  firstMacmTh.style.display = "none";
  fourfo.style.display = "none";
  firstMacmFo.style.display = "none";
  imgfxEl.style.display = "none";

  // gaming
  gaming.style.display = "none";
  fiveF.style.display = "none";
  firstMacmFi.style.display = "none";
  sivS.style.display = "none";
  firstMacmSi.style.display = "none";
  gamexEl.style.display = "none";

  // scence edit detection
  detection.style.display = "none";
  sevenS.style.display = "none";
  firstMacmS.style.display = "none";
  eightE.style.display = "none";
  firstMacmEi.style.display = "none";
  detectionxEl.style.display = "none";

  // photo stitching
  stitching.style.display = "none";
  nineN.style.display = "none";
  firstMacmN.style.display = "none";
  tenT.style.display = "none";
  firstMacmTe.style.display = "none";
  stitchingxEl.style.display = "none";

  // prores video trancode
  transcode.style.display = "none";
  elevenE.style.display = "none";
  firstMacmE.style.display = "none";
  eleven.style.display = "none";
  firstMacmT.style.display = "none";
  transcodexEl.style.display = "none";

  // prores image upscaling
  upscaling.style.display = "none";
  thirteenE.style.display = "none";
  firstMacmEt.style.display = "none";
  fourteen.style.display = "none";
  firstMacmF.style.display = "none";
  upscalingxEl.style.display = "none";
});
// the  fuction

// function for image filter
imgEl.addEventListener("click", function () {
  photoEl.style.color = "gray";
  sceneEl.style.color = "gray";
  gameEl.style.color = "gray";
  imgEl.style.color = "black";
  videoEl.style.color = "gray";
  proEl.style.color = "gray";
  imgUpEl.style.color = "gray";
  // video
  fasterVideo.style.display = "none";
  oneO.style.display = "none";
  firstMacmO.style.display = "none";
  twoT.style.display = "none";
  firstMacmTw.style.display = "none";
  videoxEl.style.display = "none";

  // image
  imageFilter.style.display = "block";
  threeE.style.display = "block";
  firstMacmTh.style.display = "block";
  fourfo.style.display = "block";
  firstMacmFo.style.display = "block";
  imgfxEl.style.display = "block";

  // gaming
  gaming.style.display = "none";
  fiveF.style.display = "none";
  firstMacmFi.style.display = "none";
  sivS.style.display = "none";
  firstMacmSi.style.display = "none";
  gamexEl.style.display = "none";

  // scence edit detection
  detection.style.display = "none";
  sevenS.style.display = "none";
  firstMacmS.style.display = "none";
  eightE.style.display = "none";
  firstMacmEi.style.display = "none";
  detectionxEl.style.display = "none";

  // photo stitching
  stitching.style.display = "none";
  nineN.style.display = "none";
  firstMacmN.style.display = "none";
  tenT.style.display = "none";
  firstMacmTe.style.display = "none";
  stitchingxEl.style.display = "none";

  // prores video trancode
  transcode.style.display = "none";
  elevenE.style.display = "none";
  firstMacmE.style.display = "none";
  eleven.style.display = "none";
  firstMacmT.style.display = "none";
  transcodexEl.style.display = "none";

  // prores image upscaling
  upscaling.style.display = "none";
  thirteenE.style.display = "none";
  firstMacmEt.style.display = "none";
  fourteen.style.display = "none";
  firstMacmF.style.display = "none";
  upscalingxEl.style.display = "none";
});
// function for image filter

// function for gaming
gameEl.addEventListener("click", function () {
  photoEl.style.color = "gray";
  sceneEl.style.color = "gray";
  gameEl.style.color = "black";
  imgEl.style.color = "gray";
  videoEl.style.color = "gray";
  proEl.style.color = "gray";
  imgUpEl.style.color = "gray";
  // video
  fasterVideo.style.display = "none";
  oneO.style.display = "none";
  firstMacmO.style.display = "none";
  twoT.style.display = "none";
  firstMacmTw.style.display = "none";
  videoxEl.style.display = "none";

  // image
  imageFilter.style.display = "none";
  threeE.style.display = "none";
  firstMacmTh.style.display = "none";
  fourfo.style.display = "none";
  firstMacmFo.style.display = "none";
  imgfxEl.style.display = "none";

  // gaming
  gaming.style.display = "block";
  fiveF.style.display = "block";
  firstMacmFi.style.display = "block";
  sivS.style.display = "block";
  firstMacmSi.style.display = "block";
  gamexEl.style.display = "block";

  // scence edit detection
  detection.style.display = "none";
  sevenS.style.display = "none";
  firstMacmS.style.display = "none";
  eightE.style.display = "none";
  firstMacmEi.style.display = "none";
  detectionxEl.style.display = "none";

  // photo stitching
  stitching.style.display = "none";
  nineN.style.display = "none";
  firstMacmN.style.display = "none";
  tenT.style.display = "none";
  firstMacmTe.style.display = "none";
  stitchingxEl.style.display = "none";

  // prores video trancode
  transcode.style.display = "none";
  elevenE.style.display = "none";
  firstMacmE.style.display = "none";
  eleven.style.display = "none";
  firstMacmT.style.display = "none";
  transcodexEl.style.display = "none";

  // prores image upscaling
  upscaling.style.display = "none";
  thirteenE.style.display = "none";
  firstMacmEt.style.display = "none";
  fourteen.style.display = "none";
  firstMacmF.style.display = "none";
  upscalingxEl.style.display = "none";
});
// function for gaming

// fuction for scene
sceneEl.addEventListener("click", function () {
  photoEl.style.color = "gray";
  sceneEl.style.color = "black";
  gameEl.style.color = "gray";
  imgEl.style.color = "gray";
  videoEl.style.color = "gray";
  proEl.style.color = "gray";
  imgUpEl.style.color = "gray";
  // video
  fasterVideo.style.display = "none";
  oneO.style.display = "none";
  firstMacmO.style.display = "none";
  twoT.style.display = "none";
  firstMacmTw.style.display = "none";
  videoxEl.style.display = "none";

  // image
  imageFilter.style.display = "none";
  threeE.style.display = "none";
  firstMacmTh.style.display = "none";
  fourfo.style.display = "none";
  firstMacmFo.style.display = "none";
  imgfxEl.style.display = "none";

  // gaming
  gaming.style.display = "none";
  fiveF.style.display = "none";
  firstMacmFi.style.display = "none";
  sivS.style.display = "none";
  firstMacmSi.style.display = "none";
  gamexEl.style.display = "none";

  // scence edit detection
  detection.style.display = "block";
  sevenS.style.display = "block";
  firstMacmS.style.display = "block";
  eightE.style.display = "block";
  firstMacmEi.style.display = "block";
  detectionxEl.style.display = "block";

  // photo stitching
  stitching.style.display = "none";
  nineN.style.display = "none";
  firstMacmN.style.display = "none";
  tenT.style.display = "none";
  firstMacmTe.style.display = "none";
  stitchingxEl.style.display = "none";

  // prores video trancode
  transcode.style.display = "none";
  elevenE.style.display = "none";
  firstMacmE.style.display = "none";
  eleven.style.display = "none";
  firstMacmT.style.display = "none";
  transcodexEl.style.display = "none";

  // prores image upscaling
  upscaling.style.display = "none";
  thirteenE.style.display = "none";
  firstMacmEt.style.display = "none";
  fourteen.style.display = "none";
  firstMacmF.style.display = "none";
  upscalingxEl.style.display = "none";
});
// fuction for scene

// // fuction for photo stitching
photoEl.addEventListener("click", function () {
  photoEl.style.color = "black";
  sceneEl.style.color = "gray";
  gameEl.style.color = "gray";
  imgEl.style.color = "gray";
  videoEl.style.color = "gray";
  proEl.style.color = "gray";
  imgUpEl.style.color = "gray";
  // video
  fasterVideo.style.display = "none";
  oneO.style.display = "none";
  firstMacmO.style.display = "none";
  twoT.style.display = "none";
  firstMacmTw.style.display = "none";
  videoxEl.style.display = "none";

  // image
  imageFilter.style.display = "none";
  threeE.style.display = "none";
  firstMacmTh.style.display = "none";
  fourfo.style.display = "none";
  firstMacmFo.style.display = "none";
  imgfxEl.style.display = "none";

  // gaming
  gaming.style.display = "none";
  fiveF.style.display = "none";
  firstMacmFi.style.display = "none";
  sivS.style.display = "none";
  firstMacmSi.style.display = "none";
  gamexEl.style.display = "none";

  // scence edit detection
  detection.style.display = "none";
  sevenS.style.display = "none";
  firstMacmS.style.display = "none";
  eightE.style.display = "none";
  firstMacmEi.style.display = "none";
  detectionxEl.style.display = "none";

  // photo stitching
  stitching.style.display = "block";
  nineN.style.display = "block";
  firstMacmN.style.display = "block";
  tenT.style.display = "block";
  firstMacmTe.style.display = "block";
  stitchingxEl.style.display = "block";

  // prores video trancode
  transcode.style.display = "none";
  elevenE.style.display = "none";
  firstMacmE.style.display = "none";
  eleven.style.display = "none";
  firstMacmT.style.display = "none";
  transcodexEl.style.display = "none";

  // prores image upscaling
  upscaling.style.display = "none";
  thirteenE.style.display = "none";
  firstMacmEt.style.display = "none";
  fourteen.style.display = "none";
  firstMacmF.style.display = "none";
  upscalingxEl.style.display = "none";
});
// // fuction for photo stitching

// fuction for prores transcode
proEl.addEventListener("click", function () {
  videoEl.style.color = "gray";
  imgEl.style.color = "gray";
  gameEl.style.color = "gray";
  sceneEl.style.color = "gray";
  photoEl.style.color = "gray";
  proEl.style.color = "black";
 imgUpEl.style.color = "gray";
  // video
  fasterVideo.style.display = "none";
  oneO.style.display = "none";
  firstMacmO.style.display = "none";
  twoT.style.display = "none";
  firstMacmTw.style.display = "none";
  videoxEl.style.display = "none";

  // image
  imageFilter.style.display = "none";
  threeE.style.display = "none";
  firstMacmTh.style.display = "none";
  fourfo.style.display = "none";
  firstMacmFo.style.display = "none";
  imgfxEl.style.display = "none";

  // gaming
  gaming.style.display = "none";
  fiveF.style.display = "none";
  firstMacmFi.style.display = "none";
  sivS.style.display = "none";
  firstMacmSi.style.display = "none";
  gamexEl.style.display = "none";

  // scence edit detection
  detection.style.display = "none";
  sevenS.style.display = "none";
  firstMacmS.style.display = "none";
  eightE.style.display = "none";
  firstMacmEi.style.display = "none";
  detectionxEl.style.display = "none";

  // photo stitching
  stitching.style.display = "none";
  nineN.style.display = "none";
  firstMacmN.style.display = "none";
  tenT.style.display = "none";
  firstMacmTe.style.display = "none";
  stitchingxEl.style.display = "none";

  // prores video trancode
  transcode.style.display = "block";
  elevenE.style.display = "block";
  firstMacmE.style.display = "block";
  eleven.style.display = "block";
  firstMacmT.style.display = "block";
  transcodexEl.style.display = "block";

  // prores image upscaling
  upscaling.style.display = "none";
  thirteenE.style.display = "none";
  firstMacmEt.style.display = "none";
  fourteen.style.display = "none";
  firstMacmF.style.display = "none";
  upscalingxEl.style.display = "none";
});

// fuction for prores transcode

// function for image upscaling
imgUpEl.addEventListener("click", function () {
  videoEl.style.color = "gray";
  imgEl.style.color = "gray";
  gameEl.style.color = "gray";
  sceneEl.style.color = "gray";
  photoEl.style.color = "gray";
  proEl.style.color = "gray";
  imgUpEl.style.color = "black";
  // video

  fasterVideo.style.display = "none";
  oneO.style.display = "none";
  firstMacmO.style.display = "none";
  twoT.style.display = "none";
  firstMacmTw.style.display = "none";
  videoxEl.style.display = "none";

  // image
  imageFilter.style.display = "none";
  threeE.style.display = "none";
  firstMacmTh.style.display = "none";
  fourfo.style.display = "none";
  firstMacmFo.style.display = "none";
  imgfxEl.style.display = "none";

  // gaming
  gaming.style.display = "none";
  fiveF.style.display = "none";
  firstMacmFi.style.display = "none";
  sivS.style.display = "none";
  firstMacmSi.style.display = "none";
  gamexEl.style.display = "none";

  // scence edit detection
  detection.style.display = "none";
  sevenS.style.display = "none";
  firstMacmS.style.display = "none";
  eightE.style.display = "none";
  firstMacmEi.style.display = "none";
  detectionxEl.style.display = "none";

  // photo stitching
  stitching.style.display = "none";
  nineN.style.display = "none";
  firstMacmN.style.display = "none";
  tenT.style.display = "none";
  firstMacmTe.style.display = "none";
  stitchingxEl.style.display = "none";

  // prores video trancode
  transcode.style.display = "none";
  elevenE.style.display = "none";
  firstMacmE.style.display = "none";
  eleven.style.display = "none";
  firstMacmT.style.display = "none";
  transcodexEl.style.display = "none";

  // prores image upscaling
  upscaling.style.display = "block";
  thirteenE.style.display = "block";
  firstMacmEt.style.display = "block";
  fourteen.style.display = "block";
  firstMacmF.style.display = "block";
  upscalingxEl.style.display = "block";
});
// function for image upscaling



// Use AR to see MacBook Air in your workspace.

// click event
let nights = document.getElementById("night");
let lights = document.getElementById("light");
let grays = document.getElementById("gray");
let silvers = document.getElementById("silvers");
// html 
let oneps = document.getElementById("onep");
let twops = document.getElementById("twop");
let threeps = document.getElementById("threep");
let fourps = document.getElementById("fourp");


// function

nights.addEventListener('click', function () {
  oneps.style.display = 'block'
  twops.style.display = "none";
  threeps.style.display = "none";
  fourps.style.display = "none";
})

lights.addEventListener("click", function () {
  oneps.style.display = "none";
  twops.style.display = "block";
  threeps.style.display = "none";
  fourps.style.display = "none";
});

grays.addEventListener("click", function () {
  oneps.style.display = "none";
  twops.style.display = "none";
  threeps.style.display = "block";
  fourps.style.display = "none";
});

silvers.addEventListener('click', function () {
    oneps.style.display = "none";
    twops.style.display = "none";
    threeps.style.display = "none";
    fourps.style.display = "block";
})


// Use AR to see MacBook Air in your workspace.