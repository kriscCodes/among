import { Routes, Route} from 'react-router-dom'
import Create from './Create.jsx'
import Gallery from './Gallery.jsx'
import Home from './Home.jsx'
import Sidebar from './Sidebar.jsx'
import './App.css'

function App() {

  return (
    <>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />}/>
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  )
}

export default App
