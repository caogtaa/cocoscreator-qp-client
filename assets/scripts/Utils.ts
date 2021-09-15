
export default class Utils {
    public static toScore(money: number) {
        if (!money) {
            return 0;
        }
        else {
            return Math.floor(money * 100);
        }
    }

    // round:保留小数点后几位
    public static toMoney(score: number, round?: number) {
        if (!score) {
            return 0;
        }

        if (round === 0) {
            return Math.floor(score / 100);
        }
        else if (round === 1) {
            return (score / 100).toFixed(1);
        }
        else if (round === 2) {
            return (score / 100).toFixed(2);
        }
        else if (round === 3) {
            return (score / 100).toFixed(3);
        }
        else {
            return score / 100;
        }
    }

    //@brief 切割字符串，并用“...”替换尾部
    //@param str:要切割的字符串
    //@param maxCount，字符串上限,中文字为2的倍数
    //@param showCount：显示英文字个数，中文字为2的倍数,可为空
    //@note 函数实现：截取字符串一部分，剩余用“...”替换
    public static getShortString(str: string, maxCount: number, showCount: number) {
        if (str.length === 0 || !maxCount) {
            return str;
        }

        let sStr = str;
        let tCode = [];
        let width = 0;
        if (!showCount) {
            showCount = maxCount - 2;
        }

        for (let i = 0; i < sStr.length; ++i) {
            let curByte = sStr.charCodeAt(i);
            let byteCount = 0;
            if (curByte > 255) {
                byteCount = 2;
            } else {
                byteCount = 1;
            }
            if (byteCount === 1) {
                width++;
                tCode.push(1);
            } else {
                width += 2;
                tCode.push(2);
            }
        }

        if (width > maxCount) {
            let _str = "";
            let _len = 0;
            for (let i = 0; i < sStr.length; ++i) {
                _str += sStr[i];
                _len += tCode[i];
                if (_len >= showCount) {
                    break
                }
            }
            str = _str + '..';
        }
        return str;
    }

    // 使节点的所有图片变灰 state: 0正常 1变灰
    public static setSpriteGray(node: cc.Node, state: cc.Sprite.State) {
        let s = node.getComponentsInChildren(cc.Sprite);
        for (let i = 0; i < s.length; ++i) {
            s[i].setState(state)
        }
    }

    public static formatTimestamp(timestamp: number, noyear: boolean = false) {
        let date = new Date(timestamp);
        let year = date.getFullYear()
		let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
		let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
		let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
		let minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
		let second = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
        if (noyear) {
            return `${month}-${day} ${hour}:${minute}:${second}`
        } else {
		    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
        }
    }

    public static isPhoneNumber(phone: string){
        if (!phone || phone.length != 11) {
            return false;
        }
        //通过正则表达式判断手机号码格式是否正确,根据电信，联通、移动手机号码规则可以到以下正则
        // 手机号码第一位是[1]开头，第二位[3,4,5,7,8]中的一位，第三位到第十一位则是[0-9]中的数字；
        //^1表示开头为1
        //[3|4|5|7|8] 表示3、4、5、7、8中的一位数值
        //[0-9]{9} 匹配包含0-9的数字
        let reg = /^1[3|4|5|6|7|8|9][0-9]{9}/;
        if(reg.test(phone)){
            return true;    //手机号码正确
        }

        return false;
    }

    public static isEmail(email: string) {
        var reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
        return reg.test(email);
    }

    public static isNumber(str: string) {
        return /^\d+$/.test(str);
    }
}
