import * as $protobuf from "protobufjs";
/** Namespace niuniu. */
export namespace niuniu {

    /** Properties of a notify_gs_free. */
    interface Inotify_gs_free {

        /** notify_gs_free base_score */
        base_score: (number|Long);
    }

    /** Represents a notify_gs_free. */
    class notify_gs_free implements Inotify_gs_free {

        /**
         * Constructs a new notify_gs_free.
         * @param [properties] Properties to set
         */
        constructor(properties?: niuniu.Inotify_gs_free);

        /** notify_gs_free base_score. */
        public base_score: (number|Long);

        /**
         * Creates a new notify_gs_free instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_gs_free instance
         */
        public static create(properties?: niuniu.Inotify_gs_free): niuniu.notify_gs_free;

        /**
         * Encodes the specified notify_gs_free message. Does not implicitly {@link niuniu.notify_gs_free.verify|verify} messages.
         * @param message notify_gs_free message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: niuniu.Inotify_gs_free, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_gs_free message, length delimited. Does not implicitly {@link niuniu.notify_gs_free.verify|verify} messages.
         * @param message notify_gs_free message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: niuniu.Inotify_gs_free, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_gs_free message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_gs_free
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): niuniu.notify_gs_free;

        /**
         * Decodes a notify_gs_free message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_gs_free
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): niuniu.notify_gs_free;

        /**
         * Verifies a notify_gs_free message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_gs_free message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_gs_free
         */
        public static fromObject(object: { [k: string]: any }): niuniu.notify_gs_free;

        /**
         * Creates a plain object from a notify_gs_free message. Also converts values to other types if specified.
         * @param message notify_gs_free
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: niuniu.notify_gs_free, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_gs_free to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_gs_callbanker. */
    interface Inotify_gs_callbanker {

        /** notify_gs_callbanker dealid */
        dealid: string;

        /** notify_gs_callbanker base_score */
        base_score: (number|Long);

        /** notify_gs_callbanker playing_status */
        playing_status?: (boolean[]|null);

        /** notify_gs_callbanker call_banker_status */
        call_banker_status?: (boolean[]|null);

        /** notify_gs_callbanker call_banker_times */
        call_banker_times?: (number[]|null);

        /** notify_gs_callbanker cards_data */
        cards_data?: (number[]|null);
    }

    /** Represents a notify_gs_callbanker. */
    class notify_gs_callbanker implements Inotify_gs_callbanker {

        /**
         * Constructs a new notify_gs_callbanker.
         * @param [properties] Properties to set
         */
        constructor(properties?: niuniu.Inotify_gs_callbanker);

        /** notify_gs_callbanker dealid. */
        public dealid: string;

        /** notify_gs_callbanker base_score. */
        public base_score: (number|Long);

        /** notify_gs_callbanker playing_status. */
        public playing_status: boolean[];

        /** notify_gs_callbanker call_banker_status. */
        public call_banker_status: boolean[];

        /** notify_gs_callbanker call_banker_times. */
        public call_banker_times: number[];

        /** notify_gs_callbanker cards_data. */
        public cards_data: number[];

        /**
         * Creates a new notify_gs_callbanker instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_gs_callbanker instance
         */
        public static create(properties?: niuniu.Inotify_gs_callbanker): niuniu.notify_gs_callbanker;

        /**
         * Encodes the specified notify_gs_callbanker message. Does not implicitly {@link niuniu.notify_gs_callbanker.verify|verify} messages.
         * @param message notify_gs_callbanker message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: niuniu.Inotify_gs_callbanker, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_gs_callbanker message, length delimited. Does not implicitly {@link niuniu.notify_gs_callbanker.verify|verify} messages.
         * @param message notify_gs_callbanker message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: niuniu.Inotify_gs_callbanker, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_gs_callbanker message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_gs_callbanker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): niuniu.notify_gs_callbanker;

        /**
         * Decodes a notify_gs_callbanker message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_gs_callbanker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): niuniu.notify_gs_callbanker;

        /**
         * Verifies a notify_gs_callbanker message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_gs_callbanker message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_gs_callbanker
         */
        public static fromObject(object: { [k: string]: any }): niuniu.notify_gs_callbanker;

