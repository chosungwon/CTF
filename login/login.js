$(document).ready(function () {
    if(localStorage.getItem('Token')) {
        alert('이미 로그인 상태입니다.')
        location.href='/CTF/main.html/'
    }
    $('#login').click(function () {
        var id = $('#id').val();
        var password = $('#password').val();
        $.ajax({
            type: 'POST',
            url: 'http://207.148.88.110:3000/login',
            //headers : {'token' : localStorage.getItem('token')},
            data: {
                id: id,
                password: password,
            },
            dataType: 'json',
            success: function(success){
                console.log(success);
                alert(success.message)
                if(success.token) {
                    localStorage.setItem('Token', success.token)
                    location.href='/CTF/main.html/'
                }
            },
            error: function(error) {
                console.log(error);
                alert(error.message)
            }
        })
    })

    var idCheck = RegExp(/^[a-z0-9]{5,20}$/);
    var pwCheck = RegExp(/^[a-z0-9]{8,20}[~!@#$%^&*()_+|<>?:{}]/);

    // 아이디 유효성검사
    // $('#reg').click(function () {
    //     if(!idCheck.test($('#id').val())){
    //         alert('아이디 형식에 맞지 않습니다');
    //         $('#id').val('');
    //         $('#id').focus();
    //     }
    // });

    // 비밀번호 유효성검사
    // $('#reg').click(function () {
    //     if(!pwCheck.test($('#password').val())){
    //         alert('비밀번호 형식에 맞지 않습니다');
    //         $('#password').val('');
    //         $('#password').focus();
    //     }
    // });
})