function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  // contudo, já existe no proprio JS uma função que automaticamente faz isso, chamada de toggle:
  // html.classList.toggle('light')

  //Mudando a imagem

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/light-avatar.jfif")
  } else {
    img.setAttribute("src", "./assets/avatar-bg.png")
  }
}
