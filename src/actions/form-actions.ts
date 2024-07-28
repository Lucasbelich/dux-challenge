"use server";

import { User } from "@/interfaces/UserInterface";
import { createUser, deleteUser, editUser } from "@/service/UserService";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function onEdit(formData: FormData) {
  const id = formData.get("id");
  const usuario = formData.get("name");
  const estado = formData.get("status");
  const sector = formData.get("sector");
  const sectorNum = sector ? parseInt(sector as string) : null;

  if (!id || !usuario || !estado || !sector) return;

  const editUserData: User = {
    id: id as string,
    estado: estado as string,
    sector: sectorNum as number,
    usuario: usuario as string,
  };

  await editUser(editUserData);
  revalidatePath("/users");

  return editUserData;
}

export async function onCreate(formData: FormData) {
  const id = formData.get("id");
  const usuario = formData.get("name");
  const estado = formData.get("status");
  const sector = formData.get("sector");
  const sectorNum = sector ? parseInt(sector as string) : null;
  if (!id || !usuario || !estado || !sector) return;

  const newUserData: User = {
    id: id as string,
    estado: estado as string,
    sector: sectorNum as number,
    usuario: usuario as string,
  };

  await createUser(newUserData);
  revalidatePath("/users");

  return newUserData;
}

export async function removeUser(formData: FormData) {
  const userId = formData.get("id")?.toString();
  if (userId) {
    await deleteUser(userId);
    revalidatePath("/users");
    redirect("/users");
  }
}
