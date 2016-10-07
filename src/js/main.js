define(['jquery', 'modalWindow', 'reservationDetails', 'moduleTwo'], function($, ReservationModalWindow, ReservationDetails, ModuleTwo) {
    return $(function() {
        var modalWindow, reservationDetails, moduleTwo;
        modalWindow = new ReservationModalWindow();
        reservationDetails = new ReservationDetails();
        moduleTwo = new ModuleTwo();
        return modalWindow;
    });



});
