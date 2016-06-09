function ModalWindow(modalFormName) {
    this.modalFormName = modalFormName;
    this.clickEvent = null;
}

ModalWindow.prototype.closeForm = function(additionFunk) {
    $(this.modalFormName)
        .animate({opacity: 0, top: '45%'}, 0,
        function() {
            $(this.modalFormName).css("display", "none");
            $(".overlay").fadeOut(0);
        }.bind(this));
    if (additionFunk) {
        additionFunk();
    }
}

ModalWindow.prototype.openForm = function(additionFunk) {
    $('.overlay').fadeIn(10,
        function() {
            $(this.modalFormName)
                .css("display", "block")
				.animate({opacity: 1, top: '50%'}, 0); 
        if (additionFunk) {
            additionFunk();
        }
    }.bind(this));
}

ModalWindow.prototype.addOpenEvent = function(formOpenSelector, additionFunk) {
    $(formOpenSelector)
        .click(function(event) {
            this.clickEvent = event;
            event.preventDefault();
            this.openForm();
            if (additionFunk) {
                additionFunk();
            }
	    }.bind(this)
    );
}

ModalWindow.prototype.addCloseEvent = function(formCloseSelector, additionFunk) {
    $(".overlay")
        .add(formCloseSelector)
        .click(function() {
        if (additionFunk) {
            additionFunk();
        }
        this.closeForm();
        }.bind(this)
    );
}
