$(document).ready(function () {
    const tpl = $('#template');
    $('#terminal').keypress(function (e) {
        if (e.which === 13) {
            $.ajax({
                url: 'http://tp-ecole.local/src/response.php',
                type: 'GET',
                DataType: 'Json',
                data: '',

                success: function (data, statut) {
                    var val = $('input');
                    if (val.val() === 'clear')
                    {
                        tpl.html('');
                    }
                    tpl.append('<p class="text-center">' + val.val() +'</p>');
                    val.val('');

                },
                error: function (data, statut, erreur) {

                },
                complete: function (data, statut) {

                }
            });
        }
    })
});


