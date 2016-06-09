var parserID = (function() {
    function parse(className) {
        var index = className.length - 1;
        var answer = "";
        while(index >= 0 && /\d/.test(className[index])) {
            answer += className[index];
            --index;
        }
        return revers(answer);
    }
    
    function revers(str) {
        var answer = "";
        for (var i = str.length - 1; i >= 0; --i) {
            answer += str[i];
        }
        return answer;
    }
    
    return {
        parse: parse    
    };
})();