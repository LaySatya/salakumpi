import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Options from './pages/options';
import Questions from './pages/questions';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/options" element={<Options />} />
          <Route path="/questions/:type" element={<Questions />} />
      </Routes>
    </Router>
  );
}

export default App;
