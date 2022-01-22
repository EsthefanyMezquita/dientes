let points = 0;
let toothBrushForce = 0.2;
var manchas = document.getElementsByClassName("manchas");
function interaction(i) {
	manchas[i].initialOpacity = manchas[i].initialOpacity - toothBrushForce;
	manchas[i].style.opacity = `${manchas[i].initialOpacity}`;
	points++;

	if (manchas[i].initialOpacity <= 0) {
		alert(`Que chido limpias we, tienes estos puntos: ${points}`);
	}
}


for (let i = 0; i < manchas.length; i++) { 
  manchas[i].initialOpacity = 1;
  manchas[i].setAttribute("id",i);
  manchas[i].style.opacity = `${manchas[i].initialOpacity}`;
  manchas[i].addEventListener("click", e => {
    console.log(e.currentTarget.id);
    interaction(e.currentTarget.id);

  });
}

