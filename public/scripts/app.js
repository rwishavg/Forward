///// Firestore /////

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
const object = localStorage.getItem("user");
let u_name = JSON.parse(object);

const db = firebase.firestore();

const createThing = document.getElementById('createThing');
const thingsList = document.getElementById('thingsList');

let thingsRef;
let unsubscribe;

const auth = firebase.auth();
auth.onAuthStateChanged(user => {

    if (user) {

        // Database Reference
        thingsRef = db.collection(u_name)

        createThing.onclick = () => {
            if (localStorage.getItem("date")!=dd)
            {
                localStorage.setItem("date",dd);
                const { serverTimestamp } = firebase.firestore.FieldValue;
                thingsRef.add({
                    name: u_name,
                    date: dd,
                    time: parseInt(localStorage.getItem("time")),
                    createdAt: serverTimestamp()
                });
                localStorage.setItem("time",JSON.stringify(0));
            }
        }
        unsubscribe = thingsRef

    } else {
        // Unsubscribe when the user signs out
        unsubscribe && unsubscribe();
    }
});
