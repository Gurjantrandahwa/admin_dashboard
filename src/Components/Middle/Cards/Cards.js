import "./Cards.css";
import {AiOutlineDollar} from "react-icons/ai";
import SingleCard from "../SingleCard/SingleCard";
import {TbClipboardText} from "react-icons/tb";
import {CiMoneyCheck1} from "react-icons/ci";

export default function Cards() {
    return <div className={"cards"}>
        {
            [
                {
                    title: "Sales",
                    color: {
                        background: "linear-gradient(rgb(175 0 167) 0%, rgb(196, 132, 243) 100%)",
                        boxShadow: "0 10px 20px 0 #e0c6f5",
                    },
                    barValue: 85,
                    amount: "24,450",
                    png: <AiOutlineDollar/>,
                    series: [
                        {
                            name: "Sales",
                            data: [32, 34, 26, 54, 45, 110, 98],
                        },
                    ],

                },
                {
                    title: "Revenue",
                    color: {
                        background: "linear-gradient(rgb(219 11 19) 0%, rgb(252, 146, 157) 100%)",
                        boxShadow: "0 10px 20px 0 #FDC0C7",
                    },
                    barValue: 67,
                    amount: "14,850",
                    png: <CiMoneyCheck1/>,
                    series: [
                        {
                            name: "Sales",
                            data: [10, 45, 16, 104, 105, 40, 30],
                        },
                    ],

                },
                {
                    title: "Expenses",
                    color: {

                        background: "linear-gradient(#0a41ed 0%, rgb(157 182 250) 100%)",
                        boxShadow: "0 10px 20px 0 rgb(186 204 255)",
                    },
                    barValue: 75,
                    amount: "24,450",
                    png: <TbClipboardText/>,
                    series: [
                        {
                            name: "Sales",
                            data: [32, 34, 26, 54, 45, 110, 98],
                        },
                    ],

                },
            ].map((card, id) => {
                return <div key={id} className={"single-card-container"}>
                    <SingleCard
                        title={card.title}
                        color={card.color}
                        barValue={card.barValue}
                        amount={card.amount}
                        png={card.png}
                        series={card.series}
                    />
                </div>
            })
        }
    </div>
}