let count = document.getElementById("count");
let btn = document.getElementById("button");
var somme = 145;
var countEssaie = 5;
count.innerText = 5;
function forclear() {
    document.getElementById("output").innerHTML = "0";
    document.getElementById("p1").innerHTML = "";
    document.getElementById("game").style.display = "none"; // Masquer les images au début
  }
  
  function removeZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
      value = "";
      document.getElementById("output").innerHTML = value;
    }
  }
  
  function perc() {
    var value = document.getElementById("output").innerHTML;
    value = parseFloat(value) / 100;
    document.getElementById("output").innerHTML = value;
    document.getElementById("p1").innerHTML += "%=" + value;
  }
  
  function fordisplay(value) {
    removeZero();
    document.getElementById("output").innerHTML += value;
    document.getElementById("p1").innerHTML += value;
  }
  
  // Affiche une image en fonction de la plage dans laquelle se trouve la somme
  function afficherImageParIntervalle(somme) {
    const images = document.querySelectorAll("#game img");
    images.forEach(img => img.style.display = "none"); // Masquer toutes les images
    
    let index;
    if (somme <0) {
        alert("Bienvenue à l'Océan")
        index = 0;
    }
    else if (somme >=0 && somme <=40) {
        alert("Bienvenue à Tokyo");
        index = 6;
    }
    else if (somme == 72) {
        alert("Bienvenue à Gizeh");
        index = 4;
    }
    else if (somme >= 41 && somme <= 130) {
      alert("Bienvenue à Paris");
      index = 1;
    } else if (somme >= 160 && somme <= 180) {
      alert("Bienvenue en Inde");
      index = 2;
    } else if (somme >=5200 && somme <= 8848) {
      alert("Les bronzés font du ski");
      index = 3;
    } else if (somme == 710) {
      alert("Bienvenue à Rio")
      index = 5;
    }else if (somme >710 && somme <= 1437) {
        alert("Bienvenue en chine")
        index = 7;
    }
    else if (somme >=2430 && somme<= 2720) {
        alert("Bienvenue à Machu Picchu")
        index = 8;
    }
    else{
        countEssaie--
        if(countEssaie === 0){
            alert("GAME OVER!");
            index = 10;
            countEssaie = 0;
            
        }
        else if(countEssaie > 0){
            alert("Perdu")
            index = 9;
        }
        else{
            index = 10;
            countEssaie = 0;
        }
        count.innerText = countEssaie;
        
    }
  
    images[index].style.display = "block"; // Affiche l'image correspondant à l'intervalle
    document.getElementById("game").style.display = "flex"; // Affiche la galerie
  }
  
  function solve() {
    removeZero();
    try {
      window.location.href = '#game';
      var equation = document.getElementById("output").innerHTML;
      var solved = eval(equation);
      document.getElementById('output').innerHTML = solved;
      document.getElementById("p1").innerHTML += "=" + solved + "<br>" + solved;
      afficherImageParIntervalle(solved); // Affiche l'image correspondant à la somme
    } catch (error) {
      document.getElementById('output').innerHTML = "Error";
    }
  }


