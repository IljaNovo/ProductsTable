function DeleteModalWindow(modalFormName) {
    ModalWindow.apply(this, arguments);
}

DeleteModalWindow.prototype = Object.create(ModalWindow.prototype);
DeleteModalWindow.prototype.constructor = DeleteModalWindow;
