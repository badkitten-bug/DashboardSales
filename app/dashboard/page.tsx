"use client";

import { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";

export default function Page() {
  const { getUserById } = useUser();
  const [user, setUser] = useState({ Nombre: "" });

  useEffect(() => {
    getUserById({ id: "1" })
      .then((data: any) => {
        return data.json();
      })
      .then((user: any) => {
        console.log(user);
        setUser(user);
      });
  }, []);

  return <p>Dashboard Page, Soy {user?.Nombre}</p>;
}
