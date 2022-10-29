import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Middle from "./Components/Middle/Middle/Middle";
import RightSide from "./Components/RightSide/RightSide/RightSide";

function App() {
    return <div className={"app"}>
        <div className={"app-glass"}>

            <Sidebar/>
            <Middle/>
            <RightSide/>
        </div>
    </div>
}

export default App;
