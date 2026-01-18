function login() {
  const perfil = document.getElementById("perfil").value;
  localStorage.setItem("perfil", perfil);

  window.location.href = "home.html";
}
