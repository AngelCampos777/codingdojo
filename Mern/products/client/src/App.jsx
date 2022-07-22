import './App.css';
import ReadAll from './components/ReadAll';
import ReadOne from './components/ReadOne';
import AddForm from './components/AddForm';
import UpdateForm from './components/UpdateForm';
import { Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>good luck</h1>
      <h1><Link to={"/"}>Home</Link> | <Link to={"/add"}>Add</Link></h1>
      <Routes>
        <Route path='/' element={<ReadAll />} />
        <Route path='/add' element={<AddForm />} />
        <Route path='/update/:_id' element={<UpdateForm />} />
        <Route path='/products/:_id' element={<ReadOne />} />
      </Routes>
    </div>
  );
}

export default App;
