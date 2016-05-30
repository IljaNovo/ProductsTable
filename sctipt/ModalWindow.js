function ModalWindow(modalFormName) {
    this.modalFormName = modalFormName;
}

ModalWindow.prototype.closeForm = function() {
    $(this.modalFormName)
        .animate({opacity: 0, top: '45%'}, 0,
        function() {
            $(this.modalFormName).css("display", "none");
            $("#overlay").fadeOut(0);
        }.bind(this));
}

ModalWindow.prototype.openForm = function() {
    $('#overlay').fadeIn(10,
        function() {
            $(this.modalFormName)
                .css("display", "block")
				.animate({opacity: 1, top: '50%'}, 0);  
    }.bind(this));
}

ModalWindow.prototype.addOpenEvent = function(formOpenSelector) {
    $(formOpenSelector)
        .click(function(event) {
            event.preventDefault();
            this.openForm();
	           }.bind(this)
    );
}

ModalWindow.prototype.addCloseEvent = function(formCloseSelector) {
    $("#overlay")
        .add(formCloseSelector)
        .click(function() {
        this.closeForm();
        }.bind(this)
    );
}
