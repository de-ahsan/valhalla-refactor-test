ImageDataGetter = () => {};

ImageDataGetter.getImages = (category, page = 1) => {
  var images = [];
  return fetch(`http://localhost:8888/images?category=${category}&page=${page}`)
    .then((response) => response.json())
    .then((result) => {
      console.log("Done");
      return result;
    });
};
