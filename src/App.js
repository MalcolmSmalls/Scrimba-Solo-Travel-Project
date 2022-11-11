import './App.css';
import Header from './Components/Header.js'
import Entry from './Components/Entry.js'
import data from './data.js'

function App() {

  const dataArr = data.map (item => {
    return (
      <Entry key={item.id} item = {item} />
    )
  })
  return (
    <div className="App">
      <Header />
      <div className = "entries-container">
       {dataArr}
      </div>
    </div>
  );
}

export default App;
