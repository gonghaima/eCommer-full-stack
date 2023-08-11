import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
