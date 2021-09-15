
// 网关事件
export const enum GateEvent {
    CONNECTED = 'GATE_EVENT.CONNECTED',
    CLOSED = 'GATE_EVENT.CLOSED',
    RECONECTING = 'GATE_EVENT.RECONECTING',
    DELAY = 'GATE_EVENT.DELAY',
}

// 全局事件
export const enum GlobalEvent {
    HOTUPDATE = 'GLOBAL_EVENT.HOTUPDATE',
    RELOGIN = 'GLOBAL_EVENT.RELOGIN',
    QUIT_GAME = 'GLOBAL_EVENT.QUIT_GAME',
    UPDATE_SCORE = 'GLOBAL_EVENT.UPDATE_SCORE',
    NEW_EMAIL = 'GLOBAL_EVENT.NEW_EMAIL',
    UPDATE_CLUB = 'GLOBAL_EVENT.UPDATE_CLUB',
}

// 俱乐部事件
export const enum ClubEvent {
    INIT_SUBROOM = 'CLUB_EVENT.INIT_SUBROOM',
    RELOAD = 'CLUB_EVENT.RELOAD',
}

// 桌子事件
export const enum TableEvent {
    USER_STATUS = 'TABLE_EVENT.USER_STATUS', // 用户状态
    BANKER_STATUS = 'TABLE_EVENT.BANKER_STATUS', // 庄家状态
    CREATE = 'TABLE_EVENT.CREATE',           // 创建桌子
    DELETE = 'TABLE_EVENT.DELETE',           // 删除桌子
}

// 游戏事件
export const enum GameEvent {
    INIT = 'GAME_EVENT.INIT',                // 游戏初始化
    NET_MSG = 'GAME_EVENT.NET_MSG',          // 网络消息
    USER_ENTER = 'GAME_EVENT.USER_ENTER',    // 用户进入
    USER_LEAVE = 'GAME_EVENT.USER_LEAVE',    // 用户离开
    USER_SCORE = 'GAME_EVENT.USER_SCORE',    // 分数更新
    USER_STATUS = 'GAME_EVENT.USER_STATUS',  // 状态更新
    CLOSE_GAME = 'GAME_EVENT.CLOSE_GAME',    // 关闭游戏
}

// 游戏状态
export const enum GameStatus {
    FREE = 0,       // 空闲状态
    PLAY = 100,     // 游戏状态
}

// 用户状态
export const enum UserStatus {
    NULL = 0,     // 用户离开
    FREE = 1,     // 站立状态
    SIT = 2,      // 坐下状态
    READY = 3,    // 准备状态
    OB = 4,       // 旁观状态
    PLAYING = 5,  // 游戏状态
    OFFLINE = 6,  // 断线状态
}

// 消息类型
export const enum MessageType {
    CHAT = 0x01,         // 聊天信息
    TOAST = 0x02,        // TOAST
    POPUP = 0x04,        // 弹出消息
    CLOSE_GAME = 0x08,   // 关闭游戏
    CLOSE_ROOM = 0x10,   // 关闭房间
    CLOSE_HALL = 0x20,   // 关闭大厅
}

// 游戏名字
export const GameNameMap = {
    1: ['ddz', ''],
    2: ['niuniu', 'prefabs/NiuNiuScene'],
    2000: ['lhd', 'prefabs/LHDScene', '', ''],   // 百人的根据subroomid区分
}
