import logo from './logo.svg';
import './App.css';
import { getDatabase, query, ref, orderByChild, limitToFirst } from "firebase/database";
// import { firebaseApp } from "./firebase.js"


function App() {
  var db = getDatabase()
  const topScores = query(ref(db, 'users'), orderByChild('scores'), limitToFirst(10));
  console.log(topScores)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

export default App;
