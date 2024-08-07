import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from "@/models/Images.model";
import { addBlurredData } from "@/lib/getBase64";
import React from "react";
import ImgContainer from "./ImgContainer";

type props = {
  topic?: string | undefined;
};

const Gallery = async ({ topic }: props) => {
  const url = !topic
    ? "https://api.pexels.com/v1/curated"
    : `https://api.pexels.com/v1/search?query=${topic}`;
  const images: ImagesResults | undefined = await fetchImages(url);
  if (!images) {
    return <h2 className="m-4 text-2xl">No Image Found</h2>;
  }
  const photosWithBlur = await addBlurredData(images);
  console.log(photosWithBlur);
  return (
    <>
      <section className="grid grid-cols-gallery col-span-3 px-1 my-3 auto-rows-[10px]">
        {photosWithBlur.map((photo) => (
          <ImgContainer photo={photo} key={photo.id} />
        ))}
      </section>
    </>
  );
};

export default Gallery;
