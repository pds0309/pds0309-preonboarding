(() => {
  document.getElementById("nav-btn-hamburger").addEventListener("click", () => {
    const navMenu = document.querySelector("nav");
    navMenu.classList[
      [...navMenu.classList].includes("invisible") ? "remove" : "add"
    ]("invisible");
  });
})();
