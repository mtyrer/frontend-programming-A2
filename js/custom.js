/* This function stretches the side bar so that the all stories button can be positioned */
function sidebarsize () {
    if (window.matchMedia('(min-width: 1200px)').matches) {
        $(".section-row").each(function() {
            var h = $(this).height();
            $(".side-sect", $( this ) ).height(h);
        });
     } else {
        /* $(".section-row").each(function() {
            $(".side-sect", $( this ) ).height(0);
        }); */
     }
}


$(document).ready(function () {
     sidebarsize();
});

$(window).resize(function(){
    window.location.href = window.location.href;
    sidebarsize(); 
});

