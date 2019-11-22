(() => {

  //#region variable
  // on stock dans un variable le bouton qui a pour class : .button-a;
  let buttonA = document.querySelector(".button-a");
  // on stock dans un variable le bouton qui a pour class : .button-b;
  let buttonB = document.querySelector(".button-b");

  let affichage = document.querySelector("#affichage")
  // on stock dans un variable qui a pour nom KeycodeB et qui prend pour valeur 65;
  let keyCodeA = 65;
  // on stock dans un variable qui a pour nom KeycodeB et qui prend pour valeur 66;
  let keyCodeB = 66;
  let keyCodeflecheDroite = 39;
  let btnStart = document.querySelector(".start-button");
  let nesConter = document.querySelector(".nes-container");
  let flecheDroite = document.querySelector(".arrow-right");

  //#endregion

  //#region pressA
  // pressOnA qui est une fonction qui contient un console.log et qui a pour qui a la valeur la lettre A;
  const pressOnA = () => {
    return console.log("A");
  }

  //#endregion

  //#region pressB

  // pressOnA qui est une fonction qui contient un console.log et qui a pour qui a la valeur la lettre B;
  const pressOnB = () => {
    console.log("B");
  }

  //#endregion

  //#region pressFlecheDroite
  const pressflecheDroite = () => {
    console.log("->");
  }
  //#endregion

  //#region arrowDirection
  let arrowDirection = (arrow) => {
    let arrowLeft = document.createElement('p');

    arrowLeft.innerHTML = " je " + arrow + " sur : ->";
    // insert l'objet au parent qui est #affichage 
    affichage.append(arrowLeft);


  }
  //#endregion

  //#region CreateEl
  let CreateEl = (A) => {
    let pressed = document.createElement('p');
    pressed.innerHTML = " je presse sur : " + A;
    // insert l'objet au parent qui est #affichage 
    affichage.append(pressed);
  }

  //#endregion

  //#region removeHistory
  let removeHistory = () => {
    let pLength = document.querySelector("#affichage").querySelectorAll("p");
    pLength.forEach(() => {
      if (pLength.length > 5) {
        affichage.removeChild(pLength[0])
      }
    });
  };

  //#endregion

  //#region btnStart
  btnStart.addEventListener("click", () => {
    nesConter.classList.add("is-dark");
    countdown()
  })
  //#endregion

  //#region flechedroites
  document.addEventListener("keydown", e => {
    if (e.keyCode === keyCodeflecheDroite) {
      arrowDirection('press')
      removeHistory()
    }
  })

  flecheDroite.addEventListener("click", () => {
    arrowDirection('click')
    removeHistory()
  })
  //#endregion

  //#region buttonABup
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
  //#endregion 

  //#region buttonABdown
  // "keydown"(detection lorsque l'on une presse pas une touche )
  document.addEventListener("keydown", e => {
    // ajoute la class "pressed" si la condition est remplie  
    if (e.keyCode === keyCodeA) {
      buttonA.classList.add("pressed")
      // crée une variable pressedA qui a pour contenu un nouvelle element p et l'ajoute un text 
      CreateEl('A')
      removeHistory()
    };
    if (e.keyCode === keyCodeB) {
      buttonB.classList.add("pressed")
      CreateEl('B')
      removeHistory()
    };
  });
  //#endregion

})();