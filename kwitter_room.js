// Import the functions you need from the SDKs you need

//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAxHmyBC9Ztjz2pGT0VZ2Vu_EFIOchkNo",
  authDomain: "kwitterv2-4.firebaseapp.com",
  databaseURL: "https://kwitterv2-4-default-rtdb.firebaseio.com",
  projectId: "kwitterv2-4",
  storageBucket: "kwitterv2-4.appspot.com",
  messagingSenderId: "252855998861",
  appId: "1:252855998861:web:5531474fad3f09cc4fc5c4",
  measurementId: "G-WJPBLY0RJ0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

username = localStorage.getItem("Username:");
document.getElementById("username").innerHTML = username;


function addRoom(){
      roomName = document.getElementById("room_name").value;
      localStorage.setItem("Room Name:", roomName);
      firebase.database().ref("/").child(roomName).update({purpose: "adding room name"});
      window.location = "page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
                  Room_names = childKey;
      //Start code
                  console.log("Room Name: "+Room_names);
               row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)' >#"+Room_names+"</div><hr>";
               document.getElementById("output").innerHTML += row;

      //End code
});});}

getData();

function redirect(name){
      console.log("Redirecting to "+name);
      localStorage.setItem("Room Name:", name);
      window.location = "page.html";
}

function logout(){
      localStorage.removeItem("Username:");
      localStorage.removeItem("Room Name:");
      window.location = "index.html";
}