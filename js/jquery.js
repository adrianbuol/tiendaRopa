$(function () {
  // Imagenes
  $("section>div>img").click(function () {
    var ruta = $(this).attr("src");
    $(this).siblings(":first-child").attr("src", ruta);
  });

  // Ventana Emergente > Forma
  let wh = window.innerHeight;
  let ww = window.innerWidth;

  $("#ventanaEmergente").height(wh / 2);
  $("#ventanaEmergente").width(ww / 2);
  $("#ventanaEmergente").css({ top: wh / 4, left: ww / 4 });

  // Ventana Emergente > Mostrar > Añadir Imagen
  $("section>div>img:first-of-type").click(function () {
    $("#ventanaEmergente").css("display", "flex");
    $("#ventanaEmergente").find("img").remove();

    $(this).clone().prependTo("#ventanaEmergente").slideToggle("slow");
  });

  // Ventana Emergente > Imagen > Ampliar
  // $("#ventanaEmergente").on("mouseenter", "img", function () {
  //   console.log("hola");
  //   // $("#venanaEmergente>img").css("height:100px");
  // });

  // Ventana Emergente > Cerrar
  $("#ventanaEmergente>button").click(function () {
    $("#ventanaEmergente").css("display", "none");
  });

  if (ww < 600) {
    $("nav > ul").on("mouseenter", function () {
      $("main > div > h2 > span").css("opacity", "0.01");
      $("main > div > div > h3").css("opacity", "0.01");
    });
    $("nav > ul").on("mouseleave", function () {
      $("main > div > h2 > span").css("opacity", "1");
      $("main > div > div > h3").css("opacity", "1");
    });
  }
});
