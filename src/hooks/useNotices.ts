import { useEffect, useState } from "react";
import { collection, onSnapshot, type Firestore } from "firebase/firestore";

export interface Notice {
  id: string;
  text: string;
  link: string;
  show: boolean;
  order: number;
}

export function useNotices(db: Firestore) {
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    const noticesRef = collection(db, "notices");

    const unsubscribe = onSnapshot(noticesRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id } as Notice;
      });
      setNotices(data);
    });

    return () => unsubscribe();
  }, [db]);

  return notices;
}