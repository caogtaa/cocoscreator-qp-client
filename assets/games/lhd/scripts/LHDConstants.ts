
// 下注区域
export const enum Area {
    LONG = 0,
    HU = 1,
    HE = 2,
}

// 时间标题
export const enum ClockTitle {
    FREE = 0,
    BET = 1,
    OPEN = 2,
}

// 游戏状态
export const enum GameStatus {
    FREE = 0,
    BET = 100,
    OPENCARD = 101,
}

// 游戏筹码
export const BetChipScore: number[] = [ 100, 1000, 5000, 10000, 50000, 100000 ];

// 音效
export const Audios = {
    bgm: 'audios/table_bgm',
    tick: 'audios/daojishi',
    bet: 'audios/niu_fly_singer_short',
    coinsfly: 'audios/niu_fly',
    sendcard: 'audios/desk_new_card',
    startbet: 'audios/startbet',
    stopbet: 'audios/stopbet',
};
