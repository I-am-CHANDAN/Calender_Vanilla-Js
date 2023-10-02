let todayDate = new Date();

function renderData() {
    //getting Day and date
    let fullDate = document.getElementById("fullDate");
    fullDate.innerHTML = todayDate.toDateString();

    //getting Month
    let fullMonth = document.getElementById("fullMonth")
    let Month = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    fullMonth.innerHTML = Month[todayDate.getMonth()];

    //getting dynamic dates and previous month date
    activeDate = todayDate.getDate(); //today date
    let endDate = new Date(todayDate.getFullYear(), todayDate.getMonth() + 1, 0).getDate();

    let prevDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), 0).getDate();

    let dateCell = "";
    todayDate.setDate(1);
    let day = todayDate.getDay()

    for (let x = day; x > 0; x--) {
        dateCell += `<div class="prev-date"> ${prevDate - x + 1} </div>`
    }

    for (let i = 1; i <= endDate; i++) {
        if (i == activeDate) {
            dateCell += `<div class="activeDate"> ${i} </div>`;
        } else {
            dateCell += `<div> ${i} </div>`;
        }
    }
    let date = document.getElementsByClassName("date");
    date[0].innerHTML = dateCell;
}

//getting last month and next month
function moveData(para) {
    if (para = 'prev') {
        todayDate.setMonth(todayDate.getMonth - 1);
    } else {
        todayDate.setMonth(todayDate.getMonth + 1);
    }
    renderData();
}
