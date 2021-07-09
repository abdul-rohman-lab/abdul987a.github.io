// salam
$(window).on("load", function () {
  $(".Salam").addClass("muncul");
});

// $(window).on("load", function () {
//   $(".gaberasaya").addClass("muncul");
// });

// paralaxx
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  if (wScroll > $(".gaberasaya").offset().top - 350) {
    $(".gaberasaya").addClass("muncul");
  }

  if (wScroll > $(".Biasanya").offset().top - 450) {
    $(".Biasanya").addClass("muncul");
  }

  if (wScroll > $(".Merasatidak").offset().top - 430) {
    $(".Merasatidak").addClass("muncul");
  }

  if (wScroll > $(".Jika_kamu").offset().top - 350) {
    $(".Jika_kamu").addClass("muncul");
  }

  if (wScroll > $(".menyesakkan").offset().top - 350) {
    $(".menyesakkan").addClass("muncul");
  }

  if (wScroll > $(".Tapi_teman").offset().top - 300) {
    $(".Tapi_teman").addClass("muncul");
  }

  if (wScroll > $(".Karena").offset().top - 600) {
    $(".Karena").addClass("muncul");
  }

  if (wScroll > $(".Pesan").offset().top - 600) {
    $(".Pesan").addClass("muncul");
  }

  if (wScroll > $(".dan_jika").offset().top - 600) {
    $(".dan_jika").addClass("muncul");
  }

  if (wScroll > $(".Danjika").offset().top - 600) {
    $(".Danjika").addClass("muncul");
  }

  if (wScroll > $(".berjuang").offset().top - 650) {
    $(".berjuang").addClass("muncul");
  }

  if (wScroll > $(".share").offset().top - 600) {
    $(".share").addClass("muncul");
  }

  // if (wScroll > $(".Dan_Ku_Ucapakan").offset().top - 600) {
  //   $(".Dan_Ku_Ucapakan").addClass("muncul");
  // }

  if (wScroll > $(".Dipersembahkanoleh").offset().top - 500) {
    $(".Dipersembahkanoleh").addClass("muncul");
  }
});
