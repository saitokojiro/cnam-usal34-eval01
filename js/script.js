(() => {

  // on stock dans un variable le bouton qui a pour class : .button-a;
  let buttonA = document.querySelector(".button-a");
  // on stock dans un variable le bouton qui a pour class : .button-b;
  let buttonB = document.querySelector(".button-b");

  //let pLength = document.querySelectorAll("#affichage p")

  let affichage = document.querySelector("#affichage")
  // on stock dans un variable qui a pour nom KeycodeB et qui prend pour valeur 65;
  let keyCodeA = 65;
  // on stock dans un variable qui a pour nom KeycodeB et qui prend pour valeur 66;
  let keyCodeB = 66;

  let keyCodeflecheDroite = 39;

  let btnStart = document.querySelector(".start-button")
  let nesConter = document.querySelector(".nes-container")
  let flecheDroite = document.querySelector(".arrow-right")




  // pressOnA qui est une fonction qui contient un console.log et qui a pour qui a la valeur la lettre A;
  function pressOn() {
    console.log("A");
  }

  function pressflecheDroite() {
    console.log("->");
  }

  // pressOnA qui est une fonction qui contient un console.log et qui a pour qui a la valeur la lettre B;
  function pressOnB() {
    console.log("B");
  }

  function removeHistory() {

    let pLength = document.querySelector("#affichage").querySelectorAll("p")
    const arrays = pLength[0];

    console.log(pLength.length)


    pLength.forEach(() => {
      if (pLength.length > 5) {
        console.log('ok')
        affichage.removeChild(pLength[0])
      }
    });

    //pLength[1].style.backgroundColor = "red";

  };



  btnStart.addEventListener("click", () => {
    console.log('ok')
    nesConter.classList.add("is-dark");
    countdown()

  })


  document.addEventListener("keydown", e => {

    if (e.keyCode === keyCodeflecheDroite) {
      let arrowLeftKD = document.createElement('p');
      arrowLeftKD.innerHTML = " je press sur : ->";
      // insert l'objet au parent qui est #affichage 
      affichage.append(arrowLeftKD);
      removeHistory()

    }

  })
  flecheDroite.addEventListener("click", () => {

    let arrowLeftCL = document.createElement('p');
      arrowLeftCL.innerHTML = " je click sur : ->";
      // insert l'objet au parent qui est #affichage 
      affichage.append(arrowLeftCL);
      removeHistory()
  })


  /*
    On crée une ev
    ent sur le document qui aura pour parametre 
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
    if (e.keyCode === keyCodeA) {

      buttonA.classList.add("pressed")

      // crée une variable pressedA qui a pour contenu un nouvelle element p et l'ajoute un text 
      let pressedA = document.createElement('p');
      pressedA.innerHTML = " je presse sur : A";
      

      // insert l'objet au parent qui est #affichage 
      affichage.append(pressedA);

      removeHistory()

    };
    if (e.keyCode === keyCodeB) {
      buttonB.classList.add("pressed")

      let pressedB = document.createElement('p');
      pressedB.innerHTML = " je presse sur : B"

      affichage.append(pressedB);
      removeHistory()

    };
  });
})();