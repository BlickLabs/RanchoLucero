$(document).ready(function() {
    $("#ok").hide();

    $("#contactoModal").validate({
        rules: {
            name: { required: true, minlength: 2},
            email: { required:true, email: true},
            phone: { required:false, minlength: 2},
            select: { required:true, minlength: 2},
            msg: { required:true, minlength: 2}
            
        },
        messages: {
            name: "Debe introducir su nombre.",
            email : "Debe introducir un email válido.",
            msg : "El campo Mensaje es obligatorio.",
            select : "Seleccione un interés."
        },
        submitHandler: function(form){
            var dataString = 'name='+$('#name').val()+'&email='+$('#email').val()+'&msg='+$('#msg').val()+'&select='+$('#select').val()+'&phone='+$('#phone').val();
            $.ajax({
                type: "POST",
                url:"model/contacto_mail.php",
                data: dataString,
                success: function(data){
                    $("#ok").html(data);
                    $("#ok").show();
                    $(".btnSubmit").hide();
                    document.getElementById('formid').reset();
                 
                }
            });
        }
    });
});