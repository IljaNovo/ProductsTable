var priceConvert = (function () {
    function convert(price) {
        var result = "";
        result = categorized(price);
        result = reverse(result);
        result = addRemain(result, price);
        result = "$" + result;
        
        return result;
    }
    
    function categorized(price) {
        var newStr = "";
        var countCategory = 0;
        for (var i = price.length - 4; i >= 0; --i) {
            newStr += price[i];
            ++countCategory;
            if (i > 0 && countCategory === 3) {
                newStr += ",";
            }
        }
        return newStr;
    }
    
    function addRemain(str, price) {
        var newStr = str;
        
        for (var i = price.length - 3; i < price.length; ++i) {
            newStr += price[i];
        }
        return newStr;
    }
    
    function reverse (str) {
        var newStr = "";
        
        for (var i = str.length - 1; i >= 0; --i) {
            newStr += str[i];
        }
        return newStr;
    }
    return {
        convert: convert  
    };
})();
