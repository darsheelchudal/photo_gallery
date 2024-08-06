import type { ImagesResults } from "@/models/Images.model";
import { ImagesSchemaWithPhotos } from "@/models/Images.model";
import env from "./env";

const fetchImages = async (url: string): Promise<ImagesResults | undefined> => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: env.PEXELS_API_KEY,
      },
    });
    if (!response.ok) throw new Error("Fetch Image Error");
    const imagesResults: ImagesResults = await response.json();
    console.log(imagesResults);
    //Parse data with zod schema
    const parsedData = ImagesSchemaWithPhotos.parse(imagesResults);
    if (parsedData.total_results === 0) return undefined;
    return parsedData;
  } catch (err) {
    //Will show in terminal console
    if (err instanceof Error) console.log(err.stack);
  }
};

export default fetchImages;
