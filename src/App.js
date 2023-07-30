import { useState } from 'react';
import './App.css';
import { HEADER } from './components';
import Main from './components/Main';

function App() {
  const [menuClick, setMenuClick] = useState(true);

  const toggleMenuClick = () => {
    setMenuClick(!menuClick)
  }

  return (
    <div className='App'>
      <HEADER toggleMenuClick={toggleMenuClick} />
      <Main menuClick={menuClick} toggleMenuClick={toggleMenuClick} />
    </div>
  );
}

export default App;
