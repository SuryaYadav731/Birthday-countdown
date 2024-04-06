const endDate =  "05 May 2024 11:00 AM"
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
function clock(){
    const end = new Date (endDate)
    const now = new Date()
    const differ = (end - now)/ 1000;
    if(differ <0) return;
    inputs[0].value = Math.floor(differ /3600 /24);
    inputs[1].value = Math.floor(differ/3600) % 24;
    inputs[2].value = Math.floor(differ/60)% 60;
    inputs[3].value = Math.floor(differ)%60;
}

setInterval(() => {
    return clock()
}, 1000);