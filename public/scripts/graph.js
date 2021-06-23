const db = firebase.firestore();

const object = localStorage.getItem("user");
let u_name = JSON.parse(object);

var dateArray = [];
var hoursArray = [];

db.collection(u_name).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        var item = doc.data();

        var hours = item.time;
        hoursArray.push(hours);

        var date = item.date;
        dateArray.push(date);
    });
});

console.log(hoursArray);
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: dateArray,
        datasets: [{
            label: "Daily Hours",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: hoursArray,
        }]
    },

    // Configuration options go here
    options: {}
});