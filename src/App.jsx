import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/Vans/VanDetail"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import Layout from "./components/Layout"

function App() {
  return (
    <BrowserRouter>
    <Routes> 
      <Route element={<Layout />}>
      <Route path="/" element={<Home />}/>
      <Route path="/About" element={< About />}/>
      <Route path="/Vans" element={ <Vans />}/>
      <Route path="/Vans/:id" element={<VanDetail />}/>
      <Route path="/host" element={ <Dashboard />}> 
      <Route path="/host/income" element={ <Income/>}/>
      <Route path="/host/reviews" element={ <Reviews />}/>
    </Route>
    </Route>
    
    </Routes>
    </BrowserRouter>
  )
}

/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */
export default App
// ReactDOM
// .createRoot(document.getElementById('root'))
// .render(<App/>);
