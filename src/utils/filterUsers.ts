import { User } from "@/interfaces/UserInterface";

export const filterUsers = (
  allUsers: User[],
  globalFilterValue: string,
  selectedState: string
): User[] => {
  let filtered = allUsers;

  if (globalFilterValue) {
    filtered = filtered.filter((user) =>
      user.usuario.toLowerCase().includes(globalFilterValue.toLowerCase())
    );
  }

  if (selectedState) {
    filtered = filtered.filter((user) => user.estado === selectedState);
  }

  return filtered;
};
