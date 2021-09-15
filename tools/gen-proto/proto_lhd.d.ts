import * as $protobuf from "protobufjs";
/** Namespace lhd. */
export namespace lhd {

    /** Properties of a notify_gs_free. */
    interface Inotify_gs_free {

        /** notify_gs_free dealid */
        dealid: string;

        /** notify_gs_free time_leave */
        time_leave: number;

        /** notify_gs_free enable_sys_banker */
        enable_sys_banker: boolean;

        /** notify_gs_free banker_condition */
        banker_condition: (number|Long);

        /** notify_gs_free downbanker_condition */
        downbanker_condition: (number|Long);

        /** notify_gs_free user_bet_limit */
        user_bet_limit: (number|Long);

        /** notify_gs_free area_bet_limit */
        area_bet_limit: (number|Long);

        /** notify_gs_free bet_condition */
        bet_condition: (number|Long);

        /** notify_gs_free current_banker */
        current_banker: number;

        /** notify_gs_free banker_reserve_score */
        banker_reserve_score: (number|Long);

        /** notify_gs_free banker_count */
        banker_count: number;
    }

    /** Represents a notify_gs_free. */
    class notify_gs_free implements Inotify_gs_free {

        /**
         * Constructs a new notify_gs_free.
         * @param [properties] Properties to set
         */
        constructor(properties?: lhd.Inotify_gs_free);

        /** notify_gs_free dealid. */
        public dealid: string;

        /** notify_gs_free time_leave. */
        public time_leave: number;

        /** notify_gs_free enable_sys_banker. */
        public enable_sys_banker: boolean;

        /** notify_gs_free banker_condition. */
        public banker_condition: (number|Long);

        /** notify_gs_free downbanker_condition. */
        public downbanker_condition: (number|Long);

        /** notify_gs_free user_bet_limit. */
        public user_bet_limit: (number|Long);

        /** notify_gs_free area_bet_limit. */
        public area_bet_limit: (number|Long);

        /** notify_gs_free bet_condition. */
        public bet_condition: (number|Long);

        /** notify_gs_free current_banker. */
        public current_banker: number;

        /** notify_gs_free banker_reserve_score. */
        public banker_reserve_score: (number|Long);

        /** notify_gs_free banker_count. */
        public banker_count: number;

        /**
         * Creates a new notify_gs_free instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_gs_free instance
         */
        public static create(properties?: lhd.Inotify_gs_free): lhd.notify_gs_free;

        /**
         * Encodes the specified notify_gs_free message. Does not implicitly {@link lhd.notify_gs_free.verify|verify} messages.
         * @param message notify_gs_free message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lhd.Inotify_gs_free, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_gs_free message, length delimited. Does not implicitly {@link lhd.notify_gs_free.verify|verify} messages.
         * @param message notify_gs_free message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lhd.Inotify_gs_free, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_gs_free message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_gs_free
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lhd.notify_gs_free;

        /**
         * Decodes a notify_gs_free message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_gs_free
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lhd.notify_gs_free;

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
        public static fromObject(object: { [k: string]: any }): lhd.notify_gs_free;

        /**
         * Creates a plain object from a notify_gs_free message. Also converts values to other types if specified.
         * @param message notify_gs_free
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lhd.notify_gs_free, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_gs_free to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_gs_bet. */
    interface Inotify_gs_bet {

        /** notify_gs_bet dealid */
        dealid: string;

        /** notify_gs_bet time_leave */
        time_leave: number;

        /** notify_gs_bet enable_sys_banker */
        enable_sys_banker: boolean;

        /** notify_gs_bet banker_condition */
        banker_condition: (number|Long);

        /** notify_gs_bet downbanker_condition */
        downbanker_condition: (number|Long);

        /** notify_gs_bet user_bet_limit */
        user_bet_limit: (number|Long);

        /** notify_gs_bet area_bet_limit */
        area_bet_limit: (number|Long);

        /** notify_gs_bet bet_condition */
        bet_condition: (number|Long);

        /** notify_gs_bet current_banker */
        current_banker: number;

        /** notify_gs_bet banker_reserve_score */
        banker_reserve_score: (number|Long);

        /** notify_gs_bet banker_count */
        banker_count: number;

        /** notify_gs_bet all_bet_score */
        all_bet_score?: ((number|Long)[]|null);

        /** notify_gs_bet me_bet_score */
        me_bet_score?: ((number|Long)[]|null);
    }

    /** Represents a notify_gs_bet. */
    class notify_gs_bet implements Inotify_gs_bet {

        /**
         * Constructs a new notify_gs_bet.
         * @param [properties] Properties to set
         */
        constructor(properties?: lhd.Inotify_gs_bet);

