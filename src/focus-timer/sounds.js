const tree = document.getElementById("tree")
const cloud = document.getElementById("cloud")
const coffeShop = document.getElementById("coffe-shop")
const bonfire = document.getElementById("bonfire")
const musicPanel = document.getElementById("music-panel")


const musicButtons = [
   tree, cloud, coffeShop, bonfire
]

export function activeButton() {
   musicPanel.addEventListener("click", event => {
      const isActive = event.target.classList.contains("active")

      if (isActive) {
         event.target.classList.remove("active")
         return;
      }

      for (const element of musicButtons) {
         element.classList.remove("active")
      }

      event.target.classList.add("active")
   })
}