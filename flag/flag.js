$(document).ready(function () {
    $('#flag').click(function () {
        $.ajax({
            type: 'POST',
            url: 'http://207.148.88.110:3000/flag',
            data: {
                name: 'sdf',
                flag: 'asdf'
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