        /** notify_gs_bet dealid. */
        public dealid: string;

        /** notify_gs_bet time_leave. */
        public time_leave: number;

        /** notify_gs_bet enable_sys_banker. */
        public enable_sys_banker: boolean;

        /** notify_gs_bet banker_condition. */
        public banker_condition: (number|Long);

        /** notify_gs_bet downbanker_condition. */
        public downbanker_condition: (number|Long);

        /** notify_gs_bet user_bet_limit. */
        public user_bet_limit: (number|Long);

        /** notify_gs_bet area_bet_limit. */
        public area_bet_limit: (number|Long);

        /** notify_gs_bet bet_condition. */
        public bet_condition: (number|Long);

        /** notify_gs_bet current_banker. */
        public current_banker: number;

        /** notify_gs_bet banker_reserve_score. */
        public banker_reserve_score: (number|Long);

        /** notify_gs_bet banker_count. */
        public banker_count: number;

        /** notify_gs_bet all_bet_score. */
        public all_bet_score: (number|Long)[];

        /** notify_gs_bet me_bet_score. */
        public me_bet_score: (number|Long)[];

        /**
         * Creates a new notify_gs_bet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_gs_bet instance
         */
        public static create(properties?: lhd.Inotify_gs_bet): lhd.notify_gs_bet;

        /**
         * Encodes the specified notify_gs_bet message. Does not implicitly {@link lhd.notify_gs_bet.verify|verify} messages.
         * @param message notify_gs_bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lhd.Inotify_gs_bet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_gs_bet message, length delimited. Does not implicitly {@link lhd.notify_gs_bet.verify|verify} messages.
         * @param message notify_gs_bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lhd.Inotify_gs_bet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_gs_bet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_gs_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lhd.notify_gs_bet;

        /**
         * Decodes a notify_gs_bet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_gs_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lhd.notify_gs_bet;

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
        public static fromObject(object: { [k: string]: any }): lhd.notify_gs_bet;

        /**
         * Creates a plain object from a notify_gs_bet message. Also converts values to other types if specified.
         * @param message notify_gs_bet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lhd.notify_gs_bet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_gs_bet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_gs_opencard. */
    interface Inotify_gs_opencard {

        /** notify_gs_opencard dealid */
        dealid: string;

        /** notify_gs_opencard time_leave */
        time_leave: number;

        /** notify_gs_opencard enable_sys_banker */
        enable_sys_banker: boolean;

        /** notify_gs_opencard banker_condition */
        banker_condition: (number|Long);

        /** notify_gs_opencard downbanker_condition */
        downbanker_condition: (number|Long);

        /** notify_gs_opencard user_bet_limit */
        user_bet_limit: (number|Long);

        /** notify_gs_opencard area_bet_limit */
        area_bet_limit: (number|Long);

        /** notify_gs_opencard bet_condition */
        bet_condition: (number|Long);

        /** notify_gs_opencard current_banker */
        current_banker: number;

        /** notify_gs_opencard banker_reserve_score */
        banker_reserve_score: (number|Long);

        /** notify_gs_opencard banker_count */
        banker_count: number;

        /** notify_gs_opencard all_bet_score */
        all_bet_score?: ((number|Long)[]|null);

        /** notify_gs_opencard me_bet_score */
        me_bet_score?: ((number|Long)[]|null);

        /** notify_gs_opencard cards_data */
        cards_data?: (number[]|null);

        /** notify_gs_opencard win_area */
        win_area: number;

        /** notify_gs_opencard win_score */
        win_score?: ((number|Long)[]|null);
    }

    /** Represents a notify_gs_opencard. */
    class notify_gs_opencard implements Inotify_gs_opencard {

        /**
         * Constructs a new notify_gs_opencard.
         * @param [properties] Properties to set
         */
        constructor(properties?: lhd.Inotify_gs_opencard);

        /** notify_gs_opencard dealid. */
        public dealid: string;

        /** notify_gs_opencard time_leave. */
        public time_leave: number;

        /** notify_gs_opencard enable_sys_banker. */
        public enable_sys_banker: boolean;

        /** notify_gs_opencard banker_condition. */
        public banker_condition: (number|Long);

        /** notify_gs_opencard downbanker_condition. */
        public downbanker_condition: (number|Long);

        /** notify_gs_opencard user_bet_limit. */
        public user_bet_limit: (number|Long);

        /** notify_gs_opencard area_bet_limit. */
        public area_bet_limit: (number|Long);

        /** notify_gs_opencard bet_condition. */
        public bet_condition: (number|Long);

        /** notify_gs_opencard current_banker. */
        public current_banker: number;

