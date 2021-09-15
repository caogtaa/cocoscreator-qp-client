import * as $protobuf from "protobufjs";
/** Namespace game. */
export namespace game {

    /** Properties of a request_enter_room. */
    interface Irequest_enter_room {

        /** request_enter_room userid */
        userid: number;

        /** request_enter_room password */
        password: string;

        /** request_enter_room uuid */
        uuid: string;
    }

    /** Represents a request_enter_room. */
    class request_enter_room implements Irequest_enter_room {

        /**
         * Constructs a new request_enter_room.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Irequest_enter_room);

        /** request_enter_room userid. */
        public userid: number;

        /** request_enter_room password. */
        public password: string;

        /** request_enter_room uuid. */
        public uuid: string;

        /**
         * Creates a new request_enter_room instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_enter_room instance
         */
        public static create(properties?: game.Irequest_enter_room): game.request_enter_room;

        /**
         * Encodes the specified request_enter_room message. Does not implicitly {@link game.request_enter_room.verify|verify} messages.
         * @param message request_enter_room message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Irequest_enter_room, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_enter_room message, length delimited. Does not implicitly {@link game.request_enter_room.verify|verify} messages.
         * @param message request_enter_room message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Irequest_enter_room, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_enter_room message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_enter_room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.request_enter_room;

        /**
         * Decodes a request_enter_room message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_enter_room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.request_enter_room;

        /**
         * Verifies a request_enter_room message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_enter_room message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_enter_room
         */
        public static fromObject(object: { [k: string]: any }): game.request_enter_room;

        /**
         * Creates a plain object from a request_enter_room message. Also converts values to other types if specified.
         * @param message request_enter_room
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.request_enter_room, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_enter_room to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_leave_room. */
    interface Irequest_leave_room {
    }

    /** Represents a request_leave_room. */
    class request_leave_room implements Irequest_leave_room {

        /**
         * Constructs a new request_leave_room.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Irequest_leave_room);

        /**
         * Creates a new request_leave_room instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_leave_room instance
         */
        public static create(properties?: game.Irequest_leave_room): game.request_leave_room;

        /**
         * Encodes the specified request_leave_room message. Does not implicitly {@link game.request_leave_room.verify|verify} messages.
         * @param message request_leave_room message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Irequest_leave_room, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_leave_room message, length delimited. Does not implicitly {@link game.request_leave_room.verify|verify} messages.
         * @param message request_leave_room message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Irequest_leave_room, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_leave_room message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_leave_room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.request_leave_room;

        /**
         * Decodes a request_leave_room message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_leave_room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.request_leave_room;

        /**
         * Verifies a request_leave_room message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_leave_room message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_leave_room
         */
        public static fromObject(object: { [k: string]: any }): game.request_leave_room;

        /**
         * Creates a plain object from a request_leave_room message. Also converts values to other types if specified.
         * @param message request_leave_room
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.request_leave_room, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_leave_room to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_enter_room_success. */
    interface Iresponse_enter_room_success {
    }

    /** Represents a response_enter_room_success. */
    class response_enter_room_success implements Iresponse_enter_room_success {

        /**
         * Constructs a new response_enter_room_success.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Iresponse_enter_room_success);

        /**
         * Creates a new response_enter_room_success instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_enter_room_success instance
         */
        public static create(properties?: game.Iresponse_enter_room_success): game.response_enter_room_success;

        /**
         * Encodes the specified response_enter_room_success message. Does not implicitly {@link game.response_enter_room_success.verify|verify} messages.
         * @param message response_enter_room_success message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Iresponse_enter_room_success, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_enter_room_success message, length delimited. Does not implicitly {@link game.response_enter_room_success.verify|verify} messages.
         * @param message response_enter_room_success message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Iresponse_enter_room_success, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_enter_room_success message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_enter_room_success
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.response_enter_room_success;

        /**
         * Decodes a response_enter_room_success message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_enter_room_success
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.response_enter_room_success;

        /**
         * Verifies a response_enter_room_success message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_enter_room_success message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_enter_room_success
         */
        public static fromObject(object: { [k: string]: any }): game.response_enter_room_success;

        /**
         * Creates a plain object from a response_enter_room_success message. Also converts values to other types if specified.
         * @param message response_enter_room_success
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.response_enter_room_success, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_enter_room_success to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_enter_room_failed. */
    interface Iresponse_enter_room_failed {

        /** response_enter_room_failed reason */
        reason: string;
    }

    /** Represents a response_enter_room_failed. */
    class response_enter_room_failed implements Iresponse_enter_room_failed {

        /**
         * Constructs a new response_enter_room_failed.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Iresponse_enter_room_failed);

        /** response_enter_room_failed reason. */
        public reason: string;

        /**
         * Creates a new response_enter_room_failed instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_enter_room_failed instance
         */
        public static create(properties?: game.Iresponse_enter_room_failed): game.response_enter_room_failed;

        /**
         * Encodes the specified response_enter_room_failed message. Does not implicitly {@link game.response_enter_room_failed.verify|verify} messages.
         * @param message response_enter_room_failed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Iresponse_enter_room_failed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_enter_room_failed message, length delimited. Does not implicitly {@link game.response_enter_room_failed.verify|verify} messages.
         * @param message response_enter_room_failed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Iresponse_enter_room_failed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_enter_room_failed message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_enter_room_failed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.response_enter_room_failed;

        /**
         * Decodes a response_enter_room_failed message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_enter_room_failed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.response_enter_room_failed;

        /**
         * Verifies a response_enter_room_failed message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_enter_room_failed message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_enter_room_failed
         */
        public static fromObject(object: { [k: string]: any }): game.response_enter_room_failed;

        /**
         * Creates a plain object from a response_enter_room_failed message. Also converts values to other types if specified.
         * @param message response_enter_room_failed
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.response_enter_room_failed, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_enter_room_failed to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a wanfa. */
    interface Iwanfa {

        /** wanfa item */
        item?: (number[]|null);
    }

    /** Represents a wanfa. */
    class wanfa implements Iwanfa {

        /**
         * Constructs a new wanfa.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Iwanfa);

        /** wanfa item. */
        public item: number[];

        /**
         * Creates a new wanfa instance using the specified properties.
         * @param [properties] Properties to set
         * @returns wanfa instance
         */
        public static create(properties?: game.Iwanfa): game.wanfa;

        /**
         * Encodes the specified wanfa message. Does not implicitly {@link game.wanfa.verify|verify} messages.
         * @param message wanfa message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Iwanfa, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified wanfa message, length delimited. Does not implicitly {@link game.wanfa.verify|verify} messages.
         * @param message wanfa message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Iwanfa, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a wanfa message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns wanfa
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.wanfa;

        /**
         * Decodes a wanfa message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns wanfa
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.wanfa;

        /**
         * Verifies a wanfa message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a wanfa message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns wanfa
         */
        public static fromObject(object: { [k: string]: any }): game.wanfa;

        /**
         * Creates a plain object from a wanfa message. Also converts values to other types if specified.
         * @param message wanfa
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.wanfa, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this wanfa to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a table_param. */
    interface Itable_param {

        /** table_param base_score */
        base_score: (number|Long);

        /** table_param min_enter_score */
        min_enter_score: (number|Long);

        /** table_param max_chair_count */
        max_chair_count: number;

        /** table_param wanfa */
        wanfa: game.Iwanfa;
    }

    /** Represents a table_param. */
    class table_param implements Itable_param {

        /**
         * Constructs a new table_param.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Itable_param);

        /** table_param base_score. */
        public base_score: (number|Long);

        /** table_param min_enter_score. */
        public min_enter_score: (number|Long);

        /** table_param max_chair_count. */
        public max_chair_count: number;

        /** table_param wanfa. */
        public wanfa: game.Iwanfa;

        /**
         * Creates a new table_param instance using the specified properties.
         * @param [properties] Properties to set
         * @returns table_param instance
         */
        public static create(properties?: game.Itable_param): game.table_param;

        /**
         * Encodes the specified table_param message. Does not implicitly {@link game.table_param.verify|verify} messages.
         * @param message table_param message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Itable_param, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified table_param message, length delimited. Does not implicitly {@link game.table_param.verify|verify} messages.
         * @param message table_param message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Itable_param, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a table_param message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns table_param
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.table_param;

        /**
         * Decodes a table_param message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns table_param
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.table_param;

        /**
         * Verifies a table_param message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a table_param message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns table_param
         */
        public static fromObject(object: { [k: string]: any }): game.table_param;

        /**
         * Creates a plain object from a table_param message. Also converts values to other types if specified.
         * @param message table_param
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.table_param, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this table_param to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a subroom. */
    interface Isubroom {

        /** subroom subroomid */
        subroomid: number;

        /** subroom open */
        open: boolean;

        /** subroom name */
        name: string;

        /** subroom base_score */
        base_score: (number|Long);

        /** subroom min_enter_score */
        min_enter_score: (number|Long);

        /** subroom max_chair_count */
        max_chair_count: number;

        /** subroom wanfa */
        wanfa?: (game.Iwanfa[]|null);
    }

    /** Represents a subroom. */
    class subroom implements Isubroom {

        /**
         * Constructs a new subroom.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Isubroom);

        /** subroom subroomid. */
        public subroomid: number;

        /** subroom open. */
        public open: boolean;

        /** subroom name. */
        public name: string;

        /** subroom base_score. */
        public base_score: (number|Long);

        /** subroom min_enter_score. */
        public min_enter_score: (number|Long);

        /** subroom max_chair_count. */
        public max_chair_count: number;

        /** subroom wanfa. */
        public wanfa: game.Iwanfa[];

        /**
         * Creates a new subroom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns subroom instance
         */
        public static create(properties?: game.Isubroom): game.subroom;

        /**
         * Encodes the specified subroom message. Does not implicitly {@link game.subroom.verify|verify} messages.
         * @param message subroom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Isubroom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified subroom message, length delimited. Does not implicitly {@link game.subroom.verify|verify} messages.
         * @param message subroom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Isubroom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a subroom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns subroom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.subroom;

        /**
         * Decodes a subroom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns subroom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.subroom;

        /**
         * Verifies a subroom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a subroom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns subroom
         */
        public static fromObject(object: { [k: string]: any }): game.subroom;

        /**
         * Creates a plain object from a subroom message. Also converts values to other types if specified.
         * @param message subroom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.subroom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this subroom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_room_info. */
    interface Inotify_room_info {

        /** notify_room_info room_type */
        room_type: number;

        /** notify_room_info allow_join_playing */
        allow_join_playing: boolean;

        /** notify_room_info allow_ob */
        allow_ob: boolean;

        /** notify_room_info subrooms */
        subrooms?: (game.Isubroom[]|null);
    }

    /** Represents a notify_room_info. */
    class notify_room_info implements Inotify_room_info {

        /**
         * Constructs a new notify_room_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Inotify_room_info);

        /** notify_room_info room_type. */
        public room_type: number;

        /** notify_room_info allow_join_playing. */
        public allow_join_playing: boolean;

        /** notify_room_info allow_ob. */
        public allow_ob: boolean;

        /** notify_room_info subrooms. */
        public subrooms: game.Isubroom[];

        /**
         * Creates a new notify_room_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_room_info instance
         */
        public static create(properties?: game.Inotify_room_info): game.notify_room_info;

        /**
         * Encodes the specified notify_room_info message. Does not implicitly {@link game.notify_room_info.verify|verify} messages.
         * @param message notify_room_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Inotify_room_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_room_info message, length delimited. Does not implicitly {@link game.notify_room_info.verify|verify} messages.
         * @param message notify_room_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Inotify_room_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_room_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_room_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.notify_room_info;

        /**
         * Decodes a notify_room_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_room_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.notify_room_info;

        /**
         * Verifies a notify_room_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_room_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_room_info
         */
        public static fromObject(object: { [k: string]: any }): game.notify_room_info;

        /**
         * Creates a plain object from a notify_room_info message. Also converts values to other types if specified.
         * @param message notify_room_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.notify_room_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_room_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a user_info. */
    interface Iuser_info {

        /** user_info userid */
        userid: number;

        /** user_info gameid */
        gameid: number;

        /** user_info nickname */
        nickname: string;

        /** user_info faceid */
        faceid: number;

        /** user_info head_img_url */
        head_img_url: string;

        /** user_info gender */
        gender: number;

        /** user_info signature */
        signature: string;

        /** user_info vip_level */
        vip_level: number;

        /** user_info master_level */
        master_level: number;

        /** user_info score */
        score: (number|Long);

        /** user_info tableid */
        tableid: number;

        /** user_info chairid */
        chairid: number;

        /** user_info user_status */
        user_status: number;

        /** user_info banker */
        banker: boolean;
    }

    /** Represents a user_info. */
    class user_info implements Iuser_info {

        /**
         * Constructs a new user_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Iuser_info);

        /** user_info userid. */
        public userid: number;

        /** user_info gameid. */
        public gameid: number;

        /** user_info nickname. */
        public nickname: string;

        /** user_info faceid. */
        public faceid: number;

        /** user_info head_img_url. */
        public head_img_url: string;

        /** user_info gender. */
        public gender: number;

        /** user_info signature. */
        public signature: string;

        /** user_info vip_level. */
        public vip_level: number;

        /** user_info master_level. */
        public master_level: number;

        /** user_info score. */
        public score: (number|Long);

        /** user_info tableid. */
        public tableid: number;

        /** user_info chairid. */
        public chairid: number;

        /** user_info user_status. */
        public user_status: number;

        /** user_info banker. */
        public banker: boolean;

        /**
         * Creates a new user_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns user_info instance
         */
        public static create(properties?: game.Iuser_info): game.user_info;

        /**
         * Encodes the specified user_info message. Does not implicitly {@link game.user_info.verify|verify} messages.
         * @param message user_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Iuser_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified user_info message, length delimited. Does not implicitly {@link game.user_info.verify|verify} messages.
         * @param message user_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Iuser_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a user_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns user_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.user_info;

        /**
         * Decodes a user_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns user_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.user_info;

        /**
         * Verifies a user_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a user_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns user_info
         */
        public static fromObject(object: { [k: string]: any }): game.user_info;

        /**
         * Creates a plain object from a user_info message. Also converts values to other types if specified.
         * @param message user_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.user_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this user_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_myself_info. */
    interface Inotify_myself_info {

        /** notify_myself_info userinfo */
        userinfo: game.Iuser_info;
    }

    /** Represents a notify_myself_info. */
    class notify_myself_info implements Inotify_myself_info {

        /**
         * Constructs a new notify_myself_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Inotify_myself_info);

        /** notify_myself_info userinfo. */
        public userinfo: game.Iuser_info;

        /**
         * Creates a new notify_myself_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_myself_info instance
         */
        public static create(properties?: game.Inotify_myself_info): game.notify_myself_info;

        /**
         * Encodes the specified notify_myself_info message. Does not implicitly {@link game.notify_myself_info.verify|verify} messages.
         * @param message notify_myself_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Inotify_myself_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_myself_info message, length delimited. Does not implicitly {@link game.notify_myself_info.verify|verify} messages.
         * @param message notify_myself_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Inotify_myself_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_myself_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_myself_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.notify_myself_info;

        /**
         * Decodes a notify_myself_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_myself_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.notify_myself_info;

        /**
         * Verifies a notify_myself_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_myself_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_myself_info
         */
        public static fromObject(object: { [k: string]: any }): game.notify_myself_info;

        /**
         * Creates a plain object from a notify_myself_info message. Also converts values to other types if specified.
         * @param message notify_myself_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.notify_myself_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_myself_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_user_enter. */
    interface Inotify_user_enter {

        /** notify_user_enter userinfo */
        userinfo: game.Iuser_info;
    }

    /** Represents a notify_user_enter. */
    class notify_user_enter implements Inotify_user_enter {

        /**
         * Constructs a new notify_user_enter.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Inotify_user_enter);

        /** notify_user_enter userinfo. */
        public userinfo: game.Iuser_info;

        /**
         * Creates a new notify_user_enter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_user_enter instance
         */
        public static create(properties?: game.Inotify_user_enter): game.notify_user_enter;

        /**
         * Encodes the specified notify_user_enter message. Does not implicitly {@link game.notify_user_enter.verify|verify} messages.
         * @param message notify_user_enter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Inotify_user_enter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_user_enter message, length delimited. Does not implicitly {@link game.notify_user_enter.verify|verify} messages.
         * @param message notify_user_enter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Inotify_user_enter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_user_enter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_user_enter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.notify_user_enter;

        /**
         * Decodes a notify_user_enter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_user_enter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.notify_user_enter;

        /**
         * Verifies a notify_user_enter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_user_enter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_user_enter
         */
        public static fromObject(object: { [k: string]: any }): game.notify_user_enter;

        /**
         * Creates a plain object from a notify_user_enter message. Also converts values to other types if specified.
         * @param message notify_user_enter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.notify_user_enter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_user_enter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_other_users_info. */
    interface Inotify_other_users_info {

        /** notify_other_users_info users_info */
        users_info?: (game.Iuser_info[]|null);
    }

    /** Represents a notify_other_users_info. */
    class notify_other_users_info implements Inotify_other_users_info {

        /**
         * Constructs a new notify_other_users_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Inotify_other_users_info);

        /** notify_other_users_info users_info. */
        public users_info: game.Iuser_info[];

        /**
         * Creates a new notify_other_users_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_other_users_info instance
         */
        public static create(properties?: game.Inotify_other_users_info): game.notify_other_users_info;

        /**
         * Encodes the specified notify_other_users_info message. Does not implicitly {@link game.notify_other_users_info.verify|verify} messages.
         * @param message notify_other_users_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Inotify_other_users_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_other_users_info message, length delimited. Does not implicitly {@link game.notify_other_users_info.verify|verify} messages.
         * @param message notify_other_users_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Inotify_other_users_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_other_users_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_other_users_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.notify_other_users_info;

        /**
         * Decodes a notify_other_users_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_other_users_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.notify_other_users_info;

        /**
         * Verifies a notify_other_users_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_other_users_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_other_users_info
         */
        public static fromObject(object: { [k: string]: any }): game.notify_other_users_info;

        /**
         * Creates a plain object from a notify_other_users_info message. Also converts values to other types if specified.
         * @param message notify_other_users_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.notify_other_users_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_other_users_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a table_info. */
    interface Itable_info {

        /** table_info tableid */
        tableid: number;

        /** table_info subroomid */
        subroomid: number;

        /** table_info param */
        param: game.Itable_param;
    }

    /** Represents a table_info. */
    class table_info implements Itable_info {

        /**
         * Constructs a new table_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Itable_info);

        /** table_info tableid. */
        public tableid: number;

        /** table_info subroomid. */
        public subroomid: number;

        /** table_info param. */
        public param: game.Itable_param;

        /**
         * Creates a new table_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns table_info instance
         */
        public static create(properties?: game.Itable_info): game.table_info;

        /**
         * Encodes the specified table_info message. Does not implicitly {@link game.table_info.verify|verify} messages.
         * @param message table_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Itable_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified table_info message, length delimited. Does not implicitly {@link game.table_info.verify|verify} messages.
         * @param message table_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Itable_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a table_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns table_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.table_info;

        /**
         * Decodes a table_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns table_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.table_info;

        /**
         * Verifies a table_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a table_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns table_info
         */
        public static fromObject(object: { [k: string]: any }): game.table_info;

        /**
         * Creates a plain object from a table_info message. Also converts values to other types if specified.
         * @param message table_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.table_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this table_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_tables_info. */
    interface Inotify_tables_info {

        /** notify_tables_info tables_info */
        tables_info?: (game.Itable_info[]|null);
    }

    /** Represents a notify_tables_info. */
    class notify_tables_info implements Inotify_tables_info {

        /**
         * Constructs a new notify_tables_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Inotify_tables_info);

        /** notify_tables_info tables_info. */
        public tables_info: game.Itable_info[];

        /**
         * Creates a new notify_tables_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_tables_info instance
         */
        public static create(properties?: game.Inotify_tables_info): game.notify_tables_info;

        /**
         * Encodes the specified notify_tables_info message. Does not implicitly {@link game.notify_tables_info.verify|verify} messages.
         * @param message notify_tables_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Inotify_tables_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_tables_info message, length delimited. Does not implicitly {@link game.notify_tables_info.verify|verify} messages.
         * @param message notify_tables_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Inotify_tables_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_tables_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_tables_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.notify_tables_info;

        /**
         * Decodes a notify_tables_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_tables_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.notify_tables_info;

        /**
         * Verifies a notify_tables_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_tables_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_tables_info
         */
        public static fromObject(object: { [k: string]: any }): game.notify_tables_info;

        /**
         * Creates a plain object from a notify_tables_info message. Also converts values to other types if specified.
         * @param message notify_tables_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.notify_tables_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_tables_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_sitdown. */
    interface Irequest_sitdown {

        /** request_sitdown tableid */
        tableid: number;

        /** request_sitdown chairid */
        chairid: number;

        /** request_sitdown subroomid */
        subroomid?: (number|null);

        /** request_sitdown subroom_wanfaid */
        subroom_wanfaid?: (number|null);
    }

    /** Represents a request_sitdown. */
    class request_sitdown implements Irequest_sitdown {

        /**
         * Constructs a new request_sitdown.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Irequest_sitdown);

        /** request_sitdown tableid. */
        public tableid: number;

        /** request_sitdown chairid. */
        public chairid: number;

        /** request_sitdown subroomid. */
        public subroomid: number;

        /** request_sitdown subroom_wanfaid. */
        public subroom_wanfaid: number;

        /**
         * Creates a new request_sitdown instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_sitdown instance
         */
        public static create(properties?: game.Irequest_sitdown): game.request_sitdown;

        /**
         * Encodes the specified request_sitdown message. Does not implicitly {@link game.request_sitdown.verify|verify} messages.
         * @param message request_sitdown message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Irequest_sitdown, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_sitdown message, length delimited. Does not implicitly {@link game.request_sitdown.verify|verify} messages.
         * @param message request_sitdown message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Irequest_sitdown, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_sitdown message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_sitdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.request_sitdown;

        /**
         * Decodes a request_sitdown message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_sitdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.request_sitdown;

        /**
         * Verifies a request_sitdown message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_sitdown message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_sitdown
         */
        public static fromObject(object: { [k: string]: any }): game.request_sitdown;

        /**
         * Creates a plain object from a request_sitdown message. Also converts values to other types if specified.
         * @param message request_sitdown
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.request_sitdown, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_sitdown to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_standup. */
    interface Irequest_standup {

        /** request_standup tableid */
        tableid: number;

        /** request_standup chairid */
        chairid: number;

        /** request_standup ob_mode */
        ob_mode?: (boolean|null);
    }

    /** Represents a request_standup. */
    class request_standup implements Irequest_standup {

        /**
         * Constructs a new request_standup.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Irequest_standup);

        /** request_standup tableid. */
        public tableid: number;

        /** request_standup chairid. */
        public chairid: number;

        /** request_standup ob_mode. */
        public ob_mode: boolean;

        /**
         * Creates a new request_standup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_standup instance
         */
        public static create(properties?: game.Irequest_standup): game.request_standup;

        /**
         * Encodes the specified request_standup message. Does not implicitly {@link game.request_standup.verify|verify} messages.
         * @param message request_standup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Irequest_standup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_standup message, length delimited. Does not implicitly {@link game.request_standup.verify|verify} messages.
         * @param message request_standup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Irequest_standup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_standup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_standup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.request_standup;

        /**
         * Decodes a request_standup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_standup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.request_standup;

        /**
         * Verifies a request_standup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_standup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_standup
         */
        public static fromObject(object: { [k: string]: any }): game.request_standup;

        /**
         * Creates a plain object from a request_standup message. Also converts values to other types if specified.
         * @param message request_standup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.request_standup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_standup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_change_table. */
    interface Irequest_change_table {
    }

    /** Represents a request_change_table. */
    class request_change_table implements Irequest_change_table {

        /**
         * Constructs a new request_change_table.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Irequest_change_table);

        /**
         * Creates a new request_change_table instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_change_table instance
         */
        public static create(properties?: game.Irequest_change_table): game.request_change_table;

        /**
         * Encodes the specified request_change_table message. Does not implicitly {@link game.request_change_table.verify|verify} messages.
         * @param message request_change_table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Irequest_change_table, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_change_table message, length delimited. Does not implicitly {@link game.request_change_table.verify|verify} messages.
         * @param message request_change_table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Irequest_change_table, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_change_table message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_change_table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.request_change_table;

        /**
         * Decodes a request_change_table message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_change_table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.request_change_table;

        /**
         * Verifies a request_change_table message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_change_table message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_change_table
         */
        public static fromObject(object: { [k: string]: any }): game.request_change_table;

        /**
         * Creates a plain object from a request_change_table message. Also converts values to other types if specified.
         * @param message request_change_table
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.request_change_table, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_change_table to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a reponse_action_failed. */
    interface Ireponse_action_failed {

        /** reponse_action_failed reason */
        reason: string;
    }

    /** Represents a reponse_action_failed. */
    class reponse_action_failed implements Ireponse_action_failed {

        /**
         * Constructs a new reponse_action_failed.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Ireponse_action_failed);

        /** reponse_action_failed reason. */
        public reason: string;

        /**
         * Creates a new reponse_action_failed instance using the specified properties.
         * @param [properties] Properties to set
         * @returns reponse_action_failed instance
         */
        public static create(properties?: game.Ireponse_action_failed): game.reponse_action_failed;

        /**
         * Encodes the specified reponse_action_failed message. Does not implicitly {@link game.reponse_action_failed.verify|verify} messages.
         * @param message reponse_action_failed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Ireponse_action_failed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified reponse_action_failed message, length delimited. Does not implicitly {@link game.reponse_action_failed.verify|verify} messages.
         * @param message reponse_action_failed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Ireponse_action_failed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a reponse_action_failed message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns reponse_action_failed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.reponse_action_failed;

        /**
         * Decodes a reponse_action_failed message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns reponse_action_failed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.reponse_action_failed;

        /**
         * Verifies a reponse_action_failed message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a reponse_action_failed message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns reponse_action_failed
         */
        public static fromObject(object: { [k: string]: any }): game.reponse_action_failed;

