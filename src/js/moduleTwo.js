define(['jquery', ''], function($) {
    var moduleTwo;
    return moduleTwo = (function() {
        function moduleTwo() {
            console.log('ReservationTable');
            $.getJSON('json/data.json', function(data) {
                $.each(data, function(i, f) {
                    //console.log(f.Name);
                });

            });
        }
        return moduleTwo;
    })();
});