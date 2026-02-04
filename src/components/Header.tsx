import { Bars3Icon, MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useScrollDirection } from "@/hooks";
import { Link } from "react-router-dom";

export default function Header() {
    const direction = useScrollDirection();

    const headerStyle = {
        top: direction === "down" ? "0" : "30px",
    };

    return (
        <header className="w-full h-20 p-4 sticky top-7.5 z-20 flex items-center justify-center bg-neutral-950/90 backdrop-blur-xl transition-all duration-300 ease-out" style={headerStyle}>
            <div className="size-full flex items-center justify-between">
                <div className="w-full flex items-center justify-start">
                    <button className="size-10 flex items-center justify-center rounded-md hover:bg-neutral-700/50 transition-all duration-300 ease-out cursor-pointer">
                        <Bars3Icon className="size-6 text-white" />
                    </button>
                </div>
                <div className="w-full flex items-center justify-center">
                    <Link to="/" className="flex items-center justify-center">
                        <span className="font-bold text-2xl text-white">
                            Daniel Ospid
                        </span>
                    </Link>
                </div>
                <div className="w-full flex items-center justify-end">
                    <button className="size-10 flex items-center justify-center rounded-md hover:bg-neutral-700/50 transition-all duration-300 ease-out cursor-pointer">
                        <MagnifyingGlassIcon className="size-6 text-white" />
                    </button>
                    <button className="size-10 flex items-center justify-center rounded-md hover:bg-neutral-700/50 transition-all duration-300 ease-out cursor-pointer">
                        <UserIcon className="size-6 text-white" />
                    </button>
                    <button className="size-10 flex items-center justify-center rounded-md hover:bg-neutral-700/50 transition-all duration-300 ease-out cursor-pointer">
                        <ShoppingBagIcon className="size-6 text-white" />
                    </button>
                </div>
            </div>
        </header>
    )
}