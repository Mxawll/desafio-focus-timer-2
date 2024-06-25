import state from "./state.js"
import { countdown, updateDisplay } from "./timer.js"
import { sounds } from "./sounds.js"

const app = document.getElementById("app")
const html = document.documentElement

const tree = document.getElementById("tree")
const cloud = document.getElementById("cloud")
const coffeShop = document.getElementById("coffee-shop")
const bonfire = document.getElementById("bonfire")
const musicPanel = document.getElementById("music-panel")


const musicButtons = [
   tree, cloud, coffeShop, bonfire
]


export function running() {
   state.isRunning = true

   html.classList.add("running")
   html.classList.remove("paused")

   countdown()
}

export function pause() {
   state.isRunning = false

   html.classList.toggle("paused")
}

export function reset() {
   state.isRunning = false

   html.classList.remove("running")
   html.classList.remove("paused")

   updateDisplay(25, 0)
}

export function toggleMusicPanel() {
   app.classList.toggle("show-music-panel")
}

export function increment() {
   if (state.isRunning === true) {
      return
   }

   let minutes = document.getElementById("minutes")
   minutes = Number(minutes.textContent)

   if (minutes > 20) {
      return;
   }

   state.seconds = 0
   minutes += 5 

   updateDisplay(minutes, state.seconds)
}

export function decrement() {
   if (state.isRunning === true) {
      return
   }

   let minutes = document.getElementById("minutes")
   minutes = Number(minutes.textContent)

   if (minutes <= 5) {
      return;
   }

   state.seconds = 0
   minutes = minutes - 5

   updateDisplay(minutes, state.seconds)
}

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

export function activeMusic() {
   musicPanel.addEventListener("click", event => {
      const isNotActive = !event.target.classList.contains("active")
      const music = event.target.dataset.action

      if (isNotActive) {
         sounds[music].pause()
         return;
      }

      for (const sound in sounds) {
         sounds[sound].pause()
      }
      
      switch (music) {
         case "forest":
            sounds.forest.play()
            break;
         case "rain":
            sounds.rain.play()
            break;
         case "coffeeShop":
            sounds.coffeeShop.play()
            break;
         case "bonfire":
            sounds.bonfire.play()
            break;
      }

   })
}