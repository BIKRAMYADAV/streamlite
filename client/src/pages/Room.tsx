import React from 'react'
import { useSocket } from '../contexts/SocketProvider'
function Room() {
  const socket = useSocket();
  return (
    <div>Room</div>
  )
}

export default Room