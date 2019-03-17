// JavaScript source code

var solution = function (paragraph, banned) {
    let bannedWords = new Set(banned);
    let map = new Map();
    let wordLen = 0;

    for (let i = 0; i < paragraph.length; i++) {
        let charCode = paragraph.charCodeAt(i);
        if (charCode >= 65 && charCode <= 122) {
            wordLen += 1;
        }
        else {
            if (wordLen != 0) {
                helper(i);
            }
        }
    }

    if (wordLen != 0) {
        helper(paragraph.length);
    }

    function helper(endLen) {
        let word = paragraph.substring(endLen - wordLen, endLen).toLowerCase();
        if (bannedWords === null || bannedWords.size === 0 || !bannedWords.has(word)) {
            if (map.has(word)) {
                map.set(word, map.get(word) + 1);
            }
            else {
                map.set(word, 1);
            }
        }
        wordLen = 0;
    }

    let frequency = -1;
    let mostFrequentWord;
    map.forEach((value, key, map) => {
        if (value > frequency) {
            frequency = value;
            mostFrequentWord = key; 
        }
    });

    return mostFrequentWord;
}
