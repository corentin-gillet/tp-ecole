$(document).ready(function () {
    $('#terminal').keypress(function (e) {
        if (e.which === 13) {

            $.ajax({
                url: 'http://tp-ecole.local/src/response.php',
                type: 'GET',
                DataType: 'Json',

                success: function (data, statut) {
                    alert('good');
                    alert(data);
                    alert(statut);
                },
                error: function (data, statut, erreur) {
                    alert('error');
                    alert(data);
                    alert(statut);
                },
                complete: function (data, statut) {
                    alert('complete');

                }
            });
        }
    })
});


