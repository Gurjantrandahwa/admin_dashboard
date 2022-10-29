import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Middle from "./Components/Middle/Middle/Middle";

function App() {
    return <div className={"app"}>
        <div className={"app-glass"}>

            <Sidebar/>
            <Middle/>
            <div>right</div>
        </div>
    </div>
}

export default App;
