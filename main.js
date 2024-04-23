// KF Panda Search

// Saving elements as variables
let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");
let charImageEl = document.getElementById("char-img");

// Button event listener and funcion
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  var name = document.getElementById("char-in").value;
  name = name.toLowerCase();

  //   If statement - Test the Input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    charNameEl.innerHTML = "Po";
    charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior!";
    charImageEl.src = "img/po.png";
  } else if (name === "tigress") {
    charNameEl.innerHTML = "Tigress";
    charQuoteEl.innerHTML = "That was hardcore!";
    charImageEl.src = "img/tigress.png";
  } else if (name === "mantis") {
    charNameEl.innerHTML = "Mantis";
    charQuoteEl.innerHTML = "Fear the bug!";
    charImageEl.src = "img/mantis.png";
  } else if (name === "monkey") {
    charNameEl.innerHTML = "Monkey";
    charQuoteEl.innerHTML = "We should hang out.";
    charImageEl.src = "img/monkey.png";
  } else if (name === "boss wolf") {
    charNameEl.innerHTML = "Boss Wolf";
    charQuoteEl.innerHTML = "Chew on that tubby!";
    charImageEl.src = "img/boss-wolf.png";
  } else if (name === "crane") {
    charNameEl.innerHTML = "Crane";
    charQuoteEl.innerHTML = "Look, you don't belong here.";
    charImageEl.src = "img/crane.png";
  } else if (name === "croc") {
    charNameEl.innerHTML = "Croc";
    charQuoteEl.innerHTML = "The only hero in this town is the dead one.";
    charImageEl.src = "img/croc.png";
  } else if (name === "kai") {
    charNameEl.innerHTML = "Kai";
    charQuoteEl.innerHTML =
      "With your chi, I will finally be able to return to the mortal world.";
    charImageEl.src = "img/kai.png";
  } else if (name === "mr ping") {
    charNameEl.innerHTML = "Mr. Ping";
    charQuoteEl.innerHTML = "You're my son! Right?";
    charImageEl.src = "img/mr-ping.png";
  } else if (name === "oogway") {
    charNameEl.innerHTML = "Oogway";
    charQuoteEl.innerHTML =
      "I think they will all lose until they find a battle worth fighting.";
    charImageEl.src = "img/oogway.png";
  } else if (name === "shen") {
    charNameEl.innerHTML = "Shen";
    charQuoteEl.innerHTML =
      "Search the farthest villages. Find more metal! China will be mine...";
    charImageEl.src = "img/shen.png";
  } else if (name === "shifu") {
    charNameEl.innerHTML = "Shifu";
    charQuoteEl.innerHTML = "Inner peace... inner peace...";
    charNameEl.src = "img/shifu.png";
  } else if (name === "soothsayer") {
    charNameEl.innerHTML = "Soothsayer";
    charQuoteEl.innerHTML = "I see... I see... I see pain.";
    charImageEl.src = "img/soothsayer.png";
  } else if (name === "storming ox") {
    charNameEl.innerHTML = "Storming Ox";
    charQuoteEl.innerHTML = "It's time to surrender, panda. Kung fu is dead.";
    charImageEl.src = "img/storming-ox.png";
  } else if (name === "tai lung") {
    charNameEl.innerHTML = "Tai Lung";
    charQuoteEl.innerHTML = "So, that is how it's going to be.";
    charImageEl.src = "img/tai-lung.png";
  } else if (name === "viper") {
    charNameEl.innerHTML = "Viper";
    charQuoteEl.innerHTML = "I don't need to bite to fight.";
    charImageEl.src = "img/viper.png";
  } else {
    charNameEl.innerHTML = "?????";
    charQuoteEl.innerHTML = "---------";
    charImageEl.src = "img/question-mark.png";
  }
}

// Change content style button event listener and funcion
document.getElementById("theme-btn").addEventListener("click", changeTheme);

let bodyContent = document.getElementById("BODY");
let divColor = document.getElementById("div");

function changeTheme() {
  // Input
  var themeIn = document.getElementById("theme-in").value;
  themeIn = themeIn.toLowerCase();

  //   If statements
  if (themeIn === "dark" || themeIn === "black") {
    bodyContent.style.background = "rgba(0, 0, 0, 0.7)";
    bodyContent.style.color = "white";
    divColor.style.color = "white";
  } else if (themeIn === "light" || themeIn === "white") {
    bodyContent.style.background = "rgba(255,255,255, 0.7)";
    bodyContent.style.color = "black";
    divColor.style.color = "black";
  }
}
