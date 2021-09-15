/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.lhd = (function() {

    /**
     * Namespace lhd.
     * @exports lhd
     * @namespace
     */
    var lhd = {};

    lhd.notify_gs_free = (function() {

        /**
         * Properties of a notify_gs_free.
         * @memberof lhd
         * @interface Inotify_gs_free
         * @property {string} dealid notify_gs_free dealid
         * @property {number} time_leave notify_gs_free time_leave
         * @property {boolean} enable_sys_banker notify_gs_free enable_sys_banker
         * @property {number|Long} banker_condition notify_gs_free banker_condition
         * @property {number|Long} downbanker_condition notify_gs_free downbanker_condition
         * @property {number|Long} user_bet_limit notify_gs_free user_bet_limit
         * @property {number|Long} area_bet_limit notify_gs_free area_bet_limit
         * @property {number|Long} bet_condition notify_gs_free bet_condition
         * @property {number} current_banker notify_gs_free current_banker
         * @property {number|Long} banker_reserve_score notify_gs_free banker_reserve_score
         * @property {number} banker_count notify_gs_free banker_count
         */

        /**
         * Constructs a new notify_gs_free.
         * @memberof lhd
         * @classdesc Represents a notify_gs_free.
         * @implements Inotify_gs_free
         * @constructor
         * @param {lhd.Inotify_gs_free=} [properties] Properties to set
         */
        function notify_gs_free(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_gs_free dealid.
         * @member {string} dealid
         * @memberof lhd.notify_gs_free
         * @instance
         */
        notify_gs_free.prototype.dealid = "";

        /**
         * notify_gs_free time_leave.
         * @member {number} time_leave
         * @memberof lhd.notify_gs_free
         * @instance
         */
        notify_gs_free.prototype.time_leave = 0;

        /**
         * notify_gs_free enable_sys_banker.
         * @member {boolean} enable_sys_banker
         * @memberof lhd.notify_gs_free
         * @instance
         */
        notify_gs_free.prototype.enable_sys_banker = false;

        /**
         * notify_gs_free banker_condition.
         * @member {number|Long} banker_condition
         * @memberof lhd.notify_gs_free
         * @instance
         */
        notify_gs_free.prototype.banker_condition = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_gs_free downbanker_condition.
         * @member {number|Long} downbanker_condition
         * @memberof lhd.notify_gs_free
         * @instance
         */
        notify_gs_free.prototype.downbanker_condition = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_gs_free user_bet_limit.
         * @member {number|Long} user_bet_limit
         * @memberof lhd.notify_gs_free
         * @instance
         */
        notify_gs_free.prototype.user_bet_limit = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_gs_free area_bet_limit.
         * @member {number|Long} area_bet_limit
         * @memberof lhd.notify_gs_free
         * @instance
         */
        notify_gs_free.prototype.area_bet_limit = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_gs_free bet_condition.
         * @member {number|Long} bet_condition
         * @memberof lhd.notify_gs_free
         * @instance
         */
        notify_gs_free.prototype.bet_condition = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_gs_free current_banker.
         * @member {number} current_banker
         * @memberof lhd.notify_gs_free
         * @instance
         */
        notify_gs_free.prototype.current_banker = 0;

        /**
         * notify_gs_free banker_reserve_score.
         * @member {number|Long} banker_reserve_score
         * @memberof lhd.notify_gs_free
         * @instance
         */
        notify_gs_free.prototype.banker_reserve_score = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_gs_free banker_count.
         * @member {number} banker_count
         * @memberof lhd.notify_gs_free
         * @instance
         */
        notify_gs_free.prototype.banker_count = 0;

        /**
         * Creates a new notify_gs_free instance using the specified properties.
         * @function create
         * @memberof lhd.notify_gs_free
         * @static
         * @param {lhd.Inotify_gs_free=} [properties] Properties to set
         * @returns {lhd.notify_gs_free} notify_gs_free instance
         */
        notify_gs_free.create = function create(properties) {
            return new notify_gs_free(properties);
        };

        /**
         * Encodes the specified notify_gs_free message. Does not implicitly {@link lhd.notify_gs_free.verify|verify} messages.
         * @function encode
         * @memberof lhd.notify_gs_free
         * @static
         * @param {lhd.Inotify_gs_free} message notify_gs_free message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_gs_free.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.dealid);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.time_leave);
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.enable_sys_banker);
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.banker_condition);
            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.downbanker_condition);
            writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.user_bet_limit);
            writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.area_bet_limit);
            writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.bet_condition);
            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.current_banker);
            writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.banker_reserve_score);
            writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.banker_count);
            return writer;
        };

        /**
         * Encodes the specified notify_gs_free message, length delimited. Does not implicitly {@link lhd.notify_gs_free.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lhd.notify_gs_free
         * @static
         * @param {lhd.Inotify_gs_free} message notify_gs_free message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_gs_free.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_gs_free message from the specified reader or buffer.
         * @function decode
         * @memberof lhd.notify_gs_free
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lhd.notify_gs_free} notify_gs_free
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_gs_free.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lhd.notify_gs_free();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.dealid = reader.string();
                    break;
                case 2:
                    message.time_leave = reader.int32();
                    break;
                case 3:
                    message.enable_sys_banker = reader.bool();
                    break;
                case 4:
                    message.banker_condition = reader.uint64();
                    break;
                case 5:
                    message.downbanker_condition = reader.uint64();
                    break;
                case 6:
                    message.user_bet_limit = reader.uint64();
                    break;
                case 7:
                    message.area_bet_limit = reader.uint64();
                    break;
                case 8:
                    message.bet_condition = reader.uint64();
                    break;
                case 9:
                    message.current_banker = reader.uint32();
                    break;
                case 10:
                    message.banker_reserve_score = reader.uint64();
                    break;
                case 11:
                    message.banker_count = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("dealid"))
                throw $util.ProtocolError("missing required 'dealid'", { instance: message });
            if (!message.hasOwnProperty("time_leave"))
                throw $util.ProtocolError("missing required 'time_leave'", { instance: message });
            if (!message.hasOwnProperty("enable_sys_banker"))
                throw $util.ProtocolError("missing required 'enable_sys_banker'", { instance: message });
            if (!message.hasOwnProperty("banker_condition"))
                throw $util.ProtocolError("missing required 'banker_condition'", { instance: message });
            if (!message.hasOwnProperty("downbanker_condition"))
                throw $util.ProtocolError("missing required 'downbanker_condition'", { instance: message });
            if (!message.hasOwnProperty("user_bet_limit"))
                throw $util.ProtocolError("missing required 'user_bet_limit'", { instance: message });
            if (!message.hasOwnProperty("area_bet_limit"))
                throw $util.ProtocolError("missing required 'area_bet_limit'", { instance: message });
            if (!message.hasOwnProperty("bet_condition"))
                throw $util.ProtocolError("missing required 'bet_condition'", { instance: message });
            if (!message.hasOwnProperty("current_banker"))
                throw $util.ProtocolError("missing required 'current_banker'", { instance: message });
            if (!message.hasOwnProperty("banker_reserve_score"))
                throw $util.ProtocolError("missing required 'banker_reserve_score'", { instance: message });
            if (!message.hasOwnProperty("banker_count"))
                throw $util.ProtocolError("missing required 'banker_count'", { instance: message });
            return message;
        };

        /**
         * Decodes a notify_gs_free message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lhd.notify_gs_free
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lhd.notify_gs_free} notify_gs_free
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_gs_free.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a notify_gs_free message.
         * @function verify
         * @memberof lhd.notify_gs_free
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_gs_free.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.dealid))
                return "dealid: string expected";
            if (!$util.isInteger(message.time_leave))
                return "time_leave: integer expected";
            if (typeof message.enable_sys_banker !== "boolean")
                return "enable_sys_banker: boolean expected";
            if (!$util.isInteger(message.banker_condition) && !(message.banker_condition && $util.isInteger(message.banker_condition.low) && $util.isInteger(message.banker_condition.high)))
                return "banker_condition: integer|Long expected";
            if (!$util.isInteger(message.downbanker_condition) && !(message.downbanker_condition && $util.isInteger(message.downbanker_condition.low) && $util.isInteger(message.downbanker_condition.high)))
                return "downbanker_condition: integer|Long expected";
            if (!$util.isInteger(message.user_bet_limit) && !(message.user_bet_limit && $util.isInteger(message.user_bet_limit.low) && $util.isInteger(message.user_bet_limit.high)))
                return "user_bet_limit: integer|Long expected";
            if (!$util.isInteger(message.area_bet_limit) && !(message.area_bet_limit && $util.isInteger(message.area_bet_limit.low) && $util.isInteger(message.area_bet_limit.high)))
                return "area_bet_limit: integer|Long expected";
            if (!$util.isInteger(message.bet_condition) && !(message.bet_condition && $util.isInteger(message.bet_condition.low) && $util.isInteger(message.bet_condition.high)))
                return "bet_condition: integer|Long expected";
            if (!$util.isInteger(message.current_banker))
                return "current_banker: integer expected";
            if (!$util.isInteger(message.banker_reserve_score) && !(message.banker_reserve_score && $util.isInteger(message.banker_reserve_score.low) && $util.isInteger(message.banker_reserve_score.high)))
                return "banker_reserve_score: integer|Long expected";
            if (!$util.isInteger(message.banker_count))
                return "banker_count: integer expected";
            return null;
        };

        /**
         * Creates a notify_gs_free message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lhd.notify_gs_free
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lhd.notify_gs_free} notify_gs_free
         */
        notify_gs_free.fromObject = function fromObject(object) {
            if (object instanceof $root.lhd.notify_gs_free)
                return object;
            var message = new $root.lhd.notify_gs_free();
            if (object.dealid != null)
                message.dealid = String(object.dealid);
            if (object.time_leave != null)
                message.time_leave = object.time_leave | 0;
            if (object.enable_sys_banker != null)
                message.enable_sys_banker = Boolean(object.enable_sys_banker);
            if (object.banker_condition != null)
                if ($util.Long)
                    (message.banker_condition = $util.Long.fromValue(object.banker_condition)).unsigned = true;
                else if (typeof object.banker_condition === "string")
                    message.banker_condition = parseInt(object.banker_condition, 10);
                else if (typeof object.banker_condition === "number")
                    message.banker_condition = object.banker_condition;
                else if (typeof object.banker_condition === "object")
                    message.banker_condition = new $util.LongBits(object.banker_condition.low >>> 0, object.banker_condition.high >>> 0).toNumber(true);
            if (object.downbanker_condition != null)
                if ($util.Long)
                    (message.downbanker_condition = $util.Long.fromValue(object.downbanker_condition)).unsigned = true;
                else if (typeof object.downbanker_condition === "string")
                    message.downbanker_condition = parseInt(object.downbanker_condition, 10);
                else if (typeof object.downbanker_condition === "number")
                    message.downbanker_condition = object.downbanker_condition;
                else if (typeof object.downbanker_condition === "object")
                    message.downbanker_condition = new $util.LongBits(object.downbanker_condition.low >>> 0, object.downbanker_condition.high >>> 0).toNumber(true);
            if (object.user_bet_limit != null)
                if ($util.Long)
                    (message.user_bet_limit = $util.Long.fromValue(object.user_bet_limit)).unsigned = true;
                else if (typeof object.user_bet_limit === "string")
                    message.user_bet_limit = parseInt(object.user_bet_limit, 10);
                else if (typeof object.user_bet_limit === "number")
                    message.user_bet_limit = object.user_bet_limit;
                else if (typeof object.user_bet_limit === "object")
                    message.user_bet_limit = new $util.LongBits(object.user_bet_limit.low >>> 0, object.user_bet_limit.high >>> 0).toNumber(true);
            if (object.area_bet_limit != null)
                if ($util.Long)
                    (message.area_bet_limit = $util.Long.fromValue(object.area_bet_limit)).unsigned = true;
                else if (typeof object.area_bet_limit === "string")
                    message.area_bet_limit = parseInt(object.area_bet_limit, 10);
                else if (typeof object.area_bet_limit === "number")
                    message.area_bet_limit = object.area_bet_limit;
                else if (typeof object.area_bet_limit === "object")
                    message.area_bet_limit = new $util.LongBits(object.area_bet_limit.low >>> 0, object.area_bet_limit.high >>> 0).toNumber(true);
            if (object.bet_condition != null)
                if ($util.Long)
                    (message.bet_condition = $util.Long.fromValue(object.bet_condition)).unsigned = true;
                else if (typeof object.bet_condition === "string")
                    message.bet_condition = parseInt(object.bet_condition, 10);
                else if (typeof object.bet_condition === "number")
                    message.bet_condition = object.bet_condition;
                else if (typeof object.bet_condition === "object")
                    message.bet_condition = new $util.LongBits(object.bet_condition.low >>> 0, object.bet_condition.high >>> 0).toNumber(true);
            if (object.current_banker != null)
                message.current_banker = object.current_banker >>> 0;
            if (object.banker_reserve_score != null)
                if ($util.Long)
                    (message.banker_reserve_score = $util.Long.fromValue(object.banker_reserve_score)).unsigned = true;
                else if (typeof object.banker_reserve_score === "string")
                    message.banker_reserve_score = parseInt(object.banker_reserve_score, 10);
                else if (typeof object.banker_reserve_score === "number")
                    message.banker_reserve_score = object.banker_reserve_score;
                else if (typeof object.banker_reserve_score === "object")
                    message.banker_reserve_score = new $util.LongBits(object.banker_reserve_score.low >>> 0, object.banker_reserve_score.high >>> 0).toNumber(true);
            if (object.banker_count != null)
                message.banker_count = object.banker_count >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a notify_gs_free message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lhd.notify_gs_free
         * @static
         * @param {lhd.notify_gs_free} message notify_gs_free
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_gs_free.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.dealid = "";
                object.time_leave = 0;
                object.enable_sys_banker = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.banker_condition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.banker_condition = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.downbanker_condition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.downbanker_condition = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.user_bet_limit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.user_bet_limit = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.area_bet_limit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.area_bet_limit = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bet_condition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bet_condition = options.longs === String ? "0" : 0;
                object.current_banker = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.banker_reserve_score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.banker_reserve_score = options.longs === String ? "0" : 0;
                object.banker_count = 0;
            }
            if (message.dealid != null && message.hasOwnProperty("dealid"))
                object.dealid = message.dealid;
            if (message.time_leave != null && message.hasOwnProperty("time_leave"))
                object.time_leave = message.time_leave;
            if (message.enable_sys_banker != null && message.hasOwnProperty("enable_sys_banker"))
                object.enable_sys_banker = message.enable_sys_banker;
            if (message.banker_condition != null && message.hasOwnProperty("banker_condition"))
                if (typeof message.banker_condition === "number")
                    object.banker_condition = options.longs === String ? String(message.banker_condition) : message.banker_condition;
                else
                    object.banker_condition = options.longs === String ? $util.Long.prototype.toString.call(message.banker_condition) : options.longs === Number ? new $util.LongBits(message.banker_condition.low >>> 0, message.banker_condition.high >>> 0).toNumber(true) : message.banker_condition;
            if (message.downbanker_condition != null && message.hasOwnProperty("downbanker_condition"))
                if (typeof message.downbanker_condition === "number")
                    object.downbanker_condition = options.longs === String ? String(message.downbanker_condition) : message.downbanker_condition;
                else
                    object.downbanker_condition = options.longs === String ? $util.Long.prototype.toString.call(message.downbanker_condition) : options.longs === Number ? new $util.LongBits(message.downbanker_condition.low >>> 0, message.downbanker_condition.high >>> 0).toNumber(true) : message.downbanker_condition;
            if (message.user_bet_limit != null && message.hasOwnProperty("user_bet_limit"))
                if (typeof message.user_bet_limit === "number")
                    object.user_bet_limit = options.longs === String ? String(message.user_bet_limit) : message.user_bet_limit;
                else
                    object.user_bet_limit = options.longs === String ? $util.Long.prototype.toString.call(message.user_bet_limit) : options.longs === Number ? new $util.LongBits(message.user_bet_limit.low >>> 0, message.user_bet_limit.high >>> 0).toNumber(true) : message.user_bet_limit;
            if (message.area_bet_limit != null && message.hasOwnProperty("area_bet_limit"))
                if (typeof message.area_bet_limit === "number")
                    object.area_bet_limit = options.longs === String ? String(message.area_bet_limit) : message.area_bet_limit;
                else
                    object.area_bet_limit = options.longs === String ? $util.Long.prototype.toString.call(message.area_bet_limit) : options.longs === Number ? new $util.LongBits(message.area_bet_limit.low >>> 0, message.area_bet_limit.high >>> 0).toNumber(true) : message.area_bet_limit;
            if (message.bet_condition != null && message.hasOwnProperty("bet_condition"))
                if (typeof message.bet_condition === "number")
                    object.bet_condition = options.longs === String ? String(message.bet_condition) : message.bet_condition;
                else
                    object.bet_condition = options.longs === String ? $util.Long.prototype.toString.call(message.bet_condition) : options.longs === Number ? new $util.LongBits(message.bet_condition.low >>> 0, message.bet_condition.high >>> 0).toNumber(true) : message.bet_condition;
            if (message.current_banker != null && message.hasOwnProperty("current_banker"))
                object.current_banker = message.current_banker;
            if (message.banker_reserve_score != null && message.hasOwnProperty("banker_reserve_score"))
                if (typeof message.banker_reserve_score === "number")
                    object.banker_reserve_score = options.longs === String ? String(message.banker_reserve_score) : message.banker_reserve_score;
                else
                    object.banker_reserve_score = options.longs === String ? $util.Long.prototype.toString.call(message.banker_reserve_score) : options.longs === Number ? new $util.LongBits(message.banker_reserve_score.low >>> 0, message.banker_reserve_score.high >>> 0).toNumber(true) : message.banker_reserve_score;
            if (message.banker_count != null && message.hasOwnProperty("banker_count"))
                object.banker_count = message.banker_count;
            return object;
        };

        /**
         * Converts this notify_gs_free to JSON.
         * @function toJSON
         * @memberof lhd.notify_gs_free
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_gs_free.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_gs_free;
    })();

    lhd.notify_gs_bet = (function() {

        /**
         * Properties of a notify_gs_bet.
         * @memberof lhd
         * @interface Inotify_gs_bet
         * @property {string} dealid notify_gs_bet dealid
         * @property {number} time_leave notify_gs_bet time_leave
         * @property {boolean} enable_sys_banker notify_gs_bet enable_sys_banker
         * @property {number|Long} banker_condition notify_gs_bet banker_condition
         * @property {number|Long} downbanker_condition notify_gs_bet downbanker_condition
         * @property {number|Long} user_bet_limit notify_gs_bet user_bet_limit
         * @property {number|Long} area_bet_limit notify_gs_bet area_bet_limit
         * @property {number|Long} bet_condition notify_gs_bet bet_condition
         * @property {number} current_banker notify_gs_bet current_banker
         * @property {number|Long} banker_reserve_score notify_gs_bet banker_reserve_score
         * @property {number} banker_count notify_gs_bet banker_count
         * @property {Array.<number|Long>|null} [all_bet_score] notify_gs_bet all_bet_score
         * @property {Array.<number|Long>|null} [me_bet_score] notify_gs_bet me_bet_score
         */

        /**
         * Constructs a new notify_gs_bet.
         * @memberof lhd
         * @classdesc Represents a notify_gs_bet.
         * @implements Inotify_gs_bet
         * @constructor
         * @param {lhd.Inotify_gs_bet=} [properties] Properties to set
         */
        function notify_gs_bet(properties) {
            this.all_bet_score = [];
            this.me_bet_score = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_gs_bet dealid.
         * @member {string} dealid
         * @memberof lhd.notify_gs_bet
         * @instance
         */
        notify_gs_bet.prototype.dealid = "";

        /**
         * notify_gs_bet time_leave.
         * @member {number} time_leave
         * @memberof lhd.notify_gs_bet
         * @instance
         */
        notify_gs_bet.prototype.time_leave = 0;

        /**
         * notify_gs_bet enable_sys_banker.
         * @member {boolean} enable_sys_banker
         * @memberof lhd.notify_gs_bet
         * @instance
         */
        notify_gs_bet.prototype.enable_sys_banker = false;

        /**
         * notify_gs_bet banker_condition.
         * @member {number|Long} banker_condition
         * @memberof lhd.notify_gs_bet
         * @instance
         */
        notify_gs_bet.prototype.banker_condition = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_gs_bet downbanker_condition.
         * @member {number|Long} downbanker_condition
         * @memberof lhd.notify_gs_bet
         * @instance
         */
        notify_gs_bet.prototype.downbanker_condition = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_gs_bet user_bet_limit.
         * @member {number|Long} user_bet_limit
         * @memberof lhd.notify_gs_bet
         * @instance
         */
        notify_gs_bet.prototype.user_bet_limit = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_gs_bet area_bet_limit.
         * @member {number|Long} area_bet_limit
         * @memberof lhd.notify_gs_bet
         * @instance
         */
        notify_gs_bet.prototype.area_bet_limit = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_gs_bet bet_condition.
         * @member {number|Long} bet_condition
         * @memberof lhd.notify_gs_bet
         * @instance
         */
        notify_gs_bet.prototype.bet_condition = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_gs_bet current_banker.
         * @member {number} current_banker
         * @memberof lhd.notify_gs_bet
         * @instance
         */
        notify_gs_bet.prototype.current_banker = 0;

        /**
         * notify_gs_bet banker_reserve_score.
         * @member {number|Long} banker_reserve_score
         * @memberof lhd.notify_gs_bet
         * @instance
         */
        notify_gs_bet.prototype.banker_reserve_score = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_gs_bet banker_count.
         * @member {number} banker_count
         * @memberof lhd.notify_gs_bet
         * @instance
         */
        notify_gs_bet.prototype.banker_count = 0;

        /**
         * notify_gs_bet all_bet_score.
         * @member {Array.<number|Long>} all_bet_score
         * @memberof lhd.notify_gs_bet
         * @instance
         */
        notify_gs_bet.prototype.all_bet_score = $util.emptyArray;

        /**
         * notify_gs_bet me_bet_score.
         * @member {Array.<number|Long>} me_bet_score
         * @memberof lhd.notify_gs_bet
         * @instance
         */
        notify_gs_bet.prototype.me_bet_score = $util.emptyArray;

        /**
         * Creates a new notify_gs_bet instance using the specified properties.
         * @function create
         * @memberof lhd.notify_gs_bet
         * @static
         * @param {lhd.Inotify_gs_bet=} [properties] Properties to set
         * @returns {lhd.notify_gs_bet} notify_gs_bet instance
         */
        notify_gs_bet.create = function create(properties) {
            return new notify_gs_bet(properties);
        };

        /**
         * Encodes the specified notify_gs_bet message. Does not implicitly {@link lhd.notify_gs_bet.verify|verify} messages.
         * @function encode
         * @memberof lhd.notify_gs_bet
         * @static
         * @param {lhd.Inotify_gs_bet} message notify_gs_bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_gs_bet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.dealid);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.time_leave);
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.enable_sys_banker);
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.banker_condition);
            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.downbanker_condition);
            writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.user_bet_limit);
            writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.area_bet_limit);
            writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.bet_condition);
            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.current_banker);
            writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.banker_reserve_score);
            writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.banker_count);
            if (message.all_bet_score != null && message.all_bet_score.length)
                for (var i = 0; i < message.all_bet_score.length; ++i)
                    writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.all_bet_score[i]);
            if (message.me_bet_score != null && message.me_bet_score.length)
                for (var i = 0; i < message.me_bet_score.length; ++i)
                    writer.uint32(/* id 13, wireType 0 =*/104).uint64(message.me_bet_score[i]);
            return writer;
        };

        /**
         * Encodes the specified notify_gs_bet message, length delimited. Does not implicitly {@link lhd.notify_gs_bet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lhd.notify_gs_bet
         * @static
         * @param {lhd.Inotify_gs_bet} message notify_gs_bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_gs_bet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_gs_bet message from the specified reader or buffer.
         * @function decode
         * @memberof lhd.notify_gs_bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lhd.notify_gs_bet} notify_gs_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_gs_bet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lhd.notify_gs_bet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.dealid = reader.string();
                    break;
                case 2:
                    message.time_leave = reader.uint32();
                    break;
                case 3:
                    message.enable_sys_banker = reader.bool();
                    break;
                case 4:
                    message.banker_condition = reader.uint64();
                    break;
                case 5:
                    message.downbanker_condition = reader.uint64();
                    break;
                case 6:
                    message.user_bet_limit = reader.uint64();
                    break;
                case 7:
                    message.area_bet_limit = reader.uint64();
                    break;
                case 8:
                    message.bet_condition = reader.uint64();
                    break;
                case 9:
                    message.current_banker = reader.uint32();
                    break;
                case 10:
                    message.banker_reserve_score = reader.uint64();
                    break;
                case 11:
                    message.banker_count = reader.uint32();
                    break;
                case 12:
                    if (!(message.all_bet_score && message.all_bet_score.length))
                        message.all_bet_score = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.all_bet_score.push(reader.uint64());
                    } else
                        message.all_bet_score.push(reader.uint64());
                    break;
                case 13:
                    if (!(message.me_bet_score && message.me_bet_score.length))
                        message.me_bet_score = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.me_bet_score.push(reader.uint64());
                    } else
                        message.me_bet_score.push(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("dealid"))
                throw $util.ProtocolError("missing required 'dealid'", { instance: message });
            if (!message.hasOwnProperty("time_leave"))
                throw $util.ProtocolError("missing required 'time_leave'", { instance: message });
            if (!message.hasOwnProperty("enable_sys_banker"))
                throw $util.ProtocolError("missing required 'enable_sys_banker'", { instance: message });
            if (!message.hasOwnProperty("banker_condition"))
                throw $util.ProtocolError("missing required 'banker_condition'", { instance: message });
            if (!message.hasOwnProperty("downbanker_condition"))
                throw $util.ProtocolError("missing required 'downbanker_condition'", { instance: message });
            if (!message.hasOwnProperty("user_bet_limit"))
                throw $util.ProtocolError("missing required 'user_bet_limit'", { instance: message });
            if (!message.hasOwnProperty("area_bet_limit"))
                throw $util.ProtocolError("missing required 'area_bet_limit'", { instance: message });
            if (!message.hasOwnProperty("bet_condition"))
                throw $util.ProtocolError("missing required 'bet_condition'", { instance: message });
            if (!message.hasOwnProperty("current_banker"))
                throw $util.ProtocolError("missing required 'current_banker'", { instance: message });
            if (!message.hasOwnProperty("banker_reserve_score"))
                throw $util.ProtocolError("missing required 'banker_reserve_score'", { instance: message });
            if (!message.hasOwnProperty("banker_count"))
                throw $util.ProtocolError("missing required 'banker_count'", { instance: message });
            return message;
        };

        /**
         * Decodes a notify_gs_bet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lhd.notify_gs_bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lhd.notify_gs_bet} notify_gs_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_gs_bet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a notify_gs_bet message.
         * @function verify
         * @memberof lhd.notify_gs_bet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_gs_bet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.dealid))
                return "dealid: string expected";
            if (!$util.isInteger(message.time_leave))
                return "time_leave: integer expected";
            if (typeof message.enable_sys_banker !== "boolean")
                return "enable_sys_banker: boolean expected";
            if (!$util.isInteger(message.banker_condition) && !(message.banker_condition && $util.isInteger(message.banker_condition.low) && $util.isInteger(message.banker_condition.high)))
                return "banker_condition: integer|Long expected";
            if (!$util.isInteger(message.downbanker_condition) && !(message.downbanker_condition && $util.isInteger(message.downbanker_condition.low) && $util.isInteger(message.downbanker_condition.high)))
                return "downbanker_condition: integer|Long expected";
            if (!$util.isInteger(message.user_bet_limit) && !(message.user_bet_limit && $util.isInteger(message.user_bet_limit.low) && $util.isInteger(message.user_bet_limit.high)))
                return "user_bet_limit: integer|Long expected";
            if (!$util.isInteger(message.area_bet_limit) && !(message.area_bet_limit && $util.isInteger(message.area_bet_limit.low) && $util.isInteger(message.area_bet_limit.high)))
                return "area_bet_limit: integer|Long expected";
            if (!$util.isInteger(message.bet_condition) && !(message.bet_condition && $util.isInteger(message.bet_condition.low) && $util.isInteger(message.bet_condition.high)))
                return "bet_condition: integer|Long expected";
            if (!$util.isInteger(message.current_banker))
                return "current_banker: integer expected";
            if (!$util.isInteger(message.banker_reserve_score) && !(message.banker_reserve_score && $util.isInteger(message.banker_reserve_score.low) && $util.isInteger(message.banker_reserve_score.high)))
                return "banker_reserve_score: integer|Long expected";
            if (!$util.isInteger(message.banker_count))
                return "banker_count: integer expected";
            if (message.all_bet_score != null && message.hasOwnProperty("all_bet_score")) {
                if (!Array.isArray(message.all_bet_score))
                    return "all_bet_score: array expected";
                for (var i = 0; i < message.all_bet_score.length; ++i)
                    if (!$util.isInteger(message.all_bet_score[i]) && !(message.all_bet_score[i] && $util.isInteger(message.all_bet_score[i].low) && $util.isInteger(message.all_bet_score[i].high)))
                        return "all_bet_score: integer|Long[] expected";
            }
            if (message.me_bet_score != null && message.hasOwnProperty("me_bet_score")) {
                if (!Array.isArray(message.me_bet_score))
                    return "me_bet_score: array expected";
                for (var i = 0; i < message.me_bet_score.length; ++i)
                    if (!$util.isInteger(message.me_bet_score[i]) && !(message.me_bet_score[i] && $util.isInteger(message.me_bet_score[i].low) && $util.isInteger(message.me_bet_score[i].high)))
                        return "me_bet_score: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a notify_gs_bet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lhd.notify_gs_bet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lhd.notify_gs_bet} notify_gs_bet
         */
        notify_gs_bet.fromObject = function fromObject(object) {
            if (object instanceof $root.lhd.notify_gs_bet)
                return object;
            var message = new $root.lhd.notify_gs_bet();
            if (object.dealid != null)
                message.dealid = String(object.dealid);
            if (object.time_leave != null)
                message.time_leave = object.time_leave >>> 0;
            if (object.enable_sys_banker != null)
                message.enable_sys_banker = Boolean(object.enable_sys_banker);
            if (object.banker_condition != null)
                if ($util.Long)
                    (message.banker_condition = $util.Long.fromValue(object.banker_condition)).unsigned = true;
                else if (typeof object.banker_condition === "string")
                    message.banker_condition = parseInt(object.banker_condition, 10);
                else if (typeof object.banker_condition === "number")
                    message.banker_condition = object.banker_condition;
                else if (typeof object.banker_condition === "object")
                    message.banker_condition = new $util.LongBits(object.banker_condition.low >>> 0, object.banker_condition.high >>> 0).toNumber(true);
            if (object.downbanker_condition != null)
                if ($util.Long)
                    (message.downbanker_condition = $util.Long.fromValue(object.downbanker_condition)).unsigned = true;
                else if (typeof object.downbanker_condition === "string")
                    message.downbanker_condition = parseInt(object.downbanker_condition, 10);
                else if (typeof object.downbanker_condition === "number")
                    message.downbanker_condition = object.downbanker_condition;
                else if (typeof object.downbanker_condition === "object")
                    message.downbanker_condition = new $util.LongBits(object.downbanker_condition.low >>> 0, object.downbanker_condition.high >>> 0).toNumber(true);
            if (object.user_bet_limit != null)
                if ($util.Long)
                    (message.user_bet_limit = $util.Long.fromValue(object.user_bet_limit)).unsigned = true;
                else if (typeof object.user_bet_limit === "string")
                    message.user_bet_limit = parseInt(object.user_bet_limit, 10);
                else if (typeof object.user_bet_limit === "number")
                    message.user_bet_limit = object.user_bet_limit;
                else if (typeof object.user_bet_limit === "object")
                    message.user_bet_limit = new $util.LongBits(object.user_bet_limit.low >>> 0, object.user_bet_limit.high >>> 0).toNumber(true);
            if (object.area_bet_limit != null)
                if ($util.Long)
                    (message.area_bet_limit = $util.Long.fromValue(object.area_bet_limit)).unsigned = true;
                else if (typeof object.area_bet_limit === "string")
                    message.area_bet_limit = parseInt(object.area_bet_limit, 10);
                else if (typeof object.area_bet_limit === "number")
                    message.area_bet_limit = object.area_bet_limit;
                else if (typeof object.area_bet_limit === "object")
                    message.area_bet_limit = new $util.LongBits(object.area_bet_limit.low >>> 0, object.area_bet_limit.high >>> 0).toNumber(true);
            if (object.bet_condition != null)
                if ($util.Long)
                    (message.bet_condition = $util.Long.fromValue(object.bet_condition)).unsigned = true;
                else if (typeof object.bet_condition === "string")
                    message.bet_condition = parseInt(object.bet_condition, 10);
                else if (typeof object.bet_condition === "number")
                    message.bet_condition = object.bet_condition;
                else if (typeof object.bet_condition === "object")
                    message.bet_condition = new $util.LongBits(object.bet_condition.low >>> 0, object.bet_condition.high >>> 0).toNumber(true);
            if (object.current_banker != null)
                message.current_banker = object.current_banker >>> 0;
            if (object.banker_reserve_score != null)
                if ($util.Long)
                    (message.banker_reserve_score = $util.Long.fromValue(object.banker_reserve_score)).unsigned = true;
                else if (typeof object.banker_reserve_score === "string")
                    message.banker_reserve_score = parseInt(object.banker_reserve_score, 10);
                else if (typeof object.banker_reserve_score === "number")
                    message.banker_reserve_score = object.banker_reserve_score;
                else if (typeof object.banker_reserve_score === "object")
                    message.banker_reserve_score = new $util.LongBits(object.banker_reserve_score.low >>> 0, object.banker_reserve_score.high >>> 0).toNumber(true);
            if (object.banker_count != null)
                message.banker_count = object.banker_count >>> 0;
            if (object.all_bet_score) {
                if (!Array.isArray(object.all_bet_score))
                    throw TypeError(".lhd.notify_gs_bet.all_bet_score: array expected");
                message.all_bet_score = [];
                for (var i = 0; i < object.all_bet_score.length; ++i)
                    if ($util.Long)
                        (message.all_bet_score[i] = $util.Long.fromValue(object.all_bet_score[i])).unsigned = true;
                    else if (typeof object.all_bet_score[i] === "string")
                        message.all_bet_score[i] = parseInt(object.all_bet_score[i], 10);
                    else if (typeof object.all_bet_score[i] === "number")
                        message.all_bet_score[i] = object.all_bet_score[i];
                    else if (typeof object.all_bet_score[i] === "object")
                        message.all_bet_score[i] = new $util.LongBits(object.all_bet_score[i].low >>> 0, object.all_bet_score[i].high >>> 0).toNumber(true);
            }
            if (object.me_bet_score) {
                if (!Array.isArray(object.me_bet_score))
                    throw TypeError(".lhd.notify_gs_bet.me_bet_score: array expected");
                message.me_bet_score = [];
                for (var i = 0; i < object.me_bet_score.length; ++i)
                    if ($util.Long)
                        (message.me_bet_score[i] = $util.Long.fromValue(object.me_bet_score[i])).unsigned = true;
                    else if (typeof object.me_bet_score[i] === "string")
                        message.me_bet_score[i] = parseInt(object.me_bet_score[i], 10);
                    else if (typeof object.me_bet_score[i] === "number")
                        message.me_bet_score[i] = object.me_bet_score[i];
                    else if (typeof object.me_bet_score[i] === "object")
                        message.me_bet_score[i] = new $util.LongBits(object.me_bet_score[i].low >>> 0, object.me_bet_score[i].high >>> 0).toNumber(true);
            }
            return message;
        };

        /**
         * Creates a plain object from a notify_gs_bet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lhd.notify_gs_bet
         * @static
         * @param {lhd.notify_gs_bet} message notify_gs_bet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_gs_bet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.all_bet_score = [];
                object.me_bet_score = [];
            }
            if (options.defaults) {
                object.dealid = "";
                object.time_leave = 0;
                object.enable_sys_banker = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.banker_condition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.banker_condition = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.downbanker_condition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.downbanker_condition = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.user_bet_limit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.user_bet_limit = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.area_bet_limit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.area_bet_limit = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bet_condition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bet_condition = options.longs === String ? "0" : 0;
                object.current_banker = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.banker_reserve_score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.banker_reserve_score = options.longs === String ? "0" : 0;
                object.banker_count = 0;
            }
            if (message.dealid != null && message.hasOwnProperty("dealid"))
                object.dealid = message.dealid;
            if (message.time_leave != null && message.hasOwnProperty("time_leave"))
                object.time_leave = message.time_leave;
            if (message.enable_sys_banker != null && message.hasOwnProperty("enable_sys_banker"))
                object.enable_sys_banker = message.enable_sys_banker;
            if (message.banker_condition != null && message.hasOwnProperty("banker_condition"))
                if (typeof message.banker_condition === "number")
                    object.banker_condition = options.longs === String ? String(message.banker_condition) : message.banker_condition;
                else
                    object.banker_condition = options.longs === String ? $util.Long.prototype.toString.call(message.banker_condition) : options.longs === Number ? new $util.LongBits(message.banker_condition.low >>> 0, message.banker_condition.high >>> 0).toNumber(true) : message.banker_condition;
            if (message.downbanker_condition != null && message.hasOwnProperty("downbanker_condition"))
                if (typeof message.downbanker_condition === "number")
                    object.downbanker_condition = options.longs === String ? String(message.downbanker_condition) : message.downbanker_condition;
                else
                    object.downbanker_condition = options.longs === String ? $util.Long.prototype.toString.call(message.downbanker_condition) : options.longs === Number ? new $util.LongBits(message.downbanker_condition.low >>> 0, message.downbanker_condition.high >>> 0).toNumber(true) : message.downbanker_condition;
            if (message.user_bet_limit != null && message.hasOwnProperty("user_bet_limit"))
                if (typeof message.user_bet_limit === "number")
                    object.user_bet_limit = options.longs === String ? String(message.user_bet_limit) : message.user_bet_limit;
                else
                    object.user_bet_limit = options.longs === String ? $util.Long.prototype.toString.call(message.user_bet_limit) : options.longs === Number ? new $util.LongBits(message.user_bet_limit.low >>> 0, message.user_bet_limit.high >>> 0).toNumber(true) : message.user_bet_limit;
            if (message.area_bet_limit != null && message.hasOwnProperty("area_bet_limit"))
                if (typeof message.area_bet_limit === "number")
                    object.area_bet_limit = options.longs === String ? String(message.area_bet_limit) : message.area_bet_limit;
                else
                    object.area_bet_limit = options.longs === String ? $util.Long.prototype.toString.call(message.area_bet_limit) : options.longs === Number ? new $util.LongBits(message.area_bet_limit.low >>> 0, message.area_bet_limit.high >>> 0).toNumber(true) : message.area_bet_limit;
            if (message.bet_condition != null && message.hasOwnProperty("bet_condition"))
                if (typeof message.bet_condition === "number")
                    object.bet_condition = options.longs === String ? String(message.bet_condition) : message.bet_condition;
                else
                    object.bet_condition = options.longs === String ? $util.Long.prototype.toString.call(message.bet_condition) : options.longs === Number ? new $util.LongBits(message.bet_condition.low >>> 0, message.bet_condition.high >>> 0).toNumber(true) : message.bet_condition;
            if (message.current_banker != null && message.hasOwnProperty("current_banker"))
                object.current_banker = message.current_banker;
            if (message.banker_reserve_score != null && message.hasOwnProperty("banker_reserve_score"))
                if (typeof message.banker_reserve_score === "number")
                    object.banker_reserve_score = options.longs === String ? String(message.banker_reserve_score) : message.banker_reserve_score;
                else
                    object.banker_reserve_score = options.longs === String ? $util.Long.prototype.toString.call(message.banker_reserve_score) : options.longs === Number ? new $util.LongBits(message.banker_reserve_score.low >>> 0, message.banker_reserve_score.high >>> 0).toNumber(true) : message.banker_reserve_score;
            if (message.banker_count != null && message.hasOwnProperty("banker_count"))
                object.banker_count = message.banker_count;
            if (message.all_bet_score && message.all_bet_score.length) {
                object.all_bet_score = [];
                for (var j = 0; j < message.all_bet_score.length; ++j)
                    if (typeof message.all_bet_score[j] === "number")
                        object.all_bet_score[j] = options.longs === String ? String(message.all_bet_score[j]) : message.all_bet_score[j];
                    else
                        object.all_bet_score[j] = options.longs === String ? $util.Long.prototype.toString.call(message.all_bet_score[j]) : options.longs === Number ? new $util.LongBits(message.all_bet_score[j].low >>> 0, message.all_bet_score[j].high >>> 0).toNumber(true) : message.all_bet_score[j];
            }
            if (message.me_bet_score && message.me_bet_score.length) {
                object.me_bet_score = [];
                for (var j = 0; j < message.me_bet_score.length; ++j)
                    if (typeof message.me_bet_score[j] === "number")
                        object.me_bet_score[j] = options.longs === String ? String(message.me_bet_score[j]) : message.me_bet_score[j];
                    else
                        object.me_bet_score[j] = options.longs === String ? $util.Long.prototype.toString.call(message.me_bet_score[j]) : options.longs === Number ? new $util.LongBits(message.me_bet_score[j].low >>> 0, message.me_bet_score[j].high >>> 0).toNumber(true) : message.me_bet_score[j];
            }
            return object;
        };

        /**
         * Converts this notify_gs_bet to JSON.
         * @function toJSON
         * @memberof lhd.notify_gs_bet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_gs_bet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_gs_bet;
    })();

    lhd.notify_gs_opencard = (function() {

        /**
         * Properties of a notify_gs_opencard.
         * @memberof lhd
         * @interface Inotify_gs_opencard
         * @property {string} dealid notify_gs_opencard dealid
         * @property {number} time_leave notify_gs_opencard time_leave
         * @property {boolean} enable_sys_banker notify_gs_opencard enable_sys_banker
         * @property {number|Long} banker_condition notify_gs_opencard banker_condition
         * @property {number|Long} downbanker_condition notify_gs_opencard downbanker_condition
         * @property {number|Long} user_bet_limit notify_gs_opencard user_bet_limit
         * @property {number|Long} area_bet_limit notify_gs_opencard area_bet_limit
         * @property {number|Long} bet_condition notify_gs_opencard bet_condition
         * @property {number} current_banker notify_gs_opencard current_banker
         * @property {number|Long} banker_reserve_score notify_gs_opencard banker_reserve_score
         * @property {number} banker_count notify_gs_opencard banker_count
         * @property {Array.<number|Long>|null} [all_bet_score] notify_gs_opencard all_bet_score
         * @property {Array.<number|Long>|null} [me_bet_score] notify_gs_opencard me_bet_score
         * @property {Array.<number>|null} [cards_data] notify_gs_opencard cards_data
         * @property {number} win_area notify_gs_opencard win_area
         * @property {Array.<number|Long>|null} [win_score] notify_gs_opencard win_score
         */

        /**
         * Constructs a new notify_gs_opencard.
         * @memberof lhd
         * @classdesc Represents a notify_gs_opencard.
         * @implements Inotify_gs_opencard
         * @constructor
         * @param {lhd.Inotify_gs_opencard=} [properties] Properties to set
         */
        function notify_gs_opencard(properties) {
            this.all_bet_score = [];
            this.me_bet_score = [];
            this.cards_data = [];
            this.win_score = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_gs_opencard dealid.
         * @member {string} dealid
         * @memberof lhd.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.dealid = "";

        /**
         * notify_gs_opencard time_leave.
         * @member {number} time_leave
         * @memberof lhd.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.time_leave = 0;

        /**
         * notify_gs_opencard enable_sys_banker.
         * @member {boolean} enable_sys_banker
         * @memberof lhd.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.enable_sys_banker = false;

        /**
         * notify_gs_opencard banker_condition.
         * @member {number|Long} banker_condition
         * @memberof lhd.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.banker_condition = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_gs_opencard downbanker_condition.
         * @member {number|Long} downbanker_condition
         * @memberof lhd.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.downbanker_condition = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_gs_opencard user_bet_limit.
         * @member {number|Long} user_bet_limit
         * @memberof lhd.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.user_bet_limit = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_gs_opencard area_bet_limit.
         * @member {number|Long} area_bet_limit
         * @memberof lhd.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.area_bet_limit = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_gs_opencard bet_condition.
         * @member {number|Long} bet_condition
         * @memberof lhd.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.bet_condition = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_gs_opencard current_banker.
         * @member {number} current_banker
         * @memberof lhd.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.current_banker = 0;

        /**
         * notify_gs_opencard banker_reserve_score.
         * @member {number|Long} banker_reserve_score
         * @memberof lhd.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.banker_reserve_score = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_gs_opencard banker_count.
         * @member {number} banker_count
         * @memberof lhd.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.banker_count = 0;

        /**
         * notify_gs_opencard all_bet_score.
         * @member {Array.<number|Long>} all_bet_score
         * @memberof lhd.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.all_bet_score = $util.emptyArray;

        /**
         * notify_gs_opencard me_bet_score.
         * @member {Array.<number|Long>} me_bet_score
         * @memberof lhd.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.me_bet_score = $util.emptyArray;

        /**
         * notify_gs_opencard cards_data.
         * @member {Array.<number>} cards_data
         * @memberof lhd.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.cards_data = $util.emptyArray;

        /**
         * notify_gs_opencard win_area.
         * @member {number} win_area
         * @memberof lhd.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.win_area = 0;

        /**
         * notify_gs_opencard win_score.
         * @member {Array.<number|Long>} win_score
         * @memberof lhd.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.win_score = $util.emptyArray;

        /**
         * Creates a new notify_gs_opencard instance using the specified properties.
         * @function create
         * @memberof lhd.notify_gs_opencard
         * @static
         * @param {lhd.Inotify_gs_opencard=} [properties] Properties to set
         * @returns {lhd.notify_gs_opencard} notify_gs_opencard instance
         */
        notify_gs_opencard.create = function create(properties) {
            return new notify_gs_opencard(properties);
        };

        /**
         * Encodes the specified notify_gs_opencard message. Does not implicitly {@link lhd.notify_gs_opencard.verify|verify} messages.
         * @function encode
         * @memberof lhd.notify_gs_opencard
         * @static
         * @param {lhd.Inotify_gs_opencard} message notify_gs_opencard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_gs_opencard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.dealid);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.time_leave);
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.enable_sys_banker);
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.banker_condition);
            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.downbanker_condition);
            writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.user_bet_limit);
            writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.area_bet_limit);
            writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.bet_condition);
            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.current_banker);
            writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.banker_reserve_score);
            writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.banker_count);
            if (message.all_bet_score != null && message.all_bet_score.length)
                for (var i = 0; i < message.all_bet_score.length; ++i)
                    writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.all_bet_score[i]);
            if (message.me_bet_score != null && message.me_bet_score.length)
                for (var i = 0; i < message.me_bet_score.length; ++i)
                    writer.uint32(/* id 13, wireType 0 =*/104).uint64(message.me_bet_score[i]);
            if (message.cards_data != null && message.cards_data.length)
                for (var i = 0; i < message.cards_data.length; ++i)
                    writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.cards_data[i]);
            writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.win_area);
            if (message.win_score != null && message.win_score.length)
                for (var i = 0; i < message.win_score.length; ++i)
                    writer.uint32(/* id 16, wireType 0 =*/128).sint64(message.win_score[i]);
            return writer;
        };

        /**
         * Encodes the specified notify_gs_opencard message, length delimited. Does not implicitly {@link lhd.notify_gs_opencard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lhd.notify_gs_opencard
         * @static
         * @param {lhd.Inotify_gs_opencard} message notify_gs_opencard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_gs_opencard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_gs_opencard message from the specified reader or buffer.
         * @function decode
         * @memberof lhd.notify_gs_opencard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lhd.notify_gs_opencard} notify_gs_opencard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_gs_opencard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lhd.notify_gs_opencard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.dealid = reader.string();
                    break;
                case 2:
                    message.time_leave = reader.uint32();
                    break;
                case 3:
                    message.enable_sys_banker = reader.bool();
                    break;
                case 4:
                    message.banker_condition = reader.uint64();
                    break;
                case 5:
                    message.downbanker_condition = reader.uint64();
                    break;
                case 6:
                    message.user_bet_limit = reader.uint64();
                    break;
                case 7:
                    message.area_bet_limit = reader.uint64();
                    break;
                case 8:
                    message.bet_condition = reader.uint64();
                    break;
                case 9:
                    message.current_banker = reader.uint32();
                    break;
                case 10:
                    message.banker_reserve_score = reader.uint64();
                    break;
                case 11:
                    message.banker_count = reader.uint32();
                    break;
                case 12:
                    if (!(message.all_bet_score && message.all_bet_score.length))
                        message.all_bet_score = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.all_bet_score.push(reader.uint64());
                    } else
                        message.all_bet_score.push(reader.uint64());
                    break;
                case 13:
                    if (!(message.me_bet_score && message.me_bet_score.length))
                        message.me_bet_score = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.me_bet_score.push(reader.uint64());
                    } else
                        message.me_bet_score.push(reader.uint64());
                    break;
                case 14:
                    if (!(message.cards_data && message.cards_data.length))
                        message.cards_data = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards_data.push(reader.uint32());
                    } else
                        message.cards_data.push(reader.uint32());
                    break;
                case 15:
                    message.win_area = reader.uint32();
                    break;
                case 16:
                    if (!(message.win_score && message.win_score.length))
                        message.win_score = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.win_score.push(reader.sint64());
                    } else
                        message.win_score.push(reader.sint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("dealid"))
                throw $util.ProtocolError("missing required 'dealid'", { instance: message });
            if (!message.hasOwnProperty("time_leave"))
                throw $util.ProtocolError("missing required 'time_leave'", { instance: message });
            if (!message.hasOwnProperty("enable_sys_banker"))
                throw $util.ProtocolError("missing required 'enable_sys_banker'", { instance: message });
            if (!message.hasOwnProperty("banker_condition"))
                throw $util.ProtocolError("missing required 'banker_condition'", { instance: message });
            if (!message.hasOwnProperty("downbanker_condition"))
                throw $util.ProtocolError("missing required 'downbanker_condition'", { instance: message });
            if (!message.hasOwnProperty("user_bet_limit"))
                throw $util.ProtocolError("missing required 'user_bet_limit'", { instance: message });
            if (!message.hasOwnProperty("area_bet_limit"))
                throw $util.ProtocolError("missing required 'area_bet_limit'", { instance: message });
            if (!message.hasOwnProperty("bet_condition"))
                throw $util.ProtocolError("missing required 'bet_condition'", { instance: message });
            if (!message.hasOwnProperty("current_banker"))
                throw $util.ProtocolError("missing required 'current_banker'", { instance: message });
            if (!message.hasOwnProperty("banker_reserve_score"))
                throw $util.ProtocolError("missing required 'banker_reserve_score'", { instance: message });
            if (!message.hasOwnProperty("banker_count"))
                throw $util.ProtocolError("missing required 'banker_count'", { instance: message });
            if (!message.hasOwnProperty("win_area"))
                throw $util.ProtocolError("missing required 'win_area'", { instance: message });
            return message;
        };

        /**
         * Decodes a notify_gs_opencard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lhd.notify_gs_opencard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lhd.notify_gs_opencard} notify_gs_opencard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_gs_opencard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a notify_gs_opencard message.
         * @function verify
         * @memberof lhd.notify_gs_opencard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_gs_opencard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.dealid))
                return "dealid: string expected";
            if (!$util.isInteger(message.time_leave))
                return "time_leave: integer expected";
            if (typeof message.enable_sys_banker !== "boolean")
                return "enable_sys_banker: boolean expected";
            if (!$util.isInteger(message.banker_condition) && !(message.banker_condition && $util.isInteger(message.banker_condition.low) && $util.isInteger(message.banker_condition.high)))
                return "banker_condition: integer|Long expected";
            if (!$util.isInteger(message.downbanker_condition) && !(message.downbanker_condition && $util.isInteger(message.downbanker_condition.low) && $util.isInteger(message.downbanker_condition.high)))
                return "downbanker_condition: integer|Long expected";
            if (!$util.isInteger(message.user_bet_limit) && !(message.user_bet_limit && $util.isInteger(message.user_bet_limit.low) && $util.isInteger(message.user_bet_limit.high)))
                return "user_bet_limit: integer|Long expected";
            if (!$util.isInteger(message.area_bet_limit) && !(message.area_bet_limit && $util.isInteger(message.area_bet_limit.low) && $util.isInteger(message.area_bet_limit.high)))
                return "area_bet_limit: integer|Long expected";
            if (!$util.isInteger(message.bet_condition) && !(message.bet_condition && $util.isInteger(message.bet_condition.low) && $util.isInteger(message.bet_condition.high)))
                return "bet_condition: integer|Long expected";
            if (!$util.isInteger(message.current_banker))
                return "current_banker: integer expected";
            if (!$util.isInteger(message.banker_reserve_score) && !(message.banker_reserve_score && $util.isInteger(message.banker_reserve_score.low) && $util.isInteger(message.banker_reserve_score.high)))
                return "banker_reserve_score: integer|Long expected";
            if (!$util.isInteger(message.banker_count))
                return "banker_count: integer expected";
            if (message.all_bet_score != null && message.hasOwnProperty("all_bet_score")) {
                if (!Array.isArray(message.all_bet_score))
                    return "all_bet_score: array expected";
                for (var i = 0; i < message.all_bet_score.length; ++i)
                    if (!$util.isInteger(message.all_bet_score[i]) && !(message.all_bet_score[i] && $util.isInteger(message.all_bet_score[i].low) && $util.isInteger(message.all_bet_score[i].high)))
                        return "all_bet_score: integer|Long[] expected";
            }
            if (message.me_bet_score != null && message.hasOwnProperty("me_bet_score")) {
                if (!Array.isArray(message.me_bet_score))
                    return "me_bet_score: array expected";
                for (var i = 0; i < message.me_bet_score.length; ++i)
                    if (!$util.isInteger(message.me_bet_score[i]) && !(message.me_bet_score[i] && $util.isInteger(message.me_bet_score[i].low) && $util.isInteger(message.me_bet_score[i].high)))
                        return "me_bet_score: integer|Long[] expected";
            }
            if (message.cards_data != null && message.hasOwnProperty("cards_data")) {
                if (!Array.isArray(message.cards_data))
                    return "cards_data: array expected";
                for (var i = 0; i < message.cards_data.length; ++i)
                    if (!$util.isInteger(message.cards_data[i]))
                        return "cards_data: integer[] expected";
            }
            if (!$util.isInteger(message.win_area))
                return "win_area: integer expected";
            if (message.win_score != null && message.hasOwnProperty("win_score")) {
                if (!Array.isArray(message.win_score))
                    return "win_score: array expected";
                for (var i = 0; i < message.win_score.length; ++i)
                    if (!$util.isInteger(message.win_score[i]) && !(message.win_score[i] && $util.isInteger(message.win_score[i].low) && $util.isInteger(message.win_score[i].high)))
                        return "win_score: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a notify_gs_opencard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lhd.notify_gs_opencard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lhd.notify_gs_opencard} notify_gs_opencard
         */
        notify_gs_opencard.fromObject = function fromObject(object) {
            if (object instanceof $root.lhd.notify_gs_opencard)
                return object;
            var message = new $root.lhd.notify_gs_opencard();
            if (object.dealid != null)
                message.dealid = String(object.dealid);
            if (object.time_leave != null)
                message.time_leave = object.time_leave >>> 0;
            if (object.enable_sys_banker != null)
                message.enable_sys_banker = Boolean(object.enable_sys_banker);
            if (object.banker_condition != null)
                if ($util.Long)
                    (message.banker_condition = $util.Long.fromValue(object.banker_condition)).unsigned = true;
                else if (typeof object.banker_condition === "string")
                    message.banker_condition = parseInt(object.banker_condition, 10);
                else if (typeof object.banker_condition === "number")
                    message.banker_condition = object.banker_condition;
                else if (typeof object.banker_condition === "object")
                    message.banker_condition = new $util.LongBits(object.banker_condition.low >>> 0, object.banker_condition.high >>> 0).toNumber(true);
            if (object.downbanker_condition != null)
                if ($util.Long)
                    (message.downbanker_condition = $util.Long.fromValue(object.downbanker_condition)).unsigned = true;
                else if (typeof object.downbanker_condition === "string")
                    message.downbanker_condition = parseInt(object.downbanker_condition, 10);
                else if (typeof object.downbanker_condition === "number")
                    message.downbanker_condition = object.downbanker_condition;
                else if (typeof object.downbanker_condition === "object")
                    message.downbanker_condition = new $util.LongBits(object.downbanker_condition.low >>> 0, object.downbanker_condition.high >>> 0).toNumber(true);
            if (object.user_bet_limit != null)
                if ($util.Long)
                    (message.user_bet_limit = $util.Long.fromValue(object.user_bet_limit)).unsigned = true;
                else if (typeof object.user_bet_limit === "string")
                    message.user_bet_limit = parseInt(object.user_bet_limit, 10);
                else if (typeof object.user_bet_limit === "number")
                    message.user_bet_limit = object.user_bet_limit;
                else if (typeof object.user_bet_limit === "object")
                    message.user_bet_limit = new $util.LongBits(object.user_bet_limit.low >>> 0, object.user_bet_limit.high >>> 0).toNumber(true);
            if (object.area_bet_limit != null)
                if ($util.Long)
                    (message.area_bet_limit = $util.Long.fromValue(object.area_bet_limit)).unsigned = true;
                else if (typeof object.area_bet_limit === "string")
                    message.area_bet_limit = parseInt(object.area_bet_limit, 10);
                else if (typeof object.area_bet_limit === "number")
                    message.area_bet_limit = object.area_bet_limit;
                else if (typeof object.area_bet_limit === "object")
                    message.area_bet_limit = new $util.LongBits(object.area_bet_limit.low >>> 0, object.area_bet_limit.high >>> 0).toNumber(true);
            if (object.bet_condition != null)
                if ($util.Long)
                    (message.bet_condition = $util.Long.fromValue(object.bet_condition)).unsigned = true;
                else if (typeof object.bet_condition === "string")
                    message.bet_condition = parseInt(object.bet_condition, 10);
                else if (typeof object.bet_condition === "number")
                    message.bet_condition = object.bet_condition;
                else if (typeof object.bet_condition === "object")
                    message.bet_condition = new $util.LongBits(object.bet_condition.low >>> 0, object.bet_condition.high >>> 0).toNumber(true);
            if (object.current_banker != null)
                message.current_banker = object.current_banker >>> 0;
            if (object.banker_reserve_score != null)
                if ($util.Long)
                    (message.banker_reserve_score = $util.Long.fromValue(object.banker_reserve_score)).unsigned = true;
                else if (typeof object.banker_reserve_score === "string")
                    message.banker_reserve_score = parseInt(object.banker_reserve_score, 10);
                else if (typeof object.banker_reserve_score === "number")
                    message.banker_reserve_score = object.banker_reserve_score;
                else if (typeof object.banker_reserve_score === "object")
                    message.banker_reserve_score = new $util.LongBits(object.banker_reserve_score.low >>> 0, object.banker_reserve_score.high >>> 0).toNumber(true);
            if (object.banker_count != null)
                message.banker_count = object.banker_count >>> 0;
            if (object.all_bet_score) {
                if (!Array.isArray(object.all_bet_score))
                    throw TypeError(".lhd.notify_gs_opencard.all_bet_score: array expected");
                message.all_bet_score = [];
                for (var i = 0; i < object.all_bet_score.length; ++i)
                    if ($util.Long)
                        (message.all_bet_score[i] = $util.Long.fromValue(object.all_bet_score[i])).unsigned = true;
                    else if (typeof object.all_bet_score[i] === "string")
                        message.all_bet_score[i] = parseInt(object.all_bet_score[i], 10);
                    else if (typeof object.all_bet_score[i] === "number")
                        message.all_bet_score[i] = object.all_bet_score[i];
                    else if (typeof object.all_bet_score[i] === "object")
                        message.all_bet_score[i] = new $util.LongBits(object.all_bet_score[i].low >>> 0, object.all_bet_score[i].high >>> 0).toNumber(true);
            }
            if (object.me_bet_score) {
                if (!Array.isArray(object.me_bet_score))
                    throw TypeError(".lhd.notify_gs_opencard.me_bet_score: array expected");
                message.me_bet_score = [];
                for (var i = 0; i < object.me_bet_score.length; ++i)
                    if ($util.Long)
                        (message.me_bet_score[i] = $util.Long.fromValue(object.me_bet_score[i])).unsigned = true;
                    else if (typeof object.me_bet_score[i] === "string")
                        message.me_bet_score[i] = parseInt(object.me_bet_score[i], 10);
                    else if (typeof object.me_bet_score[i] === "number")
                        message.me_bet_score[i] = object.me_bet_score[i];
                    else if (typeof object.me_bet_score[i] === "object")
                        message.me_bet_score[i] = new $util.LongBits(object.me_bet_score[i].low >>> 0, object.me_bet_score[i].high >>> 0).toNumber(true);
            }
            if (object.cards_data) {
                if (!Array.isArray(object.cards_data))
                    throw TypeError(".lhd.notify_gs_opencard.cards_data: array expected");
                message.cards_data = [];
                for (var i = 0; i < object.cards_data.length; ++i)
                    message.cards_data[i] = object.cards_data[i] >>> 0;
            }
            if (object.win_area != null)
                message.win_area = object.win_area >>> 0;
            if (object.win_score) {
                if (!Array.isArray(object.win_score))
                    throw TypeError(".lhd.notify_gs_opencard.win_score: array expected");
                message.win_score = [];
                for (var i = 0; i < object.win_score.length; ++i)
                    if ($util.Long)
                        (message.win_score[i] = $util.Long.fromValue(object.win_score[i])).unsigned = false;
                    else if (typeof object.win_score[i] === "string")
                        message.win_score[i] = parseInt(object.win_score[i], 10);
                    else if (typeof object.win_score[i] === "number")
                        message.win_score[i] = object.win_score[i];
                    else if (typeof object.win_score[i] === "object")
                        message.win_score[i] = new $util.LongBits(object.win_score[i].low >>> 0, object.win_score[i].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from a notify_gs_opencard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lhd.notify_gs_opencard
         * @static
         * @param {lhd.notify_gs_opencard} message notify_gs_opencard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_gs_opencard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.all_bet_score = [];
                object.me_bet_score = [];
                object.cards_data = [];
                object.win_score = [];
            }
            if (options.defaults) {
                object.dealid = "";
                object.time_leave = 0;
                object.enable_sys_banker = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.banker_condition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.banker_condition = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.downbanker_condition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.downbanker_condition = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.user_bet_limit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.user_bet_limit = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.area_bet_limit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.area_bet_limit = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bet_condition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bet_condition = options.longs === String ? "0" : 0;
                object.current_banker = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.banker_reserve_score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.banker_reserve_score = options.longs === String ? "0" : 0;
                object.banker_count = 0;
                object.win_area = 0;
            }
            if (message.dealid != null && message.hasOwnProperty("dealid"))
                object.dealid = message.dealid;
            if (message.time_leave != null && message.hasOwnProperty("time_leave"))
                object.time_leave = message.time_leave;
            if (message.enable_sys_banker != null && message.hasOwnProperty("enable_sys_banker"))
                object.enable_sys_banker = message.enable_sys_banker;
            if (message.banker_condition != null && message.hasOwnProperty("banker_condition"))
                if (typeof message.banker_condition === "number")
                    object.banker_condition = options.longs === String ? String(message.banker_condition) : message.banker_condition;
                else
                    object.banker_condition = options.longs === String ? $util.Long.prototype.toString.call(message.banker_condition) : options.longs === Number ? new $util.LongBits(message.banker_condition.low >>> 0, message.banker_condition.high >>> 0).toNumber(true) : message.banker_condition;
            if (message.downbanker_condition != null && message.hasOwnProperty("downbanker_condition"))
                if (typeof message.downbanker_condition === "number")
                    object.downbanker_condition = options.longs === String ? String(message.downbanker_condition) : message.downbanker_condition;
                else
                    object.downbanker_condition = options.longs === String ? $util.Long.prototype.toString.call(message.downbanker_condition) : options.longs === Number ? new $util.LongBits(message.downbanker_condition.low >>> 0, message.downbanker_condition.high >>> 0).toNumber(true) : message.downbanker_condition;
            if (message.user_bet_limit != null && message.hasOwnProperty("user_bet_limit"))
                if (typeof message.user_bet_limit === "number")
                    object.user_bet_limit = options.longs === String ? String(message.user_bet_limit) : message.user_bet_limit;
                else
                    object.user_bet_limit = options.longs === String ? $util.Long.prototype.toString.call(message.user_bet_limit) : options.longs === Number ? new $util.LongBits(message.user_bet_limit.low >>> 0, message.user_bet_limit.high >>> 0).toNumber(true) : message.user_bet_limit;
            if (message.area_bet_limit != null && message.hasOwnProperty("area_bet_limit"))
                if (typeof message.area_bet_limit === "number")
                    object.area_bet_limit = options.longs === String ? String(message.area_bet_limit) : message.area_bet_limit;
                else
                    object.area_bet_limit = options.longs === String ? $util.Long.prototype.toString.call(message.area_bet_limit) : options.longs === Number ? new $util.LongBits(message.area_bet_limit.low >>> 0, message.area_bet_limit.high >>> 0).toNumber(true) : message.area_bet_limit;
            if (message.bet_condition != null && message.hasOwnProperty("bet_condition"))
                if (typeof message.bet_condition === "number")
                    object.bet_condition = options.longs === String ? String(message.bet_condition) : message.bet_condition;
                else
                    object.bet_condition = options.longs === String ? $util.Long.prototype.toString.call(message.bet_condition) : options.longs === Number ? new $util.LongBits(message.bet_condition.low >>> 0, message.bet_condition.high >>> 0).toNumber(true) : message.bet_condition;
            if (message.current_banker != null && message.hasOwnProperty("current_banker"))
                object.current_banker = message.current_banker;
            if (message.banker_reserve_score != null && message.hasOwnProperty("banker_reserve_score"))
                if (typeof message.banker_reserve_score === "number")
                    object.banker_reserve_score = options.longs === String ? String(message.banker_reserve_score) : message.banker_reserve_score;
                else
                    object.banker_reserve_score = options.longs === String ? $util.Long.prototype.toString.call(message.banker_reserve_score) : options.longs === Number ? new $util.LongBits(message.banker_reserve_score.low >>> 0, message.banker_reserve_score.high >>> 0).toNumber(true) : message.banker_reserve_score;
            if (message.banker_count != null && message.hasOwnProperty("banker_count"))
                object.banker_count = message.banker_count;
            if (message.all_bet_score && message.all_bet_score.length) {
                object.all_bet_score = [];
                for (var j = 0; j < message.all_bet_score.length; ++j)
                    if (typeof message.all_bet_score[j] === "number")
                        object.all_bet_score[j] = options.longs === String ? String(message.all_bet_score[j]) : message.all_bet_score[j];
                    else
                        object.all_bet_score[j] = options.longs === String ? $util.Long.prototype.toString.call(message.all_bet_score[j]) : options.longs === Number ? new $util.LongBits(message.all_bet_score[j].low >>> 0, message.all_bet_score[j].high >>> 0).toNumber(true) : message.all_bet_score[j];
            }
            if (message.me_bet_score && message.me_bet_score.length) {
                object.me_bet_score = [];
                for (var j = 0; j < message.me_bet_score.length; ++j)
                    if (typeof message.me_bet_score[j] === "number")
                        object.me_bet_score[j] = options.longs === String ? String(message.me_bet_score[j]) : message.me_bet_score[j];
                    else
                        object.me_bet_score[j] = options.longs === String ? $util.Long.prototype.toString.call(message.me_bet_score[j]) : options.longs === Number ? new $util.LongBits(message.me_bet_score[j].low >>> 0, message.me_bet_score[j].high >>> 0).toNumber(true) : message.me_bet_score[j];
            }
            if (message.cards_data && message.cards_data.length) {
                object.cards_data = [];
                for (var j = 0; j < message.cards_data.length; ++j)
                    object.cards_data[j] = message.cards_data[j];
            }
            if (message.win_area != null && message.hasOwnProperty("win_area"))
                object.win_area = message.win_area;
            if (message.win_score && message.win_score.length) {
                object.win_score = [];
                for (var j = 0; j < message.win_score.length; ++j)
                    if (typeof message.win_score[j] === "number")
                        object.win_score[j] = options.longs === String ? String(message.win_score[j]) : message.win_score[j];
                    else
                        object.win_score[j] = options.longs === String ? $util.Long.prototype.toString.call(message.win_score[j]) : options.longs === Number ? new $util.LongBits(message.win_score[j].low >>> 0, message.win_score[j].high >>> 0).toNumber() : message.win_score[j];
            }
            return object;
        };

        /**
         * Converts this notify_gs_opencard to JSON.
         * @function toJSON
         * @memberof lhd.notify_gs_opencard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_gs_opencard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_gs_opencard;
    })();

    lhd.notify_game_start = (function() {

        /**
         * Properties of a notify_game_start.
         * @memberof lhd
         * @interface Inotify_game_start
         * @property {string} dealid notify_game_start dealid
         * @property {number} time_leave notify_game_start time_leave
         * @property {number} current_banker notify_game_start current_banker
         * @property {number|Long} banker_reserve_score notify_game_start banker_reserve_score
         * @property {number} banker_count notify_game_start banker_count
         */

        /**
         * Constructs a new notify_game_start.
         * @memberof lhd
         * @classdesc Represents a notify_game_start.
         * @implements Inotify_game_start
         * @constructor
         * @param {lhd.Inotify_game_start=} [properties] Properties to set
         */
        function notify_game_start(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_game_start dealid.
         * @member {string} dealid
         * @memberof lhd.notify_game_start
         * @instance
         */
        notify_game_start.prototype.dealid = "";

        /**
         * notify_game_start time_leave.
         * @member {number} time_leave
         * @memberof lhd.notify_game_start
         * @instance
         */
        notify_game_start.prototype.time_leave = 0;

        /**
         * notify_game_start current_banker.
         * @member {number} current_banker
         * @memberof lhd.notify_game_start
         * @instance
         */
        notify_game_start.prototype.current_banker = 0;

        /**
         * notify_game_start banker_reserve_score.
         * @member {number|Long} banker_reserve_score
         * @memberof lhd.notify_game_start
         * @instance
         */
        notify_game_start.prototype.banker_reserve_score = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_game_start banker_count.
         * @member {number} banker_count
         * @memberof lhd.notify_game_start
         * @instance
         */
        notify_game_start.prototype.banker_count = 0;

        /**
         * Creates a new notify_game_start instance using the specified properties.
         * @function create
         * @memberof lhd.notify_game_start
         * @static
         * @param {lhd.Inotify_game_start=} [properties] Properties to set
         * @returns {lhd.notify_game_start} notify_game_start instance
         */
        notify_game_start.create = function create(properties) {
            return new notify_game_start(properties);
        };

        /**
         * Encodes the specified notify_game_start message. Does not implicitly {@link lhd.notify_game_start.verify|verify} messages.
         * @function encode
         * @memberof lhd.notify_game_start
         * @static
         * @param {lhd.Inotify_game_start} message notify_game_start message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_game_start.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.dealid);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.time_leave);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.current_banker);
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.banker_reserve_score);
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.banker_count);
            return writer;
        };

        /**
         * Encodes the specified notify_game_start message, length delimited. Does not implicitly {@link lhd.notify_game_start.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lhd.notify_game_start
         * @static
         * @param {lhd.Inotify_game_start} message notify_game_start message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_game_start.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_game_start message from the specified reader or buffer.
         * @function decode
         * @memberof lhd.notify_game_start
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lhd.notify_game_start} notify_game_start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_game_start.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lhd.notify_game_start();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.dealid = reader.string();
                    break;
                case 2:
                    message.time_leave = reader.uint32();
                    break;
                case 3:
                    message.current_banker = reader.uint32();
                    break;
                case 4:
                    message.banker_reserve_score = reader.uint64();
                    break;
                case 5:
                    message.banker_count = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("dealid"))
                throw $util.ProtocolError("missing required 'dealid'", { instance: message });
            if (!message.hasOwnProperty("time_leave"))
                throw $util.ProtocolError("missing required 'time_leave'", { instance: message });
            if (!message.hasOwnProperty("current_banker"))
                throw $util.ProtocolError("missing required 'current_banker'", { instance: message });
            if (!message.hasOwnProperty("banker_reserve_score"))
                throw $util.ProtocolError("missing required 'banker_reserve_score'", { instance: message });
            if (!message.hasOwnProperty("banker_count"))
                throw $util.ProtocolError("missing required 'banker_count'", { instance: message });
            return message;
        };

        /**
         * Decodes a notify_game_start message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lhd.notify_game_start
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lhd.notify_game_start} notify_game_start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_game_start.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a notify_game_start message.
         * @function verify
         * @memberof lhd.notify_game_start
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_game_start.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.dealid))
                return "dealid: string expected";
            if (!$util.isInteger(message.time_leave))
                return "time_leave: integer expected";
            if (!$util.isInteger(message.current_banker))
                return "current_banker: integer expected";
            if (!$util.isInteger(message.banker_reserve_score) && !(message.banker_reserve_score && $util.isInteger(message.banker_reserve_score.low) && $util.isInteger(message.banker_reserve_score.high)))
                return "banker_reserve_score: integer|Long expected";
            if (!$util.isInteger(message.banker_count))
                return "banker_count: integer expected";
            return null;
        };

        /**
         * Creates a notify_game_start message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lhd.notify_game_start
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lhd.notify_game_start} notify_game_start
         */
        notify_game_start.fromObject = function fromObject(object) {
            if (object instanceof $root.lhd.notify_game_start)
                return object;
            var message = new $root.lhd.notify_game_start();
            if (object.dealid != null)
                message.dealid = String(object.dealid);
            if (object.time_leave != null)
                message.time_leave = object.time_leave >>> 0;
            if (object.current_banker != null)
                message.current_banker = object.current_banker >>> 0;
            if (object.banker_reserve_score != null)
                if ($util.Long)
                    (message.banker_reserve_score = $util.Long.fromValue(object.banker_reserve_score)).unsigned = true;
                else if (typeof object.banker_reserve_score === "string")
                    message.banker_reserve_score = parseInt(object.banker_reserve_score, 10);
                else if (typeof object.banker_reserve_score === "number")
                    message.banker_reserve_score = object.banker_reserve_score;
                else if (typeof object.banker_reserve_score === "object")
                    message.banker_reserve_score = new $util.LongBits(object.banker_reserve_score.low >>> 0, object.banker_reserve_score.high >>> 0).toNumber(true);
            if (object.banker_count != null)
                message.banker_count = object.banker_count >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a notify_game_start message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lhd.notify_game_start
         * @static
         * @param {lhd.notify_game_start} message notify_game_start
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_game_start.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.dealid = "";
                object.time_leave = 0;
                object.current_banker = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.banker_reserve_score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.banker_reserve_score = options.longs === String ? "0" : 0;
                object.banker_count = 0;
            }
            if (message.dealid != null && message.hasOwnProperty("dealid"))
                object.dealid = message.dealid;
            if (message.time_leave != null && message.hasOwnProperty("time_leave"))
                object.time_leave = message.time_leave;
            if (message.current_banker != null && message.hasOwnProperty("current_banker"))
                object.current_banker = message.current_banker;
            if (message.banker_reserve_score != null && message.hasOwnProperty("banker_reserve_score"))
                if (typeof message.banker_reserve_score === "number")
                    object.banker_reserve_score = options.longs === String ? String(message.banker_reserve_score) : message.banker_reserve_score;
                else
                    object.banker_reserve_score = options.longs === String ? $util.Long.prototype.toString.call(message.banker_reserve_score) : options.longs === Number ? new $util.LongBits(message.banker_reserve_score.low >>> 0, message.banker_reserve_score.high >>> 0).toNumber(true) : message.banker_reserve_score;
            if (message.banker_count != null && message.hasOwnProperty("banker_count"))
                object.banker_count = message.banker_count;
            return object;
        };

        /**
         * Converts this notify_game_start to JSON.
         * @function toJSON
         * @memberof lhd.notify_game_start
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_game_start.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_game_start;
    })();

    lhd.notify_bet = (function() {

        /**
         * Properties of a notify_bet.
         * @memberof lhd
         * @interface Inotify_bet
         * @property {number} bet_chairid notify_bet bet_chairid
         * @property {number|Long} bet_score notify_bet bet_score
         * @property {number} bet_area notify_bet bet_area
         */

        /**
         * Constructs a new notify_bet.
         * @memberof lhd
         * @classdesc Represents a notify_bet.
         * @implements Inotify_bet
         * @constructor
         * @param {lhd.Inotify_bet=} [properties] Properties to set
         */
        function notify_bet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_bet bet_chairid.
         * @member {number} bet_chairid
         * @memberof lhd.notify_bet
         * @instance
         */
        notify_bet.prototype.bet_chairid = 0;

        /**
         * notify_bet bet_score.
         * @member {number|Long} bet_score
         * @memberof lhd.notify_bet
         * @instance
         */
        notify_bet.prototype.bet_score = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_bet bet_area.
         * @member {number} bet_area
         * @memberof lhd.notify_bet
         * @instance
         */
        notify_bet.prototype.bet_area = 0;

        /**
         * Creates a new notify_bet instance using the specified properties.
         * @function create
         * @memberof lhd.notify_bet
         * @static
         * @param {lhd.Inotify_bet=} [properties] Properties to set
         * @returns {lhd.notify_bet} notify_bet instance
         */
        notify_bet.create = function create(properties) {
            return new notify_bet(properties);
        };

        /**
         * Encodes the specified notify_bet message. Does not implicitly {@link lhd.notify_bet.verify|verify} messages.
         * @function encode
         * @memberof lhd.notify_bet
         * @static
         * @param {lhd.Inotify_bet} message notify_bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_bet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.bet_chairid);
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.bet_score);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.bet_area);
            return writer;
        };

        /**
         * Encodes the specified notify_bet message, length delimited. Does not implicitly {@link lhd.notify_bet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lhd.notify_bet
         * @static
         * @param {lhd.Inotify_bet} message notify_bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_bet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_bet message from the specified reader or buffer.
         * @function decode
         * @memberof lhd.notify_bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lhd.notify_bet} notify_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_bet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lhd.notify_bet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bet_chairid = reader.uint32();
                    break;
                case 2:
                    message.bet_score = reader.uint64();
                    break;
                case 3:
                    message.bet_area = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("bet_chairid"))
                throw $util.ProtocolError("missing required 'bet_chairid'", { instance: message });
            if (!message.hasOwnProperty("bet_score"))
                throw $util.ProtocolError("missing required 'bet_score'", { instance: message });
            if (!message.hasOwnProperty("bet_area"))
                throw $util.ProtocolError("missing required 'bet_area'", { instance: message });
            return message;
        };

        /**
         * Decodes a notify_bet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lhd.notify_bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lhd.notify_bet} notify_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_bet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a notify_bet message.
         * @function verify
         * @memberof lhd.notify_bet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_bet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.bet_chairid))
                return "bet_chairid: integer expected";
            if (!$util.isInteger(message.bet_score) && !(message.bet_score && $util.isInteger(message.bet_score.low) && $util.isInteger(message.bet_score.high)))
                return "bet_score: integer|Long expected";
            if (!$util.isInteger(message.bet_area))
                return "bet_area: integer expected";
            return null;
        };

        /**
         * Creates a notify_bet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lhd.notify_bet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lhd.notify_bet} notify_bet
         */
        notify_bet.fromObject = function fromObject(object) {
            if (object instanceof $root.lhd.notify_bet)
                return object;
            var message = new $root.lhd.notify_bet();
            if (object.bet_chairid != null)
                message.bet_chairid = object.bet_chairid >>> 0;
            if (object.bet_score != null)
                if ($util.Long)
                    (message.bet_score = $util.Long.fromValue(object.bet_score)).unsigned = true;
                else if (typeof object.bet_score === "string")
                    message.bet_score = parseInt(object.bet_score, 10);
                else if (typeof object.bet_score === "number")
                    message.bet_score = object.bet_score;
                else if (typeof object.bet_score === "object")
                    message.bet_score = new $util.LongBits(object.bet_score.low >>> 0, object.bet_score.high >>> 0).toNumber(true);
            if (object.bet_area != null)
                message.bet_area = object.bet_area >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a notify_bet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lhd.notify_bet
         * @static
         * @param {lhd.notify_bet} message notify_bet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_bet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.bet_chairid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bet_score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bet_score = options.longs === String ? "0" : 0;
                object.bet_area = 0;
            }
            if (message.bet_chairid != null && message.hasOwnProperty("bet_chairid"))
                object.bet_chairid = message.bet_chairid;
            if (message.bet_score != null && message.hasOwnProperty("bet_score"))
                if (typeof message.bet_score === "number")
                    object.bet_score = options.longs === String ? String(message.bet_score) : message.bet_score;
                else
                    object.bet_score = options.longs === String ? $util.Long.prototype.toString.call(message.bet_score) : options.longs === Number ? new $util.LongBits(message.bet_score.low >>> 0, message.bet_score.high >>> 0).toNumber(true) : message.bet_score;
            if (message.bet_area != null && message.hasOwnProperty("bet_area"))
                object.bet_area = message.bet_area;
            return object;
        };

        /**
         * Converts this notify_bet to JSON.
         * @function toJSON
         * @memberof lhd.notify_bet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_bet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_bet;
    })();

    lhd.notify_open_cards = (function() {

        /**
         * Properties of a notify_open_cards.
         * @memberof lhd
         * @interface Inotify_open_cards
         * @property {number} time_leave notify_open_cards time_leave
         * @property {Array.<number>|null} [cards_data] notify_open_cards cards_data
         * @property {number} win_area notify_open_cards win_area
         * @property {Array.<number|Long>|null} [win_score] notify_open_cards win_score
         */

        /**
         * Constructs a new notify_open_cards.
         * @memberof lhd
         * @classdesc Represents a notify_open_cards.
         * @implements Inotify_open_cards
         * @constructor
         * @param {lhd.Inotify_open_cards=} [properties] Properties to set
         */
        function notify_open_cards(properties) {
            this.cards_data = [];
            this.win_score = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_open_cards time_leave.
         * @member {number} time_leave
         * @memberof lhd.notify_open_cards
         * @instance
         */
        notify_open_cards.prototype.time_leave = 0;

        /**
         * notify_open_cards cards_data.
         * @member {Array.<number>} cards_data
         * @memberof lhd.notify_open_cards
         * @instance
         */
        notify_open_cards.prototype.cards_data = $util.emptyArray;

        /**
         * notify_open_cards win_area.
         * @member {number} win_area
         * @memberof lhd.notify_open_cards
         * @instance
         */
        notify_open_cards.prototype.win_area = 0;

        /**
         * notify_open_cards win_score.
         * @member {Array.<number|Long>} win_score
         * @memberof lhd.notify_open_cards
         * @instance
         */
        notify_open_cards.prototype.win_score = $util.emptyArray;

        /**
         * Creates a new notify_open_cards instance using the specified properties.
         * @function create
         * @memberof lhd.notify_open_cards
         * @static
         * @param {lhd.Inotify_open_cards=} [properties] Properties to set
         * @returns {lhd.notify_open_cards} notify_open_cards instance
         */
        notify_open_cards.create = function create(properties) {
            return new notify_open_cards(properties);
        };

        /**
         * Encodes the specified notify_open_cards message. Does not implicitly {@link lhd.notify_open_cards.verify|verify} messages.
         * @function encode
         * @memberof lhd.notify_open_cards
         * @static
         * @param {lhd.Inotify_open_cards} message notify_open_cards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_open_cards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.time_leave);
            if (message.cards_data != null && message.cards_data.length)
                for (var i = 0; i < message.cards_data.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.cards_data[i]);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.win_area);
            if (message.win_score != null && message.win_score.length)
                for (var i = 0; i < message.win_score.length; ++i)
                    writer.uint32(/* id 4, wireType 0 =*/32).sint64(message.win_score[i]);
            return writer;
        };

        /**
         * Encodes the specified notify_open_cards message, length delimited. Does not implicitly {@link lhd.notify_open_cards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lhd.notify_open_cards
         * @static
         * @param {lhd.Inotify_open_cards} message notify_open_cards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_open_cards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_open_cards message from the specified reader or buffer.
         * @function decode
         * @memberof lhd.notify_open_cards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lhd.notify_open_cards} notify_open_cards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_open_cards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lhd.notify_open_cards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.time_leave = reader.uint32();
                    break;
                case 2:
                    if (!(message.cards_data && message.cards_data.length))
                        message.cards_data = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards_data.push(reader.uint32());
                    } else
                        message.cards_data.push(reader.uint32());
                    break;
                case 3:
                    message.win_area = reader.uint32();
                    break;
                case 4:
                    if (!(message.win_score && message.win_score.length))
                        message.win_score = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.win_score.push(reader.sint64());
                    } else
                        message.win_score.push(reader.sint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("time_leave"))
                throw $util.ProtocolError("missing required 'time_leave'", { instance: message });
            if (!message.hasOwnProperty("win_area"))
                throw $util.ProtocolError("missing required 'win_area'", { instance: message });
            return message;
        };

        /**
         * Decodes a notify_open_cards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lhd.notify_open_cards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lhd.notify_open_cards} notify_open_cards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_open_cards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a notify_open_cards message.
         * @function verify
         * @memberof lhd.notify_open_cards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_open_cards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.time_leave))
                return "time_leave: integer expected";
            if (message.cards_data != null && message.hasOwnProperty("cards_data")) {
                if (!Array.isArray(message.cards_data))
                    return "cards_data: array expected";
                for (var i = 0; i < message.cards_data.length; ++i)
                    if (!$util.isInteger(message.cards_data[i]))
                        return "cards_data: integer[] expected";
            }
            if (!$util.isInteger(message.win_area))
                return "win_area: integer expected";
            if (message.win_score != null && message.hasOwnProperty("win_score")) {
                if (!Array.isArray(message.win_score))
                    return "win_score: array expected";
                for (var i = 0; i < message.win_score.length; ++i)
                    if (!$util.isInteger(message.win_score[i]) && !(message.win_score[i] && $util.isInteger(message.win_score[i].low) && $util.isInteger(message.win_score[i].high)))
                        return "win_score: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a notify_open_cards message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lhd.notify_open_cards
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lhd.notify_open_cards} notify_open_cards
         */
        notify_open_cards.fromObject = function fromObject(object) {
            if (object instanceof $root.lhd.notify_open_cards)
                return object;
            var message = new $root.lhd.notify_open_cards();
            if (object.time_leave != null)
                message.time_leave = object.time_leave >>> 0;
            if (object.cards_data) {
                if (!Array.isArray(object.cards_data))
                    throw TypeError(".lhd.notify_open_cards.cards_data: array expected");
                message.cards_data = [];
                for (var i = 0; i < object.cards_data.length; ++i)
                    message.cards_data[i] = object.cards_data[i] >>> 0;
            }
            if (object.win_area != null)
                message.win_area = object.win_area >>> 0;
            if (object.win_score) {
                if (!Array.isArray(object.win_score))
                    throw TypeError(".lhd.notify_open_cards.win_score: array expected");
                message.win_score = [];
                for (var i = 0; i < object.win_score.length; ++i)
                    if ($util.Long)
                        (message.win_score[i] = $util.Long.fromValue(object.win_score[i])).unsigned = false;
                    else if (typeof object.win_score[i] === "string")
                        message.win_score[i] = parseInt(object.win_score[i], 10);
                    else if (typeof object.win_score[i] === "number")
                        message.win_score[i] = object.win_score[i];
                    else if (typeof object.win_score[i] === "object")
                        message.win_score[i] = new $util.LongBits(object.win_score[i].low >>> 0, object.win_score[i].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from a notify_open_cards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lhd.notify_open_cards
         * @static
         * @param {lhd.notify_open_cards} message notify_open_cards
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_open_cards.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.cards_data = [];
                object.win_score = [];
            }
            if (options.defaults) {
                object.time_leave = 0;
                object.win_area = 0;
            }
            if (message.time_leave != null && message.hasOwnProperty("time_leave"))
                object.time_leave = message.time_leave;
            if (message.cards_data && message.cards_data.length) {
                object.cards_data = [];
                for (var j = 0; j < message.cards_data.length; ++j)
                    object.cards_data[j] = message.cards_data[j];
            }
            if (message.win_area != null && message.hasOwnProperty("win_area"))
                object.win_area = message.win_area;
            if (message.win_score && message.win_score.length) {
                object.win_score = [];
                for (var j = 0; j < message.win_score.length; ++j)
                    if (typeof message.win_score[j] === "number")
                        object.win_score[j] = options.longs === String ? String(message.win_score[j]) : message.win_score[j];
                    else
                        object.win_score[j] = options.longs === String ? $util.Long.prototype.toString.call(message.win_score[j]) : options.longs === Number ? new $util.LongBits(message.win_score[j].low >>> 0, message.win_score[j].high >>> 0).toNumber() : message.win_score[j];
            }
            return object;
        };

        /**
         * Converts this notify_open_cards to JSON.
         * @function toJSON
         * @memberof lhd.notify_open_cards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_open_cards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_open_cards;
    })();

    lhd.notify_game_free = (function() {

        /**
         * Properties of a notify_game_free.
         * @memberof lhd
         * @interface Inotify_game_free
         * @property {number} time_leave notify_game_free time_leave
         * @property {number} current_banker notify_game_free current_banker
         * @property {number|Long} banker_reserve_score notify_game_free banker_reserve_score
         * @property {number} banker_count notify_game_free banker_count
         */

        /**
         * Constructs a new notify_game_free.
         * @memberof lhd
         * @classdesc Represents a notify_game_free.
         * @implements Inotify_game_free
         * @constructor
         * @param {lhd.Inotify_game_free=} [properties] Properties to set
         */
        function notify_game_free(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_game_free time_leave.
         * @member {number} time_leave
         * @memberof lhd.notify_game_free
         * @instance
         */
        notify_game_free.prototype.time_leave = 0;

        /**
         * notify_game_free current_banker.
         * @member {number} current_banker
         * @memberof lhd.notify_game_free
         * @instance
         */
        notify_game_free.prototype.current_banker = 0;

        /**
         * notify_game_free banker_reserve_score.
         * @member {number|Long} banker_reserve_score
         * @memberof lhd.notify_game_free
         * @instance
         */
        notify_game_free.prototype.banker_reserve_score = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_game_free banker_count.
         * @member {number} banker_count
         * @memberof lhd.notify_game_free
         * @instance
         */
        notify_game_free.prototype.banker_count = 0;

        /**
         * Creates a new notify_game_free instance using the specified properties.
         * @function create
         * @memberof lhd.notify_game_free
         * @static
         * @param {lhd.Inotify_game_free=} [properties] Properties to set
         * @returns {lhd.notify_game_free} notify_game_free instance
         */
        notify_game_free.create = function create(properties) {
            return new notify_game_free(properties);
        };

        /**
         * Encodes the specified notify_game_free message. Does not implicitly {@link lhd.notify_game_free.verify|verify} messages.
         * @function encode
         * @memberof lhd.notify_game_free
         * @static
         * @param {lhd.Inotify_game_free} message notify_game_free message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_game_free.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.time_leave);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.current_banker);
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.banker_reserve_score);
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.banker_count);
            return writer;
        };

        /**
         * Encodes the specified notify_game_free message, length delimited. Does not implicitly {@link lhd.notify_game_free.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lhd.notify_game_free
         * @static
         * @param {lhd.Inotify_game_free} message notify_game_free message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_game_free.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_game_free message from the specified reader or buffer.
         * @function decode
         * @memberof lhd.notify_game_free
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lhd.notify_game_free} notify_game_free
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_game_free.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lhd.notify_game_free();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.time_leave = reader.uint32();
                    break;
                case 2:
                    message.current_banker = reader.uint32();
                    break;
                case 3:
                    message.banker_reserve_score = reader.uint64();
                    break;
                case 4:
                    message.banker_count = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("time_leave"))
                throw $util.ProtocolError("missing required 'time_leave'", { instance: message });
            if (!message.hasOwnProperty("current_banker"))
                throw $util.ProtocolError("missing required 'current_banker'", { instance: message });
            if (!message.hasOwnProperty("banker_reserve_score"))
                throw $util.ProtocolError("missing required 'banker_reserve_score'", { instance: message });
            if (!message.hasOwnProperty("banker_count"))
                throw $util.ProtocolError("missing required 'banker_count'", { instance: message });
            return message;
        };

        /**
         * Decodes a notify_game_free message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lhd.notify_game_free
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lhd.notify_game_free} notify_game_free
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_game_free.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a notify_game_free message.
         * @function verify
         * @memberof lhd.notify_game_free
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_game_free.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.time_leave))
                return "time_leave: integer expected";
            if (!$util.isInteger(message.current_banker))
                return "current_banker: integer expected";
            if (!$util.isInteger(message.banker_reserve_score) && !(message.banker_reserve_score && $util.isInteger(message.banker_reserve_score.low) && $util.isInteger(message.banker_reserve_score.high)))
                return "banker_reserve_score: integer|Long expected";
            if (!$util.isInteger(message.banker_count))
                return "banker_count: integer expected";
            return null;
        };

        /**
         * Creates a notify_game_free message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lhd.notify_game_free
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lhd.notify_game_free} notify_game_free
         */
        notify_game_free.fromObject = function fromObject(object) {
            if (object instanceof $root.lhd.notify_game_free)
                return object;
            var message = new $root.lhd.notify_game_free();
            if (object.time_leave != null)
                message.time_leave = object.time_leave >>> 0;
            if (object.current_banker != null)
                message.current_banker = object.current_banker >>> 0;
            if (object.banker_reserve_score != null)
                if ($util.Long)
                    (message.banker_reserve_score = $util.Long.fromValue(object.banker_reserve_score)).unsigned = true;
                else if (typeof object.banker_reserve_score === "string")
                    message.banker_reserve_score = parseInt(object.banker_reserve_score, 10);
                else if (typeof object.banker_reserve_score === "number")
                    message.banker_reserve_score = object.banker_reserve_score;
                else if (typeof object.banker_reserve_score === "object")
                    message.banker_reserve_score = new $util.LongBits(object.banker_reserve_score.low >>> 0, object.banker_reserve_score.high >>> 0).toNumber(true);
            if (object.banker_count != null)
                message.banker_count = object.banker_count >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a notify_game_free message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lhd.notify_game_free
         * @static
         * @param {lhd.notify_game_free} message notify_game_free
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_game_free.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.time_leave = 0;
                object.current_banker = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.banker_reserve_score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.banker_reserve_score = options.longs === String ? "0" : 0;
                object.banker_count = 0;
            }
            if (message.time_leave != null && message.hasOwnProperty("time_leave"))
                object.time_leave = message.time_leave;
            if (message.current_banker != null && message.hasOwnProperty("current_banker"))
                object.current_banker = message.current_banker;
            if (message.banker_reserve_score != null && message.hasOwnProperty("banker_reserve_score"))
                if (typeof message.banker_reserve_score === "number")
                    object.banker_reserve_score = options.longs === String ? String(message.banker_reserve_score) : message.banker_reserve_score;
                else
                    object.banker_reserve_score = options.longs === String ? $util.Long.prototype.toString.call(message.banker_reserve_score) : options.longs === Number ? new $util.LongBits(message.banker_reserve_score.low >>> 0, message.banker_reserve_score.high >>> 0).toNumber(true) : message.banker_reserve_score;
            if (message.banker_count != null && message.hasOwnProperty("banker_count"))
                object.banker_count = message.banker_count;
            return object;
        };

        /**
         * Converts this notify_game_free to JSON.
         * @function toJSON
         * @memberof lhd.notify_game_free
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_game_free.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_game_free;
    })();

    lhd.notify_cancel_banker = (function() {

        /**
         * Properties of a notify_cancel_banker.
         * @memberof lhd
         * @interface Inotify_cancel_banker
         * @property {number} cancel_chairid notify_cancel_banker cancel_chairid
         */

        /**
         * Constructs a new notify_cancel_banker.
         * @memberof lhd
         * @classdesc Represents a notify_cancel_banker.
         * @implements Inotify_cancel_banker
         * @constructor
         * @param {lhd.Inotify_cancel_banker=} [properties] Properties to set
         */
        function notify_cancel_banker(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_cancel_banker cancel_chairid.
         * @member {number} cancel_chairid
         * @memberof lhd.notify_cancel_banker
         * @instance
         */
        notify_cancel_banker.prototype.cancel_chairid = 0;

        /**
         * Creates a new notify_cancel_banker instance using the specified properties.
         * @function create
         * @memberof lhd.notify_cancel_banker
         * @static
         * @param {lhd.Inotify_cancel_banker=} [properties] Properties to set
         * @returns {lhd.notify_cancel_banker} notify_cancel_banker instance
         */
        notify_cancel_banker.create = function create(properties) {
            return new notify_cancel_banker(properties);
        };

        /**
         * Encodes the specified notify_cancel_banker message. Does not implicitly {@link lhd.notify_cancel_banker.verify|verify} messages.
         * @function encode
         * @memberof lhd.notify_cancel_banker
         * @static
         * @param {lhd.Inotify_cancel_banker} message notify_cancel_banker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_cancel_banker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.cancel_chairid);
            return writer;
        };

        /**
         * Encodes the specified notify_cancel_banker message, length delimited. Does not implicitly {@link lhd.notify_cancel_banker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lhd.notify_cancel_banker
         * @static
         * @param {lhd.Inotify_cancel_banker} message notify_cancel_banker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_cancel_banker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_cancel_banker message from the specified reader or buffer.
         * @function decode
         * @memberof lhd.notify_cancel_banker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lhd.notify_cancel_banker} notify_cancel_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_cancel_banker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lhd.notify_cancel_banker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cancel_chairid = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("cancel_chairid"))
                throw $util.ProtocolError("missing required 'cancel_chairid'", { instance: message });
            return message;
        };

        /**
         * Decodes a notify_cancel_banker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lhd.notify_cancel_banker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lhd.notify_cancel_banker} notify_cancel_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_cancel_banker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a notify_cancel_banker message.
         * @function verify
         * @memberof lhd.notify_cancel_banker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_cancel_banker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.cancel_chairid))
                return "cancel_chairid: integer expected";
            return null;
        };

        /**
         * Creates a notify_cancel_banker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lhd.notify_cancel_banker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lhd.notify_cancel_banker} notify_cancel_banker
         */
        notify_cancel_banker.fromObject = function fromObject(object) {
            if (object instanceof $root.lhd.notify_cancel_banker)
                return object;
            var message = new $root.lhd.notify_cancel_banker();
            if (object.cancel_chairid != null)
                message.cancel_chairid = object.cancel_chairid >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a notify_cancel_banker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lhd.notify_cancel_banker
         * @static
         * @param {lhd.notify_cancel_banker} message notify_cancel_banker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_cancel_banker.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.cancel_chairid = 0;
            if (message.cancel_chairid != null && message.hasOwnProperty("cancel_chairid"))
                object.cancel_chairid = message.cancel_chairid;
            return object;
        };

        /**
         * Converts this notify_cancel_banker to JSON.
         * @function toJSON
         * @memberof lhd.notify_cancel_banker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_cancel_banker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_cancel_banker;
    })();

    lhd.notify_apply_banker = (function() {

        /**
         * Properties of a notify_apply_banker.
         * @memberof lhd
         * @interface Inotify_apply_banker
         * @property {number} apply_chairid notify_apply_banker apply_chairid
         * @property {number|Long} reserve_score notify_apply_banker reserve_score
         */

        /**
         * Constructs a new notify_apply_banker.
         * @memberof lhd
         * @classdesc Represents a notify_apply_banker.
         * @implements Inotify_apply_banker
         * @constructor
         * @param {lhd.Inotify_apply_banker=} [properties] Properties to set
         */
        function notify_apply_banker(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_apply_banker apply_chairid.
         * @member {number} apply_chairid
         * @memberof lhd.notify_apply_banker
         * @instance
         */
        notify_apply_banker.prototype.apply_chairid = 0;

        /**
         * notify_apply_banker reserve_score.
         * @member {number|Long} reserve_score
         * @memberof lhd.notify_apply_banker
         * @instance
         */
        notify_apply_banker.prototype.reserve_score = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new notify_apply_banker instance using the specified properties.
         * @function create
         * @memberof lhd.notify_apply_banker
         * @static
         * @param {lhd.Inotify_apply_banker=} [properties] Properties to set
         * @returns {lhd.notify_apply_banker} notify_apply_banker instance
         */
        notify_apply_banker.create = function create(properties) {
            return new notify_apply_banker(properties);
        };

        /**
         * Encodes the specified notify_apply_banker message. Does not implicitly {@link lhd.notify_apply_banker.verify|verify} messages.
         * @function encode
         * @memberof lhd.notify_apply_banker
         * @static
         * @param {lhd.Inotify_apply_banker} message notify_apply_banker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_apply_banker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.apply_chairid);
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.reserve_score);
            return writer;
        };

        /**
         * Encodes the specified notify_apply_banker message, length delimited. Does not implicitly {@link lhd.notify_apply_banker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lhd.notify_apply_banker
         * @static
         * @param {lhd.Inotify_apply_banker} message notify_apply_banker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_apply_banker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_apply_banker message from the specified reader or buffer.
         * @function decode
         * @memberof lhd.notify_apply_banker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lhd.notify_apply_banker} notify_apply_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_apply_banker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lhd.notify_apply_banker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.apply_chairid = reader.uint32();
                    break;
                case 2:
                    message.reserve_score = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("apply_chairid"))
                throw $util.ProtocolError("missing required 'apply_chairid'", { instance: message });
            if (!message.hasOwnProperty("reserve_score"))
                throw $util.ProtocolError("missing required 'reserve_score'", { instance: message });
            return message;
        };

        /**
         * Decodes a notify_apply_banker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lhd.notify_apply_banker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lhd.notify_apply_banker} notify_apply_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_apply_banker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a notify_apply_banker message.
         * @function verify
         * @memberof lhd.notify_apply_banker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_apply_banker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.apply_chairid))
                return "apply_chairid: integer expected";
            if (!$util.isInteger(message.reserve_score) && !(message.reserve_score && $util.isInteger(message.reserve_score.low) && $util.isInteger(message.reserve_score.high)))
                return "reserve_score: integer|Long expected";
            return null;
        };

        /**
         * Creates a notify_apply_banker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lhd.notify_apply_banker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lhd.notify_apply_banker} notify_apply_banker
         */
        notify_apply_banker.fromObject = function fromObject(object) {
            if (object instanceof $root.lhd.notify_apply_banker)
                return object;
            var message = new $root.lhd.notify_apply_banker();
            if (object.apply_chairid != null)
                message.apply_chairid = object.apply_chairid >>> 0;
            if (object.reserve_score != null)
                if ($util.Long)
                    (message.reserve_score = $util.Long.fromValue(object.reserve_score)).unsigned = true;
                else if (typeof object.reserve_score === "string")
                    message.reserve_score = parseInt(object.reserve_score, 10);
                else if (typeof object.reserve_score === "number")
                    message.reserve_score = object.reserve_score;
                else if (typeof object.reserve_score === "object")
                    message.reserve_score = new $util.LongBits(object.reserve_score.low >>> 0, object.reserve_score.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a notify_apply_banker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lhd.notify_apply_banker
         * @static
         * @param {lhd.notify_apply_banker} message notify_apply_banker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_apply_banker.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.apply_chairid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.reserve_score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.reserve_score = options.longs === String ? "0" : 0;
            }
            if (message.apply_chairid != null && message.hasOwnProperty("apply_chairid"))
                object.apply_chairid = message.apply_chairid;
            if (message.reserve_score != null && message.hasOwnProperty("reserve_score"))
                if (typeof message.reserve_score === "number")
                    object.reserve_score = options.longs === String ? String(message.reserve_score) : message.reserve_score;
                else
                    object.reserve_score = options.longs === String ? $util.Long.prototype.toString.call(message.reserve_score) : options.longs === Number ? new $util.LongBits(message.reserve_score.low >>> 0, message.reserve_score.high >>> 0).toNumber(true) : message.reserve_score;
            return object;
        };

        /**
         * Converts this notify_apply_banker to JSON.
         * @function toJSON
         * @memberof lhd.notify_apply_banker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_apply_banker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_apply_banker;
    })();

    lhd.notify_change_banker = (function() {

        /**
         * Properties of a notify_change_banker.
         * @memberof lhd
         * @interface Inotify_change_banker
         * @property {number} current_banker notify_change_banker current_banker
         * @property {number|Long} banker_reserve_score notify_change_banker banker_reserve_score
         * @property {number} banker_count notify_change_banker banker_count
         * @property {string|null} [reason] notify_change_banker reason
         */

        /**
         * Constructs a new notify_change_banker.
         * @memberof lhd
         * @classdesc Represents a notify_change_banker.
         * @implements Inotify_change_banker
         * @constructor
         * @param {lhd.Inotify_change_banker=} [properties] Properties to set
         */
        function notify_change_banker(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_change_banker current_banker.
         * @member {number} current_banker
         * @memberof lhd.notify_change_banker
         * @instance
         */
        notify_change_banker.prototype.current_banker = 0;

        /**
         * notify_change_banker banker_reserve_score.
         * @member {number|Long} banker_reserve_score
         * @memberof lhd.notify_change_banker
         * @instance
         */
        notify_change_banker.prototype.banker_reserve_score = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_change_banker banker_count.
         * @member {number} banker_count
         * @memberof lhd.notify_change_banker
         * @instance
         */
        notify_change_banker.prototype.banker_count = 0;

        /**
         * notify_change_banker reason.
         * @member {string} reason
         * @memberof lhd.notify_change_banker
         * @instance
         */
        notify_change_banker.prototype.reason = "";

        /**
         * Creates a new notify_change_banker instance using the specified properties.
         * @function create
         * @memberof lhd.notify_change_banker
         * @static
         * @param {lhd.Inotify_change_banker=} [properties] Properties to set
         * @returns {lhd.notify_change_banker} notify_change_banker instance
         */
        notify_change_banker.create = function create(properties) {
            return new notify_change_banker(properties);
        };

        /**
         * Encodes the specified notify_change_banker message. Does not implicitly {@link lhd.notify_change_banker.verify|verify} messages.
         * @function encode
         * @memberof lhd.notify_change_banker
         * @static
         * @param {lhd.Inotify_change_banker} message notify_change_banker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_change_banker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.current_banker);
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.banker_reserve_score);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.banker_count);
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.reason);
            return writer;
        };

        /**
         * Encodes the specified notify_change_banker message, length delimited. Does not implicitly {@link lhd.notify_change_banker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lhd.notify_change_banker
         * @static
         * @param {lhd.Inotify_change_banker} message notify_change_banker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_change_banker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_change_banker message from the specified reader or buffer.
         * @function decode
         * @memberof lhd.notify_change_banker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lhd.notify_change_banker} notify_change_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_change_banker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lhd.notify_change_banker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.current_banker = reader.uint32();
                    break;
                case 2:
                    message.banker_reserve_score = reader.uint64();
                    break;
                case 3:
                    message.banker_count = reader.uint32();
                    break;
                case 4:
                    message.reason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("current_banker"))
                throw $util.ProtocolError("missing required 'current_banker'", { instance: message });
            if (!message.hasOwnProperty("banker_reserve_score"))
                throw $util.ProtocolError("missing required 'banker_reserve_score'", { instance: message });
            if (!message.hasOwnProperty("banker_count"))
                throw $util.ProtocolError("missing required 'banker_count'", { instance: message });
            return message;
        };

        /**
         * Decodes a notify_change_banker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lhd.notify_change_banker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lhd.notify_change_banker} notify_change_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_change_banker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a notify_change_banker message.
         * @function verify
         * @memberof lhd.notify_change_banker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_change_banker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.current_banker))
                return "current_banker: integer expected";
            if (!$util.isInteger(message.banker_reserve_score) && !(message.banker_reserve_score && $util.isInteger(message.banker_reserve_score.low) && $util.isInteger(message.banker_reserve_score.high)))
                return "banker_reserve_score: integer|Long expected";
            if (!$util.isInteger(message.banker_count))
                return "banker_count: integer expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            return null;
        };

        /**
         * Creates a notify_change_banker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lhd.notify_change_banker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lhd.notify_change_banker} notify_change_banker
         */
        notify_change_banker.fromObject = function fromObject(object) {
            if (object instanceof $root.lhd.notify_change_banker)
                return object;
            var message = new $root.lhd.notify_change_banker();
            if (object.current_banker != null)
                message.current_banker = object.current_banker >>> 0;
            if (object.banker_reserve_score != null)
                if ($util.Long)
                    (message.banker_reserve_score = $util.Long.fromValue(object.banker_reserve_score)).unsigned = true;
                else if (typeof object.banker_reserve_score === "string")
                    message.banker_reserve_score = parseInt(object.banker_reserve_score, 10);
                else if (typeof object.banker_reserve_score === "number")
                    message.banker_reserve_score = object.banker_reserve_score;
                else if (typeof object.banker_reserve_score === "object")
                    message.banker_reserve_score = new $util.LongBits(object.banker_reserve_score.low >>> 0, object.banker_reserve_score.high >>> 0).toNumber(true);
            if (object.banker_count != null)
                message.banker_count = object.banker_count >>> 0;
            if (object.reason != null)
                message.reason = String(object.reason);
            return message;
        };

        /**
         * Creates a plain object from a notify_change_banker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lhd.notify_change_banker
         * @static
         * @param {lhd.notify_change_banker} message notify_change_banker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_change_banker.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.current_banker = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.banker_reserve_score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.banker_reserve_score = options.longs === String ? "0" : 0;
                object.banker_count = 0;
                object.reason = "";
            }
            if (message.current_banker != null && message.hasOwnProperty("current_banker"))
                object.current_banker = message.current_banker;
            if (message.banker_reserve_score != null && message.hasOwnProperty("banker_reserve_score"))
                if (typeof message.banker_reserve_score === "number")
                    object.banker_reserve_score = options.longs === String ? String(message.banker_reserve_score) : message.banker_reserve_score;
                else
                    object.banker_reserve_score = options.longs === String ? $util.Long.prototype.toString.call(message.banker_reserve_score) : options.longs === Number ? new $util.LongBits(message.banker_reserve_score.low >>> 0, message.banker_reserve_score.high >>> 0).toNumber(true) : message.banker_reserve_score;
            if (message.banker_count != null && message.hasOwnProperty("banker_count"))
                object.banker_count = message.banker_count;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            return object;
        };

        /**
         * Converts this notify_change_banker to JSON.
         * @function toJSON
         * @memberof lhd.notify_change_banker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_change_banker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_change_banker;
    })();

    lhd.notify_top_players = (function() {

        /**
         * Properties of a notify_top_players.
         * @memberof lhd
         * @interface Inotify_top_players
         * @property {Array.<number>|null} [chairids] notify_top_players chairids
         */

        /**
         * Constructs a new notify_top_players.
         * @memberof lhd
         * @classdesc Represents a notify_top_players.
         * @implements Inotify_top_players
         * @constructor
         * @param {lhd.Inotify_top_players=} [properties] Properties to set
         */
        function notify_top_players(properties) {
            this.chairids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_top_players chairids.
         * @member {Array.<number>} chairids
         * @memberof lhd.notify_top_players
         * @instance
         */
        notify_top_players.prototype.chairids = $util.emptyArray;

        /**
         * Creates a new notify_top_players instance using the specified properties.
         * @function create
         * @memberof lhd.notify_top_players
         * @static
         * @param {lhd.Inotify_top_players=} [properties] Properties to set
         * @returns {lhd.notify_top_players} notify_top_players instance
         */
        notify_top_players.create = function create(properties) {
            return new notify_top_players(properties);
        };

        /**
         * Encodes the specified notify_top_players message. Does not implicitly {@link lhd.notify_top_players.verify|verify} messages.
         * @function encode
         * @memberof lhd.notify_top_players
         * @static
         * @param {lhd.Inotify_top_players} message notify_top_players message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_top_players.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chairids != null && message.chairids.length)
                for (var i = 0; i < message.chairids.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.chairids[i]);
            return writer;
        };

        /**
         * Encodes the specified notify_top_players message, length delimited. Does not implicitly {@link lhd.notify_top_players.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lhd.notify_top_players
         * @static
         * @param {lhd.Inotify_top_players} message notify_top_players message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_top_players.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_top_players message from the specified reader or buffer.
         * @function decode
         * @memberof lhd.notify_top_players
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lhd.notify_top_players} notify_top_players
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_top_players.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lhd.notify_top_players();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.chairids && message.chairids.length))
                        message.chairids = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.chairids.push(reader.uint32());
                    } else
                        message.chairids.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a notify_top_players message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lhd.notify_top_players
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lhd.notify_top_players} notify_top_players
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_top_players.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a notify_top_players message.
         * @function verify
         * @memberof lhd.notify_top_players
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_top_players.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chairids != null && message.hasOwnProperty("chairids")) {
                if (!Array.isArray(message.chairids))
                    return "chairids: array expected";
                for (var i = 0; i < message.chairids.length; ++i)
                    if (!$util.isInteger(message.chairids[i]))
                        return "chairids: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a notify_top_players message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lhd.notify_top_players
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lhd.notify_top_players} notify_top_players
         */
        notify_top_players.fromObject = function fromObject(object) {
            if (object instanceof $root.lhd.notify_top_players)
                return object;
            var message = new $root.lhd.notify_top_players();
            if (object.chairids) {
                if (!Array.isArray(object.chairids))
                    throw TypeError(".lhd.notify_top_players.chairids: array expected");
                message.chairids = [];
                for (var i = 0; i < object.chairids.length; ++i)
                    message.chairids[i] = object.chairids[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a notify_top_players message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lhd.notify_top_players
         * @static
         * @param {lhd.notify_top_players} message notify_top_players
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_top_players.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.chairids = [];
            if (message.chairids && message.chairids.length) {
                object.chairids = [];
                for (var j = 0; j < message.chairids.length; ++j)
                    object.chairids[j] = message.chairids[j];
            }
            return object;
        };

        /**
         * Converts this notify_top_players to JSON.
         * @function toJSON
         * @memberof lhd.notify_top_players
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_top_players.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_top_players;
    })();

    lhd.user_list_item = (function() {

        /**
         * Properties of a user_list_item.
         * @memberof lhd
         * @interface Iuser_list_item
         * @property {number} chairid user_list_item chairid
         * @property {number|Long} bet_score user_list_item bet_score
         * @property {number} win_count user_list_item win_count
         */

        /**
         * Constructs a new user_list_item.
         * @memberof lhd
         * @classdesc Represents a user_list_item.
         * @implements Iuser_list_item
         * @constructor
         * @param {lhd.Iuser_list_item=} [properties] Properties to set
         */
        function user_list_item(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * user_list_item chairid.
         * @member {number} chairid
         * @memberof lhd.user_list_item
         * @instance
         */
        user_list_item.prototype.chairid = 0;

        /**
         * user_list_item bet_score.
         * @member {number|Long} bet_score
         * @memberof lhd.user_list_item
         * @instance
         */
        user_list_item.prototype.bet_score = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * user_list_item win_count.
         * @member {number} win_count
         * @memberof lhd.user_list_item
         * @instance
         */
        user_list_item.prototype.win_count = 0;

        /**
         * Creates a new user_list_item instance using the specified properties.
         * @function create
         * @memberof lhd.user_list_item
         * @static
         * @param {lhd.Iuser_list_item=} [properties] Properties to set
         * @returns {lhd.user_list_item} user_list_item instance
         */
        user_list_item.create = function create(properties) {
            return new user_list_item(properties);
        };

        /**
         * Encodes the specified user_list_item message. Does not implicitly {@link lhd.user_list_item.verify|verify} messages.
         * @function encode
         * @memberof lhd.user_list_item
         * @static
         * @param {lhd.Iuser_list_item} message user_list_item message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_list_item.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.chairid);
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.bet_score);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.win_count);
            return writer;
        };

        /**
         * Encodes the specified user_list_item message, length delimited. Does not implicitly {@link lhd.user_list_item.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lhd.user_list_item
         * @static
         * @param {lhd.Iuser_list_item} message user_list_item message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_list_item.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a user_list_item message from the specified reader or buffer.
         * @function decode
         * @memberof lhd.user_list_item
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lhd.user_list_item} user_list_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_list_item.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lhd.user_list_item();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chairid = reader.uint32();
                    break;
                case 2:
                    message.bet_score = reader.uint64();
                    break;
                case 3:
                    message.win_count = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("chairid"))
                throw $util.ProtocolError("missing required 'chairid'", { instance: message });
            if (!message.hasOwnProperty("bet_score"))
                throw $util.ProtocolError("missing required 'bet_score'", { instance: message });
            if (!message.hasOwnProperty("win_count"))
                throw $util.ProtocolError("missing required 'win_count'", { instance: message });
            return message;
        };

        /**
         * Decodes a user_list_item message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lhd.user_list_item
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lhd.user_list_item} user_list_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_list_item.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a user_list_item message.
         * @function verify
         * @memberof lhd.user_list_item
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        user_list_item.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.chairid))
                return "chairid: integer expected";
            if (!$util.isInteger(message.bet_score) && !(message.bet_score && $util.isInteger(message.bet_score.low) && $util.isInteger(message.bet_score.high)))
                return "bet_score: integer|Long expected";
            if (!$util.isInteger(message.win_count))
                return "win_count: integer expected";
            return null;
        };

        /**
         * Creates a user_list_item message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lhd.user_list_item
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lhd.user_list_item} user_list_item
         */
        user_list_item.fromObject = function fromObject(object) {
            if (object instanceof $root.lhd.user_list_item)
                return object;
            var message = new $root.lhd.user_list_item();
            if (object.chairid != null)
                message.chairid = object.chairid >>> 0;
            if (object.bet_score != null)
                if ($util.Long)
                    (message.bet_score = $util.Long.fromValue(object.bet_score)).unsigned = true;
                else if (typeof object.bet_score === "string")
                    message.bet_score = parseInt(object.bet_score, 10);
                else if (typeof object.bet_score === "number")
                    message.bet_score = object.bet_score;
                else if (typeof object.bet_score === "object")
                    message.bet_score = new $util.LongBits(object.bet_score.low >>> 0, object.bet_score.high >>> 0).toNumber(true);
            if (object.win_count != null)
                message.win_count = object.win_count >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a user_list_item message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lhd.user_list_item
         * @static
         * @param {lhd.user_list_item} message user_list_item
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        user_list_item.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.chairid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bet_score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bet_score = options.longs === String ? "0" : 0;
                object.win_count = 0;
            }
            if (message.chairid != null && message.hasOwnProperty("chairid"))
                object.chairid = message.chairid;
            if (message.bet_score != null && message.hasOwnProperty("bet_score"))
                if (typeof message.bet_score === "number")
                    object.bet_score = options.longs === String ? String(message.bet_score) : message.bet_score;
                else
                    object.bet_score = options.longs === String ? $util.Long.prototype.toString.call(message.bet_score) : options.longs === Number ? new $util.LongBits(message.bet_score.low >>> 0, message.bet_score.high >>> 0).toNumber(true) : message.bet_score;
            if (message.win_count != null && message.hasOwnProperty("win_count"))
                object.win_count = message.win_count;
            return object;
        };

        /**
         * Converts this user_list_item to JSON.
         * @function toJSON
         * @memberof lhd.user_list_item
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        user_list_item.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return user_list_item;
    })();

    lhd.notify_user_list = (function() {

        /**
         * Properties of a notify_user_list.
         * @memberof lhd
         * @interface Inotify_user_list
         * @property {Array.<lhd.Iuser_list_item>|null} [users] notify_user_list users
         */

        /**
         * Constructs a new notify_user_list.
         * @memberof lhd
         * @classdesc Represents a notify_user_list.
         * @implements Inotify_user_list
         * @constructor
         * @param {lhd.Inotify_user_list=} [properties] Properties to set
         */
        function notify_user_list(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_user_list users.
         * @member {Array.<lhd.Iuser_list_item>} users
         * @memberof lhd.notify_user_list
         * @instance
         */
        notify_user_list.prototype.users = $util.emptyArray;

        /**
         * Creates a new notify_user_list instance using the specified properties.
         * @function create
         * @memberof lhd.notify_user_list
         * @static
         * @param {lhd.Inotify_user_list=} [properties] Properties to set
         * @returns {lhd.notify_user_list} notify_user_list instance
         */
        notify_user_list.create = function create(properties) {
            return new notify_user_list(properties);
        };

        /**
         * Encodes the specified notify_user_list message. Does not implicitly {@link lhd.notify_user_list.verify|verify} messages.
         * @function encode
         * @memberof lhd.notify_user_list
         * @static
         * @param {lhd.Inotify_user_list} message notify_user_list message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_user_list.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.lhd.user_list_item.encode(message.users[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified notify_user_list message, length delimited. Does not implicitly {@link lhd.notify_user_list.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lhd.notify_user_list
         * @static
         * @param {lhd.Inotify_user_list} message notify_user_list message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_user_list.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_user_list message from the specified reader or buffer.
         * @function decode
         * @memberof lhd.notify_user_list
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lhd.notify_user_list} notify_user_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_user_list.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lhd.notify_user_list();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.lhd.user_list_item.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a notify_user_list message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lhd.notify_user_list
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lhd.notify_user_list} notify_user_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_user_list.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a notify_user_list message.
         * @function verify
         * @memberof lhd.notify_user_list
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_user_list.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.lhd.user_list_item.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a notify_user_list message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lhd.notify_user_list
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lhd.notify_user_list} notify_user_list
         */
        notify_user_list.fromObject = function fromObject(object) {
            if (object instanceof $root.lhd.notify_user_list)
                return object;
            var message = new $root.lhd.notify_user_list();
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".lhd.notify_user_list.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".lhd.notify_user_list.users: object expected");
                    message.users[i] = $root.lhd.user_list_item.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a notify_user_list message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lhd.notify_user_list
         * @static
         * @param {lhd.notify_user_list} message notify_user_list
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_user_list.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.lhd.user_list_item.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this notify_user_list to JSON.
         * @function toJSON
         * @memberof lhd.notify_user_list
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_user_list.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_user_list;
    })();

    lhd.notify_apply_list = (function() {

        /**
         * Properties of a notify_apply_list.
         * @memberof lhd
         * @interface Inotify_apply_list
         * @property {Array.<lhd.Inotify_apply_banker>|null} [apply_list] notify_apply_list apply_list
         */

        /**
         * Constructs a new notify_apply_list.
         * @memberof lhd
         * @classdesc Represents a notify_apply_list.
         * @implements Inotify_apply_list
         * @constructor
         * @param {lhd.Inotify_apply_list=} [properties] Properties to set
         */
        function notify_apply_list(properties) {
            this.apply_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_apply_list apply_list.
         * @member {Array.<lhd.Inotify_apply_banker>} apply_list
         * @memberof lhd.notify_apply_list
         * @instance
         */
        notify_apply_list.prototype.apply_list = $util.emptyArray;

        /**
         * Creates a new notify_apply_list instance using the specified properties.
         * @function create
         * @memberof lhd.notify_apply_list
         * @static
         * @param {lhd.Inotify_apply_list=} [properties] Properties to set
         * @returns {lhd.notify_apply_list} notify_apply_list instance
         */
        notify_apply_list.create = function create(properties) {
            return new notify_apply_list(properties);
        };

        /**
         * Encodes the specified notify_apply_list message. Does not implicitly {@link lhd.notify_apply_list.verify|verify} messages.
         * @function encode
         * @memberof lhd.notify_apply_list
         * @static
         * @param {lhd.Inotify_apply_list} message notify_apply_list message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_apply_list.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.apply_list != null && message.apply_list.length)
                for (var i = 0; i < message.apply_list.length; ++i)
                    $root.lhd.notify_apply_banker.encode(message.apply_list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified notify_apply_list message, length delimited. Does not implicitly {@link lhd.notify_apply_list.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lhd.notify_apply_list
         * @static
         * @param {lhd.Inotify_apply_list} message notify_apply_list message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_apply_list.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_apply_list message from the specified reader or buffer.
         * @function decode
         * @memberof lhd.notify_apply_list
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lhd.notify_apply_list} notify_apply_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_apply_list.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lhd.notify_apply_list();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.apply_list && message.apply_list.length))
                        message.apply_list = [];
                    message.apply_list.push($root.lhd.notify_apply_banker.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a notify_apply_list message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lhd.notify_apply_list
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lhd.notify_apply_list} notify_apply_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_apply_list.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a notify_apply_list message.
         * @function verify
         * @memberof lhd.notify_apply_list
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_apply_list.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.apply_list != null && message.hasOwnProperty("apply_list")) {
                if (!Array.isArray(message.apply_list))
                    return "apply_list: array expected";
                for (var i = 0; i < message.apply_list.length; ++i) {
                    var error = $root.lhd.notify_apply_banker.verify(message.apply_list[i]);
                    if (error)
                        return "apply_list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a notify_apply_list message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lhd.notify_apply_list
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lhd.notify_apply_list} notify_apply_list
         */
        notify_apply_list.fromObject = function fromObject(object) {
            if (object instanceof $root.lhd.notify_apply_list)
                return object;
            var message = new $root.lhd.notify_apply_list();
            if (object.apply_list) {
                if (!Array.isArray(object.apply_list))
                    throw TypeError(".lhd.notify_apply_list.apply_list: array expected");
                message.apply_list = [];
                for (var i = 0; i < object.apply_list.length; ++i) {
                    if (typeof object.apply_list[i] !== "object")
                        throw TypeError(".lhd.notify_apply_list.apply_list: object expected");
                    message.apply_list[i] = $root.lhd.notify_apply_banker.fromObject(object.apply_list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a notify_apply_list message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lhd.notify_apply_list
         * @static
         * @param {lhd.notify_apply_list} message notify_apply_list
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_apply_list.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.apply_list = [];
            if (message.apply_list && message.apply_list.length) {
                object.apply_list = [];
                for (var j = 0; j < message.apply_list.length; ++j)
                    object.apply_list[j] = $root.lhd.notify_apply_banker.toObject(message.apply_list[j], options);
            }
            return object;
        };

        /**
         * Converts this notify_apply_list to JSON.
         * @function toJSON
         * @memberof lhd.notify_apply_list
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_apply_list.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_apply_list;
    })();

    lhd.notify_game_records = (function() {

        /**
         * Properties of a notify_game_records.
         * @memberof lhd
         * @interface Inotify_game_records
         * @property {Array.<number>|null} [records] notify_game_records records
         */

        /**
         * Constructs a new notify_game_records.
         * @memberof lhd
         * @classdesc Represents a notify_game_records.
         * @implements Inotify_game_records
         * @constructor
         * @param {lhd.Inotify_game_records=} [properties] Properties to set
         */
        function notify_game_records(properties) {
            this.records = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_game_records records.
         * @member {Array.<number>} records
         * @memberof lhd.notify_game_records
         * @instance
         */
        notify_game_records.prototype.records = $util.emptyArray;

        /**
         * Creates a new notify_game_records instance using the specified properties.
         * @function create
         * @memberof lhd.notify_game_records
         * @static
         * @param {lhd.Inotify_game_records=} [properties] Properties to set
         * @returns {lhd.notify_game_records} notify_game_records instance
         */
        notify_game_records.create = function create(properties) {
            return new notify_game_records(properties);
        };

        /**
         * Encodes the specified notify_game_records message. Does not implicitly {@link lhd.notify_game_records.verify|verify} messages.
         * @function encode
         * @memberof lhd.notify_game_records
         * @static
         * @param {lhd.Inotify_game_records} message notify_game_records message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_game_records.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.records != null && message.records.length)
                for (var i = 0; i < message.records.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.records[i]);
            return writer;
        };

        /**
         * Encodes the specified notify_game_records message, length delimited. Does not implicitly {@link lhd.notify_game_records.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lhd.notify_game_records
         * @static
         * @param {lhd.Inotify_game_records} message notify_game_records message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_game_records.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_game_records message from the specified reader or buffer.
         * @function decode
         * @memberof lhd.notify_game_records
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lhd.notify_game_records} notify_game_records
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_game_records.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lhd.notify_game_records();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.records && message.records.length))
                        message.records = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.records.push(reader.uint32());
                    } else
                        message.records.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a notify_game_records message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lhd.notify_game_records
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lhd.notify_game_records} notify_game_records
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_game_records.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a notify_game_records message.
         * @function verify
         * @memberof lhd.notify_game_records
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_game_records.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.records != null && message.hasOwnProperty("records")) {
                if (!Array.isArray(message.records))
                    return "records: array expected";
                for (var i = 0; i < message.records.length; ++i)
                    if (!$util.isInteger(message.records[i]))
                        return "records: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a notify_game_records message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lhd.notify_game_records
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lhd.notify_game_records} notify_game_records
         */
        notify_game_records.fromObject = function fromObject(object) {
            if (object instanceof $root.lhd.notify_game_records)
                return object;
            var message = new $root.lhd.notify_game_records();
            if (object.records) {
                if (!Array.isArray(object.records))
                    throw TypeError(".lhd.notify_game_records.records: array expected");
                message.records = [];
                for (var i = 0; i < object.records.length; ++i)
                    message.records[i] = object.records[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a notify_game_records message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lhd.notify_game_records
         * @static
         * @param {lhd.notify_game_records} message notify_game_records
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_game_records.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.records = [];
            if (message.records && message.records.length) {
                object.records = [];
                for (var j = 0; j < message.records.length; ++j)
                    object.records[j] = message.records[j];
            }
            return object;
        };

        /**
         * Converts this notify_game_records to JSON.
         * @function toJSON
         * @memberof lhd.notify_game_records
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_game_records.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_game_records;
    })();

    lhd.notify_bet_chips = (function() {

        /**
         * Properties of a notify_bet_chips.
         * @memberof lhd
         * @interface Inotify_bet_chips
         * @property {Array.<lhd.Inotify_bet>|null} [bet_chips] notify_bet_chips bet_chips
         */

        /**
         * Constructs a new notify_bet_chips.
         * @memberof lhd
         * @classdesc Represents a notify_bet_chips.
         * @implements Inotify_bet_chips
         * @constructor
         * @param {lhd.Inotify_bet_chips=} [properties] Properties to set
         */
        function notify_bet_chips(properties) {
            this.bet_chips = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_bet_chips bet_chips.
         * @member {Array.<lhd.Inotify_bet>} bet_chips
         * @memberof lhd.notify_bet_chips
         * @instance
         */
        notify_bet_chips.prototype.bet_chips = $util.emptyArray;

        /**
         * Creates a new notify_bet_chips instance using the specified properties.
         * @function create
         * @memberof lhd.notify_bet_chips
         * @static
         * @param {lhd.Inotify_bet_chips=} [properties] Properties to set
         * @returns {lhd.notify_bet_chips} notify_bet_chips instance
         */
        notify_bet_chips.create = function create(properties) {
            return new notify_bet_chips(properties);
        };

        /**
         * Encodes the specified notify_bet_chips message. Does not implicitly {@link lhd.notify_bet_chips.verify|verify} messages.
         * @function encode
         * @memberof lhd.notify_bet_chips
         * @static
         * @param {lhd.Inotify_bet_chips} message notify_bet_chips message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_bet_chips.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bet_chips != null && message.bet_chips.length)
                for (var i = 0; i < message.bet_chips.length; ++i)
                    $root.lhd.notify_bet.encode(message.bet_chips[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified notify_bet_chips message, length delimited. Does not implicitly {@link lhd.notify_bet_chips.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lhd.notify_bet_chips
         * @static
         * @param {lhd.Inotify_bet_chips} message notify_bet_chips message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_bet_chips.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_bet_chips message from the specified reader or buffer.
         * @function decode
         * @memberof lhd.notify_bet_chips
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lhd.notify_bet_chips} notify_bet_chips
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_bet_chips.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lhd.notify_bet_chips();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.bet_chips && message.bet_chips.length))
                        message.bet_chips = [];
                    message.bet_chips.push($root.lhd.notify_bet.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a notify_bet_chips message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lhd.notify_bet_chips
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lhd.notify_bet_chips} notify_bet_chips
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_bet_chips.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a notify_bet_chips message.
         * @function verify
         * @memberof lhd.notify_bet_chips
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_bet_chips.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bet_chips != null && message.hasOwnProperty("bet_chips")) {
                if (!Array.isArray(message.bet_chips))
                    return "bet_chips: array expected";
                for (var i = 0; i < message.bet_chips.length; ++i) {
                    var error = $root.lhd.notify_bet.verify(message.bet_chips[i]);
                    if (error)
                        return "bet_chips." + error;
                }
            }
            return null;
        };

        /**
         * Creates a notify_bet_chips message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lhd.notify_bet_chips
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lhd.notify_bet_chips} notify_bet_chips
         */
        notify_bet_chips.fromObject = function fromObject(object) {
            if (object instanceof $root.lhd.notify_bet_chips)
                return object;
            var message = new $root.lhd.notify_bet_chips();
            if (object.bet_chips) {
                if (!Array.isArray(object.bet_chips))
                    throw TypeError(".lhd.notify_bet_chips.bet_chips: array expected");
                message.bet_chips = [];
                for (var i = 0; i < object.bet_chips.length; ++i) {
                    if (typeof object.bet_chips[i] !== "object")
                        throw TypeError(".lhd.notify_bet_chips.bet_chips: object expected");
                    message.bet_chips[i] = $root.lhd.notify_bet.fromObject(object.bet_chips[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a notify_bet_chips message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lhd.notify_bet_chips
         * @static
         * @param {lhd.notify_bet_chips} message notify_bet_chips
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_bet_chips.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.bet_chips = [];
            if (message.bet_chips && message.bet_chips.length) {
                object.bet_chips = [];
                for (var j = 0; j < message.bet_chips.length; ++j)
                    object.bet_chips[j] = $root.lhd.notify_bet.toObject(message.bet_chips[j], options);
            }
            return object;
        };

        /**
         * Converts this notify_bet_chips to JSON.
         * @function toJSON
         * @memberof lhd.notify_bet_chips
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_bet_chips.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_bet_chips;
    })();

    lhd.request_bet = (function() {

        /**
         * Properties of a request_bet.
         * @memberof lhd
         * @interface Irequest_bet
         * @property {number|Long} bet_score request_bet bet_score
         * @property {number} bet_area request_bet bet_area
         */

        /**
         * Constructs a new request_bet.
         * @memberof lhd
         * @classdesc Represents a request_bet.
         * @implements Irequest_bet
         * @constructor
         * @param {lhd.Irequest_bet=} [properties] Properties to set
         */
        function request_bet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * request_bet bet_score.
         * @member {number|Long} bet_score
         * @memberof lhd.request_bet
         * @instance
         */
        request_bet.prototype.bet_score = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * request_bet bet_area.
         * @member {number} bet_area
         * @memberof lhd.request_bet
         * @instance
         */
        request_bet.prototype.bet_area = 0;

        /**
         * Creates a new request_bet instance using the specified properties.
         * @function create
         * @memberof lhd.request_bet
         * @static
         * @param {lhd.Irequest_bet=} [properties] Properties to set
         * @returns {lhd.request_bet} request_bet instance
         */
        request_bet.create = function create(properties) {
            return new request_bet(properties);
        };

        /**
         * Encodes the specified request_bet message. Does not implicitly {@link lhd.request_bet.verify|verify} messages.
         * @function encode
         * @memberof lhd.request_bet
         * @static
         * @param {lhd.Irequest_bet} message request_bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        request_bet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.bet_score);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.bet_area);
            return writer;
        };

        /**
         * Encodes the specified request_bet message, length delimited. Does not implicitly {@link lhd.request_bet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lhd.request_bet
         * @static
         * @param {lhd.Irequest_bet} message request_bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        request_bet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a request_bet message from the specified reader or buffer.
         * @function decode
         * @memberof lhd.request_bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lhd.request_bet} request_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        request_bet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lhd.request_bet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bet_score = reader.uint64();
                    break;
                case 2:
                    message.bet_area = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("bet_score"))
                throw $util.ProtocolError("missing required 'bet_score'", { instance: message });
            if (!message.hasOwnProperty("bet_area"))
                throw $util.ProtocolError("missing required 'bet_area'", { instance: message });
            return message;
        };

        /**
         * Decodes a request_bet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lhd.request_bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lhd.request_bet} request_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        request_bet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a request_bet message.
         * @function verify
         * @memberof lhd.request_bet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        request_bet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.bet_score) && !(message.bet_score && $util.isInteger(message.bet_score.low) && $util.isInteger(message.bet_score.high)))
                return "bet_score: integer|Long expected";
            if (!$util.isInteger(message.bet_area))
                return "bet_area: integer expected";
            return null;
        };

        /**
         * Creates a request_bet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lhd.request_bet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lhd.request_bet} request_bet
         */
        request_bet.fromObject = function fromObject(object) {
            if (object instanceof $root.lhd.request_bet)
                return object;
            var message = new $root.lhd.request_bet();
            if (object.bet_score != null)
                if ($util.Long)
                    (message.bet_score = $util.Long.fromValue(object.bet_score)).unsigned = true;
                else if (typeof object.bet_score === "string")
                    message.bet_score = parseInt(object.bet_score, 10);
                else if (typeof object.bet_score === "number")
                    message.bet_score = object.bet_score;
                else if (typeof object.bet_score === "object")
                    message.bet_score = new $util.LongBits(object.bet_score.low >>> 0, object.bet_score.high >>> 0).toNumber(true);
            if (object.bet_area != null)
                message.bet_area = object.bet_area >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a request_bet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lhd.request_bet
         * @static
         * @param {lhd.request_bet} message request_bet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        request_bet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bet_score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bet_score = options.longs === String ? "0" : 0;
                object.bet_area = 0;
            }
            if (message.bet_score != null && message.hasOwnProperty("bet_score"))
                if (typeof message.bet_score === "number")
                    object.bet_score = options.longs === String ? String(message.bet_score) : message.bet_score;
                else
                    object.bet_score = options.longs === String ? $util.Long.prototype.toString.call(message.bet_score) : options.longs === Number ? new $util.LongBits(message.bet_score.low >>> 0, message.bet_score.high >>> 0).toNumber(true) : message.bet_score;
            if (message.bet_area != null && message.hasOwnProperty("bet_area"))
                object.bet_area = message.bet_area;
            return object;
        };

        /**
         * Converts this request_bet to JSON.
         * @function toJSON
         * @memberof lhd.request_bet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        request_bet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return request_bet;
    })();

    lhd.request_apply_banker = (function() {

        /**
         * Properties of a request_apply_banker.
         * @memberof lhd
         * @interface Irequest_apply_banker
         * @property {number|Long} reserve_score request_apply_banker reserve_score
         */

        /**
         * Constructs a new request_apply_banker.
         * @memberof lhd
         * @classdesc Represents a request_apply_banker.
         * @implements Irequest_apply_banker
         * @constructor
         * @param {lhd.Irequest_apply_banker=} [properties] Properties to set
         */
        function request_apply_banker(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * request_apply_banker reserve_score.
         * @member {number|Long} reserve_score
         * @memberof lhd.request_apply_banker
         * @instance
         */
        request_apply_banker.prototype.reserve_score = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new request_apply_banker instance using the specified properties.
         * @function create
         * @memberof lhd.request_apply_banker
         * @static
         * @param {lhd.Irequest_apply_banker=} [properties] Properties to set
         * @returns {lhd.request_apply_banker} request_apply_banker instance
         */
        request_apply_banker.create = function create(properties) {
            return new request_apply_banker(properties);
        };

        /**
         * Encodes the specified request_apply_banker message. Does not implicitly {@link lhd.request_apply_banker.verify|verify} messages.
         * @function encode
         * @memberof lhd.request_apply_banker
         * @static
         * @param {lhd.Irequest_apply_banker} message request_apply_banker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        request_apply_banker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.reserve_score);
            return writer;
        };

        /**
         * Encodes the specified request_apply_banker message, length delimited. Does not implicitly {@link lhd.request_apply_banker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lhd.request_apply_banker
         * @static
         * @param {lhd.Irequest_apply_banker} message request_apply_banker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        request_apply_banker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a request_apply_banker message from the specified reader or buffer.
         * @function decode
         * @memberof lhd.request_apply_banker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lhd.request_apply_banker} request_apply_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        request_apply_banker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lhd.request_apply_banker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reserve_score = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("reserve_score"))
                throw $util.ProtocolError("missing required 'reserve_score'", { instance: message });
            return message;
        };

        /**
         * Decodes a request_apply_banker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lhd.request_apply_banker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lhd.request_apply_banker} request_apply_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        request_apply_banker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a request_apply_banker message.
         * @function verify
         * @memberof lhd.request_apply_banker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        request_apply_banker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.reserve_score) && !(message.reserve_score && $util.isInteger(message.reserve_score.low) && $util.isInteger(message.reserve_score.high)))
                return "reserve_score: integer|Long expected";
            return null;
        };

        /**
         * Creates a request_apply_banker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lhd.request_apply_banker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lhd.request_apply_banker} request_apply_banker
         */
        request_apply_banker.fromObject = function fromObject(object) {
            if (object instanceof $root.lhd.request_apply_banker)
                return object;
            var message = new $root.lhd.request_apply_banker();
            if (object.reserve_score != null)
                if ($util.Long)
                    (message.reserve_score = $util.Long.fromValue(object.reserve_score)).unsigned = true;
                else if (typeof object.reserve_score === "string")
                    message.reserve_score = parseInt(object.reserve_score, 10);
                else if (typeof object.reserve_score === "number")
                    message.reserve_score = object.reserve_score;
                else if (typeof object.reserve_score === "object")
                    message.reserve_score = new $util.LongBits(object.reserve_score.low >>> 0, object.reserve_score.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a request_apply_banker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lhd.request_apply_banker
         * @static
         * @param {lhd.request_apply_banker} message request_apply_banker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        request_apply_banker.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.reserve_score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.reserve_score = options.longs === String ? "0" : 0;
            if (message.reserve_score != null && message.hasOwnProperty("reserve_score"))
                if (typeof message.reserve_score === "number")
                    object.reserve_score = options.longs === String ? String(message.reserve_score) : message.reserve_score;
                else
                    object.reserve_score = options.longs === String ? $util.Long.prototype.toString.call(message.reserve_score) : options.longs === Number ? new $util.LongBits(message.reserve_score.low >>> 0, message.reserve_score.high >>> 0).toNumber(true) : message.reserve_score;
            return object;
        };

        /**
         * Converts this request_apply_banker to JSON.
         * @function toJSON
         * @memberof lhd.request_apply_banker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        request_apply_banker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return request_apply_banker;
    })();

    lhd.request_cancel_banker = (function() {

        /**
         * Properties of a request_cancel_banker.
         * @memberof lhd
         * @interface Irequest_cancel_banker
         */

        /**
         * Constructs a new request_cancel_banker.
         * @memberof lhd
         * @classdesc Represents a request_cancel_banker.
         * @implements Irequest_cancel_banker
         * @constructor
         * @param {lhd.Irequest_cancel_banker=} [properties] Properties to set
         */
        function request_cancel_banker(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new request_cancel_banker instance using the specified properties.
         * @function create
         * @memberof lhd.request_cancel_banker
         * @static
         * @param {lhd.Irequest_cancel_banker=} [properties] Properties to set
         * @returns {lhd.request_cancel_banker} request_cancel_banker instance
         */
        request_cancel_banker.create = function create(properties) {
            return new request_cancel_banker(properties);
        };

        /**
         * Encodes the specified request_cancel_banker message. Does not implicitly {@link lhd.request_cancel_banker.verify|verify} messages.
         * @function encode
         * @memberof lhd.request_cancel_banker
         * @static
         * @param {lhd.Irequest_cancel_banker} message request_cancel_banker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        request_cancel_banker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified request_cancel_banker message, length delimited. Does not implicitly {@link lhd.request_cancel_banker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lhd.request_cancel_banker
         * @static
         * @param {lhd.Irequest_cancel_banker} message request_cancel_banker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        request_cancel_banker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a request_cancel_banker message from the specified reader or buffer.
         * @function decode
         * @memberof lhd.request_cancel_banker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lhd.request_cancel_banker} request_cancel_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        request_cancel_banker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lhd.request_cancel_banker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a request_cancel_banker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lhd.request_cancel_banker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lhd.request_cancel_banker} request_cancel_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        request_cancel_banker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a request_cancel_banker message.
         * @function verify
         * @memberof lhd.request_cancel_banker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        request_cancel_banker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a request_cancel_banker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lhd.request_cancel_banker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lhd.request_cancel_banker} request_cancel_banker
         */
        request_cancel_banker.fromObject = function fromObject(object) {
            if (object instanceof $root.lhd.request_cancel_banker)
                return object;
            return new $root.lhd.request_cancel_banker();
        };

        /**
         * Creates a plain object from a request_cancel_banker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lhd.request_cancel_banker
         * @static
         * @param {lhd.request_cancel_banker} message request_cancel_banker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        request_cancel_banker.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this request_cancel_banker to JSON.
         * @function toJSON
         * @memberof lhd.request_cancel_banker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        request_cancel_banker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return request_cancel_banker;
    })();

    return lhd;
})();

module.exports = $root;
