export default () => {
    const windowHeight = $(window).height();
    $(window).scroll(function () {
      if ($(window).scrollTop() > windowHeight) {
        $(".arrowTop").addClass("show");
      } else {
        $(".arrowTop").removeClass("show");
      }
    });
    $(".arrowTop").click(function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        600
      );
      return false;
    });
  };