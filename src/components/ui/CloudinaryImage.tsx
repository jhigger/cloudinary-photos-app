"use client";
import { Heart, Loader } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { usePathname } from "next/navigation";
import { useState, useTransition } from "react";
import { addFavoriteAction, removeFavoriteAction } from "~/app/gallery/actions";
import { cn } from "~/lib/utils";
import { Button } from "./button";

type Props = {
  src: string;
  favorite: boolean;
};

const CloudinaryImage = ({ src, favorite }: Props) => {
  const path = usePathname();
  const [transition, startTransition] = useTransition();
  const [isFavorite, setIsFavorite] = useState(favorite);

  const toggleRed = () => {
    setIsFavorite((prev) => !prev);
  };

  const handleFavorite = () => {
    if (!isFavorite) {
      startTransition(() => addFavoriteAction(src, path));
    } else {
      startTransition(() => removeFavoriteAction(src, path));
    }

    toggleRed();
  };

  return (
    <div className="relative">
      <CldImage
        width="500"
        height="300"
        src={src}
        sizes="100vw"
        alt="cloudinary image"
        className="rounded border"
        priority
      />
      <Button
        variant="ghost"
        className="absolute right-2 top-2 h-8 w-8 rounded-full p-0"
        onClick={handleFavorite}
      >
        {transition ? (
          <Loader className="animate-spin" />
        ) : (
          <Heart className={cn(isFavorite && "fill-red-500")} />
        )}
      </Button>
    </div>
  );
};

export default CloudinaryImage;
