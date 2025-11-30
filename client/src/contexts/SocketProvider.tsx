import { createContext, useContext, useMemo } from 'react'
import { io } from 'socket.io-client'

const SocketContext = createContext<any>(null)

export const SocketProvider = ({ children }: any) => {
  const socket = useMemo(() => io("http://localhost:8000"), [])
  return (
    <SocketContext value={socket}>
      {children}
    </SocketContext>
  )
}

export const useSocket = () => useContext(SocketContext)

