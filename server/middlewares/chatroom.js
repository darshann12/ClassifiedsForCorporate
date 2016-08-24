var chatroom={};

var activeUsers={};


chatroom.init=function(io){


    io.on('connect',function(socket){
        var currentUser;

        socket.on('disconnect',function(){

            if(activeUsers[currentUser])
                activeUsers[currentUser]=undefined;
            console.log("disconnected");

        })

        socket.on('userLogin',function(data){
            currentUser=data.username;
            activeUsers[data.username]=socket.id;
            console.log("user logged in set socket id for "+data.username);

        })  

        socket.on('notification',function(data){
            var socketid= activeUsers[data.reciever];
            if(socketid){
                
                if (io.sockets.connected[socketid]) {
                    io.sockets.connected[socketid].emit('notification', data);
                }
            }
            else{
                socket.emit('userOffline');

            }


        })  

        socket.on('sendMessage',function(data){
            console.log("got new message"+data.message);
            //send message to intended reciever
            var socketid= activeUsers[data.to];
            if(socketid){
                console.log("sending message to "+data.to+" with socketid"+activeUsers[data.to]);
                if (io.sockets.connected[socketid]) {
                    io.sockets.connected[socketid].emit('newMessage', data);
                }
            }
            else{
                socket.emit('userOffline');

            }
        })


    });




}


module.exports = chatroom;