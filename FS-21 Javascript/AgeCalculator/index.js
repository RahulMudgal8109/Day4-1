let date = document.getElementById("date");
let calculate = document.getElementById("calculate");
let age = document.getElementById("age");

console.log(calculate);
console.log(date);
console.log(age);
date.max = new Date().toISOString().split("T")[0];

calculate.addEventListener("click", function () {
    let bDay = new Date(date.value);
    let d1 = bDay.getDate();
    let m1 = bDay.getMonth() + 1;
    let y1 = bDay.getFullYear();
    let currentDate = new Date();
    let d2 = currentDate.getDate();
    let m2 = currentDate.getMonth() + 1;
    let y2 = currentDate.getFullYear();


    let d3, m3, y3;
    y3 = y2 - y1;

    if (m2 - m1 >= 0) {
        m3 = m2 - m1;
    }
    else {
        y3--;
        m3 = 12 + m2 - m1;
    }
    if (d2 - d1 >= 0) {
        d3 = d2 - d1;
    }
    else {
        m3--;
        d3 = getDays(y1, m1) + d2 - d1;
    }
    // if(m3<0)
    // {
    //     m3=11;
    // }
    console.log(y3,m3,d3);
    age.innerHTML=`You are ${y3} years , ${m3} months and ${d3} days old`;


})
function getDays(year,month)
{
    return new Date(year,month,0).getDate();
}