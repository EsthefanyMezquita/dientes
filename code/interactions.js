let initialOpacity = 1;
let points = 0;
let toothBrushForce = 0.2;

var mancha = document.getElementsByClassName("manchas");
mancha[0].style.opacity = `${initialOpacity}`;

mancha[0].addEventListener('click', function () {
  initialOpacity = initialOpacity - toothBrushForce;
  mancha[0].style.opacity = `${initialOpacity}`;
  points++;

  if (initialOpacity <= 0) { 
    alert(`Tu que chido limpias, tienes estos puntos: ${points}`);
  }
});




