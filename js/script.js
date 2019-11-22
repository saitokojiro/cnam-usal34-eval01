(() => {
  let buttonA = document.querySelector(".button-a");
  let buttonB = document.querySelector(".button-b");
  let keyCodeA = 65;
  let keyCodeB = 66;

  function pressOnA() {
    console.log("A");
  }

  function pressOnB() {
    console.log("B");
  }

  document.addEventListener("keyup", e => {
    if (e.keyCode === keyCodeA) {
      buttonA.classList.remove("pressed");
      pressOnA();
    }

    if (e.keyCode === keyCodeB) {
      buttonB.classList.remove("pressed");
      pressOnB();
    }
  });

  document.addEventListener("keydown", e => {
    if (e.keyCode === keyCodeA) buttonA.classList.add("pressed");
    if (e.keyCode === keyCodeB) buttonB.classList.add("pressed");
  });
})();
