import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Piece from './components/Piece';
import Hand from "./components/Hand"
import Board from "./components/Board"
import data from "./card-data.json";

function App() {
    const data1 = data.cards
    return (
        <div className="App">
            hi
            <Board />
            <Board />
            <Piece />
            <Hand hand={data1}/>
        </div>
    );
}

export default App;
