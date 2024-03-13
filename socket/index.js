import { Server } from "socket.io";


const io = new Server(9000,{
    cors:{
        origin:'http://localhost:3000'
    }
})

let Users=[];
const addUser = (userData,socketId) =>{
    !Users.some(user => user.sub == userData.sub) && Users.push({...userData,socketId})
    console.log('User : ',Users)
}

const getMessage = (userId) =>{
    console.log('user Id : ',userId)
    console.log('fisrt id : ',Users)
    return Users.find(user => user.sub === userId);
}

io.on('connection',(socket)=>{
    console.log('User Connected')

    socket.on('addusers',userData =>{
        addUser(userData,socket.id)
        io.emit('getUser',Users)

    })
    socket.on('sendMessage',data =>{
        const user = getMessage(data.receiverId)
        console.log('user : ',user)
        io.to(user.socketId).emit('getMessage',data)
    })
})