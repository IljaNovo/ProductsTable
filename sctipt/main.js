$(document).ready(function () {
    addAdditionWindowEvents();
    //addFiterEvents();
    //addNameSortEvents();
    //addPriseSortEvents();
});
    

function addAdditionWindowEvents() {
    var dataControlModal = new DataControlModalWindow(
        ".data_control_modal_form",
        [
            new Control("text",".data_control_modal_form .productName", 
                [
                    /^([a-z]|[A-Z]|[А-Я]|[а-я]){1,15}$/
                ]
            ),
            new Control("text",".data_control_modal_form .email", 
                [
                    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
                ]
            ),
            new Control("text",".data_control_modal_form .productCount",
                [
                    /^[\d]+$/
                ]        
            ),
            new Control("text",".data_control_modal_form .productPrice",
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
            ],
            new Control("button",".data_control_modal_form .addOrUpdate"),
        
        {
            color: "red",
            validation: true
        }
    );
    dataControlModal.addOpenEvent(".auxiliary .add");
    dataControlModal.addCloseEvent(".data_control_modal_form .data_control_modal_close", function() {
        dataControlModal.clearFields();
    });
    dataControlModal.addRow();
    
    
//    additionWindow.addOpenEvent("input[type='submit'][name='add']");
//    additionWindow.addCloseEvent("#add_new_modal_close", function() {
//        additionWindow.showDefaultField("productName");
//        additionWindow.showDefaultField("email");
//        additionWindow.showDefaultField("productCount");
//        additionWindow.showDefaultField("productPrice");
//        $("#add_new_modal_form .nameError").css("display", "none");
//        $("#add_new_modal_form .emailError").css("display", "none");
//        additionWindow.clearFields(
//                "input[type='text'][name='productName']",
//                "input[type='text'][name='email']",
//                "input[type='text'][name='productCount']",
//                "input[type='text'][name='productPrice']"
//        );    
//    });
//    additionWindow.addRow("input[type='submit'][name='addOrUpdate']");
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
