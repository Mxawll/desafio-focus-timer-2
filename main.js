const music = document.getElementById("music")


function showMusicPanel() {
   const app = document.getElementById("app")
   app.classList.toggle("show-music-panel")
}

music.addEventListener("click", () => {
   showMusicPanel()
})