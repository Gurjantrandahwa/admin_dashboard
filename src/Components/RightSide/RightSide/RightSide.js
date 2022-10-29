import "./RightSide.css";
import Update from "../Updates/Update";
import Review from "../Review/Review";

export default function RightSide() {
    return <div className={"right-side"}>
        <div>
            <h3>Updates</h3>
            <Update/>
        </div>
        <div>
            <h3 style={{marginTop:"0.5rem"}}>Customer Review</h3>
            <Review/>
        </div>
    </div>
}