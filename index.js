const $navbar = document.querySelector(".navbar-mobile_items");
const $form = document.querySelector("#form");
const $wpp = document.querySelector("#wpp")



window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar-items");
  if (window.scrollY > 160) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches("#menu")) {
    $navbar.classList.toggle("visible");
  }
  if (e.target.matches("#navbar-mobile-item")) {
    $navbar.classList.remove("visible");
  }
});

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  var url = "https://api.whatsapp.com/send";
  var text =
    `Hola soy: ${e.target[0].value}. ` +
    " Mi consulta es: " +
    e.target[1].value;
  window.open(url + "?phone=522291614449&text=" + encodeURIComponent(text));
});

$wpp.addEventListener("click", (e) => {
  e.preventDefault();

  var url = "https://api.whatsapp.com/send";
  var text = "Haz tu consulta!"
  window.open(url + "?phone==522291614449&text=" + encodeURIComponent(text));
});


