"use client";
import { ImageUp } from "lucide-react";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const UploadButton = () => {
  const router = useRouter();

  return (
    <div>
      <Button asChild>
        <CldUploadButton
          uploadPreset="lggjggrj"
          onSuccess={() => {
            setTimeout(() => {
              router.refresh();
            }, 1000);
          }}
        >
          <ImageUp className="mr-2 h-4 w-4" /> Upload
        </CldUploadButton>
      </Button>
    </div>
  );
};

export default UploadButton;