        /**
         * Creates a plain object from a notify_gs_callbanker message. Also converts values to other types if specified.
         * @param message notify_gs_callbanker
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: niuniu.notify_gs_callbanker, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_gs_callbanker to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_gs_bet. */
    interface Inotify_gs_bet {

        /** notify_gs_bet dealid */
        dealid: string;

        /** notify_gs_bet base_score */
        base_score: (number|Long);

        /** notify_gs_bet playing_status */
        playing_status?: (boolean[]|null);

        /** notify_gs_bet banker_chairid */
        banker_chairid: number;

        /** notify_gs_bet banker_times */
        banker_times: number;

        /** notify_gs_bet allow_double_bet */
        allow_double_bet: boolean;

        /** notify_gs_bet user_can_bet_score */
        user_can_bet_score?: ((number|Long)[]|null);

        /** notify_gs_bet user_bet_score */
        user_bet_score?: ((number|Long)[]|null);

        /** notify_gs_bet cards_data */
        cards_data?: (number[]|null);
    }

    /** Represents a notify_gs_bet. */
    class notify_gs_bet implements Inotify_gs_bet {

        /**
         * Constructs a new notify_gs_bet.
         * @param [properties] Properties to set
         */
        constructor(properties?: niuniu.Inotify_gs_bet);

        /** notify_gs_bet dealid. */
        public dealid: string;

        /** notify_gs_bet base_score. */
        public base_score: (number|Long);

        /** notify_gs_bet playing_status. */
        public playing_status: boolean[];

        /** notify_gs_bet banker_chairid. */
        public banker_chairid: number;

        /** notify_gs_bet banker_times. */
        public banker_times: number;

        /** notify_gs_bet allow_double_bet. */
        public allow_double_bet: boolean;

        /** notify_gs_bet user_can_bet_score. */
        public user_can_bet_score: (number|Long)[];

        /** notify_gs_bet user_bet_score. */
        public user_bet_score: (number|Long)[];

        /** notify_gs_bet cards_data. */
        public cards_data: number[];

        /**
         * Creates a new notify_gs_bet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_gs_bet instance
         */
        public static create(properties?: niuniu.Inotify_gs_bet): niuniu.notify_gs_bet;

        /**
         * Encodes the specified notify_gs_bet message. Does not implicitly {@link niuniu.notify_gs_bet.verify|verify} messages.
         * @param message notify_gs_bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: niuniu.Inotify_gs_bet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_gs_bet message, length delimited. Does not implicitly {@link niuniu.notify_gs_bet.verify|verify} messages.
         * @param message notify_gs_bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: niuniu.Inotify_gs_bet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_gs_bet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_gs_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): niuniu.notify_gs_bet;

        /**
         * Decodes a notify_gs_bet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_gs_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): niuniu.notify_gs_bet;

        /**
         * Verifies a notify_gs_bet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_gs_bet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_gs_bet
         */
        public static fromObject(object: { [k: string]: any }): niuniu.notify_gs_bet;

        /**
         * Creates a plain object from a notify_gs_bet message. Also converts values to other types if specified.
         * @param message notify_gs_bet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: niuniu.notify_gs_bet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_gs_bet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an open_cards_data. */
    interface Iopen_cards_data {

        /** open_cards_data cards_data */
        cards_data?: (number[]|null);
    }

    /** Represents an open_cards_data. */
    class open_cards_data implements Iopen_cards_data {

        /**
         * Constructs a new open_cards_data.
         * @param [properties] Properties to set
         */
        constructor(properties?: niuniu.Iopen_cards_data);

        /** open_cards_data cards_data. */
        public cards_data: number[];

        /**
         * Creates a new open_cards_data instance using the specified properties.
         * @param [properties] Properties to set
         * @returns open_cards_data instance
         */
        public static create(properties?: niuniu.Iopen_cards_data): niuniu.open_cards_data;

