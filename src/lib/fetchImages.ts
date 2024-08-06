import type { ImageResults } from "@/models/Images.model";
import { ImagesSchemaWithPhotos } from "@/models/Images.model";

const fetchImages = async (url: string): Promise<ImageResults> => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: process.env.PEXELS_API_KEY,
      },
    });
  } catch (err) {
    console.log("Error", err);
  }
};

export default fetchImages;