        /**
         * Creates a plain object from a reponse_action_failed message. Also converts values to other types if specified.
         * @param message reponse_action_failed
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.reponse_action_failed, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this reponse_action_failed to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_userscore. */
    interface Inotify_userscore {

        /** notify_userscore userid */
        userid: number;

        /** notify_userscore user_score */
        user_score: (number|Long);
    }

    /** Represents a notify_userscore. */
    class notify_userscore implements Inotify_userscore {

        /**
         * Constructs a new notify_userscore.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Inotify_userscore);

        /** notify_userscore userid. */
        public userid: number;

        /** notify_userscore user_score. */
        public user_score: (number|Long);

        /**
         * Creates a new notify_userscore instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_userscore instance
         */
        public static create(properties?: game.Inotify_userscore): game.notify_userscore;

        /**
         * Encodes the specified notify_userscore message. Does not implicitly {@link game.notify_userscore.verify|verify} messages.
         * @param message notify_userscore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Inotify_userscore, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_userscore message, length delimited. Does not implicitly {@link game.notify_userscore.verify|verify} messages.
         * @param message notify_userscore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Inotify_userscore, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_userscore message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_userscore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.notify_userscore;

        /**
         * Decodes a notify_userscore message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_userscore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.notify_userscore;

        /**
         * Verifies a notify_userscore message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_userscore message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_userscore
         */
        public static fromObject(object: { [k: string]: any }): game.notify_userscore;

        /**
         * Creates a plain object from a notify_userscore message. Also converts values to other types if specified.
         * @param message notify_userscore
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.notify_userscore, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_userscore to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_userstatus. */
    interface Inotify_userstatus {

        /** notify_userstatus userid */
        userid: number;

        /** notify_userstatus tableid */
        tableid: number;

        /** notify_userstatus chairid */
        chairid: number;

        /** notify_userstatus user_status */
        user_status: number;

        /** notify_userstatus banker */
        banker: boolean;
    }

    /** Represents a notify_userstatus. */
    class notify_userstatus implements Inotify_userstatus {

        /**
         * Constructs a new notify_userstatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Inotify_userstatus);

        /** notify_userstatus userid. */
        public userid: number;

        /** notify_userstatus tableid. */
        public tableid: number;

        /** notify_userstatus chairid. */
        public chairid: number;

        /** notify_userstatus user_status. */
        public user_status: number;

        /** notify_userstatus banker. */
        public banker: boolean;

        /**
         * Creates a new notify_userstatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_userstatus instance
         */
        public static create(properties?: game.Inotify_userstatus): game.notify_userstatus;

        /**
         * Encodes the specified notify_userstatus message. Does not implicitly {@link game.notify_userstatus.verify|verify} messages.
         * @param message notify_userstatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Inotify_userstatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_userstatus message, length delimited. Does not implicitly {@link game.notify_userstatus.verify|verify} messages.
         * @param message notify_userstatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Inotify_userstatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_userstatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_userstatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.notify_userstatus;

        /**
         * Decodes a notify_userstatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_userstatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.notify_userstatus;

        /**
         * Verifies a notify_userstatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_userstatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_userstatus
         */
        public static fromObject(object: { [k: string]: any }): game.notify_userstatus;

        /**
         * Creates a plain object from a notify_userstatus message. Also converts values to other types if specified.
         * @param message notify_userstatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.notify_userstatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_userstatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_create_table. */
    interface Irequest_create_table {

        /** request_create_table userid */
        userid: number;

        /** request_create_table param */
        param: game.Itable_param;
    }

    /** Represents a request_create_table. */
    class request_create_table implements Irequest_create_table {

        /**
         * Constructs a new request_create_table.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Irequest_create_table);

        /** request_create_table userid. */
        public userid: number;

        /** request_create_table param. */
        public param: game.Itable_param;

        /**
         * Creates a new request_create_table instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_create_table instance
         */
        public static create(properties?: game.Irequest_create_table): game.request_create_table;

        /**
         * Encodes the specified request_create_table message. Does not implicitly {@link game.request_create_table.verify|verify} messages.
         * @param message request_create_table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Irequest_create_table, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_create_table message, length delimited. Does not implicitly {@link game.request_create_table.verify|verify} messages.
         * @param message request_create_table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Irequest_create_table, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_create_table message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_create_table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.request_create_table;

        /**
         * Decodes a request_create_table message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_create_table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.request_create_table;

        /**
         * Verifies a request_create_table message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_create_table message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_create_table
         */
        public static fromObject(object: { [k: string]: any }): game.request_create_table;

        /**
         * Creates a plain object from a request_create_table message. Also converts values to other types if specified.
         * @param message request_create_table
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.request_create_table, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_create_table to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_create_table. */
    interface Iresponse_create_table {

        /** response_create_table tableid */
        tableid: number;

        /** response_create_table reason */
        reason?: (string|null);
    }

    /** Represents a response_create_table. */
    class response_create_table implements Iresponse_create_table {

        /**
         * Constructs a new response_create_table.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Iresponse_create_table);

        /** response_create_table tableid. */
        public tableid: number;

        /** response_create_table reason. */
        public reason: string;

        /**
         * Creates a new response_create_table instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_create_table instance
         */
        public static create(properties?: game.Iresponse_create_table): game.response_create_table;

        /**
         * Encodes the specified response_create_table message. Does not implicitly {@link game.response_create_table.verify|verify} messages.
         * @param message response_create_table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Iresponse_create_table, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_create_table message, length delimited. Does not implicitly {@link game.response_create_table.verify|verify} messages.
         * @param message response_create_table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Iresponse_create_table, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_create_table message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_create_table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.response_create_table;

        /**
         * Decodes a response_create_table message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_create_table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.response_create_table;

        /**
         * Verifies a response_create_table message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_create_table message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_create_table
         */
        public static fromObject(object: { [k: string]: any }): game.response_create_table;

        /**
         * Creates a plain object from a response_create_table message. Also converts values to other types if specified.
         * @param message response_create_table
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.response_create_table, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_create_table to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_create_table. */
    interface Inotify_create_table {

        /** notify_create_table table_info */
        table_info: game.Itable_info;
    }

    /** Represents a notify_create_table. */
    class notify_create_table implements Inotify_create_table {

        /**
         * Constructs a new notify_create_table.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Inotify_create_table);

        /** notify_create_table table_info. */
        public table_info: game.Itable_info;

        /**
         * Creates a new notify_create_table instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_create_table instance
         */
        public static create(properties?: game.Inotify_create_table): game.notify_create_table;

        /**
         * Encodes the specified notify_create_table message. Does not implicitly {@link game.notify_create_table.verify|verify} messages.
         * @param message notify_create_table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Inotify_create_table, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_create_table message, length delimited. Does not implicitly {@link game.notify_create_table.verify|verify} messages.
         * @param message notify_create_table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Inotify_create_table, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_create_table message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_create_table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.notify_create_table;

        /**
         * Decodes a notify_create_table message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_create_table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.notify_create_table;

        /**
         * Verifies a notify_create_table message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_create_table message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_create_table
         */
        public static fromObject(object: { [k: string]: any }): game.notify_create_table;

        /**
         * Creates a plain object from a notify_create_table message. Also converts values to other types if specified.
         * @param message notify_create_table
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.notify_create_table, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_create_table to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_delete_table. */
    interface Irequest_delete_table {

        /** request_delete_table userid */
        userid: number;

        /** request_delete_table tableid */
        tableid: number;
    }

    /** Represents a request_delete_table. */
    class request_delete_table implements Irequest_delete_table {

        /**
         * Constructs a new request_delete_table.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Irequest_delete_table);

        /** request_delete_table userid. */
        public userid: number;

        /** request_delete_table tableid. */
        public tableid: number;

        /**
         * Creates a new request_delete_table instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_delete_table instance
         */
        public static create(properties?: game.Irequest_delete_table): game.request_delete_table;

        /**
         * Encodes the specified request_delete_table message. Does not implicitly {@link game.request_delete_table.verify|verify} messages.
         * @param message request_delete_table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Irequest_delete_table, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_delete_table message, length delimited. Does not implicitly {@link game.request_delete_table.verify|verify} messages.
         * @param message request_delete_table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Irequest_delete_table, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_delete_table message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_delete_table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.request_delete_table;

        /**
         * Decodes a request_delete_table message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_delete_table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.request_delete_table;

        /**
         * Verifies a request_delete_table message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_delete_table message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_delete_table
         */
        public static fromObject(object: { [k: string]: any }): game.request_delete_table;

        /**
         * Creates a plain object from a request_delete_table message. Also converts values to other types if specified.
         * @param message request_delete_table
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.request_delete_table, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_delete_table to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_delete_table. */
    interface Iresponse_delete_table {

        /** response_delete_table tableid */
        tableid: number;

        /** response_delete_table reason */
        reason?: (string|null);
    }

    /** Represents a response_delete_table. */
    class response_delete_table implements Iresponse_delete_table {

        /**
         * Constructs a new response_delete_table.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Iresponse_delete_table);

        /** response_delete_table tableid. */
        public tableid: number;

        /** response_delete_table reason. */
        public reason: string;

        /**
         * Creates a new response_delete_table instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_delete_table instance
         */
        public static create(properties?: game.Iresponse_delete_table): game.response_delete_table;

        /**
         * Encodes the specified response_delete_table message. Does not implicitly {@link game.response_delete_table.verify|verify} messages.
         * @param message response_delete_table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Iresponse_delete_table, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_delete_table message, length delimited. Does not implicitly {@link game.response_delete_table.verify|verify} messages.
         * @param message response_delete_table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Iresponse_delete_table, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_delete_table message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_delete_table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.response_delete_table;

        /**
         * Decodes a response_delete_table message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_delete_table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.response_delete_table;

        /**
         * Verifies a response_delete_table message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_delete_table message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_delete_table
         */
        public static fromObject(object: { [k: string]: any }): game.response_delete_table;

        /**
         * Creates a plain object from a response_delete_table message. Also converts values to other types if specified.
         * @param message response_delete_table
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.response_delete_table, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_delete_table to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_delete_table. */
    interface Inotify_delete_table {

        /** notify_delete_table tableid */
        tableid: number;
    }

    /** Represents a notify_delete_table. */
    class notify_delete_table implements Inotify_delete_table {

        /**
         * Constructs a new notify_delete_table.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Inotify_delete_table);

        /** notify_delete_table tableid. */
        public tableid: number;

        /**
         * Creates a new notify_delete_table instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_delete_table instance
         */
        public static create(properties?: game.Inotify_delete_table): game.notify_delete_table;

        /**
         * Encodes the specified notify_delete_table message. Does not implicitly {@link game.notify_delete_table.verify|verify} messages.
         * @param message notify_delete_table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Inotify_delete_table, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_delete_table message, length delimited. Does not implicitly {@link game.notify_delete_table.verify|verify} messages.
         * @param message notify_delete_table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Inotify_delete_table, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_delete_table message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_delete_table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.notify_delete_table;

        /**
         * Decodes a notify_delete_table message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_delete_table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.notify_delete_table;

        /**
         * Verifies a notify_delete_table message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_delete_table message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_delete_table
         */
        public static fromObject(object: { [k: string]: any }): game.notify_delete_table;

        /**
         * Creates a plain object from a notify_delete_table message. Also converts values to other types if specified.
         * @param message notify_delete_table
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.notify_delete_table, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_delete_table to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_init_game. */
    interface Irequest_init_game {
    }

    /** Represents a request_init_game. */
    class request_init_game implements Irequest_init_game {

        /**
         * Constructs a new request_init_game.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Irequest_init_game);

        /**
         * Creates a new request_init_game instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_init_game instance
         */
        public static create(properties?: game.Irequest_init_game): game.request_init_game;

        /**
         * Encodes the specified request_init_game message. Does not implicitly {@link game.request_init_game.verify|verify} messages.
         * @param message request_init_game message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Irequest_init_game, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_init_game message, length delimited. Does not implicitly {@link game.request_init_game.verify|verify} messages.
         * @param message request_init_game message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Irequest_init_game, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_init_game message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_init_game
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.request_init_game;

        /**
         * Decodes a request_init_game message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_init_game
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.request_init_game;

        /**
         * Verifies a request_init_game message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_init_game message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_init_game
         */
        public static fromObject(object: { [k: string]: any }): game.request_init_game;

        /**
         * Creates a plain object from a request_init_game message. Also converts values to other types if specified.
         * @param message request_init_game
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.request_init_game, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_init_game to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_userready. */
    interface Irequest_userready {
    }

    /** Represents a request_userready. */
    class request_userready implements Irequest_userready {

        /**
         * Constructs a new request_userready.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Irequest_userready);

        /**
         * Creates a new request_userready instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_userready instance
         */
        public static create(properties?: game.Irequest_userready): game.request_userready;

        /**
         * Encodes the specified request_userready message. Does not implicitly {@link game.request_userready.verify|verify} messages.
         * @param message request_userready message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Irequest_userready, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_userready message, length delimited. Does not implicitly {@link game.request_userready.verify|verify} messages.
         * @param message request_userready message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Irequest_userready, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_userready message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_userready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.request_userready;

        /**
         * Decodes a request_userready message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_userready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.request_userready;

        /**
         * Verifies a request_userready message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_userready message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_userready
         */
        public static fromObject(object: { [k: string]: any }): game.request_userready;

        /**
         * Creates a plain object from a request_userready message. Also converts values to other types if specified.
         * @param message request_userready
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.request_userready, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_userready to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a gamemsg. */
    interface Igamemsg {

        /** gamemsg name */
        name: string;

        /** gamemsg payload */
        payload: Uint8Array;
    }

    /** Represents a gamemsg. */
    class gamemsg implements Igamemsg {

        /**
         * Constructs a new gamemsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Igamemsg);

        /** gamemsg name. */
        public name: string;

        /** gamemsg payload. */
        public payload: Uint8Array;

        /**
         * Creates a new gamemsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns gamemsg instance
         */
        public static create(properties?: game.Igamemsg): game.gamemsg;

        /**
         * Encodes the specified gamemsg message. Does not implicitly {@link game.gamemsg.verify|verify} messages.
         * @param message gamemsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Igamemsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified gamemsg message, length delimited. Does not implicitly {@link game.gamemsg.verify|verify} messages.
         * @param message gamemsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Igamemsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a gamemsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns gamemsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.gamemsg;

        /**
         * Decodes a gamemsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns gamemsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.gamemsg;

        /**
         * Verifies a gamemsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a gamemsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns gamemsg
         */
        public static fromObject(object: { [k: string]: any }): game.gamemsg;

        /**
         * Creates a plain object from a gamemsg message. Also converts values to other types if specified.
         * @param message gamemsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.gamemsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this gamemsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_system_message. */
    interface Inotify_system_message {

        /** notify_system_message type */
        type: number;

        /** notify_system_message text */
        text: string;
    }

    /** Represents a notify_system_message. */
    class notify_system_message implements Inotify_system_message {

        /**
         * Constructs a new notify_system_message.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Inotify_system_message);

        /** notify_system_message type. */
        public type: number;

        /** notify_system_message text. */
        public text: string;

        /**
         * Creates a new notify_system_message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_system_message instance
         */
        public static create(properties?: game.Inotify_system_message): game.notify_system_message;

        /**
         * Encodes the specified notify_system_message message. Does not implicitly {@link game.notify_system_message.verify|verify} messages.
         * @param message notify_system_message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.Inotify_system_message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_system_message message, length delimited. Does not implicitly {@link game.notify_system_message.verify|verify} messages.
         * @param message notify_system_message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.Inotify_system_message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_system_message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_system_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.notify_system_message;

        /**
         * Decodes a notify_system_message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_system_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.notify_system_message;

        /**
         * Verifies a notify_system_message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_system_message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_system_message
         */
        public static fromObject(object: { [k: string]: any }): game.notify_system_message;

        /**
         * Creates a plain object from a notify_system_message message. Also converts values to other types if specified.
         * @param message notify_system_message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.notify_system_message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_system_message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace hall. */
export namespace hall {

    /** Properties of a request_userinfo. */
    interface Irequest_userinfo {

        /** request_userinfo userid */
        userid: number;

        /** request_userinfo password */
        password: string;
    }

    /** Represents a request_userinfo. */
    class request_userinfo implements Irequest_userinfo {

        /**
         * Constructs a new request_userinfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_userinfo);

        /** request_userinfo userid. */
        public userid: number;

        /** request_userinfo password. */
        public password: string;

        /**
         * Creates a new request_userinfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_userinfo instance
         */
        public static create(properties?: hall.Irequest_userinfo): hall.request_userinfo;

        /**
         * Encodes the specified request_userinfo message. Does not implicitly {@link hall.request_userinfo.verify|verify} messages.
         * @param message request_userinfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_userinfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_userinfo message, length delimited. Does not implicitly {@link hall.request_userinfo.verify|verify} messages.
         * @param message request_userinfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_userinfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_userinfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_userinfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_userinfo;

        /**
         * Decodes a request_userinfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_userinfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_userinfo;

        /**
         * Verifies a request_userinfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_userinfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_userinfo
         */
        public static fromObject(object: { [k: string]: any }): hall.request_userinfo;

        /**
         * Creates a plain object from a request_userinfo message. Also converts values to other types if specified.
         * @param message request_userinfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_userinfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_userinfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a club_info_item. */
    interface Iclub_info_item {

        /** club_info_item clubid */
        clubid: number;

        /** club_info_item club_name */
        club_name: string;

        /** club_info_item member_count */
        member_count: number;

        /** club_info_item identity */
        identity: number;
    }

    /** Represents a club_info_item. */
    class club_info_item implements Iclub_info_item {

        /**
         * Constructs a new club_info_item.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iclub_info_item);

        /** club_info_item clubid. */
        public clubid: number;

        /** club_info_item club_name. */
        public club_name: string;

        /** club_info_item member_count. */
        public member_count: number;

        /** club_info_item identity. */
        public identity: number;

        /**
         * Creates a new club_info_item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns club_info_item instance
         */
        public static create(properties?: hall.Iclub_info_item): hall.club_info_item;

        /**
         * Encodes the specified club_info_item message. Does not implicitly {@link hall.club_info_item.verify|verify} messages.
         * @param message club_info_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iclub_info_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified club_info_item message, length delimited. Does not implicitly {@link hall.club_info_item.verify|verify} messages.
         * @param message club_info_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iclub_info_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a club_info_item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns club_info_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.club_info_item;

        /**
         * Decodes a club_info_item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns club_info_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.club_info_item;

        /**
         * Verifies a club_info_item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a club_info_item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns club_info_item
         */
        public static fromObject(object: { [k: string]: any }): hall.club_info_item;

        /**
         * Creates a plain object from a club_info_item message. Also converts values to other types if specified.
         * @param message club_info_item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.club_info_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this club_info_item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_userinfo. */
    interface Iresponse_userinfo {

        /** response_userinfo userid */
        userid: number;

        /** response_userinfo gameid */
        gameid: number;

        /** response_userinfo faceid */
        faceid: number;

        /** response_userinfo gender */
        gender: number;

        /** response_userinfo nickname */
        nickname: string;

        /** response_userinfo password */
        password: string;

        /** response_userinfo mobilephone */
        mobilephone: string;

        /** response_userinfo alipay_name */
        alipay_name: string;

        /** response_userinfo alipay_account */
        alipay_account: string;

        /** response_userinfo bankcard_id */
        bankcard_id: string;

        /** response_userinfo bankcard_name */
        bankcard_name: string;

        /** response_userinfo vip_level */
        vip_level: number;

        /** response_userinfo signature */
        signature: string;

        /** response_userinfo head_img_url */
        head_img_url: string;

        /** response_userinfo score */
        score: (number|Long);

        /** response_userinfo bank_score */
        bank_score: (number|Long);

        /** response_userinfo recharge_score */
        recharge_score: (number|Long);

        /** response_userinfo club_info */
        club_info?: (hall.Iclub_info_item[]|null);

        /** response_userinfo selected_clubid */
        selected_clubid: number;

        /** response_userinfo lock_kindid */
        lock_kindid: number;

        /** response_userinfo lock_roomid */
        lock_roomid: number;
    }

    /** Represents a response_userinfo. */
    class response_userinfo implements Iresponse_userinfo {

        /**
         * Constructs a new response_userinfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_userinfo);

        /** response_userinfo userid. */
        public userid: number;

        /** response_userinfo gameid. */
        public gameid: number;

        /** response_userinfo faceid. */
        public faceid: number;

        /** response_userinfo gender. */
        public gender: number;

        /** response_userinfo nickname. */
        public nickname: string;

        /** response_userinfo password. */
        public password: string;

        /** response_userinfo mobilephone. */
        public mobilephone: string;

        /** response_userinfo alipay_name. */
        public alipay_name: string;

        /** response_userinfo alipay_account. */
        public alipay_account: string;

        /** response_userinfo bankcard_id. */
        public bankcard_id: string;

        /** response_userinfo bankcard_name. */
        public bankcard_name: string;

        /** response_userinfo vip_level. */
        public vip_level: number;

        /** response_userinfo signature. */
        public signature: string;

        /** response_userinfo head_img_url. */
        public head_img_url: string;

        /** response_userinfo score. */
        public score: (number|Long);

        /** response_userinfo bank_score. */
        public bank_score: (number|Long);

        /** response_userinfo recharge_score. */
        public recharge_score: (number|Long);

        /** response_userinfo club_info. */
        public club_info: hall.Iclub_info_item[];

        /** response_userinfo selected_clubid. */
        public selected_clubid: number;

        /** response_userinfo lock_kindid. */
        public lock_kindid: number;

        /** response_userinfo lock_roomid. */
        public lock_roomid: number;

        /**
         * Creates a new response_userinfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_userinfo instance
         */
        public static create(properties?: hall.Iresponse_userinfo): hall.response_userinfo;

        /**
         * Encodes the specified response_userinfo message. Does not implicitly {@link hall.response_userinfo.verify|verify} messages.
         * @param message response_userinfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_userinfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_userinfo message, length delimited. Does not implicitly {@link hall.response_userinfo.verify|verify} messages.
         * @param message response_userinfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_userinfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_userinfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_userinfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_userinfo;

        /**
         * Decodes a response_userinfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_userinfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_userinfo;

        /**
         * Verifies a response_userinfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_userinfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_userinfo
         */
        public static fromObject(object: { [k: string]: any }): hall.response_userinfo;

        /**
         * Creates a plain object from a response_userinfo message. Also converts values to other types if specified.
         * @param message response_userinfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_userinfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_userinfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_userinfo_failed. */
    interface Iresponse_userinfo_failed {

        /** response_userinfo_failed reason */
        reason: string;
    }

    /** Represents a response_userinfo_failed. */
    class response_userinfo_failed implements Iresponse_userinfo_failed {

        /**
         * Constructs a new response_userinfo_failed.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_userinfo_failed);

        /** response_userinfo_failed reason. */
        public reason: string;

        /**
         * Creates a new response_userinfo_failed instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_userinfo_failed instance
         */
        public static create(properties?: hall.Iresponse_userinfo_failed): hall.response_userinfo_failed;

        /**
         * Encodes the specified response_userinfo_failed message. Does not implicitly {@link hall.response_userinfo_failed.verify|verify} messages.
         * @param message response_userinfo_failed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_userinfo_failed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_userinfo_failed message, length delimited. Does not implicitly {@link hall.response_userinfo_failed.verify|verify} messages.
         * @param message response_userinfo_failed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_userinfo_failed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_userinfo_failed message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_userinfo_failed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_userinfo_failed;

        /**
         * Decodes a response_userinfo_failed message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_userinfo_failed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_userinfo_failed;

        /**
         * Verifies a response_userinfo_failed message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_userinfo_failed message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_userinfo_failed
         */
        public static fromObject(object: { [k: string]: any }): hall.response_userinfo_failed;

        /**
         * Creates a plain object from a response_userinfo_failed message. Also converts values to other types if specified.
         * @param message response_userinfo_failed
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_userinfo_failed, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_userinfo_failed to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_update_userscore. */
    interface Inotify_update_userscore {

        /** notify_update_userscore score */
        score: (number|Long);

        /** notify_update_userscore bank_score */
        bank_score: (number|Long);
    }

    /** Represents a notify_update_userscore. */
    class notify_update_userscore implements Inotify_update_userscore {

        /**
         * Constructs a new notify_update_userscore.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Inotify_update_userscore);

        /** notify_update_userscore score. */
        public score: (number|Long);

        /** notify_update_userscore bank_score. */
        public bank_score: (number|Long);

        /**
         * Creates a new notify_update_userscore instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_update_userscore instance
         */
        public static create(properties?: hall.Inotify_update_userscore): hall.notify_update_userscore;

        /**
         * Encodes the specified notify_update_userscore message. Does not implicitly {@link hall.notify_update_userscore.verify|verify} messages.
         * @param message notify_update_userscore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Inotify_update_userscore, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_update_userscore message, length delimited. Does not implicitly {@link hall.notify_update_userscore.verify|verify} messages.
         * @param message notify_update_userscore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Inotify_update_userscore, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_update_userscore message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_update_userscore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.notify_update_userscore;

        /**
         * Decodes a notify_update_userscore message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_update_userscore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.notify_update_userscore;

        /**
         * Verifies a notify_update_userscore message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_update_userscore message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_update_userscore
         */
        public static fromObject(object: { [k: string]: any }): hall.notify_update_userscore;

        /**
         * Creates a plain object from a notify_update_userscore message. Also converts values to other types if specified.
         * @param message notify_update_userscore
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.notify_update_userscore, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_update_userscore to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_game_list. */
    interface Irequest_game_list {
    }

    /** Represents a request_game_list. */
    class request_game_list implements Irequest_game_list {

        /**
         * Constructs a new request_game_list.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_game_list);

        /**
         * Creates a new request_game_list instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_game_list instance
         */
        public static create(properties?: hall.Irequest_game_list): hall.request_game_list;

        /**
         * Encodes the specified request_game_list message. Does not implicitly {@link hall.request_game_list.verify|verify} messages.
         * @param message request_game_list message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_game_list, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_game_list message, length delimited. Does not implicitly {@link hall.request_game_list.verify|verify} messages.
         * @param message request_game_list message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_game_list, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_game_list message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_game_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_game_list;

        /**
         * Decodes a request_game_list message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_game_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_game_list;

        /**
         * Verifies a request_game_list message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_game_list message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_game_list
         */
        public static fromObject(object: { [k: string]: any }): hall.request_game_list;

