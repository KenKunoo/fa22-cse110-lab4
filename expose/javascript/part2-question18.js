function timeToSeconds() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
// changes from ms to seconds
const intervalID = setInterval(timeToSeconds, 1000);