import { useEffect, useState } from "react";
import { collection, onSnapshot, type Firestore } from "firebase/firestore";

// Definimos la forma de tu producto basándonos en tu diseño anterior
export interface Product {
  id: string;
  title: string;
  price: number;
  img_def: string;
  img_hov: string;
  gallery: string[];
  category: string;
  stock: boolean;
}

export function useProducts(db: Firestore) {
  // Le decimos al estado que guardará un array de Productos
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const productsRef = collection(db, "products");

    const unsubscribe = onSnapshot(productsRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        // Hacemos un "cast" para que TS sepa que esto cumple con la interfaz Product
        return { ...doc.data(), id: doc.id } as Product;
      });
      setProducts(data);
    });

    return () => unsubscribe();
  }, [db]);

  return products;
}