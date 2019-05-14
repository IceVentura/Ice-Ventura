$(document).ready(function() {
    $('#contactForm').validate({
        rules: {
            name: {
                required: true,
            },
            phone: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
        },
        errorPlacement: function(error,element) {
            return true;
        }
    });

    $('#contactForm').submit(function(e) {
        e.preventDefault();
        if ($(this).valid()) {
            $.ajax({
                    type: 'POST',
                    url: 'php/form.php',
                    data: $(this).serialize()
                })
                .done(function() {
                    formSuccess();
                })
                .fail(function() {
                    formError();
                })
        }
        else {
            formError();
        }
    });
});

function formError() {
    document.location.href='thanks.html';
}

function formSuccess() {
    document.location.href='thanks.html';
}
