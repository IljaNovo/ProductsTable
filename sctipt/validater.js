var validater = (function() {
    
    function validateName(name) {
        var validCode = /^([a-z]|[A-Z]|[А-Я]|[а-я]){1,15}$/;
        return validCode.test(name);
    }
    function validateEmail(email) {
        var validCode = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
        return validCode.test(email);
    }
    function validateCount(count) {
        var validCode = /^[\d]+$/;
        return validCode.test(count);
    }
    function validatePrice(price) {
        var validCodeNumber = /^[\d]+(\.[\d]{2}){1}$/;
        var validCodeDollars = /^\$[0-9]{1,3}([\,]{1}[0-9]{3})*\.[0-9]{2}$/;
        return validCodeNumber.test(price) || validCodeDollars.test(price);
    }
    return {
        validateName: validateName,
        validateEmail: validateEmail,
        validateCount: validateCount,
        validatePrice: validatePrice
    };
})();
