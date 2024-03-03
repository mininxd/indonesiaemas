 export function gsapEl() {
 gsap.registerPlugin(TextPlugin);
 
gsap.to(titleEl, {
  duration: 5,
  text: {
    value: "Indonesia Emas 2024",
    newClass: "titleEl",
    padSpace: "false",
  },
});
}


var abjad = ["A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"];
var abjadTotal = [...Array(16).keys()];



export function scrambleTitle() {
var scrambleText = document.getElementById("scrambleTitleEl");

const acakHuruf = setInterval(acakan, 50);
function acakan() {
gsap.utils.shuffle(abjadTotal);
// console.log(abjad[abjadTotal[0]]);
scrambleText.innerHTML = abjad[abjadTotal[0]] + abjad[abjadTotal[1]] + abjad[abjadTotal[2]] + abjad[abjadTotal[3]] + abjad[abjadTotal[4]] + abjad[abjadTotal[5]] ;
}
setTimeout (function() {
  scrambleText.style.display = "none";
  clearInterval(acakHuruf);
}, 4000);
}


export function scrambleInfinite() {
var scrambleFoot = document.getElementById("footerScramble");
var scrambleFoot2 = document.getElementById("footerScramble2");

setInterval( function() {
gsap.utils.shuffle(abjadTotal);
var hexText = abjad[abjadTotal[0]] + abjad[abjadTotal[1]] + abjad[abjadTotal[2]] + abjad[abjadTotal[3]] + abjad[abjadTotal[4]] + abjad[abjadTotal[5]];
//console.log(abjad[abjadTotal[0]]);
scrambleFoot.style.color = "#" + hexText;
scrambleFoot.innerHTML = "#" + hexText;
scrambleFoot2.innerHTML = "#" + hexText;
titleEl.style.filter = "drop-shadow(0px 0px 3px #" + hexText + ")"
},50);
}