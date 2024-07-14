import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { SuggestionsPage } from "./pages/Suggestion/SuggestionsPage";
import './App.css'
import { AddFeed } from "./pages/addFeed/AddFeed";
import { Single } from "./pages/single/Single";
import { useState } from "react";
import Login from "./components/login/Login";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login  setAuth = {setIsAuthenticated}/>} />
        <Route path="/" element={isAuthenticated ? <SuggestionsPage /> : <Navigate to="/login" /> } />
        <Route path="/add-feedback" element={ isAuthenticated ?  <AddFeed/> : <Navigate to="/login" />} />
        <Route path="/single/:id" element={ isAuthenticated ?  <Single/> : <Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
