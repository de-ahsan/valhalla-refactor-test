function ImageCardRenderer() {}

ImageCardRenderer.prototype.render = function (url, name) {
  const col = document.createElement("div");
  col.className = "col";

  const image = document.createElement("img");
  image.className = "image";
  image.src = url;
  image.alt = name;

  col.appendChild(image);

  const middle = document.createElement("div");
  middle.className = "middle";

  const download = document.createElement("a");
  download.className = "btn btn-dark";
  download.href = `${url}`;
  download.download = `${name}`;
  download.innerHTML = "DOWNLOAD";

  middle.appendChild(download);

  col.appendChild(middle);

  document.getElementById("images").appendChild(col);
};
