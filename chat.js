// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBKhQt1mQiu1NO_YippbUgKb5AypaQiYMc",
    authDomain: "lets-chat-web-app-e71fa.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-e71fa-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-e71fa",
    storageBucket: "lets-chat-web-app-e71fa.appspot.com",
    messagingSenderId: "283124839060",
    appId: "1:283124839060:web:e67fae7a90a3eed9513a81"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



