function addEventOpenForm(nameModalForm, selectorButton) {
    $(selectorButton)
        .click(function(event) {
        event.preventDefault();
        $('#overlay').fadeIn(10, 
		 	function() {
				$(nameModalForm)
                    .css("display", "block")
					.animate({opacity: 1, top: '50%'}, 0);  
		});
	});
}
	
function addEventCloseModal(nameModalForm, selector) {
    $("#overlay")
        .add(selector)
        .click(function() {
            closeForm(nameModalForm);
    });
}

function closeForm (nameModalForm) {
    $(nameModalForm)
        .animate({opacity: 0, top: '45%'}, 0,
        function() {
            $(this).css("display", "none");
            $("#overlay").fadeOut(0);
        }
    );
}


