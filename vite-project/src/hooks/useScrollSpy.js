import { useEffect, useState } from "react";
import { sections } from "../data";
export function useScrollSpy() {
    const [state, setState] = useState({ progress: 0, active: "home" });
    useEffect(() => {
        let frame = 0;
        const update = () => {
            frame = 0;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const progress = max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0;
            const marker = window.innerHeight * 0.35;
            let active = "home";
            for (const { id } of sections) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= marker)
                    active = id;
            }
            setState({ progress, active });
        };
        const onScroll = () => { if (!frame)
            frame = requestAnimationFrame(update); };
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);
    return state;
}
