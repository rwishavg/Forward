let timer = 0;
let askedToStop = false;
let interval;
const circle = document.querySelector(".circle")
const animator = document.querySelector(".animator_main")
const menu = document.getElementById("hamburger")
const backarrow = document.getElementById("backarrow")
const right_wheel = document.getElementById("right-wheel")
const left_wheel = document.getElementById("left-wheel")
const hat = document.getElementById("hat")
const man_bike = document.getElementById("man-bike")

//Initialising Local Storage:
if(localStorage.hasOwnProperty('time')===false)
{
    localStorage.setItem("time",JSON.stringify(0));
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
console.log(dd);

if(localStorage.hasOwnProperty('date')===false)
{
    localStorage.setItem("date",dd);
}

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

const changestyle = (color,borderradius,background,innerhtml) => {
    circle.style.background = background;
    circle.style.borderRadius = borderradius;
    circle.style.color = color;
    circle.innerHTML = innerhtml;
}

circle.addEventListener("click", () => {
    if(circle.innerHTML==="STOP"){
        // STOP
        askedToStop = true;
        changestyle("black","50%","linear-gradient(180deg, #effff4 0%, rgba(255, 255, 255, 0) 100%),linear-gradient(180deg, rgba(255, 255, 255, 0) 63.69%, #d1e2e9 99.99%)","START");
        animation_on_start(style_on_stop.right_wheel_style,style_on_stop.left_wheel_style,style_on_stop.hat_style,style_on_stop.man_bike_style)
        clearInterval(interval)
        localStorage.setItem("time",JSON.stringify(timer));
    }
    else {
        // START 
        askedToStop = false;
        changestyle("black","15px","linear-gradient(180deg, #fbfdf9 0%, rgba(247, 214, 214, 0.918) 100%),linear-gradient(180deg, rgba(153, 95, 95, 0) 63.69%, #d5daf8 99.99%)","STOP");
        setTime()
        animation_on_start(style.right_wheel_style,style.left_wheel_style,style.hat_style,style.man_bike_style)
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

const setTime = () => {
    console.log("hit");
    const curr = Date.now();
    interval = setInterval(() => {
        let hr = 0, min = 0, sec = 0
        if(askedToStop===true)
            clearInterval(interval);
        timer = parseInt((Date.now() - curr)/1000);
        var old_time = parseInt(localStorage.getItem("time"));
        timer = timer + old_time;
        sec=parseInt(timer%60);
        hr = parseInt(timer / 3600);
        min = parseInt(timer / 60);
        if(sec<10 && min<10)
            document.querySelector(".timeshowerbox").innerHTML = `0${hr}:0${min}:0${sec}`
        else if(sec<10 && min>9)
            document.querySelector(".timeshowerbox").innerHTML = `0${hr}:${min}:0${sec}`
        else if(sec>9 && min <10)
            document.querySelector(".timeshowerbox").innerHTML = `0${hr}:0${min}:${sec}`
        else 
            document.querySelector(".timeshowerbox").innerHTML = `0${hr}:${min}:${sec}`
    },1000)
}

const animation_on_start = (right_wheel_style,left_wheel_style,hat_style,man_bike_style) => {
    right_wheel.style.animation = right_wheel_style
    left_wheel.style.animation = left_wheel_style
    hat.style.animation = hat_style
    man_bike.style.animation = man_bike_style
}

// document.getElementById("time_box").innerHTML = localStorage.getItem("time");