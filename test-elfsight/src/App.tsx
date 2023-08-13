import { MainPage } from "./pages";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route element={<MainPage />} path='/:page'/>
        <Route element={<MainPage />} path='*'/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
