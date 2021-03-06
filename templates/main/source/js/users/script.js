//Доступный hamburger https://foxland.fi/simple-accessible-svg-menu-hamburger-animation
function hamburger(element, menu) {
  var button = document.getElementById(element),
    menu = document.getElementById(menu);
  button.onclick = function () {
    // Toggle class "opened". Set also aria-expanded to true or false.
    if (-1 !== button.className.indexOf("opened")) {
      button.className = button.className.replace(" opened", "");
      button.setAttribute("aria-expanded", "false");
      menu.className = menu.className.replace(" active", "");
      menu.setAttribute("aria-expanded", "false");
    } else {
      button.className += " opened";
      button.setAttribute("aria-expanded", "true");
      menu.className += " active";
      menu.setAttribute("aria-expanded", "true");
    }
  };
}

$(document).ready(function () {
  // T-50
  $(".slideThree label,.slideThree-2 label").click(function () {
    $(this.parentNode).toggleClass("active");
  });
  $(".news__h4").click(function () {
    $(this.parentNode).toggleClass("active");
  });
  $(".slideThree label").click(function () {
    if($(this).parent().next().focus().prop('disabled') == false){

      $(this).parent().next().prop('disabled',true);
    }
    else{
      $(this).parent().next().prop('disabled',false);
    }
  });
  $(".slideThree-2 label").click(function () {
    if($(this).parent().next().focus().val('').prop('readonly') == false){

      $(this).parent().next().prop('readonly',true);
    }
    else{
      $(this).parent().next().prop('readonly',false);
    }
  });
  $('.item__block input').click(function() {
    if($(this).prop('readonly') == false){
      $(this).prop('readonly',true);
    }
    else{
      $(this).prop('readonly',false);
    }
  })
  $(".js_span__math").click(function () {
    $(this.parentNode).toggleClass("active");
  });
  $(".news__hide").click(function () {
    $(".section__news").toggleClass("section__news__active");
    this.textContent = this.textContent === 'Показать' ? 'Скрыть' : 'Показать';
  });
  $(".js_nav__text").click(function () {
    $('.js_nav__text').removeClass("active");
    $(this).toggleClass("active");
  });
  $(".js-table__block").click(function () {
    $(this).toggleClass("active");
  });
  $(".js_download").click(function () {
    $(".editing-task").addClass("editing-task__active");
  });
  $(".js_span__close").click(function () {
    $(".editing-task").removeClass("editing-task__active");
  });
  $(".js_span__close").click(function () {
    $(".orders-edit").removeClass("orders-edit__active");
  });
  $(".js__span__manager").click(function () {
    $(this).toggleClass("active");
  });
  $(".js__span__consist__img").click(function () {
    $(".orders-edit").addClass("orders-edit__active");
  });
  $(".js_span__close").click(function () {
    $(".section__sidebar").toggleClass("section__sidebar__active");
  });
  // T-50-end


  window.globalPopup = new Popup();

  // $(".js-combox").combox({
  // 	startFn: function(li, index, combox) {

  // 		this.input = combox.getElementsByTagName("input")[0];

  // 		this.input.value = li.getAttribute("value");

  // 	},
  // 	changeFn: function(li, index, combox) {

  // 		var _this = this;

  // 		this.input.value = li.getAttribute("value");

  // 	}
  // });

  hamburger("js-hamburger", "js-menu");

  $("[type=tel]").inputmask("+7 (999) 999-99-99");

  // Прибивка адаптивного футера к низу
  (function (footerSelector, wrapperSelector) {
    var footer = document.querySelector(footerSelector);
    var wrapper = document.querySelector(wrapperSelector);
    var height;
    var setSize;

    if (!wrapper || !footer) {
      return false;
    }

    setSize = function () {
      height = footer.offsetHeight;

      wrapper.style.paddingBottom = height + "px";
      footer.style.marginTop = height * -1 + "px";
    };

    setSize();

    window.addEventListener("resize", setSize, false);
  })("#js-footer", "#js-wrapper");
});