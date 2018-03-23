$(document).ready(function () {
    var history = [];
    const tpl = $('#template');
    $('#terminal').keypress(function (e) {
        if (e.which === 13) {


            var inputVal = $('input').val();
            var espace = " ";
            var tab = inputVal.split(espace);
            var commande = tab[0].toString();
            if (history.length === 50) {
                history.shift();
            }
            history.push(commande);

            $.ajax({
                url: '../src/response.php',
                type: 'GET',
                DataType: 'Json',
                data: 'commande=' + commande,

                success: function (data, statut) {
                    if (commande === 'man') {
                        tpl.html('Commandes disponibles : clear, exit, version, date, free, =, cd?; ls, rmdir, mkdir, history, reset ')
                    }
                    if (commande === 'clear') {
                        tpl.html('');
                    }
                    else if (commande === 'exit') {
                        $('input').attr("disabled", "disabled")
                    }
                    else if (commande === 'version') {
                        tpl.append('<p class="text-left mr-5">' + commande + ' &nbsp;&nbsp;' + data + '</p>');
                    }
                    else if (commande === 'date') {
                        tpl.append('<p class="text-left mr-5">' + data + '</p>');
                    }

                    else if (commande === 'free') {
                        tpl.append('<p class="text-left mr-5">' + commande + ' &nbsp;&nbsp;' + data + '</p>');

                    }
                    /*else if (commande !== 'clear')
                    {
                        tpl.append('<p class="text-left mr-5">' + commande +' &nbsp;&nbsp;' + data + '</p>');
                    }*/
                    else if (commande === '=') {
                        var evale = "";
                        for (var i = 1; i < tab.length; i++) {
                            evale += " " + tab[i];
                        }
                        tpl.append('<p class="text-left mr-5">' + commande + ' &nbsp;&nbsp;' + eval(evale) + '</p>');
                    }
                    else if (commande === "history") {
                        tpl.append('<p class="text-left mr-5">' + commande + ' &nbsp;&nbsp;' + history + '</p>');
                    }
                    else if (commande === "reset") {
                        history = [''];
                    }
                    $('input').val('');

                },
                error: function (data, statut, erreur) {

                },
                complete: function (data, statut) {

                }
            });

            $.ajax({
                url: '../src/response.php',
                type: 'POST',
                DataType: 'Json',
                data: 'commande=' + tab,

                success: function (data, statut) {
                    if (commande === "cd") {
                        tpl.append('<p class="text-left mr-5">' + commande + ' &nbsp;&nbsp;' + data + '</p>');
                    }
                    else if (commande === "ls") {
                        tpl.append('<p class="text-left mr-5">' + commande + ' &nbsp;&nbsp;' + data + '</p>');
                    }
                    else if (commande === "mkdir") {
                        if (data === 'true') {
                            var textMkdir = 'Dossier créer';
                            tpl.append('<p class="text-left mr-5">' + commande + ' &nbsp;&nbsp;' + textMkdir + '</p>');
                        }
                        else {
                            var textError = 'Impossible de créer le dossier car il existe déjà.';
                            tpl.append('<p class="text-left mr-5">' + commande + ' &nbsp;&nbsp;' + textError + '</p>');

                        }
                    }
                    else if (commande === "rmdir") {
                        if (data === 'true') {
                            var textRmdir = 'Dossier supprimé';
                            tpl.append('<p class="text-left mr-5">' + commande + ' &nbsp;&nbsp;' + textRmdir + '</p>');
                        }
                        else {
                            var textErrorRmdir = 'Impossible de supprimer le dossier car il n\'existe pas.';
                            tpl.append('<p class="text-left mr-5">' + commande + ' &nbsp;&nbsp;' + textErrorRmdir + '</p>');

                        }
                    }
                    else if (commande === "vi") {
                        tpl.append('<p class="text-left mr-5">' + commande + ' &nbsp;&nbsp;' + data + '</p>');
                    }



                },
                error: function (data, statut, erreur) {

                },
                complete: function (data, statut) {

                }
            });
        }
    })
});


















