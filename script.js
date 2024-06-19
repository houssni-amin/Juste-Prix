let input = document.querySelector("#prix")
let error = document.querySelector("small")
let formulaire = document.querySelector("#formulaire")
let title = document.querySelector("#title")

title.onclick = () => {
  location.href = "https://juste-prix-houssni-amin.vercel.app/"
}

error.style.display = "none"

let nombremax = 1001

let nombreAleatoire = Math.floor(Math.random() * nombremax)
let coup = 0
let nombreChoisi

function verifier(nombre) {
  let instructuion = document.createElement("div")

  if (nombre < nombreAleatoire) {
    instructuion.textContent = `#${coup} (${nombre}) C'est plus !`
    instructuion.className = "instruction plus"
  } else if (nombre > nombreAleatoire) {
    instructuion.textContent = `#${coup} (${nombre}) C'est moins !`
    instructuion.className = "instruction moins"
  } else {
    instructuion.textContent = `#${coup} (${nombre}) Bravo, vous avez trouvé ! Cliquez sur le titre pour rejouer.`
    instructuion.className = "instruction fini"
    input.disabled = true
  }
  document.querySelector("#instructions").prepend(instructuion)
}

input.addEventListener("keyup", () => {
  if (isNaN(input.value)) {
    error.style.display = "inline"
  } else {
    error.style.display = "none"
  }
})

formulaire.addEventListener("submit", (e) => {
  e.preventDefault()

  if (isNaN(input.value) || input.value == "") {
    input.style.borderColor = "red"
  } else {
    coup++
    input.style.borderColor = "silver"
    nombreChoisi = input.value
    input.value = ""
    verifier(nombreChoisi)
  }
})
