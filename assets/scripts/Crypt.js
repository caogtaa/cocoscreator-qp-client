
// TODO:native使用c++实现以下的算法再通过jsb绑定
// 加解密库
var crypt = {};
//var Long = require('./long.js');

// Base64 encoding table
var b64 = new Array(64);

// Base64 decoding table
var s64 = new Array(123);

// 65..90, 97..122, 48..57, 43, 47
for (var i = 0; i < 64;)
    s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;

const SMALL_CHUNK = 256;

/**
 * Converts a JS string to a UTF-8 "byte" array.
 * @param {string} str 16-bit unicode string.
 * @return {!Array<number>} UTF-8 byte array.
 */
crypt.stringToUtf8ByteArray = function(str) {
    // TODO(user): Use native implementations if/when available
    var out = [], p = 0;
    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      if (c < 128) {
        out[p++] = c;
      } else if (c < 2048) {
        out[p++] = (c >>> 6) | 192;
        out[p++] = (c & 63) | 128;
      } else if (
          ((c & 0xFC00) == 0xD800) && (i + 1) < str.length &&
          ((str.charCodeAt(i + 1) & 0xFC00) == 0xDC00)) {
        // Surrogate Pair
        c = 0x10000 + ((c & 0x03FF) << 10) + (str.charCodeAt(++i) & 0x03FF);
        out[p++] = (c >>> 18) | 240;
        out[p++] = ((c >>> 12) & 63) | 128;
        out[p++] = ((c >>> 6) & 63) | 128;
        out[p++] = (c & 63) | 128;
      } else {
        out[p++] = (c >>> 12) | 224;
        out[p++] = ((c >>> 6) & 63) | 128;
        out[p++] = (c & 63) | 128;
      }
    }
    return out;
  };

/**
 * Converts a UTF-8 byte array to JavaScript's 16-bit Unicode.
 * @param {Uint8Array|Array<number>} bytes UTF-8 byte array.
 * @return {string} 16-bit Unicode string.
 */
crypt.utf8ByteArrayToString = function(bytes) {
    // TODO(user): Use native implementations if/when available
    var out = [], pos = 0, c = 0;
    while (pos < bytes.length) {
      var c1 = bytes[pos++];
      if (c1 < 128) {
        out[c++] = String.fromCharCode(c1);
      } else if (c1 > 191 && c1 < 224) {
        var c2 = bytes[pos++];
        out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
      } else if (c1 > 239 && c1 < 365) {
        // Surrogate Pair
        var c2 = bytes[pos++];
        var c3 = bytes[pos++];
        var c4 = bytes[pos++];
        var u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) -
            0x10000;
        out[c++] = String.fromCharCode(0xD800 + (u >>> 10));
        out[c++] = String.fromCharCode(0xDC00 + (u & 1023));
      } else {
        var c2 = bytes[pos++];
        var c3 = bytes[pos++];
        out[c++] =
            String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
      }
    }
    return out.join('');
  };

/**
 * Turns a string into an array of bytes; a "byte" being a JS number in the
 * range 0-255.
 * @param {string} str String value to arrify.
 * @return {!Array<number>} Array of numbers corresponding to the
 *     UCS character codes of each character in str.
 */
crypt.stringToByteArray = function(str) {
    var output = [], p = 0;
    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      while (c > 0xff) {
        output[p++] = c & 0xff;
        c >>>= 8;
      }
      output[p++] = c;
    }
    return output;
  };

/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param {!Uint8Array|!Array<number>} bytes Array of numbers representing
 *     characters.
 * @return {string} Stringification of the array.
 */
crypt.byteArrayToString = function(bytes) {
    var CHUNK_SIZE = 8192;
  
    // Special-case the simple case for speed's sake.
    if (bytes.length <= CHUNK_SIZE) {
      return String.fromCharCode.apply(null, bytes);
    }
  
    // The remaining logic splits conversion by chunks since
    // Function#apply() has a maximum parameter count.
    // See discussion: http://goo.gl/LrWmZ9
  
    var str = '';
    for (var i = 0; i < bytes.length; i += CHUNK_SIZE) {
        var chunk =  bytes.slice(i, i + CHUNK_SIZE);
      //var chunk = goog.array.slice(bytes, i, i + CHUNK_SIZE);
      str += String.fromCharCode.apply(null, chunk);
    }
    return str;
  };

/**
 * Encodes a buffer to a base64 encoded string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} Base64 encoded string
 */