        /** notify_gs_opencard banker_reserve_score. */
        public banker_reserve_score: (number|Long);

        /** notify_gs_opencard banker_count. */
        public banker_count: number;

        /** notify_gs_opencard all_bet_score. */
        public all_bet_score: (number|Long)[];

        /** notify_gs_opencard me_bet_score. */
        public me_bet_score: (number|Long)[];

        /** notify_gs_opencard cards_data. */
        public cards_data: number[];

        /** notify_gs_opencard win_area. */
        public win_area: number;

        /** notify_gs_opencard win_score. */
        public win_score: (number|Long)[];

        /**
         * Creates a new notify_gs_opencard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_gs_opencard instance
         */
        public static create(properties?: lhd.Inotify_gs_opencard): lhd.notify_gs_opencard;

        /**
         * Encodes the specified notify_gs_opencard message. Does not implicitly {@link lhd.notify_gs_opencard.verify|verify} messages.
         * @param message notify_gs_opencard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lhd.Inotify_gs_opencard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_gs_opencard message, length delimited. Does not implicitly {@link lhd.notify_gs_opencard.verify|verify} messages.
         * @param message notify_gs_opencard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lhd.Inotify_gs_opencard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_gs_opencard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_gs_opencard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lhd.notify_gs_opencard;

        /**
         * Decodes a notify_gs_opencard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_gs_opencard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lhd.notify_gs_opencard;

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
        public static fromObject(object: { [k: string]: any }): lhd.notify_gs_opencard;

        /**
         * Creates a plain object from a notify_gs_opencard message. Also converts values to other types if specified.
         * @param message notify_gs_opencard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lhd.notify_gs_opencard, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** notify_game_start time_leave */
        time_leave: number;

        /** notify_game_start current_banker */
        current_banker: number;

        /** notify_game_start banker_reserve_score */
        banker_reserve_score: (number|Long);

        /** notify_game_start banker_count */
        banker_count: number;
    }

    /** Represents a notify_game_start. */
    class notify_game_start implements Inotify_game_start {

        /**
         * Constructs a new notify_game_start.
         * @param [properties] Properties to set
         */
        constructor(properties?: lhd.Inotify_game_start);

        /** notify_game_start dealid. */
        public dealid: string;

        /** notify_game_start time_leave. */
        public time_leave: number;

        /** notify_game_start current_banker. */
        public current_banker: number;

        /** notify_game_start banker_reserve_score. */
        public banker_reserve_score: (number|Long);

        /** notify_game_start banker_count. */
        public banker_count: number;

        /**
         * Creates a new notify_game_start instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_game_start instance
         */
        public static create(properties?: lhd.Inotify_game_start): lhd.notify_game_start;

        /**
         * Encodes the specified notify_game_start message. Does not implicitly {@link lhd.notify_game_start.verify|verify} messages.
         * @param message notify_game_start message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lhd.Inotify_game_start, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_game_start message, length delimited. Does not implicitly {@link lhd.notify_game_start.verify|verify} messages.
         * @param message notify_game_start message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lhd.Inotify_game_start, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_game_start message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_game_start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lhd.notify_game_start;

        /**
         * Decodes a notify_game_start message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_game_start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lhd.notify_game_start;

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
        public static fromObject(object: { [k: string]: any }): lhd.notify_game_start;

        /**
         * Creates a plain object from a notify_game_start message. Also converts values to other types if specified.
         * @param message notify_game_start
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lhd.notify_game_start, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_game_start to JSON.
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

        /** notify_bet bet_area */
        bet_area: number;
    }

    /** Represents a notify_bet. */
    class notify_bet implements Inotify_bet {

        /**
         * Constructs a new notify_bet.
         * @param [properties] Properties to set
         */
        constructor(properties?: lhd.Inotify_bet);

        /** notify_bet bet_chairid. */
        public bet_chairid: number;

        /** notify_bet bet_score. */
        public bet_score: (number|Long);

        /** notify_bet bet_area. */
        public bet_area: number;

        /**
         * Creates a new notify_bet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_bet instance
         */
        public static create(properties?: lhd.Inotify_bet): lhd.notify_bet;

        /**
         * Encodes the specified notify_bet message. Does not implicitly {@link lhd.notify_bet.verify|verify} messages.
         * @param message notify_bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lhd.Inotify_bet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_bet message, length delimited. Does not implicitly {@link lhd.notify_bet.verify|verify} messages.
         * @param message notify_bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lhd.Inotify_bet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_bet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lhd.notify_bet;

        /**
         * Decodes a notify_bet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lhd.notify_bet;

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
        public static fromObject(object: { [k: string]: any }): lhd.notify_bet;

        /**
         * Creates a plain object from a notify_bet message. Also converts values to other types if specified.
         * @param message notify_bet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lhd.notify_bet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_bet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_open_cards. */
    interface Inotify_open_cards {

