const firebaseConfig = {
      apiKey: "AIzaSyAJxVbnZ4HOcNImVEx1Aso-hYU43zVoF0c",
      authDomain: "aaaaaaa-96da8.firebaseapp.com",
      databaseURL: "https://aaaaaaa-96da8-default-rtdb.firebaseio.com",
      projectId: "aaaaaaa-96da8",
      storageBucket: "aaaaaaa-96da8.appspot.com",
      messagingSenderId: "71645859802",
      appId: "1:71645859802:web:2e694e646c514f41d33ae3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username=localStorage.getItem("username");
    document.getElementById("user_name").innerHTML="welcome "+username+"!";
    
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          //Start codeiuriushfefffffffrerrfeasob
    console.log("roomname-"+Room_names);
    row="<div class='room_name' id='"+Room_names+"' onclick='redirecttoroomname(this.id)' >#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML +=row;
          //End code     e
          });});}
    getData();
    
    function addroom() {
    Room_name=document.getElementById("room_name").value ;
    firebase.database().ref("/").child(Room_name).update({
    purpose:"addingroomname"
    
    });
    
    localStorage.setItem("room_name",Room_name);
    window.location="kwitter_page.html";
    }
    function redirecttoroomname(name){
          localStorage.setItem("room_name",name);
          window.location="kwitter_page.html";
    }
    function logout(){
          localStorage.removeItem("room_name");      localStorage.removeItem("username");
    window.location="index.html"
    }