        /**
         * Encodes the specified open_cards_data message. Does not implicitly {@link niuniu.open_cards_data.verify|verify} messages.
         * @param message open_cards_data message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: niuniu.Iopen_cards_data, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified open_cards_data message, length delimited. Does not implicitly {@link niuniu.open_cards_data.verify|verify} messages.
         * @param message open_cards_data message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: niuniu.Iopen_cards_data, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an open_cards_data message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns open_cards_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): niuniu.open_cards_data;

        /**
         * Decodes an open_cards_data message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns open_cards_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): niuniu.open_cards_data;

        /**
         * Verifies an open_cards_data message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an open_cards_data message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns open_cards_data
         */
        public static fromObject(object: { [k: string]: any }): niuniu.open_cards_data;

        /**
         * Creates a plain object from an open_cards_data message. Also converts values to other types if specified.
         * @param message open_cards_data
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: niuniu.open_cards_data, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this open_cards_data to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_gs_opencard. */
    interface Inotify_gs_opencard {

        /** notify_gs_opencard dealid */
        dealid: string;

        /** notify_gs_opencard base_score */
        base_score: (number|Long);

        /** notify_gs_opencard playing_status */
        playing_status?: (boolean[]|null);

        /** notify_gs_opencard banker_chairid */
        banker_chairid: number;

        /** notify_gs_opencard banker_times */
        banker_times: number;

        /** notify_gs_opencard user_bet_score */
        user_bet_score?: ((number|Long)[]|null);

        /** notify_gs_opencard cards_data */
        cards_data?: (number[]|null);

        /** notify_gs_opencard open_cards_data */
        open_cards_data?: (niuniu.Iopen_cards_data[]|null);

        /** notify_gs_opencard open_card_type */
        open_card_type?: (number[]|null);

        /** notify_gs_opencard open_card_times */
        open_card_times?: (number[]|null);
    }

    /** Represents a notify_gs_opencard. */
    class notify_gs_opencard implements Inotify_gs_opencard {

        /**
         * Constructs a new notify_gs_opencard.
         * @param [properties] Properties to set
         */
        constructor(properties?: niuniu.Inotify_gs_opencard);

        /** notify_gs_opencard dealid. */
        public dealid: string;

        /** notify_gs_opencard base_score. */
        public base_score: (number|Long);

        /** notify_gs_opencard playing_status. */
        public playing_status: boolean[];

        /** notify_gs_opencard banker_chairid. */
        public banker_chairid: number;

        /** notify_gs_opencard banker_times. */
        public banker_times: number;

        /** notify_gs_opencard user_bet_score. */
        public user_bet_score: (number|Long)[];

        /** notify_gs_opencard cards_data. */
        public cards_data: number[];

        /** notify_gs_opencard open_cards_data. */
        public open_cards_data: niuniu.Iopen_cards_data[];

        /** notify_gs_opencard open_card_type. */
        public open_card_type: number[];

        /** notify_gs_opencard open_card_times. */
        public open_card_times: number[];

        /**
         * Creates a new notify_gs_opencard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_gs_opencard instance
         */
        public static create(properties?: niuniu.Inotify_gs_opencard): niuniu.notify_gs_opencard;

        /**
         * Encodes the specified notify_gs_opencard message. Does not implicitly {@link niuniu.notify_gs_opencard.verify|verify} messages.
         * @param message notify_gs_opencard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: niuniu.Inotify_gs_opencard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_gs_opencard message, length delimited. Does not implicitly {@link niuniu.notify_gs_opencard.verify|verify} messages.
         * @param message notify_gs_opencard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: niuniu.Inotify_gs_opencard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_gs_opencard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_gs_opencard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): niuniu.notify_gs_opencard;

        /**
         * Decodes a notify_gs_opencard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_gs_opencard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): niuniu.notify_gs_opencard;

        /**
         * Verifies a notify_gs_opencard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_gs_opencard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_gs_opencard
         */
        public static fromObject(object: { [k: string]: any }): niuniu.notify_gs_opencard;

        /**
         * Creates a plain object from a notify_gs_opencard message. Also converts values to other types if specified.
         * @param message notify_gs_opencard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: niuniu.notify_gs_opencard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_gs_opencard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_game_start. */
    interface Inotify_game_start {