        /** notify_open_cards time_leave */
        time_leave: number;

        /** notify_open_cards cards_data */
        cards_data?: (number[]|null);

        /** notify_open_cards win_area */
        win_area: number;

        /** notify_open_cards win_score */
        win_score?: ((number|Long)[]|null);
    }

    /** Represents a notify_open_cards. */
    class notify_open_cards implements Inotify_open_cards {

        /**
         * Constructs a new notify_open_cards.
         * @param [properties] Properties to set
         */
        constructor(properties?: lhd.Inotify_open_cards);

        /** notify_open_cards time_leave. */
        public time_leave: number;

        /** notify_open_cards cards_data. */
        public cards_data: number[];

        /** notify_open_cards win_area. */
        public win_area: number;

        /** notify_open_cards win_score. */
        public win_score: (number|Long)[];

        /**
         * Creates a new notify_open_cards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_open_cards instance
         */
        public static create(properties?: lhd.Inotify_open_cards): lhd.notify_open_cards;

        /**
         * Encodes the specified notify_open_cards message. Does not implicitly {@link lhd.notify_open_cards.verify|verify} messages.
         * @param message notify_open_cards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lhd.Inotify_open_cards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_open_cards message, length delimited. Does not implicitly {@link lhd.notify_open_cards.verify|verify} messages.
         * @param message notify_open_cards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lhd.Inotify_open_cards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_open_cards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_open_cards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lhd.notify_open_cards;

        /**
         * Decodes a notify_open_cards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_open_cards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lhd.notify_open_cards;

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
        public static fromObject(object: { [k: string]: any }): lhd.notify_open_cards;

        /**
         * Creates a plain object from a notify_open_cards message. Also converts values to other types if specified.
         * @param message notify_open_cards
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lhd.notify_open_cards, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_open_cards to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_game_free. */
    interface Inotify_game_free {

        /** notify_game_free time_leave */
        time_leave: number;

        /** notify_game_free current_banker */
        current_banker: number;

        /** notify_game_free banker_reserve_score */
        banker_reserve_score: (number|Long);

        /** notify_game_free banker_count */
        banker_count: number;
    }

    /** Represents a notify_game_free. */
    class notify_game_free implements Inotify_game_free {

        /**
         * Constructs a new notify_game_free.
         * @param [properties] Properties to set
         */
        constructor(properties?: lhd.Inotify_game_free);

        /** notify_game_free time_leave. */
        public time_leave: number;

        /** notify_game_free current_banker. */
        public current_banker: number;

        /** notify_game_free banker_reserve_score. */
        public banker_reserve_score: (number|Long);

        /** notify_game_free banker_count. */
        public banker_count: number;

        /**
         * Creates a new notify_game_free instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_game_free instance
         */
        public static create(properties?: lhd.Inotify_game_free): lhd.notify_game_free;

        /**
         * Encodes the specified notify_game_free message. Does not implicitly {@link lhd.notify_game_free.verify|verify} messages.
         * @param message notify_game_free message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lhd.Inotify_game_free, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_game_free message, length delimited. Does not implicitly {@link lhd.notify_game_free.verify|verify} messages.
         * @param message notify_game_free message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lhd.Inotify_game_free, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_game_free message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_game_free
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lhd.notify_game_free;

        /**
         * Decodes a notify_game_free message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_game_free
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lhd.notify_game_free;

        /**
         * Verifies a notify_game_free message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_game_free message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_game_free
         */
        public static fromObject(object: { [k: string]: any }): lhd.notify_game_free;

        /**
         * Creates a plain object from a notify_game_free message. Also converts values to other types if specified.
         * @param message notify_game_free
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lhd.notify_game_free, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_game_free to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_cancel_banker. */
    interface Inotify_cancel_banker {

        /** notify_cancel_banker cancel_chairid */
        cancel_chairid: number;
    }

    /** Represents a notify_cancel_banker. */
    class notify_cancel_banker implements Inotify_cancel_banker {

        /**
         * Constructs a new notify_cancel_banker.
         * @param [properties] Properties to set
         */
        constructor(properties?: lhd.Inotify_cancel_banker);

        /** notify_cancel_banker cancel_chairid. */
        public cancel_chairid: number;

        /**
         * Creates a new notify_cancel_banker instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_cancel_banker instance
         */
        public static create(properties?: lhd.Inotify_cancel_banker): lhd.notify_cancel_banker;

