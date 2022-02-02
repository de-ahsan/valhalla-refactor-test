function ImageGridViewRenderer() {}

ImageGridViewRenderer.prototype.render = function () {
  const ImageCard = new ImageCardRenderer();
  let page = 1;
  let category = "nature";

  if (window.location.search.includes("page")) {
    page = Number(window.location.search.split("page=")[1]);
  }

  document.getElementById("main-view").innerHTML +=
    '<div class="container">' +
    '  <div id="images" class="row row-cols-3"></div>' +
    "</div>";

  if (window.location.search.includes("?nature")) {
    category = "nature";
  } else if (window.location.search.includes("?architecture")) {
    category = "architecture";
  } else if (window.location.search.includes("?fashion")) {
    category = "fashion";
  }

  ImageDataGetter.getImages(category, page * 3 - 2).then((images) =>
    images.map((image) => ImageCard.render(image.url, image.name))
  );

  ImageDataGetter.getImages(category, page * 3 - 1).then((images) =>
    images.map((image) => ImageCard.render(image.url, image.name))
  );

  ImageDataGetter.getImages(category, page * 3).then((images) =>
    images.map((image) => ImageCard.render(image.url, image.name))
  );

  var prevsearchstr =
    window.location.search.split("&page")[0] + "&page=" + (page - 1);
  var nextsearchstr =
    window.location.search.split("&page")[0] + "&page=" + (page + 1);
  var pagination =
    "<nav>" +
    '  <ul class="pagination">' +
    '    <li class="page-item"><a class="page-link" href="' +
    prevsearchstr +
    '">Previous</a></li>' +
    '    <li class="page-item"><a class="page-link" href="' +
    nextsearchstr +
    '">Next</a></li>' +
    "  </ul>" +
    "</nav>";

  document.getElementById("main-view").innerHTML += pagination;
};
