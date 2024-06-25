import * as focusTimer from "./focus-timer/events.js"
import { activeButton, activeMusic } from "./focus-timer/actions.js"

focusTimer.registerControls()
activeButton()
activeMusic()