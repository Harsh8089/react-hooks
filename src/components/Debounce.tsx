import { useEffect, useState } from "react"

function useDebounce (search: string, delay: number) {
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

const Debounce = () => {
    const [search, setSearch] = useState("");

    const debouncedValue = useDebounce(search, 3000);

  return (
    <div>
        <input 
            type="text"
            placeholder="Type something"
            onChange={(e) => setSearch(e.target.value)}
        />
        <div>
            {debouncedValue}
        </div>
    </div>
  )
}

export default Debounce