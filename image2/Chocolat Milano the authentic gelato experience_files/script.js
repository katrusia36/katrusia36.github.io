function calcSize() {

  var heightScreen = $(window).height();
  var widthScreen = $(window).width();
  var heightHero = $("#hero.hero").outerHeight();
  var heightHeroMain = $("#hero .hero.main").outerHeight();
  var heightHeader = $(".hero.header").outerHeight();
  var heightMainNavM = $(".container-nav.menu .main-nav").outerHeight();
  var heightHambFooterM= $(".container-nav.menu footer").outerHeight();
  var heightMainNavS = $(".container-nav.store .main-nav").outerHeight();
  var heightHambFooterS= $(".container-nav.store footer").outerHeight();
  var heightDateNews= $("#news .new.latest").outerHeight();
  var heightFooter= $("footer").outerHeight();
  var heightImgNewSearch= $('.search #news.search .new.latest .image').outerHeight();


  $('.square').each(function() {
    var width_square = $(this).outerWidth();
    $(this).css({ "height": width_square });
  });

  //Altezza Hero
  $("#hero.hero").css({ "height": heightScreen });
  $("#hero .hero.main").css({ "top": (heightScreen/2)-(heightHeroMain/2)});

  //Altezza Hero Contact
  $("#hero.hero.contact").css({ "height": (heightScreen-heightFooter) });

  //Altezza Container-Nav Hamburgher Menu
  $(".container-nav").css({ "height": heightScreen });
  $(".container-nav.menu .main-nav").css({ "top": (heightScreen/2)-(heightMainNavM/2)-60});
  $(".container-nav.store .main-nav").css({ "top": (heightScreen/2)-(heightMainNavS/2)-60});

  //Altezza News Home
  var heightMainNew = $("#news .new.main").outerHeight();
  $("#news .latest.new.home").css({ "height": (heightMainNew-6)/2 });

  //Altezza Latest News
  var heightLatestNewHome = $("#news .new.latest.home").outerHeight();
  $("#news .new.latest.internal").css({ "height": (heightMainNew-6)/2 });

  //Altezza Latest Search
  var heightImgNewSearch= $('.search #news.news .new.latest .image').outerHeight();
  $(".search #news.news .new.latest.internal").css({ "height": heightImgNewSearch });

  //Altezza Latest Category
  var heightImgNewSearch= $('.category .new.latest .image').outerHeight();
  $(".category .new.latest.internal").css({ "height": heightImgNewSearch });

  //Altezza Join Us Home
  var heightImgSquare = $("#join .clearfix.container .image.square").outerHeight();
  $("#join .clearfix.container .text-container").css({ "height": heightImgSquare });

  //Altezza Img Store
  var heightTextStore = $("#store.store .container-store .container-meal .text-container").outerHeight();
  $("#store.store .container-store .image-container .image").css({ "height": heightTextStore });

  //Mostra Header Fixed
  $(document).scroll(function() {
   if ($(document).scrollTop() > heightScreen ) {
     $('.fixed').addClass("active");
   } else {
     $('.fixed').removeClass("active");
   }
  });

  if(widthScreen<980) {
    $('.fixed').addClass("superactive");
  } else {
    $('.fixed').removeClass("superactive");
  }

  // Fix fotorama height
  $('.fotorama').on('fotorama:ready', function (e, fotorama) {
    var heightImageStore = $(".page-template-page-store .container-store .image").outerHeight();
    fotorama.resize({
      height: heightImageStore,
      width: "100%",
      fit: "cover",
    });
  });

  

}

$(document).ready(function() {
  calcSize();

  // PRELOAD PACEzzzz
  // paceOptions = {
  //   ajax: false, // disabled
  //   document: false, // disabled
  //   eventLag: false, // disabled
  //   elements: {
  //     selectors: ['body']
  //   }
  // };

  $(".fixed.container-menu .open-nav.menu").click(function(){
    $('.fixed.container-findus .open-nav').removeClass('open');
    $('.container-nav.menu').toggleClass("open");
    $(this).toggleClass("open");
    $('header.header.fixed').addClass("superactive");
    $('.container-nav.open.store').removeClass("open");
  });

  $(".fixed.container-findus .open-nav.store").click(function(){
    
    $('.fixed.container-menu .open-nav.menu').removeClass('open');
    $('.container-nav.store').toggleClass("open");
    $(this).toggleClass("open");
    $('header.header.fixed').addClass("superactive");
    $('.container-nav.open.menu').removeClass("open");
  });

  //Mostra Menu in Store
  $("#store.store .container-store .container-meal .text-container .btn-container a.more").click(function(){
    $(this).parents(".container-store").find(".container-food").addClass("open");
    return false;
  });

  //Chiudi Menu in Store
  $("#store.store .container-store .container-food .text-container.side .btn-container a.more").click(function(){
    $(this).parents(".container-store").find(".container-food").removeClass("open");
    return false;
  });

  $(".header.hero .findus").click(function(){
    $('.container-nav.store').toggleClass("open");
    $(this).toggleClass("open");
    $('.fixed').addClass("superactive");
  });

  $('#hero .hero.bottom a.discover').on('click', function() {
   $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top }, 1000);
   return false;
  });

  // Slider Store
  $("#about.about .visitus .city-container .single-city").click(function(e){
    $("#about.about .visitus .city-container .single-city").removeClass('active');
    var name = $(this).data('name');
    $("#about.about .visitus .container-slider").removeClass("active");
    $("#about.about .visitus .container-slider."+name).addClass("active");
    $(this).addClass("active");
    return false;
  });

  $('#about.about .icon-arrow-right').click(function(e) {
    var thisStoreNext = $('#about.about .visitus .container-slider.active').next();
    var thisStore = $('#about.about .visitus .container-slider.active');
    if (thisStoreNext.length > 0) {
      $("#about.about .arrow").removeClass("disabled");
      thisStoreNext.addClass("active");
      thisStore.removeClass("active");
    } else {
      $(this).addClass("disabled");
    }
    e.stopPropagation();
  });

  $('#about.about .icon-arrow-left').click(function(e) {
    var thisStorePrev = $('#about.about .visitus .container-slider.active').prev();
    var thisStore = $('#about.about .visitus .container-slider.active');
    if (thisStorePrev.length > 0) {
      $("#about.about .arrow").removeClass("disabled");
      thisStorePrev.addClass("active");
      thisStore.removeClass("active");
    } else {
      $(this).addClass("disabled");
    }
    e.stopPropagation();
  });

  WebFontConfig = {
    google: { families: [ 'Montserrat:400,700:latin', 'Open+Sans:300italic,400italic,400,300:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

  
});

$(window).resize(function() {
  calcSize();
});