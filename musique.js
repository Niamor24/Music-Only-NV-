// Lomepal - 1000 degrés
let milleDegres = document.getElementById("mille-degres");
let btnPlayLomepal = document.getElementById("btn-play-lomepal");

btnPlayLomepal.onclick = function () {
  if (milleDegres.paused) {
    milleDegres.play();
    btnPlayLomepal.src = "images/pause-regular-60.png";
  } else {
    milleDegres.pause();
    btnPlayLomepal.src = "images/play-regular-60.png ";
  }
};

// shape of you
let soy = document.getElementById("soy");
let btnPlaySoy = document.getElementById("btnPlaySoy");

btnPlaySoy.onclick = function () {
  if (soy.paused) {
    soy.play();
    btnPlaySoy.src = "images/pause-regular-60.png";
  } else {
    soy.pause();
    btnPlaySoy.src = "images/play-regular-60.png ";
  }
};

// Imagine Dragons
let idragon = document.getElementById("idragon");
let btnPlayId = document.getElementById("btnPlayId");

btnPlayId.onclick = function () {
  if (idragon.paused) {
    idragon.play();
    btnPlayId.src = "images/pause-regular-60.png";
  } else {
    idragon.pause();
    btnPlayId.src = "images/play-regular-60.png ";
  }
};

// Say SO
let sso = document.getElementById("sso");
let btnPlaySso = document.getElementById("btnPlaySso");

btnPlaySso.onclick = function () {
  if (sso.paused) {
    sso.play();
    btnPlaySso.src = "images/pause-regular-60.png";
  } else {
    sso.pause();
    btnPlaySso.src = "images/play-regular-60.png ";
  }
};

// Partenaire Particulier
let ppa = document.getElementById("ppa");
let btnPlayPpa = document.getElementById("btnPlayPpa");

btnPlayPpa.onclick = function () {
  if (ppa.paused) {
    ppa.play();
    btnPlayPpa.src = "images/pause-regular-60.png";
  } else {
    ppa.pause();
    btnPlayPpa.src = "images/play-regular-60.png ";
  }
};

// Travis Scott
let ts = document.getElementById("ts");
let btnPlayTs = document.getElementById("btnPlayTs");

btnPlayTs.onclick = function () {
  if (ts.paused) {
    ts.play();
    btnPlayTs.src = "images/pause-regular-60.png";
  } else {
    ts.pause();
    btnPlayTs.src = "images/play-regular-60.png ";
  }
};

// Bruno Mars
let bm = document.getElementById("bm");
let btnPlayBm = document.getElementById("btnPlayBm");

btnPlayBm.onclick = function () {
  if (bm.paused) {
    bm.play();
    btnPlayBm.src = "images/pause-regular-60.png";
  } else {
    bm.pause();
    btnPlayBm.src = "images/play-regular-60.png ";
  }
};

// Billie Eilish
let be = document.getElementById("be");
let btnPlayBe = document.getElementById("btnPlayBe");

btnPlayBe.onclick = function () {
  if (be.paused) {
    be.play();
    btnPlayBe.src = "images/pause-regular-60.png";
  } else {
    be.pause();
    btnPlayBe.src = "images/play-regular-60.png ";
  }
};
