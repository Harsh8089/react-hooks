import { useEffect, useState } from "react"

const useFetch = (todo: number) => {
    const [loader, setLoader] = useState<boolean>(false);
    const [response, setResponse] = useState({});
    const [error, setError] = useState();

    useEffect(() => {
        setLoader(true);
        fetch(`https://jsonplaceholder.typicode.com/todos/${todo}`)
        .then(data => data.json())
        .then(res => setResponse(res))
        .catch(err => setError(err));
        setLoader(false);
    }, [todo]   );

    return { loader, response, error };
}

export default useFetch