define(['jquery', 'bootstrap'], function($) {
    var modalWindow;
    return modalWindow = (function() {
        function modalWindow() {
            $('#myModal').modal('show');
            $('.nav-tabs li.disabled > a[data-toggle=tab]').on('click', function(e) {
                e.stopImmediatePropagation();
            });
            return true;
        }

        return modalWindow;
    })();
});