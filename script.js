let a = document.getElementById('C1');
let b = document.getElementById('C2');
let c = document.getElementById('C3');
let d = document.getElementById('C4');
let e = document.getElementById('C5');
let f = document.getElementById('C6');
let g = document.getElementById('C7');


setInterval(() => {
let now = new Date();
let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();
let date = now.getDate();
let month = now.getMonth();
let year = now.getFullYear();
a.textContent = h;
b.textContent = m;
c.textContent = s;
d.textContent = date;
e.textContent = month;
f.textContent = year;
}, 1000)

if(a.textContent >= 0 && a.textContent <= 12) {
  g.textContent = "AM";
}
else {
  g.textContent = "PM";
}