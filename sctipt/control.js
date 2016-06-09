function Control(typeControl, selector, patterns, func, additionElem) {
    this.typeControl = typeControl;
    this.selector = selector;
    if (patterns !== undefined || patterns !== null) {
        this.patterns = patterns;
    }
    if (func !== undefined) {
        func();
    }
    if (additionElem !== undefined) {
        this.additionElem = additionElem;
    }
}
