
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path='/'/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
