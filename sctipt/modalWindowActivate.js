$(document).ready(function() {
    var nameForm = "";
    var nameClose = "#delete_modal_close";
    
    $('input[type="submit"][name="edit"]')
        .add('input[type="submit"][name="delete"]')
        .add('input[type="submit"][name="add"]')
        .click(function(event) {
        event.preventDefault();
        
        switch(event.target.name) {
            case "edit":
                nameForm = "#edit_modal_form";
                nameClose = "#edit_modal_close";
                break;
            case "delete":
                nameForm = "#delete_modal_form";
                nameClose = '#delete_modal_close';    
                break;
            case "add":
                nameForm = "#add_new_modal_form";
                nameClose = '#add_new_modal_close';
                break;
        }
        closeGenerate();
        
        $('#overlay').fadeIn(400, 
		 	function() {
				$(nameForm)
                    .css("display", "block")
					.animate({opacity: 1, top: '50%'}, 200);  
		});
	});
	
    
    function closeGenerate() {
	   $("#overlay")
           .add(nameClose)
           .click(function() {
        $(nameForm)
			.animate({opacity: 0, top: '45%'}, 200,
				function() {
					$(this).css("display", "none");
					$("#overlay").fadeOut(400);
				}
			);
	   });
    }
});