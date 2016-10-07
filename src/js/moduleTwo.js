define(['jquery'], function($) {
    var moduleTwo;
    return moduleTwo = (function() {
        function moduleTwo() {
            $.getJSON('json/data.json', function(data) {
                $.each(data, function(i, f) {
                    console.log(f);
                });

            });
        }
        return moduleTwo;
    })();
});