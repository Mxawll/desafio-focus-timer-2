import state from "./focus-timer/state.js"
import * as actions from "./actions.js"


export function countdown() {
   let minutes = document.getElementById("minutes")
   let seconds = document.getElementById("seconds")

   seconds--

   if (seconds < 0) {
      seconds = 59
      minutes--
   }

   if (minutes < 0) {
      actions.reset()
      return;
   }
}

export function updateDisplay(minutes, seconds) {
   const min = document.getElementById("minutes")
   const sec = document.getElementById("seconds")


   minutes = minutes ?? state.minutes
   seconds = seconds ?? state.seconds

   min.textContent = String(minutes).padStart(2, "0")
   sec.textContent = String(seconds).padStart(2, "0")
}