        /**
         * Encodes the specified notify_cancel_banker message. Does not implicitly {@link lhd.notify_cancel_banker.verify|verify} messages.
         * @param message notify_cancel_banker message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lhd.Inotify_cancel_banker, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_cancel_banker message, length delimited. Does not implicitly {@link lhd.notify_cancel_banker.verify|verify} messages.
         * @param message notify_cancel_banker message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lhd.Inotify_cancel_banker, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_cancel_banker message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_cancel_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lhd.notify_cancel_banker;

        /**
         * Decodes a notify_cancel_banker message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_cancel_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lhd.notify_cancel_banker;

        /**
         * Verifies a notify_cancel_banker message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_cancel_banker message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_cancel_banker
         */
        public static fromObject(object: { [k: string]: any }): lhd.notify_cancel_banker;

        /**
         * Creates a plain object from a notify_cancel_banker message. Also converts values to other types if specified.
         * @param message notify_cancel_banker
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lhd.notify_cancel_banker, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_cancel_banker to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_apply_banker. */
    interface Inotify_apply_banker {

        /** notify_apply_banker apply_chairid */
        apply_chairid: number;

        /** notify_apply_banker reserve_score */
        reserve_score: (number|Long);
    }

    /** Represents a notify_apply_banker. */
    class notify_apply_banker implements Inotify_apply_banker {

        /**
         * Constructs a new notify_apply_banker.
         * @param [properties] Properties to set
         */
        constructor(properties?: lhd.Inotify_apply_banker);

        /** notify_apply_banker apply_chairid. */
        public apply_chairid: number;

        /** notify_apply_banker reserve_score. */
        public reserve_score: (number|Long);

        /**
         * Creates a new notify_apply_banker instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_apply_banker instance
         */
        public static create(properties?: lhd.Inotify_apply_banker): lhd.notify_apply_banker;

        /**
         * Encodes the specified notify_apply_banker message. Does not implicitly {@link lhd.notify_apply_banker.verify|verify} messages.
         * @param message notify_apply_banker message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lhd.Inotify_apply_banker, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_apply_banker message, length delimited. Does not implicitly {@link lhd.notify_apply_banker.verify|verify} messages.
         * @param message notify_apply_banker message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lhd.Inotify_apply_banker, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_apply_banker message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_apply_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lhd.notify_apply_banker;

        /**
         * Decodes a notify_apply_banker message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_apply_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lhd.notify_apply_banker;

        /**
         * Verifies a notify_apply_banker message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_apply_banker message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_apply_banker
         */
        public static fromObject(object: { [k: string]: any }): lhd.notify_apply_banker;

        /**
         * Creates a plain object from a notify_apply_banker message. Also converts values to other types if specified.
         * @param message notify_apply_banker
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lhd.notify_apply_banker, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_apply_banker to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_change_banker. */
    interface Inotify_change_banker {

        /** notify_change_banker current_banker */
        current_banker: number;

        /** notify_change_banker banker_reserve_score */
        banker_reserve_score: (number|Long);

        /** notify_change_banker banker_count */
        banker_count: number;

        /** notify_change_banker reason */
        reason?: (string|null);
    }

    /** Represents a notify_change_banker. */
    class notify_change_banker implements Inotify_change_banker {

        /**
         * Constructs a new notify_change_banker.
         * @param [properties] Properties to set
         */
        constructor(properties?: lhd.Inotify_change_banker);

        /** notify_change_banker current_banker. */
        public current_banker: number;

        /** notify_change_banker banker_reserve_score. */
        public banker_reserve_score: (number|Long);

        /** notify_change_banker banker_count. */
        public banker_count: number;

        /** notify_change_banker reason. */
        public reason: string;

        /**
         * Creates a new notify_change_banker instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_change_banker instance
         */
        public static create(properties?: lhd.Inotify_change_banker): lhd.notify_change_banker;

        /**
         * Encodes the specified notify_change_banker message. Does not implicitly {@link lhd.notify_change_banker.verify|verify} messages.
         * @param message notify_change_banker message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lhd.Inotify_change_banker, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_change_banker message, length delimited. Does not implicitly {@link lhd.notify_change_banker.verify|verify} messages.
         * @param message notify_change_banker message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lhd.Inotify_change_banker, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_change_banker message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_change_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lhd.notify_change_banker;

        /**
         * Decodes a notify_change_banker message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_change_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lhd.notify_change_banker;

        /**
         * Verifies a notify_change_banker message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_change_banker message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_change_banker
         */
        public static fromObject(object: { [k: string]: any }): lhd.notify_change_banker;

