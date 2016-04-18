$( document ).ready(function() {
    console.log( "ready!" );
    $("#contact-button").click(function(){
        $("#contact-form").removeClass("hidden");
        $("#contact-button").addClass("hidden");
    });
});