        /** notify_game_start dealid */
        dealid: string;

        /** notify_game_start cards_data */
        cards_data?: (number[]|null);
    }

    /** Represents a notify_game_start. */
    class notify_game_start implements Inotify_game_start {

        /**
         * Constructs a new notify_game_start.
         * @param [properties] Properties to set
         */
        constructor(properties?: niuniu.Inotify_game_start);

        /** notify_game_start dealid. */
        public dealid: string;

        /** notify_game_start cards_data. */
        public cards_data: number[];

        /**
         * Creates a new notify_game_start instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_game_start instance
         */
        public static create(properties?: niuniu.Inotify_game_start): niuniu.notify_game_start;

        /**
         * Encodes the specified notify_game_start message. Does not implicitly {@link niuniu.notify_game_start.verify|verify} messages.
         * @param message notify_game_start message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: niuniu.Inotify_game_start, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_game_start message, length delimited. Does not implicitly {@link niuniu.notify_game_start.verify|verify} messages.
         * @param message notify_game_start message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: niuniu.Inotify_game_start, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_game_start message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_game_start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): niuniu.notify_game_start;

        /**
         * Decodes a notify_game_start message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_game_start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): niuniu.notify_game_start;

        /**
         * Verifies a notify_game_start message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_game_start message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_game_start
         */
        public static fromObject(object: { [k: string]: any }): niuniu.notify_game_start;

        /**
         * Creates a plain object from a notify_game_start message. Also converts values to other types if specified.
         * @param message notify_game_start
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: niuniu.notify_game_start, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_game_start to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_call_banker. */
    interface Inotify_call_banker {

        /** notify_call_banker call_banker_chairid */
        call_banker_chairid: number;

        /** notify_call_banker call_banker_times */
        call_banker_times: number;
    }

    /** Represents a notify_call_banker. */
    class notify_call_banker implements Inotify_call_banker {

        /**
         * Constructs a new notify_call_banker.
         * @param [properties] Properties to set
         */
        constructor(properties?: niuniu.Inotify_call_banker);

        /** notify_call_banker call_banker_chairid. */
        public call_banker_chairid: number;

        /** notify_call_banker call_banker_times. */
        public call_banker_times: number;

        /**
         * Creates a new notify_call_banker instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_call_banker instance
         */
        public static create(properties?: niuniu.Inotify_call_banker): niuniu.notify_call_banker;

        /**
         * Encodes the specified notify_call_banker message. Does not implicitly {@link niuniu.notify_call_banker.verify|verify} messages.
         * @param message notify_call_banker message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: niuniu.Inotify_call_banker, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_call_banker message, length delimited. Does not implicitly {@link niuniu.notify_call_banker.verify|verify} messages.
         * @param message notify_call_banker message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: niuniu.Inotify_call_banker, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_call_banker message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_call_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): niuniu.notify_call_banker;

        /**
         * Decodes a notify_call_banker message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_call_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): niuniu.notify_call_banker;

        /**
         * Verifies a notify_call_banker message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_call_banker message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_call_banker
         */
        public static fromObject(object: { [k: string]: any }): niuniu.notify_call_banker;

        /**
         * Creates a plain object from a notify_call_banker message. Also converts values to other types if specified.
         * @param message notify_call_banker
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: niuniu.notify_call_banker, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_call_banker to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_start_bet. */
    interface Inotify_start_bet {

        /** notify_start_bet banker_chairid */
        banker_chairid: number;

        /** notify_start_bet banker_times */
        banker_times: number;

        /** notify_start_bet call_user_list */
        call_user_list?: (number[]|null);

        /** notify_start_bet user_can_bet_score */
        user_can_bet_score?: ((number|Long)[]|null);

        /** notify_start_bet allow_double_bet */
        allow_double_bet: boolean;
    }

    /** Represents a notify_start_bet. */
    class notify_start_bet implements Inotify_start_bet {

        /**
         * Constructs a new notify_start_bet.
         * @param [properties] Properties to set
         */
        constructor(properties?: niuniu.Inotify_start_bet);

        /** notify_start_bet banker_chairid. */
        public banker_chairid: number;

