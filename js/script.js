


$(document).ready(function(){
  // burger menu 
  $('#burger-btn').click(function () {
    $('.burger-menu').addClass('show');
    $('.overlay').addClass('open');
  });
  $('.close-menu, .overlay, .burger-menu a').click(function () {
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

  // input mask and validation 
  Inputmask({
      "mask": "+7 (999) -999-99-99",
    
      "onincomplete": function(){ 
          var input = this;
          $(input).addClass('field_error');
      }, 
      
      "oncomplete": function(){ 
          var input = this;
          $(input).removeClass('field_error');
      }, 
    
      onKeyDown: function(buffer, opts) {
          var input = this;
        setTimeout(function() {
          if(input.inputmask.isComplete()){
              $(input).parents('form').find(".submit").removeAttr("disabled");
            
          }
          else {
              $(input).parents('form').find(".submit").attr("disabled", "disabled");
        
          }
          },0);
      }
  }).mask(".tel__field");
  })

  // parallax 
document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".parallax-wrap img").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}


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
  <a href="/team-2.html" target="blank">Команда 2</a>
  <a href="/tarifi.html" target="blank">Тарифи техподдержки</a>
  <a href="/buisiness-consulting.html" target="blank">Бизнес консалтинг</a>
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