const circle = document.querySelector(".circle")
let count = 0,interval
const animator = document.querySelector(".animator_main") 

circle.addEventListener("click", () => { circle.innerHTML = "STOP" ; 
    if(count === 0){
        circle.style.background = "linear-gradient(90deg,#D1A7A7,#FFBCB8)"
        circle.style.color = "white"
        circle.style.borderRadius = "10px"
        setTime()
        // setAnimator(count)
        count = 1
    }   
    else{
        circle.style.borderRadius = "50%"
        circle.style.color = "black"
        circle.style.background = "linear-gradient(180deg, #F0F8EA 0%, rgba(255, 255, 255, 0) 100%),linear-gradient(180deg, rgba(255, 255, 255, 0) 63.69%, #C3C9EC 99.99%)"
        circle.innerHTML="START"
        clearInterval(interval)
        count = 0
    }})

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