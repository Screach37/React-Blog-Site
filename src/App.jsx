import {Routes, Route} from 'react-router-dom'
import { Navbar, Footer } from "./components";
import {Homepage, BlogContentPage, About, Contact} from './pages'

function App() {

  return (
    <>
      <div className="">
      <Routes>
          <Route path="/" element={<Homepage />}> </Route>
          <Route path="/blog/:id" element={<BlogContentPage />}> </Route>
          <Route path="/about" element={<About />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
