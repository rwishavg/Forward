const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
function LogOut(){
    auth.signOut();
    location.href = './index.html';
}