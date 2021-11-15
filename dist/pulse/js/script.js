$(document).ready(function () {
  $(".carousel__inner").slick({
    infinite: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev1"></button>',
    nextArrow: '<button type="button" class="slick-next1"></button>',
  });

  $("ul.catalog__tabs").on("click", "li", function () {
    console.log("Нажатие вижу");
    $(this)
      .addClass("catalog__tab--active")
      .siblings()
      .removeClass("catalog__tab--active")
      .closest("div.container")
      .find("div.catalog__content")
      .removeClass("catalog__content--active")
      .eq($(this).index())
      .addClass("catalog__content--active");
    console.log($(this).index());
  });

  function linkChange(className) {
    $(className).each(function (i) {
      $(this).on("click", function (ev) {
        ev.preventDefault();
        console.log("я тут!");
        $(".catalog-item__wrapper")
          .eq(i)
          .toggleClass("catalog-item__wrapper--right-part");
      });
    });
  }
  linkChange(".catalog-item__link--more");
  linkChange(".catalog-item__link--back");

  // modals

  $('[data-modal = "consult"]').on("click", function () {
    $("#consult, .overlay").fadeIn();
  });

  $(".modal__close").on("click", function () {
    $(".modal, .overlay").fadeOut();
  });

  // $(".button--buy").on("click", function () {
  //   $("#order, .overlay").fadeIn();
  // });

  $(".button--buy").each(function (i) {
    $(this).on("click", function () {
      text = $(".catalog-item__title")
        .eq(Math.floor(i / 2))
        .text();
      $(".modal__desc").text(text);
      $("#order, .overlay").fadeIn();
    });
  });

  // $("form").each(function () {
  //   $(this).validate();
  // });

  $(".consults__form").validate({
    messages: {
      name: {
        required: "Заполни имя свое!",
      },
      phone: {
        required: "Телефон-то че?",
        number: "Вводи телефон мля, а не че попало",
      },
      email: {
        required: "Мыло вводи",
        email: "@ на что в имейле? пиши!",
      },
    },
  });
  $("#consult form").validate();

  $("input[name=phone]").mask("8 (000)-00-00");

  $("form").submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/mailer.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      $("#consult, #order").fadeOut();
      $("#thanks, .overlay").fadeIn();
      $("form").trigger("reset");
    });

    $(this).find("input").val(""); // это для локалки, на сервере надо убрать
    $("#consult, #order").fadeOut(); // это для локалки, на сервере надо убрать
    $("#thanks, .overlay").fadeIn(); // это для локалки, на сервере надо убрать
    $("form").trigger("reset"); // это для локалки, на сервере надо убрать
    return false;
  });
});
