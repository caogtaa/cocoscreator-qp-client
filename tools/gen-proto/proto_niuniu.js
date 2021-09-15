/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.niuniu = (function() {

    /**
     * Namespace niuniu.
     * @exports niuniu
     * @namespace
     */
    var niuniu = {};

    niuniu.notify_gs_free = (function() {

        /**
         * Properties of a notify_gs_free.
         * @memberof niuniu
         * @interface Inotify_gs_free
         * @property {number|Long} base_score notify_gs_free base_score
         */

        /**
         * Constructs a new notify_gs_free.
         * @memberof niuniu
         * @classdesc Represents a notify_gs_free.
         * @implements Inotify_gs_free
         * @constructor
         * @param {niuniu.Inotify_gs_free=} [properties] Properties to set
         */
        function notify_gs_free(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_gs_free base_score.
         * @member {number|Long} base_score
         * @memberof niuniu.notify_gs_free
         * @instance
         */
        notify_gs_free.prototype.base_score = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new notify_gs_free instance using the specified properties.
         * @function create
         * @memberof niuniu.notify_gs_free
         * @static
         * @param {niuniu.Inotify_gs_free=} [properties] Properties to set
         * @returns {niuniu.notify_gs_free} notify_gs_free instance
         */
        notify_gs_free.create = function create(properties) {
            return new notify_gs_free(properties);
        };

        /**
         * Encodes the specified notify_gs_free message. Does not implicitly {@link niuniu.notify_gs_free.verify|verify} messages.
         * @function encode
         * @memberof niuniu.notify_gs_free
         * @static
         * @param {niuniu.Inotify_gs_free} message notify_gs_free message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_gs_free.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.base_score);
            return writer;
        };

        /**
         * Encodes the specified notify_gs_free message, length delimited. Does not implicitly {@link niuniu.notify_gs_free.verify|verify} messages.
         * @function encodeDelimited
         * @memberof niuniu.notify_gs_free
         * @static
         * @param {niuniu.Inotify_gs_free} message notify_gs_free message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_gs_free.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_gs_free message from the specified reader or buffer.
         * @function decode
         * @memberof niuniu.notify_gs_free
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {niuniu.notify_gs_free} notify_gs_free
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_gs_free.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.niuniu.notify_gs_free();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.base_score = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("base_score"))
                throw $util.ProtocolError("missing required 'base_score'", { instance: message });
            return message;
        };

        /**
         * Decodes a notify_gs_free message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof niuniu.notify_gs_free
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {niuniu.notify_gs_free} notify_gs_free
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
         * @memberof niuniu.notify_gs_free
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_gs_free.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.base_score) && !(message.base_score && $util.isInteger(message.base_score.low) && $util.isInteger(message.base_score.high)))
                return "base_score: integer|Long expected";
            return null;
        };

        /**
         * Creates a notify_gs_free message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof niuniu.notify_gs_free
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {niuniu.notify_gs_free} notify_gs_free
         */
        notify_gs_free.fromObject = function fromObject(object) {
            if (object instanceof $root.niuniu.notify_gs_free)
                return object;
            var message = new $root.niuniu.notify_gs_free();
            if (object.base_score != null)
                if ($util.Long)
                    (message.base_score = $util.Long.fromValue(object.base_score)).unsigned = true;
                else if (typeof object.base_score === "string")
                    message.base_score = parseInt(object.base_score, 10);
                else if (typeof object.base_score === "number")
                    message.base_score = object.base_score;
                else if (typeof object.base_score === "object")
                    message.base_score = new $util.LongBits(object.base_score.low >>> 0, object.base_score.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a notify_gs_free message. Also converts values to other types if specified.
         * @function toObject
         * @memberof niuniu.notify_gs_free
         * @static
         * @param {niuniu.notify_gs_free} message notify_gs_free
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_gs_free.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.base_score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.base_score = options.longs === String ? "0" : 0;
            if (message.base_score != null && message.hasOwnProperty("base_score"))
                if (typeof message.base_score === "number")
                    object.base_score = options.longs === String ? String(message.base_score) : message.base_score;
                else
                    object.base_score = options.longs === String ? $util.Long.prototype.toString.call(message.base_score) : options.longs === Number ? new $util.LongBits(message.base_score.low >>> 0, message.base_score.high >>> 0).toNumber(true) : message.base_score;
            return object;
        };

        /**
         * Converts this notify_gs_free to JSON.
         * @function toJSON
         * @memberof niuniu.notify_gs_free
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_gs_free.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_gs_free;
    })();

    niuniu.notify_gs_callbanker = (function() {

        /**
         * Properties of a notify_gs_callbanker.
         * @memberof niuniu
         * @interface Inotify_gs_callbanker
         * @property {string} dealid notify_gs_callbanker dealid
         * @property {number|Long} base_score notify_gs_callbanker base_score
         * @property {Array.<boolean>|null} [playing_status] notify_gs_callbanker playing_status
         * @property {Array.<boolean>|null} [call_banker_status] notify_gs_callbanker call_banker_status
         * @property {Array.<number>|null} [call_banker_times] notify_gs_callbanker call_banker_times
         * @property {Array.<number>|null} [cards_data] notify_gs_callbanker cards_data
         */

        /**
         * Constructs a new notify_gs_callbanker.
         * @memberof niuniu
         * @classdesc Represents a notify_gs_callbanker.
         * @implements Inotify_gs_callbanker
         * @constructor
         * @param {niuniu.Inotify_gs_callbanker=} [properties] Properties to set
         */
        function notify_gs_callbanker(properties) {
            this.playing_status = [];
            this.call_banker_status = [];
            this.call_banker_times = [];
            this.cards_data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_gs_callbanker dealid.
         * @member {string} dealid
         * @memberof niuniu.notify_gs_callbanker
         * @instance
         */
        notify_gs_callbanker.prototype.dealid = "";

        /**
         * notify_gs_callbanker base_score.
         * @member {number|Long} base_score
         * @memberof niuniu.notify_gs_callbanker
         * @instance
         */
        notify_gs_callbanker.prototype.base_score = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_gs_callbanker playing_status.
         * @member {Array.<boolean>} playing_status
         * @memberof niuniu.notify_gs_callbanker
         * @instance
         */
        notify_gs_callbanker.prototype.playing_status = $util.emptyArray;

        /**
         * notify_gs_callbanker call_banker_status.
         * @member {Array.<boolean>} call_banker_status
         * @memberof niuniu.notify_gs_callbanker
         * @instance
         */
        notify_gs_callbanker.prototype.call_banker_status = $util.emptyArray;

        /**
         * notify_gs_callbanker call_banker_times.
         * @member {Array.<number>} call_banker_times
         * @memberof niuniu.notify_gs_callbanker
         * @instance
         */
        notify_gs_callbanker.prototype.call_banker_times = $util.emptyArray;

        /**
         * notify_gs_callbanker cards_data.
         * @member {Array.<number>} cards_data
         * @memberof niuniu.notify_gs_callbanker
         * @instance
         */
        notify_gs_callbanker.prototype.cards_data = $util.emptyArray;

        /**
         * Creates a new notify_gs_callbanker instance using the specified properties.
         * @function create
         * @memberof niuniu.notify_gs_callbanker
         * @static
         * @param {niuniu.Inotify_gs_callbanker=} [properties] Properties to set
         * @returns {niuniu.notify_gs_callbanker} notify_gs_callbanker instance
         */
        notify_gs_callbanker.create = function create(properties) {
            return new notify_gs_callbanker(properties);
        };

        /**
         * Encodes the specified notify_gs_callbanker message. Does not implicitly {@link niuniu.notify_gs_callbanker.verify|verify} messages.
         * @function encode
         * @memberof niuniu.notify_gs_callbanker
         * @static
         * @param {niuniu.Inotify_gs_callbanker} message notify_gs_callbanker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_gs_callbanker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.dealid);
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.base_score);
            if (message.playing_status != null && message.playing_status.length)
                for (var i = 0; i < message.playing_status.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.playing_status[i]);
            if (message.call_banker_status != null && message.call_banker_status.length)
                for (var i = 0; i < message.call_banker_status.length; ++i)
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.call_banker_status[i]);
            if (message.call_banker_times != null && message.call_banker_times.length)
                for (var i = 0; i < message.call_banker_times.length; ++i)
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.call_banker_times[i]);
            if (message.cards_data != null && message.cards_data.length)
                for (var i = 0; i < message.cards_data.length; ++i)
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.cards_data[i]);
            return writer;
        };

        /**
         * Encodes the specified notify_gs_callbanker message, length delimited. Does not implicitly {@link niuniu.notify_gs_callbanker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof niuniu.notify_gs_callbanker
         * @static
         * @param {niuniu.Inotify_gs_callbanker} message notify_gs_callbanker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_gs_callbanker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_gs_callbanker message from the specified reader or buffer.
         * @function decode
         * @memberof niuniu.notify_gs_callbanker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {niuniu.notify_gs_callbanker} notify_gs_callbanker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_gs_callbanker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.niuniu.notify_gs_callbanker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.dealid = reader.string();
                    break;
                case 2:
                    message.base_score = reader.uint64();
                    break;
                case 3:
                    if (!(message.playing_status && message.playing_status.length))
                        message.playing_status = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.playing_status.push(reader.bool());
                    } else
                        message.playing_status.push(reader.bool());
                    break;
                case 4:
                    if (!(message.call_banker_status && message.call_banker_status.length))
                        message.call_banker_status = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.call_banker_status.push(reader.bool());
                    } else
                        message.call_banker_status.push(reader.bool());
                    break;
                case 5:
                    if (!(message.call_banker_times && message.call_banker_times.length))
                        message.call_banker_times = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.call_banker_times.push(reader.uint32());
                    } else
                        message.call_banker_times.push(reader.uint32());
                    break;
                case 6:
                    if (!(message.cards_data && message.cards_data.length))
                        message.cards_data = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards_data.push(reader.uint32());
                    } else
                        message.cards_data.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("dealid"))
                throw $util.ProtocolError("missing required 'dealid'", { instance: message });
            if (!message.hasOwnProperty("base_score"))
                throw $util.ProtocolError("missing required 'base_score'", { instance: message });
            return message;
        };

        /**
         * Decodes a notify_gs_callbanker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof niuniu.notify_gs_callbanker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {niuniu.notify_gs_callbanker} notify_gs_callbanker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_gs_callbanker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a notify_gs_callbanker message.
         * @function verify
         * @memberof niuniu.notify_gs_callbanker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_gs_callbanker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.dealid))
                return "dealid: string expected";
            if (!$util.isInteger(message.base_score) && !(message.base_score && $util.isInteger(message.base_score.low) && $util.isInteger(message.base_score.high)))
                return "base_score: integer|Long expected";
            if (message.playing_status != null && message.hasOwnProperty("playing_status")) {
                if (!Array.isArray(message.playing_status))
                    return "playing_status: array expected";
                for (var i = 0; i < message.playing_status.length; ++i)
                    if (typeof message.playing_status[i] !== "boolean")
                        return "playing_status: boolean[] expected";
            }
            if (message.call_banker_status != null && message.hasOwnProperty("call_banker_status")) {
                if (!Array.isArray(message.call_banker_status))
                    return "call_banker_status: array expected";
                for (var i = 0; i < message.call_banker_status.length; ++i)
                    if (typeof message.call_banker_status[i] !== "boolean")
                        return "call_banker_status: boolean[] expected";
            }
            if (message.call_banker_times != null && message.hasOwnProperty("call_banker_times")) {
                if (!Array.isArray(message.call_banker_times))
                    return "call_banker_times: array expected";
                for (var i = 0; i < message.call_banker_times.length; ++i)
                    if (!$util.isInteger(message.call_banker_times[i]))
                        return "call_banker_times: integer[] expected";
            }
            if (message.cards_data != null && message.hasOwnProperty("cards_data")) {
                if (!Array.isArray(message.cards_data))
                    return "cards_data: array expected";
                for (var i = 0; i < message.cards_data.length; ++i)
                    if (!$util.isInteger(message.cards_data[i]))
                        return "cards_data: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a notify_gs_callbanker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof niuniu.notify_gs_callbanker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {niuniu.notify_gs_callbanker} notify_gs_callbanker
         */
        notify_gs_callbanker.fromObject = function fromObject(object) {
            if (object instanceof $root.niuniu.notify_gs_callbanker)
                return object;
            var message = new $root.niuniu.notify_gs_callbanker();
            if (object.dealid != null)
                message.dealid = String(object.dealid);
            if (object.base_score != null)
                if ($util.Long)
                    (message.base_score = $util.Long.fromValue(object.base_score)).unsigned = true;
                else if (typeof object.base_score === "string")
                    message.base_score = parseInt(object.base_score, 10);
                else if (typeof object.base_score === "number")
                    message.base_score = object.base_score;
                else if (typeof object.base_score === "object")
                    message.base_score = new $util.LongBits(object.base_score.low >>> 0, object.base_score.high >>> 0).toNumber(true);
            if (object.playing_status) {
                if (!Array.isArray(object.playing_status))
                    throw TypeError(".niuniu.notify_gs_callbanker.playing_status: array expected");
                message.playing_status = [];
                for (var i = 0; i < object.playing_status.length; ++i)
                    message.playing_status[i] = Boolean(object.playing_status[i]);
            }
            if (object.call_banker_status) {
                if (!Array.isArray(object.call_banker_status))
                    throw TypeError(".niuniu.notify_gs_callbanker.call_banker_status: array expected");
                message.call_banker_status = [];
                for (var i = 0; i < object.call_banker_status.length; ++i)
                    message.call_banker_status[i] = Boolean(object.call_banker_status[i]);
            }
            if (object.call_banker_times) {
                if (!Array.isArray(object.call_banker_times))
                    throw TypeError(".niuniu.notify_gs_callbanker.call_banker_times: array expected");
                message.call_banker_times = [];
                for (var i = 0; i < object.call_banker_times.length; ++i)
                    message.call_banker_times[i] = object.call_banker_times[i] >>> 0;
            }
            if (object.cards_data) {
                if (!Array.isArray(object.cards_data))
                    throw TypeError(".niuniu.notify_gs_callbanker.cards_data: array expected");
                message.cards_data = [];
                for (var i = 0; i < object.cards_data.length; ++i)
                    message.cards_data[i] = object.cards_data[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a notify_gs_callbanker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof niuniu.notify_gs_callbanker
         * @static
         * @param {niuniu.notify_gs_callbanker} message notify_gs_callbanker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_gs_callbanker.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.playing_status = [];
                object.call_banker_status = [];
                object.call_banker_times = [];
                object.cards_data = [];
            }
            if (options.defaults) {
                object.dealid = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.base_score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.base_score = options.longs === String ? "0" : 0;
            }
            if (message.dealid != null && message.hasOwnProperty("dealid"))
                object.dealid = message.dealid;
            if (message.base_score != null && message.hasOwnProperty("base_score"))
                if (typeof message.base_score === "number")
                    object.base_score = options.longs === String ? String(message.base_score) : message.base_score;
                else
                    object.base_score = options.longs === String ? $util.Long.prototype.toString.call(message.base_score) : options.longs === Number ? new $util.LongBits(message.base_score.low >>> 0, message.base_score.high >>> 0).toNumber(true) : message.base_score;
            if (message.playing_status && message.playing_status.length) {
                object.playing_status = [];
                for (var j = 0; j < message.playing_status.length; ++j)
                    object.playing_status[j] = message.playing_status[j];
            }
            if (message.call_banker_status && message.call_banker_status.length) {
                object.call_banker_status = [];
                for (var j = 0; j < message.call_banker_status.length; ++j)
                    object.call_banker_status[j] = message.call_banker_status[j];
            }
            if (message.call_banker_times && message.call_banker_times.length) {
                object.call_banker_times = [];
                for (var j = 0; j < message.call_banker_times.length; ++j)
                    object.call_banker_times[j] = message.call_banker_times[j];
            }
            if (message.cards_data && message.cards_data.length) {
                object.cards_data = [];
                for (var j = 0; j < message.cards_data.length; ++j)
                    object.cards_data[j] = message.cards_data[j];
            }
            return object;
        };

        /**
         * Converts this notify_gs_callbanker to JSON.
         * @function toJSON
         * @memberof niuniu.notify_gs_callbanker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_gs_callbanker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_gs_callbanker;
    })();

    niuniu.notify_gs_bet = (function() {

        /**
         * Properties of a notify_gs_bet.
         * @memberof niuniu
         * @interface Inotify_gs_bet
         * @property {string} dealid notify_gs_bet dealid
         * @property {number|Long} base_score notify_gs_bet base_score
         * @property {Array.<boolean>|null} [playing_status] notify_gs_bet playing_status
         * @property {number} banker_chairid notify_gs_bet banker_chairid
         * @property {number} banker_times notify_gs_bet banker_times
         * @property {boolean} allow_double_bet notify_gs_bet allow_double_bet
         * @property {Array.<number|Long>|null} [user_can_bet_score] notify_gs_bet user_can_bet_score
         * @property {Array.<number|Long>|null} [user_bet_score] notify_gs_bet user_bet_score
         * @property {Array.<number>|null} [cards_data] notify_gs_bet cards_data
         */

        /**
         * Constructs a new notify_gs_bet.
         * @memberof niuniu
         * @classdesc Represents a notify_gs_bet.
         * @implements Inotify_gs_bet
         * @constructor
         * @param {niuniu.Inotify_gs_bet=} [properties] Properties to set
         */
        function notify_gs_bet(properties) {
            this.playing_status = [];
            this.user_can_bet_score = [];
            this.user_bet_score = [];
            this.cards_data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_gs_bet dealid.
         * @member {string} dealid
         * @memberof niuniu.notify_gs_bet
         * @instance
         */
        notify_gs_bet.prototype.dealid = "";

        /**
         * notify_gs_bet base_score.
         * @member {number|Long} base_score
         * @memberof niuniu.notify_gs_bet
         * @instance
         */
        notify_gs_bet.prototype.base_score = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_gs_bet playing_status.
         * @member {Array.<boolean>} playing_status
         * @memberof niuniu.notify_gs_bet
         * @instance
         */
        notify_gs_bet.prototype.playing_status = $util.emptyArray;

        /**
         * notify_gs_bet banker_chairid.
         * @member {number} banker_chairid
         * @memberof niuniu.notify_gs_bet
         * @instance
         */
        notify_gs_bet.prototype.banker_chairid = 0;

        /**
         * notify_gs_bet banker_times.
         * @member {number} banker_times
         * @memberof niuniu.notify_gs_bet
         * @instance
         */
        notify_gs_bet.prototype.banker_times = 0;

        /**
         * notify_gs_bet allow_double_bet.
         * @member {boolean} allow_double_bet
         * @memberof niuniu.notify_gs_bet
         * @instance
         */
        notify_gs_bet.prototype.allow_double_bet = false;

        /**
         * notify_gs_bet user_can_bet_score.
         * @member {Array.<number|Long>} user_can_bet_score
         * @memberof niuniu.notify_gs_bet
         * @instance
         */
        notify_gs_bet.prototype.user_can_bet_score = $util.emptyArray;

        /**
         * notify_gs_bet user_bet_score.
         * @member {Array.<number|Long>} user_bet_score
         * @memberof niuniu.notify_gs_bet
         * @instance
         */
        notify_gs_bet.prototype.user_bet_score = $util.emptyArray;

        /**
         * notify_gs_bet cards_data.
         * @member {Array.<number>} cards_data
         * @memberof niuniu.notify_gs_bet
         * @instance
         */
        notify_gs_bet.prototype.cards_data = $util.emptyArray;

        /**
         * Creates a new notify_gs_bet instance using the specified properties.
         * @function create
         * @memberof niuniu.notify_gs_bet
         * @static
         * @param {niuniu.Inotify_gs_bet=} [properties] Properties to set
         * @returns {niuniu.notify_gs_bet} notify_gs_bet instance
         */
        notify_gs_bet.create = function create(properties) {
            return new notify_gs_bet(properties);
        };

        /**
         * Encodes the specified notify_gs_bet message. Does not implicitly {@link niuniu.notify_gs_bet.verify|verify} messages.
         * @function encode
         * @memberof niuniu.notify_gs_bet
         * @static
         * @param {niuniu.Inotify_gs_bet} message notify_gs_bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_gs_bet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.dealid);
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.base_score);
            if (message.playing_status != null && message.playing_status.length)
                for (var i = 0; i < message.playing_status.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.playing_status[i]);
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.banker_chairid);
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.banker_times);
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.allow_double_bet);
            if (message.user_can_bet_score != null && message.user_can_bet_score.length)
                for (var i = 0; i < message.user_can_bet_score.length; ++i)
                    writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.user_can_bet_score[i]);
            if (message.user_bet_score != null && message.user_bet_score.length)
                for (var i = 0; i < message.user_bet_score.length; ++i)
                    writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.user_bet_score[i]);
            if (message.cards_data != null && message.cards_data.length)
                for (var i = 0; i < message.cards_data.length; ++i)
                    writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.cards_data[i]);
            return writer;
        };

        /**
         * Encodes the specified notify_gs_bet message, length delimited. Does not implicitly {@link niuniu.notify_gs_bet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof niuniu.notify_gs_bet
         * @static
         * @param {niuniu.Inotify_gs_bet} message notify_gs_bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_gs_bet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_gs_bet message from the specified reader or buffer.
         * @function decode
         * @memberof niuniu.notify_gs_bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {niuniu.notify_gs_bet} notify_gs_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_gs_bet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.niuniu.notify_gs_bet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.dealid = reader.string();
                    break;
                case 2:
                    message.base_score = reader.uint64();
                    break;
                case 3:
                    if (!(message.playing_status && message.playing_status.length))
                        message.playing_status = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.playing_status.push(reader.bool());
                    } else
                        message.playing_status.push(reader.bool());
                    break;
                case 4:
                    message.banker_chairid = reader.uint32();
                    break;
                case 5:
                    message.banker_times = reader.uint32();
                    break;
                case 6:
                    message.allow_double_bet = reader.bool();
                    break;
                case 7:
                    if (!(message.user_can_bet_score && message.user_can_bet_score.length))
                        message.user_can_bet_score = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.user_can_bet_score.push(reader.uint64());
                    } else
                        message.user_can_bet_score.push(reader.uint64());
                    break;
                case 8:
                    if (!(message.user_bet_score && message.user_bet_score.length))
                        message.user_bet_score = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.user_bet_score.push(reader.uint64());
                    } else
                        message.user_bet_score.push(reader.uint64());
                    break;
                case 9:
                    if (!(message.cards_data && message.cards_data.length))
                        message.cards_data = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards_data.push(reader.uint32());
                    } else
                        message.cards_data.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("dealid"))
                throw $util.ProtocolError("missing required 'dealid'", { instance: message });
            if (!message.hasOwnProperty("base_score"))
                throw $util.ProtocolError("missing required 'base_score'", { instance: message });
            if (!message.hasOwnProperty("banker_chairid"))
                throw $util.ProtocolError("missing required 'banker_chairid'", { instance: message });
            if (!message.hasOwnProperty("banker_times"))
                throw $util.ProtocolError("missing required 'banker_times'", { instance: message });
            if (!message.hasOwnProperty("allow_double_bet"))
                throw $util.ProtocolError("missing required 'allow_double_bet'", { instance: message });
            return message;
        };

        /**
         * Decodes a notify_gs_bet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof niuniu.notify_gs_bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {niuniu.notify_gs_bet} notify_gs_bet
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
         * @memberof niuniu.notify_gs_bet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_gs_bet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.dealid))
                return "dealid: string expected";
            if (!$util.isInteger(message.base_score) && !(message.base_score && $util.isInteger(message.base_score.low) && $util.isInteger(message.base_score.high)))
                return "base_score: integer|Long expected";
            if (message.playing_status != null && message.hasOwnProperty("playing_status")) {
                if (!Array.isArray(message.playing_status))
                    return "playing_status: array expected";
                for (var i = 0; i < message.playing_status.length; ++i)
                    if (typeof message.playing_status[i] !== "boolean")
                        return "playing_status: boolean[] expected";
            }
            if (!$util.isInteger(message.banker_chairid))
                return "banker_chairid: integer expected";
            if (!$util.isInteger(message.banker_times))
                return "banker_times: integer expected";
            if (typeof message.allow_double_bet !== "boolean")
                return "allow_double_bet: boolean expected";
            if (message.user_can_bet_score != null && message.hasOwnProperty("user_can_bet_score")) {
                if (!Array.isArray(message.user_can_bet_score))
                    return "user_can_bet_score: array expected";
                for (var i = 0; i < message.user_can_bet_score.length; ++i)
                    if (!$util.isInteger(message.user_can_bet_score[i]) && !(message.user_can_bet_score[i] && $util.isInteger(message.user_can_bet_score[i].low) && $util.isInteger(message.user_can_bet_score[i].high)))
                        return "user_can_bet_score: integer|Long[] expected";
            }
            if (message.user_bet_score != null && message.hasOwnProperty("user_bet_score")) {
                if (!Array.isArray(message.user_bet_score))
                    return "user_bet_score: array expected";
                for (var i = 0; i < message.user_bet_score.length; ++i)
                    if (!$util.isInteger(message.user_bet_score[i]) && !(message.user_bet_score[i] && $util.isInteger(message.user_bet_score[i].low) && $util.isInteger(message.user_bet_score[i].high)))
                        return "user_bet_score: integer|Long[] expected";
            }
            if (message.cards_data != null && message.hasOwnProperty("cards_data")) {
                if (!Array.isArray(message.cards_data))
                    return "cards_data: array expected";
                for (var i = 0; i < message.cards_data.length; ++i)
                    if (!$util.isInteger(message.cards_data[i]))
                        return "cards_data: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a notify_gs_bet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof niuniu.notify_gs_bet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {niuniu.notify_gs_bet} notify_gs_bet
         */
        notify_gs_bet.fromObject = function fromObject(object) {
            if (object instanceof $root.niuniu.notify_gs_bet)
                return object;
            var message = new $root.niuniu.notify_gs_bet();
            if (object.dealid != null)
                message.dealid = String(object.dealid);
            if (object.base_score != null)
                if ($util.Long)
                    (message.base_score = $util.Long.fromValue(object.base_score)).unsigned = true;
                else if (typeof object.base_score === "string")
                    message.base_score = parseInt(object.base_score, 10);
                else if (typeof object.base_score === "number")
                    message.base_score = object.base_score;
                else if (typeof object.base_score === "object")
                    message.base_score = new $util.LongBits(object.base_score.low >>> 0, object.base_score.high >>> 0).toNumber(true);
            if (object.playing_status) {
                if (!Array.isArray(object.playing_status))
                    throw TypeError(".niuniu.notify_gs_bet.playing_status: array expected");
                message.playing_status = [];
                for (var i = 0; i < object.playing_status.length; ++i)
                    message.playing_status[i] = Boolean(object.playing_status[i]);
            }
            if (object.banker_chairid != null)
                message.banker_chairid = object.banker_chairid >>> 0;
            if (object.banker_times != null)
                message.banker_times = object.banker_times >>> 0;
            if (object.allow_double_bet != null)
                message.allow_double_bet = Boolean(object.allow_double_bet);
            if (object.user_can_bet_score) {
                if (!Array.isArray(object.user_can_bet_score))
                    throw TypeError(".niuniu.notify_gs_bet.user_can_bet_score: array expected");
                message.user_can_bet_score = [];
                for (var i = 0; i < object.user_can_bet_score.length; ++i)
                    if ($util.Long)
                        (message.user_can_bet_score[i] = $util.Long.fromValue(object.user_can_bet_score[i])).unsigned = true;
                    else if (typeof object.user_can_bet_score[i] === "string")
                        message.user_can_bet_score[i] = parseInt(object.user_can_bet_score[i], 10);
                    else if (typeof object.user_can_bet_score[i] === "number")
                        message.user_can_bet_score[i] = object.user_can_bet_score[i];
                    else if (typeof object.user_can_bet_score[i] === "object")
                        message.user_can_bet_score[i] = new $util.LongBits(object.user_can_bet_score[i].low >>> 0, object.user_can_bet_score[i].high >>> 0).toNumber(true);
            }
            if (object.user_bet_score) {
                if (!Array.isArray(object.user_bet_score))
                    throw TypeError(".niuniu.notify_gs_bet.user_bet_score: array expected");
                message.user_bet_score = [];
                for (var i = 0; i < object.user_bet_score.length; ++i)
                    if ($util.Long)
                        (message.user_bet_score[i] = $util.Long.fromValue(object.user_bet_score[i])).unsigned = true;
                    else if (typeof object.user_bet_score[i] === "string")
                        message.user_bet_score[i] = parseInt(object.user_bet_score[i], 10);
                    else if (typeof object.user_bet_score[i] === "number")
                        message.user_bet_score[i] = object.user_bet_score[i];
                    else if (typeof object.user_bet_score[i] === "object")
                        message.user_bet_score[i] = new $util.LongBits(object.user_bet_score[i].low >>> 0, object.user_bet_score[i].high >>> 0).toNumber(true);
            }
            if (object.cards_data) {
                if (!Array.isArray(object.cards_data))
                    throw TypeError(".niuniu.notify_gs_bet.cards_data: array expected");
                message.cards_data = [];
                for (var i = 0; i < object.cards_data.length; ++i)
                    message.cards_data[i] = object.cards_data[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a notify_gs_bet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof niuniu.notify_gs_bet
         * @static
         * @param {niuniu.notify_gs_bet} message notify_gs_bet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_gs_bet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.playing_status = [];
                object.user_can_bet_score = [];
                object.user_bet_score = [];
                object.cards_data = [];
            }
            if (options.defaults) {
                object.dealid = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.base_score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.base_score = options.longs === String ? "0" : 0;
                object.banker_chairid = 0;
                object.banker_times = 0;
                object.allow_double_bet = false;
            }
            if (message.dealid != null && message.hasOwnProperty("dealid"))
                object.dealid = message.dealid;
            if (message.base_score != null && message.hasOwnProperty("base_score"))
                if (typeof message.base_score === "number")
                    object.base_score = options.longs === String ? String(message.base_score) : message.base_score;
                else
                    object.base_score = options.longs === String ? $util.Long.prototype.toString.call(message.base_score) : options.longs === Number ? new $util.LongBits(message.base_score.low >>> 0, message.base_score.high >>> 0).toNumber(true) : message.base_score;
            if (message.playing_status && message.playing_status.length) {
                object.playing_status = [];
                for (var j = 0; j < message.playing_status.length; ++j)
                    object.playing_status[j] = message.playing_status[j];
            }
            if (message.banker_chairid != null && message.hasOwnProperty("banker_chairid"))
                object.banker_chairid = message.banker_chairid;
            if (message.banker_times != null && message.hasOwnProperty("banker_times"))
                object.banker_times = message.banker_times;
            if (message.allow_double_bet != null && message.hasOwnProperty("allow_double_bet"))
                object.allow_double_bet = message.allow_double_bet;
            if (message.user_can_bet_score && message.user_can_bet_score.length) {
                object.user_can_bet_score = [];
                for (var j = 0; j < message.user_can_bet_score.length; ++j)
                    if (typeof message.user_can_bet_score[j] === "number")
                        object.user_can_bet_score[j] = options.longs === String ? String(message.user_can_bet_score[j]) : message.user_can_bet_score[j];
                    else
                        object.user_can_bet_score[j] = options.longs === String ? $util.Long.prototype.toString.call(message.user_can_bet_score[j]) : options.longs === Number ? new $util.LongBits(message.user_can_bet_score[j].low >>> 0, message.user_can_bet_score[j].high >>> 0).toNumber(true) : message.user_can_bet_score[j];
            }
            if (message.user_bet_score && message.user_bet_score.length) {
                object.user_bet_score = [];
                for (var j = 0; j < message.user_bet_score.length; ++j)
                    if (typeof message.user_bet_score[j] === "number")
                        object.user_bet_score[j] = options.longs === String ? String(message.user_bet_score[j]) : message.user_bet_score[j];
                    else
                        object.user_bet_score[j] = options.longs === String ? $util.Long.prototype.toString.call(message.user_bet_score[j]) : options.longs === Number ? new $util.LongBits(message.user_bet_score[j].low >>> 0, message.user_bet_score[j].high >>> 0).toNumber(true) : message.user_bet_score[j];
            }
            if (message.cards_data && message.cards_data.length) {
                object.cards_data = [];
                for (var j = 0; j < message.cards_data.length; ++j)
                    object.cards_data[j] = message.cards_data[j];
            }
            return object;
        };

        /**
         * Converts this notify_gs_bet to JSON.
         * @function toJSON
         * @memberof niuniu.notify_gs_bet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_gs_bet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_gs_bet;
    })();

    niuniu.open_cards_data = (function() {

        /**
         * Properties of an open_cards_data.
         * @memberof niuniu
         * @interface Iopen_cards_data
         * @property {Array.<number>|null} [cards_data] open_cards_data cards_data
         */

        /**
         * Constructs a new open_cards_data.
         * @memberof niuniu
         * @classdesc Represents an open_cards_data.
         * @implements Iopen_cards_data
         * @constructor
         * @param {niuniu.Iopen_cards_data=} [properties] Properties to set
         */
        function open_cards_data(properties) {
            this.cards_data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * open_cards_data cards_data.
         * @member {Array.<number>} cards_data
         * @memberof niuniu.open_cards_data
         * @instance
         */
        open_cards_data.prototype.cards_data = $util.emptyArray;

        /**
         * Creates a new open_cards_data instance using the specified properties.
         * @function create
         * @memberof niuniu.open_cards_data
         * @static
         * @param {niuniu.Iopen_cards_data=} [properties] Properties to set
         * @returns {niuniu.open_cards_data} open_cards_data instance
         */
        open_cards_data.create = function create(properties) {
            return new open_cards_data(properties);
        };

        /**
         * Encodes the specified open_cards_data message. Does not implicitly {@link niuniu.open_cards_data.verify|verify} messages.
         * @function encode
         * @memberof niuniu.open_cards_data
         * @static
         * @param {niuniu.Iopen_cards_data} message open_cards_data message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        open_cards_data.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cards_data != null && message.cards_data.length)
                for (var i = 0; i < message.cards_data.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.cards_data[i]);
            return writer;
        };

        /**
         * Encodes the specified open_cards_data message, length delimited. Does not implicitly {@link niuniu.open_cards_data.verify|verify} messages.
         * @function encodeDelimited
         * @memberof niuniu.open_cards_data
         * @static
         * @param {niuniu.Iopen_cards_data} message open_cards_data message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        open_cards_data.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an open_cards_data message from the specified reader or buffer.
         * @function decode
         * @memberof niuniu.open_cards_data
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {niuniu.open_cards_data} open_cards_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        open_cards_data.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.niuniu.open_cards_data();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.cards_data && message.cards_data.length))
                        message.cards_data = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards_data.push(reader.uint32());
                    } else
                        message.cards_data.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an open_cards_data message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof niuniu.open_cards_data
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {niuniu.open_cards_data} open_cards_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        open_cards_data.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an open_cards_data message.
         * @function verify
         * @memberof niuniu.open_cards_data
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        open_cards_data.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cards_data != null && message.hasOwnProperty("cards_data")) {
                if (!Array.isArray(message.cards_data))
                    return "cards_data: array expected";
                for (var i = 0; i < message.cards_data.length; ++i)
                    if (!$util.isInteger(message.cards_data[i]))
                        return "cards_data: integer[] expected";
            }
            return null;
        };

        /**
         * Creates an open_cards_data message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof niuniu.open_cards_data
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {niuniu.open_cards_data} open_cards_data
         */
        open_cards_data.fromObject = function fromObject(object) {
            if (object instanceof $root.niuniu.open_cards_data)
                return object;
            var message = new $root.niuniu.open_cards_data();
            if (object.cards_data) {
                if (!Array.isArray(object.cards_data))
                    throw TypeError(".niuniu.open_cards_data.cards_data: array expected");
                message.cards_data = [];
                for (var i = 0; i < object.cards_data.length; ++i)
                    message.cards_data[i] = object.cards_data[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from an open_cards_data message. Also converts values to other types if specified.
         * @function toObject
         * @memberof niuniu.open_cards_data
         * @static
         * @param {niuniu.open_cards_data} message open_cards_data
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        open_cards_data.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cards_data = [];
            if (message.cards_data && message.cards_data.length) {
                object.cards_data = [];
                for (var j = 0; j < message.cards_data.length; ++j)
                    object.cards_data[j] = message.cards_data[j];
            }
            return object;
        };

        /**
         * Converts this open_cards_data to JSON.
         * @function toJSON
         * @memberof niuniu.open_cards_data
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        open_cards_data.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return open_cards_data;
    })();

    niuniu.notify_gs_opencard = (function() {

        /**
         * Properties of a notify_gs_opencard.
         * @memberof niuniu
         * @interface Inotify_gs_opencard
         * @property {string} dealid notify_gs_opencard dealid
         * @property {number|Long} base_score notify_gs_opencard base_score
         * @property {Array.<boolean>|null} [playing_status] notify_gs_opencard playing_status
         * @property {number} banker_chairid notify_gs_opencard banker_chairid
         * @property {number} banker_times notify_gs_opencard banker_times
         * @property {Array.<number|Long>|null} [user_bet_score] notify_gs_opencard user_bet_score
         * @property {Array.<number>|null} [cards_data] notify_gs_opencard cards_data
         * @property {Array.<niuniu.Iopen_cards_data>|null} [open_cards_data] notify_gs_opencard open_cards_data
         * @property {Array.<number>|null} [open_card_type] notify_gs_opencard open_card_type
         * @property {Array.<number>|null} [open_card_times] notify_gs_opencard open_card_times
         */

        /**
         * Constructs a new notify_gs_opencard.
         * @memberof niuniu
         * @classdesc Represents a notify_gs_opencard.
         * @implements Inotify_gs_opencard
         * @constructor
         * @param {niuniu.Inotify_gs_opencard=} [properties] Properties to set
         */
        function notify_gs_opencard(properties) {
            this.playing_status = [];
            this.user_bet_score = [];
            this.cards_data = [];
            this.open_cards_data = [];
            this.open_card_type = [];
            this.open_card_times = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_gs_opencard dealid.
         * @member {string} dealid
         * @memberof niuniu.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.dealid = "";

        /**
         * notify_gs_opencard base_score.
         * @member {number|Long} base_score
         * @memberof niuniu.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.base_score = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * notify_gs_opencard playing_status.
         * @member {Array.<boolean>} playing_status
         * @memberof niuniu.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.playing_status = $util.emptyArray;

        /**
         * notify_gs_opencard banker_chairid.
         * @member {number} banker_chairid
         * @memberof niuniu.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.banker_chairid = 0;

        /**
         * notify_gs_opencard banker_times.
         * @member {number} banker_times
         * @memberof niuniu.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.banker_times = 0;

        /**
         * notify_gs_opencard user_bet_score.
         * @member {Array.<number|Long>} user_bet_score
         * @memberof niuniu.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.user_bet_score = $util.emptyArray;

        /**
         * notify_gs_opencard cards_data.
         * @member {Array.<number>} cards_data
         * @memberof niuniu.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.cards_data = $util.emptyArray;

        /**
         * notify_gs_opencard open_cards_data.
         * @member {Array.<niuniu.Iopen_cards_data>} open_cards_data
         * @memberof niuniu.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.open_cards_data = $util.emptyArray;

        /**
         * notify_gs_opencard open_card_type.
         * @member {Array.<number>} open_card_type
         * @memberof niuniu.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.open_card_type = $util.emptyArray;

        /**
         * notify_gs_opencard open_card_times.
         * @member {Array.<number>} open_card_times
         * @memberof niuniu.notify_gs_opencard
         * @instance
         */
        notify_gs_opencard.prototype.open_card_times = $util.emptyArray;

        /**
         * Creates a new notify_gs_opencard instance using the specified properties.
         * @function create
         * @memberof niuniu.notify_gs_opencard
         * @static
         * @param {niuniu.Inotify_gs_opencard=} [properties] Properties to set
         * @returns {niuniu.notify_gs_opencard} notify_gs_opencard instance
         */
        notify_gs_opencard.create = function create(properties) {
            return new notify_gs_opencard(properties);
        };

        /**
         * Encodes the specified notify_gs_opencard message. Does not implicitly {@link niuniu.notify_gs_opencard.verify|verify} messages.
         * @function encode
         * @memberof niuniu.notify_gs_opencard
         * @static
         * @param {niuniu.Inotify_gs_opencard} message notify_gs_opencard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_gs_opencard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.dealid);
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.base_score);
            if (message.playing_status != null && message.playing_status.length)
                for (var i = 0; i < message.playing_status.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.playing_status[i]);
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.banker_chairid);
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.banker_times);
            if (message.user_bet_score != null && message.user_bet_score.length)
                for (var i = 0; i < message.user_bet_score.length; ++i)
                    writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.user_bet_score[i]);
            if (message.cards_data != null && message.cards_data.length)
                for (var i = 0; i < message.cards_data.length; ++i)
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.cards_data[i]);
            if (message.open_cards_data != null && message.open_cards_data.length)
                for (var i = 0; i < message.open_cards_data.length; ++i)
                    $root.niuniu.open_cards_data.encode(message.open_cards_data[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.open_card_type != null && message.open_card_type.length)
                for (var i = 0; i < message.open_card_type.length; ++i)
                    writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.open_card_type[i]);
            if (message.open_card_times != null && message.open_card_times.length)
                for (var i = 0; i < message.open_card_times.length; ++i)
                    writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.open_card_times[i]);
            return writer;
        };

        /**
         * Encodes the specified notify_gs_opencard message, length delimited. Does not implicitly {@link niuniu.notify_gs_opencard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof niuniu.notify_gs_opencard
         * @static
         * @param {niuniu.Inotify_gs_opencard} message notify_gs_opencard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_gs_opencard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_gs_opencard message from the specified reader or buffer.
         * @function decode
         * @memberof niuniu.notify_gs_opencard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {niuniu.notify_gs_opencard} notify_gs_opencard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_gs_opencard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.niuniu.notify_gs_opencard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.dealid = reader.string();
                    break;
                case 2:
                    message.base_score = reader.uint64();
                    break;
                case 3:
                    if (!(message.playing_status && message.playing_status.length))
                        message.playing_status = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.playing_status.push(reader.bool());
                    } else
                        message.playing_status.push(reader.bool());
                    break;
                case 4:
                    message.banker_chairid = reader.uint32();
                    break;
                case 5:
                    message.banker_times = reader.uint32();
                    break;
                case 6:
                    if (!(message.user_bet_score && message.user_bet_score.length))
                        message.user_bet_score = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.user_bet_score.push(reader.uint64());
                    } else
                        message.user_bet_score.push(reader.uint64());
                    break;
                case 7:
                    if (!(message.cards_data && message.cards_data.length))
                        message.cards_data = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards_data.push(reader.uint32());
                    } else
                        message.cards_data.push(reader.uint32());
                    break;
                case 8:
                    if (!(message.open_cards_data && message.open_cards_data.length))
                        message.open_cards_data = [];
                    message.open_cards_data.push($root.niuniu.open_cards_data.decode(reader, reader.uint32()));
                    break;
                case 9:
                    if (!(message.open_card_type && message.open_card_type.length))
                        message.open_card_type = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.open_card_type.push(reader.uint32());
                    } else
                        message.open_card_type.push(reader.uint32());
                    break;
                case 10:
                    if (!(message.open_card_times && message.open_card_times.length))
                        message.open_card_times = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.open_card_times.push(reader.uint32());
                    } else
                        message.open_card_times.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("dealid"))
                throw $util.ProtocolError("missing required 'dealid'", { instance: message });
            if (!message.hasOwnProperty("base_score"))
                throw $util.ProtocolError("missing required 'base_score'", { instance: message });
            if (!message.hasOwnProperty("banker_chairid"))
                throw $util.ProtocolError("missing required 'banker_chairid'", { instance: message });
            if (!message.hasOwnProperty("banker_times"))
                throw $util.ProtocolError("missing required 'banker_times'", { instance: message });
            return message;
        };

        /**
         * Decodes a notify_gs_opencard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof niuniu.notify_gs_opencard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {niuniu.notify_gs_opencard} notify_gs_opencard
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
         * @memberof niuniu.notify_gs_opencard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_gs_opencard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.dealid))
                return "dealid: string expected";
            if (!$util.isInteger(message.base_score) && !(message.base_score && $util.isInteger(message.base_score.low) && $util.isInteger(message.base_score.high)))
                return "base_score: integer|Long expected";
            if (message.playing_status != null && message.hasOwnProperty("playing_status")) {
                if (!Array.isArray(message.playing_status))
                    return "playing_status: array expected";
                for (var i = 0; i < message.playing_status.length; ++i)
                    if (typeof message.playing_status[i] !== "boolean")
                        return "playing_status: boolean[] expected";
            }
            if (!$util.isInteger(message.banker_chairid))
                return "banker_chairid: integer expected";
            if (!$util.isInteger(message.banker_times))
                return "banker_times: integer expected";
            if (message.user_bet_score != null && message.hasOwnProperty("user_bet_score")) {
                if (!Array.isArray(message.user_bet_score))
                    return "user_bet_score: array expected";
                for (var i = 0; i < message.user_bet_score.length; ++i)
                    if (!$util.isInteger(message.user_bet_score[i]) && !(message.user_bet_score[i] && $util.isInteger(message.user_bet_score[i].low) && $util.isInteger(message.user_bet_score[i].high)))
                        return "user_bet_score: integer|Long[] expected";
            }
            if (message.cards_data != null && message.hasOwnProperty("cards_data")) {
                if (!Array.isArray(message.cards_data))
                    return "cards_data: array expected";
                for (var i = 0; i < message.cards_data.length; ++i)
                    if (!$util.isInteger(message.cards_data[i]))
                        return "cards_data: integer[] expected";
            }
            if (message.open_cards_data != null && message.hasOwnProperty("open_cards_data")) {
                if (!Array.isArray(message.open_cards_data))
                    return "open_cards_data: array expected";
                for (var i = 0; i < message.open_cards_data.length; ++i) {
                    var error = $root.niuniu.open_cards_data.verify(message.open_cards_data[i]);
                    if (error)
                        return "open_cards_data." + error;
                }
            }
            if (message.open_card_type != null && message.hasOwnProperty("open_card_type")) {
                if (!Array.isArray(message.open_card_type))
                    return "open_card_type: array expected";
                for (var i = 0; i < message.open_card_type.length; ++i)
                    if (!$util.isInteger(message.open_card_type[i]))
                        return "open_card_type: integer[] expected";
            }
            if (message.open_card_times != null && message.hasOwnProperty("open_card_times")) {
                if (!Array.isArray(message.open_card_times))
                    return "open_card_times: array expected";
                for (var i = 0; i < message.open_card_times.length; ++i)
                    if (!$util.isInteger(message.open_card_times[i]))
                        return "open_card_times: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a notify_gs_opencard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof niuniu.notify_gs_opencard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {niuniu.notify_gs_opencard} notify_gs_opencard
         */
        notify_gs_opencard.fromObject = function fromObject(object) {
            if (object instanceof $root.niuniu.notify_gs_opencard)
                return object;
            var message = new $root.niuniu.notify_gs_opencard();
            if (object.dealid != null)
                message.dealid = String(object.dealid);
            if (object.base_score != null)
                if ($util.Long)
                    (message.base_score = $util.Long.fromValue(object.base_score)).unsigned = true;
                else if (typeof object.base_score === "string")
                    message.base_score = parseInt(object.base_score, 10);
                else if (typeof object.base_score === "number")
                    message.base_score = object.base_score;
                else if (typeof object.base_score === "object")
                    message.base_score = new $util.LongBits(object.base_score.low >>> 0, object.base_score.high >>> 0).toNumber(true);
            if (object.playing_status) {
                if (!Array.isArray(object.playing_status))
                    throw TypeError(".niuniu.notify_gs_opencard.playing_status: array expected");
                message.playing_status = [];
                for (var i = 0; i < object.playing_status.length; ++i)
                    message.playing_status[i] = Boolean(object.playing_status[i]);
            }
            if (object.banker_chairid != null)
                message.banker_chairid = object.banker_chairid >>> 0;
            if (object.banker_times != null)
                message.banker_times = object.banker_times >>> 0;
            if (object.user_bet_score) {
                if (!Array.isArray(object.user_bet_score))
                    throw TypeError(".niuniu.notify_gs_opencard.user_bet_score: array expected");
                message.user_bet_score = [];
                for (var i = 0; i < object.user_bet_score.length; ++i)
                    if ($util.Long)
                        (message.user_bet_score[i] = $util.Long.fromValue(object.user_bet_score[i])).unsigned = true;
                    else if (typeof object.user_bet_score[i] === "string")
                        message.user_bet_score[i] = parseInt(object.user_bet_score[i], 10);
                    else if (typeof object.user_bet_score[i] === "number")
                        message.user_bet_score[i] = object.user_bet_score[i];
                    else if (typeof object.user_bet_score[i] === "object")
                        message.user_bet_score[i] = new $util.LongBits(object.user_bet_score[i].low >>> 0, object.user_bet_score[i].high >>> 0).toNumber(true);
            }
            if (object.cards_data) {
                if (!Array.isArray(object.cards_data))
                    throw TypeError(".niuniu.notify_gs_opencard.cards_data: array expected");
                message.cards_data = [];
                for (var i = 0; i < object.cards_data.length; ++i)
                    message.cards_data[i] = object.cards_data[i] >>> 0;
            }
            if (object.open_cards_data) {
                if (!Array.isArray(object.open_cards_data))
                    throw TypeError(".niuniu.notify_gs_opencard.open_cards_data: array expected");
                message.open_cards_data = [];
                for (var i = 0; i < object.open_cards_data.length; ++i) {
                    if (typeof object.open_cards_data[i] !== "object")
                        throw TypeError(".niuniu.notify_gs_opencard.open_cards_data: object expected");
                    message.open_cards_data[i] = $root.niuniu.open_cards_data.fromObject(object.open_cards_data[i]);
                }
            }
            if (object.open_card_type) {
                if (!Array.isArray(object.open_card_type))
                    throw TypeError(".niuniu.notify_gs_opencard.open_card_type: array expected");
                message.open_card_type = [];
                for (var i = 0; i < object.open_card_type.length; ++i)
                    message.open_card_type[i] = object.open_card_type[i] >>> 0;
            }
            if (object.open_card_times) {
                if (!Array.isArray(object.open_card_times))
                    throw TypeError(".niuniu.notify_gs_opencard.open_card_times: array expected");
                message.open_card_times = [];
                for (var i = 0; i < object.open_card_times.length; ++i)
                    message.open_card_times[i] = object.open_card_times[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a notify_gs_opencard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof niuniu.notify_gs_opencard
         * @static
         * @param {niuniu.notify_gs_opencard} message notify_gs_opencard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_gs_opencard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.playing_status = [];
                object.user_bet_score = [];
                object.cards_data = [];
                object.open_cards_data = [];
                object.open_card_type = [];
                object.open_card_times = [];
            }
            if (options.defaults) {
                object.dealid = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.base_score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.base_score = options.longs === String ? "0" : 0;
                object.banker_chairid = 0;
                object.banker_times = 0;
            }
            if (message.dealid != null && message.hasOwnProperty("dealid"))
                object.dealid = message.dealid;
            if (message.base_score != null && message.hasOwnProperty("base_score"))
                if (typeof message.base_score === "number")
                    object.base_score = options.longs === String ? String(message.base_score) : message.base_score;
                else
                    object.base_score = options.longs === String ? $util.Long.prototype.toString.call(message.base_score) : options.longs === Number ? new $util.LongBits(message.base_score.low >>> 0, message.base_score.high >>> 0).toNumber(true) : message.base_score;
            if (message.playing_status && message.playing_status.length) {
                object.playing_status = [];
                for (var j = 0; j < message.playing_status.length; ++j)
                    object.playing_status[j] = message.playing_status[j];
            }
            if (message.banker_chairid != null && message.hasOwnProperty("banker_chairid"))
                object.banker_chairid = message.banker_chairid;
            if (message.banker_times != null && message.hasOwnProperty("banker_times"))
                object.banker_times = message.banker_times;
            if (message.user_bet_score && message.user_bet_score.length) {
                object.user_bet_score = [];
                for (var j = 0; j < message.user_bet_score.length; ++j)
                    if (typeof message.user_bet_score[j] === "number")
                        object.user_bet_score[j] = options.longs === String ? String(message.user_bet_score[j]) : message.user_bet_score[j];
                    else
                        object.user_bet_score[j] = options.longs === String ? $util.Long.prototype.toString.call(message.user_bet_score[j]) : options.longs === Number ? new $util.LongBits(message.user_bet_score[j].low >>> 0, message.user_bet_score[j].high >>> 0).toNumber(true) : message.user_bet_score[j];
            }
            if (message.cards_data && message.cards_data.length) {
                object.cards_data = [];
                for (var j = 0; j < message.cards_data.length; ++j)
                    object.cards_data[j] = message.cards_data[j];
            }
            if (message.open_cards_data && message.open_cards_data.length) {
                object.open_cards_data = [];
                for (var j = 0; j < message.open_cards_data.length; ++j)
                    object.open_cards_data[j] = $root.niuniu.open_cards_data.toObject(message.open_cards_data[j], options);
            }
            if (message.open_card_type && message.open_card_type.length) {
                object.open_card_type = [];
                for (var j = 0; j < message.open_card_type.length; ++j)
                    object.open_card_type[j] = message.open_card_type[j];
            }
            if (message.open_card_times && message.open_card_times.length) {
                object.open_card_times = [];
                for (var j = 0; j < message.open_card_times.length; ++j)
                    object.open_card_times[j] = message.open_card_times[j];
            }
            return object;
        };

        /**
         * Converts this notify_gs_opencard to JSON.
         * @function toJSON
         * @memberof niuniu.notify_gs_opencard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_gs_opencard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_gs_opencard;
    })();

    niuniu.notify_game_start = (function() {

        /**
         * Properties of a notify_game_start.
         * @memberof niuniu
         * @interface Inotify_game_start
         * @property {string} dealid notify_game_start dealid
         * @property {Array.<number>|null} [cards_data] notify_game_start cards_data
         */

        /**
         * Constructs a new notify_game_start.
         * @memberof niuniu
         * @classdesc Represents a notify_game_start.
         * @implements Inotify_game_start
         * @constructor
         * @param {niuniu.Inotify_game_start=} [properties] Properties to set
         */
        function notify_game_start(properties) {
            this.cards_data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_game_start dealid.
         * @member {string} dealid
         * @memberof niuniu.notify_game_start
         * @instance
         */
        notify_game_start.prototype.dealid = "";

        /**
         * notify_game_start cards_data.
         * @member {Array.<number>} cards_data
         * @memberof niuniu.notify_game_start
         * @instance
         */
        notify_game_start.prototype.cards_data = $util.emptyArray;

        /**
         * Creates a new notify_game_start instance using the specified properties.
         * @function create
         * @memberof niuniu.notify_game_start
         * @static
         * @param {niuniu.Inotify_game_start=} [properties] Properties to set
         * @returns {niuniu.notify_game_start} notify_game_start instance
         */
        notify_game_start.create = function create(properties) {
            return new notify_game_start(properties);
        };

        /**
         * Encodes the specified notify_game_start message. Does not implicitly {@link niuniu.notify_game_start.verify|verify} messages.
         * @function encode
         * @memberof niuniu.notify_game_start
         * @static
         * @param {niuniu.Inotify_game_start} message notify_game_start message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_game_start.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.dealid);
            if (message.cards_data != null && message.cards_data.length)
                for (var i = 0; i < message.cards_data.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.cards_data[i]);
            return writer;
        };

        /**
         * Encodes the specified notify_game_start message, length delimited. Does not implicitly {@link niuniu.notify_game_start.verify|verify} messages.
         * @function encodeDelimited
         * @memberof niuniu.notify_game_start
         * @static
         * @param {niuniu.Inotify_game_start} message notify_game_start message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_game_start.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_game_start message from the specified reader or buffer.
         * @function decode
         * @memberof niuniu.notify_game_start
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {niuniu.notify_game_start} notify_game_start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_game_start.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.niuniu.notify_game_start();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.dealid = reader.string();
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("dealid"))
                throw $util.ProtocolError("missing required 'dealid'", { instance: message });
            return message;
        };

        /**
         * Decodes a notify_game_start message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof niuniu.notify_game_start
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {niuniu.notify_game_start} notify_game_start
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
         * @memberof niuniu.notify_game_start
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_game_start.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.dealid))
                return "dealid: string expected";
            if (message.cards_data != null && message.hasOwnProperty("cards_data")) {
                if (!Array.isArray(message.cards_data))
                    return "cards_data: array expected";
                for (var i = 0; i < message.cards_data.length; ++i)
                    if (!$util.isInteger(message.cards_data[i]))
                        return "cards_data: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a notify_game_start message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof niuniu.notify_game_start
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {niuniu.notify_game_start} notify_game_start
         */
        notify_game_start.fromObject = function fromObject(object) {
            if (object instanceof $root.niuniu.notify_game_start)
                return object;
            var message = new $root.niuniu.notify_game_start();
            if (object.dealid != null)
                message.dealid = String(object.dealid);
            if (object.cards_data) {
                if (!Array.isArray(object.cards_data))
                    throw TypeError(".niuniu.notify_game_start.cards_data: array expected");
                message.cards_data = [];
                for (var i = 0; i < object.cards_data.length; ++i)
                    message.cards_data[i] = object.cards_data[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a notify_game_start message. Also converts values to other types if specified.
         * @function toObject
         * @memberof niuniu.notify_game_start
         * @static
         * @param {niuniu.notify_game_start} message notify_game_start
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_game_start.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cards_data = [];
            if (options.defaults)
                object.dealid = "";
            if (message.dealid != null && message.hasOwnProperty("dealid"))
                object.dealid = message.dealid;
            if (message.cards_data && message.cards_data.length) {
                object.cards_data = [];
                for (var j = 0; j < message.cards_data.length; ++j)
                    object.cards_data[j] = message.cards_data[j];
            }
            return object;
        };

        /**
         * Converts this notify_game_start to JSON.
         * @function toJSON
         * @memberof niuniu.notify_game_start
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_game_start.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_game_start;
    })();

    niuniu.notify_call_banker = (function() {

        /**
         * Properties of a notify_call_banker.
         * @memberof niuniu
         * @interface Inotify_call_banker
         * @property {number} call_banker_chairid notify_call_banker call_banker_chairid
         * @property {number} call_banker_times notify_call_banker call_banker_times
         */

        /**
         * Constructs a new notify_call_banker.
         * @memberof niuniu
         * @classdesc Represents a notify_call_banker.
         * @implements Inotify_call_banker
         * @constructor
         * @param {niuniu.Inotify_call_banker=} [properties] Properties to set
         */
        function notify_call_banker(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_call_banker call_banker_chairid.
         * @member {number} call_banker_chairid
         * @memberof niuniu.notify_call_banker
         * @instance
         */
        notify_call_banker.prototype.call_banker_chairid = 0;

        /**
         * notify_call_banker call_banker_times.
         * @member {number} call_banker_times
         * @memberof niuniu.notify_call_banker
         * @instance
         */
        notify_call_banker.prototype.call_banker_times = 0;

        /**
         * Creates a new notify_call_banker instance using the specified properties.
         * @function create
         * @memberof niuniu.notify_call_banker
         * @static
         * @param {niuniu.Inotify_call_banker=} [properties] Properties to set
         * @returns {niuniu.notify_call_banker} notify_call_banker instance
         */
        notify_call_banker.create = function create(properties) {
            return new notify_call_banker(properties);
        };

        /**
         * Encodes the specified notify_call_banker message. Does not implicitly {@link niuniu.notify_call_banker.verify|verify} messages.
         * @function encode
         * @memberof niuniu.notify_call_banker
         * @static
         * @param {niuniu.Inotify_call_banker} message notify_call_banker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_call_banker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.call_banker_chairid);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.call_banker_times);
            return writer;
        };

        /**
         * Encodes the specified notify_call_banker message, length delimited. Does not implicitly {@link niuniu.notify_call_banker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof niuniu.notify_call_banker
         * @static
         * @param {niuniu.Inotify_call_banker} message notify_call_banker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_call_banker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_call_banker message from the specified reader or buffer.
         * @function decode
         * @memberof niuniu.notify_call_banker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {niuniu.notify_call_banker} notify_call_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_call_banker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.niuniu.notify_call_banker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.call_banker_chairid = reader.uint32();
                    break;
                case 2:
                    message.call_banker_times = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("call_banker_chairid"))
                throw $util.ProtocolError("missing required 'call_banker_chairid'", { instance: message });
            if (!message.hasOwnProperty("call_banker_times"))
                throw $util.ProtocolError("missing required 'call_banker_times'", { instance: message });
            return message;
        };

        /**
         * Decodes a notify_call_banker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof niuniu.notify_call_banker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {niuniu.notify_call_banker} notify_call_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_call_banker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a notify_call_banker message.
         * @function verify
         * @memberof niuniu.notify_call_banker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_call_banker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.call_banker_chairid))
                return "call_banker_chairid: integer expected";
            if (!$util.isInteger(message.call_banker_times))
                return "call_banker_times: integer expected";
            return null;
        };

        /**
         * Creates a notify_call_banker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof niuniu.notify_call_banker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {niuniu.notify_call_banker} notify_call_banker
         */
        notify_call_banker.fromObject = function fromObject(object) {
            if (object instanceof $root.niuniu.notify_call_banker)
                return object;
            var message = new $root.niuniu.notify_call_banker();
            if (object.call_banker_chairid != null)
                message.call_banker_chairid = object.call_banker_chairid >>> 0;
            if (object.call_banker_times != null)
                message.call_banker_times = object.call_banker_times >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a notify_call_banker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof niuniu.notify_call_banker
         * @static
         * @param {niuniu.notify_call_banker} message notify_call_banker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_call_banker.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.call_banker_chairid = 0;
                object.call_banker_times = 0;
            }
            if (message.call_banker_chairid != null && message.hasOwnProperty("call_banker_chairid"))
                object.call_banker_chairid = message.call_banker_chairid;
            if (message.call_banker_times != null && message.hasOwnProperty("call_banker_times"))
                object.call_banker_times = message.call_banker_times;
            return object;
        };

        /**
         * Converts this notify_call_banker to JSON.
         * @function toJSON
         * @memberof niuniu.notify_call_banker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_call_banker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_call_banker;
    })();

    niuniu.notify_start_bet = (function() {

        /**
         * Properties of a notify_start_bet.
         * @memberof niuniu
         * @interface Inotify_start_bet
         * @property {number} banker_chairid notify_start_bet banker_chairid
         * @property {number} banker_times notify_start_bet banker_times
         * @property {Array.<number>|null} [call_user_list] notify_start_bet call_user_list
         * @property {Array.<number|Long>|null} [user_can_bet_score] notify_start_bet user_can_bet_score
         * @property {boolean} allow_double_bet notify_start_bet allow_double_bet
         */

        /**
         * Constructs a new notify_start_bet.
         * @memberof niuniu
         * @classdesc Represents a notify_start_bet.
         * @implements Inotify_start_bet
         * @constructor
         * @param {niuniu.Inotify_start_bet=} [properties] Properties to set
         */
        function notify_start_bet(properties) {
            this.call_user_list = [];
            this.user_can_bet_score = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_start_bet banker_chairid.
         * @member {number} banker_chairid
         * @memberof niuniu.notify_start_bet
         * @instance
         */
        notify_start_bet.prototype.banker_chairid = 0;

        /**
         * notify_start_bet banker_times.
         * @member {number} banker_times
         * @memberof niuniu.notify_start_bet
         * @instance
         */
        notify_start_bet.prototype.banker_times = 0;

        /**
         * notify_start_bet call_user_list.
         * @member {Array.<number>} call_user_list
         * @memberof niuniu.notify_start_bet
         * @instance
         */
        notify_start_bet.prototype.call_user_list = $util.emptyArray;

        /**
         * notify_start_bet user_can_bet_score.
         * @member {Array.<number|Long>} user_can_bet_score
         * @memberof niuniu.notify_start_bet
         * @instance
         */
        notify_start_bet.prototype.user_can_bet_score = $util.emptyArray;

        /**
         * notify_start_bet allow_double_bet.
         * @member {boolean} allow_double_bet
         * @memberof niuniu.notify_start_bet
         * @instance
         */
        notify_start_bet.prototype.allow_double_bet = false;

        /**
         * Creates a new notify_start_bet instance using the specified properties.
         * @function create
         * @memberof niuniu.notify_start_bet
         * @static
         * @param {niuniu.Inotify_start_bet=} [properties] Properties to set
         * @returns {niuniu.notify_start_bet} notify_start_bet instance
         */
        notify_start_bet.create = function create(properties) {
            return new notify_start_bet(properties);
        };

        /**
         * Encodes the specified notify_start_bet message. Does not implicitly {@link niuniu.notify_start_bet.verify|verify} messages.
         * @function encode
         * @memberof niuniu.notify_start_bet
         * @static
         * @param {niuniu.Inotify_start_bet} message notify_start_bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_start_bet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.banker_chairid);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.banker_times);
            if (message.call_user_list != null && message.call_user_list.length)
                for (var i = 0; i < message.call_user_list.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.call_user_list[i]);
            if (message.user_can_bet_score != null && message.user_can_bet_score.length)
                for (var i = 0; i < message.user_can_bet_score.length; ++i)
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.user_can_bet_score[i]);
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.allow_double_bet);
            return writer;
        };

        /**
         * Encodes the specified notify_start_bet message, length delimited. Does not implicitly {@link niuniu.notify_start_bet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof niuniu.notify_start_bet
         * @static
         * @param {niuniu.Inotify_start_bet} message notify_start_bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_start_bet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_start_bet message from the specified reader or buffer.
         * @function decode
         * @memberof niuniu.notify_start_bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {niuniu.notify_start_bet} notify_start_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_start_bet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.niuniu.notify_start_bet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.banker_chairid = reader.uint32();
                    break;
                case 2:
                    message.banker_times = reader.uint32();
                    break;
                case 3:
                    if (!(message.call_user_list && message.call_user_list.length))
                        message.call_user_list = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.call_user_list.push(reader.uint32());
                    } else
                        message.call_user_list.push(reader.uint32());
                    break;
                case 4:
                    if (!(message.user_can_bet_score && message.user_can_bet_score.length))
                        message.user_can_bet_score = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.user_can_bet_score.push(reader.uint64());
                    } else
                        message.user_can_bet_score.push(reader.uint64());
                    break;
                case 5:
                    message.allow_double_bet = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("banker_chairid"))
                throw $util.ProtocolError("missing required 'banker_chairid'", { instance: message });
            if (!message.hasOwnProperty("banker_times"))
                throw $util.ProtocolError("missing required 'banker_times'", { instance: message });
            if (!message.hasOwnProperty("allow_double_bet"))
                throw $util.ProtocolError("missing required 'allow_double_bet'", { instance: message });
            return message;
        };

        /**
         * Decodes a notify_start_bet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof niuniu.notify_start_bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {niuniu.notify_start_bet} notify_start_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_start_bet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a notify_start_bet message.
         * @function verify
         * @memberof niuniu.notify_start_bet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_start_bet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.banker_chairid))
                return "banker_chairid: integer expected";
            if (!$util.isInteger(message.banker_times))
                return "banker_times: integer expected";
            if (message.call_user_list != null && message.hasOwnProperty("call_user_list")) {
                if (!Array.isArray(message.call_user_list))
                    return "call_user_list: array expected";
                for (var i = 0; i < message.call_user_list.length; ++i)
                    if (!$util.isInteger(message.call_user_list[i]))
                        return "call_user_list: integer[] expected";
            }
            if (message.user_can_bet_score != null && message.hasOwnProperty("user_can_bet_score")) {
                if (!Array.isArray(message.user_can_bet_score))
                    return "user_can_bet_score: array expected";
                for (var i = 0; i < message.user_can_bet_score.length; ++i)
                    if (!$util.isInteger(message.user_can_bet_score[i]) && !(message.user_can_bet_score[i] && $util.isInteger(message.user_can_bet_score[i].low) && $util.isInteger(message.user_can_bet_score[i].high)))
                        return "user_can_bet_score: integer|Long[] expected";
            }
            if (typeof message.allow_double_bet !== "boolean")
                return "allow_double_bet: boolean expected";
            return null;
        };

        /**
         * Creates a notify_start_bet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof niuniu.notify_start_bet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {niuniu.notify_start_bet} notify_start_bet
         */
        notify_start_bet.fromObject = function fromObject(object) {
            if (object instanceof $root.niuniu.notify_start_bet)
                return object;
            var message = new $root.niuniu.notify_start_bet();
            if (object.banker_chairid != null)
                message.banker_chairid = object.banker_chairid >>> 0;
            if (object.banker_times != null)
                message.banker_times = object.banker_times >>> 0;
            if (object.call_user_list) {
                if (!Array.isArray(object.call_user_list))
                    throw TypeError(".niuniu.notify_start_bet.call_user_list: array expected");
                message.call_user_list = [];
                for (var i = 0; i < object.call_user_list.length; ++i)
                    message.call_user_list[i] = object.call_user_list[i] >>> 0;
            }
            if (object.user_can_bet_score) {
                if (!Array.isArray(object.user_can_bet_score))
                    throw TypeError(".niuniu.notify_start_bet.user_can_bet_score: array expected");
                message.user_can_bet_score = [];
                for (var i = 0; i < object.user_can_bet_score.length; ++i)
                    if ($util.Long)
                        (message.user_can_bet_score[i] = $util.Long.fromValue(object.user_can_bet_score[i])).unsigned = true;
                    else if (typeof object.user_can_bet_score[i] === "string")
                        message.user_can_bet_score[i] = parseInt(object.user_can_bet_score[i], 10);
                    else if (typeof object.user_can_bet_score[i] === "number")
                        message.user_can_bet_score[i] = object.user_can_bet_score[i];
                    else if (typeof object.user_can_bet_score[i] === "object")
                        message.user_can_bet_score[i] = new $util.LongBits(object.user_can_bet_score[i].low >>> 0, object.user_can_bet_score[i].high >>> 0).toNumber(true);
            }
            if (object.allow_double_bet != null)
                message.allow_double_bet = Boolean(object.allow_double_bet);
            return message;
        };

        /**
         * Creates a plain object from a notify_start_bet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof niuniu.notify_start_bet
         * @static
         * @param {niuniu.notify_start_bet} message notify_start_bet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_start_bet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.call_user_list = [];
                object.user_can_bet_score = [];
            }
            if (options.defaults) {
                object.banker_chairid = 0;
                object.banker_times = 0;
                object.allow_double_bet = false;
            }
            if (message.banker_chairid != null && message.hasOwnProperty("banker_chairid"))
                object.banker_chairid = message.banker_chairid;
            if (message.banker_times != null && message.hasOwnProperty("banker_times"))
                object.banker_times = message.banker_times;
            if (message.call_user_list && message.call_user_list.length) {
                object.call_user_list = [];
                for (var j = 0; j < message.call_user_list.length; ++j)
                    object.call_user_list[j] = message.call_user_list[j];
            }
            if (message.user_can_bet_score && message.user_can_bet_score.length) {
                object.user_can_bet_score = [];
                for (var j = 0; j < message.user_can_bet_score.length; ++j)
                    if (typeof message.user_can_bet_score[j] === "number")
                        object.user_can_bet_score[j] = options.longs === String ? String(message.user_can_bet_score[j]) : message.user_can_bet_score[j];
                    else
                        object.user_can_bet_score[j] = options.longs === String ? $util.Long.prototype.toString.call(message.user_can_bet_score[j]) : options.longs === Number ? new $util.LongBits(message.user_can_bet_score[j].low >>> 0, message.user_can_bet_score[j].high >>> 0).toNumber(true) : message.user_can_bet_score[j];
            }
            if (message.allow_double_bet != null && message.hasOwnProperty("allow_double_bet"))
                object.allow_double_bet = message.allow_double_bet;
            return object;
        };

        /**
         * Converts this notify_start_bet to JSON.
         * @function toJSON
         * @memberof niuniu.notify_start_bet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_start_bet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_start_bet;
    })();

    niuniu.notify_bet = (function() {

        /**
         * Properties of a notify_bet.
         * @memberof niuniu
         * @interface Inotify_bet
         * @property {number} bet_chairid notify_bet bet_chairid
         * @property {number|Long} bet_score notify_bet bet_score
         */

        /**
         * Constructs a new notify_bet.
         * @memberof niuniu
         * @classdesc Represents a notify_bet.
         * @implements Inotify_bet
         * @constructor
         * @param {niuniu.Inotify_bet=} [properties] Properties to set
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
         * @memberof niuniu.notify_bet
         * @instance
         */
        notify_bet.prototype.bet_chairid = 0;

        /**
         * notify_bet bet_score.
         * @member {number|Long} bet_score
         * @memberof niuniu.notify_bet
         * @instance
         */
        notify_bet.prototype.bet_score = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new notify_bet instance using the specified properties.
         * @function create
         * @memberof niuniu.notify_bet
         * @static
         * @param {niuniu.Inotify_bet=} [properties] Properties to set
         * @returns {niuniu.notify_bet} notify_bet instance
         */
        notify_bet.create = function create(properties) {
            return new notify_bet(properties);
        };

        /**
         * Encodes the specified notify_bet message. Does not implicitly {@link niuniu.notify_bet.verify|verify} messages.
         * @function encode
         * @memberof niuniu.notify_bet
         * @static
         * @param {niuniu.Inotify_bet} message notify_bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_bet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.bet_chairid);
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.bet_score);
            return writer;
        };

        /**
         * Encodes the specified notify_bet message, length delimited. Does not implicitly {@link niuniu.notify_bet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof niuniu.notify_bet
         * @static
         * @param {niuniu.Inotify_bet} message notify_bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_bet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_bet message from the specified reader or buffer.
         * @function decode
         * @memberof niuniu.notify_bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {niuniu.notify_bet} notify_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_bet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.niuniu.notify_bet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bet_chairid = reader.uint32();
                    break;
                case 2:
                    message.bet_score = reader.uint64();
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
            return message;
        };

        /**
         * Decodes a notify_bet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof niuniu.notify_bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {niuniu.notify_bet} notify_bet
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
         * @memberof niuniu.notify_bet
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
            return null;
        };

        /**
         * Creates a notify_bet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof niuniu.notify_bet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {niuniu.notify_bet} notify_bet
         */
        notify_bet.fromObject = function fromObject(object) {
            if (object instanceof $root.niuniu.notify_bet)
                return object;
            var message = new $root.niuniu.notify_bet();
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
            return message;
        };

        /**
         * Creates a plain object from a notify_bet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof niuniu.notify_bet
         * @static
         * @param {niuniu.notify_bet} message notify_bet
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
            }
            if (message.bet_chairid != null && message.hasOwnProperty("bet_chairid"))
                object.bet_chairid = message.bet_chairid;
            if (message.bet_score != null && message.hasOwnProperty("bet_score"))
                if (typeof message.bet_score === "number")
                    object.bet_score = options.longs === String ? String(message.bet_score) : message.bet_score;
                else
                    object.bet_score = options.longs === String ? $util.Long.prototype.toString.call(message.bet_score) : options.longs === Number ? new $util.LongBits(message.bet_score.low >>> 0, message.bet_score.high >>> 0).toNumber(true) : message.bet_score;
            return object;
        };

        /**
         * Converts this notify_bet to JSON.
         * @function toJSON
         * @memberof niuniu.notify_bet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_bet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_bet;
    })();

    niuniu.notify_start_open_card = (function() {

        /**
         * Properties of a notify_start_open_card.
         * @memberof niuniu
         * @interface Inotify_start_open_card
         * @property {Array.<number>|null} [cards_data] notify_start_open_card cards_data
         */

        /**
         * Constructs a new notify_start_open_card.
         * @memberof niuniu
         * @classdesc Represents a notify_start_open_card.
         * @implements Inotify_start_open_card
         * @constructor
         * @param {niuniu.Inotify_start_open_card=} [properties] Properties to set
         */
        function notify_start_open_card(properties) {
            this.cards_data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_start_open_card cards_data.
         * @member {Array.<number>} cards_data
         * @memberof niuniu.notify_start_open_card
         * @instance
         */
        notify_start_open_card.prototype.cards_data = $util.emptyArray;

        /**
         * Creates a new notify_start_open_card instance using the specified properties.
         * @function create
         * @memberof niuniu.notify_start_open_card
         * @static
         * @param {niuniu.Inotify_start_open_card=} [properties] Properties to set
         * @returns {niuniu.notify_start_open_card} notify_start_open_card instance
         */
        notify_start_open_card.create = function create(properties) {
            return new notify_start_open_card(properties);
        };

        /**
         * Encodes the specified notify_start_open_card message. Does not implicitly {@link niuniu.notify_start_open_card.verify|verify} messages.
         * @function encode
         * @memberof niuniu.notify_start_open_card
         * @static
         * @param {niuniu.Inotify_start_open_card} message notify_start_open_card message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_start_open_card.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cards_data != null && message.cards_data.length)
                for (var i = 0; i < message.cards_data.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.cards_data[i]);
            return writer;
        };

        /**
         * Encodes the specified notify_start_open_card message, length delimited. Does not implicitly {@link niuniu.notify_start_open_card.verify|verify} messages.
         * @function encodeDelimited
         * @memberof niuniu.notify_start_open_card
         * @static
         * @param {niuniu.Inotify_start_open_card} message notify_start_open_card message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_start_open_card.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_start_open_card message from the specified reader or buffer.
         * @function decode
         * @memberof niuniu.notify_start_open_card
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {niuniu.notify_start_open_card} notify_start_open_card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_start_open_card.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.niuniu.notify_start_open_card();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.cards_data && message.cards_data.length))
                        message.cards_data = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards_data.push(reader.uint32());
                    } else
                        message.cards_data.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a notify_start_open_card message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof niuniu.notify_start_open_card
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {niuniu.notify_start_open_card} notify_start_open_card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_start_open_card.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a notify_start_open_card message.
         * @function verify
         * @memberof niuniu.notify_start_open_card
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_start_open_card.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cards_data != null && message.hasOwnProperty("cards_data")) {
                if (!Array.isArray(message.cards_data))
                    return "cards_data: array expected";
                for (var i = 0; i < message.cards_data.length; ++i)
                    if (!$util.isInteger(message.cards_data[i]))
                        return "cards_data: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a notify_start_open_card message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof niuniu.notify_start_open_card
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {niuniu.notify_start_open_card} notify_start_open_card
         */
        notify_start_open_card.fromObject = function fromObject(object) {
            if (object instanceof $root.niuniu.notify_start_open_card)
                return object;
            var message = new $root.niuniu.notify_start_open_card();
            if (object.cards_data) {
                if (!Array.isArray(object.cards_data))
                    throw TypeError(".niuniu.notify_start_open_card.cards_data: array expected");
                message.cards_data = [];
                for (var i = 0; i < object.cards_data.length; ++i)
                    message.cards_data[i] = object.cards_data[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a notify_start_open_card message. Also converts values to other types if specified.
         * @function toObject
         * @memberof niuniu.notify_start_open_card
         * @static
         * @param {niuniu.notify_start_open_card} message notify_start_open_card
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_start_open_card.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cards_data = [];
            if (message.cards_data && message.cards_data.length) {
                object.cards_data = [];
                for (var j = 0; j < message.cards_data.length; ++j)
                    object.cards_data[j] = message.cards_data[j];
            }
            return object;
        };

        /**
         * Converts this notify_start_open_card to JSON.
         * @function toJSON
         * @memberof niuniu.notify_start_open_card
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_start_open_card.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_start_open_card;
    })();

    niuniu.notify_open_cards = (function() {

        /**
         * Properties of a notify_open_cards.
         * @memberof niuniu
         * @interface Inotify_open_cards
         * @property {number} open_chairid notify_open_cards open_chairid
         * @property {number} open_card_type notify_open_cards open_card_type
         * @property {Array.<number>|null} [open_cards_data] notify_open_cards open_cards_data
         * @property {number} open_card_times notify_open_cards open_card_times
         */

        /**
         * Constructs a new notify_open_cards.
         * @memberof niuniu
         * @classdesc Represents a notify_open_cards.
         * @implements Inotify_open_cards
         * @constructor
         * @param {niuniu.Inotify_open_cards=} [properties] Properties to set
         */
        function notify_open_cards(properties) {
            this.open_cards_data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_open_cards open_chairid.
         * @member {number} open_chairid
         * @memberof niuniu.notify_open_cards
         * @instance
         */
        notify_open_cards.prototype.open_chairid = 0;

        /**
         * notify_open_cards open_card_type.
         * @member {number} open_card_type
         * @memberof niuniu.notify_open_cards
         * @instance
         */
        notify_open_cards.prototype.open_card_type = 0;

        /**
         * notify_open_cards open_cards_data.
         * @member {Array.<number>} open_cards_data
         * @memberof niuniu.notify_open_cards
         * @instance
         */
        notify_open_cards.prototype.open_cards_data = $util.emptyArray;

        /**
         * notify_open_cards open_card_times.
         * @member {number} open_card_times
         * @memberof niuniu.notify_open_cards
         * @instance
         */
        notify_open_cards.prototype.open_card_times = 0;

        /**
         * Creates a new notify_open_cards instance using the specified properties.
         * @function create
         * @memberof niuniu.notify_open_cards
         * @static
         * @param {niuniu.Inotify_open_cards=} [properties] Properties to set
         * @returns {niuniu.notify_open_cards} notify_open_cards instance
         */
        notify_open_cards.create = function create(properties) {
            return new notify_open_cards(properties);
        };

        /**
         * Encodes the specified notify_open_cards message. Does not implicitly {@link niuniu.notify_open_cards.verify|verify} messages.
         * @function encode
         * @memberof niuniu.notify_open_cards
         * @static
         * @param {niuniu.Inotify_open_cards} message notify_open_cards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_open_cards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.open_chairid);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.open_card_type);
            if (message.open_cards_data != null && message.open_cards_data.length)
                for (var i = 0; i < message.open_cards_data.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.open_cards_data[i]);
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.open_card_times);
            return writer;
        };

        /**
         * Encodes the specified notify_open_cards message, length delimited. Does not implicitly {@link niuniu.notify_open_cards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof niuniu.notify_open_cards
         * @static
         * @param {niuniu.Inotify_open_cards} message notify_open_cards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_open_cards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_open_cards message from the specified reader or buffer.
         * @function decode
         * @memberof niuniu.notify_open_cards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {niuniu.notify_open_cards} notify_open_cards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_open_cards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.niuniu.notify_open_cards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.open_chairid = reader.uint32();
                    break;
                case 2:
                    message.open_card_type = reader.uint32();
                    break;
                case 3:
                    if (!(message.open_cards_data && message.open_cards_data.length))
                        message.open_cards_data = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.open_cards_data.push(reader.uint32());
                    } else
                        message.open_cards_data.push(reader.uint32());
                    break;
                case 4:
                    message.open_card_times = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("open_chairid"))
                throw $util.ProtocolError("missing required 'open_chairid'", { instance: message });
            if (!message.hasOwnProperty("open_card_type"))
                throw $util.ProtocolError("missing required 'open_card_type'", { instance: message });
            if (!message.hasOwnProperty("open_card_times"))
                throw $util.ProtocolError("missing required 'open_card_times'", { instance: message });
            return message;
        };

        /**
         * Decodes a notify_open_cards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof niuniu.notify_open_cards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {niuniu.notify_open_cards} notify_open_cards
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
         * @memberof niuniu.notify_open_cards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_open_cards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.open_chairid))
                return "open_chairid: integer expected";
            if (!$util.isInteger(message.open_card_type))
                return "open_card_type: integer expected";
            if (message.open_cards_data != null && message.hasOwnProperty("open_cards_data")) {
                if (!Array.isArray(message.open_cards_data))
                    return "open_cards_data: array expected";
                for (var i = 0; i < message.open_cards_data.length; ++i)
                    if (!$util.isInteger(message.open_cards_data[i]))
                        return "open_cards_data: integer[] expected";
            }
            if (!$util.isInteger(message.open_card_times))
                return "open_card_times: integer expected";
            return null;
        };

        /**
         * Creates a notify_open_cards message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof niuniu.notify_open_cards
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {niuniu.notify_open_cards} notify_open_cards
         */
        notify_open_cards.fromObject = function fromObject(object) {
            if (object instanceof $root.niuniu.notify_open_cards)
                return object;
            var message = new $root.niuniu.notify_open_cards();
            if (object.open_chairid != null)
                message.open_chairid = object.open_chairid >>> 0;
            if (object.open_card_type != null)
                message.open_card_type = object.open_card_type >>> 0;
            if (object.open_cards_data) {
                if (!Array.isArray(object.open_cards_data))
                    throw TypeError(".niuniu.notify_open_cards.open_cards_data: array expected");
                message.open_cards_data = [];
                for (var i = 0; i < object.open_cards_data.length; ++i)
                    message.open_cards_data[i] = object.open_cards_data[i] >>> 0;
            }
            if (object.open_card_times != null)
                message.open_card_times = object.open_card_times >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a notify_open_cards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof niuniu.notify_open_cards
         * @static
         * @param {niuniu.notify_open_cards} message notify_open_cards
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_open_cards.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.open_cards_data = [];
            if (options.defaults) {
                object.open_chairid = 0;
                object.open_card_type = 0;
                object.open_card_times = 0;
            }
            if (message.open_chairid != null && message.hasOwnProperty("open_chairid"))
                object.open_chairid = message.open_chairid;
            if (message.open_card_type != null && message.hasOwnProperty("open_card_type"))
                object.open_card_type = message.open_card_type;
            if (message.open_cards_data && message.open_cards_data.length) {
                object.open_cards_data = [];
                for (var j = 0; j < message.open_cards_data.length; ++j)
                    object.open_cards_data[j] = message.open_cards_data[j];
            }
            if (message.open_card_times != null && message.hasOwnProperty("open_card_times"))
                object.open_card_times = message.open_card_times;
            return object;
        };

        /**
         * Converts this notify_open_cards to JSON.
         * @function toJSON
         * @memberof niuniu.notify_open_cards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_open_cards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_open_cards;
    })();

    niuniu.notify_game_end = (function() {

        /**
         * Properties of a notify_game_end.
         * @memberof niuniu
         * @interface Inotify_game_end
         * @property {Array.<number|Long>|null} [game_score] notify_game_end game_score
         */

        /**
         * Constructs a new notify_game_end.
         * @memberof niuniu
         * @classdesc Represents a notify_game_end.
         * @implements Inotify_game_end
         * @constructor
         * @param {niuniu.Inotify_game_end=} [properties] Properties to set
         */
        function notify_game_end(properties) {
            this.game_score = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * notify_game_end game_score.
         * @member {Array.<number|Long>} game_score
         * @memberof niuniu.notify_game_end
         * @instance
         */
        notify_game_end.prototype.game_score = $util.emptyArray;

        /**
         * Creates a new notify_game_end instance using the specified properties.
         * @function create
         * @memberof niuniu.notify_game_end
         * @static
         * @param {niuniu.Inotify_game_end=} [properties] Properties to set
         * @returns {niuniu.notify_game_end} notify_game_end instance
         */
        notify_game_end.create = function create(properties) {
            return new notify_game_end(properties);
        };

        /**
         * Encodes the specified notify_game_end message. Does not implicitly {@link niuniu.notify_game_end.verify|verify} messages.
         * @function encode
         * @memberof niuniu.notify_game_end
         * @static
         * @param {niuniu.Inotify_game_end} message notify_game_end message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_game_end.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.game_score != null && message.game_score.length)
                for (var i = 0; i < message.game_score.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).sint64(message.game_score[i]);
            return writer;
        };

        /**
         * Encodes the specified notify_game_end message, length delimited. Does not implicitly {@link niuniu.notify_game_end.verify|verify} messages.
         * @function encodeDelimited
         * @memberof niuniu.notify_game_end
         * @static
         * @param {niuniu.Inotify_game_end} message notify_game_end message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        notify_game_end.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a notify_game_end message from the specified reader or buffer.
         * @function decode
         * @memberof niuniu.notify_game_end
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {niuniu.notify_game_end} notify_game_end
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_game_end.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.niuniu.notify_game_end();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.game_score && message.game_score.length))
                        message.game_score = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.game_score.push(reader.sint64());
                    } else
                        message.game_score.push(reader.sint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a notify_game_end message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof niuniu.notify_game_end
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {niuniu.notify_game_end} notify_game_end
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        notify_game_end.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a notify_game_end message.
         * @function verify
         * @memberof niuniu.notify_game_end
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        notify_game_end.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.game_score != null && message.hasOwnProperty("game_score")) {
                if (!Array.isArray(message.game_score))
                    return "game_score: array expected";
                for (var i = 0; i < message.game_score.length; ++i)
                    if (!$util.isInteger(message.game_score[i]) && !(message.game_score[i] && $util.isInteger(message.game_score[i].low) && $util.isInteger(message.game_score[i].high)))
                        return "game_score: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a notify_game_end message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof niuniu.notify_game_end
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {niuniu.notify_game_end} notify_game_end
         */
        notify_game_end.fromObject = function fromObject(object) {
            if (object instanceof $root.niuniu.notify_game_end)
                return object;
            var message = new $root.niuniu.notify_game_end();
            if (object.game_score) {
                if (!Array.isArray(object.game_score))
                    throw TypeError(".niuniu.notify_game_end.game_score: array expected");
                message.game_score = [];
                for (var i = 0; i < object.game_score.length; ++i)
                    if ($util.Long)
                        (message.game_score[i] = $util.Long.fromValue(object.game_score[i])).unsigned = false;
                    else if (typeof object.game_score[i] === "string")
                        message.game_score[i] = parseInt(object.game_score[i], 10);
                    else if (typeof object.game_score[i] === "number")
                        message.game_score[i] = object.game_score[i];
                    else if (typeof object.game_score[i] === "object")
                        message.game_score[i] = new $util.LongBits(object.game_score[i].low >>> 0, object.game_score[i].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from a notify_game_end message. Also converts values to other types if specified.
         * @function toObject
         * @memberof niuniu.notify_game_end
         * @static
         * @param {niuniu.notify_game_end} message notify_game_end
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        notify_game_end.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.game_score = [];
            if (message.game_score && message.game_score.length) {
                object.game_score = [];
                for (var j = 0; j < message.game_score.length; ++j)
                    if (typeof message.game_score[j] === "number")
                        object.game_score[j] = options.longs === String ? String(message.game_score[j]) : message.game_score[j];
                    else
                        object.game_score[j] = options.longs === String ? $util.Long.prototype.toString.call(message.game_score[j]) : options.longs === Number ? new $util.LongBits(message.game_score[j].low >>> 0, message.game_score[j].high >>> 0).toNumber() : message.game_score[j];
            }
            return object;
        };

        /**
         * Converts this notify_game_end to JSON.
         * @function toJSON
         * @memberof niuniu.notify_game_end
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        notify_game_end.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return notify_game_end;
    })();

    niuniu.request_call_banker = (function() {

        /**
         * Properties of a request_call_banker.
         * @memberof niuniu
         * @interface Irequest_call_banker
         * @property {number} index request_call_banker index
         */

        /**
         * Constructs a new request_call_banker.
         * @memberof niuniu
         * @classdesc Represents a request_call_banker.
         * @implements Irequest_call_banker
         * @constructor
         * @param {niuniu.Irequest_call_banker=} [properties] Properties to set
         */
        function request_call_banker(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * request_call_banker index.
         * @member {number} index
         * @memberof niuniu.request_call_banker
         * @instance
         */
        request_call_banker.prototype.index = 0;

        /**
         * Creates a new request_call_banker instance using the specified properties.
         * @function create
         * @memberof niuniu.request_call_banker
         * @static
         * @param {niuniu.Irequest_call_banker=} [properties] Properties to set
         * @returns {niuniu.request_call_banker} request_call_banker instance
         */
        request_call_banker.create = function create(properties) {
            return new request_call_banker(properties);
        };

        /**
         * Encodes the specified request_call_banker message. Does not implicitly {@link niuniu.request_call_banker.verify|verify} messages.
         * @function encode
         * @memberof niuniu.request_call_banker
         * @static
         * @param {niuniu.Irequest_call_banker} message request_call_banker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        request_call_banker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.index);
            return writer;
        };

        /**
         * Encodes the specified request_call_banker message, length delimited. Does not implicitly {@link niuniu.request_call_banker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof niuniu.request_call_banker
         * @static
         * @param {niuniu.Irequest_call_banker} message request_call_banker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        request_call_banker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a request_call_banker message from the specified reader or buffer.
         * @function decode
         * @memberof niuniu.request_call_banker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {niuniu.request_call_banker} request_call_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        request_call_banker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.niuniu.request_call_banker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("index"))
                throw $util.ProtocolError("missing required 'index'", { instance: message });
            return message;
        };

        /**
         * Decodes a request_call_banker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof niuniu.request_call_banker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {niuniu.request_call_banker} request_call_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        request_call_banker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a request_call_banker message.
         * @function verify
         * @memberof niuniu.request_call_banker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        request_call_banker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.index))
                return "index: integer expected";
            return null;
        };

        /**
         * Creates a request_call_banker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof niuniu.request_call_banker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {niuniu.request_call_banker} request_call_banker
         */
        request_call_banker.fromObject = function fromObject(object) {
            if (object instanceof $root.niuniu.request_call_banker)
                return object;
            var message = new $root.niuniu.request_call_banker();
            if (object.index != null)
                message.index = object.index >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a request_call_banker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof niuniu.request_call_banker
         * @static
         * @param {niuniu.request_call_banker} message request_call_banker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        request_call_banker.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.index = 0;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            return object;
        };

        /**
         * Converts this request_call_banker to JSON.
         * @function toJSON
         * @memberof niuniu.request_call_banker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        request_call_banker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return request_call_banker;
    })();

    niuniu.request_bet = (function() {

        /**
         * Properties of a request_bet.
         * @memberof niuniu
         * @interface Irequest_bet
         * @property {number|Long} bet_score request_bet bet_score
         */

        /**
         * Constructs a new request_bet.
         * @memberof niuniu
         * @classdesc Represents a request_bet.
         * @implements Irequest_bet
         * @constructor
         * @param {niuniu.Irequest_bet=} [properties] Properties to set
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
         * @memberof niuniu.request_bet
         * @instance
         */
        request_bet.prototype.bet_score = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new request_bet instance using the specified properties.
         * @function create
         * @memberof niuniu.request_bet
         * @static
         * @param {niuniu.Irequest_bet=} [properties] Properties to set
         * @returns {niuniu.request_bet} request_bet instance
         */
        request_bet.create = function create(properties) {
            return new request_bet(properties);
        };

        /**
         * Encodes the specified request_bet message. Does not implicitly {@link niuniu.request_bet.verify|verify} messages.
         * @function encode
         * @memberof niuniu.request_bet
         * @static
         * @param {niuniu.Irequest_bet} message request_bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        request_bet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.bet_score);
            return writer;
        };

        /**
         * Encodes the specified request_bet message, length delimited. Does not implicitly {@link niuniu.request_bet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof niuniu.request_bet
         * @static
         * @param {niuniu.Irequest_bet} message request_bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        request_bet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a request_bet message from the specified reader or buffer.
         * @function decode
         * @memberof niuniu.request_bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {niuniu.request_bet} request_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        request_bet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.niuniu.request_bet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bet_score = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("bet_score"))
                throw $util.ProtocolError("missing required 'bet_score'", { instance: message });
            return message;
        };

        /**
         * Decodes a request_bet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof niuniu.request_bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {niuniu.request_bet} request_bet
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
         * @memberof niuniu.request_bet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        request_bet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.bet_score) && !(message.bet_score && $util.isInteger(message.bet_score.low) && $util.isInteger(message.bet_score.high)))
                return "bet_score: integer|Long expected";
            return null;
        };

        /**
         * Creates a request_bet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof niuniu.request_bet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {niuniu.request_bet} request_bet
         */
        request_bet.fromObject = function fromObject(object) {
            if (object instanceof $root.niuniu.request_bet)
                return object;
            var message = new $root.niuniu.request_bet();
            if (object.bet_score != null)
                if ($util.Long)
                    (message.bet_score = $util.Long.fromValue(object.bet_score)).unsigned = true;
                else if (typeof object.bet_score === "string")
                    message.bet_score = parseInt(object.bet_score, 10);
                else if (typeof object.bet_score === "number")
                    message.bet_score = object.bet_score;
                else if (typeof object.bet_score === "object")
                    message.bet_score = new $util.LongBits(object.bet_score.low >>> 0, object.bet_score.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a request_bet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof niuniu.request_bet
         * @static
         * @param {niuniu.request_bet} message request_bet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        request_bet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bet_score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bet_score = options.longs === String ? "0" : 0;
            if (message.bet_score != null && message.hasOwnProperty("bet_score"))
                if (typeof message.bet_score === "number")
                    object.bet_score = options.longs === String ? String(message.bet_score) : message.bet_score;
                else
                    object.bet_score = options.longs === String ? $util.Long.prototype.toString.call(message.bet_score) : options.longs === Number ? new $util.LongBits(message.bet_score.low >>> 0, message.bet_score.high >>> 0).toNumber(true) : message.bet_score;
            return object;
        };

        /**
         * Converts this request_bet to JSON.
         * @function toJSON
         * @memberof niuniu.request_bet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        request_bet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return request_bet;
    })();

    niuniu.request_open_card = (function() {

        /**
         * Properties of a request_open_card.
         * @memberof niuniu
         * @interface Irequest_open_card
         * @property {Array.<number>|null} [cards_data] request_open_card cards_data
         */

        /**
         * Constructs a new request_open_card.
         * @memberof niuniu
         * @classdesc Represents a request_open_card.
         * @implements Irequest_open_card
         * @constructor
         * @param {niuniu.Irequest_open_card=} [properties] Properties to set
         */
        function request_open_card(properties) {
            this.cards_data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * request_open_card cards_data.
         * @member {Array.<number>} cards_data
         * @memberof niuniu.request_open_card
         * @instance
         */
        request_open_card.prototype.cards_data = $util.emptyArray;

        /**
         * Creates a new request_open_card instance using the specified properties.
         * @function create
         * @memberof niuniu.request_open_card
         * @static
         * @param {niuniu.Irequest_open_card=} [properties] Properties to set
         * @returns {niuniu.request_open_card} request_open_card instance
         */
        request_open_card.create = function create(properties) {
            return new request_open_card(properties);
        };

        /**
         * Encodes the specified request_open_card message. Does not implicitly {@link niuniu.request_open_card.verify|verify} messages.
         * @function encode
         * @memberof niuniu.request_open_card
         * @static
         * @param {niuniu.Irequest_open_card} message request_open_card message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        request_open_card.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cards_data != null && message.cards_data.length)
                for (var i = 0; i < message.cards_data.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.cards_data[i]);
            return writer;
        };

        /**
         * Encodes the specified request_open_card message, length delimited. Does not implicitly {@link niuniu.request_open_card.verify|verify} messages.
         * @function encodeDelimited
         * @memberof niuniu.request_open_card
         * @static
         * @param {niuniu.Irequest_open_card} message request_open_card message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        request_open_card.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a request_open_card message from the specified reader or buffer.
         * @function decode
         * @memberof niuniu.request_open_card
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {niuniu.request_open_card} request_open_card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        request_open_card.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.niuniu.request_open_card();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.cards_data && message.cards_data.length))
                        message.cards_data = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards_data.push(reader.uint32());
                    } else
                        message.cards_data.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a request_open_card message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof niuniu.request_open_card
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {niuniu.request_open_card} request_open_card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        request_open_card.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a request_open_card message.
         * @function verify
         * @memberof niuniu.request_open_card
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        request_open_card.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cards_data != null && message.hasOwnProperty("cards_data")) {
                if (!Array.isArray(message.cards_data))
                    return "cards_data: array expected";
                for (var i = 0; i < message.cards_data.length; ++i)
                    if (!$util.isInteger(message.cards_data[i]))
                        return "cards_data: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a request_open_card message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof niuniu.request_open_card
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {niuniu.request_open_card} request_open_card
         */
        request_open_card.fromObject = function fromObject(object) {
            if (object instanceof $root.niuniu.request_open_card)
                return object;
            var message = new $root.niuniu.request_open_card();
            if (object.cards_data) {
                if (!Array.isArray(object.cards_data))
                    throw TypeError(".niuniu.request_open_card.cards_data: array expected");
                message.cards_data = [];
                for (var i = 0; i < object.cards_data.length; ++i)
                    message.cards_data[i] = object.cards_data[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a request_open_card message. Also converts values to other types if specified.
         * @function toObject
         * @memberof niuniu.request_open_card
         * @static
         * @param {niuniu.request_open_card} message request_open_card
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        request_open_card.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cards_data = [];
            if (message.cards_data && message.cards_data.length) {
                object.cards_data = [];
                for (var j = 0; j < message.cards_data.length; ++j)
                    object.cards_data[j] = message.cards_data[j];
            }
            return object;
        };

        /**
         * Converts this request_open_card to JSON.
         * @function toJSON
         * @memberof niuniu.request_open_card
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        request_open_card.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return request_open_card;
    })();

    return niuniu;
})();

module.exports = $root;
