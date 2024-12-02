import { useState } from "react"
import { useDebounce } from "../custom-hooks/useDebounce";

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