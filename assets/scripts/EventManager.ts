
// 全局事件分发
export default class EventManager {
    private static instance: EventManager = null;

    private eventList: Map<string, Array<{callback: Function, target: any, once: boolean}>> = new Map();

    public static getInstance() : EventManager {
        if (this.instance === null) {
            this.instance = new EventManager();
        }
        return this.instance;
    }

    private constructor() {

    }

    public on(eventName: string, callback: Function, target: any, once: boolean = false) {
        if (!this.eventList[eventName]) {
            this.eventList[eventName] = new Array();
        }

        this.eventList[eventName].push({callback: callback, target: target, once: once});
    }

    public once(eventName: string, callback: Function, target: any) {
        this.on(eventName, callback, target, true);
    }

    public off(eventName: string, callback: Function, target: any) {
        let list = this.eventList[eventName];
        if (list && list != undefined) {
            for (let i = 0; i < list.length; ++i) {
                let event = list[i];
                if (event.callback === callback && event.target === target) {
                    list.splice(i, 1);
                    if (list.length === 0) {
                        this.eventList.delete(eventName);
                    }
                    break;
                }
            }
        }
    }

    public emit(eventName: string, ...param: any[]) {
        let arr = this.eventList[eventName];
        if (!arr) return;
        for (let i = arr.length - 1; i >= 0; --i) {
            let event = arr[i];
            event.callback.call(event.target, ...param);
            if (event.once) {
                arr.splice(i, 1);
            }
        }
        if (arr.length === 0) {
            this.eventList.delete(eventName);
        }
    }
}