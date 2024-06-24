import * as actions from "./actions.js"


export function registerControls() {
   controls.addEventListener("click", event => {
      const action = event.target.dataset.action
      console.log(event.target)
      if (typeof actions[action] != "function") {
         return;
      }

      actions[action]()
   })
}