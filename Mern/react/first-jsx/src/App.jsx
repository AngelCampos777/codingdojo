// import logo from './logo.svg';
import './App.css';
import First from './components/First';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>React test</h1>
      <h2>The 5 D's of Dodgeball</h2>
      <ul class="new">
        <li>Dodge</li>
        <li>Duck</li>
        <li>Dip</li>
        <li>Dive</li>
        <li>Dodge</li>
      </ul>
      <p class="App-link">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum recusandae deleniti quaerat voluptate ea autem odit optio consectetur similique, officia iure, at unde. Llama distinctio modi ipsum eligendi aut ratione necessitatibus?</p>
      <First fullName ="Llama" counter={0}/>
      <First fullName ="Gavina" counter={0}/>
      </header>
    </div>
  );
}

export default App;
