var dateArray = [];
var hoursArray = [];

async function getData(resolve){
    const db = firebase.firestore();
    const object = localStorage.getItem("user");
    let u_name = JSON.parse(object);

    await db.collection(u_name).orderBy("createdAt", "asc").onSnapshot((snapshot) => {
        snapshot.docs.forEach(doc => {
            var item = doc.data();
    
            var hours = item.time;
            hoursArray.push(hours);
    
            var date = item.date;
            dateArray.push(date);
        });
        resolve("success");
    });
}
if (dateArray.length > 15) {
    hoursArray = hoursArray.slice(hoursArray.length - 15, hoursArray.length);
    dateArray = dateArray.slice(dateArray.length - 15, dateArray.length);
}

const promise1 = new Promise((resolve,reject)=>{
    getData(resolve);
}).then(()=>{

    console.log(hoursArray);
    console.log(dateArray);
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: dateArray,
        datasets: [{
            label: "Daily Seconds",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: hoursArray,
        }]
    },

    // Configuration options go here
        options: {
            plugins: {
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        font: {
                            size: 30,
                            weight : "boldness"
                        }
                    }
                }
            }
    }
    });

    let sum = 0;
    hoursArray.map(hr=>{
    sum+=hr;
    console.log(hr,sum);    
    })
    sum = sum.toFixed(2);
    document.getElementById("total_time").innerHTML = sum;
    let avg = sum/(dateArray.length);
    avg = avg.toFixed(2);
    document.getElementById("avg_time").innerHTML = avg;
})
