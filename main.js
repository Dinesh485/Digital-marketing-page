$(document).ready(function () {
  
  $('nav .menu').css({"transition": "transform 300ms linear"})


  $('nav .menu-btn').click(() => {
    $('nav .menu-btn span:nth-child(1)').toggleClass('menu-btn-animation-1');
        $("nav .menu-btn span:nth-child(2)").toggleClass(
          "menu-btn-animation-2"
    );
        $("nav .menu-btn span:nth-child(3)").toggleClass(
          "menu-btn-animation-3"
    );
    $('nav .menu').toggleClass('menu-animation');
    $('nav .menu-btn span').toggleClass('menu-btn-color-change')
  })
});
