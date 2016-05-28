function DeleteModalWindow(modalFormName) {
    ModalWindow.apply(this, modalFormName);
}

DeleteModalWindow.prototype = Object.create(ModalWindow.prototype);
DeleteModalWindow.prototype.constructor = DeleteModalWindow;
