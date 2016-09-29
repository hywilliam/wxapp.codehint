/**
 * @description wxApp API 用于项目外部扩展, 避免jsHint报错。不用wx自带编辑器
 * @tutorial https://mp.weixin.qq.com/debug/wxadoc/dev/?t=1474974359001
 * @author weiyh
 * @since 20160927
 */
(function () {

    var root = this;

    var App = function () {
        return new this();
    };

    App.prototype.getCurrentPage = function () {
        return this;
    };

    var getApp = function () {
        return this;
    };

    /**
     * @param {object} options
     * @constructor
     */
    var Page = function (options) {
        return this.getCurrentPage();
    };

    Page.prototype.setData = function (obj) {
        return this.data = obj;
    };

    // API
    var Network = {

        /**
         * @param {object} obj
         * @param {string} obj.url
         * @param {object|string} [obj.data]
         * @param {object} [obj.header]
         * @param {string} [obj.method]
         * @param {function} [obj.success]
         * @param {function} [obj.fail]
         * @param {function} [obj.complete]
         */
        request: function (obj) {

        },

        /**
         * @param {object} obj
         * @param {string} obj.url
         * @param {string} obj.name
         * @param {string} obj.filePath
         */
        uploadFile: function (obj) {

        },

        downloadFile: function () {

        },

        connectSocket: function () {

        },

        onSocketOpen: function () {

        },

        onSocketError: function () {

        },

        sendSocketMessage: function () {

        },

        onSocketMessage: function () {

        },

        closeSocket: function () {

        },

        onSocketClose: function () {

        }
    };

    var Media = {
        chooseImage: function () {

        },

        previewImage: function () {

        },

        startRecord: function () {

        },

        stopRecord: function () {

        },

        playVoice: function () {

        },

        pauseVoice: function () {

        },

        stopVoice: function () {

        },

        getBackgroundAudioPlayerState: function () {

        },

        playBackgroundAudio: function () {

        },

        pauseBackgroundAudio: function () {

        },

        seekBackgroundAudio: function () {

        },

        stopBackgroundAudio: function () {

        },

        onBackgroundAudioPlay: function () {

        },

        onBackgroundAudioPause: function () {

        },

        onBackgroundAudioStop: function () {

        },

        chooseVideo: function () {

        },

        saveFile: function () {

        }
    };

    var Data = {
        getStorage: function () {

        },

        getStorageSync: function () {

        },

        setStorage: function () {

        },

        setStorageSync: function () {

        },

        clearStorage: function () {

        },

        clearStorageSync: function () {

        }
    };

    var Position = {
        getLocation: function () {

        },

        openLocation: function () {

        }
    };

    var Device = {
        getNetworkType: function () {

        },

        getSystemInfo: function () {

        },

        onAccelerometerChange: function () {

        },

        onCompassChange: function () {

        }
    };

    var View = {
        setNavigationBarTitle: function () {

        },

        showNavigationBarLoading: function () {

        },

        hideNavigationBarLoading: function () {

        },

        navigateTo: function () {

        },

        redirectTo: function () {

        },

        navigateBack: function () {

        },

        createAnimation: function () {

        },

        createContext: function () {

        },

        drawCanvas: function () {

        },

        hideKeyboard: function () {

        },

        stopPullDownRefresh: function () {

        }
    };

    var Open = {
        login: function () {

        },

        getUserInfo: function () {

        },

        requestPayment: function () {

        }
    };

    function extend(destination) {
        var length = arguments.length;
        if (length < 2 || destination == null) return destination;
        for (var index = 1; index < length; index++) {
            var source = arguments[index],
                keys = Object.keys(source),
                l = keys.length;
            for (var i = 0; i < l; i++) {
                var key = keys[i];
                if (destination[key] === void 0) destination[key] = source[key];
            }
        }
        return destination;
    }

    var wx = extend({},
        Network,
        Media,
        Data,
        Position,
        Device,
        View,
        Open);

    root.App = App;
    root.getApp = getApp;
    root.Page = Page;
    root.wx = wx;

}).call(this);
