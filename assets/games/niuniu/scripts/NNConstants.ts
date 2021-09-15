
export const MAX_PLAYER: number = 10;

export const ME_VIEWID: number = 0;

export const enum GameStatus {
    FREE = 0,
    CALLBANKER = 100,
    BET = 101,
    OPENCARD = 102,
}

export const enum TimeTick {
    CALLBANKER = 5,
    BET = 5,
    OPENCARD = 5,
    AUTOREADY = 5,
}

// 音效
export const Audios = {
    bgm: 'audios/table_bgm',
    grab: [ [ 'audios/buqiang_girl', 'audios/buqiang_boy' ], [ 'audios/qiangzhuang_girl', 'audios/qiangzhuang_boy' ] ],
    bet: 'audios/xiazhu',
    cardtype: [
        [ 'audios/meiniu_girl', 'audios/meiniu_boy' ],
        [ 'audios/niu_1_girl', 'audios/niu_1_boy' ],
        [ 'audios/niu_2_girl', 'audios/niu_2_boy' ],
        [ 'audios/niu_3_girl', 'audios/niu_3_boy' ],
        [ 'audios/niu_4_girl', 'audios/niu_4_boy' ],
        [ 'audios/niu_5_girl', 'audios/niu_5_boy' ],
        [ 'audios/niu_6_girl', 'audios/niu_6_boy' ],
        [ 'audios/niu_7_girl', 'audios/niu_7_boy' ],
        [ 'audios/niu_8_girl', 'audios/niu_8_boy' ],
        [ 'audios/niu_9_girl', 'audios/niu_9_boy' ],
        [ 'audios/niuniu_girl', 'audios/niuniu_boy' ],
        [ 'audios/shunziniu_girl', 'audios/shunziniu_boy' ],
        [ 'audios/yinniu_girl', 'audios/yinniu_boy' ],
        [ 'audios/tonghuaniu_girl', 'audios/tonghuaniu_boy' ],
        [ 'audios/jinniu_girl', 'audios/jinniu_boy' ],
        [ 'audios/huluniu_girl', 'audios/huluniu_boy' ],
        [ 'audios/wuxiaoniu_girl', 'audios/wuxiaoniu_boy' ],
        [ 'audios/zhadanniu_girl', 'audios/zhadanniu_boy' ],
        [ 'audios/yitiaolong_girl', 'audios/yitiaolong_boy' ],
        [ 'audios/tonghuashun_girl', 'audios/tonghuashun_boy' ],
    ],
    coinsfly: 'audios/coinsfly'
};
