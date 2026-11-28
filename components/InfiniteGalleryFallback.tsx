import Image from "next/image";
import type { ImageItem } from "./InfiniteGallery";

export default function InfiniteGalleryFallback({
  images,
  title,
}: {
  images: ImageItem[];
  title: string;
}) {
  const normalizedImages = images.map((image, index) =>
    typeof image === "string"
      ? { src: image, alt: `${title} project image ${index + 1}` }
      : { ...image, alt: image.alt || `${title} project image ${index + 1}` },
  );

  return (
    <div className="relative flex h-full min-h-[280px] flex-col items-center justify-center overflow-hidden bg-white/70 p-4 text-black">
      <h2 className="mb-4 text-center text-3xl font-serif italic text-black/70 sm:text-5xl">
        {title}
      </h2>
      <div className="grid w-full max-h-96 grid-cols-2 gap-4 overflow-y-auto md:grid-cols-3">
        {normalizedImages.map((image, index) => (
          <Image
            key={index}
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            width={640}
            height={360}
            sizes="(max-width: 768px) 50vw, 33vw"
            loading="lazy"
            className="h-36 w-full rounded-2xl border border-zinc-200 object-cover"
          />
        ))}
      </div>
    </div>
  );
}
