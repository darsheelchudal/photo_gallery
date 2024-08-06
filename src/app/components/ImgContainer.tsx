import Image from "next/image";
import type { Photo } from "@/models/Images.model";

type Props = {
  photo: Photo;
};

export default function ImgContainer({ photo }: Props) {
  return (
    <>
      <div key={photo.id} className="h-64 bg-gray-200 rounded-xl ">
        <Image src={photo.src.large} alt={photo.alt} height={250} width={250} />
      </div>
    </>
  );
}
