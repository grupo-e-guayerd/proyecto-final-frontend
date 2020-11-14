import './App.css';
import NavBar from "./NavBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import CardList from "./CardList/CardList";


function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <CardList />
            </Router>
        </div>
    );
}

export default App;
