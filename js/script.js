// salam
$(window).on("load", function () {
  $(".Salam").addClass("muncul");
});

$(window).on("load", function () {
  $(".Keluarga_Utuh").addClass("muncul");
});

// paralaxx
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  if (wScroll > $(".Keluarga_Tak_Utuh").offset().top - 600) {
    $(".Keluarga_Tak_Utuh").addClass("muncul");
  }

  if (wScroll > $(".Keluarga_Tak_Utuh2").offset().top - 600) {
    $(".Keluarga_Tak_Utuh2").addClass("muncul");
  }

  if (wScroll > $(".Jika_Ia_Telah_Tiada").offset().top - 600) {
    $(".Jika_Ia_Telah_Tiada").addClass("muncul");
  }

  if (wScroll > $(".Mungkin").offset().top - 600) {
    $(".Mungkin").addClass("muncul");
  }

  if (wScroll > $(".palestina").offset().top - 600) {
    $(".palestina").addClass("muncul");
  }

  if (wScroll > $(".sPesan").offset().top - 600) {
    $(".sPesan").addClass("muncul");
  }

  if (wScroll > $(".Pesan").offset().top - 600) {
    $(".Pesan").addClass("muncul");
  }

  if (wScroll > $(".Buah").offset().top - 600) {
    $(".Buah").addClass("muncul");
  }

  if (wScroll > $(".Danjika").offset().top - 600) {
    $(".Danjika").addClass("muncul");
  }

  if (wScroll > $(".Dan_Ku_Ucapakan").offset().top - 600) {
    $(".Dan_Ku_Ucapakan").addClass("muncul");
  }

  if (wScroll > $(".Dipersembahkanoleh").offset().top - 600) {
    $(".Dipersembahkanoleh").addClass("muncul");
  }
});
