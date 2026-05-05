import { useEffect, useState } from "react"
import { io } from "socket.io-client"

function App() {
  const [socket, setSocket] = useState()

  useEffect( () => {
    const newSocket = io("localhost:3000")

    return () => {
      newSocket.disconnect()
    }
  }, [] )

  return (
    <div>
      <form>
        <input type="text" placeholder="Escribe el mensaje"/>
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default App