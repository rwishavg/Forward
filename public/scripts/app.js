///// Firestore /////

// const circle = document.querySelector(".circle")

// circle.addEventListener("click", () => {
//     if(circle.innerHTML==="STOP"){
//         // STOP
        
//     }
//     else {
//         // START 
        
//     }
// })
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
const object = localStorage.getItem("user");
let u_name = JSON.parse(object);

const db = firebase.firestore();

const createThing = document.getElementById('createThing');
const thingsList = document.getElementById('thingsList');

let thingsRef;
let unsubscribe;


auth.onAuthStateChanged(user => {

    if (user) {

        // Database Reference
        thingsRef = db.collection(u_name)

        createThing.onclick = () => {

            const { serverTimestamp } = firebase.firestore.FieldValue;

            thingsRef.add({
                name: u_name,
                date: dd,
                time: parseInt(localStorage.getItem("time")),
                createdAt: serverTimestamp()
            });
        }
        // Query
        unsubscribe = thingsRef
            .where('uid', '==', user.uid)
            .orderBy('createdAt') // Requires a query
            .onSnapshot(querySnapshot => {
                
                // Map results to an array of li elements

                const items = querySnapshot.docs.map(doc => {

                    return `<li>${doc.data().name}</li>`

                });

                thingsList.innerHTML = items.join('');

            });

    } else {
        // Unsubscribe when the user signs out
        unsubscribe && unsubscribe();
    }
});
