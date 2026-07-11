import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
