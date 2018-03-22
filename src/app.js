$(document).ready(function () {
    const tpl = $('#template');
    $('#terminal').keypress(function (e) {
        if (e.which === 13) {

            $.ajax({
                url: 'http://tp-ecole.local/src/response.php',
                type: 'GET',
                DataType: 'Json',

                success: function (data, statut) {
                    var val = $('input').val();
                    console.log(val);
                    tpl.append(val)
                },
                error: function (data, statut, erreur) {
                },
                complete: function (data, statut) {

                }
            });
        }
    })
});


