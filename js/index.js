const $video =document.querySelector("#video") 
const $play =document.querySelector("#play") 
const $pause =document.querySelector("#pause") 
const $backward =document.querySelector("#backward") 
const $forward =document.querySelector("#forward") 

$play.addEventListener("click", handlePlay)
$pause.addEventListener("click", handlepause)

function handlePlay() {
  $video.play()
  $play.hidden = true
  $pause.hidden = false
console.log("Le diste click al botón de play")
}

function handlepause() {
  $video.pause()
  $pause.hidden = true
  $play.hidden = false
console.log("Le diste click al botón de pause")
}

$backward.addEventListener("click", handlebackward)

function handlebackward() {
    $video.currentTime -= 10
    console.log("Para atrás 10 segundos", $video.currentTime)
}

$forward.addEventListener("click", handleforward)

function handleforward() {
    $video.currentTime += 10
    console.log("Para avanzar 10 segundos",  $video.currentTime)
}

const $progress = document.querySelector("#progress")
$video.addEventListener("loadedmetadata", handleLoaded)
$video.addEventListener("timeupdate", handleTimeUpdate)

function handleLoaded() {
  $progress.max = $video.duration
  console.log("Ha cargado mi video",  $video.duration)
}

function handleTimeUpdate(){
  $progress.value = $video.currentTime
  //console.log("tiempo actual", $video.currentTime)//
}

$progress.addEventListener("input", handleInput)

function handleInput() {
  $video.currentTime = $progress.value
 console.log($progress.value)
}