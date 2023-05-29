import Home from "./Components/pages/Home/Home";
import Login from "./Components/pages/Login/Login";
import Registration from "./Components/pages/Registration/Registration";
import { Route, Routes } from 'react-router-dom'
import ProtectedRoutes from "./Components/ProtectedRoutes";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/sign-up" element={<Registration />} />
        <Route path="/sign-in" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
