import state from "./state.js"
import { countdown, updateDisplay } from "./timer.js"

const app = document.getElementById("app")
const html = document.documentElement


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