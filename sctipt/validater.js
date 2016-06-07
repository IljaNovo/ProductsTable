var validater = (function() {
    
    function addValidateForFields(fields, options) {
        fields.forEach(function(item, i, fields) {
            if (item.typeControl === "text") {
                addFocus(item, options);   
            }
        });        
    }
    
    function valide(fieldControl) {
        var result = false;
        fieldControl.patterns.forEach(function(item, i, patterns) {
            result = result || item.test($(fieldControl.selector).val());
        });
        return result;
    }
    
    function addFocus(fieldControl, options) {
        $(fieldControl.selector).focusout(function() {
            if (!valide(fieldControl)) {
                setErrorBorder(fieldControl, options);
            } else {
                setDefaultBorder(fieldControl, options);
            }
        }.bind(this));
    }
    
    function setDefaultBorder(fieldControl, options) {
        $(fieldControl.selector)
            .css("border-width", "1px")
            .css("border-color", (options.defaultBorder || "#A9A9A9"))
            .css("border-style", "solid");
        if (fieldControl.func !== undefined) {
            fieldControl.func();
        }
    }
    
    function setErrorBorder(fieldControl, options) {
        $(fieldControl.selector)
            .css("border-width", "1px")
            .css("border-color", (options.errorBorder || "red"))
            .css("border-style", "solid");
    }
    
    function valideAllFields(fields, options) {
        var result = true;
        for (var i = 0; i < fields.length; ++i) {
            if (fields[i].typeControl !== "text") {
                continue;  
            } 
            if (!valide(fields[i])) {
                setErrorBorder(fields[i], options);
                result = result && false;
            } else {
                setDefaultBorder(fields[i], options);
                result = result && true;
            }
        }
        return result;
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
        addValidateForFields: addValidateForFields,
        valideAllFields: valideAllFields
    };
})();
