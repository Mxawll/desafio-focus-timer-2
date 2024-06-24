import state from "./state.js"

const app = document.getElementById("app")
const html = document.documentElement


export function running() {
   html.classList.add("running")
   html.classList.remove("paused")

}

export function pause() {
   html.classList.toggle("paused")
}

export function reset() {
   html.classList.remove("running")
   html.classList.remove("paused")
}

export function toggleMusicPanel() {
   app.classList.toggle("show-music-panel")
}