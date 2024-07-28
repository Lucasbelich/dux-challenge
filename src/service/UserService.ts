import { User } from "@/interfaces/UserInterface";

const fetchOptions = (method: string, body?: object): RequestInit => ({
  method,
  headers: { "Content-Type": "application/json" },
  body: body ? JSON.stringify(body) : undefined,
});

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getAllUsers() {
  const res = await fetch(`${apiUrl}?sector=2000`);
  return res.json();
}

export async function getUserById(id: string) {
  const res = await fetch(`${apiUrl}?sector=2000&id=${id}`);
  return res.json();
}

export async function createUser(user: User): Promise<void> {
  await fetch(`${apiUrl}?sector=2000`, fetchOptions("POST", user));
}

export async function editUser(user: User): Promise<void> {
  await fetch(`${apiUrl}/${user.id}`, fetchOptions("PATCH", user));
}

export async function deleteUser(id: string) {
  await fetch(`${apiUrl}/${id}`, fetchOptions("DELETE"));
}
