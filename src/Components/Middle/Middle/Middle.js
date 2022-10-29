import "./Middle.css";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";

export default function Middle() {
    return <div className={"middle"}>
        <h1>Dashboard</h1>
        <Cards/>
        <Table/>
    </div>
}