        /**
         * Creates a plain object from a request_game_list message. Also converts values to other types if specified.
         * @param message request_game_list
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_game_list, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_game_list to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a game_type. */
    interface Igame_type {

        /** game_type sortid */
        sortid: number;

        /** game_type typeid */
        typeid: number;

        /** game_type type_name */
        type_name: string;
    }

    /** Represents a game_type. */
    class game_type implements Igame_type {

        /**
         * Constructs a new game_type.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Igame_type);

        /** game_type sortid. */
        public sortid: number;

        /** game_type typeid. */
        public typeid: number;

        /** game_type type_name. */
        public type_name: string;

        /**
         * Creates a new game_type instance using the specified properties.
         * @param [properties] Properties to set
         * @returns game_type instance
         */
        public static create(properties?: hall.Igame_type): hall.game_type;

        /**
         * Encodes the specified game_type message. Does not implicitly {@link hall.game_type.verify|verify} messages.
         * @param message game_type message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Igame_type, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified game_type message, length delimited. Does not implicitly {@link hall.game_type.verify|verify} messages.
         * @param message game_type message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Igame_type, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a game_type message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns game_type
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.game_type;

        /**
         * Decodes a game_type message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns game_type
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.game_type;

        /**
         * Verifies a game_type message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a game_type message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns game_type
         */
        public static fromObject(object: { [k: string]: any }): hall.game_type;

        /**
         * Creates a plain object from a game_type message. Also converts values to other types if specified.
         * @param message game_type
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.game_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this game_type to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_game_type_list. */
    interface Iresponse_game_type_list {

        /** response_game_type_list game_type_list */
        game_type_list?: (hall.Igame_type[]|null);
    }

    /** Represents a response_game_type_list. */
    class response_game_type_list implements Iresponse_game_type_list {

        /**
         * Constructs a new response_game_type_list.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_game_type_list);

        /** response_game_type_list game_type_list. */
        public game_type_list: hall.Igame_type[];

        /**
         * Creates a new response_game_type_list instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_game_type_list instance
         */
        public static create(properties?: hall.Iresponse_game_type_list): hall.response_game_type_list;

        /**
         * Encodes the specified response_game_type_list message. Does not implicitly {@link hall.response_game_type_list.verify|verify} messages.
         * @param message response_game_type_list message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_game_type_list, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_game_type_list message, length delimited. Does not implicitly {@link hall.response_game_type_list.verify|verify} messages.
         * @param message response_game_type_list message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_game_type_list, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_game_type_list message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_game_type_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_game_type_list;

        /**
         * Decodes a response_game_type_list message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_game_type_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_game_type_list;

        /**
         * Verifies a response_game_type_list message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_game_type_list message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_game_type_list
         */
        public static fromObject(object: { [k: string]: any }): hall.response_game_type_list;

        /**
         * Creates a plain object from a response_game_type_list message. Also converts values to other types if specified.
         * @param message response_game_type_list
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_game_type_list, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_game_type_list to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a game_kind. */
    interface Igame_kind {

        /** game_kind typeid */
        typeid: number;

        /** game_kind sortid */
        sortid: number;

        /** game_kind kindid */
        kindid: number;

        /** game_kind kind_name */
        kind_name: string;
    }

    /** Represents a game_kind. */
    class game_kind implements Igame_kind {

        /**
         * Constructs a new game_kind.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Igame_kind);

        /** game_kind typeid. */
        public typeid: number;

        /** game_kind sortid. */
        public sortid: number;

        /** game_kind kindid. */
        public kindid: number;

        /** game_kind kind_name. */
        public kind_name: string;

        /**
         * Creates a new game_kind instance using the specified properties.
         * @param [properties] Properties to set
         * @returns game_kind instance
         */
        public static create(properties?: hall.Igame_kind): hall.game_kind;

        /**
         * Encodes the specified game_kind message. Does not implicitly {@link hall.game_kind.verify|verify} messages.
         * @param message game_kind message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Igame_kind, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified game_kind message, length delimited. Does not implicitly {@link hall.game_kind.verify|verify} messages.
         * @param message game_kind message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Igame_kind, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a game_kind message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns game_kind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.game_kind;

        /**
         * Decodes a game_kind message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns game_kind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.game_kind;

        /**
         * Verifies a game_kind message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a game_kind message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns game_kind
         */
        public static fromObject(object: { [k: string]: any }): hall.game_kind;

        /**
         * Creates a plain object from a game_kind message. Also converts values to other types if specified.
         * @param message game_kind
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.game_kind, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this game_kind to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_game_kind_list. */
    interface Iresponse_game_kind_list {

        /** response_game_kind_list game_kind_list */
        game_kind_list?: (hall.Igame_kind[]|null);
    }

    /** Represents a response_game_kind_list. */
    class response_game_kind_list implements Iresponse_game_kind_list {

        /**
         * Constructs a new response_game_kind_list.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_game_kind_list);

        /** response_game_kind_list game_kind_list. */
        public game_kind_list: hall.Igame_kind[];

        /**
         * Creates a new response_game_kind_list instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_game_kind_list instance
         */
        public static create(properties?: hall.Iresponse_game_kind_list): hall.response_game_kind_list;

        /**
         * Encodes the specified response_game_kind_list message. Does not implicitly {@link hall.response_game_kind_list.verify|verify} messages.
         * @param message response_game_kind_list message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_game_kind_list, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_game_kind_list message, length delimited. Does not implicitly {@link hall.response_game_kind_list.verify|verify} messages.
         * @param message response_game_kind_list message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_game_kind_list, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_game_kind_list message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_game_kind_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_game_kind_list;

        /**
         * Decodes a response_game_kind_list message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_game_kind_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_game_kind_list;

        /**
         * Verifies a response_game_kind_list message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_game_kind_list message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_game_kind_list
         */
        public static fromObject(object: { [k: string]: any }): hall.response_game_kind_list;

        /**
         * Creates a plain object from a response_game_kind_list message. Also converts values to other types if specified.
         * @param message response_game_kind_list
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_game_kind_list, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_game_kind_list to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a game_room. */
    interface Igame_room {

        /** game_room sessionid */
        sessionid: number;

        /** game_room kindid */
        kindid: number;

        /** game_room sortid */
        sortid: number;

        /** game_room min_enter_score */
        min_enter_score: (number|Long);

        /** game_room room_name */
        room_name: string;
    }

    /** Represents a game_room. */
    class game_room implements Igame_room {

        /**
         * Constructs a new game_room.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Igame_room);

        /** game_room sessionid. */
        public sessionid: number;

        /** game_room kindid. */
        public kindid: number;

        /** game_room sortid. */
        public sortid: number;

        /** game_room min_enter_score. */
        public min_enter_score: (number|Long);

        /** game_room room_name. */
        public room_name: string;

        /**
         * Creates a new game_room instance using the specified properties.
         * @param [properties] Properties to set
         * @returns game_room instance
         */
        public static create(properties?: hall.Igame_room): hall.game_room;

        /**
         * Encodes the specified game_room message. Does not implicitly {@link hall.game_room.verify|verify} messages.
         * @param message game_room message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Igame_room, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified game_room message, length delimited. Does not implicitly {@link hall.game_room.verify|verify} messages.
         * @param message game_room message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Igame_room, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a game_room message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns game_room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.game_room;

        /**
         * Decodes a game_room message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns game_room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.game_room;

        /**
         * Verifies a game_room message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a game_room message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns game_room
         */
        public static fromObject(object: { [k: string]: any }): hall.game_room;

        /**
         * Creates a plain object from a game_room message. Also converts values to other types if specified.
         * @param message game_room
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.game_room, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this game_room to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_game_room_list. */
    interface Iresponse_game_room_list {

        /** response_game_room_list game_room_list */
        game_room_list?: (hall.Igame_room[]|null);
    }

    /** Represents a response_game_room_list. */
    class response_game_room_list implements Iresponse_game_room_list {

        /**
         * Constructs a new response_game_room_list.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_game_room_list);

        /** response_game_room_list game_room_list. */
        public game_room_list: hall.Igame_room[];

        /**
         * Creates a new response_game_room_list instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_game_room_list instance
         */
        public static create(properties?: hall.Iresponse_game_room_list): hall.response_game_room_list;

        /**
         * Encodes the specified response_game_room_list message. Does not implicitly {@link hall.response_game_room_list.verify|verify} messages.
         * @param message response_game_room_list message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_game_room_list, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_game_room_list message, length delimited. Does not implicitly {@link hall.response_game_room_list.verify|verify} messages.
         * @param message response_game_room_list message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_game_room_list, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_game_room_list message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_game_room_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_game_room_list;

        /**
         * Decodes a response_game_room_list message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_game_room_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_game_room_list;

        /**
         * Verifies a response_game_room_list message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_game_room_list message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_game_room_list
         */
        public static fromObject(object: { [k: string]: any }): hall.response_game_room_list;

        /**
         * Creates a plain object from a response_game_room_list message. Also converts values to other types if specified.
         * @param message response_game_room_list
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_game_room_list, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_game_room_list to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_bank_save_score. */
    interface Irequest_bank_save_score {

        /** request_bank_save_score userid */
        userid: number;

        /** request_bank_save_score password */
        password: string;

        /** request_bank_save_score save_score */
        save_score: (number|Long);
    }

    /** Represents a request_bank_save_score. */
    class request_bank_save_score implements Irequest_bank_save_score {

        /**
         * Constructs a new request_bank_save_score.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_bank_save_score);

        /** request_bank_save_score userid. */
        public userid: number;

        /** request_bank_save_score password. */
        public password: string;

        /** request_bank_save_score save_score. */
        public save_score: (number|Long);

        /**
         * Creates a new request_bank_save_score instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_bank_save_score instance
         */
        public static create(properties?: hall.Irequest_bank_save_score): hall.request_bank_save_score;

        /**
         * Encodes the specified request_bank_save_score message. Does not implicitly {@link hall.request_bank_save_score.verify|verify} messages.
         * @param message request_bank_save_score message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_bank_save_score, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_bank_save_score message, length delimited. Does not implicitly {@link hall.request_bank_save_score.verify|verify} messages.
         * @param message request_bank_save_score message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_bank_save_score, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_bank_save_score message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_bank_save_score
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_bank_save_score;

        /**
         * Decodes a request_bank_save_score message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_bank_save_score
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_bank_save_score;

        /**
         * Verifies a request_bank_save_score message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_bank_save_score message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_bank_save_score
         */
        public static fromObject(object: { [k: string]: any }): hall.request_bank_save_score;

        /**
         * Creates a plain object from a request_bank_save_score message. Also converts values to other types if specified.
         * @param message request_bank_save_score
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_bank_save_score, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_bank_save_score to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_bank_get_score. */
    interface Irequest_bank_get_score {

        /** request_bank_get_score userid */
        userid: number;

        /** request_bank_get_score password */
        password: string;

        /** request_bank_get_score get_score */
        get_score: (number|Long);
    }

    /** Represents a request_bank_get_score. */
    class request_bank_get_score implements Irequest_bank_get_score {

        /**
         * Constructs a new request_bank_get_score.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_bank_get_score);

        /** request_bank_get_score userid. */
        public userid: number;

        /** request_bank_get_score password. */
        public password: string;

        /** request_bank_get_score get_score. */
        public get_score: (number|Long);

        /**
         * Creates a new request_bank_get_score instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_bank_get_score instance
         */
        public static create(properties?: hall.Irequest_bank_get_score): hall.request_bank_get_score;

        /**
         * Encodes the specified request_bank_get_score message. Does not implicitly {@link hall.request_bank_get_score.verify|verify} messages.
         * @param message request_bank_get_score message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_bank_get_score, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_bank_get_score message, length delimited. Does not implicitly {@link hall.request_bank_get_score.verify|verify} messages.
         * @param message request_bank_get_score message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_bank_get_score, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_bank_get_score message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_bank_get_score
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_bank_get_score;

        /**
         * Decodes a request_bank_get_score message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_bank_get_score
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_bank_get_score;

        /**
         * Verifies a request_bank_get_score message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_bank_get_score message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_bank_get_score
         */
        public static fromObject(object: { [k: string]: any }): hall.request_bank_get_score;

        /**
         * Creates a plain object from a request_bank_get_score message. Also converts values to other types if specified.
         * @param message request_bank_get_score
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_bank_get_score, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_bank_get_score to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a reponse_bank_result. */
    interface Ireponse_bank_result {

        /** reponse_bank_result result_code */
        result_code: number;

        /** reponse_bank_result user_score */
        user_score: (number|Long);

        /** reponse_bank_result bank_score */
        bank_score: (number|Long);

        /** reponse_bank_result reason */
        reason?: (string|null);
    }

    /** Represents a reponse_bank_result. */
    class reponse_bank_result implements Ireponse_bank_result {

        /**
         * Constructs a new reponse_bank_result.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Ireponse_bank_result);

        /** reponse_bank_result result_code. */
        public result_code: number;

        /** reponse_bank_result user_score. */
        public user_score: (number|Long);

        /** reponse_bank_result bank_score. */
        public bank_score: (number|Long);

        /** reponse_bank_result reason. */
        public reason: string;

        /**
         * Creates a new reponse_bank_result instance using the specified properties.
         * @param [properties] Properties to set
         * @returns reponse_bank_result instance
         */
        public static create(properties?: hall.Ireponse_bank_result): hall.reponse_bank_result;

        /**
         * Encodes the specified reponse_bank_result message. Does not implicitly {@link hall.reponse_bank_result.verify|verify} messages.
         * @param message reponse_bank_result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Ireponse_bank_result, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified reponse_bank_result message, length delimited. Does not implicitly {@link hall.reponse_bank_result.verify|verify} messages.
         * @param message reponse_bank_result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Ireponse_bank_result, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a reponse_bank_result message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns reponse_bank_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.reponse_bank_result;

        /**
         * Decodes a reponse_bank_result message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns reponse_bank_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.reponse_bank_result;

        /**
         * Verifies a reponse_bank_result message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a reponse_bank_result message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns reponse_bank_result
         */
        public static fromObject(object: { [k: string]: any }): hall.reponse_bank_result;

        /**
         * Creates a plain object from a reponse_bank_result message. Also converts values to other types if specified.
         * @param message reponse_bank_result
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.reponse_bank_result, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this reponse_bank_result to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_log_change_score. */
    interface Irequest_log_change_score {

        /** request_log_change_score userid */
        userid: number;

        /** request_log_change_score password */
        password: string;

        /** request_log_change_score day */
        day: number;
    }

    /** Represents a request_log_change_score. */
    class request_log_change_score implements Irequest_log_change_score {

        /**
         * Constructs a new request_log_change_score.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_log_change_score);

        /** request_log_change_score userid. */
        public userid: number;

        /** request_log_change_score password. */
        public password: string;

        /** request_log_change_score day. */
        public day: number;

        /**
         * Creates a new request_log_change_score instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_log_change_score instance
         */
        public static create(properties?: hall.Irequest_log_change_score): hall.request_log_change_score;

        /**
         * Encodes the specified request_log_change_score message. Does not implicitly {@link hall.request_log_change_score.verify|verify} messages.
         * @param message request_log_change_score message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_log_change_score, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_log_change_score message, length delimited. Does not implicitly {@link hall.request_log_change_score.verify|verify} messages.
         * @param message request_log_change_score message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_log_change_score, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_log_change_score message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_log_change_score
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_log_change_score;

        /**
         * Decodes a request_log_change_score message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_log_change_score
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_log_change_score;

        /**
         * Verifies a request_log_change_score message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_log_change_score message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_log_change_score
         */
        public static fromObject(object: { [k: string]: any }): hall.request_log_change_score;

        /**
         * Creates a plain object from a request_log_change_score message. Also converts values to other types if specified.
         * @param message request_log_change_score
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_log_change_score, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_log_change_score to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a log_change_score_item. */
    interface Ilog_change_score_item {

        /** log_change_score_item source_score */
        source_score: (number|Long);

        /** log_change_score_item change_score */
        change_score: (number|Long);

        /** log_change_score_item id */
        id: number;

        /** log_change_score_item change_type */
        change_type: number;

        /** log_change_score_item change_reason */
        change_reason: string;

        /** log_change_score_item change_origin */
        change_origin: string;

        /** log_change_score_item change_date */
        change_date: string;
    }

    /** Represents a log_change_score_item. */
    class log_change_score_item implements Ilog_change_score_item {

        /**
         * Constructs a new log_change_score_item.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Ilog_change_score_item);

        /** log_change_score_item source_score. */
        public source_score: (number|Long);

        /** log_change_score_item change_score. */
        public change_score: (number|Long);

        /** log_change_score_item id. */
        public id: number;

        /** log_change_score_item change_type. */
        public change_type: number;

        /** log_change_score_item change_reason. */
        public change_reason: string;

        /** log_change_score_item change_origin. */
        public change_origin: string;

        /** log_change_score_item change_date. */
        public change_date: string;

        /**
         * Creates a new log_change_score_item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns log_change_score_item instance
         */
        public static create(properties?: hall.Ilog_change_score_item): hall.log_change_score_item;

        /**
         * Encodes the specified log_change_score_item message. Does not implicitly {@link hall.log_change_score_item.verify|verify} messages.
         * @param message log_change_score_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Ilog_change_score_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified log_change_score_item message, length delimited. Does not implicitly {@link hall.log_change_score_item.verify|verify} messages.
         * @param message log_change_score_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Ilog_change_score_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a log_change_score_item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns log_change_score_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.log_change_score_item;

        /**
         * Decodes a log_change_score_item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns log_change_score_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.log_change_score_item;

        /**
         * Verifies a log_change_score_item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a log_change_score_item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns log_change_score_item
         */
        public static fromObject(object: { [k: string]: any }): hall.log_change_score_item;

        /**
         * Creates a plain object from a log_change_score_item message. Also converts values to other types if specified.
         * @param message log_change_score_item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.log_change_score_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this log_change_score_item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a reponse_log_change_score. */
    interface Ireponse_log_change_score {

        /** reponse_log_change_score items */
        items?: (hall.Ilog_change_score_item[]|null);
    }

    /** Represents a reponse_log_change_score. */
    class reponse_log_change_score implements Ireponse_log_change_score {

        /**
         * Constructs a new reponse_log_change_score.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Ireponse_log_change_score);

        /** reponse_log_change_score items. */
        public items: hall.Ilog_change_score_item[];

        /**
         * Creates a new reponse_log_change_score instance using the specified properties.
         * @param [properties] Properties to set
         * @returns reponse_log_change_score instance
         */
        public static create(properties?: hall.Ireponse_log_change_score): hall.reponse_log_change_score;

        /**
         * Encodes the specified reponse_log_change_score message. Does not implicitly {@link hall.reponse_log_change_score.verify|verify} messages.
         * @param message reponse_log_change_score message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Ireponse_log_change_score, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified reponse_log_change_score message, length delimited. Does not implicitly {@link hall.reponse_log_change_score.verify|verify} messages.
         * @param message reponse_log_change_score message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Ireponse_log_change_score, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a reponse_log_change_score message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns reponse_log_change_score
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.reponse_log_change_score;

        /**
         * Decodes a reponse_log_change_score message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns reponse_log_change_score
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.reponse_log_change_score;

        /**
         * Verifies a reponse_log_change_score message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a reponse_log_change_score message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns reponse_log_change_score
         */
        public static fromObject(object: { [k: string]: any }): hall.reponse_log_change_score;

        /**
         * Creates a plain object from a reponse_log_change_score message. Also converts values to other types if specified.
         * @param message reponse_log_change_score
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.reponse_log_change_score, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this reponse_log_change_score to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_config_shop_exchange. */
    interface Irequest_config_shop_exchange {

        /** request_config_shop_exchange type */
        type: number;
    }

    /** Represents a request_config_shop_exchange. */
    class request_config_shop_exchange implements Irequest_config_shop_exchange {

        /**
         * Constructs a new request_config_shop_exchange.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_config_shop_exchange);

        /** request_config_shop_exchange type. */
        public type: number;

        /**
         * Creates a new request_config_shop_exchange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_config_shop_exchange instance
         */
        public static create(properties?: hall.Irequest_config_shop_exchange): hall.request_config_shop_exchange;

        /**
         * Encodes the specified request_config_shop_exchange message. Does not implicitly {@link hall.request_config_shop_exchange.verify|verify} messages.
         * @param message request_config_shop_exchange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_config_shop_exchange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_config_shop_exchange message, length delimited. Does not implicitly {@link hall.request_config_shop_exchange.verify|verify} messages.
         * @param message request_config_shop_exchange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_config_shop_exchange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_config_shop_exchange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_config_shop_exchange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_config_shop_exchange;

        /**
         * Decodes a request_config_shop_exchange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_config_shop_exchange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_config_shop_exchange;

        /**
         * Verifies a request_config_shop_exchange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_config_shop_exchange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_config_shop_exchange
         */
        public static fromObject(object: { [k: string]: any }): hall.request_config_shop_exchange;

        /**
         * Creates a plain object from a request_config_shop_exchange message. Also converts values to other types if specified.
         * @param message request_config_shop_exchange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_config_shop_exchange, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_config_shop_exchange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_config_shop_exchange. */
    interface Iresponse_config_shop_exchange {

        /** response_config_shop_exchange content */
        content: string;

        /** response_config_shop_exchange ext */
        ext?: (string|null);
    }

    /** Represents a response_config_shop_exchange. */
    class response_config_shop_exchange implements Iresponse_config_shop_exchange {

        /**
         * Constructs a new response_config_shop_exchange.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_config_shop_exchange);

        /** response_config_shop_exchange content. */
        public content: string;

        /** response_config_shop_exchange ext. */
        public ext: string;

        /**
         * Creates a new response_config_shop_exchange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_config_shop_exchange instance
         */
        public static create(properties?: hall.Iresponse_config_shop_exchange): hall.response_config_shop_exchange;

        /**
         * Encodes the specified response_config_shop_exchange message. Does not implicitly {@link hall.response_config_shop_exchange.verify|verify} messages.
         * @param message response_config_shop_exchange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_config_shop_exchange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_config_shop_exchange message, length delimited. Does not implicitly {@link hall.response_config_shop_exchange.verify|verify} messages.
         * @param message response_config_shop_exchange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_config_shop_exchange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_config_shop_exchange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_config_shop_exchange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_config_shop_exchange;

        /**
         * Decodes a response_config_shop_exchange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_config_shop_exchange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_config_shop_exchange;

        /**
         * Verifies a response_config_shop_exchange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_config_shop_exchange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_config_shop_exchange
         */
        public static fromObject(object: { [k: string]: any }): hall.response_config_shop_exchange;

        /**
         * Creates a plain object from a response_config_shop_exchange message. Also converts values to other types if specified.
         * @param message response_config_shop_exchange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_config_shop_exchange, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_config_shop_exchange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_operate_result. */
    interface Iresponse_operate_result {

        /** response_operate_result result_code */
        result_code: number;

        /** response_operate_result reason */
        reason?: (string|null);
    }

    /** Represents a response_operate_result. */
    class response_operate_result implements Iresponse_operate_result {

        /**
         * Constructs a new response_operate_result.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_operate_result);

        /** response_operate_result result_code. */
        public result_code: number;

        /** response_operate_result reason. */
        public reason: string;

        /**
         * Creates a new response_operate_result instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_operate_result instance
         */
        public static create(properties?: hall.Iresponse_operate_result): hall.response_operate_result;

        /**
         * Encodes the specified response_operate_result message. Does not implicitly {@link hall.response_operate_result.verify|verify} messages.
         * @param message response_operate_result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_operate_result, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_operate_result message, length delimited. Does not implicitly {@link hall.response_operate_result.verify|verify} messages.
         * @param message response_operate_result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_operate_result, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_operate_result message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_operate_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_operate_result;

        /**
         * Decodes a response_operate_result message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_operate_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_operate_result;

        /**
         * Verifies a response_operate_result message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_operate_result message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_operate_result
         */
        public static fromObject(object: { [k: string]: any }): hall.response_operate_result;

        /**
         * Creates a plain object from a response_operate_result message. Also converts values to other types if specified.
         * @param message response_operate_result
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_operate_result, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_operate_result to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_accountup. */
    interface Irequest_accountup {

        /** request_accountup userid */
        userid: number;

        /** request_accountup password */
        password: string;

        /** request_accountup phone_number */
        phone_number: string;

        /** request_accountup code */
        code: string;

        /** request_accountup new_password */
        new_password: string;
    }

    /** Represents a request_accountup. */
    class request_accountup implements Irequest_accountup {

        /**
         * Constructs a new request_accountup.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_accountup);

        /** request_accountup userid. */
        public userid: number;

        /** request_accountup password. */
        public password: string;

        /** request_accountup phone_number. */
        public phone_number: string;

        /** request_accountup code. */
        public code: string;

        /** request_accountup new_password. */
        public new_password: string;

        /**
         * Creates a new request_accountup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_accountup instance
         */
        public static create(properties?: hall.Irequest_accountup): hall.request_accountup;

        /**
         * Encodes the specified request_accountup message. Does not implicitly {@link hall.request_accountup.verify|verify} messages.
         * @param message request_accountup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_accountup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_accountup message, length delimited. Does not implicitly {@link hall.request_accountup.verify|verify} messages.
         * @param message request_accountup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_accountup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_accountup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_accountup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_accountup;

        /**
         * Decodes a request_accountup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_accountup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_accountup;

        /**
         * Verifies a request_accountup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_accountup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_accountup
         */
        public static fromObject(object: { [k: string]: any }): hall.request_accountup;

        /**
         * Creates a plain object from a request_accountup message. Also converts values to other types if specified.
         * @param message request_accountup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_accountup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_accountup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_modify_password. */
    interface Irequest_modify_password {

        /** request_modify_password userid */
        userid: number;

        /** request_modify_password password */
        password: string;

        /** request_modify_password new_password */
        new_password: string;

        /** request_modify_password phone_number */
        phone_number: string;

        /** request_modify_password code */
        code: string;
    }

    /** Represents a request_modify_password. */
    class request_modify_password implements Irequest_modify_password {

        /**
         * Constructs a new request_modify_password.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_modify_password);

        /** request_modify_password userid. */
        public userid: number;

        /** request_modify_password password. */
        public password: string;

        /** request_modify_password new_password. */
        public new_password: string;