        /**
         * Creates a plain object from a notify_change_banker message. Also converts values to other types if specified.
         * @param message notify_change_banker
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lhd.notify_change_banker, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_change_banker to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_top_players. */
    interface Inotify_top_players {

        /** notify_top_players chairids */
        chairids?: (number[]|null);
    }

    /** Represents a notify_top_players. */
    class notify_top_players implements Inotify_top_players {

        /**
         * Constructs a new notify_top_players.
         * @param [properties] Properties to set
         */
        constructor(properties?: lhd.Inotify_top_players);

        /** notify_top_players chairids. */
        public chairids: number[];

        /**
         * Creates a new notify_top_players instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_top_players instance
         */
        public static create(properties?: lhd.Inotify_top_players): lhd.notify_top_players;

        /**
         * Encodes the specified notify_top_players message. Does not implicitly {@link lhd.notify_top_players.verify|verify} messages.
         * @param message notify_top_players message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lhd.Inotify_top_players, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_top_players message, length delimited. Does not implicitly {@link lhd.notify_top_players.verify|verify} messages.
         * @param message notify_top_players message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lhd.Inotify_top_players, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_top_players message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_top_players
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lhd.notify_top_players;

        /**
         * Decodes a notify_top_players message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_top_players
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lhd.notify_top_players;

        /**
         * Verifies a notify_top_players message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_top_players message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_top_players
         */
        public static fromObject(object: { [k: string]: any }): lhd.notify_top_players;

        /**
         * Creates a plain object from a notify_top_players message. Also converts values to other types if specified.
         * @param message notify_top_players
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lhd.notify_top_players, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_top_players to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a user_list_item. */
    interface Iuser_list_item {

        /** user_list_item chairid */
        chairid: number;

        /** user_list_item bet_score */
        bet_score: (number|Long);

        /** user_list_item win_count */
        win_count: number;
    }

    /** Represents a user_list_item. */
    class user_list_item implements Iuser_list_item {

        /**
         * Constructs a new user_list_item.
         * @param [properties] Properties to set
         */
        constructor(properties?: lhd.Iuser_list_item);

        /** user_list_item chairid. */
        public chairid: number;

        /** user_list_item bet_score. */
        public bet_score: (number|Long);

        /** user_list_item win_count. */
        public win_count: number;

        /**
         * Creates a new user_list_item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns user_list_item instance
         */
        public static create(properties?: lhd.Iuser_list_item): lhd.user_list_item;

        /**
         * Encodes the specified user_list_item message. Does not implicitly {@link lhd.user_list_item.verify|verify} messages.
         * @param message user_list_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lhd.Iuser_list_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified user_list_item message, length delimited. Does not implicitly {@link lhd.user_list_item.verify|verify} messages.
         * @param message user_list_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lhd.Iuser_list_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a user_list_item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns user_list_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lhd.user_list_item;

        /**
         * Decodes a user_list_item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns user_list_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lhd.user_list_item;

        /**
         * Verifies a user_list_item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a user_list_item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns user_list_item
         */
        public static fromObject(object: { [k: string]: any }): lhd.user_list_item;

        /**
         * Creates a plain object from a user_list_item message. Also converts values to other types if specified.
         * @param message user_list_item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lhd.user_list_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this user_list_item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_user_list. */
    interface Inotify_user_list {

        /** notify_user_list users */
        users?: (lhd.Iuser_list_item[]|null);
    }

    /** Represents a notify_user_list. */
    class notify_user_list implements Inotify_user_list {

        /**
         * Constructs a new notify_user_list.
         * @param [properties] Properties to set
         */
        constructor(properties?: lhd.Inotify_user_list);

        /** notify_user_list users. */
        public users: lhd.Iuser_list_item[];

        /**
         * Creates a new notify_user_list instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_user_list instance
         */
        public static create(properties?: lhd.Inotify_user_list): lhd.notify_user_list;

        /**
         * Encodes the specified notify_user_list message. Does not implicitly {@link lhd.notify_user_list.verify|verify} messages.
         * @param message notify_user_list message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lhd.Inotify_user_list, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_user_list message, length delimited. Does not implicitly {@link lhd.notify_user_list.verify|verify} messages.
         * @param message notify_user_list message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lhd.Inotify_user_list, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_user_list message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_user_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lhd.notify_user_list;

        /**
         * Decodes a notify_user_list message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_user_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lhd.notify_user_list;

        /**
         * Verifies a notify_user_list message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_user_list message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_user_list
         */
        public static fromObject(object: { [k: string]: any }): lhd.notify_user_list;

