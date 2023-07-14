function rotateClockHands() {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const second = currentTime.getSeconds();

    const hourRotation = 30 * hour + 0.5 * minute;
    const minuteRotation = 6 * minute + 0.1 * second;
    const secondRotation = 6 * second;

    document.getElementById('hour-hand').style.transform = `rotate(${hourRotation}deg)`;
    document.getElementById('minute-hand').style.transform = `rotate(${minuteRotation}deg)`;
    document.getElementById('second-hand').style.transform = `rotate(${secondRotation}deg)`;
}

// Update the clock every second
setInterval(rotateClockHands, 1000);
