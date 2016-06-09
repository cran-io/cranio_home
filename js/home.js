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


    $("#Juanvi").mouseover(function(){
        $("#JuanviImg").attr('src', "images/team/juanvi1.jpg");
    });
    $("#Juanvi").mouseleave(function(){
        $("#JuanviImg").attr('src', "images/team/juanvi.jpg");
    });
    $("#Jota").mouseover(function(){
        $("#JotaImg").attr('src', "images/team/jota1.jpg");
    });
    $("#Jota").mouseleave(function(){
        $("#JotaImg").attr('src', "images/team/jota.jpg");
    });
    $("#Sol").mouseover(function(){
        $("#SolImg").attr('src', "images/team/sol1.jpg");
    });
    $("#Sol").mouseleave(function(){
        $("#SolImg").attr('src', "images/team/sol.jpg");
    });

    $("#Santi").hover(
      function () {
        $("#SantiImg").attr('src', "images/team/Santi1.jpg");
      },
      function () {
        $("#SantiImg").attr('src', "images/team/Santi.jpg");
      }
    );

    $("#Pepe").hover(
      function () {
        $("#PepeImg").attr('src', "images/team/pepe1.jpg");
      },
      function () {
        $("#PepeImg").attr('src', "images/team/pepe.jpg");
      }
    );

    $("#Gaby").hover(
      function () {
        $("#GabyImg").attr('src', "images/team/gaby1.jpg");
      },
      function () {
        $("#GabyImg").attr('src', "images/team/gaby.jpg");
      }
    );
    $("#Javi").hover(
      function () {
        $("#JaviImg").attr('src', "images/team/javi1.jpg");
      },
      function () {
        $("#JaviImg").attr('src', "images/team/javi.jpg");
      }
    );

    $("#Delfi").hover(
      function () {
        $("#DelfiImg").attr('src', "images/team/delfi1.jpg");
      },
      function () {
        $("#DelfiImg").attr('src', "images/team/delfi.jpg");
      }
    );
    $("#Gon").hover(
      function () {
        $("#GonImg").attr('src', "images/team/gon1.jpg");
      },
      function () {
        $("#GonImg").attr('src', "images/team/gon.jpg");
      }
    );

    $("#Clau").hover(
      function () {
        $("#ClauImg").attr('src', "images/team/clau1.jpg");
      },
      function () {
        $("#ClauImg").attr('src', "images/team/clau.jpg");
      }
    );
    $("#Agus").hover(
      function () {
        $("#AgusImg").attr('src', "images/team/agus1.jpg");
      },
      function () {
        $("#AgusImg").attr('src', "images/team/agus.jpg");
      }
    );
    $("#Colo").hover(
      function () {
        $("#ColoImg").attr('src', "images/team/colo1.jpg");
      },
      function () {
        $("#ColoImg").attr('src', "images/team/colo.jpg");
      }
    );
    $("#Juli").hover(
      function () {
        $("#JuliImg").attr('src', "images/team/juli1.jpg");
      },
      function () {
        $("#JuliImg").attr('src', "images/team/juli.jpg");
      }
    );


});
