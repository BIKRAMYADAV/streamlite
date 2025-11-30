import Lobby from "./pages/Lobby"
import Room from "./pages/Room"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lobby/>} />
        <Route path="/room/:roomId" element={<Room/>} />
      </Routes>
    </Router>
  )
}

export default App
