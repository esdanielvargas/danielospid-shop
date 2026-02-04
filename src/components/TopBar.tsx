import { useNotices, useScrollDirection } from "@/hooks";
import { motion, AnimatePresence } from "motion/react";
import type { Notice } from "@/hooks/useNotices";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "@/firebase";

export default function TopBar() {
    const notices = useNotices(db);
    const direction = useScrollDirection();
    const [currentMessage, setCurrentMessage] = useState(0);

    const activeNotices = notices
        .filter((item) => item.show)
        .sort((a, b) => a.order - b.order);

    useEffect(() => {
        if (activeNotices.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentMessage((prev) => (prev + 1) % activeNotices.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [activeNotices.length]);

    const headerStyle = {
        top: direction === "down" ? "-30px" : "0",
    };

    return (
        <div
            className="w-full min-h-7.5 px-4 sticky top-0 z-15 flex items-center justify-center bg-neutral-950 transition-all duration-300 ease-out overflow-hidden"
            style={headerStyle}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {activeNotices.length > 0 && (
                        <motion.div
                            key={activeNotices[currentMessage]?.id}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute flex items-center justify-center w-full"
                        >
                            <NoticeContent notice={activeNotices[currentMessage]} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

function NoticeContent({ notice }: { notice: Notice }) {
    const isExternal = notice.link?.startsWith("https://");
    const baseClass = "line-clamp-1 font-normal text-xs font-mono select-none text-neutral-400 hover:text-neutral-100 transition-all duration-300 ease-out";

    if (isExternal) {
        return (
            <a href={notice.link} target="_blank" rel="noopener noreferrer" className={`${baseClass} hover:underline`}>
                {notice.text}
            </a>
        );
    }
    if (notice.link) {
        return (
            <Link to={notice.link} className={`${baseClass} hover:underline`}>
                {notice.text}
            </Link>
        );
    }
    return <span className={`${baseClass}`}>{notice.text}</span>;
}