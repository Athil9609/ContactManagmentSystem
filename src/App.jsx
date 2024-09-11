import { Route,Routes } from "react-router-dom"
import Landing from "./Pages/Landing"
import Home from "./Pages/Home"
import '../src/bootstrap.min.css'
import './App.css'
import './index.css'
import Header from "./Components/Header"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
          <Header/>

    <Routes>

      <Route path="/" element={<Landing/>}/>
      <Route path="/home" element={<Home/>}/>
      
    </Routes>
    <ToastContainer/>
     
    </>
  )
}

export default App
