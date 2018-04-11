/*!
 * LRC lyric syntax highlight for Prism.js
 *
 * @author Jack Cherng <jfcherng@gmail.com>
 * @version 1.0.0
 * @license MIT
 * @see https://en.wikipedia.org/wiki/LRC_(file_format)
 */
Prism.languages.lrc = {
    'timestamp': {
        pattern: /\[[0-9]+:[0-9]+.[0-9]+\]/,
        alias: 'string'
    },
    'timestamp-ext': {
        pattern: /<[0-9]+:[0-9]+.[0-9]+>/,
        alias: 'string'
    },
    'attribute': {
        pattern: /\[[a-zA-Z]+:[^\]]*\]/,
        alias: 'constant'
    }
};
