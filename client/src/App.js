import RegistrationForm from "./components/RegisterationForm";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./components/Login";
import "./App.css";
import Connected from "./components/Connected";
import Disconnected from "./components/Disconnected";

function App() {
  return(
      <Router>
        <Routes>
          <Route path="/RegistrationForm" element={<RegistrationForm />}/>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/connected" element={<Connected />}/>
          <Route path="/disconnected" element={<Disconnected />}/>
        </Routes>
    </Router>
    )
}
export default App;
