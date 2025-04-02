import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>App Page</h1>
      <Link to='/contact'>Contact</Link>
      <Outlet/>
    </div>
  );
}

export default App;
