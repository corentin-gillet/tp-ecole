$(document).ready(function () {
    const tpl = $('#template');
    $('#terminal').keypress(function (e) {
        if (e.which === 13) {
            $.ajax({
                url: 'http://localhost/tp-ecole/src/response.php',
                type: 'GET',
                DataType: 'Json',
                data: '',

                success: function (data, statut) {
                    var val = $('input');

                    if (val.val() === 'clear')
                    {
                        tpl.html('');
                    }
                    else if (val.val() === 'exit')
                    {
                     val.attr("disabled", "disabled")
                    }
                    else if (val.val() === 'php')
                    {
                        tpl.html(data);
                    }
                    else if (val.val() === 'date')
                    {
                        tpl.html(data);
                    }
                    else if (val.val() === 'disque')
                    {
                        tpl.html(data);
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








