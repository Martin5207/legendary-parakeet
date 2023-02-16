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

    user_name=localStorage.getItem("username");room_name=localStorage.getItem("room_name");
    function send(){
       var msg=document.getElementById("msg").value ;
 firebase.database().ref(room_name).push({
 name: user_name,
 msg:msg,
 like:0
 
 });
 document.getElementById("msg").value="";
 
    }
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
 //Start code
 name1=message_data["name"];
 message=message_data["msg"];
 like=message_data["like"];
 console.log(message_data);
 name_with_tag="<h4 >  "+name1+" <img class='user_tick' src='tick.png'>  </h4> ";
 message_with_tag="<h4 class='message_h4'  > "+message+" </h4>  ";
 like_button="<button class='btn btn-warning'  id=   "+firebase_message_id+"  value= "+like +" onclick='updatelike(this.id)'> ";
 span_with_tag="<span class='glyphicon glyphicon-thumbs-up'  >like:  "+like+"</span></button><hr>";
 row=name_with_tag+message_with_tag+like_button+span_with_tag;
 document.getElementById("output").innerHTML += row;
 //End code
       } });  }); }
 getData();
 function updatelike(message_id){
 button_id=message_id;
 likes=document.getElementById(button_id).value;
 console.log(likes);
 updated_like=Number(likes)+1 ;
 firebase.database().ref(room_name).child(message_id).update({
       like:updated_like
 })
 }