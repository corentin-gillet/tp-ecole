$(document).ready(function () {
    const tpl = $('#template');
    $('#terminal').keypress(function (e) {
        if (e.which === 13) {

            var inputVal = $('input').val();
            var espace = " ";
            var tab = inputVal.split(espace);
            var commande = tab[0].toString();

            $.ajax({
                url: '../src/response.php',
                type: 'GET',
                DataType: 'Json',
                data: 'commande=' + commande,

                success: function (data, statut) {

                    if (commande === 'clear')
                    {
                        tpl.html('');
                    }
                    else if (commande === 'exit')
                    {
                     $('input').attr("disabled", "disabled")
                    }
                    else if (commande === 'version')
                    {
                        tpl.append('<p class="text-left mr-5">' + commande +' &nbsp;&nbsp;' + data + '</p>');
                    }
                    else if (commande === 'date')
                    {
                        tpl.append('<p class="text-left mr-5">' + commande +' &nbsp;&nbsp;' + data + '</p>');
                    }

                    else if (commande === 'free')
                    {
                        tpl.append('<p class="text-left mr-5">' + commande +' &nbsp;&nbsp;' + data + '</p>');

                    }
                    /*else if (commande !== 'clear')
                    {
                        tpl.append('<p class="text-left mr-5">' + commande +' &nbsp;&nbsp;' + data + '</p>');
                    }*/
                    else if (commande === '=')
                    {
                        var x = tab[1];
                        var y = tab[2];
                        var z = tab[3];
                        console.log(eval('x y z'));

                    }
                    $('input').val('');

                },
                error: function (data, statut, erreur) {

                },
                complete: function (data, statut) {

                }
            });
        }
    })
});








