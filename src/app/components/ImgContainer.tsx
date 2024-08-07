import Image from "next/image";
import type { Photo } from "@/models/Images.model";
import Link from "next/link";

type Props = {
  photo: Photo;
};

export default function ImgContainer({ photo }: Props) {
  console.log(photo);
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;
  return (
    <>
      {/* <div className="h-64 bg-gray-200  relative "> */}
      <div
        className="justify-self-center w-[250px]"
        style={{ gridRow: `span ${photoSpans}` }}
      >
        <Link
          href={photo.url}
          target="_blank"
          className="grid place-content-center"
        >
          <div className="rounded-xl overflow-hidden group">
            <Image
              src={photo.src.large}
              alt={photo.alt}
              // fill={true}
              width={250}
              height={galleryHeight}
              className="group-hover:opacity-75"
              // sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
              sizes="250px"
              placeholder="blur"
              blurDataURL={photo.blurredDataUrl}
            />
          </div>
        </Link>
      </div>
    </>
  );
}
