$(document).ready(function () {
    if (!localStorage.getItem('Token')) {
        location.href='/CTF/login/login.html/'
    }
    $('#remove').click(function () {
        var password = $('#password').val();
        var token = localStorage.getItem('Token')
        $.ajax({
            type: 'DELETE',
            url: 'http://207.148.88.110:3000/5bb308384e657328bb6e113a',
            headers : {'authorization' : token},
            data: {
                password: password,
                token: token
            },
            dataType: 'json',
            success: function(success){
                console.log(success);
            },
            error: function(error) {
                console.log(error);
            }
        })
    })
})