const circle = document.querySelector(".circle")
let count = 0, interval
const animator = document.querySelector(".animator_main")
const menu = document.getElementById("hamburger")
const backarrow = document.getElementById("backarrow")

circle.addEventListener("click", () => {
    circle.innerHTML = "STOP";
    if (count === 0) {
        circle.style.color = "black"
        circle.style.borderRadius = "15px"
        setTime()
        // setAnimator(count)
        count = 1
    }
    else {
        circle.style.borderRadius = "50%"
        circle.style.color = "black"
        circle.innerHTML = "START"
        clearInterval(interval)
        count = 0
    }
})

let hr = 0, min = 0, sec = 0

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