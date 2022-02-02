NavBarRenderer = function () {};

NavBarRenderer.prototype.render = function () {
  var nav =
    '<nav class="navbar navbar-expand-lg navbar-light bg-light">' +
    '  <a class="navbar-brand" href="#">Photo Sharing App</a>' +
    '  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">' +
    '    <span class="navbar-toggler-icon"></span>' +
    "  </button>" +
    '  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">' +
    '    <div class="navbar-nav">' +
    '      <a class="nav-link active" href="?nature">Nature <span class="sr-only">(current)</span></a>' +
    '      <a class="nav-link" href="?architecture">Architecture</a>' +
    '      <a class="nav-link" href="?fashion">Fashion</a>' +
    "    </div>" +
    "  </div>" +
    "</nav>";

  document.getElementById("main-view").innerHTML = nav;
};
