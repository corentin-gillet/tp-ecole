$(document).ready(function () {
    const tpl = $('#template');
    $('#terminal').keypress(function (e) {
        if (e.which === 13) {
            var input = $('input');
            $.ajax({
                url: '../src/response.php',
                type: 'GET',
                DataType: 'Json',
                data: 'commande=' + input.val(),
                success: function (data, statut) {
                    if (input.val() === 'clear')
                    {
                        tpl.html('');
                    }
                    else if (input.val() === 'exit')
                    {
                     input.attr("disabled", "disabled")
                    }
                    else if (input.val() === 'version')
                    {
                        tpl.append('<p class="text-left mr-5">' + input.val() +' &nbsp;&nbsp;' + data + '</p>');
                    }
                    else if (input.val() === 'date')
                    {
                        tpl.append('<p class="text-left mr-5">' + input.val() +' &nbsp;&nbsp;' + data + '</p>');
                    }

                    else if (input.val() === 'free')
                    {
                        tpl.append('<p class="text-left mr-5">' + input.val() +' &nbsp;&nbsp;' + data + '</p>');

                    }
                    else if (input.val() !== 'clear')
                    {
                        tpl.append('<p class="text-left mr-5">' + input.val() +' &nbsp;&nbsp;' + data + '</p>');
                    }
                    input.val('');

                },
                error: function (data, statut, erreur) {

                },
                complete: function (data, statut) {

                }
            });
        }
    })
});








