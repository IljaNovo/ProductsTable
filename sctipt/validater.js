var validater = (function() {
    
    function addValidateForFields(fields, validatedList, options) {
        for(var key in fields) {
            addFocus(fields[key], options, validatedList[key]);
        }
    }
    
    function valide(field, pattern) {
        return pattern.test($(field).val());   
    }
    
    function addFocus(field, options, pattern) {
        $(field).focusout(function() {
            if (!valide(field, options)) {
                setErrorBorder(field, options);
            } else {
                setDefaultBorder(field, options);
            }
        }.bind(this));
    }
    
    function setDefaultBorder(field, options) {
        var color = options.defaultBorder || "#A9A9A9";
        $(field)
            .css("border-width", "1px")
            .css("border-color", color)
            .css("border-style", "solid");
    }
    
    function setErrorBorder(field, options) {
        var color = options.errorBorder || "red";
        $(field)
            .css("border-width", "1px")
            .css("border-color", color)
            .css("border-style", "solid");
    }
    
//    function validateName(name) {
//        var validCode = /^([a-z]|[A-Z]|[А-Я]|[а-я]){1,15}$/;
//        return validCode.test(name);
//    }
//    function validateEmail(email) {
//        var validCode = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
//        return validCode.test(email);
//    }
//    function validateCount(count) {
//        var validCode = /^[\d]+$/;
//        return validCode.test(count);
//    }
//    function validatePrice(price) {
//        var validCodeNumber = /^[\d]+(\.[\d]{2}){1}$/;
//        var validCodeDollars = /^\$[0-9]{1,3}([\,]{1}[0-9]{3})*\.[0-9]{2}$/;
//        return validCodeNumber.test(price) || validCodeDollars.test(price);
//    }
    return {
        addValidateForFields: addValidateForFields
    };
})();
