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
        if (fieldControl.additionElem !== undefined) {
            $(fieldControl.additionElem)
                .css("display", "none")
                .css("color", "red");
        }
        if (fieldControl.func !== undefined) {
            fieldControl.func();
        }
    }
    
    function setErrorBorder(fieldControl, options) {
        $(fieldControl.selector)
            .css("border-width", "1px")
            .css("border-color", (options.errorBorder || "red"))
            .css("border-style", "solid");
        if (fieldControl.additionElem !== undefined) {
            $(fieldControl.additionElem)
                .css("display", "inline")
                .css("color", "red");
        }
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

    return {
        addValidateForFields: addValidateForFields,
        valideAllFields: valideAllFields
    };
})();