        /** notify_start_bet banker_times. */
        public banker_times: number;

        /** notify_start_bet call_user_list. */
        public call_user_list: number[];

        /** notify_start_bet user_can_bet_score. */
        public user_can_bet_score: (number|Long)[];

        /** notify_start_bet allow_double_bet. */
        public allow_double_bet: boolean;

        /**
         * Creates a new notify_start_bet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_start_bet instance
         */
        public static create(properties?: niuniu.Inotify_start_bet): niuniu.notify_start_bet;

        /**
         * Encodes the specified notify_start_bet message. Does not implicitly {@link niuniu.notify_start_bet.verify|verify} messages.
         * @param message notify_start_bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: niuniu.Inotify_start_bet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_start_bet message, length delimited. Does not implicitly {@link niuniu.notify_start_bet.verify|verify} messages.
         * @param message notify_start_bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: niuniu.Inotify_start_bet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_start_bet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_start_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): niuniu.notify_start_bet;

        /**
         * Decodes a notify_start_bet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_start_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): niuniu.notify_start_bet;

        /**
         * Verifies a notify_start_bet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_start_bet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_start_bet
         */
        public static fromObject(object: { [k: string]: any }): niuniu.notify_start_bet;

        /**
         * Creates a plain object from a notify_start_bet message. Also converts values to other types if specified.
         * @param message notify_start_bet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: niuniu.notify_start_bet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_start_bet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_bet. */
    interface Inotify_bet {

        /** notify_bet bet_chairid */
        bet_chairid: number;

        /** notify_bet bet_score */
        bet_score: (number|Long);
    }

    /** Represents a notify_bet. */
    class notify_bet implements Inotify_bet {

        /**
         * Constructs a new notify_bet.
         * @param [properties] Properties to set
         */
        constructor(properties?: niuniu.Inotify_bet);

        /** notify_bet bet_chairid. */
        public bet_chairid: number;

        /** notify_bet bet_score. */
        public bet_score: (number|Long);

        /**
         * Creates a new notify_bet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_bet instance
         */
        public static create(properties?: niuniu.Inotify_bet): niuniu.notify_bet;

        /**
         * Encodes the specified notify_bet message. Does not implicitly {@link niuniu.notify_bet.verify|verify} messages.
         * @param message notify_bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: niuniu.Inotify_bet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_bet message, length delimited. Does not implicitly {@link niuniu.notify_bet.verify|verify} messages.
         * @param message notify_bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: niuniu.Inotify_bet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_bet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): niuniu.notify_bet;

        /**
         * Decodes a notify_bet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): niuniu.notify_bet;

        /**
         * Verifies a notify_bet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_bet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_bet
         */
        public static fromObject(object: { [k: string]: any }): niuniu.notify_bet;

        /**
         * Creates a plain object from a notify_bet message. Also converts values to other types if specified.
         * @param message notify_bet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: niuniu.notify_bet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_bet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_start_open_card. */
    interface Inotify_start_open_card {

        /** notify_start_open_card cards_data */
        cards_data?: (number[]|null);
    }

    /** Represents a notify_start_open_card. */
    class notify_start_open_card implements Inotify_start_open_card {

        /**
         * Constructs a new notify_start_open_card.
         * @param [properties] Properties to set
         */
        constructor(properties?: niuniu.Inotify_start_open_card);

        /** notify_start_open_card cards_data. */
        public cards_data: number[];

        /**
         * Creates a new notify_start_open_card instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_start_open_card instance
         */
        public static create(properties?: niuniu.Inotify_start_open_card): niuniu.notify_start_open_card;

        /**
         * Encodes the specified notify_start_open_card message. Does not implicitly {@link niuniu.notify_start_open_card.verify|verify} messages.
         * @param message notify_start_open_card message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: niuniu.Inotify_start_open_card, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_start_open_card message, length delimited. Does not implicitly {@link niuniu.notify_start_open_card.verify|verify} messages.
         * @param message notify_start_open_card message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: niuniu.Inotify_start_open_card, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_start_open_card message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_start_open_card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): niuniu.notify_start_open_card;

        /**
         * Decodes a notify_start_open_card message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_start_open_card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): niuniu.notify_start_open_card;

        /**
         * Verifies a notify_start_open_card message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_start_open_card message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_start_open_card
         */
        public static fromObject(object: { [k: string]: any }): niuniu.notify_start_open_card;

