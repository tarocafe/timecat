import { $ } from "./taro.js"

const clock_seconds = $(".seconds"),
    clock_minutes = $(".minutes"),
    clock_hours =   $(".hours"),
    clock_tail =   $(".clock .tail"),
    speech_bubble = $(".bubble .container")

clockAnimation()

function clockAnimation() {
    const date = new Date(),
        precise_seconds = date.getSeconds() + date.getMilliseconds() / 1000,
        precise_minutes = date.getMinutes() + ((precise_seconds / 60) * 100) / 100,
        precise_hours = date.getHours() + ((precise_minutes / 60) * 100) / 100;

    //console.log(precise_hours) 
    //console.log(hours % 12)

    clock_seconds.style.transform = `rotate(${((precise_seconds / 60) * 360).toFixed(3)}deg)`
    clock_minutes.style.transform = `rotate(${((precise_minutes / 60) * 360).toFixed(3)}deg)`
    clock_hours.style.transform = `rotate(${(((precise_hours % 12) / 12) * 360).toFixed(3)}deg)`
    //clock_tail.style.transform = `rotate(${((Math.sin(precise_seconds) / 60) * 360).toFixed(3)}deg)`
    document.body.style.backgroundColor = `hsl(${((precise_minutes / 60) * 360).toFixed(3)}deg, ${(((precise_hours % 12) / 12) * 100)}%, 75%)`

    speech_bubble.innerHTML = `${date.toLocaleTimeString()}`

    requestAnimationFrame(clockAnimation)
}