import cloudinary from "cloudinary";
import UploadButton from "~/components/UploadButton";
import CloudinaryImage from "~/components/ui/CloudinaryImage";

type SearchResult = {
  resources: { public_id: string; tags: string[] }[];
};

const Gallery = async () => {
  const { resources } = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(10)
    .execute()) as SearchResult;

  return (
    <section className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <UploadButton />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {resources.map((res) => {
          return (
            <CloudinaryImage
              key={res.public_id}
              src={res.public_id}
              favorite={res.tags.includes("favorite")}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
