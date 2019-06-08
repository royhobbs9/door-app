function handleClick (){
     var userName = $("#username").value;
     socket.emit('doorbell', {   
      userid: userName,
      location:{
        lat:1.000,
        long:1.000,
     }
    });
}
document.getElementById("submit").onclick = handleClick;