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
import { netmsg, hall } from "../../scripts/proto"
import { GlobalEvent } from "../../scripts/Constants"

const {ccclass, property} = cc._decorator;

@ccclass
export default class NoticeLayer extends cc.Component {

    @property([cc.Node])
    private nodePages: cc.Node[] = [];
    @property([cc.Toggle])
    private togglePages: cc.Toggle[] = [];

    @property(cc.Node)
    private nodeDeailLayer: cc.Node = null;

    // node5相关
    @property(cc.Node)
    private nodeEmailContainer: cc.Node = null;
    @property(cc.Node)
    private nodeEmailItem: cc.Node = null;
    @property(cc.Node)
    private nodeNoEmail: cc.Node = null;
    @property(cc.Node)
    private nodeEmailRedPoint: cc.Node = null;

    // 邮件详情
    @property(cc.Label)
    private labelDetailTitle: cc.Label = null;
    @property(cc.Label)
    private labelDetailContent: cc.Label = null;
    @property(cc.Label)
    private labelDetailTime: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.reloadEmails();

        let eventManager = EventManager.getInstance();
        eventManager.on(GlobalEvent.NEW_EMAIL, this.onEventNewEmail, this);
    }

    start () {

    }

    onDestroy() {
        let eventManager = EventManager.getInstance();
        eventManager.off(GlobalEvent.NEW_EMAIL, this.onEventNewEmail, this);
    }

    // update (dt) {}

    private reloadEmails() {
        this.nodeEmailContainer.removeAllChildren();
        let unreadCount = 0;
        for (let i = 0; i < GlobalModel.getInstance().userMessageList.length; ++i) {
            let item = GlobalModel.getInstance().userMessageList[i];
            let email = cc.instantiate(this.nodeEmailItem);
            if (item.readed == 0) {
                unreadCount++;
            } else {
                email.getChildByName('unread').active = false;
                email.getChildByName('read').active = true;
            }
            email.getChildByName('title').getComponent(cc.Label).string = item.title;
            email.getChildByName('time').getComponent(cc.Label).string = item.insert_date;
            email.getComponent(cc.Button).clickEvents[0].customEventData = i.toString();
            email.name = i.toString();
            this.nodeEmailContainer.addChild(email);
        }

        if (unreadCount > 0) {
            this.nodeEmailRedPoint.active = true;
            this.nodeEmailRedPoint.getChildByName('New Label').getComponent(cc.Label).string = unreadCount.toString();
        } else {
            this.nodeEmailRedPoint.active = false;
        }

        this.nodeNoEmail.active = GlobalModel.getInstance().userMessageList.length > 0 ? false : true;
    }

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/NoticeLayer');
    }

    private onClickToggles(toggle: cc.Toggle) {
        let index = this.togglePages.indexOf(toggle);
        for (let i = 0; i < this.nodePages.length; ++i) {
            if (i == index) {
                this.nodePages[i].active = true;
            } else {
                this.nodePages[i].active = false;
            }
        }
    }

    private onClickEmailItem(event: any, customEventData: string) {
        let index = parseInt(customEventData);
        this.nodeDeailLayer.active = true;
        let email = GlobalModel.getInstance().userMessageList[index];
        this.labelDetailTitle.string = email.title;
        this.labelDetailContent.string = email.message;
        this.labelDetailTime.string = email.insert_date;

        if (email.readed == 0) {
            email.readed = 1;
            let emailNode = this.nodeEmailContainer.getChildByName(customEventData);
            emailNode.getChildByName('unread').active = false;
            emailNode.getChildByName('read').active = true;

            // 红点
            let unreadCount = 0;
            for (let i = 0; i < GlobalModel.getInstance().userMessageList.length; ++i) {
                let item = GlobalModel.getInstance().userMessageList[i];
                if (item.readed == 0) {
                    unreadCount++;
                }
            }
            if (unreadCount > 0) {
                this.nodeEmailRedPoint.active = true;
                this.nodeEmailRedPoint.getChildByName('New Label').getComponent(cc.Label).string = unreadCount.toString();
            } else {
                this.nodeEmailRedPoint.active = false;
            }
            EventManager.getInstance().emit(GlobalEvent.NEW_EMAIL, unreadCount);

            NetManager.getInstance().sendNetMsgToHall('hall', 'request_user_message_deal',
            {
                userid: GlobalModel.getInstance().globalUserData.userid,
                password: GlobalModel.getInstance().globalUserData.password,
                id: email.id,
                deal: 0
            });
        }
    }

    private onClickDetailClose() {
        this.nodeDeailLayer.active = false;
    }

    private onEventNewEmail() {
        this.reloadEmails();
    }
}
