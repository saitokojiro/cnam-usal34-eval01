(() => {

  // on stock dans un variable le bouton qui a pour class : .button-a;
  let buttonA = document.querySelector(".button-a");
  // on stock dans un variable le bouton qui a pour class : .button-b;
  let buttonB = document.querySelector(".button-b");
  // on stock dans un variable qui a pour nom KeycodeB et qui prend pour valeur 65;
  let keyCodeA = 65;
  // on stock dans un variable qui a pour nom KeycodeB et qui prend pour valeur 66;
  let keyCodeB = 66;

  // pressOnA qui est une fonction qui contient un console.log et qui a pour qui a la valeur la lettre A;
  function pressOnA() {
    console.log("A");
  }

  // pressOnA qui est une fonction qui contient un console.log et qui a pour qui a la valeur la lettre B;
  function pressOnB() {
    console.log("B");
  }

  /*
    On crée une event sur le document qui aura pour parametre 
    "keyup"(detection lorsque l'on une presse pas une touche ), et "e" pour event
  */
  document.addEventListener("keyup", e => {
    // ajoute la class "pressed" si la condition est remplie 
    //( keyCode permet de récuperé la valeur de la touche présser)
    if (e.keyCode === keyCodeA) {
      buttonA.classList.remove("pressed");
      pressOnA();
    }

    if (e.keyCode === keyCodeB) {
      buttonB.classList.remove("pressed");
      pressOnB();
    }
  });
 // "keydown"(detection lorsque l'on une presse pas une touche )
  document.addEventListener("keydown", e => {
    // ajoute la class "pressed" si la condition est remplie  
    if (e.keyCode === keyCodeA) buttonA.classList.add("pressed");
    if (e.keyCode === keyCodeB) buttonB.classList.add("pressed");
  });
})();
