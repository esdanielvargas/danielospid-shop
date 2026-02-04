import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { useEffect, useState } from "react";
import type { Firestore } from "firebase/firestore"; // Importamos el tipo real de la base de datos

export function useAuth(db: Firestore) {
  const [auth, setAuth] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      setAuth(user || null);
    });

    return () => unsubscribe();
  }, [db]);

  return auth;
}