



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
                    alert(data);

                    if (input.val() === 'clear')
                    {
                        tpl.html('');
                    }
                    else if (input.val() === 'exit')
                    {
                     val.attr("disabled", "disabled")
                    }
                    else if (input.val() === 'php')
                    {
                        tpl.html(data);
                    }
                    else if (input.val() === 'date')
                    {
                        tpl.html(data);
                    }
                    else if (input.val() === 'disque')
                    {
                        tpl.html(data);
                    }
                    tpl.append('<p class="text-center">' + input.val() +'</p>');
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








