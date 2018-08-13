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
  $(".slideThree label").click(function () {
    $(this.parentNode).toggleClass("active");
  });
  $(".js_span__math").click(function () {
    $(this.parentNode).toggleClass("active");
  });
 
  $(".js_nav__text").click(function () {
    $(this).toggleClass("active");
  });
  $(".js-table__block").click(function () {
    $(this).toggleClass("active");
  });
  $(".js_download").click(function () {
    $(".editing-task").addClass("editing-task__active");
  });
  $(".js_span_close").click(function () {
    $(".editing-task").removeClass("editing-task__active");
  });
  $(".js_span_close").click(function () {
    $(".orders-edit").removeClass("orders-edit_active");
  });
  $(".js__span__manager").click(function () {
    $(this).toggleClass("active");
  });
  $(".js__span__consist__img").click(function () {
    $(".orders-edit").addClass("orders-edit_active");
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