        /**
         * Creates a plain object from a notify_user_list message. Also converts values to other types if specified.
         * @param message notify_user_list
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lhd.notify_user_list, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_user_list to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_apply_list. */
    interface Inotify_apply_list {

        /** notify_apply_list apply_list */
        apply_list?: (lhd.Inotify_apply_banker[]|null);
    }

    /** Represents a notify_apply_list. */
    class notify_apply_list implements Inotify_apply_list {

        /**
         * Constructs a new notify_apply_list.
         * @param [properties] Properties to set
         */
        constructor(properties?: lhd.Inotify_apply_list);

        /** notify_apply_list apply_list. */
        public apply_list: lhd.Inotify_apply_banker[];

        /**
         * Creates a new notify_apply_list instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_apply_list instance
         */
        public static create(properties?: lhd.Inotify_apply_list): lhd.notify_apply_list;

        /**
         * Encodes the specified notify_apply_list message. Does not implicitly {@link lhd.notify_apply_list.verify|verify} messages.
         * @param message notify_apply_list message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lhd.Inotify_apply_list, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_apply_list message, length delimited. Does not implicitly {@link lhd.notify_apply_list.verify|verify} messages.
         * @param message notify_apply_list message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lhd.Inotify_apply_list, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_apply_list message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_apply_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lhd.notify_apply_list;

        /**
         * Decodes a notify_apply_list message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_apply_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lhd.notify_apply_list;

        /**
         * Verifies a notify_apply_list message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_apply_list message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_apply_list
         */
        public static fromObject(object: { [k: string]: any }): lhd.notify_apply_list;

        /**
         * Creates a plain object from a notify_apply_list message. Also converts values to other types if specified.
         * @param message notify_apply_list
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lhd.notify_apply_list, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_apply_list to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_game_records. */
    interface Inotify_game_records {

        /** notify_game_records records */
        records?: (number[]|null);
    }

    /** Represents a notify_game_records. */
    class notify_game_records implements Inotify_game_records {

        /**
         * Constructs a new notify_game_records.
         * @param [properties] Properties to set
         */
        constructor(properties?: lhd.Inotify_game_records);

        /** notify_game_records records. */
        public records: number[];

        /**
         * Creates a new notify_game_records instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_game_records instance
         */
        public static create(properties?: lhd.Inotify_game_records): lhd.notify_game_records;

        /**
         * Encodes the specified notify_game_records message. Does not implicitly {@link lhd.notify_game_records.verify|verify} messages.
         * @param message notify_game_records message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lhd.Inotify_game_records, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_game_records message, length delimited. Does not implicitly {@link lhd.notify_game_records.verify|verify} messages.
         * @param message notify_game_records message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lhd.Inotify_game_records, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_game_records message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_game_records
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lhd.notify_game_records;

        /**
         * Decodes a notify_game_records message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_game_records
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lhd.notify_game_records;

        /**
         * Verifies a notify_game_records message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_game_records message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_game_records
         */
        public static fromObject(object: { [k: string]: any }): lhd.notify_game_records;

        /**
         * Creates a plain object from a notify_game_records message. Also converts values to other types if specified.
         * @param message notify_game_records
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lhd.notify_game_records, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_game_records to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a notify_bet_chips. */
    interface Inotify_bet_chips {

        /** notify_bet_chips bet_chips */
        bet_chips?: (lhd.Inotify_bet[]|null);
    }

    /** Represents a notify_bet_chips. */
    class notify_bet_chips implements Inotify_bet_chips {

        /**
         * Constructs a new notify_bet_chips.
         * @param [properties] Properties to set
         */
        constructor(properties?: lhd.Inotify_bet_chips);

        /** notify_bet_chips bet_chips. */
        public bet_chips: lhd.Inotify_bet[];

        /**
         * Creates a new notify_bet_chips instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_bet_chips instance
         */
        public static create(properties?: lhd.Inotify_bet_chips): lhd.notify_bet_chips;

        /**
         * Encodes the specified notify_bet_chips message. Does not implicitly {@link lhd.notify_bet_chips.verify|verify} messages.
         * @param message notify_bet_chips message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lhd.Inotify_bet_chips, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_bet_chips message, length delimited. Does not implicitly {@link lhd.notify_bet_chips.verify|verify} messages.
         * @param message notify_bet_chips message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lhd.Inotify_bet_chips, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_bet_chips message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_bet_chips
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lhd.notify_bet_chips;

        /**
         * Decodes a notify_bet_chips message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_bet_chips
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lhd.notify_bet_chips;

        /**
         * Verifies a notify_bet_chips message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_bet_chips message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_bet_chips
         */
        public static fromObject(object: { [k: string]: any }): lhd.notify_bet_chips;

