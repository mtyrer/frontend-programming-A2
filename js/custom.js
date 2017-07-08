/* This function stretches the side bar so that the all stories button can be positioned */

$(document).ready(function () {
    $(".section-row").each(function() {
        var h = $(this).height();
        $(".sidebar", $( this ) ).height(h);
    });
});

