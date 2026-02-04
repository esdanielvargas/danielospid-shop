import { useProducts } from "../hooks/useProducts"
import { motion } from "motion/react";
import { db } from "../firebase";

export default function Home() {
  const products = useProducts(db);

  return (
    <div className="">
      <h1 className="sr-only">Productos de Daniel Ospid</h1>
      <div className="w-full max-w-350 mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">
        {products.filter(product => product.img_def).map((product) => (
          <div key={product.id} className="p-4 rounded-xl bg-neutral-50 cursor-pointer">
            {product.gallery && product.gallery.length > 0 ? (
              <motion.img whileHover={{ y: -4 }} whileTap={{ y: -6 }} src={product.gallery[0]} alt={product.title} title={product.title} width={200} height={200} loading="eager" className="w-full aspect-square object-cover rounded-md" />
            ) : (
              <motion.img whileHover={{ y: -4 }} whileTap={{ y: -6 }} src={product.img_def} alt={product.title} title={product.title} width={200} height={200} loading="eager" className="w-full aspect-square object-cover rounded-md" />
            )}
            <h2 className="line-clamp-1 text-base font-bold text-neutral-950" title={product.title}>{product.title}</h2>
            <p className="text-neutral-400">${product.price.toFixed(2)} USD</p>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-2 w-full py-2 bg-neutral-900 text-neutral-50 text-sm font-medium rounded-md hover:bg-neutral-800 transition-colors cursor-pointer">Agregar al carrito</motion.button>
          </div>
        ))}
      </div>
    </div>
  )
}