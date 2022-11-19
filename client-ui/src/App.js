import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Welcome from "./component/Welcome";
import Login from "./component/Login";
import Register from "./component/Register";

function App() {
  return (
      <BrowserRouter>
        <div>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
