
import Footer  from "./components/footer/Footer.jsx"
import Navbar from "./components/navbar/Navbar.jsx"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Create from "./pages/user/Create"; 
export default function App() {
  return (
 <>
 <Navbar />

<Routes>
  <Route path='/' element={<Home />}> </Route>
    <Route path='/users' element={<Home />}> </Route>
  <Route path='/add' element={<Create />}> </Route>

  <Route path='/about' element={<About />}> </Route>

</Routes>


 <Footer />
 
 
 </>
  )
}
