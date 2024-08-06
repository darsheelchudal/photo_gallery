import { z } from "zod";

const BasicImageSchema = z.object({
  page: z.number(),
  per_page: z.number(),
  total_results: z.number(),
  prev_page: z.string().optional(),
  next_page: z.string().optional(),
});

const PhotoSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  src: z.object({
    large: z.string(),
  }),
  alt: z.string(),
  blurredDataUrl: z.string().optional(),
});

export const ImagesSchemaWithPhotos = BasicImageSchema.extend({
  photos: z.array(PhotoSchema),
});

export type Photo = z.infer<typeof PhotoSchema>;
export type ImagesResults = z.infer<typeof ImagesSchemaWithPhotos>;

// {
//     "page": 1,
//     "per_page": 1,

//     "next_page": "https://api.pexels.com/v1/curated/?page=2&per_page=1"
//   }

//   "photos": [
//     {
//       "id": 2880507,
//       "width": 4000,
//       "height": 6000,
//       "url": "https://www.pexels.com/photo/woman-in-white-long-sleeved-top-and-skirt-standing-on-field-2880507/",
//       "photographer": "Deden Dicky Ramdhani",
//       "photographer_url": "https://www.pexels.com/@drdeden88",
//       "photographer_id": 1378810,
//       "avg_color": "#7E7F7B",
//       "src": {
//         "original": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg",
//         "large2x": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//         "large": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
//         "medium": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=350",
//         "small": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=130",
//         "portrait": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//         "landscape": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//         "tiny": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
//       },
//       "liked": false,
//       "alt": "Brown Rocks During Golden Hour"
//     }
//   ],
