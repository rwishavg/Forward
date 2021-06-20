const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
function signIn(){
    auth.signInWithPopup(provider);
}
auth.onAuthStateChanged(user => {
    if (user) {
        localStorage.setItem("user",JSON.stringify(user.displayName));
        location.href = './main.html';
    } else {
        console.log("Logged Out!");
    }
});