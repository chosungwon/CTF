$(document).ready(function () {
    $('#register').click(function () {
        var id = $('#id').val();
        var password = $('#password').val();
        var name = $('#name').val();
        var phone = $('#phone').val();
        $.ajax({
            type: 'POST',
            url: 'http://207.148.88.110:3000/register',
            data: {
                id: id,
                password: password,
                name: name,
                phone: phone
            },
            dataType: 'json',
            success: function(success){
                console.log(success);
            },
            error: function(error) {
                console.log(error);
            }
        })
    });

    var idCheck = RegExp(/^[a-z0-9]{5,20}$/);
    var pwCheck = RegExp(/^[a-z0-9]{8,20}[~!@#$%^&*()_+|<>?:{}]/);
    var nameCheck = RegExp(/^[가-힣]+$/);
    var phCheck = RegExp(/[0-9]{11}/);

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

    // 이름 유효성검사
    // $('#reg').click(function () {
    //     if(!nameCheck.test($('#name').val())){
    //         alert('이름 형식에 맞지 않습니다');
    //         $('#name').val('');
    //         $('#name').focus();
    //     }
    // });

    // 전화번호 유효성검사
    // $('#reg').click(function () {
    //     if(!phCheck.test($('#phone').val())){
    //         alert('이름 형식에 맞지 않습니다');
    //         $('#phone').val('');
    //         $('#phone').focus();
    //     }
    // });


})

