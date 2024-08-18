import React from "react";
import { API_URL_DEV } from "../settings";

export function useUser() {
  const getUsers = async () => {
    let url = `${process.env.API_URL_DEV}/usuarios`;
    const users = await fetch(url);
    return users;
  };

  const getUserById = async ({ id }: { id: string }) => {
    let url = `${API_URL_DEV}/usuarios/${id}`;
    const user = await fetch(url);
    return user;
  };

  return { getUsers, getUserById };
}
