"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export const addFavoriteAction = async (public_id: string, path: string) => {
  await cloudinary.v2.uploader.add_tag("favorite", [public_id]);
  revalidatePath(path);
};

export const removeFavoriteAction = async (public_id: string, path: string) => {
  await cloudinary.v2.uploader.remove_tag("favorite", [public_id]);
  revalidatePath(path);
};
