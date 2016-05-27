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
        var validCode = /^([\d])+(\.[\d]{2}){0,1}$/;
        return validCode.test(price);
    }
    return {
        validateName: validateName,
        validateEmail: validateEmail,
        validateCount: validateCount,
        validatePrice: validatePrice
    };
})();
