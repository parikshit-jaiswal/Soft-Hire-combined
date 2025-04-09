import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Resources1 from "./pages/Resources1"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/r1" element={<Resources1 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