        /**
         * Creates a plain object from a notify_bet_chips message. Also converts values to other types if specified.
         * @param message notify_bet_chips
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lhd.notify_bet_chips, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_bet_chips to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_bet. */
    interface Irequest_bet {

        /** request_bet bet_score */
        bet_score: (number|Long);

        /** request_bet bet_area */
        bet_area: number;
    }

    /** Represents a request_bet. */
    class request_bet implements Irequest_bet {

        /**
         * Constructs a new request_bet.
         * @param [properties] Properties to set
         */
        constructor(properties?: lhd.Irequest_bet);

        /** request_bet bet_score. */
        public bet_score: (number|Long);

        /** request_bet bet_area. */
        public bet_area: number;

        /**
         * Creates a new request_bet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_bet instance
         */
        public static create(properties?: lhd.Irequest_bet): lhd.request_bet;

        /**
         * Encodes the specified request_bet message. Does not implicitly {@link lhd.request_bet.verify|verify} messages.
         * @param message request_bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lhd.Irequest_bet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_bet message, length delimited. Does not implicitly {@link lhd.request_bet.verify|verify} messages.
         * @param message request_bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lhd.Irequest_bet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_bet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lhd.request_bet;

        /**
         * Decodes a request_bet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lhd.request_bet;

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
        public static fromObject(object: { [k: string]: any }): lhd.request_bet;

        /**
         * Creates a plain object from a request_bet message. Also converts values to other types if specified.
         * @param message request_bet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lhd.request_bet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_bet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_apply_banker. */
    interface Irequest_apply_banker {

        /** request_apply_banker reserve_score */
        reserve_score: (number|Long);
    }

    /** Represents a request_apply_banker. */
    class request_apply_banker implements Irequest_apply_banker {

        /**
         * Constructs a new request_apply_banker.
         * @param [properties] Properties to set
         */
        constructor(properties?: lhd.Irequest_apply_banker);

        /** request_apply_banker reserve_score. */
        public reserve_score: (number|Long);

        /**
         * Creates a new request_apply_banker instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_apply_banker instance
         */
        public static create(properties?: lhd.Irequest_apply_banker): lhd.request_apply_banker;

        /**
         * Encodes the specified request_apply_banker message. Does not implicitly {@link lhd.request_apply_banker.verify|verify} messages.
         * @param message request_apply_banker message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lhd.Irequest_apply_banker, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_apply_banker message, length delimited. Does not implicitly {@link lhd.request_apply_banker.verify|verify} messages.
         * @param message request_apply_banker message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lhd.Irequest_apply_banker, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_apply_banker message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_apply_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lhd.request_apply_banker;

        /**
         * Decodes a request_apply_banker message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_apply_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lhd.request_apply_banker;

        /**
         * Verifies a request_apply_banker message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_apply_banker message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_apply_banker
         */
        public static fromObject(object: { [k: string]: any }): lhd.request_apply_banker;

        /**
         * Creates a plain object from a request_apply_banker message. Also converts values to other types if specified.
         * @param message request_apply_banker
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lhd.request_apply_banker, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_apply_banker to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a request_cancel_banker. */
    interface Irequest_cancel_banker {
    }

    /** Represents a request_cancel_banker. */
    class request_cancel_banker implements Irequest_cancel_banker {

        /**
         * Constructs a new request_cancel_banker.
         * @param [properties] Properties to set
         */
        constructor(properties?: lhd.Irequest_cancel_banker);

        /**
         * Creates a new request_cancel_banker instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request_cancel_banker instance
         */
        public static create(properties?: lhd.Irequest_cancel_banker): lhd.request_cancel_banker;

        /**
         * Encodes the specified request_cancel_banker message. Does not implicitly {@link lhd.request_cancel_banker.verify|verify} messages.
         * @param message request_cancel_banker message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lhd.Irequest_cancel_banker, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request_cancel_banker message, length delimited. Does not implicitly {@link lhd.request_cancel_banker.verify|verify} messages.
         * @param message request_cancel_banker message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lhd.Irequest_cancel_banker, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request_cancel_banker message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request_cancel_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lhd.request_cancel_banker;

        /**
         * Decodes a request_cancel_banker message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request_cancel_banker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lhd.request_cancel_banker;

        /**
         * Verifies a request_cancel_banker message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request_cancel_banker message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request_cancel_banker
         */
        public static fromObject(object: { [k: string]: any }): lhd.request_cancel_banker;

        /**
         * Creates a plain object from a request_cancel_banker message. Also converts values to other types if specified.
         * @param message request_cancel_banker
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lhd.request_cancel_banker, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request_cancel_banker to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
