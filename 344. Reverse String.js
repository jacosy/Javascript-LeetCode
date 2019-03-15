var reverseString = function (s) {
    var helper = function (start, end, chars) {
        // base path
        if (start >= end) {
            return;
        }

        // recursive path
        let c = chars[start];
        chars[start] = chars[end];
        chars[end] = c;

        helper(start + 1, end - 1, s);
    }

    helper(0, s.length - 1, s);
};