import { getPlaiceholder } from "plaiceholder";
import type { Photo, ImagesResults } from "@/models/Images.model";
import { promise } from "zod";

const getBase64 = async (getImageUrl: string) => {
  try {
    const res = await fetch(getImageUrl);
    if (!res.ok) {
      throw new Error(`Failed to fetch image ${res.status} ${res.statusText}`);
    }
    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    console.log(base64);
    return base64;
  } catch (err) {
    if (err instanceof Error) console.log(err.stack);
  }
};

export const addBlurredData = async (
  images: ImagesResults
): Promise<Photo[]> => {
  //Make all request at once instead of awaiting each one avoiding a waterfall
  const base64Promises = images.photos.map((photo) =>
    getBase64(photo.src.large)
  );
  //Resolve all requests in order
  const base64Results = await Promise.all(base64Promises);

  const photosWithBlur: Photo[] = images.photos.map((photo, i) => {
    photo.blurredDataUrl = base64Results[i];
    return photo;
  });
  return photosWithBlur;
};