        /**
         * Creates a plain object from a notify_start_open_card message. Also converts values to other types if specified.
         * @param message notify_start_open_card
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: niuniu.notify_start_open_card, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_start_open_card to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_open_cards. */
    interface Inotify_open_cards {

        /** notify_open_cards open_chairid */
        open_chairid: number;

        /** notify_open_cards open_card_type */
        open_card_type: number;

        /** notify_open_cards open_cards_data */
        open_cards_data?: (number[]|null);

        /** notify_open_cards open_card_times */
        open_card_times: number;
    }

    /** Represents a notify_open_cards. */
    class notify_open_cards implements Inotify_open_cards {

        /**
         * Constructs a new notify_open_cards.
         * @param [properties] Properties to set
         */
        constructor(properties?: niuniu.Inotify_open_cards);

        /** notify_open_cards open_chairid. */
        public open_chairid: number;

        /** notify_open_cards open_card_type. */
        public open_card_type: number;

        /** notify_open_cards open_cards_data. */
        public open_cards_data: number[];

        /** notify_open_cards open_card_times. */
        public open_card_times: number;

        /**
         * Creates a new notify_open_cards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_open_cards instance
         */
        public static create(properties?: niuniu.Inotify_open_cards): niuniu.notify_open_cards;

        /**
         * Encodes the specified notify_open_cards message. Does not implicitly {@link niuniu.notify_open_cards.verify|verify} messages.
         * @param message notify_open_cards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: niuniu.Inotify_open_cards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_open_cards message, length delimited. Does not implicitly {@link niuniu.notify_open_cards.verify|verify} messages.
         * @param message notify_open_cards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: niuniu.Inotify_open_cards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_open_cards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_open_cards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): niuniu.notify_open_cards;

        /**
         * Decodes a notify_open_cards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_open_cards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): niuniu.notify_open_cards;

        /**
         * Verifies a notify_open_cards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_open_cards message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_open_cards
         */
        public static fromObject(object: { [k: string]: any }): niuniu.notify_open_cards;

        /**
         * Creates a plain object from a notify_open_cards message. Also converts values to other types if specified.
         * @param message notify_open_cards
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: niuniu.notify_open_cards, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_open_cards to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_game_end. */
    interface Inotify_game_end {

        /** notify_game_end game_score */
        game_score?: ((number|Long)[]|null);
    }

    /** Represents a notify_game_end. */
    class notify_game_end implements Inotify_game_end {

        /**
         * Constructs a new notify_game_end.
         * @param [properties] Properties to set
         */
        constructor(properties?: niuniu.Inotify_game_end);

        /** notify_game_end game_score. */
        public game_score: (number|Long)[];

        /**
         * Creates a new notify_game_end instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_game_end instance
         */
        public static create(properties?: niuniu.Inotify_game_end): niuniu.notify_game_end;

        /**
         * Encodes the specified notify_game_end message. Does not implicitly {@link niuniu.notify_game_end.verify|verify} messages.
         * @param message notify_game_end message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: niuniu.Inotify_game_end, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_game_end message, length delimited. Does not implicitly {@link niuniu.notify_game_end.verify|verify} messages.
         * @param message notify_game_end message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: niuniu.Inotify_game_end, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_game_end message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_game_end
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): niuniu.notify_game_end;

        /**
         * Decodes a notify_game_end message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_game_end
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): niuniu.notify_game_end;

        /**
         * Verifies a notify_game_end message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_game_end message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_game_end
         */
        public static fromObject(object: { [k: string]: any }): niuniu.notify_game_end;

        /**
         * Creates a plain object from a notify_game_end message. Also converts values to other types if specified.
         * @param message notify_game_end
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: niuniu.notify_game_end, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_game_end to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_call_banker. */
    interface Irequest_call_banker {

        /** request_call_banker index */
        index: number;
    }

