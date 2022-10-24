import { Route, Routes } from 'react-router-dom';
import './App.css';
import Adds from './components/Adds/Adds';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/adds" element={<Adds />} />
      </Routes>
    </div>
  );
}

export default App;