crypt.base64encodebuffer = function (buffer, start, end) {
    var parts = null,
        chunk = [];
    var i = 0, // output index
        j = 0, // goto index
        t;     // temporary
    while (start < end) {
        var b = buffer[start++];
        switch (j) {
            case 0:
                chunk[i++] = b64[b >> 2];
                t = (b & 3) << 4;
                j = 1;
                break;
            case 1:
                chunk[i++] = b64[t | b >> 4];
                t = (b & 15) << 2;
                j = 2;
                break;
            case 2:
                chunk[i++] = b64[t | b >> 6];
                chunk[i++] = b64[b & 63];
                j = 0;
                break;
        }
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (j) {
        chunk[i++] = b64[t];
        chunk[i++] = 61;
        if (j === 1)
            chunk[i++] = 61;
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

var invalidEncoding = "invalid encoding";

/**
 * Decodes a base64 encoded string to a buffer.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Number of bytes written
 * @throws {Error} If encoding is invalid
 */
crypt.base64decodetobuffer = function (string, buffer, offset) {
    var start = offset;
    var j = 0, // goto index
        t;     // temporary
    for (var i = 0; i < string.length;) {
        var c = string.charCodeAt(i++);
        if (c === 61 && j > 1)
            break;
        if ((c = s64[c]) === undefined)
            throw Error(invalidEncoding);
        switch (j) {
            case 0:
                t = c;
                j = 1;
                break;
            case 1:
                buffer[offset++] = t << 2 | (c & 48) >> 4;
                t = c;
                j = 2;
                break;
            case 2:
                buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
                t = c;
                j = 3;
                break;
            case 3:
                buffer[offset++] = (t & 3) << 6 | c;
                j = 0;
                break;
        }
    }
    if (j === 1)
        throw Error(invalidEncoding);
    return offset - start;
};

crypt.base64encode = function (text) {
    let arrtext = crypt.stringToUtf8ByteArray(text);
    return crypt.base64encodebuffer(arrtext, 0, arrtext.length);
};

crypt.base64decode = function (base64) {
    let buffer = [];

    let num = crypt.base64decodetobuffer(base64, buffer, 0);

    return crypt.utf8ByteArrayToString(buffer.slice(0, num));
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 返回8字节的Uint8Array
/**
 * 返回随机key.
 * @returns {Uint8Array} 
 */
crypt.randomkey = function () {
    let tmp = new Uint8Array(8);
    let i;
    let x = 0;
    for (i = 0; i < 8; i++) {
        tmp[i] = getRandomInt(0, 2147483647) & 0xff;
        x ^= tmp[i];
    }
    if (x == 0) {
        tmp[0] |= 1;
    }
    return tmp;
}

/* PC1: left and right halves bit-swap */

const LHs = [
	0x00000000, 0x00000001, 0x00000100, 0x00000101,
	0x00010000, 0x00010001, 0x00010100, 0x00010101,
	0x01000000, 0x01000001, 0x01000100, 0x01000101,
	0x01010000, 0x01010001, 0x01010100, 0x01010101
];

const RHs = [
	0x00000000, 0x01000000, 0x00010000, 0x01010000,
	0x00000100, 0x01000100, 0x00010100, 0x01010100,
	0x00000001, 0x01000001, 0x00010001, 0x01010001,
	0x00000101, 0x01000101, 0x00010101, 0x01010101,
];

const SB1 = [
	0x01010400, 0x00000000, 0x00010000, 0x01010404,
	0x01010004, 0x00010404, 0x00000004, 0x00010000,
	0x00000400, 0x01010400, 0x01010404, 0x00000400,
	0x01000404, 0x01010004, 0x01000000, 0x00000004,
	0x00000404, 0x01000400, 0x01000400, 0x00010400,
	0x00010400, 0x01010000, 0x01010000, 0x01000404,
	0x00010004, 0x01000004, 0x01000004, 0x00010004,
	0x00000000, 0x00000404, 0x00010404, 0x01000000,
	0x00010000, 0x01010404, 0x00000004, 0x01010000,
	0x01010400, 0x01000000, 0x01000000, 0x00000400,
	0x01010004, 0x00010000, 0x00010400, 0x01000004,
	0x00000400, 0x00000004, 0x01000404, 0x00010404,
	0x01010404, 0x00010004, 0x01010000, 0x01000404,
	0x01000004, 0x00000404, 0x00010404, 0x01010400,
	0x00000404, 0x01000400, 0x01000400, 0x00000000,
	0x00010004, 0x00010400, 0x00000000, 0x01010004
];

const SB2 = [
	0x80108020, 0x80008000, 0x00008000, 0x00108020,
	0x00100000, 0x00000020, 0x80100020, 0x80008020,
	0x80000020, 0x80108020, 0x80108000, 0x80000000,
	0x80008000, 0x00100000, 0x00000020, 0x80100020,
	0x00108000, 0x00100020, 0x80008020, 0x00000000,
	0x80000000, 0x00008000, 0x00108020, 0x80100000,
	0x00100020, 0x80000020, 0x00000000, 0x00108000,
	0x00008020, 0x80108000, 0x80100000, 0x00008020,
	0x00000000, 0x00108020, 0x80100020, 0x00100000,
	0x80008020, 0x80100000, 0x80108000, 0x00008000,
	0x80100000, 0x80008000, 0x00000020, 0x80108020,
	0x00108020, 0x00000020, 0x00008000, 0x80000000,
	0x00008020, 0x80108000, 0x00100000, 0x80000020,
	0x00100020, 0x80008020, 0x80000020, 0x00100020,
	0x00108000, 0x00000000, 0x80008000, 0x00008020,
	0x80000000, 0x80100020, 0x80108020, 0x00108000
];

const SB3 = [
	0x00000208, 0x08020200, 0x00000000, 0x08020008,
	0x08000200, 0x00000000, 0x00020208, 0x08000200,
	0x00020008, 0x08000008, 0x08000008, 0x00020000,
	0x08020208, 0x00020008, 0x08020000, 0x00000208,
	0x08000000, 0x00000008, 0x08020200, 0x00000200,
	0x00020200, 0x08020000, 0x08020008, 0x00020208,
	0x08000208, 0x00020200, 0x00020000, 0x08000208,
	0x00000008, 0x08020208, 0x00000200, 0x08000000,
	0x08020200, 0x08000000, 0x00020008, 0x00000208,
	0x00020000, 0x08020200, 0x08000200, 0x00000000,
	0x00000200, 0x00020008, 0x08020208, 0x08000200,
	0x08000008, 0x00000200, 0x00000000, 0x08020008,
	0x08000208, 0x00020000, 0x08000000, 0x08020208,
	0x00000008, 0x00020208, 0x00020200, 0x08000008,
	0x08020000, 0x08000208, 0x00000208, 0x08020000,
	0x00020208, 0x00000008, 0x08020008, 0x00020200
];

const SB4 = [
	0x00802001, 0x00002081, 0x00002081, 0x00000080,
	0x00802080, 0x00800081, 0x00800001, 0x00002001,
	0x00000000, 0x00802000, 0x00802000, 0x00802081,
	0x00000081, 0x00000000, 0x00800080, 0x00800001,
	0x00000001, 0x00002000, 0x00800000, 0x00802001,
	0x00000080, 0x00800000, 0x00002001, 0x00002080,
	0x00800081, 0x00000001, 0x00002080, 0x00800080,
	0x00002000, 0x00802080, 0x00802081, 0x00000081,
	0x00800080, 0x00800001, 0x00802000, 0x00802081,
	0x00000081, 0x00000000, 0x00000000, 0x00802000,
	0x00002080, 0x00800080, 0x00800081, 0x00000001,
	0x00802001, 0x00002081, 0x00002081, 0x00000080,
	0x00802081, 0x00000081, 0x00000001, 0x00002000,
	0x00800001, 0x00002001, 0x00802080, 0x00800081,
	0x00002001, 0x00002080, 0x00800000, 0x00802001,
	0x00000080, 0x00800000, 0x00002000, 0x00802080
];

const SB5 = [
	0x00000100, 0x02080100, 0x02080000, 0x42000100,
	0x00080000, 0x00000100, 0x40000000, 0x02080000,
	0x40080100, 0x00080000, 0x02000100, 0x40080100,
	0x42000100, 0x42080000, 0x00080100, 0x40000000,
	0x02000000, 0x40080000, 0x40080000, 0x00000000,
	0x40000100, 0x42080100, 0x42080100, 0x02000100,
	0x42080000, 0x40000100, 0x00000000, 0x42000000,
	0x02080100, 0x02000000, 0x42000000, 0x00080100,
	0x00080000, 0x42000100, 0x00000100, 0x02000000,
	0x40000000, 0x02080000, 0x42000100, 0x40080100,
	0x02000100, 0x40000000, 0x42080000, 0x02080100,
	0x40080100, 0x00000100, 0x02000000, 0x42080000,
	0x42080100, 0x00080100, 0x42000000, 0x42080100,
	0x02080000, 0x00000000, 0x40080000, 0x42000000,
	0x00080100, 0x02000100, 0x40000100, 0x00080000,
	0x00000000, 0x40080000, 0x02080100, 0x40000100
];

const SB6 = [
	0x20000010, 0x20400000, 0x00004000, 0x20404010,
	0x20400000, 0x00000010, 0x20404010, 0x00400000,
	0x20004000, 0x00404010, 0x00400000, 0x20000010,
	0x00400010, 0x20004000, 0x20000000, 0x00004010,
	0x00000000, 0x00400010, 0x20004010, 0x00004000,
	0x00404000, 0x20004010, 0x00000010, 0x20400010,
	0x20400010, 0x00000000, 0x00404010, 0x20404000,
	0x00004010, 0x00404000, 0x20404000, 0x20000000,
	0x20004000, 0x00000010, 0x20400010, 0x00404000,
	0x20404010, 0x00400000, 0x00004010, 0x20000010,
	0x00400000, 0x20004000, 0x20000000, 0x00004010,
	0x20000010, 0x20404010, 0x00404000, 0x20400000,
	0x00404010, 0x20404000, 0x00000000, 0x20400010,
	0x00000010, 0x00004000, 0x20400000, 0x00404010,
	0x00004000, 0x00400010, 0x20004010, 0x00000000,
	0x20404000, 0x20000000, 0x00400010, 0x20004010
];

const SB7 = [
	0x00200000, 0x04200002, 0x04000802, 0x00000000,
	0x00000800, 0x04000802, 0x00200802, 0x04200800,
	0x04200802, 0x00200000, 0x00000000, 0x04000002,
	0x00000002, 0x04000000, 0x04200002, 0x00000802,
	0x04000800, 0x00200802, 0x00200002, 0x04000800,
	0x04000002, 0x04200000, 0x04200800, 0x00200002,
	0x04200000, 0x00000800, 0x00000802, 0x04200802,
	0x00200800, 0x00000002, 0x04000000, 0x00200800,
	0x04000000, 0x00200800, 0x00200000, 0x04000802,
	0x04000802, 0x04200002, 0x04200002, 0x00000002,
	0x00200002, 0x04000000, 0x04000800, 0x00200000,
	0x04200800, 0x00000802, 0x00200802, 0x04200800,
	0x00000802, 0x04000002, 0x04200802, 0x04200000,
	0x00200800, 0x00000000, 0x00000002, 0x04200802,
	0x00000000, 0x00200802, 0x04200000, 0x00000800,
	0x04000002, 0x04000800, 0x00000800, 0x00200002
];

const SB8 = [
	0x10001040, 0x00001000, 0x00040000, 0x10041040,
	0x10000000, 0x10001040, 0x00000040, 0x10000000,
	0x00040040, 0x10040000, 0x10041040, 0x00041000,
	0x10041000, 0x00041040, 0x00001000, 0x00000040,
	0x10040000, 0x10000040, 0x10001000, 0x00001040,
	0x00041000, 0x00040040, 0x10040040, 0x10041000,
	0x00001040, 0x00000000, 0x00000000, 0x10040040,
	0x10000040, 0x10001000, 0x00041040, 0x00040000,
	0x00041040, 0x00040000, 0x10041000, 0x00001000,
	0x00000040, 0x10040040, 0x00001000, 0x00041040,
	0x10001000, 0x00000040, 0x10000040, 0x10040000,
	0x10040040, 0x10000000, 0x00040000, 0x10001040,
	0x00000000, 0x10041040, 0x00040040, 0x10000040,
	0x10040000, 0x10001000, 0x10001040, 0x00000000,
	0x10041040, 0x00041000, 0x00041000, 0x00001040,
	0x00001040, 0x00040040, 0x10000000, 0x10041000
];

function GET_UINT32(b, i) {
    return b[i] << 24 | b[i + 1] << 16 | b[i + 2] << 8 | b[i + 3];
}

function des_main_ks(keyBuffer) {
    let SK = new Array(32);
    let idx = 0;
    let i;
    let X, Y, T;
    X = GET_UINT32(keyBuffer, 0);
    Y = GET_UINT32(keyBuffer, 4);

    /* Permuted Choice 1 */
    T = ((Y >>> 4) ^ X) & 0x0F0F0F0F; X ^= T; Y ^= T << 4;
    T = (Y ^ X) & 0x10101010; X ^= T; Y ^= T;

	X =   (LHs[ (X	  ) & 0xF] << 3) | (LHs[ (X >>>  8) & 0xF ] << 2)
		| (LHs[ (X >>> 16) & 0xF] << 1) | (LHs[ (X >>> 24) & 0xF ]	 )
		| (LHs[ (X >>>  5) & 0xF] << 7) | (LHs[ (X >>> 13) & 0xF ] << 6)
		| (LHs[ (X >>> 21) & 0xF] << 5) | (LHs[ (X >>> 29) & 0xF ] << 4);

	Y =   (RHs[ (Y >>>  1) & 0xF] << 3) | (RHs[ (Y >>>  9) & 0xF ] << 2)
		| (RHs[ (Y >>> 17) & 0xF] << 1) | (RHs[ (Y >>> 25) & 0xF ]	 )
		| (RHs[ (Y >>>  4) & 0xF] << 7) | (RHs[ (Y >>> 12) & 0xF ] << 6)
		| (RHs[ (Y >>> 20) & 0xF] << 5) | (RHs[ (Y >>> 28) & 0xF ] << 4);

	X &= 0x0FFFFFFF;
	Y &= 0x0FFFFFFF;

	/* calculate subkeys */

	for( i = 0; i < 16; i++ )
	{
		if( i < 2 || i == 8 || i == 15 )
		{
			X = ((X <<  1) | (X >>> 27)) & 0x0FFFFFFF;
			Y = ((Y <<  1) | (Y >>> 27)) & 0x0FFFFFFF;
		}
		else
		{
			X = ((X <<  2) | (X >>> 26)) & 0x0FFFFFFF;
			Y = ((Y <<  2) | (Y >>> 26)) & 0x0FFFFFFF;
		}

		SK[idx++] =   ((X <<  4) & 0x24000000) | ((X << 28) & 0x10000000)
				| ((X << 14) & 0x08000000) | ((X << 18) & 0x02080000)
				| ((X <<  6) & 0x01000000) | ((X <<  9) & 0x00200000)
				| ((X >>>  1) & 0x00100000) | ((X << 10) & 0x00040000)
				| ((X <<  2) & 0x00020000) | ((X >>> 10) & 0x00010000)
				| ((Y >>> 13) & 0x00002000) | ((Y >>>  4) & 0x00001000)
				| ((Y <<  6) & 0x00000800) | ((Y >>>  1) & 0x00000400)
				| ((Y >>> 14) & 0x00000200) | ((Y	  ) & 0x00000100)
				| ((Y >>>  5) & 0x00000020) | ((Y >>> 10) & 0x00000010)
				| ((Y >>>  3) & 0x00000008) | ((Y >>> 18) & 0x00000004)
				| ((Y >>> 26) & 0x00000002) | ((Y >>> 24) & 0x00000001);

        SK[idx++] =   ((X << 15) & 0x20000000) | ((X << 17) & 0x10000000)
				| ((X << 10) & 0x08000000) | ((X << 22) & 0x04000000)
				| ((X >>>  2) & 0x02000000) | ((X <<  1) & 0x01000000)
				| ((X << 16) & 0x00200000) | ((X << 11) & 0x00100000)
				| ((X <<  3) & 0x00080000) | ((X >>>  6) & 0x00040000)
				| ((X << 15) & 0x00020000) | ((X >>>  4) & 0x00010000)
				| ((Y >>>  2) & 0x00002000) | ((Y <<  8) & 0x00001000)
				| ((Y >>> 14) & 0x00000808) | ((Y >>>  9) & 0x00000400)
				| ((Y	  ) & 0x00000200) | ((Y <<  7) & 0x00000100)
				| ((Y >>>  7) & 0x00000020) | ((Y >>>  3) & 0x00000011)
				| ((Y <<  2) & 0x00000004) | ((Y >>> 21) & 0x00000002);
    }
    return SK;
}

function des_key(keyBuffer) {
    if (keyBuffer.length !== 8) {
        cc.error('Invalid key size, need 8 bytes');
    }

    return des_main_ks(keyBuffer);
}

function des_crypt(SK, input, instart, output, ostart) {
    let X, Y, T;
    X = GET_UINT32(input, instart);
    Y = GET_UINT32(input, instart + 4);

    T = ((X >>>  4) ^ Y) & 0x0F0F0F0F; Y ^= T; X ^= (T <<  4);
	T = ((X >>> 16) ^ Y) & 0x0000FFFF; Y ^= T; X ^= (T << 16);
	T = ((Y >>>  2) ^ X) & 0x33333333; X ^= T; Y ^= (T <<  2);
	T = ((Y >>>  8) ^ X) & 0x00FF00FF; X ^= T; Y ^= (T <<  8);
	Y = ((Y << 1) | (Y >>> 31)) & 0xFFFFFFFF;
	T = (X ^ Y) & 0xAAAAAAAA; Y ^= T; X ^= T;
    X = ((X << 1) | (X >>> 31)) & 0xFFFFFFFF;
    
    let idx = 0;
    T = SK[idx++] ^ Y;
	X ^= SB8[ (T	  ) & 0x3F ] ^
		 SB6[ (T >>>  8) & 0x3F ] ^
		 SB4[ (T >>> 16) & 0x3F ] ^
         SB2[ (T >>> 24) & 0x3F ];

    T = SK[idx++] ^ ((Y << 28) | (Y >>> 4));
	X ^= SB7[ (T	  ) & 0x3F ] ^
		 SB5[ (T >>>  8) & 0x3F ] ^
		 SB3[ (T >>> 16) & 0x3F ] ^
         SB1[ (T >>> 24) & 0x3F ];
         
    T = SK[idx++] ^ X;
	Y ^= SB8[ (T	  ) & 0x3F ] ^
		 SB6[ (T >>>  8) & 0x3F ] ^
		 SB4[ (T >>> 16) & 0x3F ] ^
		 SB2[ (T >>> 24) & 0x3F ];

	T = SK[idx++] ^ ((X << 28) | (X >>> 4));
	Y ^= SB7[ (T	  ) & 0x3F ] ^
		 SB5[ (T >>>  8) & 0x3F ] ^
		 SB3[ (T >>> 16) & 0x3F ] ^
         SB1[ (T >>> 24) & 0x3F ];
         
         T = SK[idx++] ^ Y;
	X ^= SB8[ (T	  ) & 0x3F ] ^
		 SB6[ (T >>>  8) & 0x3F ] ^
		 SB4[ (T >>> 16) & 0x3F ] ^
		 SB2[ (T >>> 24) & 0x3F ];

	T = SK[idx++] ^ ((Y << 28) | (Y >>> 4));
	X ^= SB7[ (T	  ) & 0x3F ] ^
		 SB5[ (T >>>  8) & 0x3F ] ^
		 SB3[ (T >>> 16) & 0x3F ] ^
         SB1[ (T >>> 24) & 0x3F ];
         
    T = SK[idx++] ^ X;
	Y ^= SB8[ (T	  ) & 0x3F ] ^
		 SB6[ (T >>>  8) & 0x3F ] ^
		 SB4[ (T >>> 16) & 0x3F ] ^
		 SB2[ (T >>> 24) & 0x3F ];

	T = SK[idx++] ^ ((X << 28) | (X >>> 4));
	Y ^= SB7[ (T	  ) & 0x3F ] ^
		 SB5[ (T >>>  8) & 0x3F ] ^
		 SB3[ (T >>> 16) & 0x3F ] ^
         SB1[ (T >>> 24) & 0x3F ];
         
         T = SK[idx++] ^ Y;
	X ^= SB8[ (T	  ) & 0x3F ] ^
		 SB6[ (T >>>  8) & 0x3F ] ^
		 SB4[ (T >>> 16) & 0x3F ] ^
		 SB2[ (T >>> 24) & 0x3F ];

	T = SK[idx++] ^ ((Y << 28) | (Y >>> 4));
	X ^= SB7[ (T	  ) & 0x3F ] ^
		 SB5[ (T >>>  8) & 0x3F ] ^
		 SB3[ (T >>> 16) & 0x3F ] ^
         SB1[ (T >>> 24) & 0x3F ];
         
    T = SK[idx++] ^ X;
	Y ^= SB8[ (T	  ) & 0x3F ] ^
		 SB6[ (T >>>  8) & 0x3F ] ^
		 SB4[ (T >>> 16) & 0x3F ] ^
		 SB2[ (T >>> 24) & 0x3F ];

	T = SK[idx++] ^ ((X << 28) | (X >>> 4));
	Y ^= SB7[ (T	  ) & 0x3F ] ^
		 SB5[ (T >>>  8) & 0x3F ] ^
		 SB3[ (T >>> 16) & 0x3F ] ^
         SB1[ (T >>> 24) & 0x3F ];
         
         T = SK[idx++] ^ Y;
	X ^= SB8[ (T	  ) & 0x3F ] ^
		 SB6[ (T >>>  8) & 0x3F ] ^
		 SB4[ (T >>> 16) & 0x3F ] ^
		 SB2[ (T >>> 24) & 0x3F ];

	T = SK[idx++] ^ ((Y << 28) | (Y >>> 4));
	X ^= SB7[ (T	  ) & 0x3F ] ^
		 SB5[ (T >>>  8) & 0x3F ] ^
		 SB3[ (T >>> 16) & 0x3F ] ^
         SB1[ (T >>> 24) & 0x3F ];
         
    T = SK[idx++] ^ X;
	Y ^= SB8[ (T	  ) & 0x3F ] ^
		 SB6[ (T >>>  8) & 0x3F ] ^
		 SB4[ (T >>> 16) & 0x3F ] ^
		 SB2[ (T >>> 24) & 0x3F ];

	T = SK[idx++] ^ ((X << 28) | (X >>> 4));
	Y ^= SB7[ (T	  ) & 0x3F ] ^
		 SB5[ (T >>>  8) & 0x3F ] ^
		 SB3[ (T >>> 16) & 0x3F ] ^
         SB1[ (T >>> 24) & 0x3F ];
         
         T = SK[idx++] ^ Y;
	X ^= SB8[ (T	  ) & 0x3F ] ^
		 SB6[ (T >>>  8) & 0x3F ] ^
		 SB4[ (T >>> 16) & 0x3F ] ^
		 SB2[ (T >>> 24) & 0x3F ];

	T = SK[idx++] ^ ((Y << 28) | (Y >>> 4));
	X ^= SB7[ (T	  ) & 0x3F ] ^
		 SB5[ (T >>>  8) & 0x3F ] ^
		 SB3[ (T >>> 16) & 0x3F ] ^
         SB1[ (T >>> 24) & 0x3F ];
         
    T = SK[idx++] ^ X;
	Y ^= SB8[ (T	  ) & 0x3F ] ^
		 SB6[ (T >>>  8) & 0x3F ] ^
		 SB4[ (T >>> 16) & 0x3F ] ^
		 SB2[ (T >>> 24) & 0x3F ];

	T = SK[idx++] ^ ((X << 28) | (X >>> 4));
	Y ^= SB7[ (T	  ) & 0x3F ] ^
		 SB5[ (T >>>  8) & 0x3F ] ^
		 SB3[ (T >>> 16) & 0x3F ] ^
         SB1[ (T >>> 24) & 0x3F ];
         
         T = SK[idx++] ^ Y;
	X ^= SB8[ (T	  ) & 0x3F ] ^
		 SB6[ (T >>>  8) & 0x3F ] ^
		 SB4[ (T >>> 16) & 0x3F ] ^
		 SB2[ (T >>> 24) & 0x3F ];

	T = SK[idx++] ^ ((Y << 28) | (Y >>> 4));
	X ^= SB7[ (T	  ) & 0x3F ] ^
		 SB5[ (T >>>  8) & 0x3F ] ^
		 SB3[ (T >>> 16) & 0x3F ] ^
         SB1[ (T >>> 24) & 0x3F ];
         
    T = SK[idx++] ^ X;
	Y ^= SB8[ (T	  ) & 0x3F ] ^
		 SB6[ (T >>>  8) & 0x3F ] ^
		 SB4[ (T >>> 16) & 0x3F ] ^
		 SB2[ (T >>> 24) & 0x3F ];

	T = SK[idx++] ^ ((X << 28) | (X >>> 4));
	Y ^= SB7[ (T	  ) & 0x3F ] ^
		 SB5[ (T >>>  8) & 0x3F ] ^
		 SB3[ (T >>> 16) & 0x3F ] ^
         SB1[ (T >>> 24) & 0x3F ];
         
         T = SK[idx++] ^ Y;
	X ^= SB8[ (T	  ) & 0x3F ] ^
		 SB6[ (T >>>  8) & 0x3F ] ^
		 SB4[ (T >>> 16) & 0x3F ] ^
		 SB2[ (T >>> 24) & 0x3F ];

	T = SK[idx++] ^ ((Y << 28) | (Y >>> 4));
	X ^= SB7[ (T	  ) & 0x3F ] ^
		 SB5[ (T >>>  8) & 0x3F ] ^
		 SB3[ (T >>> 16) & 0x3F ] ^
         SB1[ (T >>> 24) & 0x3F ];
         
    T = SK[idx++] ^ X;
	Y ^= SB8[ (T	  ) & 0x3F ] ^
		 SB6[ (T >>>  8) & 0x3F ] ^
		 SB4[ (T >>> 16) & 0x3F ] ^
		 SB2[ (T >>> 24) & 0x3F ];

	T = SK[idx++] ^ ((X << 28) | (X >>> 4));
	Y ^= SB7[ (T	  ) & 0x3F ] ^
		 SB5[ (T >>>  8) & 0x3F ] ^
		 SB3[ (T >>> 16) & 0x3F ] ^
         SB1[ (T >>> 24) & 0x3F ];
         
         T = SK[idx++] ^ Y;
	X ^= SB8[ (T	  ) & 0x3F ] ^
		 SB6[ (T >>>  8) & 0x3F ] ^
		 SB4[ (T >>> 16) & 0x3F ] ^
		 SB2[ (T >>> 24) & 0x3F ];

	T = SK[idx++] ^ ((Y << 28) | (Y >>> 4));
	X ^= SB7[ (T	  ) & 0x3F ] ^
		 SB5[ (T >>>  8) & 0x3F ] ^
		 SB3[ (T >>> 16) & 0x3F ] ^
         SB1[ (T >>> 24) & 0x3F ];
         
    T = SK[idx++] ^ X;
	Y ^= SB8[ (T	  ) & 0x3F ] ^
		 SB6[ (T >>>  8) & 0x3F ] ^
		 SB4[ (T >>> 16) & 0x3F ] ^
		 SB2[ (T >>> 24) & 0x3F ];

	T = SK[idx++] ^ ((X << 28) | (X >>> 4));
	Y ^= SB7[ (T	  ) & 0x3F ] ^
		 SB5[ (T >>>  8) & 0x3F ] ^
		 SB3[ (T >>> 16) & 0x3F ] ^
         SB1[ (T >>> 24) & 0x3F ];
         
    Y = ((Y << 31) | (Y >>> 1)) & 0xFFFFFFFF;
    T = (Y ^ X) & 0xAAAAAAAA; Y ^= T; X ^= T;
    X = ((X << 31) | (X >>> 1)) & 0xFFFFFFFF;
    T = ((X >>>  8) ^ Y) & 0x00FF00FF; Y ^= T; X ^= (T <<  8);
    T = ((X >>>  2) ^ Y) & 0x33333333; Y ^= T; X ^= (T <<  2);
    T = ((Y >>> 16) ^ X) & 0x0000FFFF; X ^= T; Y ^= (T << 16);
    T = ((Y >>>  4) ^ X) & 0x0F0F0F0F; X ^= T; Y ^= (T <<  4);

    output[ostart] = ( ((Y >>> 24) & 0x000000FF) >>> 0 );
	output[ostart + 1] = ( ((Y >>> 16) & 0x000000FF) >>> 0 );
	output[ostart + 2] = ( ((Y >>> 8) & 0x000000FF) >>> 0 );
    output[ostart + 3] = ( ((Y) & 0x000000FF)	   );
    
    output[ostart + 4] = ( ((X >>> 24) & 0x000000FF) >>> 0 );
	output[ostart + 5] = ( ((X >>> 16) & 0x000000FF) >>> 0 );
	output[ostart + 6] = ( ((X >>> 8) & 0x000000FF) >>> 0 );
    output[ostart + 7] = ( ((X ) & 0x000000FF) >>> 0 );
}

/**
 * des加密.
 * @param {Uint8Array} 8字节的key数组
 * @param {Uint8Array} 需要加密内容数组
 * @returns {Uint8Array} 加密后的数组
 */
crypt.desencode = function (keyBuffer, contentBuffer) {
    let SK = des_key(keyBuffer);
    let textsz = contentBuffer.length;
    let chunksz = (textsz + 8) & ~7;

    let buffer = new Uint8Array(chunksz);

    let i;
    for (i = 0; i < textsz - 7; i += 8) {
        des_crypt(SK, contentBuffer, i, buffer, i);
    }
    let bytes = textsz - i;
    let tail = new Array(8);
    let j;
    for (j = 0; j < 8; j++) {
        if (j < bytes) {
            tail[j] = contentBuffer[i + j];
        }
        else if (j == bytes) {
            tail[j] = 0x80;
        }
        else {
            tail[j] = 0;
        }
    }

    des_crypt(SK, tail, 0, buffer, i);

    return buffer;
}

/**
 * des解密.
 * @param {Uint8Array} 8字节的key数组
 * @param {Uint8Array} 已加密的内容数组
 * @returns {Uint8Array} 解密后的数组
 */
crypt.desdecode = function (keyBuffer, encodedBuffer) {
    let ESK = des_key(keyBuffer);
    let SK = new Array(32);
    let i;
    for (i = 0; i < 32; i += 2) {
        SK[i] = ESK[30 - i];
        SK[i + 1] = ESK[31 - i];
    }

    let textsz = encodedBuffer.length;
    if ((textsz & 7) > 0 || textsz === 0) {
        cc.error("Invalid des crypt text length");
    }

    var buffer = new Uint8Array(textsz);

    for (i = 0; i < textsz; i += 8) {
        des_crypt(SK, encodedBuffer, i, buffer, i);
    }
    let padding = 1;
    for (i = textsz - 1; i >= textsz - 8; i--) {
        if (buffer[i] === 0) {
            padding++;
        }
        else if (buffer[i] === 0x80) {
            break;
        }
        else {
            cc.error("Invalid des crypt text");
        }
    }
    if (padding > 8) {
        cc.error("Invalid des crypt text");
    }

	if (padding > 8) {
		cc.error("Invalid des crypt text");
    }

    return buffer.slice(0, textsz - padding);
}

// Constants are the integer part of the sines of integers (in radians) * 2^32.
const k = [
    0xd76aa478, 0xe8c7b756, 0x242070db, 0xc1bdceee ,
    0xf57c0faf, 0x4787c62a, 0xa8304613, 0xfd469501 ,
    0x698098d8, 0x8b44f7af, 0xffff5bb1, 0x895cd7be ,
    0x6b901122, 0xfd987193, 0xa679438e, 0x49b40821 ,
    0xf61e2562, 0xc040b340, 0x265e5a51, 0xe9b6c7aa ,
    0xd62f105d, 0x02441453, 0xd8a1e681, 0xe7d3fbc8 ,
    0x21e1cde6, 0xc33707d6, 0xf4d50d87, 0x455a14ed ,
    0xa9e3e905, 0xfcefa3f8, 0x676f02d9, 0x8d2a4c8a ,
    0xfffa3942, 0x8771f681, 0x6d9d6122, 0xfde5380c ,
    0xa4beea44, 0x4bdecfa9, 0xf6bb4b60, 0xbebfbc70 ,
    0x289b7ec6, 0xeaa127fa, 0xd4ef3085, 0x04881d05 ,
    0xd9d4d039, 0xe6db99e5, 0x1fa27cf8, 0xc4ac5665 ,
    0xf4292244, 0x432aff97, 0xab9423a7, 0xfc93a039 ,
    0x655b59c3, 0x8f0ccc92, 0xffeff47d, 0x85845dd1 ,
    0x6fa87e4f, 0xfe2ce6e0, 0xa3014314, 0x4e0811a1 ,
    0xf7537e82, 0xbd3af235, 0x2ad7d2bb, 0xeb86d391 ];
     
// r specifies the per-round shift amounts
const r = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22,
                        5,  9, 14, 20, 5,  9, 14, 20, 5,  9, 14, 20, 5,  9, 14, 20,
                        4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,
                        6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21];

function LEFTROTATE(x, c) {
    return (x << c) | (x >>> (32 - c))
}

function digest_md5(w, result) {
    let a, b, c, d, f, g, temp;
    let i;
 
    a = 0x67452301;
    b = 0xefcdab89;
    c = 0x98badcfe;
    d = 0x10325476;

	for(i = 0; i<64; i++) {
		if (i < 16) {
			f = (b & c) | ((~b) & d);
			g = i;
		} else if (i < 32) {
			f = (d & b) | ((~d) & c);
			g = (5*i + 1) % 16;
		} else if (i < 48) {
			f = b ^ c ^ d;
			g = (3*i + 5) % 16; 
		} else {
			f = c ^ (b | (~d));
			g = (7*i) % 16;
		}

		temp = d;
		d = c;
		c = b;
		b = b + LEFTROTATE((a + f + k[i] + w[g]), r[i]);
		a = temp;
    }

    result[0] = a;
    result[1] = b;
    result[2] = c;
    result[3] = d;
}

function hmac(x, y, result) {
    let w = [], r = [];
    let i;
    for (i = 0; i < 16; i += 4) {
        w[i] = x[1];
        w[i + 1] = x[0];
        w[i + 2] = y[1];
        w[i + 3] = y[0];
    }

    digest_md5(w, r);

    result[0] = r[2] ^ r[3];
    result[1] = r[0] ^ r[1];
}

/**
 * hmac.
 * @param {Uint8Array} 8字节的key数组
 * @param {Uint8Array} 8字节的key数组
 * @returns {Uint8Array} hmac后的数组
 */
crypt.hmac64 = function (key1Buffer, key2Buffer) {
    if (key1Buffer.length !== 8) {
        cc.error("Invalid key length");
    }
    if (key2Buffer.length !== 8) {
        cc.error("Invalid key length");
    }

    let xx = [], yy = [];
    xx[0] = key1Buffer[0] | key1Buffer[1]<<8 | key1Buffer[2]<<16 | key1Buffer[3]<<24;
    xx[1] = key1Buffer[4] | key1Buffer[5]<<8 | key1Buffer[6]<<16 | key1Buffer[7]<<24;
    yy[0] = key2Buffer[0] | key2Buffer[1]<<8 | key2Buffer[2]<<16 | key2Buffer[3]<<24;
    yy[1] = key2Buffer[4] | key2Buffer[5]<<8 | key2Buffer[6]<<16 | key2Buffer[7]<<24;

    let result = [];
    hmac(xx, yy, result);

    let tmp = new Uint8Array(8);
	tmp[0] = result[0] & 0xff;
	tmp[1] = (result[0] >>> 8 )& 0xff;
	tmp[2] = (result[0] >>> 16 )& 0xff;
	tmp[3] = (result[0] >>> 24 )& 0xff;
	tmp[4] = result[1] & 0xff;
	tmp[5] = (result[1] >>> 8 )& 0xff;
	tmp[6] = (result[1] >>> 16 )& 0xff;
    tmp[7] = (result[1] >>> 24 )& 0xff;
    return tmp;
}

//const P = 0xffffffffffffffc5;
//const G = 5;
const P = new Long(0xffffffc5, 0xffffffff, true);
const G = new Long(5, 0, true);

function mul_mod_p(a, b) {
	let m = Long.UZERO;
	while(!b.isZero()) {
        if (!b.and(1).isZero()) {
            let t = P.subtract(a);
            if (m.greaterThanOrEqual(t)) {
                m = m.subtract(t);
			} else {
                m = m.add(a);
			}
        }
        if (a.greaterThanOrEqual(P.subtract(a))) {
            a = a.multiply(2).subtract(P);
		} else {
            a = a.multiply(2);
        }
        b = b.shiftRightUnsigned(1);
    }
	return m;
}

function pow_mod_p(a, b) {
	if (b.equals(1)) {
		return a;
	}
    var t = pow_mod_p(a, b.shiftRightUnsigned(1));
    t = mul_mod_p(t,t);
	if (b.modulo(2).isOdd()) {
		t = mul_mod_p(t, a);
    }
	return t;
}

function powmodp(a, b) {
    if (a.greaterThan(P)) {
        a = a.modulo(P);
    }
    return pow_mod_p(a,b);
}

/**
 * Diffie Hellman密钥交换.
 * @param {Uint8Array} 8字节的key数组
 * @returns {Uint8Array} 交换后的数组
 */
crypt.dhexchange = function(keyBuffer) {
    let sz = keyBuffer.length;
    if (sz !== 8) {
        cc.error("Invalid key length");
    }

    let xx = [];
    xx[0] = keyBuffer[0] | keyBuffer[1]<<8 | keyBuffer[2]<<16 | keyBuffer[3]<<24;
    xx[1] = keyBuffer[4] | keyBuffer[5]<<8 | keyBuffer[6]<<16 | keyBuffer[7]<<24;

    let x64 = new Long(xx[0], xx[1], true);
    if (x64.isZero()) {
        cc.error("Can't be 0");
    }

    let r = powmodp(G,	x64);
    return r.toBytesLE();
}

/**
 * 生成Diffie Hellman密钥.
 * @param {Uint8Array} 8字节的key数组
 * @param {Uint8Array} 8字节的key数组
 * @returns {Uint8Array} 密钥的数组
 */
crypt.dhsecret = function (key1Buffer, key2Buffer) {
    if (key1Buffer.length !== 8) {
        cc.error("Invalid key length");
    }
    if (key2Buffer.length !== 8) {
        cc.error("Invalid key length");
    }

    let xx = [], yy = [];
    xx[0] = key1Buffer[0] | key1Buffer[1]<<8 | key1Buffer[2]<<16 | key1Buffer[3]<<24;
    xx[1] = key1Buffer[4] | key1Buffer[5]<<8 | key1Buffer[6]<<16 | key1Buffer[7]<<24;
    yy[0] = key2Buffer[0] | key2Buffer[1]<<8 | key2Buffer[2]<<16 | key2Buffer[3]<<24;
    yy[1] = key2Buffer[4] | key2Buffer[5]<<8 | key2Buffer[6]<<16 | key2Buffer[7]<<24;

    let xxx = new Long(xx[0], xx[1], true);
    let yyy = new Long(yy[0], yy[1], true);

    if (xxx.isZero() || yyy.isZero()) {
        cc.error("Can't be 0");
    }

    let r = powmodp(xxx, yyy);
    return r.toBytesLE();
}

function Hash (uint8Arr) {
    let key = new Uint8Array(8);
    let djb_hash = 5381;
    let js_hash = 1315423911;

    let i;
    for (i=0;i<uint8Arr.length;i++) {
        let c = uint8Arr[i];
        djb_hash += (djb_hash << 5) + c;
        js_hash ^= ((js_hash << 5) + c + (js_hash >>> 2));
    }

    key[0] = djb_hash & 0xff;
    key[1] = (djb_hash >>> 8) & 0xff;
    key[2] = (djb_hash >>> 16) & 0xff;
    key[3] = (djb_hash >>> 24) & 0xff;

    key[4] = js_hash & 0xff;
    key[5] = (js_hash >>> 8) & 0xff;
    key[6] = (js_hash >>> 16) & 0xff;
    key[7] = (js_hash >>> 24) & 0xff;

    return key;
}

/**
 * hash key.
 * @param {Uint8Array}
 * @returns {Uint8Array} hash后的数组
 */
crypt.hashkey = function (contentBuffer) {
    return Hash(contentBuffer);
}

//var benc = crypt.base64encode("abc123中文测试");
//console.log(benc);
//console.log(crypt.base64decode(benc));
//console.log(crypt.base64decode(crypt.base64encode("中文abc123")));
//var enc = crypt.desencode(crypt.stringToUtf8ByteArray("12345678"), crypt.stringToUtf8ByteArray("123中文123"));
//console.log(enc);
//var dec = crypt.desdecode(crypt.stringToUtf8ByteArray("12345678"), enc);
//console.log(crypt.utf8ByteArrayToString(dec));

module.exports = crypt;