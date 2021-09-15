// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import UIManager from "../../scripts/UIManager"
import EventManager from "../../scripts/EventManager"
import NetManager from "../../scripts/NetManager"
import GlobalModel from "../../scripts/model/GlobalModel"
import Utils from "../../scripts/Utils"
import { hall } from "../../scripts/proto"
import { GlobalEvent } from "../../scripts/Constants"

const {ccclass, property} = cc._decorator;

@ccclass
export default class TeamCreateClubLayer extends cc.Component {

    @property(cc.EditBox)
    private editbox: cc.EditBox = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        EventManager.getInstance().on('hall.response_team_create_club', this.response_team_create_club, this);
    }

    start () {

    }

    onDestroy() {
        EventManager.getInstance().off('hall.response_team_create_club', this.response_team_create_club, this);
    }

    // update (dt) {}

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/TeamCreateClubLayer');
    }

    private onClickJoinClub() {
        UIManager.getInstance().addLayer('hall', 'prefabs/TeamJoinClubLayer');
    }

    private onClickCreateClub() {
        let clubname = this.editbox.string;
        if (clubname == '') {
            UIManager.getInstance().showToast(this.editbox.placeholder);
            return;
        }

        UIManager.getInstance().showLoadingTip('正在处理，请稍候...');
        NetManager.getInstance().sendNetMsgToHall('hall', 'request_team_create_club', {
            userid: GlobalModel.getInstance().globalUserData.userid,
            password: GlobalModel.getInstance().globalUserData.password,
            clubname: clubname,
            join_auth: false
        });
    }

    private response_team_create_club(msg: hall.response_team_create_club) {
        UIManager.getInstance().hideLoadingTip();
        
        if (msg.result_code == 0) {
            GlobalModel.getInstance().globalUserData.club_info.push(msg.club_info);
            GlobalModel.getInstance().globalUserData.selected_clubid = msg.club_info.clubid;
            EventManager.getInstance().emit(GlobalEvent.UPDATE_CLUB);
            this.onClickClose();
        } else {
            UIManager.getInstance().showToast(msg.reason);
        }
    }
}