        /** request_modify_password phone_number. */
        public phone_number: string;

        /** request_modify_password code. */
        public code: string;

        /**
         * Creates a new request_modify_password instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_modify_password instance
         */
        public static create(properties?: hall.Irequest_modify_password): hall.request_modify_password;

        /**
         * Encodes the specified request_modify_password message. Does not implicitly {@link hall.request_modify_password.verify|verify} messages.
         * @param message request_modify_password message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_modify_password, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_modify_password message, length delimited. Does not implicitly {@link hall.request_modify_password.verify|verify} messages.
         * @param message request_modify_password message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_modify_password, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_modify_password message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_modify_password
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_modify_password;

        /**
         * Decodes a request_modify_password message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_modify_password
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_modify_password;

        /**
         * Verifies a request_modify_password message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_modify_password message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_modify_password
         */
        public static fromObject(object: { [k: string]: any }): hall.request_modify_password;

        /**
         * Creates a plain object from a request_modify_password message. Also converts values to other types if specified.
         * @param message request_modify_password
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_modify_password, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_modify_password to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_bind_phone. */
    interface Irequest_bind_phone {

        /** request_bind_phone userid */
        userid: number;

        /** request_bind_phone password */
        password: string;

        /** request_bind_phone phone_number */
        phone_number: string;

        /** request_bind_phone code */
        code: string;
    }

    /** Represents a request_bind_phone. */
    class request_bind_phone implements Irequest_bind_phone {

        /**
         * Constructs a new request_bind_phone.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_bind_phone);

        /** request_bind_phone userid. */
        public userid: number;

        /** request_bind_phone password. */
        public password: string;

        /** request_bind_phone phone_number. */
        public phone_number: string;

        /** request_bind_phone code. */
        public code: string;

        /**
         * Creates a new request_bind_phone instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_bind_phone instance
         */
        public static create(properties?: hall.Irequest_bind_phone): hall.request_bind_phone;

        /**
         * Encodes the specified request_bind_phone message. Does not implicitly {@link hall.request_bind_phone.verify|verify} messages.
         * @param message request_bind_phone message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_bind_phone, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_bind_phone message, length delimited. Does not implicitly {@link hall.request_bind_phone.verify|verify} messages.
         * @param message request_bind_phone message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_bind_phone, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_bind_phone message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_bind_phone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_bind_phone;

        /**
         * Decodes a request_bind_phone message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_bind_phone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_bind_phone;

        /**
         * Verifies a request_bind_phone message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_bind_phone message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_bind_phone
         */
        public static fromObject(object: { [k: string]: any }): hall.request_bind_phone;

        /**
         * Creates a plain object from a request_bind_phone message. Also converts values to other types if specified.
         * @param message request_bind_phone
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_bind_phone, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_bind_phone to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_bind_alipay. */
    interface Irequest_bind_alipay {

        /** request_bind_alipay userid */
        userid: number;

        /** request_bind_alipay password */
        password: string;

        /** request_bind_alipay alipay_account */
        alipay_account: string;

        /** request_bind_alipay alipay_name */
        alipay_name: string;
    }

    /** Represents a request_bind_alipay. */
    class request_bind_alipay implements Irequest_bind_alipay {

        /**
         * Constructs a new request_bind_alipay.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_bind_alipay);

        /** request_bind_alipay userid. */
        public userid: number;

        /** request_bind_alipay password. */
        public password: string;

        /** request_bind_alipay alipay_account. */
        public alipay_account: string;

        /** request_bind_alipay alipay_name. */
        public alipay_name: string;

        /**
         * Creates a new request_bind_alipay instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_bind_alipay instance
         */
        public static create(properties?: hall.Irequest_bind_alipay): hall.request_bind_alipay;

        /**
         * Encodes the specified request_bind_alipay message. Does not implicitly {@link hall.request_bind_alipay.verify|verify} messages.
         * @param message request_bind_alipay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_bind_alipay, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_bind_alipay message, length delimited. Does not implicitly {@link hall.request_bind_alipay.verify|verify} messages.
         * @param message request_bind_alipay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_bind_alipay, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_bind_alipay message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_bind_alipay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_bind_alipay;

        /**
         * Decodes a request_bind_alipay message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_bind_alipay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_bind_alipay;

        /**
         * Verifies a request_bind_alipay message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_bind_alipay message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_bind_alipay
         */
        public static fromObject(object: { [k: string]: any }): hall.request_bind_alipay;

        /**
         * Creates a plain object from a request_bind_alipay message. Also converts values to other types if specified.
         * @param message request_bind_alipay
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_bind_alipay, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_bind_alipay to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_bind_bankcard. */
    interface Irequest_bind_bankcard {

        /** request_bind_bankcard userid */
        userid: number;

        /** request_bind_bankcard password */
        password: string;

        /** request_bind_bankcard bankcard_id */
        bankcard_id: string;

        /** request_bind_bankcard bankcard_name */
        bankcard_name: string;

        /** request_bind_bankcard bankcard_addr */
        bankcard_addr: string;
    }

    /** Represents a request_bind_bankcard. */
    class request_bind_bankcard implements Irequest_bind_bankcard {

        /**
         * Constructs a new request_bind_bankcard.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_bind_bankcard);

        /** request_bind_bankcard userid. */
        public userid: number;

        /** request_bind_bankcard password. */
        public password: string;

        /** request_bind_bankcard bankcard_id. */
        public bankcard_id: string;

        /** request_bind_bankcard bankcard_name. */
        public bankcard_name: string;

        /** request_bind_bankcard bankcard_addr. */
        public bankcard_addr: string;

        /**
         * Creates a new request_bind_bankcard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_bind_bankcard instance
         */
        public static create(properties?: hall.Irequest_bind_bankcard): hall.request_bind_bankcard;

        /**
         * Encodes the specified request_bind_bankcard message. Does not implicitly {@link hall.request_bind_bankcard.verify|verify} messages.
         * @param message request_bind_bankcard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_bind_bankcard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_bind_bankcard message, length delimited. Does not implicitly {@link hall.request_bind_bankcard.verify|verify} messages.
         * @param message request_bind_bankcard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_bind_bankcard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_bind_bankcard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_bind_bankcard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_bind_bankcard;

        /**
         * Decodes a request_bind_bankcard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_bind_bankcard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_bind_bankcard;

        /**
         * Verifies a request_bind_bankcard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_bind_bankcard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_bind_bankcard
         */
        public static fromObject(object: { [k: string]: any }): hall.request_bind_bankcard;

        /**
         * Creates a plain object from a request_bind_bankcard message. Also converts values to other types if specified.
         * @param message request_bind_bankcard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_bind_bankcard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_bind_bankcard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_exchange. */
    interface Irequest_exchange {

        /** request_exchange userid */
        userid: number;

        /** request_exchange password */
        password: string;

        /** request_exchange type */
        type: number;

        /** request_exchange score */
        score: (number|Long);
    }

    /** Represents a request_exchange. */
    class request_exchange implements Irequest_exchange {

        /**
         * Constructs a new request_exchange.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_exchange);

        /** request_exchange userid. */
        public userid: number;

        /** request_exchange password. */
        public password: string;

        /** request_exchange type. */
        public type: number;

        /** request_exchange score. */
        public score: (number|Long);

        /**
         * Creates a new request_exchange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_exchange instance
         */
        public static create(properties?: hall.Irequest_exchange): hall.request_exchange;

        /**
         * Encodes the specified request_exchange message. Does not implicitly {@link hall.request_exchange.verify|verify} messages.
         * @param message request_exchange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_exchange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_exchange message, length delimited. Does not implicitly {@link hall.request_exchange.verify|verify} messages.
         * @param message request_exchange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_exchange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_exchange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_exchange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_exchange;

        /**
         * Decodes a request_exchange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_exchange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_exchange;

        /**
         * Verifies a request_exchange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_exchange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_exchange
         */
        public static fromObject(object: { [k: string]: any }): hall.request_exchange;

        /**
         * Creates a plain object from a request_exchange message. Also converts values to other types if specified.
         * @param message request_exchange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_exchange, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_exchange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a reponse_exchange_result. */
    interface Ireponse_exchange_result {

        /** reponse_exchange_result result_code */
        result_code: number;

        /** reponse_exchange_result bank_score */
        bank_score: (number|Long);

        /** reponse_exchange_result reason */
        reason?: (string|null);
    }

    /** Represents a reponse_exchange_result. */
    class reponse_exchange_result implements Ireponse_exchange_result {

        /**
         * Constructs a new reponse_exchange_result.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Ireponse_exchange_result);

        /** reponse_exchange_result result_code. */
        public result_code: number;

        /** reponse_exchange_result bank_score. */
        public bank_score: (number|Long);

        /** reponse_exchange_result reason. */
        public reason: string;

        /**
         * Creates a new reponse_exchange_result instance using the specified properties.
         * @param [properties] Properties to set
         * @returns reponse_exchange_result instance
         */
        public static create(properties?: hall.Ireponse_exchange_result): hall.reponse_exchange_result;

        /**
         * Encodes the specified reponse_exchange_result message. Does not implicitly {@link hall.reponse_exchange_result.verify|verify} messages.
         * @param message reponse_exchange_result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Ireponse_exchange_result, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified reponse_exchange_result message, length delimited. Does not implicitly {@link hall.reponse_exchange_result.verify|verify} messages.
         * @param message reponse_exchange_result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Ireponse_exchange_result, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a reponse_exchange_result message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns reponse_exchange_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.reponse_exchange_result;

        /**
         * Decodes a reponse_exchange_result message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns reponse_exchange_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.reponse_exchange_result;

        /**
         * Verifies a reponse_exchange_result message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a reponse_exchange_result message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns reponse_exchange_result
         */
        public static fromObject(object: { [k: string]: any }): hall.reponse_exchange_result;

        /**
         * Creates a plain object from a reponse_exchange_result message. Also converts values to other types if specified.
         * @param message reponse_exchange_result
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.reponse_exchange_result, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this reponse_exchange_result to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_exchange_record. */
    interface Irequest_exchange_record {

        /** request_exchange_record userid */
        userid: number;

        /** request_exchange_record password */
        password: string;

        /** request_exchange_record start_date */
        start_date: string;

        /** request_exchange_record end_date */
        end_date: string;
    }

    /** Represents a request_exchange_record. */
    class request_exchange_record implements Irequest_exchange_record {

        /**
         * Constructs a new request_exchange_record.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_exchange_record);

        /** request_exchange_record userid. */
        public userid: number;

        /** request_exchange_record password. */
        public password: string;

        /** request_exchange_record start_date. */
        public start_date: string;

        /** request_exchange_record end_date. */
        public end_date: string;

        /**
         * Creates a new request_exchange_record instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_exchange_record instance
         */
        public static create(properties?: hall.Irequest_exchange_record): hall.request_exchange_record;

        /**
         * Encodes the specified request_exchange_record message. Does not implicitly {@link hall.request_exchange_record.verify|verify} messages.
         * @param message request_exchange_record message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_exchange_record, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_exchange_record message, length delimited. Does not implicitly {@link hall.request_exchange_record.verify|verify} messages.
         * @param message request_exchange_record message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_exchange_record, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_exchange_record message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_exchange_record
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_exchange_record;

        /**
         * Decodes a request_exchange_record message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_exchange_record
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_exchange_record;

        /**
         * Verifies a request_exchange_record message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_exchange_record message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_exchange_record
         */
        public static fromObject(object: { [k: string]: any }): hall.request_exchange_record;

        /**
         * Creates a plain object from a request_exchange_record message. Also converts values to other types if specified.
         * @param message request_exchange_record
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_exchange_record, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_exchange_record to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an exchange_record_item. */
    interface Iexchange_record_item {

        /** exchange_record_item id */
        id: number;

        /** exchange_record_item score */
        score: (number|Long);

        /** exchange_record_item revenue */
        revenue: (number|Long);

        /** exchange_record_item account */
        account: string;

        /** exchange_record_item state */
        state: number;

        /** exchange_record_item reason */
        reason: string;

        /** exchange_record_item insert_date */
        insert_date: string;
    }

    /** Represents an exchange_record_item. */
    class exchange_record_item implements Iexchange_record_item {

        /**
         * Constructs a new exchange_record_item.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iexchange_record_item);

        /** exchange_record_item id. */
        public id: number;

        /** exchange_record_item score. */
        public score: (number|Long);

        /** exchange_record_item revenue. */
        public revenue: (number|Long);

        /** exchange_record_item account. */
        public account: string;

        /** exchange_record_item state. */
        public state: number;

        /** exchange_record_item reason. */
        public reason: string;

        /** exchange_record_item insert_date. */
        public insert_date: string;

        /**
         * Creates a new exchange_record_item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns exchange_record_item instance
         */
        public static create(properties?: hall.Iexchange_record_item): hall.exchange_record_item;

        /**
         * Encodes the specified exchange_record_item message. Does not implicitly {@link hall.exchange_record_item.verify|verify} messages.
         * @param message exchange_record_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iexchange_record_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified exchange_record_item message, length delimited. Does not implicitly {@link hall.exchange_record_item.verify|verify} messages.
         * @param message exchange_record_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iexchange_record_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an exchange_record_item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns exchange_record_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.exchange_record_item;

        /**
         * Decodes an exchange_record_item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns exchange_record_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.exchange_record_item;

        /**
         * Verifies an exchange_record_item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an exchange_record_item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns exchange_record_item
         */
        public static fromObject(object: { [k: string]: any }): hall.exchange_record_item;

        /**
         * Creates a plain object from an exchange_record_item message. Also converts values to other types if specified.
         * @param message exchange_record_item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.exchange_record_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this exchange_record_item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a reponse_exchange_record_result. */
    interface Ireponse_exchange_record_result {

        /** reponse_exchange_record_result items */
        items?: (hall.Iexchange_record_item[]|null);
    }

    /** Represents a reponse_exchange_record_result. */
    class reponse_exchange_record_result implements Ireponse_exchange_record_result {

        /**
         * Constructs a new reponse_exchange_record_result.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Ireponse_exchange_record_result);

        /** reponse_exchange_record_result items. */
        public items: hall.Iexchange_record_item[];

        /**
         * Creates a new reponse_exchange_record_result instance using the specified properties.
         * @param [properties] Properties to set
         * @returns reponse_exchange_record_result instance
         */
        public static create(properties?: hall.Ireponse_exchange_record_result): hall.reponse_exchange_record_result;

        /**
         * Encodes the specified reponse_exchange_record_result message. Does not implicitly {@link hall.reponse_exchange_record_result.verify|verify} messages.
         * @param message reponse_exchange_record_result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Ireponse_exchange_record_result, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified reponse_exchange_record_result message, length delimited. Does not implicitly {@link hall.reponse_exchange_record_result.verify|verify} messages.
         * @param message reponse_exchange_record_result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Ireponse_exchange_record_result, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a reponse_exchange_record_result message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns reponse_exchange_record_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.reponse_exchange_record_result;

        /**
         * Decodes a reponse_exchange_record_result message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns reponse_exchange_record_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.reponse_exchange_record_result;

        /**
         * Verifies a reponse_exchange_record_result message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a reponse_exchange_record_result message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns reponse_exchange_record_result
         */
        public static fromObject(object: { [k: string]: any }): hall.reponse_exchange_record_result;

        /**
         * Creates a plain object from a reponse_exchange_record_result message. Also converts values to other types if specified.
         * @param message reponse_exchange_record_result
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.reponse_exchange_record_result, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this reponse_exchange_record_result to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_recharge_record. */
    interface Irequest_recharge_record {

        /** request_recharge_record userid */
        userid: number;

        /** request_recharge_record password */
        password: string;

        /** request_recharge_record start_date */
        start_date: string;

        /** request_recharge_record end_date */
        end_date: string;
    }

    /** Represents a request_recharge_record. */
    class request_recharge_record implements Irequest_recharge_record {

        /**
         * Constructs a new request_recharge_record.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_recharge_record);

        /** request_recharge_record userid. */
        public userid: number;

        /** request_recharge_record password. */
        public password: string;

        /** request_recharge_record start_date. */
        public start_date: string;

        /** request_recharge_record end_date. */
        public end_date: string;

        /**
         * Creates a new request_recharge_record instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_recharge_record instance
         */
        public static create(properties?: hall.Irequest_recharge_record): hall.request_recharge_record;

        /**
         * Encodes the specified request_recharge_record message. Does not implicitly {@link hall.request_recharge_record.verify|verify} messages.
         * @param message request_recharge_record message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_recharge_record, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_recharge_record message, length delimited. Does not implicitly {@link hall.request_recharge_record.verify|verify} messages.
         * @param message request_recharge_record message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_recharge_record, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_recharge_record message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_recharge_record
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_recharge_record;

        /**
         * Decodes a request_recharge_record message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_recharge_record
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_recharge_record;

        /**
         * Verifies a request_recharge_record message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_recharge_record message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_recharge_record
         */
        public static fromObject(object: { [k: string]: any }): hall.request_recharge_record;

        /**
         * Creates a plain object from a request_recharge_record message. Also converts values to other types if specified.
         * @param message request_recharge_record
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_recharge_record, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_recharge_record to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a recharge_record_item. */
    interface Irecharge_record_item {

        /** recharge_record_item insert_date */
        insert_date: string;

        /** recharge_record_item order_no */
        order_no: string;

        /** recharge_record_item channel */
        channel: string;

        /** recharge_record_item pay_amount */
        pay_amount: (number|Long);

        /** recharge_record_item real_amount */
        real_amount: (number|Long);

        /** recharge_record_item state */
        state: number;
    }

    /** Represents a recharge_record_item. */
    class recharge_record_item implements Irecharge_record_item {

        /**
         * Constructs a new recharge_record_item.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irecharge_record_item);

        /** recharge_record_item insert_date. */
        public insert_date: string;

        /** recharge_record_item order_no. */
        public order_no: string;

        /** recharge_record_item channel. */
        public channel: string;

        /** recharge_record_item pay_amount. */
        public pay_amount: (number|Long);

        /** recharge_record_item real_amount. */
        public real_amount: (number|Long);

        /** recharge_record_item state. */
        public state: number;

        /**
         * Creates a new recharge_record_item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns recharge_record_item instance
         */
        public static create(properties?: hall.Irecharge_record_item): hall.recharge_record_item;

        /**
         * Encodes the specified recharge_record_item message. Does not implicitly {@link hall.recharge_record_item.verify|verify} messages.
         * @param message recharge_record_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irecharge_record_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified recharge_record_item message, length delimited. Does not implicitly {@link hall.recharge_record_item.verify|verify} messages.
         * @param message recharge_record_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irecharge_record_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a recharge_record_item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns recharge_record_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.recharge_record_item;

        /**
         * Decodes a recharge_record_item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns recharge_record_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.recharge_record_item;

        /**
         * Verifies a recharge_record_item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a recharge_record_item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns recharge_record_item
         */
        public static fromObject(object: { [k: string]: any }): hall.recharge_record_item;

        /**
         * Creates a plain object from a recharge_record_item message. Also converts values to other types if specified.
         * @param message recharge_record_item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.recharge_record_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this recharge_record_item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a reponse_recharge_record_result. */
    interface Ireponse_recharge_record_result {

        /** reponse_recharge_record_result items */
        items?: (hall.Irecharge_record_item[]|null);
    }

    /** Represents a reponse_recharge_record_result. */
    class reponse_recharge_record_result implements Ireponse_recharge_record_result {

        /**
         * Constructs a new reponse_recharge_record_result.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Ireponse_recharge_record_result);

        /** reponse_recharge_record_result items. */
        public items: hall.Irecharge_record_item[];

        /**
         * Creates a new reponse_recharge_record_result instance using the specified properties.
         * @param [properties] Properties to set
         * @returns reponse_recharge_record_result instance
         */
        public static create(properties?: hall.Ireponse_recharge_record_result): hall.reponse_recharge_record_result;

        /**
         * Encodes the specified reponse_recharge_record_result message. Does not implicitly {@link hall.reponse_recharge_record_result.verify|verify} messages.
         * @param message reponse_recharge_record_result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Ireponse_recharge_record_result, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified reponse_recharge_record_result message, length delimited. Does not implicitly {@link hall.reponse_recharge_record_result.verify|verify} messages.
         * @param message reponse_recharge_record_result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Ireponse_recharge_record_result, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a reponse_recharge_record_result message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns reponse_recharge_record_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.reponse_recharge_record_result;

        /**
         * Decodes a reponse_recharge_record_result message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns reponse_recharge_record_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.reponse_recharge_record_result;

        /**
         * Verifies a reponse_recharge_record_result message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a reponse_recharge_record_result message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns reponse_recharge_record_result
         */
        public static fromObject(object: { [k: string]: any }): hall.reponse_recharge_record_result;

        /**
         * Creates a plain object from a reponse_recharge_record_result message. Also converts values to other types if specified.
         * @param message reponse_recharge_record_result
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.reponse_recharge_record_result, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this reponse_recharge_record_result to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_user_message_deal. */
    interface Irequest_user_message_deal {

        /** request_user_message_deal userid */
        userid: number;

        /** request_user_message_deal password */
        password: string;

        /** request_user_message_deal id */
        id: number;

        /** request_user_message_deal deal */
        deal: number;
    }

    /** Represents a request_user_message_deal. */
    class request_user_message_deal implements Irequest_user_message_deal {

        /**
         * Constructs a new request_user_message_deal.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_user_message_deal);

        /** request_user_message_deal userid. */
        public userid: number;

        /** request_user_message_deal password. */
        public password: string;

        /** request_user_message_deal id. */
        public id: number;

        /** request_user_message_deal deal. */
        public deal: number;

        /**
         * Creates a new request_user_message_deal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_user_message_deal instance
         */
        public static create(properties?: hall.Irequest_user_message_deal): hall.request_user_message_deal;

        /**
         * Encodes the specified request_user_message_deal message. Does not implicitly {@link hall.request_user_message_deal.verify|verify} messages.
         * @param message request_user_message_deal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_user_message_deal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_user_message_deal message, length delimited. Does not implicitly {@link hall.request_user_message_deal.verify|verify} messages.
         * @param message request_user_message_deal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_user_message_deal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_user_message_deal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_user_message_deal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_user_message_deal;

        /**
         * Decodes a request_user_message_deal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_user_message_deal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_user_message_deal;

        /**
         * Verifies a request_user_message_deal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_user_message_deal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_user_message_deal
         */
        public static fromObject(object: { [k: string]: any }): hall.request_user_message_deal;

        /**
         * Creates a plain object from a request_user_message_deal message. Also converts values to other types if specified.
         * @param message request_user_message_deal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_user_message_deal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_user_message_deal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_user_message. */
    interface Irequest_user_message {

        /** request_user_message userid */
        userid: number;

        /** request_user_message password */
        password: string;
    }

    /** Represents a request_user_message. */
    class request_user_message implements Irequest_user_message {

        /**
         * Constructs a new request_user_message.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_user_message);

        /** request_user_message userid. */
        public userid: number;

        /** request_user_message password. */
        public password: string;

        /**
         * Creates a new request_user_message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_user_message instance
         */
        public static create(properties?: hall.Irequest_user_message): hall.request_user_message;

        /**
         * Encodes the specified request_user_message message. Does not implicitly {@link hall.request_user_message.verify|verify} messages.
         * @param message request_user_message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_user_message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_user_message message, length delimited. Does not implicitly {@link hall.request_user_message.verify|verify} messages.
         * @param message request_user_message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_user_message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_user_message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_user_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_user_message;

        /**
         * Decodes a request_user_message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_user_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_user_message;

        /**
         * Verifies a request_user_message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_user_message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_user_message
         */
        public static fromObject(object: { [k: string]: any }): hall.request_user_message;

        /**
         * Creates a plain object from a request_user_message message. Also converts values to other types if specified.
         * @param message request_user_message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_user_message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_user_message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a user_message_item. */
    interface Iuser_message_item {

        /** user_message_item id */
        id: number;

        /** user_message_item title */
        title: string;

        /** user_message_item message */
        message: string;

        /** user_message_item readed */
        readed: number;

        /** user_message_item insert_date */
        insert_date: string;
    }

    /** Represents a user_message_item. */
    class user_message_item implements Iuser_message_item {

        /**
         * Constructs a new user_message_item.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iuser_message_item);

        /** user_message_item id. */
        public id: number;

        /** user_message_item title. */
        public title: string;

        /** user_message_item message. */
        public message: string;

        /** user_message_item readed. */
        public readed: number;

        /** user_message_item insert_date. */
        public insert_date: string;

        /**
         * Creates a new user_message_item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns user_message_item instance
         */
        public static create(properties?: hall.Iuser_message_item): hall.user_message_item;

        /**
         * Encodes the specified user_message_item message. Does not implicitly {@link hall.user_message_item.verify|verify} messages.
         * @param message user_message_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iuser_message_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified user_message_item message, length delimited. Does not implicitly {@link hall.user_message_item.verify|verify} messages.
         * @param message user_message_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iuser_message_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a user_message_item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns user_message_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.user_message_item;

        /**
         * Decodes a user_message_item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns user_message_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.user_message_item;

        /**
         * Verifies a user_message_item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a user_message_item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns user_message_item
         */
        public static fromObject(object: { [k: string]: any }): hall.user_message_item;

        /**
         * Creates a plain object from a user_message_item message. Also converts values to other types if specified.
         * @param message user_message_item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.user_message_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this user_message_item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_user_message. */
    interface Inotify_user_message {

        /** notify_user_message items */
        items?: (hall.Iuser_message_item[]|null);
    }

    /** Represents a notify_user_message. */
    class notify_user_message implements Inotify_user_message {

        /**
         * Constructs a new notify_user_message.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Inotify_user_message);

        /** notify_user_message items. */
        public items: hall.Iuser_message_item[];

        /**
         * Creates a new notify_user_message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_user_message instance
         */
        public static create(properties?: hall.Inotify_user_message): hall.notify_user_message;

        /**
         * Encodes the specified notify_user_message message. Does not implicitly {@link hall.notify_user_message.verify|verify} messages.
         * @param message notify_user_message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Inotify_user_message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_user_message message, length delimited. Does not implicitly {@link hall.notify_user_message.verify|verify} messages.
         * @param message notify_user_message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Inotify_user_message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_user_message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_user_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.notify_user_message;

        /**
         * Decodes a notify_user_message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_user_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.notify_user_message;

        /**
         * Verifies a notify_user_message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_user_message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_user_message
         */
        public static fromObject(object: { [k: string]: any }): hall.notify_user_message;

