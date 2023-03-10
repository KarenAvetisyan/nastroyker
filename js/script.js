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
 
  // main form 
  $(".changingBtn.active-submit").click(function(){
    $(this).parents('.form-box').addClass('form-box-active')
    $(this).parents('form').addClass('fields-visible')
  })
  

})


  // -------------- helper ---------------
  let target = document.querySelector('#helper')
  target.innerHTML += `
    <h4 style="color: #000; margin-left: 2px;" >Страницы</h4>
    <a href="/index.html" target="blank">Главная</a>
    <a href="/razrabotka-saytov.html" target="blank">Разработка сайтов</a>
    <a href="/prilojenie.html" target="blank">Есть для вас приложение</a>
    <a href="/components.html" target="blank">Компоненты</a>
  `
  $('.toggle-helper').click(function(){
    $("#helper").toggleClass('show')
  })
  var current = location.pathname;
  $(function(){
    var current = location.pathname;
    $('#helper > a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('active');
        }
    })
  })