class Room {
    constructor(io, roomName) {
        this.io = io;
        this.roomName = roomName;
        this.joinRoom();
    }

    joinRoom() {
         socket.join(roomName);
    }
    
    emitMsg(msg) {
        this.io.to(this.roomName).emit(msg)
    }
}
module.exports = Room;