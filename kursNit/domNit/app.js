var nekiElement = document.getElementById("ime"); // funkcija u jsu koja omogucava pristup elementu putem njegovog id-ja
var drugiElement = document.getElementById("drugiElement");
var prezime = document.getElementById("prezime");
nekiElement.style.color = "red";
drugiElement.style.color = "blue";
drugiElement.style.fontSize = "50px"; // promena velicine fonta kroz css
ime.innerText = "Fatih";
prezime.innerText = "Lukarcanin";
var slika = document.getElementById("nature");

// Nature Image

slika.style.borderRadius = "50%"; // style je nacin pristupa i izmene cssu elementa a color je atribut kojim menjamo boju, moze biti bilo koji durgi

slika.style.width = "300px"; // innerText je nacin izmene ili popunjavanja texta unutar elementa, innerHTML je za unos html elemenata
slika.style.height = "300px";

slika.addEventListener("click", function () {
  slika.style.display = "none";
  setTimeout(() => {
    slika.style.display = "block";
  }, 5000);
});

console.log(slika.getAttribute("src"));
// AddEvenetListener je funkcija koja se dodaje gtml elementu koji smo naznacili
// prati dogadjanja oko ili unutar naznacenog elementa
// i izvrsava funkciju koja mu je zadata
// prvi argument funkcije je event(sta treba korisnik da uradi)
// drugi argument je funkcija koju treba program da obavi

// getAttribute je finkcija koja uzima unete podatke atributa koji se nalaze
// unutar elementa koji smo naznacili