        /**
         * Creates a plain object from a notify_user_message message. Also converts values to other types if specified.
         * @param message notify_user_message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.notify_user_message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_user_message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_team_create_club. */
    interface Irequest_team_create_club {

        /** request_team_create_club userid */
        userid: number;

        /** request_team_create_club password */
        password: string;

        /** request_team_create_club clubname */
        clubname: string;

        /** request_team_create_club join_auth */
        join_auth: boolean;
    }

    /** Represents a request_team_create_club. */
    class request_team_create_club implements Irequest_team_create_club {

        /**
         * Constructs a new request_team_create_club.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_team_create_club);

        /** request_team_create_club userid. */
        public userid: number;

        /** request_team_create_club password. */
        public password: string;

        /** request_team_create_club clubname. */
        public clubname: string;

        /** request_team_create_club join_auth. */
        public join_auth: boolean;

        /**
         * Creates a new request_team_create_club instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_team_create_club instance
         */
        public static create(properties?: hall.Irequest_team_create_club): hall.request_team_create_club;

        /**
         * Encodes the specified request_team_create_club message. Does not implicitly {@link hall.request_team_create_club.verify|verify} messages.
         * @param message request_team_create_club message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_team_create_club, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_team_create_club message, length delimited. Does not implicitly {@link hall.request_team_create_club.verify|verify} messages.
         * @param message request_team_create_club message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_team_create_club, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_team_create_club message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_team_create_club
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_team_create_club;

        /**
         * Decodes a request_team_create_club message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_team_create_club
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_team_create_club;

        /**
         * Verifies a request_team_create_club message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_team_create_club message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_team_create_club
         */
        public static fromObject(object: { [k: string]: any }): hall.request_team_create_club;

        /**
         * Creates a plain object from a request_team_create_club message. Also converts values to other types if specified.
         * @param message request_team_create_club
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_team_create_club, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_team_create_club to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_team_create_club. */
    interface Iresponse_team_create_club {

        /** response_team_create_club result_code */
        result_code: number;

        /** response_team_create_club reason */
        reason?: (string|null);

        /** response_team_create_club club_info */
        club_info?: (hall.Iclub_info_item|null);
    }

    /** Represents a response_team_create_club. */
    class response_team_create_club implements Iresponse_team_create_club {

        /**
         * Constructs a new response_team_create_club.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_team_create_club);

        /** response_team_create_club result_code. */
        public result_code: number;

        /** response_team_create_club reason. */
        public reason: string;

        /** response_team_create_club club_info. */
        public club_info?: (hall.Iclub_info_item|null);

        /**
         * Creates a new response_team_create_club instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_team_create_club instance
         */
        public static create(properties?: hall.Iresponse_team_create_club): hall.response_team_create_club;

        /**
         * Encodes the specified response_team_create_club message. Does not implicitly {@link hall.response_team_create_club.verify|verify} messages.
         * @param message response_team_create_club message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_team_create_club, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_team_create_club message, length delimited. Does not implicitly {@link hall.response_team_create_club.verify|verify} messages.
         * @param message response_team_create_club message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_team_create_club, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_team_create_club message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_team_create_club
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_team_create_club;

        /**
         * Decodes a response_team_create_club message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_team_create_club
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_team_create_club;

        /**
         * Verifies a response_team_create_club message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_team_create_club message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_team_create_club
         */
        public static fromObject(object: { [k: string]: any }): hall.response_team_create_club;

        /**
         * Creates a plain object from a response_team_create_club message. Also converts values to other types if specified.
         * @param message response_team_create_club
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_team_create_club, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_team_create_club to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_team_search_club. */
    interface Irequest_team_search_club {

        /** request_team_search_club userid */
        userid: number;

        /** request_team_search_club password */
        password: string;

        /** request_team_search_club club_invite_code */
        club_invite_code: string;
    }

    /** Represents a request_team_search_club. */
    class request_team_search_club implements Irequest_team_search_club {

        /**
         * Constructs a new request_team_search_club.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_team_search_club);

        /** request_team_search_club userid. */
        public userid: number;

        /** request_team_search_club password. */
        public password: string;

        /** request_team_search_club club_invite_code. */
        public club_invite_code: string;

        /**
         * Creates a new request_team_search_club instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_team_search_club instance
         */
        public static create(properties?: hall.Irequest_team_search_club): hall.request_team_search_club;

        /**
         * Encodes the specified request_team_search_club message. Does not implicitly {@link hall.request_team_search_club.verify|verify} messages.
         * @param message request_team_search_club message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_team_search_club, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_team_search_club message, length delimited. Does not implicitly {@link hall.request_team_search_club.verify|verify} messages.
         * @param message request_team_search_club message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_team_search_club, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_team_search_club message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_team_search_club
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_team_search_club;

        /**
         * Decodes a request_team_search_club message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_team_search_club
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_team_search_club;

        /**
         * Verifies a request_team_search_club message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_team_search_club message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_team_search_club
         */
        public static fromObject(object: { [k: string]: any }): hall.request_team_search_club;

        /**
         * Creates a plain object from a request_team_search_club message. Also converts values to other types if specified.
         * @param message request_team_search_club
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_team_search_club, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_team_search_club to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_team_search_club. */
    interface Iresponse_team_search_club {

        /** response_team_search_club result_code */
        result_code: number;

        /** response_team_search_club reason */
        reason?: (string|null);

        /** response_team_search_club club_info */
        club_info?: (hall.Iclub_info_item|null);
    }

    /** Represents a response_team_search_club. */
    class response_team_search_club implements Iresponse_team_search_club {

        /**
         * Constructs a new response_team_search_club.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_team_search_club);

        /** response_team_search_club result_code. */
        public result_code: number;

        /** response_team_search_club reason. */
        public reason: string;

        /** response_team_search_club club_info. */
        public club_info?: (hall.Iclub_info_item|null);

        /**
         * Creates a new response_team_search_club instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_team_search_club instance
         */
        public static create(properties?: hall.Iresponse_team_search_club): hall.response_team_search_club;

        /**
         * Encodes the specified response_team_search_club message. Does not implicitly {@link hall.response_team_search_club.verify|verify} messages.
         * @param message response_team_search_club message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_team_search_club, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_team_search_club message, length delimited. Does not implicitly {@link hall.response_team_search_club.verify|verify} messages.
         * @param message response_team_search_club message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_team_search_club, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_team_search_club message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_team_search_club
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_team_search_club;

        /**
         * Decodes a response_team_search_club message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_team_search_club
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_team_search_club;

        /**
         * Verifies a response_team_search_club message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_team_search_club message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_team_search_club
         */
        public static fromObject(object: { [k: string]: any }): hall.response_team_search_club;

        /**
         * Creates a plain object from a response_team_search_club message. Also converts values to other types if specified.
         * @param message response_team_search_club
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_team_search_club, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_team_search_club to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_team_join_club. */
    interface Irequest_team_join_club {

        /** request_team_join_club userid */
        userid: number;

        /** request_team_join_club password */
        password: string;

        /** request_team_join_club club_invite_code */
        club_invite_code: string;
    }

    /** Represents a request_team_join_club. */
    class request_team_join_club implements Irequest_team_join_club {

        /**
         * Constructs a new request_team_join_club.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_team_join_club);

        /** request_team_join_club userid. */
        public userid: number;

        /** request_team_join_club password. */
        public password: string;

        /** request_team_join_club club_invite_code. */
        public club_invite_code: string;

        /**
         * Creates a new request_team_join_club instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_team_join_club instance
         */
        public static create(properties?: hall.Irequest_team_join_club): hall.request_team_join_club;

        /**
         * Encodes the specified request_team_join_club message. Does not implicitly {@link hall.request_team_join_club.verify|verify} messages.
         * @param message request_team_join_club message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_team_join_club, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_team_join_club message, length delimited. Does not implicitly {@link hall.request_team_join_club.verify|verify} messages.
         * @param message request_team_join_club message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_team_join_club, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_team_join_club message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_team_join_club
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_team_join_club;

        /**
         * Decodes a request_team_join_club message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_team_join_club
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_team_join_club;

        /**
         * Verifies a request_team_join_club message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_team_join_club message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_team_join_club
         */
        public static fromObject(object: { [k: string]: any }): hall.request_team_join_club;

        /**
         * Creates a plain object from a request_team_join_club message. Also converts values to other types if specified.
         * @param message request_team_join_club
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_team_join_club, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_team_join_club to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_team_join_club. */
    interface Iresponse_team_join_club {

        /** response_team_join_club result_code */
        result_code: number;

        /** response_team_join_club reason */
        reason?: (string|null);

        /** response_team_join_club club_info */
        club_info?: (hall.Iclub_info_item|null);
    }

    /** Represents a response_team_join_club. */
    class response_team_join_club implements Iresponse_team_join_club {

        /**
         * Constructs a new response_team_join_club.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_team_join_club);

        /** response_team_join_club result_code. */
        public result_code: number;

        /** response_team_join_club reason. */
        public reason: string;

        /** response_team_join_club club_info. */
        public club_info?: (hall.Iclub_info_item|null);

        /**
         * Creates a new response_team_join_club instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_team_join_club instance
         */
        public static create(properties?: hall.Iresponse_team_join_club): hall.response_team_join_club;

        /**
         * Encodes the specified response_team_join_club message. Does not implicitly {@link hall.response_team_join_club.verify|verify} messages.
         * @param message response_team_join_club message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_team_join_club, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_team_join_club message, length delimited. Does not implicitly {@link hall.response_team_join_club.verify|verify} messages.
         * @param message response_team_join_club message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_team_join_club, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_team_join_club message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_team_join_club
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_team_join_club;

        /**
         * Decodes a response_team_join_club message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_team_join_club
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_team_join_club;

        /**
         * Verifies a response_team_join_club message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_team_join_club message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_team_join_club
         */
        public static fromObject(object: { [k: string]: any }): hall.response_team_join_club;

        /**
         * Creates a plain object from a response_team_join_club message. Also converts values to other types if specified.
         * @param message response_team_join_club
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_team_join_club, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_team_join_club to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_team_change_club. */
    interface Irequest_team_change_club {

        /** request_team_change_club userid */
        userid: number;

        /** request_team_change_club password */
        password: string;

        /** request_team_change_club clubid */
        clubid: number;
    }

    /** Represents a request_team_change_club. */
    class request_team_change_club implements Irequest_team_change_club {

        /**
         * Constructs a new request_team_change_club.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_team_change_club);

        /** request_team_change_club userid. */
        public userid: number;

        /** request_team_change_club password. */
        public password: string;

        /** request_team_change_club clubid. */
        public clubid: number;

        /**
         * Creates a new request_team_change_club instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_team_change_club instance
         */
        public static create(properties?: hall.Irequest_team_change_club): hall.request_team_change_club;

        /**
         * Encodes the specified request_team_change_club message. Does not implicitly {@link hall.request_team_change_club.verify|verify} messages.
         * @param message request_team_change_club message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_team_change_club, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_team_change_club message, length delimited. Does not implicitly {@link hall.request_team_change_club.verify|verify} messages.
         * @param message request_team_change_club message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_team_change_club, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_team_change_club message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_team_change_club
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_team_change_club;

        /**
         * Decodes a request_team_change_club message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_team_change_club
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_team_change_club;

        /**
         * Verifies a request_team_change_club message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_team_change_club message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_team_change_club
         */
        public static fromObject(object: { [k: string]: any }): hall.request_team_change_club;

        /**
         * Creates a plain object from a request_team_change_club message. Also converts values to other types if specified.
         * @param message request_team_change_club
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_team_change_club, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_team_change_club to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_team_change_club. */
    interface Iresponse_team_change_club {

        /** response_team_change_club result_code */
        result_code: number;

        /** response_team_change_club reason */
        reason?: (string|null);

        /** response_team_change_club clubid */
        clubid?: (number|null);
    }

    /** Represents a response_team_change_club. */
    class response_team_change_club implements Iresponse_team_change_club {

        /**
         * Constructs a new response_team_change_club.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_team_change_club);

        /** response_team_change_club result_code. */
        public result_code: number;

        /** response_team_change_club reason. */
        public reason: string;

        /** response_team_change_club clubid. */
        public clubid: number;

        /**
         * Creates a new response_team_change_club instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_team_change_club instance
         */
        public static create(properties?: hall.Iresponse_team_change_club): hall.response_team_change_club;

        /**
         * Encodes the specified response_team_change_club message. Does not implicitly {@link hall.response_team_change_club.verify|verify} messages.
         * @param message response_team_change_club message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_team_change_club, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_team_change_club message, length delimited. Does not implicitly {@link hall.response_team_change_club.verify|verify} messages.
         * @param message response_team_change_club message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_team_change_club, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_team_change_club message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_team_change_club
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_team_change_club;

        /**
         * Decodes a response_team_change_club message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_team_change_club
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_team_change_club;

        /**
         * Verifies a response_team_change_club message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_team_change_club message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_team_change_club
         */
        public static fromObject(object: { [k: string]: any }): hall.response_team_change_club;

        /**
         * Creates a plain object from a response_team_change_club message. Also converts values to other types if specified.
         * @param message response_team_change_club
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_team_change_club, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_team_change_club to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_team_parent_info. */
    interface Irequest_team_parent_info {

        /** request_team_parent_info userid */
        userid: number;

        /** request_team_parent_info password */
        password: string;

        /** request_team_parent_info clubid */
        clubid: number;
    }

    /** Represents a request_team_parent_info. */
    class request_team_parent_info implements Irequest_team_parent_info {

        /**
         * Constructs a new request_team_parent_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_team_parent_info);

        /** request_team_parent_info userid. */
        public userid: number;

        /** request_team_parent_info password. */
        public password: string;

        /** request_team_parent_info clubid. */
        public clubid: number;

        /**
         * Creates a new request_team_parent_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_team_parent_info instance
         */
        public static create(properties?: hall.Irequest_team_parent_info): hall.request_team_parent_info;

        /**
         * Encodes the specified request_team_parent_info message. Does not implicitly {@link hall.request_team_parent_info.verify|verify} messages.
         * @param message request_team_parent_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_team_parent_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_team_parent_info message, length delimited. Does not implicitly {@link hall.request_team_parent_info.verify|verify} messages.
         * @param message request_team_parent_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_team_parent_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_team_parent_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_team_parent_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_team_parent_info;

        /**
         * Decodes a request_team_parent_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_team_parent_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_team_parent_info;

        /**
         * Verifies a request_team_parent_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_team_parent_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_team_parent_info
         */
        public static fromObject(object: { [k: string]: any }): hall.request_team_parent_info;

        /**
         * Creates a plain object from a request_team_parent_info message. Also converts values to other types if specified.
         * @param message request_team_parent_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_team_parent_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_team_parent_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_team_parent_info. */
    interface Iresponse_team_parent_info {

        /** response_team_parent_info gameid */
        gameid?: (number|null);

        /** response_team_parent_info nickname */
        nickname?: (string|null);

        /** response_team_parent_info head_img_url */
        head_img_url?: (string|null);

        /** response_team_parent_info invited_code */
        invited_code?: (number|null);

        /** response_team_parent_info club_name */
        club_name?: (string|null);

        /** response_team_parent_info notice */
        notice?: (string|null);

        /** response_team_parent_info wx */
        wx?: (string|null);

        /** response_team_parent_info qq */
        qq?: (string|null);
    }

    /** Represents a response_team_parent_info. */
    class response_team_parent_info implements Iresponse_team_parent_info {

        /**
         * Constructs a new response_team_parent_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_team_parent_info);

        /** response_team_parent_info gameid. */
        public gameid: number;

        /** response_team_parent_info nickname. */
        public nickname: string;

        /** response_team_parent_info head_img_url. */
        public head_img_url: string;

        /** response_team_parent_info invited_code. */
        public invited_code: number;

        /** response_team_parent_info club_name. */
        public club_name: string;

        /** response_team_parent_info notice. */
        public notice: string;

        /** response_team_parent_info wx. */
        public wx: string;

        /** response_team_parent_info qq. */
        public qq: string;

        /**
         * Creates a new response_team_parent_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_team_parent_info instance
         */
        public static create(properties?: hall.Iresponse_team_parent_info): hall.response_team_parent_info;

        /**
         * Encodes the specified response_team_parent_info message. Does not implicitly {@link hall.response_team_parent_info.verify|verify} messages.
         * @param message response_team_parent_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_team_parent_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_team_parent_info message, length delimited. Does not implicitly {@link hall.response_team_parent_info.verify|verify} messages.
         * @param message response_team_parent_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_team_parent_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_team_parent_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_team_parent_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_team_parent_info;

        /**
         * Decodes a response_team_parent_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_team_parent_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_team_parent_info;

        /**
         * Verifies a response_team_parent_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_team_parent_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_team_parent_info
         */
        public static fromObject(object: { [k: string]: any }): hall.response_team_parent_info;

        /**
         * Creates a plain object from a response_team_parent_info message. Also converts values to other types if specified.
         * @param message response_team_parent_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_team_parent_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_team_parent_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_team_myinfo. */
    interface Irequest_team_myinfo {

        /** request_team_myinfo userid */
        userid: number;

        /** request_team_myinfo password */
        password: string;

        /** request_team_myinfo clubid */
        clubid: number;
    }

    /** Represents a request_team_myinfo. */
    class request_team_myinfo implements Irequest_team_myinfo {

        /**
         * Constructs a new request_team_myinfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_team_myinfo);

        /** request_team_myinfo userid. */
        public userid: number;

        /** request_team_myinfo password. */
        public password: string;

        /** request_team_myinfo clubid. */
        public clubid: number;

        /**
         * Creates a new request_team_myinfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_team_myinfo instance
         */
        public static create(properties?: hall.Irequest_team_myinfo): hall.request_team_myinfo;

        /**
         * Encodes the specified request_team_myinfo message. Does not implicitly {@link hall.request_team_myinfo.verify|verify} messages.
         * @param message request_team_myinfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_team_myinfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_team_myinfo message, length delimited. Does not implicitly {@link hall.request_team_myinfo.verify|verify} messages.
         * @param message request_team_myinfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_team_myinfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_team_myinfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_team_myinfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_team_myinfo;

        /**
         * Decodes a request_team_myinfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_team_myinfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_team_myinfo;

        /**
         * Verifies a request_team_myinfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_team_myinfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_team_myinfo
         */
        public static fromObject(object: { [k: string]: any }): hall.request_team_myinfo;

        /**
         * Creates a plain object from a request_team_myinfo message. Also converts values to other types if specified.
         * @param message request_team_myinfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_team_myinfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_team_myinfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_team_myinfo. */
    interface Iresponse_team_myinfo {

        /** response_team_myinfo gameid */
        gameid: number;

        /** response_team_myinfo nickname */
        nickname: string;

        /** response_team_myinfo head_img_url */
        head_img_url: string;

        /** response_team_myinfo invited_code */
        invited_code: string;

        /** response_team_myinfo share_ratio */
        share_ratio: number;

        /** response_team_myinfo notice */
        notice: string;

        /** response_team_myinfo wx */
        wx: string;

        /** response_team_myinfo qq */
        qq: string;

        /** response_team_myinfo club_name */
        club_name: string;
    }

    /** Represents a response_team_myinfo. */
    class response_team_myinfo implements Iresponse_team_myinfo {

        /**
         * Constructs a new response_team_myinfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_team_myinfo);

        /** response_team_myinfo gameid. */
        public gameid: number;

        /** response_team_myinfo nickname. */
        public nickname: string;

        /** response_team_myinfo head_img_url. */
        public head_img_url: string;

        /** response_team_myinfo invited_code. */
        public invited_code: string;

        /** response_team_myinfo share_ratio. */
        public share_ratio: number;

        /** response_team_myinfo notice. */
        public notice: string;

        /** response_team_myinfo wx. */
        public wx: string;

        /** response_team_myinfo qq. */
        public qq: string;

        /** response_team_myinfo club_name. */
        public club_name: string;

        /**
         * Creates a new response_team_myinfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_team_myinfo instance
         */
        public static create(properties?: hall.Iresponse_team_myinfo): hall.response_team_myinfo;

        /**
         * Encodes the specified response_team_myinfo message. Does not implicitly {@link hall.response_team_myinfo.verify|verify} messages.
         * @param message response_team_myinfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_team_myinfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_team_myinfo message, length delimited. Does not implicitly {@link hall.response_team_myinfo.verify|verify} messages.
         * @param message response_team_myinfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_team_myinfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_team_myinfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_team_myinfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_team_myinfo;

        /**
         * Decodes a response_team_myinfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_team_myinfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_team_myinfo;

        /**
         * Verifies a response_team_myinfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_team_myinfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_team_myinfo
         */
        public static fromObject(object: { [k: string]: any }): hall.response_team_myinfo;

        /**
         * Creates a plain object from a response_team_myinfo message. Also converts values to other types if specified.
         * @param message response_team_myinfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_team_myinfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_team_myinfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_team_members_info. */
    interface Irequest_team_members_info {

        /** request_team_members_info userid */
        userid: number;

        /** request_team_members_info password */
        password: string;

        /** request_team_members_info clubid */
        clubid: number;
    }

    /** Represents a request_team_members_info. */
    class request_team_members_info implements Irequest_team_members_info {

        /**
         * Constructs a new request_team_members_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_team_members_info);

        /** request_team_members_info userid. */
        public userid: number;

        /** request_team_members_info password. */
        public password: string;

        /** request_team_members_info clubid. */
        public clubid: number;

        /**
         * Creates a new request_team_members_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_team_members_info instance
         */
        public static create(properties?: hall.Irequest_team_members_info): hall.request_team_members_info;

        /**
         * Encodes the specified request_team_members_info message. Does not implicitly {@link hall.request_team_members_info.verify|verify} messages.
         * @param message request_team_members_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_team_members_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_team_members_info message, length delimited. Does not implicitly {@link hall.request_team_members_info.verify|verify} messages.
         * @param message request_team_members_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_team_members_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_team_members_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_team_members_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_team_members_info;

        /**
         * Decodes a request_team_members_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_team_members_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_team_members_info;

        /**
         * Verifies a request_team_members_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_team_members_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_team_members_info
         */
        public static fromObject(object: { [k: string]: any }): hall.request_team_members_info;

        /**
         * Creates a plain object from a request_team_members_info message. Also converts values to other types if specified.
         * @param message request_team_members_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_team_members_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_team_members_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a team_member_item. */
    interface Iteam_member_item {

        /** team_member_item userid */
        userid: number;

        /** team_member_item gameid */
        gameid: number;

        /** team_member_item nickname */
        nickname: string;

        /** team_member_item head_img_url */
        head_img_url: string;

        /** team_member_item parent_gameid */
        parent_gameid: number;

        /** team_member_item last_login_date */
        last_login_date: string;

        /** team_member_item share_ratio */
        share_ratio: number;

        /** team_member_item today_total_performance */
        today_total_performance: (number|Long);

        /** team_member_item yestoday_total_performance */
        yestoday_total_performance: (number|Long);

        /** team_member_item today_new_members_count */
        today_new_members_count: number;

        /** team_member_item yestoday_new_members_count */
        yestoday_new_members_count: number;

        /** team_member_item direct_members_count */
        direct_members_count: number;

        /** team_member_item join_date */
        join_date: string;
    }

    /** Represents a team_member_item. */
    class team_member_item implements Iteam_member_item {

        /**
         * Constructs a new team_member_item.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iteam_member_item);

        /** team_member_item userid. */
        public userid: number;

        /** team_member_item gameid. */
        public gameid: number;

        /** team_member_item nickname. */
        public nickname: string;

        /** team_member_item head_img_url. */
        public head_img_url: string;

        /** team_member_item parent_gameid. */
        public parent_gameid: number;

        /** team_member_item last_login_date. */
        public last_login_date: string;

        /** team_member_item share_ratio. */
        public share_ratio: number;

        /** team_member_item today_total_performance. */
        public today_total_performance: (number|Long);

        /** team_member_item yestoday_total_performance. */
        public yestoday_total_performance: (number|Long);

        /** team_member_item today_new_members_count. */
        public today_new_members_count: number;

        /** team_member_item yestoday_new_members_count. */
        public yestoday_new_members_count: number;

        /** team_member_item direct_members_count. */
        public direct_members_count: number;

        /** team_member_item join_date. */
        public join_date: string;

        /**
         * Creates a new team_member_item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns team_member_item instance
         */
        public static create(properties?: hall.Iteam_member_item): hall.team_member_item;

        /**
         * Encodes the specified team_member_item message. Does not implicitly {@link hall.team_member_item.verify|verify} messages.
         * @param message team_member_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iteam_member_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified team_member_item message, length delimited. Does not implicitly {@link hall.team_member_item.verify|verify} messages.
         * @param message team_member_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iteam_member_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a team_member_item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns team_member_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.team_member_item;

        /**
         * Decodes a team_member_item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns team_member_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.team_member_item;

        /**
         * Verifies a team_member_item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a team_member_item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns team_member_item
         */
        public static fromObject(object: { [k: string]: any }): hall.team_member_item;

        /**
         * Creates a plain object from a team_member_item message. Also converts values to other types if specified.
         * @param message team_member_item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.team_member_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this team_member_item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_team_members_info. */
    interface Iresponse_team_members_info {

        /** response_team_members_info share_ratio */
        share_ratio: number;

        /** response_team_members_info auto_be_partner */
        auto_be_partner: boolean;

        /** response_team_members_info auto_partner_share_ratio */
        auto_partner_share_ratio: number;

        /** response_team_members_info direct_partner_items */
        direct_partner_items?: (hall.Iteam_member_item[]|null);

        /** response_team_members_info direct_member_items */
        direct_member_items?: (hall.Iteam_member_item[]|null);

        /** response_team_members_info member_items */
        member_items?: (hall.Iteam_member_item[]|null);
    }

    /** Represents a response_team_members_info. */
    class response_team_members_info implements Iresponse_team_members_info {

        /**
         * Constructs a new response_team_members_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_team_members_info);

        /** response_team_members_info share_ratio. */
        public share_ratio: number;

        /** response_team_members_info auto_be_partner. */
        public auto_be_partner: boolean;

