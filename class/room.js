class Room {
    constructor(io, socket) {
        this.io = io; // 儲存 Socket.IO 伺服器的實例
        this.socket = socket; // 儲存當前連接的 Socket.IO 套接字
        this.roomName = ""; // 儲存房間名稱的屬性，初始化為空字串
    }

    joinRoom(name) {
        this.roomName = name; // 設置房間名稱屬性為傳入的名稱
        this.socket.join(name); // 讓套接字加入指定的房間
    }
    
    emitMsg(msg) {
        this.io.to(this.roomName).emit("chat", msg); // 使用 Socket.IO 伺服器的 to 方法將訊息發送到指定房間的所有客戶端
    }
}
module.exports = Room;