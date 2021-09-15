package org.cocos2dx.javascript;

import android.content.Context;
import android.media.MediaDrm;
import android.os.Build;
import android.util.Base64;

import java.util.UUID;

public class AndroidDevice {

    private static String uuid = "";

    private static boolean batteryIsReturn = false;
    private static int batteryNow = 0;
    private static int batteryInCharge = 0;

    private static Context _getContext() {
        return SDKWrapper.getInstance().getContext();
    }

    public static String getUUID() {
        if (uuid != "") return uuid;

        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.JELLY_BEAN_MR2) {
            return "";
        }

        UUID wideVineUuid = new UUID(-0x121074568629b532L, -0x5c37d8232ae2de13L);
        MediaDrm wvDrm = null;
        try {
            wvDrm = new MediaDrm(wideVineUuid);
            byte[] wideVineId = wvDrm.getPropertyByteArray(MediaDrm.PROPERTY_DEVICE_UNIQUE_ID);
            uuid = Base64.encodeToString(wideVineId, Base64.NO_WRAP);
            //optional encoding to convert the array in string.
            return uuid;

        } catch (Exception e) {
            e.printStackTrace();
            return "";

        } finally {
            if (wvDrm != null) {
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
                    wvDrm.close();
                } else {
                    wvDrm.release();
                }
            }
        }
    }

    public static String getDeviceName() {
        return Build.BRAND + " " + android.os.Build.MODEL;
    }

    // 检测网络强度
    public static int getNetworkStrength() {
        // TODO 不同的机型有不同的问题 WIFI的比较稳定 暂时不获取了
        return 0;
    }

}