        /** response_team_members_info auto_partner_share_ratio. */
        public auto_partner_share_ratio: number;

        /** response_team_members_info direct_partner_items. */
        public direct_partner_items: hall.Iteam_member_item[];

        /** response_team_members_info direct_member_items. */
        public direct_member_items: hall.Iteam_member_item[];

        /** response_team_members_info member_items. */
        public member_items: hall.Iteam_member_item[];

        /**
         * Creates a new response_team_members_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_team_members_info instance
         */
        public static create(properties?: hall.Iresponse_team_members_info): hall.response_team_members_info;

        /**
         * Encodes the specified response_team_members_info message. Does not implicitly {@link hall.response_team_members_info.verify|verify} messages.
         * @param message response_team_members_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_team_members_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_team_members_info message, length delimited. Does not implicitly {@link hall.response_team_members_info.verify|verify} messages.
         * @param message response_team_members_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_team_members_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_team_members_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_team_members_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_team_members_info;

        /**
         * Decodes a response_team_members_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_team_members_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_team_members_info;

        /**
         * Verifies a response_team_members_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_team_members_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_team_members_info
         */
        public static fromObject(object: { [k: string]: any }): hall.response_team_members_info;

        /**
         * Creates a plain object from a response_team_members_info message. Also converts values to other types if specified.
         * @param message response_team_members_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_team_members_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_team_members_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_team_report_info. */
    interface Irequest_team_report_info {

        /** request_team_report_info userid */
        userid: number;

        /** request_team_report_info password */
        password: string;

        /** request_team_report_info clubid */
        clubid: number;

        /** request_team_report_info month */
        month: number;
    }

    /** Represents a request_team_report_info. */
    class request_team_report_info implements Irequest_team_report_info {

        /**
         * Constructs a new request_team_report_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_team_report_info);

        /** request_team_report_info userid. */
        public userid: number;

        /** request_team_report_info password. */
        public password: string;

        /** request_team_report_info clubid. */
        public clubid: number;

        /** request_team_report_info month. */
        public month: number;

        /**
         * Creates a new request_team_report_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_team_report_info instance
         */
        public static create(properties?: hall.Irequest_team_report_info): hall.request_team_report_info;

        /**
         * Encodes the specified request_team_report_info message. Does not implicitly {@link hall.request_team_report_info.verify|verify} messages.
         * @param message request_team_report_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_team_report_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_team_report_info message, length delimited. Does not implicitly {@link hall.request_team_report_info.verify|verify} messages.
         * @param message request_team_report_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_team_report_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_team_report_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_team_report_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_team_report_info;

        /**
         * Decodes a request_team_report_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_team_report_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_team_report_info;

        /**
         * Verifies a request_team_report_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_team_report_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_team_report_info
         */
        public static fromObject(object: { [k: string]: any }): hall.request_team_report_info;

        /**
         * Creates a plain object from a request_team_report_info message. Also converts values to other types if specified.
         * @param message request_team_report_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_team_report_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_team_report_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a team_report_item. */
    interface Iteam_report_item {

        /** team_report_item id */
        id: number;

        /** team_report_item create_date */
        create_date: string;

        /** team_report_item performance */
        performance: (number|Long);

        /** team_report_item share_ratio */
        share_ratio: number;

        /** team_report_item commission */
        commission: (number|Long);

        /** team_report_item partner_commission */
        partner_commission: (number|Long);

        /** team_report_item direct_members_performance */
        direct_members_performance: (number|Long);

        /** team_report_item direct_partner_commission */
        direct_partner_commission: (number|Long);
    }

    /** Represents a team_report_item. */
    class team_report_item implements Iteam_report_item {

        /**
         * Constructs a new team_report_item.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iteam_report_item);

        /** team_report_item id. */
        public id: number;

        /** team_report_item create_date. */
        public create_date: string;

        /** team_report_item performance. */
        public performance: (number|Long);

        /** team_report_item share_ratio. */
        public share_ratio: number;

        /** team_report_item commission. */
        public commission: (number|Long);

        /** team_report_item partner_commission. */
        public partner_commission: (number|Long);

        /** team_report_item direct_members_performance. */
        public direct_members_performance: (number|Long);

        /** team_report_item direct_partner_commission. */
        public direct_partner_commission: (number|Long);

        /**
         * Creates a new team_report_item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns team_report_item instance
         */
        public static create(properties?: hall.Iteam_report_item): hall.team_report_item;

        /**
         * Encodes the specified team_report_item message. Does not implicitly {@link hall.team_report_item.verify|verify} messages.
         * @param message team_report_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iteam_report_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified team_report_item message, length delimited. Does not implicitly {@link hall.team_report_item.verify|verify} messages.
         * @param message team_report_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iteam_report_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a team_report_item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns team_report_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.team_report_item;

        /**
         * Decodes a team_report_item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns team_report_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.team_report_item;

        /**
         * Verifies a team_report_item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a team_report_item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns team_report_item
         */
        public static fromObject(object: { [k: string]: any }): hall.team_report_item;

        /**
         * Creates a plain object from a team_report_item message. Also converts values to other types if specified.
         * @param message team_report_item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.team_report_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this team_report_item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_team_report_info. */
    interface Iresponse_team_report_info {

        /** response_team_report_info today_total_performance */
        today_total_performance: (number|Long);

        /** response_team_report_info month_total_performance */
        month_total_performance: (number|Long);

        /** response_team_report_info month_total_commission */
        month_total_commission: (number|Long);

        /** response_team_report_info items */
        items?: (hall.Iteam_report_item[]|null);
    }

    /** Represents a response_team_report_info. */
    class response_team_report_info implements Iresponse_team_report_info {

        /**
         * Constructs a new response_team_report_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_team_report_info);

        /** response_team_report_info today_total_performance. */
        public today_total_performance: (number|Long);

        /** response_team_report_info month_total_performance. */
        public month_total_performance: (number|Long);

        /** response_team_report_info month_total_commission. */
        public month_total_commission: (number|Long);

        /** response_team_report_info items. */
        public items: hall.Iteam_report_item[];

        /**
         * Creates a new response_team_report_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_team_report_info instance
         */
        public static create(properties?: hall.Iresponse_team_report_info): hall.response_team_report_info;

        /**
         * Encodes the specified response_team_report_info message. Does not implicitly {@link hall.response_team_report_info.verify|verify} messages.
         * @param message response_team_report_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_team_report_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_team_report_info message, length delimited. Does not implicitly {@link hall.response_team_report_info.verify|verify} messages.
         * @param message response_team_report_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_team_report_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_team_report_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_team_report_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_team_report_info;

        /**
         * Decodes a response_team_report_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_team_report_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_team_report_info;

        /**
         * Verifies a response_team_report_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_team_report_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_team_report_info
         */
        public static fromObject(object: { [k: string]: any }): hall.response_team_report_info;

        /**
         * Creates a plain object from a response_team_report_info message. Also converts values to other types if specified.
         * @param message response_team_report_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_team_report_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_team_report_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_team_partner_member_info. */
    interface Irequest_team_partner_member_info {

        /** request_team_partner_member_info userid */
        userid: number;

        /** request_team_partner_member_info password */
        password: string;

        /** request_team_partner_member_info clubid */
        clubid: number;

        /** request_team_partner_member_info partner_userid */
        partner_userid: number;
    }

    /** Represents a request_team_partner_member_info. */
    class request_team_partner_member_info implements Irequest_team_partner_member_info {

        /**
         * Constructs a new request_team_partner_member_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_team_partner_member_info);

        /** request_team_partner_member_info userid. */
        public userid: number;

        /** request_team_partner_member_info password. */
        public password: string;

        /** request_team_partner_member_info clubid. */
        public clubid: number;

        /** request_team_partner_member_info partner_userid. */
        public partner_userid: number;

        /**
         * Creates a new request_team_partner_member_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_team_partner_member_info instance
         */
        public static create(properties?: hall.Irequest_team_partner_member_info): hall.request_team_partner_member_info;

        /**
         * Encodes the specified request_team_partner_member_info message. Does not implicitly {@link hall.request_team_partner_member_info.verify|verify} messages.
         * @param message request_team_partner_member_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_team_partner_member_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_team_partner_member_info message, length delimited. Does not implicitly {@link hall.request_team_partner_member_info.verify|verify} messages.
         * @param message request_team_partner_member_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_team_partner_member_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_team_partner_member_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_team_partner_member_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_team_partner_member_info;

        /**
         * Decodes a request_team_partner_member_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_team_partner_member_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_team_partner_member_info;

        /**
         * Verifies a request_team_partner_member_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_team_partner_member_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_team_partner_member_info
         */
        public static fromObject(object: { [k: string]: any }): hall.request_team_partner_member_info;

        /**
         * Creates a plain object from a request_team_partner_member_info message. Also converts values to other types if specified.
         * @param message request_team_partner_member_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_team_partner_member_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_team_partner_member_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a team_partner_member_item. */
    interface Iteam_partner_member_item {

        /** team_partner_member_item gameid */
        gameid: number;

        /** team_partner_member_item nickname */
        nickname: string;

        /** team_partner_member_item head_img_url */
        head_img_url: string;
    }

    /** Represents a team_partner_member_item. */
    class team_partner_member_item implements Iteam_partner_member_item {

        /**
         * Constructs a new team_partner_member_item.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iteam_partner_member_item);

        /** team_partner_member_item gameid. */
        public gameid: number;

        /** team_partner_member_item nickname. */
        public nickname: string;

        /** team_partner_member_item head_img_url. */
        public head_img_url: string;

        /**
         * Creates a new team_partner_member_item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns team_partner_member_item instance
         */
        public static create(properties?: hall.Iteam_partner_member_item): hall.team_partner_member_item;

        /**
         * Encodes the specified team_partner_member_item message. Does not implicitly {@link hall.team_partner_member_item.verify|verify} messages.
         * @param message team_partner_member_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iteam_partner_member_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified team_partner_member_item message, length delimited. Does not implicitly {@link hall.team_partner_member_item.verify|verify} messages.
         * @param message team_partner_member_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iteam_partner_member_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a team_partner_member_item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns team_partner_member_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.team_partner_member_item;

        /**
         * Decodes a team_partner_member_item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns team_partner_member_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.team_partner_member_item;

        /**
         * Verifies a team_partner_member_item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a team_partner_member_item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns team_partner_member_item
         */
        public static fromObject(object: { [k: string]: any }): hall.team_partner_member_item;

        /**
         * Creates a plain object from a team_partner_member_item message. Also converts values to other types if specified.
         * @param message team_partner_member_item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.team_partner_member_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this team_partner_member_item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_team_partner_member_info. */
    interface Iresponse_team_partner_member_info {

        /** response_team_partner_member_info items */
        items?: (hall.Iteam_partner_member_item[]|null);
    }

    /** Represents a response_team_partner_member_info. */
    class response_team_partner_member_info implements Iresponse_team_partner_member_info {

        /**
         * Constructs a new response_team_partner_member_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_team_partner_member_info);

        /** response_team_partner_member_info items. */
        public items: hall.Iteam_partner_member_item[];

        /**
         * Creates a new response_team_partner_member_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_team_partner_member_info instance
         */
        public static create(properties?: hall.Iresponse_team_partner_member_info): hall.response_team_partner_member_info;

        /**
         * Encodes the specified response_team_partner_member_info message. Does not implicitly {@link hall.response_team_partner_member_info.verify|verify} messages.
         * @param message response_team_partner_member_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_team_partner_member_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_team_partner_member_info message, length delimited. Does not implicitly {@link hall.response_team_partner_member_info.verify|verify} messages.
         * @param message response_team_partner_member_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_team_partner_member_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_team_partner_member_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_team_partner_member_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_team_partner_member_info;

        /**
         * Decodes a response_team_partner_member_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_team_partner_member_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_team_partner_member_info;

        /**
         * Verifies a response_team_partner_member_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_team_partner_member_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_team_partner_member_info
         */
        public static fromObject(object: { [k: string]: any }): hall.response_team_partner_member_info;

        /**
         * Creates a plain object from a response_team_partner_member_info message. Also converts values to other types if specified.
         * @param message response_team_partner_member_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_team_partner_member_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_team_partner_member_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_team_report_member_info. */
    interface Irequest_team_report_member_info {

        /** request_team_report_member_info userid */
        userid: number;

        /** request_team_report_member_info password */
        password: string;

        /** request_team_report_member_info clubid */
        clubid: number;

        /** request_team_report_member_info id */
        id: number;
    }

    /** Represents a request_team_report_member_info. */
    class request_team_report_member_info implements Irequest_team_report_member_info {

        /**
         * Constructs a new request_team_report_member_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_team_report_member_info);

        /** request_team_report_member_info userid. */
        public userid: number;

        /** request_team_report_member_info password. */
        public password: string;

        /** request_team_report_member_info clubid. */
        public clubid: number;

        /** request_team_report_member_info id. */
        public id: number;

        /**
         * Creates a new request_team_report_member_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_team_report_member_info instance
         */
        public static create(properties?: hall.Irequest_team_report_member_info): hall.request_team_report_member_info;

        /**
         * Encodes the specified request_team_report_member_info message. Does not implicitly {@link hall.request_team_report_member_info.verify|verify} messages.
         * @param message request_team_report_member_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_team_report_member_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_team_report_member_info message, length delimited. Does not implicitly {@link hall.request_team_report_member_info.verify|verify} messages.
         * @param message request_team_report_member_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_team_report_member_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_team_report_member_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_team_report_member_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_team_report_member_info;

        /**
         * Decodes a request_team_report_member_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_team_report_member_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_team_report_member_info;

        /**
         * Verifies a request_team_report_member_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_team_report_member_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_team_report_member_info
         */
        public static fromObject(object: { [k: string]: any }): hall.request_team_report_member_info;

        /**
         * Creates a plain object from a request_team_report_member_info message. Also converts values to other types if specified.
         * @param message request_team_report_member_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_team_report_member_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_team_report_member_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a team_report_member_item. */
    interface Iteam_report_member_item {

        /** team_report_member_item gameid */
        gameid: number;

        /** team_report_member_item nickname */
        nickname: string;

        /** team_report_member_item partner */
        partner: boolean;

        /** team_report_member_item date */
        date: string;

        /** team_report_member_item performance */
        performance: (number|Long);

        /** team_report_member_item share_ratio */
        share_ratio: number;

        /** team_report_member_item commission */
        commission: (number|Long);
    }

    /** Represents a team_report_member_item. */
    class team_report_member_item implements Iteam_report_member_item {

        /**
         * Constructs a new team_report_member_item.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iteam_report_member_item);

        /** team_report_member_item gameid. */
        public gameid: number;

        /** team_report_member_item nickname. */
        public nickname: string;

        /** team_report_member_item partner. */
        public partner: boolean;

        /** team_report_member_item date. */
        public date: string;

        /** team_report_member_item performance. */
        public performance: (number|Long);

        /** team_report_member_item share_ratio. */
        public share_ratio: number;

        /** team_report_member_item commission. */
        public commission: (number|Long);

        /**
         * Creates a new team_report_member_item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns team_report_member_item instance
         */
        public static create(properties?: hall.Iteam_report_member_item): hall.team_report_member_item;

        /**
         * Encodes the specified team_report_member_item message. Does not implicitly {@link hall.team_report_member_item.verify|verify} messages.
         * @param message team_report_member_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iteam_report_member_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified team_report_member_item message, length delimited. Does not implicitly {@link hall.team_report_member_item.verify|verify} messages.
         * @param message team_report_member_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iteam_report_member_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a team_report_member_item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns team_report_member_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.team_report_member_item;

        /**
         * Decodes a team_report_member_item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns team_report_member_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.team_report_member_item;

        /**
         * Verifies a team_report_member_item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a team_report_member_item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns team_report_member_item
         */
        public static fromObject(object: { [k: string]: any }): hall.team_report_member_item;

        /**
         * Creates a plain object from a team_report_member_item message. Also converts values to other types if specified.
         * @param message team_report_member_item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.team_report_member_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this team_report_member_item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_team_report_member_info. */
    interface Iresponse_team_report_member_info {

        /** response_team_report_member_info items */
        items?: (hall.Iteam_report_member_item[]|null);
    }

    /** Represents a response_team_report_member_info. */
    class response_team_report_member_info implements Iresponse_team_report_member_info {

        /**
         * Constructs a new response_team_report_member_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_team_report_member_info);

        /** response_team_report_member_info items. */
        public items: hall.Iteam_report_member_item[];

        /**
         * Creates a new response_team_report_member_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_team_report_member_info instance
         */
        public static create(properties?: hall.Iresponse_team_report_member_info): hall.response_team_report_member_info;

        /**
         * Encodes the specified response_team_report_member_info message. Does not implicitly {@link hall.response_team_report_member_info.verify|verify} messages.
         * @param message response_team_report_member_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_team_report_member_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_team_report_member_info message, length delimited. Does not implicitly {@link hall.response_team_report_member_info.verify|verify} messages.
         * @param message response_team_report_member_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_team_report_member_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_team_report_member_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_team_report_member_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_team_report_member_info;

        /**
         * Decodes a response_team_report_member_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_team_report_member_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_team_report_member_info;

        /**
         * Verifies a response_team_report_member_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_team_report_member_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_team_report_member_info
         */
        public static fromObject(object: { [k: string]: any }): hall.response_team_report_member_info;

        /**
         * Creates a plain object from a response_team_report_member_info message. Also converts values to other types if specified.
         * @param message response_team_report_member_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_team_report_member_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_team_report_member_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_team_report_partner_info. */
    interface Irequest_team_report_partner_info {

        /** request_team_report_partner_info userid */
        userid: number;

        /** request_team_report_partner_info password */
        password: string;

        /** request_team_report_partner_info clubid */
        clubid: number;

        /** request_team_report_partner_info id */
        id: number;
    }

    /** Represents a request_team_report_partner_info. */
    class request_team_report_partner_info implements Irequest_team_report_partner_info {

        /**
         * Constructs a new request_team_report_partner_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_team_report_partner_info);

        /** request_team_report_partner_info userid. */
        public userid: number;

        /** request_team_report_partner_info password. */
        public password: string;

        /** request_team_report_partner_info clubid. */
        public clubid: number;

        /** request_team_report_partner_info id. */
        public id: number;

        /**
         * Creates a new request_team_report_partner_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_team_report_partner_info instance
         */
        public static create(properties?: hall.Irequest_team_report_partner_info): hall.request_team_report_partner_info;

        /**
         * Encodes the specified request_team_report_partner_info message. Does not implicitly {@link hall.request_team_report_partner_info.verify|verify} messages.
         * @param message request_team_report_partner_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_team_report_partner_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_team_report_partner_info message, length delimited. Does not implicitly {@link hall.request_team_report_partner_info.verify|verify} messages.
         * @param message request_team_report_partner_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_team_report_partner_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_team_report_partner_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_team_report_partner_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_team_report_partner_info;

        /**
         * Decodes a request_team_report_partner_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_team_report_partner_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_team_report_partner_info;

        /**
         * Verifies a request_team_report_partner_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_team_report_partner_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_team_report_partner_info
         */
        public static fromObject(object: { [k: string]: any }): hall.request_team_report_partner_info;

        /**
         * Creates a plain object from a request_team_report_partner_info message. Also converts values to other types if specified.
         * @param message request_team_report_partner_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_team_report_partner_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_team_report_partner_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a team_report_partner_item. */
    interface Iteam_report_partner_item {

        /** team_report_partner_item gameid */
        gameid: number;

        /** team_report_partner_item nickname */
        nickname: string;

        /** team_report_partner_item date */
        date: string;

        /** team_report_partner_item performance */
        performance: (number|Long);

        /** team_report_partner_item share_ratio */
        share_ratio: number;

        /** team_report_partner_item commission */
        commission: (number|Long);
    }

    /** Represents a team_report_partner_item. */
    class team_report_partner_item implements Iteam_report_partner_item {

        /**
         * Constructs a new team_report_partner_item.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iteam_report_partner_item);

        /** team_report_partner_item gameid. */
        public gameid: number;

        /** team_report_partner_item nickname. */
        public nickname: string;

        /** team_report_partner_item date. */
        public date: string;

        /** team_report_partner_item performance. */
        public performance: (number|Long);

        /** team_report_partner_item share_ratio. */
        public share_ratio: number;

        /** team_report_partner_item commission. */
        public commission: (number|Long);

        /**
         * Creates a new team_report_partner_item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns team_report_partner_item instance
         */
        public static create(properties?: hall.Iteam_report_partner_item): hall.team_report_partner_item;

        /**
         * Encodes the specified team_report_partner_item message. Does not implicitly {@link hall.team_report_partner_item.verify|verify} messages.
         * @param message team_report_partner_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iteam_report_partner_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified team_report_partner_item message, length delimited. Does not implicitly {@link hall.team_report_partner_item.verify|verify} messages.
         * @param message team_report_partner_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iteam_report_partner_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a team_report_partner_item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns team_report_partner_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.team_report_partner_item;

        /**
         * Decodes a team_report_partner_item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns team_report_partner_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.team_report_partner_item;

        /**
         * Verifies a team_report_partner_item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a team_report_partner_item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns team_report_partner_item
         */
        public static fromObject(object: { [k: string]: any }): hall.team_report_partner_item;

        /**
         * Creates a plain object from a team_report_partner_item message. Also converts values to other types if specified.
         * @param message team_report_partner_item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.team_report_partner_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this team_report_partner_item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_team_report_partner_info. */
    interface Iresponse_team_report_partner_info {

        /** response_team_report_partner_info items */
        items?: (hall.Iteam_report_partner_item[]|null);
    }

    /** Represents a response_team_report_partner_info. */
    class response_team_report_partner_info implements Iresponse_team_report_partner_info {

        /**
         * Constructs a new response_team_report_partner_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_team_report_partner_info);

        /** response_team_report_partner_info items. */
        public items: hall.Iteam_report_partner_item[];

        /**
         * Creates a new response_team_report_partner_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_team_report_partner_info instance
         */
        public static create(properties?: hall.Iresponse_team_report_partner_info): hall.response_team_report_partner_info;

        /**
         * Encodes the specified response_team_report_partner_info message. Does not implicitly {@link hall.response_team_report_partner_info.verify|verify} messages.
         * @param message response_team_report_partner_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_team_report_partner_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_team_report_partner_info message, length delimited. Does not implicitly {@link hall.response_team_report_partner_info.verify|verify} messages.
         * @param message response_team_report_partner_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_team_report_partner_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_team_report_partner_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_team_report_partner_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_team_report_partner_info;

        /**
         * Decodes a response_team_report_partner_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_team_report_partner_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_team_report_partner_info;

        /**
         * Verifies a response_team_report_partner_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_team_report_partner_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_team_report_partner_info
         */
        public static fromObject(object: { [k: string]: any }): hall.response_team_report_partner_info;

        /**
         * Creates a plain object from a response_team_report_partner_info message. Also converts values to other types if specified.
         * @param message response_team_report_partner_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_team_report_partner_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_team_report_partner_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_team_spread_info. */
    interface Irequest_team_spread_info {

        /** request_team_spread_info userid */
        userid: number;

        /** request_team_spread_info password */
        password: string;

        /** request_team_spread_info clubid */
        clubid: number;
    }

    /** Represents a request_team_spread_info. */
    class request_team_spread_info implements Irequest_team_spread_info {

        /**
         * Constructs a new request_team_spread_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_team_spread_info);

        /** request_team_spread_info userid. */
        public userid: number;

        /** request_team_spread_info password. */
        public password: string;

        /** request_team_spread_info clubid. */
        public clubid: number;

        /**
         * Creates a new request_team_spread_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_team_spread_info instance
         */
        public static create(properties?: hall.Irequest_team_spread_info): hall.request_team_spread_info;

        /**
         * Encodes the specified request_team_spread_info message. Does not implicitly {@link hall.request_team_spread_info.verify|verify} messages.
         * @param message request_team_spread_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_team_spread_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_team_spread_info message, length delimited. Does not implicitly {@link hall.request_team_spread_info.verify|verify} messages.
         * @param message request_team_spread_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_team_spread_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_team_spread_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_team_spread_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_team_spread_info;

        /**
         * Decodes a request_team_spread_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_team_spread_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_team_spread_info;

        /**
         * Verifies a request_team_spread_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_team_spread_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_team_spread_info
         */
        public static fromObject(object: { [k: string]: any }): hall.request_team_spread_info;

        /**
         * Creates a plain object from a request_team_spread_info message. Also converts values to other types if specified.
         * @param message request_team_spread_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_team_spread_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_team_spread_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a team_invited_member_item. */
    interface Iteam_invited_member_item {

        /** team_invited_member_item new_members_count */
        new_members_count: number;

        /** team_invited_member_item new_direct_members_count */
        new_direct_members_count: number;
    }

    /** Represents a team_invited_member_item. */
    class team_invited_member_item implements Iteam_invited_member_item {

        /**
         * Constructs a new team_invited_member_item.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iteam_invited_member_item);

        /** team_invited_member_item new_members_count. */
        public new_members_count: number;

        /** team_invited_member_item new_direct_members_count. */
        public new_direct_members_count: number;

        /**
         * Creates a new team_invited_member_item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns team_invited_member_item instance
         */
        public static create(properties?: hall.Iteam_invited_member_item): hall.team_invited_member_item;

        /**
         * Encodes the specified team_invited_member_item message. Does not implicitly {@link hall.team_invited_member_item.verify|verify} messages.
         * @param message team_invited_member_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iteam_invited_member_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified team_invited_member_item message, length delimited. Does not implicitly {@link hall.team_invited_member_item.verify|verify} messages.
         * @param message team_invited_member_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iteam_invited_member_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a team_invited_member_item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns team_invited_member_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.team_invited_member_item;

        /**
         * Decodes a team_invited_member_item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns team_invited_member_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.team_invited_member_item;

        /**
         * Verifies a team_invited_member_item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a team_invited_member_item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns team_invited_member_item
         */
        public static fromObject(object: { [k: string]: any }): hall.team_invited_member_item;

        /**
         * Creates a plain object from a team_invited_member_item message. Also converts values to other types if specified.
         * @param message team_invited_member_item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.team_invited_member_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this team_invited_member_item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_team_spread_info. */
    interface Iresponse_team_spread_info {

        /** response_team_spread_info invited_code */
        invited_code?: (string|null);

