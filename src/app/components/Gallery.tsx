import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from "@/models/Images.model";

import React from "react";

const Gallery = async () => {
  const url = "https://api.pexels.com/v1/curated";
  const images: ImagesResults | undefined = await fetchImages(url);
  if (!images) {
    return <h2 className="m-4 text-2xl">No Image Found</h2>;
  }
  console.log(images);
  return (
    <>
      <section>
        <ul>
          {images.photos.map((photo) => (
            <li key={photo.id}>{photo.src.large}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Gallery;
