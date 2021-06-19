const circle = document.querySelector(".circle")
let count = 0, interval
const animator = document.querySelector(".animator_main")
const menu = document.getElementById("hamburger")
const backarrow = document.getElementById("backarrow")


circle.addEventListener("click", () => {
    circle.innerHTML = "STOP";
    if (count === 0) {
        circle.style.background = "linear-gradient(180deg, #fbfdf9 0%, rgba(247, 214, 214, 0.918) 100%),linear-gradient(180deg, rgba(153, 95, 95, 0) 63.69%, #d5daf8 99.99%)"

        circle.style.color = "black"
        circle.style.borderRadius = "15px"
        setTime()
        // setAnimator(count)
        count = 1
    }
    else {
        circle.style.background = "linear-gradient(180deg, #effff4 0%, rgba(255, 255, 255, 0) 100%),linear-gradient(180deg, rgba(255, 255, 255, 0) 63.69%, #d1e2e9 99.99%)"

        circle.style.borderRadius = "50%"
        circle.style.color = "black"
        circle.innerHTML = "START"
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
//             animator.innerHTML() = "hello"
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


// data will be exported at the end of the day
// export {hr,min,sec}