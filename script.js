const menuLinkEls = document.querySelectorAll(".menu__link")

menuLinkEls.forEach(function (menuLinkEl) {
  menuLinkEl.addEventListener("click", function () {
    document.querySelector(".active").classList.remove("active")
    this.classList.add("active")
  })
})