    /** Represents a request_call_banker. */
    class request_call_banker implements Irequest_call_banker {

        /**
         * Constructs a new request_call_banker.
         * @param [properties] Properties to set
         */
        constructor(properties?: niuniu.Irequest_call_banker);

        /** request_call_banker index. */
        public index: number;

        /**
         * Creates a new request_call_banker instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_call_banker instance
         */
        public static create(properties?: niuniu.Irequest_call_banker): niuniu.request_call_banker;

        /**
         * Encodes the specified request_call_banker message. Does not implicitly {@link niuniu.request_call_banker.verify|verify} messages.
         * @param message request_call_banker message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: niuniu.Irequest_call_banker, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_call_banker message, length delimited. Does not implicitly {@link niuniu.request_call_banker.verify|verify} messages.
         * @param message request_call_banker message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: niuniu.Irequest_call_banker, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_call_banker message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_call_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): niuniu.request_call_banker;

        /**
         * Decodes a request_call_banker message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_call_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): niuniu.request_call_banker;

        /**
         * Verifies a request_call_banker message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_call_banker message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_call_banker
         */
        public static fromObject(object: { [k: string]: any }): niuniu.request_call_banker;

        /**
         * Creates a plain object from a request_call_banker message. Also converts values to other types if specified.
         * @param message request_call_banker
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: niuniu.request_call_banker, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_call_banker to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_bet. */
    interface Irequest_bet {

        /** request_bet bet_score */
        bet_score: (number|Long);
    }

    /** Represents a request_bet. */
    class request_bet implements Irequest_bet {

        /**
         * Constructs a new request_bet.
         * @param [properties] Properties to set
         */
        constructor(properties?: niuniu.Irequest_bet);

        /** request_bet bet_score. */
        public bet_score: (number|Long);

        /**
         * Creates a new request_bet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_bet instance
         */
        public static create(properties?: niuniu.Irequest_bet): niuniu.request_bet;

        /**
         * Encodes the specified request_bet message. Does not implicitly {@link niuniu.request_bet.verify|verify} messages.
         * @param message request_bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: niuniu.Irequest_bet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_bet message, length delimited. Does not implicitly {@link niuniu.request_bet.verify|verify} messages.
         * @param message request_bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: niuniu.Irequest_bet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_bet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): niuniu.request_bet;

        /**
         * Decodes a request_bet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): niuniu.request_bet;

        /**
         * Verifies a request_bet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_bet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_bet
         */
        public static fromObject(object: { [k: string]: any }): niuniu.request_bet;

        /**
         * Creates a plain object from a request_bet message. Also converts values to other types if specified.
         * @param message request_bet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: niuniu.request_bet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_bet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_open_card. */
    interface Irequest_open_card {

        /** request_open_card cards_data */
        cards_data?: (number[]|null);
    }

    /** Represents a request_open_card. */
    class request_open_card implements Irequest_open_card {

        /**
         * Constructs a new request_open_card.
         * @param [properties] Properties to set
         */
        constructor(properties?: niuniu.Irequest_open_card);

        /** request_open_card cards_data. */
        public cards_data: number[];

        /**
         * Creates a new request_open_card instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_open_card instance
         */
        public static create(properties?: niuniu.Irequest_open_card): niuniu.request_open_card;

        /**
         * Encodes the specified request_open_card message. Does not implicitly {@link niuniu.request_open_card.verify|verify} messages.
         * @param message request_open_card message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: niuniu.Irequest_open_card, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_open_card message, length delimited. Does not implicitly {@link niuniu.request_open_card.verify|verify} messages.
         * @param message request_open_card message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: niuniu.Irequest_open_card, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_open_card message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_open_card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): niuniu.request_open_card;

        /**
         * Decodes a request_open_card message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_open_card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): niuniu.request_open_card;

        /**
         * Verifies a request_open_card message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_open_card message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_open_card
         */
        public static fromObject(object: { [k: string]: any }): niuniu.request_open_card;

        /**
         * Creates a plain object from a request_open_card message. Also converts values to other types if specified.
         * @param message request_open_card
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: niuniu.request_open_card, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_open_card to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
