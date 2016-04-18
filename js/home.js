$( document ).ready(function() {
    console.log( "ready!" );
    $("#contact-button").click(function(){
        $(".page-contact").addClass("contact-animation");
        $("#contact-form").removeClass("hidden");
        $("#contact-button").addClass("hidden");


    });
});
