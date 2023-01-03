import { useState } from 'react';
import './App.css';
import Index from './pages';
import Dashboard from './pages/dashboard';

const App = () => {
  const [screen_var, screen_func] = useState(false);
  return !screen_var? <Index screen_func={screen_func}/> : <Dashboard  screen_func={screen_func}/>
}

export default App;
