const circle = document.querySelector(".circle")
let count = 0, interval
const animator = document.querySelector(".animator_main")
const menu = document.getElementById("hamburger")
const backarrow = document.getElementById("backarrow")

const right_wheel = document.getElementById("right-wheel")
const left_wheel = document.getElementById("left-wheel")
const hat = document.getElementById("hat")
const man_bike = document.getElementById("man-bike")

const style = {
    right_wheel_style: "wheel 2.5s infinite linear",
    left_wheel_style: "wheel 2.5s infinite linear",
    hat_style: "hat 1.5s ease-in-out infinite alternate",
    man_bike_style: "bike 1.5s ease-in-out infinite alternate"
}

const style_on_stop = {
    right_wheel_style: "none",
    left_wheel_style: "none",
    hat_style: "none",
    man_bike_style: "none"
}

circle.addEventListener("click", () => {
    circle.innerHTML = "STOP";
    if (count === 0) {
            // START 
            circle.style.background = "linear-gradient(180deg, #fbfdf9 0%, rgba(247, 214, 214, 0.918) 100%),linear-gradient(180deg, rgba(153, 95, 95, 0) 63.69%, #d5daf8 99.99%)"
            
            circle.style.color = "black"
            circle.style.borderRadius = "15px"
            setTime()
            animation_on_start(style.right_wheel_style,style.left_wheel_style,style.hat_style,style.man_bike_style)
            count = 1
        }
        else {
                // STOP button
            circle.style.background = "linear-gradient(180deg, #effff4 0%, rgba(255, 255, 255, 0) 100%),linear-gradient(180deg, rgba(255, 255, 255, 0) 63.69%, #d1e2e9 99.99%)"

            circle.style.borderRadius = "50%"
            circle.style.color = "black"
            circle.innerHTML = "START"
            
            animation_on_start(style_on_stop.right_wheel_style,style_on_stop.left_wheel_style,style_on_stop.hat_style,style_on_stop.man_bike_style)

            clearInterval(interval)
            count = 0
        }
})

menu.addEventListener("click", () => {
    menu.style.display = "none";
    backarrow.style.display = "block"
}
)

backarrow.addEventListener("click", () => {
    backarrow.style.display = "none";
    menu.style.display = "block"
}
)

let hr = 0, min = 0, sec = 0

// const setAnimator = (count) => {
//     if(count === 0){
//         animator.innerHTML = 
//     }else{
//             animator.innerHTML() = "./ass"
//         }
// }

const setTime = () => {
    interval = setInterval(() => {
        if (sec >= 59) {
            min += 1
            sec = 0
        } else {
            sec += 1
        }

        if (min > 59) {
            hr += 1;
            min = 0
        }

        document.querySelector(".timeshowerbox").innerHTML = `${hr}:${min}:${sec}`
    }, 1000);
}

const animation_on_start = (right_wheel_style,left_wheel_style,hat_style,man_bike_style) => {
    right_wheel.style.animation = right_wheel_style
    left_wheel.style.animation = left_wheel_style
    hat.style.animation = hat_style
    man_bike.style.animation = man_bike_style
}
// data will be exported at the end of the day
// export {hr,min,sec}