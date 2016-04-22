$( document ).ready(function() {
    $("#contact-button").click(function(){
        $(".page-contact").addClass("contact-animation");
        $("#contact-form").removeClass("hidden");
        $("#contact-button").addClass("hidden");
        $("#close-contact-button").removeClass("hidden");

    });
    $("#close-contact-button").click(function(){
      $(".page-contact").removeClass("contact-animation");
      $("#contact-form").addClass("hidden");
      $("#contact-button").removeClass("hidden");
      $("#close-contact-button").addClass("hidden");

    });

    $(".navbar-toggle").click(function(){

        var className = $('#responsive-navbar-button').attr('class');

        if(className=='glyphicon glyphicon-menu-hamburger'){
          $("#navbar-brand-container").fadeOut(0, function(){
            $("#responsive-navbar-button").removeClass("glyphicon-menu-hamburger");
            $(".navbar-toggle").attr("style", "background-image: url('./images/close.png')!important; background-size: 100% 100%!important; height:22px; background-repeat: no-repeat;");
          });
        }else{

          $("#responsive-navbar-button").addClass("glyphicon-menu-hamburger");
          $("#responsive-navbar-button").removeClass("glyphicon-remove-circle");
          $("#navbar-brand-container").delay(500).fadeIn();
          $(".navbar-toggle").attr("style", "background-image: none; background-size: inherit; height:auto; ");

        }
    });




});
