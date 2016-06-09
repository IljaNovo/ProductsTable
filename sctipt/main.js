$(document).ready(function () {
    addDataControlWindowEvents(addDeleteModalWindow());
    addFiterEvents();
    addNameSortEvents();
    addPriseSortEvents();
});
    
function addDeleteModalWindow() {
    var deleteModal = new DeleteModalWindow(".delete_modal_form");
    deleteModal.addCloseEvent(".delete_modal_close");
    deleteModal.addCloseEvent(".no-button");
    deleteModal.addDeleteEvent(".yes-button");
    return deleteModal;
}

function addDataControlWindowEvents(deleteModal) {
    var dataControlModal = new DataControlModalWindow(
        ".data_control_modal_form",
        [
            createProductNameControl(),
            createEmailControl(),
            createProductCountControl(),
            createProductPriceControl()
        ],   
        createButtonControl(),
        {
            color: "red",
            validation: true
        }
    );
    dataControlModal.addOpenEvent(".auxiliary .add");
    dataControlModal.addCloseEvent(".data_control_modal_form .data_control_modal_close", function() {
        dataControlModal.clearFields();
    });
    dataControlModal.addAddingUpdateEvent(deleteModal);
}

function createProductNameControl() {
    return new Control("text",".data_control_modal_form .productName", 
                [
                    /^([a-z]|[A-Z]|[А-Я]|[а-я]){1,15}$/
                ],
                undefined,
                ".data_control_modal_form .nameError"
            );
}
    
function createEmailControl() {
    return new Control("text",".data_control_modal_form .email", 
                [
                    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
                ],
                undefined,
                ".data_control_modal_form .emailError"
            );
}

function createProductCountControl() {
    return new Control("text",".data_control_modal_form .productCount",
                [
                    /^[\d]+$/
                ]        
            );
}

function createProductPriceControl() {
     return new Control("text",".data_control_modal_form .productPrice",
                [
                    /^[\d]+(\.[\d]{2}){1}$/,
                    /^\$[0-9]{1,3}([\,]{1}[0-9]{3})*\.[0-9]{2}$/
                ],
                function () {
                    $(".data_control_modal_form .productPrice").focusout(function() {
                        var field = $(".data_control_modal_form .productPrice");
                        field.val(priceConvert.convertToDollars(field.val()));
                    });
                }
            )
}

function createButtonControl() {
    return new Control("button",".data_control_modal_form .addOrUpdate");
}

function addFiterEvents() {
    $("#main-header input[type='submit'][name='search-products']").click(function() {
        formManager.viewFilterItems($("#main-header input[type='text'][name='filter-field']").val());  
    });
}

function addNameSortEvents() {
    $("#products .img1").click(function() {
        if ($("#products .img1").attr("src") === "image/arrowTop.png") {
            $("#products .img1").attr("src", "image/arrowBottom.png");
            formManager.sortDeskNameForm();
        } else {
            $("#products .img1").attr("src", "image/arrowTop.png");
            formManager.sortAskNameForm();
        }
    });
}

function addPriseSortEvents() {
    $("#products .img2").click(function() {
        if ($("#products .img2").attr("src") === "image/arrowTop.png") {
            $("#products .img2").attr("src", "image/arrowBottom.png");
            formManager.sortDeskPriseForm();
        } else {
            $("#products .img2").attr("src", "image/arrowTop.png");
            formManager.sortAskPriseForm();
        }
    });
}
