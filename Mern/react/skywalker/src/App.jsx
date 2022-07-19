import './App.css';
import People from './components/People';
import Planet from './components/Planet';
import Search from './components/Search';
import { Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react';

function App() {
  // const [ask, setAsk] = useState({});
  // const addAsk = query => {
  //   setAsk(query);
  // } newAsk={addAsk}
  return (
    <div className="App">
      <Search/>
      <h1><Link to={"/people/1"}>People</Link> | <Link to={"/planet/1"}>Planet</Link></h1>
      <Routes>
        <Route path="/people/:id"  element={<People/>} />
        <Route path="/planet/:id"  element={<Planet/>} />
      </Routes>
    </div>
  );
}

export default App;