        /** response_team_spread_info new_members_item */
        new_members_item?: (hall.Iteam_invited_member_item[]|null);

        /** response_team_spread_info invite_urls */
        invite_urls?: (string[]|null);
    }

    /** Represents a response_team_spread_info. */
    class response_team_spread_info implements Iresponse_team_spread_info {

        /**
         * Constructs a new response_team_spread_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_team_spread_info);

        /** response_team_spread_info invited_code. */
        public invited_code: string;

        /** response_team_spread_info new_members_item. */
        public new_members_item: hall.Iteam_invited_member_item[];

        /** response_team_spread_info invite_urls. */
        public invite_urls: string[];

        /**
         * Creates a new response_team_spread_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_team_spread_info instance
         */
        public static create(properties?: hall.Iresponse_team_spread_info): hall.response_team_spread_info;

        /**
         * Encodes the specified response_team_spread_info message. Does not implicitly {@link hall.response_team_spread_info.verify|verify} messages.
         * @param message response_team_spread_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_team_spread_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_team_spread_info message, length delimited. Does not implicitly {@link hall.response_team_spread_info.verify|verify} messages.
         * @param message response_team_spread_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_team_spread_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_team_spread_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_team_spread_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_team_spread_info;

        /**
         * Decodes a response_team_spread_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_team_spread_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_team_spread_info;

        /**
         * Verifies a response_team_spread_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_team_spread_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_team_spread_info
         */
        public static fromObject(object: { [k: string]: any }): hall.response_team_spread_info;

        /**
         * Creates a plain object from a response_team_spread_info message. Also converts values to other types if specified.
         * @param message response_team_spread_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_team_spread_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_team_spread_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_team_transfer. */
    interface Irequest_team_transfer {

        /** request_team_transfer userid */
        userid: number;

        /** request_team_transfer password */
        password: string;

        /** request_team_transfer clubid */
        clubid: number;

        /** request_team_transfer dest_userid */
        dest_userid: number;

        /** request_team_transfer transfer_score */
        transfer_score: (number|Long);
    }

    /** Represents a request_team_transfer. */
    class request_team_transfer implements Irequest_team_transfer {

        /**
         * Constructs a new request_team_transfer.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_team_transfer);

        /** request_team_transfer userid. */
        public userid: number;

        /** request_team_transfer password. */
        public password: string;

        /** request_team_transfer clubid. */
        public clubid: number;

        /** request_team_transfer dest_userid. */
        public dest_userid: number;

        /** request_team_transfer transfer_score. */
        public transfer_score: (number|Long);

        /**
         * Creates a new request_team_transfer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_team_transfer instance
         */
        public static create(properties?: hall.Irequest_team_transfer): hall.request_team_transfer;

        /**
         * Encodes the specified request_team_transfer message. Does not implicitly {@link hall.request_team_transfer.verify|verify} messages.
         * @param message request_team_transfer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_team_transfer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_team_transfer message, length delimited. Does not implicitly {@link hall.request_team_transfer.verify|verify} messages.
         * @param message request_team_transfer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_team_transfer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_team_transfer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_team_transfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_team_transfer;

        /**
         * Decodes a request_team_transfer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_team_transfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_team_transfer;

        /**
         * Verifies a request_team_transfer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_team_transfer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_team_transfer
         */
        public static fromObject(object: { [k: string]: any }): hall.request_team_transfer;

        /**
         * Creates a plain object from a request_team_transfer message. Also converts values to other types if specified.
         * @param message request_team_transfer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_team_transfer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_team_transfer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_team_transfer. */
    interface Iresponse_team_transfer {

        /** response_team_transfer result_code */
        result_code: number;

        /** response_team_transfer reason */
        reason?: (string|null);
    }

    /** Represents a response_team_transfer. */
    class response_team_transfer implements Iresponse_team_transfer {

        /**
         * Constructs a new response_team_transfer.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_team_transfer);

        /** response_team_transfer result_code. */
        public result_code: number;

        /** response_team_transfer reason. */
        public reason: string;

        /**
         * Creates a new response_team_transfer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_team_transfer instance
         */
        public static create(properties?: hall.Iresponse_team_transfer): hall.response_team_transfer;

        /**
         * Encodes the specified response_team_transfer message. Does not implicitly {@link hall.response_team_transfer.verify|verify} messages.
         * @param message response_team_transfer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_team_transfer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_team_transfer message, length delimited. Does not implicitly {@link hall.response_team_transfer.verify|verify} messages.
         * @param message response_team_transfer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_team_transfer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_team_transfer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_team_transfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_team_transfer;

        /**
         * Decodes a response_team_transfer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_team_transfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_team_transfer;

        /**
         * Verifies a response_team_transfer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_team_transfer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_team_transfer
         */
        public static fromObject(object: { [k: string]: any }): hall.response_team_transfer;

        /**
         * Creates a plain object from a response_team_transfer message. Also converts values to other types if specified.
         * @param message response_team_transfer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_team_transfer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_team_transfer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_team_edit_notice. */
    interface Irequest_team_edit_notice {

        /** request_team_edit_notice userid */
        userid: number;

        /** request_team_edit_notice password */
        password: string;

        /** request_team_edit_notice clubid */
        clubid: number;

        /** request_team_edit_notice notice */
        notice: string;
    }

    /** Represents a request_team_edit_notice. */
    class request_team_edit_notice implements Irequest_team_edit_notice {

        /**
         * Constructs a new request_team_edit_notice.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_team_edit_notice);

        /** request_team_edit_notice userid. */
        public userid: number;

        /** request_team_edit_notice password. */
        public password: string;

        /** request_team_edit_notice clubid. */
        public clubid: number;

        /** request_team_edit_notice notice. */
        public notice: string;

        /**
         * Creates a new request_team_edit_notice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_team_edit_notice instance
         */
        public static create(properties?: hall.Irequest_team_edit_notice): hall.request_team_edit_notice;

        /**
         * Encodes the specified request_team_edit_notice message. Does not implicitly {@link hall.request_team_edit_notice.verify|verify} messages.
         * @param message request_team_edit_notice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_team_edit_notice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_team_edit_notice message, length delimited. Does not implicitly {@link hall.request_team_edit_notice.verify|verify} messages.
         * @param message request_team_edit_notice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_team_edit_notice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_team_edit_notice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_team_edit_notice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_team_edit_notice;

        /**
         * Decodes a request_team_edit_notice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_team_edit_notice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_team_edit_notice;

        /**
         * Verifies a request_team_edit_notice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_team_edit_notice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_team_edit_notice
         */
        public static fromObject(object: { [k: string]: any }): hall.request_team_edit_notice;

        /**
         * Creates a plain object from a request_team_edit_notice message. Also converts values to other types if specified.
         * @param message request_team_edit_notice
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_team_edit_notice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_team_edit_notice to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_team_edit_notice. */
    interface Iresponse_team_edit_notice {

        /** response_team_edit_notice result_code */
        result_code: number;

        /** response_team_edit_notice reason */
        reason: string;
    }

    /** Represents a response_team_edit_notice. */
    class response_team_edit_notice implements Iresponse_team_edit_notice {

        /**
         * Constructs a new response_team_edit_notice.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_team_edit_notice);

        /** response_team_edit_notice result_code. */
        public result_code: number;

        /** response_team_edit_notice reason. */
        public reason: string;

        /**
         * Creates a new response_team_edit_notice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_team_edit_notice instance
         */
        public static create(properties?: hall.Iresponse_team_edit_notice): hall.response_team_edit_notice;

        /**
         * Encodes the specified response_team_edit_notice message. Does not implicitly {@link hall.response_team_edit_notice.verify|verify} messages.
         * @param message response_team_edit_notice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_team_edit_notice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_team_edit_notice message, length delimited. Does not implicitly {@link hall.response_team_edit_notice.verify|verify} messages.
         * @param message response_team_edit_notice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_team_edit_notice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_team_edit_notice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_team_edit_notice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_team_edit_notice;

        /**
         * Decodes a response_team_edit_notice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_team_edit_notice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_team_edit_notice;

        /**
         * Verifies a response_team_edit_notice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_team_edit_notice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_team_edit_notice
         */
        public static fromObject(object: { [k: string]: any }): hall.response_team_edit_notice;

        /**
         * Creates a plain object from a response_team_edit_notice message. Also converts values to other types if specified.
         * @param message response_team_edit_notice
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_team_edit_notice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_team_edit_notice to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_team_edit_card. */
    interface Irequest_team_edit_card {

        /** request_team_edit_card userid */
        userid: number;

        /** request_team_edit_card password */
        password: string;

        /** request_team_edit_card clubid */
        clubid: number;

        /** request_team_edit_card wx */
        wx: string;

        /** request_team_edit_card qq */
        qq: string;
    }

    /** Represents a request_team_edit_card. */
    class request_team_edit_card implements Irequest_team_edit_card {

        /**
         * Constructs a new request_team_edit_card.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_team_edit_card);

        /** request_team_edit_card userid. */
        public userid: number;

        /** request_team_edit_card password. */
        public password: string;

        /** request_team_edit_card clubid. */
        public clubid: number;

        /** request_team_edit_card wx. */
        public wx: string;

        /** request_team_edit_card qq. */
        public qq: string;

        /**
         * Creates a new request_team_edit_card instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_team_edit_card instance
         */
        public static create(properties?: hall.Irequest_team_edit_card): hall.request_team_edit_card;

        /**
         * Encodes the specified request_team_edit_card message. Does not implicitly {@link hall.request_team_edit_card.verify|verify} messages.
         * @param message request_team_edit_card message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_team_edit_card, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_team_edit_card message, length delimited. Does not implicitly {@link hall.request_team_edit_card.verify|verify} messages.
         * @param message request_team_edit_card message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_team_edit_card, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_team_edit_card message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_team_edit_card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_team_edit_card;

        /**
         * Decodes a request_team_edit_card message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_team_edit_card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_team_edit_card;

        /**
         * Verifies a request_team_edit_card message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_team_edit_card message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_team_edit_card
         */
        public static fromObject(object: { [k: string]: any }): hall.request_team_edit_card;

        /**
         * Creates a plain object from a request_team_edit_card message. Also converts values to other types if specified.
         * @param message request_team_edit_card
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_team_edit_card, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_team_edit_card to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_team_edit_card. */
    interface Iresponse_team_edit_card {

        /** response_team_edit_card result_code */
        result_code: number;

        /** response_team_edit_card reason */
        reason: string;
    }

    /** Represents a response_team_edit_card. */
    class response_team_edit_card implements Iresponse_team_edit_card {

        /**
         * Constructs a new response_team_edit_card.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_team_edit_card);

        /** response_team_edit_card result_code. */
        public result_code: number;

        /** response_team_edit_card reason. */
        public reason: string;

        /**
         * Creates a new response_team_edit_card instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_team_edit_card instance
         */
        public static create(properties?: hall.Iresponse_team_edit_card): hall.response_team_edit_card;

        /**
         * Encodes the specified response_team_edit_card message. Does not implicitly {@link hall.response_team_edit_card.verify|verify} messages.
         * @param message response_team_edit_card message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_team_edit_card, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_team_edit_card message, length delimited. Does not implicitly {@link hall.response_team_edit_card.verify|verify} messages.
         * @param message response_team_edit_card message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_team_edit_card, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_team_edit_card message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_team_edit_card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_team_edit_card;

        /**
         * Decodes a response_team_edit_card message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_team_edit_card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_team_edit_card;

        /**
         * Verifies a response_team_edit_card message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_team_edit_card message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_team_edit_card
         */
        public static fromObject(object: { [k: string]: any }): hall.response_team_edit_card;

        /**
         * Creates a plain object from a response_team_edit_card message. Also converts values to other types if specified.
         * @param message response_team_edit_card
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_team_edit_card, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_team_edit_card to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_team_log_transfer. */
    interface Irequest_team_log_transfer {

        /** request_team_log_transfer userid */
        userid: number;

        /** request_team_log_transfer password */
        password: string;

        /** request_team_log_transfer clubid */
        clubid: number;
    }

    /** Represents a request_team_log_transfer. */
    class request_team_log_transfer implements Irequest_team_log_transfer {

        /**
         * Constructs a new request_team_log_transfer.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_team_log_transfer);

        /** request_team_log_transfer userid. */
        public userid: number;

        /** request_team_log_transfer password. */
        public password: string;

        /** request_team_log_transfer clubid. */
        public clubid: number;

        /**
         * Creates a new request_team_log_transfer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_team_log_transfer instance
         */
        public static create(properties?: hall.Irequest_team_log_transfer): hall.request_team_log_transfer;

        /**
         * Encodes the specified request_team_log_transfer message. Does not implicitly {@link hall.request_team_log_transfer.verify|verify} messages.
         * @param message request_team_log_transfer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_team_log_transfer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_team_log_transfer message, length delimited. Does not implicitly {@link hall.request_team_log_transfer.verify|verify} messages.
         * @param message request_team_log_transfer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_team_log_transfer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_team_log_transfer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_team_log_transfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_team_log_transfer;

        /**
         * Decodes a request_team_log_transfer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_team_log_transfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_team_log_transfer;

        /**
         * Verifies a request_team_log_transfer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_team_log_transfer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_team_log_transfer
         */
        public static fromObject(object: { [k: string]: any }): hall.request_team_log_transfer;

        /**
         * Creates a plain object from a request_team_log_transfer message. Also converts values to other types if specified.
         * @param message request_team_log_transfer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_team_log_transfer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_team_log_transfer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a team_log_transfer_item. */
    interface Iteam_log_transfer_item {

        /** team_log_transfer_item id */
        id: number;

        /** team_log_transfer_item insert_date */
        insert_date: string;

        /** team_log_transfer_item nickname */
        nickname: string;

        /** team_log_transfer_item gameid */
        gameid: number;

        /** team_log_transfer_item transfer_score */
        transfer_score: (number|Long);

        /** team_log_transfer_item state */
        state: (number|Long);

        /** team_log_transfer_item expired_seconds */
        expired_seconds?: (number|null);
    }

    /** Represents a team_log_transfer_item. */
    class team_log_transfer_item implements Iteam_log_transfer_item {

        /**
         * Constructs a new team_log_transfer_item.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iteam_log_transfer_item);

        /** team_log_transfer_item id. */
        public id: number;

        /** team_log_transfer_item insert_date. */
        public insert_date: string;

        /** team_log_transfer_item nickname. */
        public nickname: string;

        /** team_log_transfer_item gameid. */
        public gameid: number;

        /** team_log_transfer_item transfer_score. */
        public transfer_score: (number|Long);

        /** team_log_transfer_item state. */
        public state: (number|Long);

        /** team_log_transfer_item expired_seconds. */
        public expired_seconds: number;

        /**
         * Creates a new team_log_transfer_item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns team_log_transfer_item instance
         */
        public static create(properties?: hall.Iteam_log_transfer_item): hall.team_log_transfer_item;

        /**
         * Encodes the specified team_log_transfer_item message. Does not implicitly {@link hall.team_log_transfer_item.verify|verify} messages.
         * @param message team_log_transfer_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iteam_log_transfer_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified team_log_transfer_item message, length delimited. Does not implicitly {@link hall.team_log_transfer_item.verify|verify} messages.
         * @param message team_log_transfer_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iteam_log_transfer_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a team_log_transfer_item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns team_log_transfer_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.team_log_transfer_item;

        /**
         * Decodes a team_log_transfer_item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns team_log_transfer_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.team_log_transfer_item;

        /**
         * Verifies a team_log_transfer_item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a team_log_transfer_item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns team_log_transfer_item
         */
        public static fromObject(object: { [k: string]: any }): hall.team_log_transfer_item;

        /**
         * Creates a plain object from a team_log_transfer_item message. Also converts values to other types if specified.
         * @param message team_log_transfer_item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.team_log_transfer_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this team_log_transfer_item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_team_log_transfer. */
    interface Iresponse_team_log_transfer {

        /** response_team_log_transfer items */
        items?: (hall.Iteam_log_transfer_item[]|null);
    }

    /** Represents a response_team_log_transfer. */
    class response_team_log_transfer implements Iresponse_team_log_transfer {

        /**
         * Constructs a new response_team_log_transfer.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_team_log_transfer);

        /** response_team_log_transfer items. */
        public items: hall.Iteam_log_transfer_item[];

        /**
         * Creates a new response_team_log_transfer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_team_log_transfer instance
         */
        public static create(properties?: hall.Iresponse_team_log_transfer): hall.response_team_log_transfer;

        /**
         * Encodes the specified response_team_log_transfer message. Does not implicitly {@link hall.response_team_log_transfer.verify|verify} messages.
         * @param message response_team_log_transfer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_team_log_transfer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_team_log_transfer message, length delimited. Does not implicitly {@link hall.response_team_log_transfer.verify|verify} messages.
         * @param message response_team_log_transfer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_team_log_transfer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_team_log_transfer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_team_log_transfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_team_log_transfer;

        /**
         * Decodes a response_team_log_transfer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_team_log_transfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_team_log_transfer;

        /**
         * Verifies a response_team_log_transfer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_team_log_transfer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_team_log_transfer
         */
        public static fromObject(object: { [k: string]: any }): hall.response_team_log_transfer;

        /**
         * Creates a plain object from a response_team_log_transfer message. Also converts values to other types if specified.
         * @param message response_team_log_transfer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_team_log_transfer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_team_log_transfer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_team_transfer_cancel. */
    interface Irequest_team_transfer_cancel {

        /** request_team_transfer_cancel userid */
        userid: number;

        /** request_team_transfer_cancel password */
        password: string;

        /** request_team_transfer_cancel clubid */
        clubid: number;

        /** request_team_transfer_cancel id */
        id: number;
    }

    /** Represents a request_team_transfer_cancel. */
    class request_team_transfer_cancel implements Irequest_team_transfer_cancel {

        /**
         * Constructs a new request_team_transfer_cancel.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_team_transfer_cancel);

        /** request_team_transfer_cancel userid. */
        public userid: number;

        /** request_team_transfer_cancel password. */
        public password: string;

        /** request_team_transfer_cancel clubid. */
        public clubid: number;

        /** request_team_transfer_cancel id. */
        public id: number;

        /**
         * Creates a new request_team_transfer_cancel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_team_transfer_cancel instance
         */
        public static create(properties?: hall.Irequest_team_transfer_cancel): hall.request_team_transfer_cancel;

        /**
         * Encodes the specified request_team_transfer_cancel message. Does not implicitly {@link hall.request_team_transfer_cancel.verify|verify} messages.
         * @param message request_team_transfer_cancel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_team_transfer_cancel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_team_transfer_cancel message, length delimited. Does not implicitly {@link hall.request_team_transfer_cancel.verify|verify} messages.
         * @param message request_team_transfer_cancel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_team_transfer_cancel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_team_transfer_cancel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_team_transfer_cancel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_team_transfer_cancel;

        /**
         * Decodes a request_team_transfer_cancel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_team_transfer_cancel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_team_transfer_cancel;

        /**
         * Verifies a request_team_transfer_cancel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_team_transfer_cancel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_team_transfer_cancel
         */
        public static fromObject(object: { [k: string]: any }): hall.request_team_transfer_cancel;

        /**
         * Creates a plain object from a request_team_transfer_cancel message. Also converts values to other types if specified.
         * @param message request_team_transfer_cancel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_team_transfer_cancel, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_team_transfer_cancel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_team_transfer_cancel. */
    interface Iresponse_team_transfer_cancel {

        /** response_team_transfer_cancel result_code */
        result_code: number;

        /** response_team_transfer_cancel reason */
        reason: string;

        /** response_team_transfer_cancel id */
        id?: (number|null);
    }

    /** Represents a response_team_transfer_cancel. */
    class response_team_transfer_cancel implements Iresponse_team_transfer_cancel {

        /**
         * Constructs a new response_team_transfer_cancel.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_team_transfer_cancel);

        /** response_team_transfer_cancel result_code. */
        public result_code: number;

        /** response_team_transfer_cancel reason. */
        public reason: string;

        /** response_team_transfer_cancel id. */
        public id: number;

        /**
         * Creates a new response_team_transfer_cancel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_team_transfer_cancel instance
         */
        public static create(properties?: hall.Iresponse_team_transfer_cancel): hall.response_team_transfer_cancel;

        /**
         * Encodes the specified response_team_transfer_cancel message. Does not implicitly {@link hall.response_team_transfer_cancel.verify|verify} messages.
         * @param message response_team_transfer_cancel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_team_transfer_cancel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_team_transfer_cancel message, length delimited. Does not implicitly {@link hall.response_team_transfer_cancel.verify|verify} messages.
         * @param message response_team_transfer_cancel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_team_transfer_cancel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_team_transfer_cancel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_team_transfer_cancel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_team_transfer_cancel;

        /**
         * Decodes a response_team_transfer_cancel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_team_transfer_cancel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_team_transfer_cancel;

        /**
         * Verifies a response_team_transfer_cancel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_team_transfer_cancel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_team_transfer_cancel
         */
        public static fromObject(object: { [k: string]: any }): hall.response_team_transfer_cancel;

        /**
         * Creates a plain object from a response_team_transfer_cancel message. Also converts values to other types if specified.
         * @param message response_team_transfer_cancel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_team_transfer_cancel, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_team_transfer_cancel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_team_auto_be_partner. */
    interface Irequest_team_auto_be_partner {

        /** request_team_auto_be_partner userid */
        userid: number;

        /** request_team_auto_be_partner password */
        password: string;

        /** request_team_auto_be_partner clubid */
        clubid: number;

        /** request_team_auto_be_partner auto_be_partner */
        auto_be_partner: boolean;

        /** request_team_auto_be_partner auto_partner_share_ratio */
        auto_partner_share_ratio: number;
    }

    /** Represents a request_team_auto_be_partner. */
    class request_team_auto_be_partner implements Irequest_team_auto_be_partner {

        /**
         * Constructs a new request_team_auto_be_partner.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_team_auto_be_partner);

        /** request_team_auto_be_partner userid. */
        public userid: number;

        /** request_team_auto_be_partner password. */
        public password: string;

        /** request_team_auto_be_partner clubid. */
        public clubid: number;

        /** request_team_auto_be_partner auto_be_partner. */
        public auto_be_partner: boolean;

        /** request_team_auto_be_partner auto_partner_share_ratio. */
        public auto_partner_share_ratio: number;

        /**
         * Creates a new request_team_auto_be_partner instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_team_auto_be_partner instance
         */
        public static create(properties?: hall.Irequest_team_auto_be_partner): hall.request_team_auto_be_partner;

        /**
         * Encodes the specified request_team_auto_be_partner message. Does not implicitly {@link hall.request_team_auto_be_partner.verify|verify} messages.
         * @param message request_team_auto_be_partner message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_team_auto_be_partner, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_team_auto_be_partner message, length delimited. Does not implicitly {@link hall.request_team_auto_be_partner.verify|verify} messages.
         * @param message request_team_auto_be_partner message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_team_auto_be_partner, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_team_auto_be_partner message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_team_auto_be_partner
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_team_auto_be_partner;

        /**
         * Decodes a request_team_auto_be_partner message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_team_auto_be_partner
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_team_auto_be_partner;

        /**
         * Verifies a request_team_auto_be_partner message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_team_auto_be_partner message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_team_auto_be_partner
         */
        public static fromObject(object: { [k: string]: any }): hall.request_team_auto_be_partner;

        /**
         * Creates a plain object from a request_team_auto_be_partner message. Also converts values to other types if specified.
         * @param message request_team_auto_be_partner
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_team_auto_be_partner, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_team_auto_be_partner to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_team_auto_be_partner. */
    interface Iresponse_team_auto_be_partner {

        /** response_team_auto_be_partner result_code */
        result_code: number;

        /** response_team_auto_be_partner reason */
        reason: string;
    }

    /** Represents a response_team_auto_be_partner. */
    class response_team_auto_be_partner implements Iresponse_team_auto_be_partner {

        /**
         * Constructs a new response_team_auto_be_partner.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_team_auto_be_partner);

        /** response_team_auto_be_partner result_code. */
        public result_code: number;

        /** response_team_auto_be_partner reason. */
        public reason: string;

        /**
         * Creates a new response_team_auto_be_partner instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_team_auto_be_partner instance
         */
        public static create(properties?: hall.Iresponse_team_auto_be_partner): hall.response_team_auto_be_partner;

        /**
         * Encodes the specified response_team_auto_be_partner message. Does not implicitly {@link hall.response_team_auto_be_partner.verify|verify} messages.
         * @param message response_team_auto_be_partner message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_team_auto_be_partner, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_team_auto_be_partner message, length delimited. Does not implicitly {@link hall.response_team_auto_be_partner.verify|verify} messages.
         * @param message response_team_auto_be_partner message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_team_auto_be_partner, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_team_auto_be_partner message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_team_auto_be_partner
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_team_auto_be_partner;

        /**
         * Decodes a response_team_auto_be_partner message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_team_auto_be_partner
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_team_auto_be_partner;

        /**
         * Verifies a response_team_auto_be_partner message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_team_auto_be_partner message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_team_auto_be_partner
         */
        public static fromObject(object: { [k: string]: any }): hall.response_team_auto_be_partner;

        /**
         * Creates a plain object from a response_team_auto_be_partner message. Also converts values to other types if specified.
         * @param message response_team_auto_be_partner
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_team_auto_be_partner, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_team_auto_be_partner to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_team_be_partner. */
    interface Irequest_team_be_partner {

        /** request_team_be_partner userid */
        userid: number;

        /** request_team_be_partner password */
        password: string;

        /** request_team_be_partner clubid */
        clubid: number;

        /** request_team_be_partner dest_userid */
        dest_userid: number;

        /** request_team_be_partner share_ratio */
        share_ratio: number;
    }

    /** Represents a request_team_be_partner. */
    class request_team_be_partner implements Irequest_team_be_partner {

        /**
         * Constructs a new request_team_be_partner.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_team_be_partner);

        /** request_team_be_partner userid. */
        public userid: number;

        /** request_team_be_partner password. */
        public password: string;

        /** request_team_be_partner clubid. */
        public clubid: number;

        /** request_team_be_partner dest_userid. */
        public dest_userid: number;

        /** request_team_be_partner share_ratio. */
        public share_ratio: number;

