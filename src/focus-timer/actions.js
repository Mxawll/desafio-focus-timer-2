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

   updateDisplay()
}

export function toggleMusicPanel() {
   app.classList.toggle("show-music-panel")
}