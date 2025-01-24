const day = "day";
const dark = "dark";
const darkSwitch = document.querySelector(".darkCheck");
const mode = localStorage.getItem("mode");

localStorage.setItem("mode", day);
console.log(mode);

const initMode = function () {
  const elems = document.querySelectorAll(".box");

  console.log(mode === "day");

  if (mode === day) darkSwitch.checked = false;
  else darkSwitch.checked = true;

  elems.forEach((element) => {
    if (mode === dark) {
      element.classList = "box " + dark;
    } else {
      element.classList = "box " + day;
    }
  });
};

darkSwitch.addEventListener("change", (event) => {
  const elems = document.querySelectorAll(".box");

  elems.forEach((element) => {
    if (element.classList[1] === day) {
      element.classList = "box " + dark;
      localStorage.setItem("mode", dark);
    } else {
      element.classList = "box " + day;
      localStorage.setItem("mode", day);
    }
  });
});

// point d'entrée
initMode();
