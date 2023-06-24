const Room = require("../class/room");

const connSocket = {
    /**
     * 連線開始，由 API 伺服器提供連線資料
     * 
     */
    startConn: async (req, res) => {
        const io = req.io;
        let socketState = false;
        // 建立連線
        io.on('connection', (socket) => {
            socketState = (socket.connected);
            //設定 room
            let roomName = "chat mes";
            let roomId = "test";
            
            const CurrRoom = new Room(io, roomName);

            //更新設定狀態
            socketState = (socket.connected)
            //紀錄對話資料

            //監聽事件
            socket.on(roomId, () => {
                //發送資料
                CurrRoom.emitMsg("test")
            })
            socket.on('disconnect', () => {
                console.log('user disconnected');
            })
        })
        res.status(200).json({
            state
        });
    },
    /**
     * 中止 socket 連線
     * 
     */
    stopConn: (req, res) => {
        io.in("chat mes").disconnectSockets(true);
    }
}

module.exports = connSocket;