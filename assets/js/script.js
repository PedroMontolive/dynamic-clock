
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const clock = setInterval(function time() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if (h < 10) h = '0' + h;

    if (m < 10) m = '0' + m;

    if (s < 10) s = '0' + s;

    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
}); 
