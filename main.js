// Form validate
var array = { wrap: '.form-validate', alert: '.error-message', submit: '.form-submit-btn' };

validateForm(array);

$('.form-validate').on('submit', function () {
    if(!checkIfRequiredFieldsFilled(array.wrap))  {
        $(array.alert).fadeIn(200);
        $(array.submit).addClass('disabled');
    } else {
        $(array.alert).fadeOut(200);
        $(array.submit).removeClass('disabled');
    }
});

// Functions
function validateForm(form) {
    $(form.wrap + ' .required').on('input', function () {
        if($(this).val() && checkIfRequiredFieldsFilled(form.wrap)) {
            $(form.alert).fadeOut(200);
            $(form.submit).removeClass('disabled');
        } else {
            $(form.alert).fadeIn(200);
            $(form.submit).addClass('disabled');
        }
    });
}

function checkIfRequiredFieldsFilled(wrapper) {
    var error = '';
    $(wrapper + ' .required').each(function (index, elem) {

        if($(elem).val().length === 0) error += $(elem).attr('name');
    });

    return error.length === 0;
}