import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
function Lobby() {
  const navigate = useNavigate()
  const [roomId, setRoomId] = useState("1");

  console.log('The room id: ',roomId)

  const handleSubmit = (e:any) => {
    e.preventDefault();
    navigate(`/room/${roomId}`);
  }

  const handleChange = (e:any) => {
    setRoomId(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Enter Email</h1>
        <input type="email" />
        <h2>Enter room</h2>
        <input type="text" value={roomId} onChange={handleChange}/>
        <button>enter</button>
    </form>
  )
}

export default Lobby