        /**
         * Creates a new request_team_be_partner instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_team_be_partner instance
         */
        public static create(properties?: hall.Irequest_team_be_partner): hall.request_team_be_partner;

        /**
         * Encodes the specified request_team_be_partner message. Does not implicitly {@link hall.request_team_be_partner.verify|verify} messages.
         * @param message request_team_be_partner message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_team_be_partner, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_team_be_partner message, length delimited. Does not implicitly {@link hall.request_team_be_partner.verify|verify} messages.
         * @param message request_team_be_partner message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_team_be_partner, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_team_be_partner message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_team_be_partner
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_team_be_partner;

        /**
         * Decodes a request_team_be_partner message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_team_be_partner
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_team_be_partner;

        /**
         * Verifies a request_team_be_partner message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_team_be_partner message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_team_be_partner
         */
        public static fromObject(object: { [k: string]: any }): hall.request_team_be_partner;

        /**
         * Creates a plain object from a request_team_be_partner message. Also converts values to other types if specified.
         * @param message request_team_be_partner
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_team_be_partner, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_team_be_partner to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_team_be_partner. */
    interface Iresponse_team_be_partner {

        /** response_team_be_partner result_code */
        result_code: number;

        /** response_team_be_partner reason */
        reason: string;
    }

    /** Represents a response_team_be_partner. */
    class response_team_be_partner implements Iresponse_team_be_partner {

        /**
         * Constructs a new response_team_be_partner.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_team_be_partner);

        /** response_team_be_partner result_code. */
        public result_code: number;

        /** response_team_be_partner reason. */
        public reason: string;

        /**
         * Creates a new response_team_be_partner instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_team_be_partner instance
         */
        public static create(properties?: hall.Iresponse_team_be_partner): hall.response_team_be_partner;

        /**
         * Encodes the specified response_team_be_partner message. Does not implicitly {@link hall.response_team_be_partner.verify|verify} messages.
         * @param message response_team_be_partner message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_team_be_partner, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_team_be_partner message, length delimited. Does not implicitly {@link hall.response_team_be_partner.verify|verify} messages.
         * @param message response_team_be_partner message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_team_be_partner, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_team_be_partner message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_team_be_partner
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_team_be_partner;

        /**
         * Decodes a response_team_be_partner message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_team_be_partner
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_team_be_partner;

        /**
         * Verifies a response_team_be_partner message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_team_be_partner message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_team_be_partner
         */
        public static fromObject(object: { [k: string]: any }): hall.response_team_be_partner;

        /**
         * Creates a plain object from a response_team_be_partner message. Also converts values to other types if specified.
         * @param message response_team_be_partner
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_team_be_partner, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_team_be_partner to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_team_set_partner_share_ratio. */
    interface Irequest_team_set_partner_share_ratio {

        /** request_team_set_partner_share_ratio userid */
        userid: number;

        /** request_team_set_partner_share_ratio password */
        password: string;

        /** request_team_set_partner_share_ratio clubid */
        clubid: number;

        /** request_team_set_partner_share_ratio partner_userid */
        partner_userid: number;

        /** request_team_set_partner_share_ratio share_ratio */
        share_ratio: number;
    }

    /** Represents a request_team_set_partner_share_ratio. */
    class request_team_set_partner_share_ratio implements Irequest_team_set_partner_share_ratio {

        /**
         * Constructs a new request_team_set_partner_share_ratio.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_team_set_partner_share_ratio);

        /** request_team_set_partner_share_ratio userid. */
        public userid: number;

        /** request_team_set_partner_share_ratio password. */
        public password: string;

        /** request_team_set_partner_share_ratio clubid. */
        public clubid: number;

        /** request_team_set_partner_share_ratio partner_userid. */
        public partner_userid: number;

        /** request_team_set_partner_share_ratio share_ratio. */
        public share_ratio: number;

        /**
         * Creates a new request_team_set_partner_share_ratio instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_team_set_partner_share_ratio instance
         */
        public static create(properties?: hall.Irequest_team_set_partner_share_ratio): hall.request_team_set_partner_share_ratio;

        /**
         * Encodes the specified request_team_set_partner_share_ratio message. Does not implicitly {@link hall.request_team_set_partner_share_ratio.verify|verify} messages.
         * @param message request_team_set_partner_share_ratio message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_team_set_partner_share_ratio, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_team_set_partner_share_ratio message, length delimited. Does not implicitly {@link hall.request_team_set_partner_share_ratio.verify|verify} messages.
         * @param message request_team_set_partner_share_ratio message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_team_set_partner_share_ratio, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_team_set_partner_share_ratio message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_team_set_partner_share_ratio
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_team_set_partner_share_ratio;

        /**
         * Decodes a request_team_set_partner_share_ratio message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_team_set_partner_share_ratio
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_team_set_partner_share_ratio;

        /**
         * Verifies a request_team_set_partner_share_ratio message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_team_set_partner_share_ratio message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_team_set_partner_share_ratio
         */
        public static fromObject(object: { [k: string]: any }): hall.request_team_set_partner_share_ratio;

        /**
         * Creates a plain object from a request_team_set_partner_share_ratio message. Also converts values to other types if specified.
         * @param message request_team_set_partner_share_ratio
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_team_set_partner_share_ratio, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_team_set_partner_share_ratio to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_team_set_partner_share_ratio. */
    interface Iresponse_team_set_partner_share_ratio {

        /** response_team_set_partner_share_ratio result_code */
        result_code: number;

        /** response_team_set_partner_share_ratio reason */
        reason: string;
    }

    /** Represents a response_team_set_partner_share_ratio. */
    class response_team_set_partner_share_ratio implements Iresponse_team_set_partner_share_ratio {

        /**
         * Constructs a new response_team_set_partner_share_ratio.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_team_set_partner_share_ratio);

        /** response_team_set_partner_share_ratio result_code. */
        public result_code: number;

        /** response_team_set_partner_share_ratio reason. */
        public reason: string;

        /**
         * Creates a new response_team_set_partner_share_ratio instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_team_set_partner_share_ratio instance
         */
        public static create(properties?: hall.Iresponse_team_set_partner_share_ratio): hall.response_team_set_partner_share_ratio;

        /**
         * Encodes the specified response_team_set_partner_share_ratio message. Does not implicitly {@link hall.response_team_set_partner_share_ratio.verify|verify} messages.
         * @param message response_team_set_partner_share_ratio message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_team_set_partner_share_ratio, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_team_set_partner_share_ratio message, length delimited. Does not implicitly {@link hall.response_team_set_partner_share_ratio.verify|verify} messages.
         * @param message response_team_set_partner_share_ratio message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_team_set_partner_share_ratio, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_team_set_partner_share_ratio message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_team_set_partner_share_ratio
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_team_set_partner_share_ratio;

        /**
         * Decodes a response_team_set_partner_share_ratio message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_team_set_partner_share_ratio
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_team_set_partner_share_ratio;

        /**
         * Verifies a response_team_set_partner_share_ratio message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_team_set_partner_share_ratio message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_team_set_partner_share_ratio
         */
        public static fromObject(object: { [k: string]: any }): hall.response_team_set_partner_share_ratio;

        /**
         * Creates a plain object from a response_team_set_partner_share_ratio message. Also converts values to other types if specified.
         * @param message response_team_set_partner_share_ratio
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_team_set_partner_share_ratio, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_team_set_partner_share_ratio to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_team_game_records. */
    interface Irequest_team_game_records {

        /** request_team_game_records userid */
        userid: number;

        /** request_team_game_records password */
        password: string;

        /** request_team_game_records clubid */
        clubid: number;

        /** request_team_game_records type */
        type: number;

        /** request_team_game_records day */
        day: number;
    }

    /** Represents a request_team_game_records. */
    class request_team_game_records implements Irequest_team_game_records {

        /**
         * Constructs a new request_team_game_records.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_team_game_records);

        /** request_team_game_records userid. */
        public userid: number;

        /** request_team_game_records password. */
        public password: string;

        /** request_team_game_records clubid. */
        public clubid: number;

        /** request_team_game_records type. */
        public type: number;

        /** request_team_game_records day. */
        public day: number;

        /**
         * Creates a new request_team_game_records instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_team_game_records instance
         */
        public static create(properties?: hall.Irequest_team_game_records): hall.request_team_game_records;

        /**
         * Encodes the specified request_team_game_records message. Does not implicitly {@link hall.request_team_game_records.verify|verify} messages.
         * @param message request_team_game_records message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_team_game_records, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_team_game_records message, length delimited. Does not implicitly {@link hall.request_team_game_records.verify|verify} messages.
         * @param message request_team_game_records message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_team_game_records, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_team_game_records message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_team_game_records
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_team_game_records;

        /**
         * Decodes a request_team_game_records message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_team_game_records
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_team_game_records;

        /**
         * Verifies a request_team_game_records message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_team_game_records message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_team_game_records
         */
        public static fromObject(object: { [k: string]: any }): hall.request_team_game_records;

        /**
         * Creates a plain object from a request_team_game_records message. Also converts values to other types if specified.
         * @param message request_team_game_records
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_team_game_records, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_team_game_records to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a team_game_record_item. */
    interface Iteam_game_record_item {

        /** team_game_record_item drawid */
        drawid: (number|Long);

        /** team_game_record_item insert_date */
        insert_date: string;

        /** team_game_record_item wanfa */
        wanfa: string;

        /** team_game_record_item gameid */
        gameid?: (number|null);

        /** team_game_record_item change_score */
        change_score: (number|Long);

        /** team_game_record_item revenue */
        revenue: (number|Long);

        /** team_game_record_item commission */
        commission: (number|Long);
    }

    /** Represents a team_game_record_item. */
    class team_game_record_item implements Iteam_game_record_item {

        /**
         * Constructs a new team_game_record_item.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iteam_game_record_item);

        /** team_game_record_item drawid. */
        public drawid: (number|Long);

        /** team_game_record_item insert_date. */
        public insert_date: string;

        /** team_game_record_item wanfa. */
        public wanfa: string;

        /** team_game_record_item gameid. */
        public gameid: number;

        /** team_game_record_item change_score. */
        public change_score: (number|Long);

        /** team_game_record_item revenue. */
        public revenue: (number|Long);

        /** team_game_record_item commission. */
        public commission: (number|Long);

        /**
         * Creates a new team_game_record_item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns team_game_record_item instance
         */
        public static create(properties?: hall.Iteam_game_record_item): hall.team_game_record_item;

        /**
         * Encodes the specified team_game_record_item message. Does not implicitly {@link hall.team_game_record_item.verify|verify} messages.
         * @param message team_game_record_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iteam_game_record_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified team_game_record_item message, length delimited. Does not implicitly {@link hall.team_game_record_item.verify|verify} messages.
         * @param message team_game_record_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iteam_game_record_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a team_game_record_item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns team_game_record_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.team_game_record_item;

        /**
         * Decodes a team_game_record_item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns team_game_record_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.team_game_record_item;

        /**
         * Verifies a team_game_record_item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a team_game_record_item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns team_game_record_item
         */
        public static fromObject(object: { [k: string]: any }): hall.team_game_record_item;

        /**
         * Creates a plain object from a team_game_record_item message. Also converts values to other types if specified.
         * @param message team_game_record_item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.team_game_record_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this team_game_record_item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_team_game_records. */
    interface Iresponse_team_game_records {

        /** response_team_game_records items */
        items?: (hall.Iteam_game_record_item[]|null);
    }

    /** Represents a response_team_game_records. */
    class response_team_game_records implements Iresponse_team_game_records {

        /**
         * Constructs a new response_team_game_records.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_team_game_records);

        /** response_team_game_records items. */
        public items: hall.Iteam_game_record_item[];

        /**
         * Creates a new response_team_game_records instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_team_game_records instance
         */
        public static create(properties?: hall.Iresponse_team_game_records): hall.response_team_game_records;

        /**
         * Encodes the specified response_team_game_records message. Does not implicitly {@link hall.response_team_game_records.verify|verify} messages.
         * @param message response_team_game_records message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_team_game_records, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_team_game_records message, length delimited. Does not implicitly {@link hall.response_team_game_records.verify|verify} messages.
         * @param message response_team_game_records message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_team_game_records, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_team_game_records message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_team_game_records
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_team_game_records;

        /**
         * Decodes a response_team_game_records message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_team_game_records
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_team_game_records;

        /**
         * Verifies a response_team_game_records message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_team_game_records message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_team_game_records
         */
        public static fromObject(object: { [k: string]: any }): hall.response_team_game_records;

        /**
         * Creates a plain object from a response_team_game_records message. Also converts values to other types if specified.
         * @param message response_team_game_records
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_team_game_records, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_team_game_records to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_team_game_record_detail. */
    interface Irequest_team_game_record_detail {

        /** request_team_game_record_detail userid */
        userid: number;

        /** request_team_game_record_detail password */
        password: string;

        /** request_team_game_record_detail clubid */
        clubid: number;

        /** request_team_game_record_detail drawid */
        drawid: (number|Long);
    }

    /** Represents a request_team_game_record_detail. */
    class request_team_game_record_detail implements Irequest_team_game_record_detail {

        /**
         * Constructs a new request_team_game_record_detail.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Irequest_team_game_record_detail);

        /** request_team_game_record_detail userid. */
        public userid: number;

        /** request_team_game_record_detail password. */
        public password: string;

        /** request_team_game_record_detail clubid. */
        public clubid: number;

        /** request_team_game_record_detail drawid. */
        public drawid: (number|Long);

        /**
         * Creates a new request_team_game_record_detail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_team_game_record_detail instance
         */
        public static create(properties?: hall.Irequest_team_game_record_detail): hall.request_team_game_record_detail;

        /**
         * Encodes the specified request_team_game_record_detail message. Does not implicitly {@link hall.request_team_game_record_detail.verify|verify} messages.
         * @param message request_team_game_record_detail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Irequest_team_game_record_detail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_team_game_record_detail message, length delimited. Does not implicitly {@link hall.request_team_game_record_detail.verify|verify} messages.
         * @param message request_team_game_record_detail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Irequest_team_game_record_detail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_team_game_record_detail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_team_game_record_detail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.request_team_game_record_detail;

        /**
         * Decodes a request_team_game_record_detail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_team_game_record_detail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.request_team_game_record_detail;

        /**
         * Verifies a request_team_game_record_detail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_team_game_record_detail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_team_game_record_detail
         */
        public static fromObject(object: { [k: string]: any }): hall.request_team_game_record_detail;

        /**
         * Creates a plain object from a request_team_game_record_detail message. Also converts values to other types if specified.
         * @param message request_team_game_record_detail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.request_team_game_record_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_team_game_record_detail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a team_game_record_detail_item. */
    interface Iteam_game_record_detail_item {

        /** team_game_record_detail_item gamelog */
        gamelog: string;

        /** team_game_record_detail_item start_score */
        start_score: (number|Long);

        /** team_game_record_detail_item change_score */
        change_score: (number|Long);

        /** team_game_record_detail_item gameid */
        gameid?: (number|null);
    }

    /** Represents a team_game_record_detail_item. */
    class team_game_record_detail_item implements Iteam_game_record_detail_item {

        /**
         * Constructs a new team_game_record_detail_item.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iteam_game_record_detail_item);

        /** team_game_record_detail_item gamelog. */
        public gamelog: string;

        /** team_game_record_detail_item start_score. */
        public start_score: (number|Long);

        /** team_game_record_detail_item change_score. */
        public change_score: (number|Long);

        /** team_game_record_detail_item gameid. */
        public gameid: number;

        /**
         * Creates a new team_game_record_detail_item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns team_game_record_detail_item instance
         */
        public static create(properties?: hall.Iteam_game_record_detail_item): hall.team_game_record_detail_item;

        /**
         * Encodes the specified team_game_record_detail_item message. Does not implicitly {@link hall.team_game_record_detail_item.verify|verify} messages.
         * @param message team_game_record_detail_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iteam_game_record_detail_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified team_game_record_detail_item message, length delimited. Does not implicitly {@link hall.team_game_record_detail_item.verify|verify} messages.
         * @param message team_game_record_detail_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iteam_game_record_detail_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a team_game_record_detail_item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns team_game_record_detail_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.team_game_record_detail_item;

        /**
         * Decodes a team_game_record_detail_item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns team_game_record_detail_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.team_game_record_detail_item;

        /**
         * Verifies a team_game_record_detail_item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a team_game_record_detail_item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns team_game_record_detail_item
         */
        public static fromObject(object: { [k: string]: any }): hall.team_game_record_detail_item;

        /**
         * Creates a plain object from a team_game_record_detail_item message. Also converts values to other types if specified.
         * @param message team_game_record_detail_item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.team_game_record_detail_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this team_game_record_detail_item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response_team_game_record_detail. */
    interface Iresponse_team_game_record_detail {

        /** response_team_game_record_detail kindid */
        kindid: number;

        /** response_team_game_record_detail items */
        items?: (hall.Iteam_game_record_detail_item[]|null);
    }

    /** Represents a response_team_game_record_detail. */
    class response_team_game_record_detail implements Iresponse_team_game_record_detail {

        /**
         * Constructs a new response_team_game_record_detail.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.Iresponse_team_game_record_detail);

        /** response_team_game_record_detail kindid. */
        public kindid: number;

        /** response_team_game_record_detail items. */
        public items: hall.Iteam_game_record_detail_item[];

        /**
         * Creates a new response_team_game_record_detail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response_team_game_record_detail instance
         */
        public static create(properties?: hall.Iresponse_team_game_record_detail): hall.response_team_game_record_detail;

        /**
         * Encodes the specified response_team_game_record_detail message. Does not implicitly {@link hall.response_team_game_record_detail.verify|verify} messages.
         * @param message response_team_game_record_detail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.Iresponse_team_game_record_detail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response_team_game_record_detail message, length delimited. Does not implicitly {@link hall.response_team_game_record_detail.verify|verify} messages.
         * @param message response_team_game_record_detail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.Iresponse_team_game_record_detail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response_team_game_record_detail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response_team_game_record_detail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.response_team_game_record_detail;

        /**
         * Decodes a response_team_game_record_detail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response_team_game_record_detail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.response_team_game_record_detail;

        /**
         * Verifies a response_team_game_record_detail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response_team_game_record_detail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response_team_game_record_detail
         */
        public static fromObject(object: { [k: string]: any }): hall.response_team_game_record_detail;

        /**
         * Creates a plain object from a response_team_game_record_detail message. Also converts values to other types if specified.
         * @param message response_team_game_record_detail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.response_team_game_record_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response_team_game_record_detail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace login. */
export namespace login {

    /** Properties of a login. */
    interface Ilogin {

        /** login uid */
        uid: number;

        /** login secret */
        secret: string;
    }

    /** Represents a login. */
    class login implements Ilogin {

        /**
         * Constructs a new login.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.Ilogin);

        /** login uid. */
        public uid: number;

        /** login secret. */
        public secret: string;

        /**
         * Creates a new login instance using the specified properties.
         * @param [properties] Properties to set
         * @returns login instance
         */
        public static create(properties?: login.Ilogin): login.login;

        /**
         * Encodes the specified login message. Does not implicitly {@link login.login.verify|verify} messages.
         * @param message login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.Ilogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified login message, length delimited. Does not implicitly {@link login.login.verify|verify} messages.
         * @param message login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.Ilogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a login message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.login;

        /**
         * Decodes a login message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.login;

        /**
         * Verifies a login message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a login message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns login
         */
        public static fromObject(object: { [k: string]: any }): login.login;

        /**
         * Creates a plain object from a login message. Also converts values to other types if specified.
         * @param message login
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.login, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this login to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a kick. */
    interface Ikick {

        /** kick uid */
        uid: number;

        /** kick subid */
        subid: number;
    }

    /** Represents a kick. */
    class kick implements Ikick {

        /**
         * Constructs a new kick.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.Ikick);

        /** kick uid. */
        public uid: number;

        /** kick subid. */
        public subid: number;

        /**
         * Creates a new kick instance using the specified properties.
         * @param [properties] Properties to set
         * @returns kick instance
         */
        public static create(properties?: login.Ikick): login.kick;

        /**
         * Encodes the specified kick message. Does not implicitly {@link login.kick.verify|verify} messages.
         * @param message kick message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.Ikick, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified kick message, length delimited. Does not implicitly {@link login.kick.verify|verify} messages.
         * @param message kick message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.Ikick, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a kick message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns kick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.kick;

        /**
         * Decodes a kick message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns kick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.kick;

        /**
         * Verifies a kick message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a kick message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns kick
         */
        public static fromObject(object: { [k: string]: any }): login.kick;

        /**
         * Creates a plain object from a kick message. Also converts values to other types if specified.
         * @param message kick
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.kick, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this kick to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace netmsg. */
export namespace netmsg {

    /** Properties of a netmsg. */
    interface Inetmsg {

        /** netmsg name */
        name: string;

        /** netmsg payload */
        payload: Uint8Array;

        /** netmsg sessionid */
        sessionid?: (number|null);
    }

    /** Represents a netmsg. */
    class netmsg implements Inetmsg {

        /**
         * Constructs a new netmsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: netmsg.Inetmsg);

        /** netmsg name. */
        public name: string;

        /** netmsg payload. */
        public payload: Uint8Array;

        /** netmsg sessionid. */
        public sessionid: number;

        /**
         * Creates a new netmsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns netmsg instance
         */
        public static create(properties?: netmsg.Inetmsg): netmsg.netmsg;

        /**
         * Encodes the specified netmsg message. Does not implicitly {@link netmsg.netmsg.verify|verify} messages.
         * @param message netmsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netmsg.Inetmsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified netmsg message, length delimited. Does not implicitly {@link netmsg.netmsg.verify|verify} messages.
         * @param message netmsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netmsg.Inetmsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a netmsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns netmsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netmsg.netmsg;

        /**
         * Decodes a netmsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns netmsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netmsg.netmsg;

        /**
         * Verifies a netmsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a netmsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns netmsg
         */
        public static fromObject(object: { [k: string]: any }): netmsg.netmsg;

        /**
         * Creates a plain object from a netmsg message. Also converts values to other types if specified.
         * @param message netmsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netmsg.netmsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this netmsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a heartbeat. */
    interface Iheartbeat {
    }

    /** Represents a heartbeat. */
    class heartbeat implements Iheartbeat {

        /**
         * Constructs a new heartbeat.
         * @param [properties] Properties to set
         */
        constructor(properties?: netmsg.Iheartbeat);

        /**
         * Creates a new heartbeat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns heartbeat instance
         */
        public static create(properties?: netmsg.Iheartbeat): netmsg.heartbeat;

        /**
         * Encodes the specified heartbeat message. Does not implicitly {@link netmsg.heartbeat.verify|verify} messages.
         * @param message heartbeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netmsg.Iheartbeat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified heartbeat message, length delimited. Does not implicitly {@link netmsg.heartbeat.verify|verify} messages.
         * @param message heartbeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netmsg.Iheartbeat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a heartbeat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns heartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netmsg.heartbeat;

        /**
         * Decodes a heartbeat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns heartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netmsg.heartbeat;

        /**
         * Verifies a heartbeat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a heartbeat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns heartbeat
         */
        public static fromObject(object: { [k: string]: any }): netmsg.heartbeat;

        /**
         * Creates a plain object from a heartbeat message. Also converts values to other types if specified.
         * @param message heartbeat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netmsg.heartbeat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this heartbeat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_system_message. */
    interface Inotify_system_message {

        /** notify_system_message type */
        type: number;

        /** notify_system_message text */
        text: string;
    }

    /** Represents a notify_system_message. */
    class notify_system_message implements Inotify_system_message {

        /**
         * Constructs a new notify_system_message.
         * @param [properties] Properties to set
         */
        constructor(properties?: netmsg.Inotify_system_message);

        /** notify_system_message type. */
        public type: number;

        /** notify_system_message text. */
        public text: string;

        /**
         * Creates a new notify_system_message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_system_message instance
         */
        public static create(properties?: netmsg.Inotify_system_message): netmsg.notify_system_message;

        /**
         * Encodes the specified notify_system_message message. Does not implicitly {@link netmsg.notify_system_message.verify|verify} messages.
         * @param message notify_system_message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netmsg.Inotify_system_message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_system_message message, length delimited. Does not implicitly {@link netmsg.notify_system_message.verify|verify} messages.
         * @param message notify_system_message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netmsg.Inotify_system_message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_system_message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_system_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netmsg.notify_system_message;

        /**
         * Decodes a notify_system_message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_system_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netmsg.notify_system_message;

        /**
         * Verifies a notify_system_message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_system_message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_system_message
         */
        public static fromObject(object: { [k: string]: any }): netmsg.notify_system_message;

        /**
         * Creates a plain object from a notify_system_message message. Also converts values to other types if specified.
         * @param message notify_system_message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netmsg.notify_system_message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_system_message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_update_score. */
    interface Inotify_update_score {

        /** notify_update_score score */
        score: (number|Long);

        /** notify_update_score msg */
        msg?: (netmsg.Inotify_system_message|null);
    }

    /** Represents a notify_update_score. */
    class notify_update_score implements Inotify_update_score {

        /**
         * Constructs a new notify_update_score.
         * @param [properties] Properties to set
         */
        constructor(properties?: netmsg.Inotify_update_score);

        /** notify_update_score score. */
        public score: (number|Long);

        /** notify_update_score msg. */
        public msg?: (netmsg.Inotify_system_message|null);

        /**
         * Creates a new notify_update_score instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_update_score instance
         */
        public static create(properties?: netmsg.Inotify_update_score): netmsg.notify_update_score;

        /**
         * Encodes the specified notify_update_score message. Does not implicitly {@link netmsg.notify_update_score.verify|verify} messages.
         * @param message notify_update_score message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netmsg.Inotify_update_score, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_update_score message, length delimited. Does not implicitly {@link netmsg.notify_update_score.verify|verify} messages.
         * @param message notify_update_score message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netmsg.Inotify_update_score, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_update_score message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_update_score
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netmsg.notify_update_score;

        /**
         * Decodes a notify_update_score message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_update_score
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netmsg.notify_update_score;

        /**
         * Verifies a notify_update_score message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_update_score message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_update_score
         */
        public static fromObject(object: { [k: string]: any }): netmsg.notify_update_score;

        /**
         * Creates a plain object from a notify_update_score message. Also converts values to other types if specified.
         * @param message notify_update_score
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netmsg.notify_update_score, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_update_score to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
