import { useState, useEffect } from "react";

export function useDebounce (search: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState("");

    useEffect(() => {   
        const handler = setTimeout(() => {
            setDebouncedValue(search);
        }, delay);

        return () => {
            clearTimeout(handler);
        }
    }, [search]);

    return debouncedValue;
}