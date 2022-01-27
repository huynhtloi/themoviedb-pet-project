import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, List, Favorite } from './pages/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="movies" element={<List />} />
        <Route exact path="favorites" element={<Favorite />} />
      </Routes>
    </Router>
  );
}

export default App;
