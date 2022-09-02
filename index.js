const timeLeft = document.getElementById("time-left") ; 
const birthDay = new Date(`08/06/2023`) ; 
const second = 1000 ; 
const minute = second * 60 ; 
const hour = minute * 60 ; 
const day = hour * 24 ; // milisecond
let timerId ; 
// console.log(birthDay) ; 

let countDown = () => {
    const today = new Date() ; 
    console.log("today : " , today) ; 
    console.log("birthday : " , birthDay) ; 
    const timeSpan = birthDay - today ; 
    console.log("timeSpan : " ,timeSpan ) ; 
    // console.log(timeSpan) ;
    if(timeSpan <= -day ){
        timeLeft.innerHTML = "Your BD has passed !" ; 
        clearInterval(timerId) ;
        return  ;
    }
    if(timeSpan <= 0 ){
        timeLeft.innerHTML = "Happy Birthday !!!" ; 
        clearInterval(timerId) ; 
        return ;
    }
    const daysLeft = Math.floor(timeSpan / day) ; 
    const hoursLeft = Math.floor((timeSpan %  day) / hour) ; 
    // const minutes = ((timeSpan %  day) % hour) / minute ; 
    const minutes = Math.floor((timeSpan % hour) / minute ); 
    const secondsLeft = Math.floor((timeSpan % minute) / second);
    console.log(daysLeft , " " , hoursLeft , " " , minutes , " " , secondsLeft) ; 
    timeLeft.innerHTML = `
        <span>${daysLeft} :</span>
        <span>${hoursLeft} : </span>
        <span>${minutes} : </span>
        <span>${secondsLeft}</span>

    ` ; 
}

timerId = setInterval(countDown, second);