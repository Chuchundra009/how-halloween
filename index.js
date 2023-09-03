function halloween() {
    const halloweenDate = new Date("October 31, 2023 00:00");
    const now = new Date();
    const diff = halloweenDate-now;

    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay)/msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;


        clearInterval(timerID);
        halloweenNew();
    }

    
}

let timerID = setInterval(halloween, 1000);

function halloweenNew() {
    const heading = document.querySelector("h1");
    heading.textContent = "BOO... TRICK OR TREAT?";
    heading.classList.add("red");
}

var btnFlag = false;
const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
    btnFlag = !btnFlag;
    if (btnFlag) {
        document.querySelector("#myAudio").play();
        document.getElementById('playBtn').src='https://img.icons8.com/fluency-systems-regular/2x/circled-pause--v2.png';
    } 
    
    else {
        document.querySelector("#myAudio").pause();
        document.getElementById('playBtn').src='https://img.icons8.com/fluency-systems-regular/2x/circled-play--v2.png';
    }
    
})