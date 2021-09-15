
// 音效管理器

import AssetManager from "./AssetManager"
export default class AudioManager {
    private static instance: AudioManager = null;

    private bgmVolume: number = 1.0;
    private effectVolume: number = 1.0;

    private bgmAudioID: number = -1;
    private bgmHallAudioID: number = -1;
    private btnClickAudioClip: cc.AudioClip = null;
    private hallAudioClip: cc.AudioClip = null;

    public static getInstance() : AudioManager {
        if (this.instance === null) {
            this.instance = new AudioManager();
        }
        return this.instance;
    }

    private constructor() {

    }

    public init() {
        let t = cc.sys.localStorage.getItem("bgmVolume");
        if(t != null) {
            this.bgmVolume = parseFloat(t);
        }

        t = cc.sys.localStorage.getItem("effectVolume");
        if(t != null) {
            this.effectVolume = parseFloat(t);
        }

        cc.game.on(cc.game.EVENT_HIDE, function () {
            cc.audioEngine.pauseAll();
        });
        cc.game.on(cc.game.EVENT_SHOW, function () {
            cc.audioEngine.resumeAll();
        });
    }

    public playMusicClip(audioClip: cc.AudioClip, loop: boolean) {
        if (this.bgmAudioID >= 0) {
            cc.audioEngine.stop(this.bgmAudioID);
        }
        this.bgmAudioID = cc.audioEngine.play(audioClip, loop, this.bgmVolume);
    }

    public playMusic(bundle: string | cc.AssetManager.Bundle, path: string, loop: boolean) {
        if (this.bgmAudioID >= 0) {
            cc.audioEngine.stop(this.bgmAudioID);
        }
        let self = this;
        AssetManager.getInstance().load(bundle, path, cc.AudioClip, null, (err: Error, clip: cc.AudioClip) => {
            self.bgmAudioID = cc.audioEngine.play(clip, loop, self.bgmVolume);
        });
    }

    public playEffectClip(audioClip: cc.AudioClip) {
        if (this.effectVolume > 0) {
            cc.audioEngine.play(audioClip, false, this.effectVolume);
        }
    }

    public playEffect(bundle: string | cc.AssetManager.Bundle, path: string) {
        if (this.effectVolume > 0) {
            let self = this;
            AssetManager.getInstance().load(bundle, path, cc.AudioClip, null, (err: Error, clip: cc.AudioClip) => {
                cc.audioEngine.play(clip, false, self.effectVolume);
            });
        }
    }

    public playBtnClick() {
        if (this.btnClickAudioClip) {
            this.playEffectClip(this.btnClickAudioClip);
        } else {
            let self = this;
            AssetManager.getInstance().load('common', 'audios/button_click', cc.AudioClip, null, function (err, clip: cc.AudioClip) {
                if (err) {
                    cc.error(err.message || err);
                    return;
                }
                self.btnClickAudioClip = clip;
                self.playEffectClip(self.btnClickAudioClip);
            });
        }
    }

    public playHallMusic() {
        if (this.hallAudioClip) {
            this.playMusicClip(this.hallAudioClip, true);
        } else {
            let self = this;
            AssetManager.getInstance().load('hall', 'audios/dating_bgm', cc.AudioClip, null, function (err, clip: cc.AudioClip) {
                if (err) {
                    cc.error(err.message || err);
                    return;
                }
                self.hallAudioClip = clip;
                self.playMusicClip(self.hallAudioClip, true);
            });
        }
    }

    public setEffectVolume(v: number) {
        if (this.effectVolume !== v){
            cc.sys.localStorage.setItem("effectVolume", v);
            this.effectVolume = v;
        }
    }

    public setMusicVolume(v: number, force: boolean = true) {
        if (this.bgmAudioID >= 0) {
            if (v > 0) {
                cc.audioEngine.resume(this.bgmAudioID);
            }
            else {
                cc.audioEngine.pause(this.bgmAudioID);
            }
        }
        if (this.bgmVolume != v || force) {
            cc.sys.localStorage.setItem("bgmVolume", v);
            this.bgmVolume = v;
            if (this.bgmAudioID >= 0) {
                cc.audioEngine.setVolume(this.bgmAudioID, v);
            }
        }
    }

    public pauseAll() {
        cc.audioEngine.pauseAll();
    }
    
    public resumeAll() {
        cc.audioEngine.resumeAll();
    }

    public stopAll() {
        cc.audioEngine.stopAll();
        this.bgmAudioID = -1;
    }
}
