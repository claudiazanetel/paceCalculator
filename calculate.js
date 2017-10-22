function calculatePace(distance, time) {
    // distance in meters and time in hh:mm:ss
    // time in minute
    let km = distance/1000;
    let paceInSeconds = Math.round(timeToSeconds(time)/km)
    let minutes = Math.floor(paceInSeconds / 60)
    let seconds = paceInSeconds % 60
    let pace = zeroPad(minutes) + ":" + zeroPad(seconds)
    
    return pace
}

function calculateTime(distance, pace) {
    // distance in meters and pace in mm:ss
    let km = distance/1000
    let paceInSeconds = Math.round(timeToSeconds(pace)) 
    

    let time = paceInSeconds*km
    return formatTime(Math.round(time))
}

function zeroPad(number) {
    if(number < 10) {
        return "0"+number.toString();
    }
    return number.toString();
}

function timeToSeconds(time) {
    //time in hh:mm:mm
    let splitTime = time.split(":")
    if(splitTime.length > 2) {
        let hoursInSeconds = parseInt(splitTime[0])*60*60
        let minuteInSeconds = parseInt(splitTime[1])*60
        let secondsInSeconds = parseInt(splitTime[2])
        let timeInSeconds = hoursInSeconds + minuteInSeconds + secondsInSeconds 
        return timeInSeconds
    } else {
        let minuteInSeconds = parseInt(splitTime[0])*60
        let secondsInSeconds = parseInt(splitTime[1])
        let timeInSeconds = minuteInSeconds + secondsInSeconds 
        return timeInSeconds
    }
}

function formatTime(time) {
    let hours = Math.floor(time/3600)
    let minutes = Math.floor((time -(hours*3600)) / 60)
    let seconds = time % 60
    return zeroPad(hours) +":"+zeroPad(minutes)+":"+zeroPad(seconds)
}

console.log(calculatePace(21097, "1:24:23") + " min/km")
console.log(calculatePace(21097, "1:37:18") + " min/km")
console.log(calculatePace(21097, "1:21:23") + " min/km")
console.log(calculatePace(21097, "1:24:23") + " min/km")
console.log(calculatePace(21097, "1:24:23") + " min/km")
console.log(calculatePace(21097, "1:24:23") + " min/km")
console.log(calculatePace(42195, "2:00:00") + " min/km")

console.log(calculateTime(21097, "04:37"))
console.log(calculateTime(21097, "4:40"))