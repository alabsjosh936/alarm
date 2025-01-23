
for (let i = 24; i >= 0; i--) {
    i = i < 10? "0" + i : i;
    let child = document.getElementById("in").innerHTML += `<option value="${i}">${i}</option>`;
    console.log(child);
    
}


for (let i = 60; i >= 0; i--) {
    i = i < 10? "0" + i : i;
    let child = document.getElementById("pu").innerHTML += `<option value="${i}">${i}</option>`;
    console.log(child);
    
}

setInterval(() => {
    let date = new Date()
    let h = date.getHours()
    h = h < 10? "0" + h : h;
    let m = date.getMinutes()
    m = m < 10? "0" + m : m;
    let s = date.getSeconds()
    s = s < 10? "0" + s : s;

    document.querySelector('h1').innerHTML = `${h}:${m}:${s}`
}, 1000);

function setAlarm() {
    time = `${document.getElementById('in').value}:${document.getElementById('pu').value}`
    if (time.includes('Hour')||time.includes('Minutes')) {
        return console.log('Input valid time');
    }
    console.log(time);
    let content = document.getElementById('h1')
    console.log(content);
    
}



