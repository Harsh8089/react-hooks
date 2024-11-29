import { useState } from "react";
import useFetch from "../custom-hooks/useFetch";

const App = () => {
  const [todo, setTodo] = useState<number>(0);
  const { loader, response, error } = useFetch(todo);

  return (
    <div>
        <div>
            <button  onClick={() => {
                if(todo > 0) setTodo(prevTodo => prevTodo - 1)
            }}>
                Prev
            </button>
            <button onClick={() => setTodo(prevTodo => prevTodo + 1)}>Next</button>
        </div>
        <div>
            {
                loader ? (
                    <div>Loading ...</div>
                ) : 
                error ? (
                    <div>{error}</div>
                ) : (
                    <div>{JSON.stringify(response)}</div>
                )
            }
        </div>
    </div>
  )
}

export default App;
