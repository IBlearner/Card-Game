import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Piece from './components/Piece';
import Hand from "./components/Hand"
import data from "./card-data.json";

function App() {
    const data1 = data.cards
    return (
        <div className="App">
            hi
            <Piece />
            <Hand hand={data1}/>
        </div>
    );
}

export default App;
