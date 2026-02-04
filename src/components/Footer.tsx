import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Footer() {
    return (
        <footer className="w-full pt-12 pb-8 px-6 bg-neutral-50 border-y border-neutral-200 text-neutral-950">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-12">
                
                {/* Newsletter Section */}
                <div className="flex flex-col gap-4 max-w-sm">
                    <h3 className="font-bold text-lg tracking-tight">Únete a la comunidad</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                        Recibe actualizaciones exclusivas sobre nuevos lanzamientos, música y eventos especiales de Daniel Ospid.
                    </p>
                    <form className="mt-2 group">
                        <div className="relative flex items-center transition-all duration-300 focus-within:ring-1 focus-within:ring-neutral-400 rounded-lg overflow-hidden border border-neutral-300 bg-white">
                            <input 
                                type="email" 
                                placeholder="Tu correo electrónico" 
                                className="w-full h-11 px-4 text-sm outline-none bg-transparent" 
                            />
                            <motion.button 
                                whileHover={{ backgroundColor: "#171717" }}
                                whileTap={{ scale: 0.95 }}
                                type="submit" 
                                className="h-11 px-6 bg-neutral-900 text-neutral-50 text-xs font-medium transition-colors cursor-pointer"
                            >
                                Suscribirme
                            </motion.button>
                        </div>
                    </form>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest">
                        Al suscribirte, aceptas nuestra política de datos.
                    </span>
                </div>

                {/* Navigation Links */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-16">
                    <FooterColumn title="Explorar">
                        <FooterLink to="/">Inicio</FooterLink>
                        <FooterLink to="/shop">Tienda</FooterLink>
                        <FooterLink to="/about">Sobre Daniel</FooterLink>
                        <FooterLink to="/blog">Blog</FooterLink>
                    </FooterColumn>

                    <FooterColumn title="Ayuda">
                        <FooterLink to="/faq">FAQs</FooterLink>
                        <FooterLink to="/shipping">Envíos</FooterLink>
                        <FooterLink to="/returns">Devoluciones</FooterLink>
                        <FooterLink to="/contact">Contacto</FooterLink>
                    </FooterColumn>

                    <FooterColumn title="Social">
                        <FooterLink href="https://instagram.com/danielospid">Instagram</FooterLink>
                        <FooterLink href="https://tiktok.com/@danielospid">TikTok</FooterLink>
                        <FooterLink href="https://youtube.com/danielospid">YouTube</FooterLink>
                        <FooterLink href="https://twitter.com/danielospid">Twitter</FooterLink>
                    </FooterColumn>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-neutral-500 font-mono italic">
                    &copy; {new Date().getFullYear()} DANIEL OSPID. Est. 2021.
                </span>
                <div className="flex items-center gap-6">
                    <Link to="/policies/privacy" className="text-[11px] text-neutral-500 hover:text-neutral-950 transition-colors">Privacidad</Link>
                    <Link to="/policies/terms" className="text-[11px] text-neutral-500 hover:text-neutral-950 transition-colors">Términos</Link>
                </div>
            </div>
        </footer>
    );
}

// Componentes auxiliares para mantener el código limpio y profesional
function FooterColumn({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-4">
            <span className="font-bold text-xs uppercase tracking-[0.2em] text-neutral-400">{title}</span>
            <ul className="flex flex-col gap-2.5">{children}</ul>
        </div>
    );
}

function FooterLink({ children, to, href }: { children: React.ReactNode, to?: string, href?: string }) {
    const className = "text-sm text-neutral-600 hover:text-neutral-950 transition-all duration-200 hover:translate-x-1 inline-block";
    
    if (href) {
        return (
            <li>
                <motion.a whileHover={{ x: 4 }} href={href} target="_blank" rel="noopener noreferrer" className={className}>
                    {children}
                </motion.a>
            </li>
        );
    }

    return (
        <li>
            <motion.div whileHover={{ x: 4 }}>
                <Link to={to || "/"} className={className}>{children}</Link>
            </motion.div>
        </li>
    );
}