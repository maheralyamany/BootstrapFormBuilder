$(document).ready(function () {
    var myLanguage = {
        errorTitle: 'عفوا، هناك أخطاء!'
    };
    if ($('#form-user-login').length > 0)
        loginValidate();
    function loginValidate() {
        $.ajax({
            url: "index.php",
            method: "POST",
            data: { ajax_action: 'user.loginValidation' },
            dataType: "json",
            complete: function (json) {
                try {
                    var data = JSON.parse(json.responseText);
                    $('#form-user-login').validate({
                        rules: {
                            year: {
                                min: 2017,
                                required: true,
                                minlength: 4,
                                digits: true,
                                maxlength: 4
                            },
                            phon_no: {
                                required: true,
                                minlength: 9,
                                digits: true,
                                min: 700000000,
                            },
                            pass: {
                                required: true,
                                minlength: 5
                            }
                        },
                        messages: {
                            year: {
                                min: data['year_min'],
                                required: data['year_required'],
                                minlength: data['year_minlength'],
                                digits: data['digits'],
                                maxlength: data['year_maxlength']
                            },
                            phon_no: {
                                min: data['phon_min'],
                                required: data['phon_required'],
                                minlength: data['phon_minlength'],
                                digits: data['digits'],
                            },
                            pass: {
                                required: data['pass_required'],
                                minlength: data['pass_minlength']
                            }
                        },
                        errorElement: 'span',
                        errorPlacement: function (error, element) {
                            error.addClass('invalid-feedback');
                            element.closest('.form-group').append(error);
                        },
                        highlight: function (element, errorClass, validClass) {
                            $(element).addClass('is-invalid');
                        },
                        unhighlight: function (element, errorClass, validClass) {
                            $(element).removeClass('is-invalid');
                        }
                    });
                } catch (error) {
                    console.log(json.responseText);
                }
            }
        });
    }
    /*  $.validate({
         form : '#form-user-add',
         language : myLanguage,
         modules : 'file',
         validateOnBlur : false,
         errorMessagePosition : 'top',
         onError : function() {
             //alert('alert !');
         },
         onSuccess : function() {
             //alert('success!');
         }
     });
     $.validate({
         form : '#form-user-search',
         language : myLanguage,
         validateOnBlur : false,
         errorMessagePosition : 'top',
         onError : function() {
             //alert('alert !');
         },
         onSuccess : function() {
             //alert('success!');
             searchUsers();
         }
     });
      $.validate({
         form : '#form-user-login',
         language : myLanguage,
         modules : 'security',
         validateOnBlur : false,
         errorMessagePosition : 'top',
         onError : function() {
             //alert('alert !');
         },
         onSuccess : function() {
             //alert('success!');
         }
     }); 
     $.validate({
         form : '#form-profile-edit',
         language : myLanguage,
         modules : 'security',
         validateOnBlur : false,
         errorMessagePosition : 'top',
         onError : function() {
             //alert('alert !');
         },
         onSuccess : function() {
             //alert('success!');
         }
     });
  */
    $('#form-user-search').submit(function () {
        return false;
    });
    $('#login').keyup(function () {
        $('#default-pwd').text($(this).val());
    });
});
function deleteElement(btn, e) {
    e.preventDefault();
    if (confirm("هل تريد فعلا حذف هذا العنصر؟")) {
        var obj = {
            ajax_action: 'user.delete',
            user_id: $(btn).attr('user_id')
        };
        $.post(
            'index.php',
            obj,
            function (data) {
                if (data == 1) {
                    window.location.reload();
                } else {
                    alert("واجهتا مشاكل، المرجو المحاولة.");
                }
            },
            'html'
        );
    }
}
function searchCategories() {
    var obj = {
        ajax_action: 'user.search',
        user: $('#user').val()
    };
    $.post(
        'index.php',
        obj,
        function (data) {
            $('.form-search-wrap').slideUp();
            $('.main-table tbody').html(data);
        },
        'html'
    );
}
