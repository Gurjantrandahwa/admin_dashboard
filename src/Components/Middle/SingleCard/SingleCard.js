import "./SingleCard.css";
import {motion, AnimateSharedLayout} from "framer-motion";
import {useState} from "react";
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {AiOutlineClose} from "react-icons/ai";
import Chart from "react-apexcharts";


export default function SingleCard(props) {

    const [expanded, setExpanded] = useState(false)
    return <AnimateSharedLayout>
        {
            expanded ? <ExpandedCard param={props} setExpanded={() => setExpanded(false)}/> :
                <CompactCard param={props} setExpanded={() => setExpanded(true)}/>
        }
    </AnimateSharedLayout>
}

function CompactCard({param, setExpanded}) {
    return <motion.div className={"compact-card"}
                layoutId={'expandableCard'}
                style={{
                    background: param.color.background,
                    boxShadow: param.color.boxShadow
                }}
                onClick={setExpanded}>
        <div className={"radial-bar"}>
            <CircularProgressbar value={param.barValue}
                                 text={`${param.barValue}%`}/>
            <span>{param.title}</span>
        </div>
        <div className={"detail"}>
            {param.png}
            <span>${param.amount}</span>
            <span>Last 24 Hours</span>
        </div>

    </motion.div>
}


function ExpandedCard({param, setExpanded}) {

    const data = {
        options: {
            chart: {
                type: "area",
                height: "auto",
            },
            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35,
            },
            fill: {
                colors: ["#fff"],
                type: "gradient"
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["white"]
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                },
            },
            grid: {
                show: true
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2022-10-19T00:00:00.000Z",
                    "2022-10-19T01:00:00.000Z",
                    "2022-10-19T02:00:00.000Z",
                    "2022-10-19T03:00:00.000Z",
                    "2022-10-19T04:00:00.000Z",
                    "2022-10-19T05:00:00.000Z",
                    "2022-10-19T06:00:00.000Z",
                ],
            },

        }
    }
    return <motion.div className={"expanded-card"}
                       style={{
                           background: param.color.background,
                           boxShadow: param.color.boxShadow
                       }}
                       layoutId={'expandableCard'}
    >
        <div className={"close-button"}>
            <AiOutlineClose  onClick={setExpanded}/>
        </div>
        <span>{param.title}</span>
        <div className={"chart-container"}>
            <Chart series={param.series} type={'area'} options={data.options}/>
        </div>
        <span>Last 24 Hours</span>

    </motion.div>
}