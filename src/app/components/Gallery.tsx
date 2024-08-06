import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from "@/models/Images.model";
import { addBlurredData } from "@/lib/getBase64";
import React from "react";
import ImgContainer from "./ImgContainer";

type props = {
  topic?: string | undefined;
};

const Gallery = async ({ topic }: props) => {
  console.log(topic);
  const url = !topic
    ? "https://api.pexels.com/v1/curated"
    : `https://api.pexels.com/v1/search?query=${topic}`;
  const images: ImagesResults | undefined = await fetchImages(url);
  if (!images) {
    return <h2 className="m-4 text-2xl">No Image Found</h2>;
  }
  const photosWithBlur = await addBlurredData(images);
  console.log(images);
  return (
    <>
      <section className="grid gap-2 grid-cols-gallery col-span-3 px-2 my-3">
        {photosWithBlur.map((photo) => (
          <ImgContainer photo={photo} key={photo.id} />
        ))}
      </section>
    </>
  );
};

export default Gallery;
