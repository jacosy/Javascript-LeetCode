/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let dict = new Map([[1,1],[2,1],[3,2],[4,3]]);
    
    function fib(N){
        if(N <= 0){
            return 0;
        }
        else if(dict.has(N)) {
            return dict.get(N);
        }
        else {
            const result = fib(N-1) + fib(N-2);
            dict.set(N, result);
            return result;
        }
    }
    
    return fib(N);
};