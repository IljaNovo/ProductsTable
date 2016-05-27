var increment = (function () {
    var inc = 0;
    
    function increase() {
        ++inc; 
    }
    
    function reduce() {
        if (inc !== 0) {
            --inc;
        } 
    }
    
    function get() {
        return inc;
    }
    
    function reset() {
        inc = 0;
    }
    
    return {
        increase: increase,
        reduce: reduce,
        get: get,
        reset: reset
    };
})();