$(document).ready(function(){
  // burger menu 
  $('#burger-btn').click(function () {
    $('.burger-menu').addClass('show');
    $('.overlay').addClass('open');
  });
  $('.close-menu, .overlay').click(function () {
    $('.burger-menu').removeClass('show');
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
  <a href="/marketing.html" target="blank">Маркетинг</a>
  <a href="/integracia.html" target="blank">Интееграция с сервисами</a>
  <a href="/monitoring.html" target="blank">Мониторинг конкурентов</a>
  <a href="/opit.html" target="blank">Покупайте опыт</a>
  <a href="/design.html" target="blank">Дизайн</a>
  <a href="/office-nets.html" target="blank">Сеть офисов</a>
  <a href="/team.html" target="blank">Команда</a>
  <a href="/tarifi.html" target="blank">Тарифи техподдержки</a>
  <br>
  <br>
  <a href="/components.html" style="background: green; width: 98%;" target="blank">Компоненты</a>
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