$(document).ready(function(){
  // burger menu 
  $('#burger-btn').click(function () {
    $('.nav-menu').addClass('show');
    $('.overlay').addClass('open');
  });
  $('.close-menu, .overlay, .nav-menu a').click(function () {
    $('.nav-menu').removeClass('show');
    $('.overlay').removeClass('open');
  });

  // header fixed class 
  var scroll_start = 0;
  $(document).scroll(function() { 
      scroll_start = $(document).scrollTop();
      
      if(scroll_start > 20) {
          $(".header").addClass('onsc')
          
      } else if (scroll_start == 0){
          $('.header').removeClass('onsc');
      }
  });
 


})




//  $(".nav").find("a").click(function(e) {
//   e.preventDefault();
//   var section = $(this).attr("href");
//   $("html, body").animate({
//       scrollTop: $(section).offset().top - 50
//   });
// });

  
    // ТАБЫ (ВРУЧНУЮ) 
    // $(function() {
    //   $('.tab-content-bg:first-child').show();
    //   $('.tab-switch').bind('click', function(e) {
    //     var thisElem = $(this);
    //     var elemTarget = $(thisElem.data("target")); // get the target from data attribute
    //     thisElem.siblings().removeClass('tab-switch-show');
    //     elemTarget.siblings().css("display", "none")
    //     thisElem.addClass('tab-switch-show');
    //     elemTarget.fadeIn(500);
    //   });
    //   $('.tab-switch:first-child').trigger('click');
    // });
  
  
  // карта
//   ymaps.ready(init);
//   function init() {
//       var myMap = new ymaps.Map("map", {
//           center: [55.751426, 37.618879],
//           zoom: 13,
//           controls: ["zoomControl", 'trafficControl', 'routeButtonControl'],
         
//       });
  
//       myMap.behaviors.disable('scrollZoom');
  
//       myPlacemark = new ymaps.Placemark([55.751426, 37.618879], {}, {
//           iconLayout: 'default#image',
//           // iconImageHref: 'img/location.png',
//           // iconImageSize: [48, 60],
//           // iconImageOffset: [-24, -60]
//       });
  
//       myMap.geoObjects.add(myPlacemark)
  
//   }