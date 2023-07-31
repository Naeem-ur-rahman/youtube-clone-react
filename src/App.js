import { useState } from 'react';
import './App.css';
import { HEADER } from './components';
import Main from './components/Main';

function App() {
  const [menuClick, setMenuClick] = useState(true);

  const toggleMenuClick = () => {
    setMenuClick(!menuClick)
  }

  const [query, setQuery] = useState('');

  const getQuery = (q) => {
    setQuery(q)
  }
  console.log(query + ' From App')

  return (
    <div className='App'>
      <HEADER toggleMenuClick={toggleMenuClick} getQuery={getQuery} />
      <Main menuClick={menuClick} toggleMenuClick={toggleMenuClick} query={query} />
    </div>
  );
}

export default App;
