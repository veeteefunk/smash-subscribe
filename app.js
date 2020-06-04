const main = document.getElementById("main");
const gs = main.querySelectorAll("g");
const text = main.querySelector(".text");

const audio = document.getElementById("audio");

main.addEventListener("click", () => {
  audio.play();

  setTimeout(() => {
    text.innerHTML = "Subscribed";
    text.style.transform = "translateX(-7px)";

    gs.forEach((g) => {
      const x = Math.random() * 200 - 100 + "px";
      const y = Math.random() * 300 + "px";
      g.style.transform = `translate(${x}, ${y})`;
      g.style.opacity = 0;
    });
  }, 300);
});
