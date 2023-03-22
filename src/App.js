import './App.css';
import Contries from './Components/Contries/Contries';

function App() {
  return (
    <div className="App">
      <Contries></Contries>
    </div>
  );
}





/* function Loadcontries(){
  //s
  const [contries, setContries] = useState([]);

  useEffect( () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setContries(data))
    
  }, [])

  return(
    <div>
      <h1>Visiting all contries With react ancel...!</h1>
      {
        contries.map(contrie =><Contry name={contrie.name.common} population={contrie.population}></Contry>)
      }
    </div>
  )
}

function Contry(props){
  return(
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Population: {props.population}</h3>
    </div>
  )
} */
export default App;
