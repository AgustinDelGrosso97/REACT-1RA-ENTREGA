import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
    setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
        if(count <= 0){
            setCount(prev => prev + 1)
        }
        }
    return (
        <div>
            <h1 className="titulo">Proximo boton de sumar al carrito</h1>
            <h2>{count}</h2>
            <button onClick={decrement}>decrementar</button>
            <button onClick={increment}>incrementar</button>
        </div>
    )
}

export default Counter