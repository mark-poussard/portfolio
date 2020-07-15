import { useState, useEffect, useCallback } from "react"

export const useMousePosition = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const mouseMoveUpdate = useCallback((event: MouseEvent) => {
        setX(event.clientX);
        setY(event.clientY);
    }, []);
    useEffect(() => {
        document.addEventListener('mousemove', mouseMoveUpdate, false);
        return () => document.removeEventListener('mousemove', mouseMoveUpdate, false);
    }, []);
    return {
        x, y
    }
}