import { render } from 'react-dom';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Builder } from './components/Builder';
import './styles.css';

render(
  <Router>
    <Routes>
      <Route path="/" element={<Builder />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
