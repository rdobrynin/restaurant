define(['jquery', 'modalWindow'], function($, modalWindow) {
    var ReservationDetails;
    return ReservationDetails = (function() {

        function init() {
            if(modalWindow() === true) {
                ReservationDetails();
            }
        }

        function ReservationDetails() {
            console.log('reservationDetails111');
        }

        return init;

    })();
});