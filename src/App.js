import { useState } from 'react';
import './App.css';
import { HEADER } from './components';
import Main from './components/Main';

function App() {
  const [menuClick, setMenuClick] = useState(true);

  const toggleMenuClick = () => {
    setMenuClick(!menuClick)
  }

  const [logoClick, setLogoClick] = useState(false);
  const getLogoClick = (value) => {
    setLogoClick(value)
  }

  const [query, setQuery] = useState('');

  const getQuery = (q) => {
    setQuery(q)
  }
  console.log(query + ' From App')

  return (
    <div className='App'>
      <HEADER toggleMenuClick={toggleMenuClick} getQuery={getQuery} getLogoClick={getLogoClick} />
      <Main menuClick={menuClick} toggleMenuClick={toggleMenuClick} query={query} logoClick={logoClick} />
    </div>
  );
}

export default App;
