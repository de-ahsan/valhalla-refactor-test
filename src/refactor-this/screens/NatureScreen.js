import React, { useState, useEffect } from "react";
import { Bars } from "react-loader-spinner";

import { getImages } from "../API/imageAPI";
import ImageCard from "../components/ImageCard";
import Loader from "../components/Loader";
import Paginator from "../components/Paginator";
import { NATURE } from "../constants/general";

const NatureScreen = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [end, setEnd] = useState(false);
  const [imagesPage1, setImagesPage1] = useState([]);
  const [imagesPage2, setImagesPage2] = useState([]);
  const [imagesPage3, setImagesPage3] = useState([]);

  useEffect(() => {
    setLoading(true);

    getImages(NATURE, page * 3 - 2).then((response) => {
      setImagesPage1(response.data);
      setLoading(false);
    });

    getImages(NATURE, page * 3 - 1).then((response) => {
      setImagesPage2(response.data);
      setLoading(false);
    });

    getImages(NATURE, page * 3).then((response) => {
      setImagesPage3(response.data);
      setEnd(response.data.length === 0);
      setLoading(false);
    });
  }, [page]);

  return (
    <>
      <div className="container">
        <div id="images" className="row row-cols-3">
          {loading ? (
            <Loader />
          ) : (
            <>
              {imagesPage1.map((image) => (
                <ImageCard url={image.url} name={image.name} key={image.url} />
              ))}

              {imagesPage2.map((image) => (
                <ImageCard url={image.url} name={image.name} key={image.url} />
              ))}

              {imagesPage3.map((image) => (
                <ImageCard url={image.url} name={image.name} key={image.url} />
              ))}
            </>
          )}
        </div>
      </div>

      <Paginator
        prev={() => setPage(page - 1)}
        next={() => setPage(page + 1)}
        page={page}
        end={end}
      />
    </>
  );
};

export default NatureScreen;
