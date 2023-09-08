function updateTime() {
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date();
    const options = {
        timeZone: "Africa/Lagos", 
        hour12: true,
        hour: 'numeric', 
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
    };
    
            const timeString = now.toLocaleString("en-US", options);
            utcTimeElement.textContent = `UTC+1 WAT ${timeString}`;
        }
    

        setInterval(updateTime, 1000);
    
     
        updateTime();
                    

function getCurrentDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    return daysOfWeek[dayOfWeek];
}

function updateData() {
    const dayOfWeekElement = document.getElementById('currentDayOfTheWeedayOfWeek');
    dayOfWeekElement.innerText = getCurrentDayOfWeek();
}

setInterval(updateData, 100);