
import Chart from "react-apexcharts";

export default function Review() {
    const data = {
        series: [
            {
                name: "Review",
                data: [10, 34, 56, 45, 112, 99],
            },
        ],
        options: {
            chart: {
                type: "area",
                height: "auto",
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
                colors: ["#ff929f"]
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                },
            },
            grid: {
                show: false
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
            yaxis: {
                show: false
            },
            toolbar: {
                show: false
            },

        }
    }
    return <div style={{marginTop:"1rem"}}>
        <Chart series={data.series} options={data.options} type={"area"}/>
    </div>
}