function Control(typeControl, selector, patterns) {
    this.typeControl = typeControl;
    this.selector = selector;
    if (patterns !== undefined || patterns !== null) {
        this.patterns = patterns;
    }
}