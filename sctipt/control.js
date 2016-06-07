function Control(typeControl, selector, patterns, func) {
    this.typeControl = typeControl;
    this.selector = selector;
    if (patterns !== undefined || patterns !== null) {
        this.patterns = patterns;
    }
    if (func !== undefined) {
        func();
    }
}
